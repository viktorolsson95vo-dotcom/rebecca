import { animate, motion, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { accentBg, cv, type Highlight } from '../data/cv'
import { Reveal } from './Reveal'

function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

// Bento layout: first card is big, the rest fill around it.
const spans = ['sm:col-span-2 sm:row-span-2', '', '', 'sm:col-span-2']
const tilts = [-1.5, 2, -2, 1.5]

function Card({ h, i }: { h: Highlight; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ rotate: tilts[i % tilts.length], y: -6 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 200, damping: 18, delay: i * 0.08 }}
      className={`sticker flex flex-col justify-between p-6 sm:p-8 ${accentBg[h.accent]} ${spans[i % spans.length]}`}
    >
      <p
        className={`font-display font-extrabold leading-none tracking-tight ${
          i === 0 ? 'text-[clamp(5rem,14vw,10rem)]' : 'text-6xl sm:text-7xl'
        }`}
      >
        <CountUp value={h.value} suffix={h.suffix} />
      </p>
      <p className={`mt-6 font-semibold ${i === 0 ? 'text-xl sm:text-2xl' : 'text-lg'}`}>{h.label}</p>
    </motion.div>
  )
}

export function Highlights() {
  return (
    <section id="highlights" className="px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="section-title">
            The <span className="inline-block rotate-1 rounded-2xl bg-lime px-3 text-black">highlights</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid auto-rows-[minmax(13rem,auto)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <Card key={h.label} h={h} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
