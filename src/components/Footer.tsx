import { cv } from '../data/cv'

export function Footer() {
  return (
    <footer className="no-print border-t-[3px] border-ink px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm font-semibold">
        <p>
          © {new Date().getFullYear()} {cv.firstName} {cv.lastName}
        </p>
        <p className="text-muted">Made with too much coffee in {cv.location.split(',')[0]} ☕</p>
        <a href="#top" className="rounded-full border-[3px] border-ink px-4 py-1.5 hover:bg-lime hover:text-black">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
