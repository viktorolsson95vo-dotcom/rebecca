import { useEffect, useState } from 'react'
import { cv } from '../data/cv'

const links = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      // Active = the last section whose top has passed 40% of the viewport
      const line = window.innerHeight * 0.4
      let current: string | null = null
      for (const { id } of links) {
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
        <ul className="flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id} className={l.id === 'contact' ? '' : 'hidden md:block'}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`px-3 py-2 text-sm transition-colors ${active === l.id ? 'text-accent' : 'text-muted hover:text-ink'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
