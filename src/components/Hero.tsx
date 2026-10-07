import { useLang } from '../i18n'
import { Drawing } from './Drawing'

export function Hero() {
  const { cv, t } = useLang()
  return (
    <section id="top" className="grid-paper relative border-b border-line px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="label">
            {cv.title} · {cv.location}
          </p>
          <h1 className="mt-5 text-5xl font-medium leading-[1.02] tracking-[-0.025em] sm:text-7xl">{cv.name}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{cv.intro}</p>

          <div className="no-print mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              {t.getInTouch}
            </a>
            {cv.contact.cvPdf ? (
              <a href={cv.contact.cvPdf} download className="btn-ghost">
                {t.downloadCv}
              </a>
            ) : (
              <a href="#projects" className="btn-ghost">
                {t.viewWork}
              </a>
            )}
          </div>

          {cv.available && (
            <p className="mt-10 flex items-center gap-2.5 text-sm text-muted">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              {t.openToWork}
            </p>
          )}
        </div>

        <Drawing className="mx-auto hidden w-full max-w-md text-ink/80 sm:block" />
      </div>
    </section>
  )
}
