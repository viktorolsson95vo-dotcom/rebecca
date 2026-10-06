import { cv } from '../data/cv'

export function Footer() {
  const year = new Date().getFullYear()
  const initials = cv.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      {/* Styled like the title block of a drawing */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-muted">
        <p>
          © {year} {cv.name}
        </p>
        <p>
          Drawn by {initials} · Rev. {year} · Scale 1:1
        </p>
      </div>
    </footer>
  )
}
