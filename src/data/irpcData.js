// ---------------------------------------------------------------------------
// IRPC — Cooperate Website  (DEC 2024 – FEB 2025)
// All image URLs sourced from Figma MCP (node 40000526:1509)
// ---------------------------------------------------------------------------

const base = import.meta.env.BASE_URL

export const irpcImages = {
  // Role card icon
  computerIcon:     `${base}gena/db2f04457f0b478674721c461038ac1b4e33e4a9.png`,

  // What I Did — right screenshot
  uiHomepage:       `${base}images/IRPC_UI_Homepage_1.png`,

  // Challenge icon
  challengeIcon:    `${base}images/Challenge_Icon.png`,

  // Proposal Design Direction — left image (both directions composite)
  proposalImage:    `${base}images/Project_IRPC02.png`,
  // Design Direction — colour-palette overview strip
  paletteImage:     `${base}images/Project_IRPC02_1.png`,

  // Design Direction cards (updated — equal height ~1427px for top-alignment)
  direction21:      `${base}images/Project_IRPC03.png`,
  direction22:      `${base}images/Project_IRPC04.png`,
  direction23:      `${base}images/Project_IRPC05.png`,

  // Phase 1 screens
  phase1StyleGuide: `${base}images/Project_IRPC10.png`,
  phase1Home:       `${base}images/Project_IRPC11.png`,
  phase1News:       `${base}images/Project_IRPC14.png`,
  phase1About:      `${base}images/Project_IRPC12.png`,

  // Phase 2 — side-by-side preview thumbnails
  phase2Image1:     `${base}images/Project_IRPC06.png`,
  phase2Image2:     `${base}images/Project_IRPC07.png`,

  // Phase 2 — full-width screens
  phase2StyleGuide: `${base}images/Project_IRPC08.png`,
  phase2Home:       `${base}images/Project_IRPC09.png`,
}

// ---------------------------------------------------------------------------
// Role info card
// ---------------------------------------------------------------------------
export const irpcInfo = {
  duration: '10 Week',
  period:   '(DEC 2024 - FEB 2025)',
  platform: 'Implementation Website',
  role:     'Ui Design',
  roleNote: '(Associate UI Designer)',
}

// ---------------------------------------------------------------------------
// What I Did — bullet items
// ---------------------------------------------------------------------------
export const irpcWhatIDid = [
  { parts: [{ text: 'Design direction', highlight: true }, { text: ' to support sales proposals.' }] },
  { parts: [{ text: 'Gather business & user ' }, { text: 'requirements', highlight: true }] },
  { parts: [{ text: 'Designed interface', highlight: true }, { text: ' screens aligned with clients brand guidelines' }] },
  { parts: [{ text: 'Handover UI', highlight: true }, { text: ' to developers' }] },
  { parts: [{ text: 'Review', highlight: true }, { text: ' implemented UI' }] },
]

// ---------------------------------------------------------------------------
// Challenge — single card
// ---------------------------------------------------------------------------
export const irpcChallenge = {
  text: 'The challenge was the large number of web pages, which made it impossible to design every page within the available timeline. To solve this, we proposed a content template approach, designing flexible templates that could accommodate nearly all client content scenarios.',
}

// ---------------------------------------------------------------------------
// Proposal Design Direction section
// ---------------------------------------------------------------------------
export const irpcProposal = {
  intro: 'Initially, we proposed two landing page design directions to support the pre-sales process:',
  directions: [
    {
      title: 'Direction 1 Professional & Clean',
      desc:  'Innovative | Trusted | Photo-base',
    },
    {
      title: 'Direction 2 Modern & Creative',
      desc:  'Next Gen | Lively | Colorful',
    },
  ],
}

// ---------------------------------------------------------------------------
// Design Direction — subtitle (mixed-weight text)
// ---------------------------------------------------------------------------
export const irpcDesignDirectionSubtitleParts = [
  { text: 'After the pre-sales phase, the client chose ' },
  { text: 'Direction 2, Modern & Creative.', bold: true },
  { text: ' Using their feedback on preferred and less preferred elements, we evolved the design further into three additional style explorations.' },
]

// ---------------------------------------------------------------------------
// Design Direction cards (3 columns)
// ---------------------------------------------------------------------------
export const irpcDirections = [
  {
    imgKey:     'direction21',
    alt:        'Direction 2.1 – Background image with a pattern photography',
    labelBold:  'Direction 2.1 - ',
    labelLight: 'Background image with a pattern photography',
    hasBreak:   false,
  },
  {
    imgKey:     'direction22',
    alt:        'Direction 2.2 – Background image with vector',
    labelBold:  'Direction 2.2 - ',
    labelLight: 'Background image with vector',
    hasBreak:   true,
  },
  {
    imgKey:     'direction23',
    alt:        'Direction 2.3 – Photo background',
    labelBold:  'Direction 2.3 - ',
    labelLight: 'Photo background',
    hasBreak:   true,
  },
]

// ---------------------------------------------------------------------------
// Phase 1 screens
// ---------------------------------------------------------------------------
export const irpcPhase1Screens = [
  { imgKey: 'phase1StyleGuide', alt: 'IRPC UI Style Guide',  aspectClass: 'aspect-[2/1]'    },
  { imgKey: 'phase1Home',       alt: 'IRPC Home page',       aspectClass: 'aspect-video'     },
  { imgKey: 'phase1News',       alt: 'IRPC News page',       aspectClass: 'aspect-video'     },
  { imgKey: 'phase1About',      alt: 'IRPC About page',      aspectClass: 'aspect-video'     },
]

// ---------------------------------------------------------------------------
// Phase 2 data
// ---------------------------------------------------------------------------
export const irpcPhase2 = {
  bodyText: [
    'We began by reviewing all remaining pages of the website and attempted to group pages that could share the same layout for reuse. However, this approach was not effective.',
    'As a result, we shifted to a new strategy: instead of reusing entire page layouts, we focused on reusable sections within each page. This made the design templates easier to organize, while also providing greater flexibility for future content expansion.',
  ],
  finalText: 'Finally, we created 15 reusable section-based content templates and applied them across all remaining pages of the website to ensure consistency.',
}
