import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { id: 'about', label: 'About' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const { id } of links) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="no-print fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border-[3px] border-ink bg-card p-1.5 shadow-hard-sm">
        <a href="#top" className="grid size-10 place-items-center rounded-full bg-ink font-display text-lg font-extrabold text-bg" aria-label="Back to top">
          VL
        </a>
        <ul className="hidden items-center sm:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === l.id ? 'bg-blue text-cream' : 'hover:bg-lime hover:text-black'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-lime hover:text-black sm:hidden">
          Contact
        </a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
