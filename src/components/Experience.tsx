import type { ReactNode } from 'react'
import { cv } from '../data/cv'
import { Reveal } from './Reveal'
import { Section } from './Section'

function Row({ aside, children }: { aside: string; children: ReactNode }) {
  return (
    <Reveal className="grid gap-2 border-b border-line py-8 first:pt-0 md:grid-cols-[12rem_1fr] md:gap-10">
      <p className="font-mono text-sm text-muted">{aside}</p>
      <div>{children}</div>
    </Reveal>
  )
}

export function Experience() {
  return (
    <Section id="experience" index="04" title="Experience">
      <div>
        {cv.experience.map((r) => (
          <Row key={r.company + r.period} aside={r.period}>
            <h3 className="text-lg font-medium">{r.title}</h3>
            <p className="text-muted">
              {r.company}
              {r.location && ` · ${r.location}`}
            </p>
            <ul className="mt-4 space-y-2">
              {r.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </Row>
        ))}
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <Reveal>
          <h3 className="label mb-5">Education</h3>
          <ul className="space-y-5">
            {cv.education.map((e) => (
              <li key={e.degree}>
                <p className="font-medium">{e.degree}</p>
                <p className="text-muted">
                  {e.school} · <span className="font-mono text-sm">{e.period}</span>
                </p>
                {e.note && <p className="mt-1 text-sm text-muted">{e.note}</p>}
              </li>
            ))}
          </ul>
        </Reveal>
        {cv.certifications.length > 0 && (
          <Reveal delay={100}>
            <h3 className="label mb-5">Certifications</h3>
            <ul className="space-y-3">
              {cv.certifications.map((c) => (
                <li key={c} className="font-medium">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
