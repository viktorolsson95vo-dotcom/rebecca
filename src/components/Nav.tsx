import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import type { Lang } from '../data/cv'

const ids = ['about', 'expertise', 'projects', 'experience', 'contact'] as const

function LangToggle() {
  const { lang, setLang, t } = useLang()
  const options: Lang[] = ['en', 'sv']
  return (
    <div role="group" aria-label={t.language} className="ml-2 flex border border-line font-mono text-xs">
      {options.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={`px-2 py-1 uppercase transition-colors ${lang === l ? 'bg-ink text-paper' : 'text-muted hover:text-ink'}`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Nav() {
  const { cv, t } = useLang()
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm font-medium tracking-tight">
          {cv.name}
        </a>
        <div className="flex items-center">
          <ul className="flex items-center gap-1">
            {ids.map((id) => (
              <li key={id} className={id === 'contact' ? '' : 'hidden md:block'}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`px-3 py-2 text-sm transition-colors ${active === id ? 'text-accent' : 'text-muted hover:text-ink'}`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <LangToggle />
        </div>
      </nav>
    </header>
  )
}
