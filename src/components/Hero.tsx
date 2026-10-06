import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { cv } from '../data/cv'

function Blob({ className, delay }: { className: string; delay: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full blur-2xl opacity-70 ${className}`}
      animate={reduce ? undefined : { x: [0, 30, -20, 0], y: [0, -25, 15, 0], scale: [1, 1.08, 0.95, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

function RotatingRole() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((n) => (n + 1) % cv.roles.length), 2400)
    return () => clearInterval(t)
  }, [reduce])

  return (
    // clip-path clips vertically only, so the tilted word never gets cut at the sides
    <span className="relative inline-flex h-[1.2em] align-bottom [clip-path:inset(0_-100vw)]">
      <span className="sr-only">{cv.roles.join(', ')}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={cv.roles[i]}
          aria-hidden
          className="inline-block rounded-xl bg-lime px-3 text-black"
          initial={{ y: '110%', rotate: 4 }}
          animate={{ y: '0%', rotate: -2 }}
          exit={{ y: '-110%', rotate: -6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        >
          {cv.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const word = {
  hidden: { y: '100%' },
  show: (i: number) => ({ y: '0%', transition: { delay: 0.1 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }),
}

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-8">
      <Blob className="-left-24 top-16 -z-10 size-80 bg-tangerine" delay={0} />
      <Blob className="-right-20 top-1/3 -z-10 size-96 bg-blue" delay={2} />
      <Blob className="bottom-0 left-1/3 -z-10 size-72 bg-lime" delay={4} />

      <div className="mx-auto w-full max-w-7xl">
        {cv.available && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-card px-4 py-1.5 text-sm font-semibold shadow-hard-sm"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1fae4b] opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[#1fae4b]" />
            </span>
            Open to new opportunities · {cv.location}
          </motion.p>
        )}

        <h1 className="font-display font-extrabold uppercase leading-[0.85] tracking-[-0.04em]" style={{ fontSize: 'clamp(3.75rem, 14vw, 12rem)' }}>
          {[cv.firstName, cv.lastName].map((w, i) => (
            <span key={w} className="block overflow-hidden pb-[0.04em]">
              <motion.span className="block" variants={word} initial="hidden" animate="show" custom={i}>
                {w}
                {i === 1 && <span className="text-tangerine">.</span>}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 max-w-3xl"
        >
          <p className="font-display text-3xl font-bold sm:text-5xl">
            {cv.firstName} <RotatingRole />
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">{cv.tagline}</p>

          <div className="no-print mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn bg-blue text-cream">
              Get in touch <span aria-hidden>→</span>
            </a>
            <a href="#experience" className="btn bg-card">
              See my work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
