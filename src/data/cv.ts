// All site content lives here. Edit this file to update the CV — no component changes needed.
// Everything below is PLACEHOLDER content.

export type Fact = { label: string; value: string }

export type ExpertiseGroup = { title: string; items: string[] }

export type Project = {
  name: string
  context: string // company / client / university
  year: string
  summary: string
  specs: Fact[] // short key results, shown as a spec table
  tools: string[]
}

export type Role = {
  title: string
  company: string
  period: string
  location?: string
  points: string[]
}

export type Education = { degree: string; school: string; period: string; note?: string }

export type Link = { label: string; href: string }

export const cv = {
  name: 'Rebecca Lesenius',
  title: 'Mechanical Engineer',
  location: 'Stockholm, Sweden',
  available: true,
  intro:
    'Placeholder intro — one or two sentences on what Rebecca designs, the kind of products she works on, and what she cares about as an engineer.',

  about: [
    'Placeholder bio. Describe the engineering problems Rebecca enjoys most — from concept and CAD to analysis, prototyping and handover to production.',
    'Add a sentence on how she works with others: cross-functional teams, suppliers, test labs — and something personal to round it off.',
  ],
  photo: null as string | null, // e.g. '/rebecca.jpg' — put the file in /public

  // Shown as a drawing-style "title block"
  facts: [
    { label: 'Discipline', value: 'Mechanical design' },
    { label: 'Experience', value: '6+ years' },
    { label: 'Based in', value: 'Stockholm' },
    { label: 'Languages', value: 'Swedish, English' },
  ] satisfies Fact[],

  expertise: [
    {
      title: 'Design & CAD',
      items: ['SolidWorks', 'CATIA V5', 'Siemens NX', 'GD&T / ISO GPS', 'Sheet metal design', 'Technical drawings'],
    },
    {
      title: 'Analysis',
      items: ['FEA (ANSYS)', 'Tolerance stack-up', 'Hand calculations', 'Fatigue & strength', 'MATLAB'],
    },
    {
      title: 'Manufacturing',
      items: ['DFM / DFA', 'Injection moulding', 'CNC machining', 'Prototyping', 'Supplier collaboration'],
    },
    {
      title: 'Process & quality',
      items: ['DFMEA', 'PLM (Teamcenter)', 'Design reviews', 'Test & verification', 'ISO 9001'],
    },
  ] satisfies ExpertiseGroup[],

  projects: [
    {
      name: 'Lightweight bracket redesign',
      context: 'Company One',
      year: '2024',
      summary: 'Placeholder — redesigned a load-bearing bracket using topology optimisation and FEA, validated by physical testing.',
      specs: [
        { label: 'Weight', value: '−32%' },
        { label: 'Cost', value: '−18%' },
        { label: 'Safety factor', value: '2.1' },
      ],
      tools: ['SolidWorks', 'ANSYS', 'Topology optimisation'],
    },
    {
      name: 'Housing for handheld device',
      context: 'Company One',
      year: '2023',
      summary: 'Placeholder — owned the mechanical design of an injection-moulded housing from concept to series production.',
      specs: [
        { label: 'IP rating', value: 'IP67' },
        { label: 'Parts', value: '14 → 9' },
        { label: 'Volume', value: '50k / yr' },
      ],
      tools: ['CATIA V5', 'DFM', 'Tolerance analysis'],
    },
    {
      name: 'Test rig for fatigue testing',
      context: 'Company Two',
      year: '2021',
      summary: 'Placeholder — designed and commissioned a test rig that cut verification lead time for a product line.',
      specs: [
        { label: 'Lead time', value: '−40%' },
        { label: 'Cycles', value: '10⁶' },
        { label: 'Budget', value: 'On target' },
      ],
      tools: ['Siemens NX', 'MATLAB', 'Hand calcs'],
    },
  ] satisfies Project[],

  experience: [
    {
      title: 'Mechanical Design Engineer',
      company: 'Company One',
      period: '2022 — Present',
      location: 'Stockholm',
      points: [
        'Placeholder — responsible for mechanical design of X from concept to production.',
        'Led DFMEA and design reviews with production and suppliers.',
        'Mentored two junior engineers.',
      ],
    },
    {
      title: 'Mechanical Engineer',
      company: 'Company Two',
      period: '2019 — 2022',
      location: 'Gothenburg',
      points: ['Placeholder — designed components and test equipment.', 'Ran FEA and verification testing.'],
    },
    {
      title: 'Engineering Intern / Thesis',
      company: 'Company Three',
      period: '2018 — 2019',
      points: ['Placeholder — master thesis on a relevant topic.'],
    },
  ] satisfies Role[],

  education: [
    { degree: 'MSc, Mechanical Engineering', school: 'KTH Royal Institute of Technology', period: '2014 — 2019', note: 'Specialisation: placeholder' },
  ] satisfies Education[],

  certifications: ['CSWP — Certified SolidWorks Professional', 'GD&T Fundamentals (ASME Y14.5)'],

  contact: {
    email: 'rebecca@lesenius.se',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' }] satisfies Link[],
    cvPdf: null as string | null, // e.g. '/cv.pdf' — put the file in /public
  },
}
