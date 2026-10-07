// All site content lives here, in English (primary) and Swedish. Edit this file to update the CV —
// no component changes needed. Source: Rebecca's CV. Phone number and personal ID are deliberately left out.

export type Lang = 'en' | 'sv'

export type Fact = { label: string; value: string }

export type ExpertiseGroup = { title: string; items: string[] }

export type Work = {
  name: string
  context: string // company / client
  period: string
  summary: string
  specs: Fact[] // short key facts, shown as a spec table
  tools: string[]
}

export type Role = {
  title: string
  company: string
  via?: string // consultancy the role was through
  period: string
  location?: string
  points: string[]
}

export type Education = { degree: string; school: string; period: string; note?: string }

export type Engagement = { role: string; org: string; period: string }

export type Link = { label: string; href: string }

// Same in both languages
const shared = {
  name: 'Rebecca Lesenius',
  available: false,
  photo: '/rebecca.jpg' as string | null, // file lives in /public; set to null to hide
  contact: {
    email: 'rebeccalesenius@live.com',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/rebecca-lesenius-profil/' }] satisfies Link[],
    cvPdf: null as string | null, // e.g. '/cv.pdf' — put the file in /public (remove phone & personal ID first)
  },
}

const en = {
  ...shared,
  title: 'Mechanical Engineer',
  location: 'Skåne, Sweden',
  intro:
    'Mechanical engineer with a background in product development and design. I take products from prototype to finished design, adapted to the needs of the people who use them.',

  about: [
    'Ambitious and driven, with a strong interest in technology and mechanical design. I know how a product goes from prototype to finished product, and how to adapt it to the user’s needs and wishes. My goal is to keep developing my interest in design and to use my knowledge of product development, CAD and mechanical engineering to help solve problems.',
    'I’m a happy and curious person who doesn’t give up easily. I work well both independently and in a team, and can take the lead when needed. Combining design and engineering — finding solutions that work while keeping design in focus — is something I also do in my spare time, drawing and 3D-printing things for home. Outside work I do strength training and kickboxing, where I’m also a coach.',
  ],

  // Shown as a drawing-style "title block"
  facts: [
    { label: 'Discipline', value: 'Product development' },
    { label: 'Engineering since', value: '2019' },
    { label: 'Based in', value: 'Skåne, Sweden' },
    { label: 'Languages', value: 'Swedish, English' },
  ] satisfies Fact[],

  expertise: [
    {
      title: 'Design & CAD',
      items: ['3D CAD — Creo, SolidWorks', 'Technical drawings', 'Sheet metal preparation', 'Customer-specific design', 'Visualisation'],
    },
    {
      title: 'Product development',
      items: ['Product development', 'Prototyping', '3D printing (Creality Print)', 'Material selection', 'Testing'],
    },
    {
      title: 'Manufacturing & quality',
      items: ['DFM', 'DFA', 'Quality assurance', 'Windchill (PLM)', 'Welded design'],
    },
    {
      title: 'Project management',
      items: ['Project leadership', 'Project planning', 'Time estimation', 'Delegation & coordination', 'Microsoft Office'],
    },
  ] satisfies ExpertiseGroup[],

  work: [
    {
      name: 'Owner of a freezer model',
      context: 'JBT Foodtech',
      period: '2021 — 2026',
      summary:
        'Responsible for one of the freezer models: time estimates for upcoming orders, keeping all related models up to date, and acting as project lead for orders of this type.',
      specs: [
        { label: 'Role', value: 'Model owner' },
        { label: 'Also', value: 'Project lead' },
        { label: 'CAD', value: 'Creo' },
      ],
      tools: ['Creo', 'Windchill', 'Time estimation'],
    },
    {
      name: 'Project lead for large orders',
      context: 'JBT Foodtech',
      period: '2021 — 2026',
      summary:
        'Led several larger orders where multiple engineers from the department worked together — delegating work evenly, keeping to the schedule and making sure the final assembly was correct.',
      specs: [
        { label: 'Role', value: 'Project lead' },
        { label: 'Team', value: 'Department' },
        { label: 'Focus', value: 'Schedule' },
      ],
      tools: ['Project planning', 'Delegation', 'Assembly review'],
    },
    {
      name: 'Welded module & technical advisory',
      context: 'JBT Foodtech',
      period: '2021 — 2026',
      summary:
        'Responsible for a module involving welding and light programming. Improved it in close collaboration with manufacturers, reviewed work to keep a set standard, and acted as technical advisor to colleagues and manufacturers.',
      specs: [
        { label: 'Role', value: 'Module owner' },
        { label: 'Works with', value: 'Suppliers' },
        { label: 'Also', value: 'Advisor' },
      ],
      tools: ['Welding', 'Light programming', 'Design review'],
    },
    {
      name: 'Signal horn development',
      context: 'Kockumation',
      period: '2019 — 2021',
      summary:
        'Assemblies and drawings for signal horns and related equipment. Developed the design and form of the product, tested it, chose materials and manufacturing methods, and used 3D-printed prototypes to test DFA and function.',
      specs: [
        { label: 'Focus', value: 'Design & form' },
        { label: 'Method', value: 'DFA / DFM' },
        { label: 'CAD', value: 'SolidWorks' },
      ],
      tools: ['SolidWorks', '3D printing', 'Material selection'],
    },
  ] satisfies Work[],

  experience: [
    {
      title: 'Mechanical Engineer',
      company: 'Tetra Pak',
      via: 'Sigma Industry South',
      period: '2026 — Present',
      location: 'Lund',
      points: [
        'Designs filling machines in Creo.',
        'Design work and modifications, including the associated drawings.',
        'Testing, and contact with suppliers.',
      ],
    },
    {
      title: 'Mechanical Engineer',
      company: 'JBT Foodtech',
      via: 'Sigma Industry South',
      period: '2021 — 2026',
      location: 'Helsingborg',
      points: [
        'Customised models and their drawings in Creo, and checked that all models fit together and can be assembled.',
        'Responsible for one of the freezer models — time estimates, keeping related models up to date, and project lead for those orders.',
        'Project lead for several larger orders involving multiple engineers: delegating work, keeping to schedule and ensuring a correct assembly.',
        'Responsible for a module involving welding and light programming; improved it together with manufacturers and acted as technical advisor.',
      ],
    },
    {
      title: 'Mechanical Engineer',
      company: 'Kockumation',
      via: 'Sigma Industry South',
      period: '2019 — 2021',
      location: 'Malmö',
      points: [
        'Assemblies and drawings for signal horns and related equipment in SolidWorks.',
        'Development projects focused on the design and form of the product, including testing.',
        'Produced manufacturing documentation, selected materials and manufacturing methods with a focus on DFA and DFM.',
        'Used 3D printing to build prototypes for testing DFA and function.',
      ],
    },
  ] satisfies Role[],

  education: [
    {
      degree: 'Project Management Programme',
      school: 'Sigma Industry South',
      period: '2025 — 2026',
      note: 'Methods, tools and approaches for the project manager role, with theoretical and practical parts.',
    },
    {
      degree: 'Vehicle Engineering',
      school: 'Umeå University',
      period: '2019',
      note: 'A vehicle’s subsystems, construction and components.',
    },
    {
      degree: 'BSc in Engineering, Product Development & Design',
      school: 'Malmö University',
      period: '2016 — 2019',
      note: 'A mechanical engineering programme focused on product development.',
    },
  ] satisfies Education[],

  engagements: [
    { role: 'Board member & communications lead', org: 'Furulunds Kickboxningsklubb', period: '2022 — Present' },
    { role: 'Board member / Vice chair', org: 'Sveriges Ingenjörer, Skåne district', period: '2016 — 2024' },
  ] satisfies Engagement[],

  languages: 'Swedish (native), English (fluent), French (basic)',
}

