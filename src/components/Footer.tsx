import { builtBy } from '../data/cv'
import { useLang } from '../i18n'

export function Footer() {
  const { cv, t } = useLang()
  const year = new Date().getFullYear()
  const initials = cv.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      {/* Styled like the title block of a drawing */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-muted">
        <p suppressHydrationWarning>
          © {year} {cv.name}
        </p>
        <p suppressHydrationWarning>
          {t.drawnBy} {initials} · Rev. {year} · {t.scale} 1:1
        </p>
      </div>

      <div className="mx-auto mt-6 max-w-6xl border-t border-line pt-4 font-mono text-xs uppercase tracking-wider text-muted">
        <p>
          {t.builtBy}{' '}
          {/* Plain followed link (no nofollow/noreferrer) so it counts as a backlink and shows up as a referral */}
          <a
            href={builtBy.url}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-8 items-center gap-1 text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            {builtBy.name}
            <span aria-hidden>↗</span>
          </a>
        </p>
      </div>
    </footer>
  )
}
