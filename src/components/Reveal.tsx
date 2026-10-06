import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type Props = { children: ReactNode; delay?: number; className?: string }

/** Fades and slides children in when they scroll into view. */
export function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
