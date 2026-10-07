import { useState } from 'react'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Contact() {
  const { cv, t } = useLang()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(cv.contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${cv.contact.email}`
    }
  }

  return (
    <Section id="contact" index="05" title={t.sections.contact}>
      <Reveal className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="max-w-lg text-lg text-muted">
            {t.contactBlurb}
          </p>
          <a
            href={`mailto:${cv.contact.email}`}
            className="mt-6 inline-block text-[clamp(1.25rem,6vw,3rem)] font-medium tracking-tight [overflow-wrap:anywhere] underline decoration-line decoration-1 underline-offset-[0.25em] transition-colors hover:decoration-accent"
          >
            {cv.contact.email}
          </a>
          <div className="no-print mt-8">
            <button type="button" onClick={copyEmail} className="btn-ghost" aria-live="polite">
              {copied ? t.copied : t.copyEmail}
            </button>
          </div>
        </div>

        <ul className="space-y-1 md:text-right">
          {cv.contact.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noreferrer" className="link inline-flex min-h-11 items-center">
                {l.label} ↗
              </a>
            </li>
          ))}
          {cv.contact.cvPdf && (
            <li>
              <a href={cv.contact.cvPdf} download className="link inline-flex min-h-11 items-center">
                {t.downloadCvPdf}
              </a>
            </li>
          )}
        </ul>
      </Reveal>
    </Section>
  )
}
