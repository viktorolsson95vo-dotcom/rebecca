import { MotionConfig } from 'motion/react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'

export default function App() {
  return (
    // reducedMotion="user" disables transform animations for people who prefer reduced motion
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Highlights />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
