import { useLang } from '../i18n'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  const { cv, t } = useLang()
  return (
    <Section id="about" index="01" title={t.sections.about}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <Reveal className="space-y-5 text-lg leading-relaxed">
          {cv.about.map((p, i) => (
            <p key={i} className={i === 0 ? '' : 'text-muted'}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100}>
          {cv.photo && (
            <figure className="mb-8 max-w-xs sm:max-w-sm lg:max-w-none">
              {/* Photo framed like a detail view on a drawing, with corner marks */}
              <div className="relative border border-line p-2">
                {['-left-px -top-px border-l border-t', '-right-px -top-px border-r border-t', '-bottom-px -left-px border-b border-l', '-bottom-px -right-px border-b border-r'].map(
                  (pos) => (
                    <span key={pos} className={`absolute size-3 border-accent ${pos}`} aria-hidden />
                  ),
                )}
                <img
                  src={cv.photo}
                  alt={`${t.portraitOf} ${cv.name}`}
                  width={640}
                  height={800}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="label mt-3 flex justify-between">
                <span>Fig. 1</span>
                <span>{cv.name}</span>
              </figcaption>
            </figure>
          )}

          {/* Drawing-style title block */}
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
