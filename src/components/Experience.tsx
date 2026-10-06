import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { cv, type Role } from '../data/cv'
import { Reveal } from './Reveal'

const dots = ['bg-tangerine', 'bg-blue', 'bg-lime']

type RoleCardProps = { role: Role; i: number; open: boolean; onToggle: () => void }

function RoleCard({ role, i, open, onToggle }: RoleCardProps) {
  const id = `role-${i}`
  return (
    <li className="relative pl-10 sm:pl-14">
      <span
        className={`absolute left-0 top-7 size-6 rounded-full border-[3px] border-ink sm:size-8 ${dots[i % dots.length]}`}
        aria-hidden
      />
      <div className="sticker overflow-hidden bg-card">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-3 p-6 text-left sm:p-8"
        >
          <div>
            <p className="font-display text-2xl font-extrabold sm:text-3xl">{role.title}</p>
            <p className="mt-1 text-lg font-semibold text-muted">
              {role.company}
              {role.location && <span className="font-normal"> · {role.location}</span>}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="rounded-full border-[3px] border-ink px-3 py-1 text-sm font-bold">{role.period}</span>
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              className="no-print grid size-10 place-items-center rounded-full bg-ink text-2xl font-bold text-bg"
              aria-hidden
            >
              +
            </motion.span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={id}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border-t-[3px] border-ink px-6 pb-6 pt-5 sm:px-8 sm:pb-8">
                <p className="text-lg">{role.summary}</p>
                <ul className="mt-4 space-y-2">
                  {role.achievements.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-0.5 font-bold text-tangerine" aria-hidden>
                        ✦
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                {role.tags && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {role.tags.map((t) => (
                      <li key={t} className="rounded-full bg-lime px-3 py-1 text-sm font-semibold text-black">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  )
}

export function Experience() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="experience" className="px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="section-title">
            Where I&apos;ve <span className="inline-block rotate-1 rounded-2xl bg-tangerine px-3 text-black">been</span>
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-6 before:absolute before:bottom-6 before:left-[11px] before:top-7 before:w-[3px] before:bg-ink sm:before:left-[15px]">
          {cv.experience.map((role, i) => (
            <RoleCard
              key={role.company + role.period}
              role={role}
              i={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </ol>

        {cv.education.length > 0 && (
          <Reveal className="mt-16">
            <h3 className="font-display text-3xl font-extrabold">Education</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {cv.education.map((e) => (
                <li key={e.school} className="sticker bg-card p-6">
                  <p className="font-display text-xl font-bold">{e.degree}</p>
                  <p className="mt-1 text-muted">
                    {e.school} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
