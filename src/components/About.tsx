import { cv } from '../data/cv'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <Reveal className="space-y-5 text-lg leading-relaxed">
          {cv.photo && (
            <img src={cv.photo} alt={cv.name} className="mb-8 aspect-[4/5] w-48 border border-line object-cover grayscale-[30%]" />
          )}
          {cv.about.map((p, i) => (
            <p key={i} className={i === 0 ? '' : 'text-muted'}>
              {p}
            </p>
          ))}
        </Reveal>

        {/* Drawing-style title block */}
        <Reveal delay={100}>
          <dl className="grid grid-cols-2 border-l border-t border-line">
            {cv.facts.map((f) => (
              <div key={f.label} className="border-b border-r border-line p-4">
                <dt className="label">{f.label}</dt>
                <dd className="mt-2 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
