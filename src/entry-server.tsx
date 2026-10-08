// Server entry used only at build time by scripts/prerender.mjs to produce static HTML per language.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { builtBy, content, type Lang } from './data/cv'
import { LangProvider, langPath } from './i18n'

export const SITE = 'https://www.lesenius.se'
export const langs: Lang[] = ['sv', 'en']
export const pageUrl = (lang: Lang) => SITE + langPath[lang]

export function render(lang: Lang) {
  return renderToString(
    <StrictMode>
      <LangProvider lang={lang}>
        <App />
      </LangProvider>
    </StrictMode>,
  )
}

/** schema.org structured data (Person + ProfilePage + WebSite) for search engines and AI answer engines. */
export function jsonLd(lang: Lang, dateModified: string) {
  const cv = content[lang]
  const personId = `${SITE}/#person`
  const [givenName, ...rest] = cv.name.split(' ')
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: cv.name,
        inLanguage: langs,
        publisher: { '@id': personId },
        creator: { '@type': 'Organization', name: builtBy.name, url: builtBy.url },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl(lang)}#profilepage`,
        url: pageUrl(lang),
        name: `${cv.name} – ${cv.title}`,
        description: cv.intro,
        inLanguage: lang,
        isPartOf: { '@id': `${SITE}/#website` },
        mainEntity: { '@id': personId },
        dateModified,
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: cv.name,
        givenName,
        familyName: rest.join(' '),
        jobTitle: cv.title,
        description: cv.intro,
        url: pageUrl(lang),
        image: cv.photo ? SITE + cv.photo : undefined,
        email: `mailto:${cv.contact.email}`,
        address: { '@type': 'PostalAddress', addressRegion: 'Skåne', addressCountry: 'SE' },
        // Rebecca's employer; client roles (Tetra Pak etc.) are assignments via Sigma
        worksFor: cv.experience[0]?.via ? { '@type': 'Organization', name: cv.experience[0].via } : undefined,
        hasOccupation: {
          '@type': 'Occupation',
          name: cv.title,
          occupationLocation: { '@type': 'AdministrativeArea', name: 'Skåne' },
          skills: cv.expertise.flatMap((g) => g.items).join(', '),
        },
        // Only universities count as alumniOf (the Sigma programme is company training)
        alumniOf: cv.education
          .filter((e) => /univers/i.test(e.school))
          .map((e) => ({ '@type': 'CollegeOrUniversity', name: e.school })),
        knowsAbout: cv.expertise.flatMap((g) => g.items),
        knowsLanguage: ['sv', 'en', 'fr'],
        memberOf: cv.engagements
          .filter((g) => /present|nuvarande/i.test(g.period))
          .map((g) => ({ '@type': 'Organization', name: g.org })),
        sameAs: cv.contact.links.map((l) => l.href),
      },
    ],
  }
}

/** /llms.txt — a plain Markdown summary for AI assistants and answer engines. */
export function llmsTxt() {
  const cv = content.en
  const lines = [
    `# ${cv.name}`,
    '',
    `> ${cv.name} — ${cv.title}, ${cv.location}.`,
    '',
    cv.intro,
    '',
    `- English CV: ${pageUrl('en')}`,
    `- Swedish CV (primary): ${pageUrl('sv')}`,
    `- Email: ${cv.contact.email}`,
    ...cv.contact.links.map((l) => `- ${l.label}: ${l.href}`),
    '',
    '## Experience',
    ...cv.experience.map(
      (r) => `- ${r.title}, ${r.company}${r.via ? ` (consultant via ${r.via})` : ''}${r.location ? `, ${r.location}` : ''} — ${r.period}`,
    ),
    '',
    '## Selected work',
    ...cv.work.map((w) => `- ${w.name} (${w.context}, ${w.period}): ${w.summary}`),
    '',
    '## Expertise',
    ...cv.expertise.map((g) => `- ${g.title}: ${g.items.join(', ')}`),
    '',
    '## Education',
    ...cv.education.map((e) => `- ${e.degree}, ${e.school} (${e.period})`),
    '',
    '## Languages',
    `- ${cv.languages}`,
    '',
    `Website built and maintained by ${builtBy.name} (${builtBy.url}).`,
    '',
  ]
  return lines.join('\n')
}


