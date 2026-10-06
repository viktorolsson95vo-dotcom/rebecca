// All site content lives here. Edit this file to update the CV — no component changes needed.
// Everything below is PLACEHOLDER content.

export type Accent = 'blue' | 'tangerine' | 'lime'

export type Highlight = {
  value: number
  suffix?: string
  label: string
  accent: Accent
}

export type SkillGroup = {
  title: string
  accent: Accent
  skills: string[]
}

export type Role = {
  company: string
  title: string
  period: string
  location?: string
  summary: string
  achievements: string[]
  tags?: string[]
}

export type Link = { label: string; href: string }

export const cv = {
  firstName: 'Viktor',
  lastName: 'Lesenius',
  // Rotating words shown after "Viktor ..." in the hero
  roles: ['builds products', 'leads teams', 'ships things', 'loves good UX'],
  tagline: 'Placeholder tagline — a one-sentence pitch of who you are and what you do best.',
  location: 'Stockholm, Sweden',
  available: true,

  about: [
    'Placeholder bio. Two or three short paragraphs about you: what you work on, what drives you, and what makes you different from the next person.',
    'Mention the kind of problems you enjoy, the teams you thrive in, and something human — a hobby, a side project, a weird fact.',
  ],
  photo: null as string | null, // e.g. '/viktor.jpg' — put the file in /public

  highlights: [
    { value: 10, suffix: '+', label: 'years building digital products', accent: 'lime' },
    { value: 25, suffix: '+', label: 'features shipped to production', accent: 'blue' },
    { value: 8, label: 'people mentored', accent: 'tangerine' },
    { value: 3, label: 'products launched from zero', accent: 'lime' },
  ] satisfies Highlight[],

  skillGroups: [
    {
      title: 'Build',
      accent: 'blue',
      skills: ['TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    },
    {
      title: 'Ship',
      accent: 'tangerine',
      skills: ['CI/CD', 'Vercel', 'AWS', 'Docker', 'Testing', 'Observability'],
    },
    {
      title: 'Lead',
      accent: 'lime',
      skills: ['Product thinking', 'Mentoring', 'Experimentation', 'Roadmapping', 'Workshops'],
    },
  ] satisfies SkillGroup[],

  experience: [
    {
      company: 'Company One',
      title: 'Senior Role Title',
      period: '2022 — Now',
      location: 'Stockholm',
      summary: 'One line on what the company does and what you own there.',
      achievements: [
        'Placeholder achievement with a measurable outcome (e.g. +18% conversion).',
        'Led a project from idea to launch across three teams.',
        'Introduced a practice that the whole org adopted.',
      ],
      tags: ['React', 'TypeScript', 'Experimentation'],
    },
    {
      company: 'Company Two',
      title: 'Role Title',
      period: '2019 — 2022',
      location: 'Stockholm',
      summary: 'One line on what the company does and what you owned there.',
      achievements: [
        'Placeholder achievement with a number in it.',
        'Rebuilt something important and made it 2× faster.',
      ],
      tags: ['Node.js', 'AWS'],
    },
    {
      company: 'Company Three',
      title: 'Junior Role Title',
      period: '2016 — 2019',
      summary: 'Where it all started.',
      achievements: ['Placeholder achievement.', 'Another placeholder achievement.'],
    },
  ] satisfies Role[],

  education: [{ school: 'University Name', degree: 'MSc, Field of Study', period: '2011 — 2016' }],

  contact: {
    email: 'hello@lesenius.se',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
      { label: 'GitHub', href: 'https://github.com/your-handle' },
    ] satisfies Link[],
    cvPdf: null as string | null, // e.g. '/cv.pdf' — put the file in /public
  },
}

export const accentBg: Record<Accent, string> = {
  blue: 'bg-blue text-cream',
  tangerine: 'bg-tangerine text-black',
  lime: 'bg-lime text-black',
}
