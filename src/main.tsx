import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import './index.css'
import App from './App.tsx'
import type { Lang } from './data/cv'
import { LangProvider } from './i18n.tsx'

// Each page declares its language in <html lang> (index.html = sv, en/index.html = en)
const lang: Lang = document.documentElement.lang === 'en' ? 'en' : 'sv'
const root = document.getElementById('root')!

const app = (
  <StrictMode>
    <LangProvider lang={lang}>
      <App />
    </LangProvider>
  </StrictMode>
)

// Production pages are pre-rendered at build time (scripts/prerender.mjs), so hydrate them;
// in dev the root is empty and we render from scratch.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
