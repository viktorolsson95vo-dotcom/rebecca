import { createContext, useContext, type ReactNode } from 'react'
import { content, type CV, type Lang } from './data/cv'

// Interface text (headings, buttons, labels). CV content lives in data/cv.ts.
const ui = {
  en: {
    skip: 'Skip to content',
    language: 'Language',
    menu: 'Menu',
    closeMenu: 'Close menu',
    nav: { about: 'About', expertise: 'Expertise', projects: 'Work', experience: 'Experience', contact: 'Contact' },
    getInTouch: 'Get in touch',
    viewWork: 'View my work',
    downloadCv: 'Download CV',
    openToWork: 'Open to new opportunities',
    sections: { about: 'About', expertise: 'Expertise', work: 'Selected work', experience: 'Experience', contact: 'Contact' },
    portraitOf: 'Portrait of',
    consultantVia: 'Consultant via',
    education: 'Education',
    engagements: 'Positions of trust',
    languages: 'Languages',
    contactBlurb: 'Interested in working together, or have a question about a project? Get in touch.',
    copyEmail: 'Copy email',
    copied: 'Copied',
    downloadCvPdf: 'Download CV (PDF)',
    drawnBy: 'Drawn by',
    scale: 'Scale',
  },
  sv: {
    skip: 'Hoppa till innehållet',
    language: 'Språk',
    menu: 'Meny',
    closeMenu: 'Stäng menyn',
    nav: { about: 'Om mig', expertise: 'Kompetenser', projects: 'Arbete', experience: 'Erfarenhet', contact: 'Kontakt' },
    getInTouch: 'Kontakta mig',
    viewWork: 'Se mitt arbete',
    downloadCv: 'Ladda ner CV',
    openToWork: 'Öppen för nya möjligheter',
    sections: { about: 'Om mig', expertise: 'Kompetenser', work: 'Utvalt arbete', experience: 'Erfarenhet', contact: 'Kontakt' },
    portraitOf: 'Porträtt av',
    consultantVia: 'Konsult via',
    education: 'Utbildning',
    engagements: 'Förtroendeuppdrag',
    languages: 'Språk',
    contactBlurb: 'Intresserad av att samarbeta, eller har du en fråga om ett projekt? Hör av dig.',
    copyEmail: 'Kopiera e-post',
    copied: 'Kopierad',
    downloadCvPdf: 'Ladda ner CV (PDF)',
    drawnBy: 'Ritad av',
    scale: 'Skala',
  },
} satisfies Record<Lang, unknown>

// Each language is its own page: Swedish (primary) at /, English at /en.
export const langPath: Record<Lang, string> = { sv: '/', en: '/en' }

type LangContext = { lang: Lang; cv: CV; t: (typeof ui)['en'] }

const Ctx = createContext<LangContext | null>(null)

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <Ctx.Provider value={{ lang, cv: content[lang], t: ui[lang] }}>{children}</Ctx.Provider>
}

export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
