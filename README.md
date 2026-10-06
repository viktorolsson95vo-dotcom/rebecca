# lesenius.se

A one-page CV built with Vite, React, TypeScript, Tailwind CSS v4 and Motion, hosted on Vercel.

## Edit content

All text lives in **[`src/data/cv.ts`](src/data/cv.ts)**: name, rotating roles, about, highlights, skills, experience, education and contact.
- Photo: put `viktor.jpg` in `public/` and set `photo: '/viktor.jpg'`.
- CV PDF: put `cv.pdf` in `public/` and set `contact.cvPdf: '/cv.pdf'` (a download button appears).
- Social image: add `public/og-image.png` (1200×630).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. vercel.com → **Add New → Project** → import the repo. Vercel detects the Vite preset (build `npm run build`, output `dist`), so just press Deploy.
3. **Domains** (project sidebar) → **Add Existing** → `lesenius.se` with "Redirect apex domains to www" checked. `www.lesenius.se` is the primary domain; `lesenius.se` redirects to it.

## DNS at Inleed

Go to Inleed control panel → Domains → lesenius.se → DNS and set:

| Type  | Name / Host | Value                   |
|-------|-------------|-------------------------|
| A     | `@`         | `76.76.21.21`           |
| CNAME | `www`       | `cname.vercel-dns.com.` |

- If Vercel's Domains page shows **different, project-specific values**, use those.
- **Delete** Inleed's default A/AAAA/CNAME records for `@` and `www`. A leftover AAAA record will break SSL/routing.
- **Keep** MX/TXT records if you use email on the domain.
- If there is a CAA record, add `0 issue "letsencrypt.org"`.

Propagation takes minutes to a few hours. Vercel issues HTTPS automatically once the records validate.

Verify:

```bash
nslookup lesenius.se
nslookup www.lesenius.se
curl -sI https://lesenius.se
```

`lesenius.se` should resolve to `76.76.21.21`, and `https://lesenius.se` should redirect to `https://www.lesenius.se/`.
