import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = { id: string; index: string; title: string; children: ReactNode; className?: string }

/** Section with a drawing-style numbered header and a hairline rule. */
export function Section({ id, index, title, children, className = '' }: Props) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <header className="mb-12 flex items-baseline gap-4 border-b border-line pb-4">
            <span className="font-mono text-sm text-accent">{index}</span>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
