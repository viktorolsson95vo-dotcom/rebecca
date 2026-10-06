import { motion } from 'motion/react'
import { accentBg, cv } from '../data/cv'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section id="skills" className="bg-ink px-4 py-24 text-bg sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="section-title">
            What I <span className="inline-block -rotate-2 rounded-2xl bg-blue px-3 text-cream">bring</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {cv.skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.1}>
              <h3 className="flex items-baseline gap-3 font-display text-4xl font-extrabold">
                <span className="text-base font-semibold opacity-60">0{gi + 1}</span>
                {g.title}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-3">
                {g.skills.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ rotate: ((i * 7) % 5) - 2 }}
                    whileHover={{ rotate: i % 2 ? 5 : -5, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                    className={`cursor-default rounded-full border-[3px] border-bg px-4 py-2 font-semibold ${accentBg[g.accent]}`}
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
