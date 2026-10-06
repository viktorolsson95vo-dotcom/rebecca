import { cv } from '../data/cv'

const items = cv.skillGroups.flatMap((g) => g.skills)

export function Marquee() {
  // Content is duplicated so the -50% translate loops seamlessly.
  const row = [...items, ...items]
  return (
    <div className="no-print overflow-hidden py-10" aria-hidden>
      <div className="group -mx-[5%] flex -rotate-2 overflow-hidden border-y-[3px] border-ink bg-ink py-4 text-bg">
        <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] items-center gap-8 pr-8 group-hover:[animation-direction:reverse]">
          {row.map((s, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-3xl font-extrabold uppercase sm:text-4xl">
              {s}
              <span className={['text-lime', 'text-tangerine', 'text-blue'][i % 3]}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
