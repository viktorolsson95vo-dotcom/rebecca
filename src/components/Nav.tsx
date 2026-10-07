import { useEffect, useState } from 'react'
import { langPath, useLang } from '../i18n'
import type { Lang } from '../data/cv'

const ids = ['about', 'expertise', 'projects', 'experience', 'contact'] as const

function LangToggle({ section }: { section: string | null }) {
  const { lang, t } = useLang()
  const options: Lang[] = ['sv', 'en']
  return (
    <div role="group" aria-label={t.language} className="flex border border-line font-mono text-xs">
      {options.map((l) => (
        <a
          key={l}
          href={langPath[l]}
          hrefLang={l}
          lang={l}
          aria-current={lang === l ? 'page' : undefined}
          // Keep the visitor on the same section when switching language (the hash is removed again on load)
          onClick={(e) => {
            e.preventDefault()
            if (lang !== l) window.location.href = langPath[l] + (section ? `#${section}` : '')
          }}
          className={`grid h-9 w-10 place-items-center uppercase transition-colors ${
            lang === l ? 'bg-ink text-paper' : 'text-muted hover:text-ink'
          }`}
        >
          {l}
        </a>
      ))}
    </div>
  )
}

export function Nav() {
  const { cv, t } = useLang()
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false) // mobile menu

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      // Active = the last section whose top has passed 40% of the viewport
      const line = window.innerHeight * 0.4
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape, or when the viewport grows to desktop width
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 768px)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const link = (id: (typeof ids)[number], mobile = false) => (
    <a
      href={`#${id}`}
      aria-current={active === id ? 'true' : undefined}
      onClick={() => setOpen(false)}
      className={
        mobile
          ? `flex min-h-12 items-center justify-between border-b border-line text-lg ${active === id ? 'text-accent' : ''}`
          : `inline-flex h-9 items-center px-3 text-sm transition-colors ${active === id ? 'text-accent' : 'text-muted hover:text-ink'}`
      }
    >
      {t.nav[id]}
      {mobile && (
        <span className="font-mono text-xs text-muted" aria-hidden>
          {String(ids.indexOf(id) + 1).padStart(2, '0')}
        </span>
      )}
    </a>
  )

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-colors ${
        open ? 'border-b border-line bg-paper' : scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label={t.menu} className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="inline-flex h-11 items-center text-sm font-medium tracking-tight">
          {cv.name}
        </a>
        <div className="flex items-center gap-2">
          <ul className="hidden items-center md:flex">
            {ids.map((id) => (
              <li key={id}>{link(id)}</li>
            ))}
          </ul>
          <LangToggle section={active} />
          <button
            type="button"
            className="grid size-11 place-items-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.closeMenu : t.menu}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="mx-auto max-w-6xl px-5 pb-6 sm:px-8 md:hidden">
          {ids.map((id) => (
            <li key={id}>{link(id, true)}</li>
          ))}
        </ul>
      )}
    </header>
  )
}
