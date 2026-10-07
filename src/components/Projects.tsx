import { useLang } from '../i18n'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Projects() {
  const { cv, t } = useLang()
  return (
    <Section id="projects" index="03" title={t.sections.work}>
      <div className="grid gap-6 md:grid-cols-2">
        {cv.work.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="flex h-full flex-col border border-line bg-surface transition-colors hover:border-muted">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="label">{p.context}</span>
                <span className="font-mono text-xs text-muted">{p.period}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-medium leading-snug">{p.name}</h3>
                <p className="mt-3 text-muted">{p.summary}</p>

                <dl className="mt-6 grid grid-cols-3 border-t border-line pt-4">
                  {p.specs.map((s) => (
                    <div key={s.label}>
                      <dt className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">{s.label}</dt>
                      <dd className="mt-1 font-medium text-accent">{s.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-6 font-mono text-xs text-muted">
                  {p.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