export type CV = typeof en

// Swedish — wording follows Rebecca's original CV where possible
const sv: CV = {
  ...shared,
  title: 'Maskiningenjör',
  location: 'Skåne',
  intro:
    'Maskiningenjör med bakgrund inom produktutveckling och design. Jag tar produkter från prototyp till färdig design, anpassade efter användarens behov och önskemål.',

  about: [
    'Ambitiös och driven med stort intresse för teknik och konstruktion. Har goda kunskaper om hur framtagning och utveckling av prototyp till färdig produkt ser ut samt hur produkten kan anpassas efter användarens behov och önskemål. Har som mål att få utveckla mitt intresse för design och använda mina kunskaper inom produktutveckling, CAD och maskinteknik för att bidra till att lösa problem.',
    'Jag är en glad och nyfiken person som inte ger mig i första taget. Kan arbeta både självständigt och i team och kan ta en ledarroll om det krävs. Att hitta lösningar som är funktionella samtidigt som designen är i fokus är något jag gärna gör även på fritiden, genom att rita och skapa modeller via 3D-printning. Utöver detta tränar jag gärna, både styrketräning och kickboxning, som jag även är ledare i.',
  ],

  facts: [
    { label: 'Inriktning', value: 'Produktutveckling' },
    { label: 'Ingenjör sedan', value: '2019' },
    { label: 'Ort', value: 'Skåne' },
    { label: 'Språk', value: 'Svenska, engelska' },
  ],

  expertise: [
    {
      title: 'Design & CAD',
      items: ['3D CAD — Creo, SolidWorks', 'Ritteknik', 'Plåtberedning', 'Kundanpassad design', 'Visualisering'],
    },
    {
      title: 'Produktutveckling',
      items: ['Produktutveckling', 'Prototypframtagning', '3D-printning (Creality Print)', 'Materialval', 'Testning'],
    },
    {
      title: 'Tillverkning & kvalitet',
      items: ['DFM', 'DFA', 'Kvalitetssäkring', 'Windchill (PLM)', 'Svetsad konstruktion'],
    },
    {
      title: 'Projektledning',
      items: ['Projektledning', 'Projektplanering', 'Tidsuppskattning', 'Delegering & samordning', 'Microsoft Office'],
    },
  ],

  work: [
    {
      name: 'Ansvarig för en frysmodell',
      context: 'JBT Foodtech',
      period: '2021 — 2026',
      summary:
        'Ansvar för en av frysmodellerna: tidsuppskattningar för kommande order, hålla alla tillhörande modeller uppdaterade samt agera projektledare för order av denna typ.',
      specs: [
        { label: 'Roll', value: 'Modellansvarig' },
        { label: 'Även', value: 'Projektledare' },
        { label: 'CAD', value: 'Creo' },
      ],
      tools: ['Creo', 'Windchill', 'Tidsuppskattning'],
    },
    {
      name: 'Projektledare för större order',
      context: 'JBT Foodtech',
      period: '2021 — 2026',
      summary:
        'Ansvarig för ett antal större order där flera från avdelningen jobbat tillsammans — delegerat arbetsuppgifter jämnt, sett till att allt håller tidsplanen och att sammanställningen är korrekt.',
      specs: [
        { label: 'Roll', value: 'Projektledare' },
        { label: 'Team', value: 'Avdelningen' },
        { label: 'Fokus', value: 'Tidsplan' },
      ],
      tools: ['Projektplanering', 'Delegering', 'Granskning'],
    },
    {
      name: 'Svetsad modul & teknisk rådgivning',
      context: 'JBT Foodtech',
      period: '2021 — 2026',
      summary:
        'Ansvar för en modul som innefattar svetsar och lätt programmering. Förbättrar modulen i nära samarbete med tillverkare, granskar arbetet för att säkerställa att en viss standard hålls och agerar teknisk rådgivare för kollegor och tillverkare.',
      specs: [
        { label: 'Roll', value: 'Modulansvarig' },
        { label: 'Samarbetar', value: 'Tillverkare' },
        { label: 'Även', value: 'Rådgivare' },
      ],
      tools: ['Svetsning', 'Lätt programmering', 'Granskning'],
    },
    {
      name: 'Utveckling av signalhorn',
      context: 'Kockumation',
      period: '2019 — 2021',
      summary:
        'Sammanställningar och ritningar på signalhorn samt tillhörande utrustning. Utvecklade produktens design och form, testade den, gjorde materialval och valde tillverkningsmetod, och använde 3D-printade prototyper för att testa DFA och funktion.',
      specs: [
        { label: 'Fokus', value: 'Design & form' },
        { label: 'Metod', value: 'DFA / DFM' },
        { label: 'CAD', value: 'SolidWorks' },
      ],
      tools: ['SolidWorks', '3D-printning', 'Materialval'],
    },
  ],

  experience: [
    {
      title: 'Maskiningenjör',
      company: 'Tetra Pak',
      via: 'Sigma Industry South',
      period: '2026 — Nuvarande',
      location: 'Lund',
      points: [
        'Konstruerar fyllmaskiner i Creo.',
        'Design och modifieringar, inklusive tillhörande ritningar.',
        'Testning samt kontakt med leverantörer.',
      ],
    },
    {
      title: 'Maskiningenjör',
      company: 'JBT Foodtech',
      via: 'Sigma Industry South',
      period: '2021 — 2026',
      location: 'Helsingborg',
      points: [
        'Kundanpassade modeller och tillhörande ritningar i Creo, och kontrollerade att alla modeller passar ihop och går att montera.',
        'Ansvar för en av frysmodellerna — tidsuppskattningar, uppdaterade modeller och projektledare för order av denna typ.',
        'Projektledare för större order med flera ingenjörer: delegering av arbetsuppgifter, tidsplan och korrekt sammanställning.',
        'Ansvar för en modul med svetsar och lätt programmering; förbättrade den i samarbete med tillverkare och agerade teknisk rådgivare.',
      ],
    },
    {
      title: 'Maskiningenjör',
      company: 'Kockumation',
      via: 'Sigma Industry South',
      period: '2019 — 2021',
      location: 'Malmö',
      points: [
        'Sammanställningar och ritningar på signalhorn samt tillhörande utrustning i SolidWorks.',
        'Utvecklingsprojekt med främsta uppgift att utveckla produktens design och form samt testa den.',
        'Tog fram tillverkningsunderlag, gjorde materialval och valde tillverkningsmetod med fokus på DFA och DFM.',
        'Använde 3D-printning för att ta fram prototyper där DFA och önskade funktioner testades.',
      ],
    },
  ],

  education: [
    {
      degree: 'Projektledarutbildning',
      school: 'Sigma Industry South',
      period: '2025 — 2026',
      note: 'Metoder, verktyg och förhållningssätt för rollen som projektledare, med både teoretiska och praktiska moment.',
    },
    {
      degree: 'Fordonsteknik',
      school: 'Umeå universitet',
      period: '2019',
      note: 'Ett fordons olika delsystem, uppbyggnad och ingående komponenter.',
    },
    {
      degree: 'Högskoleingenjör, produktutveckling och design',
      school: 'Malmö universitet',
      period: '2016 — 2019',
      note: 'Utgår från ett maskiningenjörsprogram men med inriktning mot produktutveckling.',
    },
  ],

  engagements: [
    { role: 'Styrelseledamot & kommunikationsansvarig', org: 'Furulunds Kickboxningsklubb', period: '2022 — Nuvarande' },
    { role: 'Styrelseledamot / Vice ordförande', org: 'Sveriges Ingenjörer, distrikt Skåne', period: '2016 — 2024' },
  ],

  languages: 'Svenska (modersmål), engelska (flytande), franska (begränsat)',
}

export const content: Record<Lang, CV> = { en, sv }
