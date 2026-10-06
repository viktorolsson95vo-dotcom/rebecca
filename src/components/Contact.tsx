import { motion } from 'motion/react'
import { useState } from 'react'
import { cv } from '../data/cv'
import { Reveal } from './Reveal'

export function Contact() {
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
    <section id="contact" className="px-4 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="sticker relative overflow-hidden bg-blue p-8 text-cream shadow-hard-lg sm:p-14">
          <motion.div
            aria-hidden
            className="absolute -right-16 -top-16 size-64 rounded-full border-[3px] border-ink bg-lime"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute left-10 top-1/2 font-display text-5xl text-black">✦</span>
          </motion.div>

          <h2 className="relative font-display font-extrabold leading-[0.85] tracking-tight" style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}>
            Let&apos;s
            <br />
            talk<span className="text-lime">.</span>
          </h2>
          <p className="relative mt-6 max-w-lg text-xl">
            Got a role, a project or just a good idea? My inbox is open.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center gap-4">
            <a href={`mailto:${cv.contact.email}`} className="btn break-all bg-lime text-black">
              {cv.contact.email}
            </a>
            <button type="button" onClick={copyEmail} className="btn no-print bg-cream text-black" aria-live="polite">
              {copied ? 'Copied ✓' : 'Copy email'}
            </button>
            {cv.contact.cvPdf && (
              <a href={cv.contact.cvPdf} download className="btn no-print bg-tangerine text-black">
                Download CV ↓
              </a>
            )}
          </div>

          <ul className="relative mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {cv.contact.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-2xl font-bold underline decoration-lime decoration-[3px] underline-offset-[6px] hover:decoration-tangerine"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
