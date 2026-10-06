import { cv } from '../data/cv'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Expertise() {
  return (
    <Section id="expertise" index="02" title="Expertise">
      <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {cv.expertise.map((g, i) => (
          <Reveal key={g.title} delay={i * 80} className="bg-paper p-6">
            <h3 className="flex items-baseline justify-between font-medium">
              {g.title}
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
            </h3>
            <ul className="mt-5 space-y-2.5 text-muted">
              {g.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
