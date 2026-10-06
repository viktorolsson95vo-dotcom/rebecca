import { cv } from '../data/cv'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute inset-0 rotate-6 rounded-[2rem] border-[3px] border-ink bg-tangerine" />
            <div className="absolute inset-0 -rotate-3 overflow-hidden rounded-[2rem] border-[3px] border-ink bg-blue shadow-hard transition-transform duration-300 hover:rotate-0">
              {cv.photo ? (
                <img src={cv.photo} alt={`${cv.firstName} ${cv.lastName}`} className="size-full object-cover" />
              ) : (
                <div className="grid size-full place-items-center font-display text-[8rem] font-extrabold text-cream">
                  {cv.firstName[0]}
                  {cv.lastName[0]}
                </div>
              )}
            </div>
            <div className="absolute -bottom-5 -right-3 rotate-[-8deg] rounded-full border-[3px] border-ink bg-lime px-5 py-2 font-display text-lg font-bold text-black shadow-hard-sm">
              Hej! 👋
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="section-title">
            About <span className="inline-block -rotate-2 rounded-2xl bg-tangerine px-3 text-black">me</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted sm:text-xl">
            {cv.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
