// Runs after `vite build` + `vite build --ssr`: writes the rendered page into each language's HTML,
// adds JSON-LD structured data, and generates sitemap.xml and llms.txt.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { jsonLd, langs, llmsTxt, pageUrl, render } from '../dist-ssr/entry-server.js'

const today = new Date().toISOString().slice(0, 10)
const files = { sv: 'dist/index.html', en: 'dist/en/index.html' }

for (const lang of langs) {
  const file = files[lang]
  let html = readFileSync(file, 'utf8')
  if (!html.includes('<div id="root"></div>')) throw new Error(`No empty #root in ${file}`)
  // "<" escaped so the JSON can never close the script tag early
  const ld = JSON.stringify(jsonLd(lang, today)).replace(/</g, '\u003c')
  html = html
    .replace('<div id="root"></div>', `<div id="root">${render(lang)}</div>`)
    .replace('</head>', `  <script type="application/ld+json">${ld}</script>\n  </head>`)
  writeFileSync(file, html)
  console.log(`prerendered ${file}`)
}

const alternates = langs
  .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${pageUrl(l)}"/>`)
  .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl('sv')}"/>`)
  .join('\n')
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${langs.map((l) => `  <url>\n    <loc>${pageUrl(l)}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`).join('\n')}
</urlset>
`,
)
writeFileSync('dist/llms.txt', llmsTxt())
rmSync('dist-ssr', { recursive: true, force: true })
console.log('wrote sitemap.xml, llms.txt')
