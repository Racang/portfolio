// ─── Thaioil project image assets ─────────────────────────────────────────────
// Figma MCP temporary URLs — replace with local public/images/thaioil-*.ext paths
// once assets are exported and placed in /public/images/.

const base = import.meta.env.BASE_URL

export const thaioilImages = {
  // Role card
  computerIcon: `${base}gena/db2f04457f0b478674721c461038ac1b4e33e4a9.png`,

  // WhatIDid — hero screenshot
  uiHomepage: `${base}images/Project_Thaioil01.png`,

  // Challenge section icons
  challengeIcon1: `${base}images/Project_thaioil_ChallengeIcon01.png`, // Temporary — reuse IRPC challenge icon
  challengeIcon2: `${base}images/Project_thaioil_ChallengeIcon02.png`, // Temporary — reuse IRPC challenge iconm
  // User Requirement illustration
  requirementIllustration: `${base}images/Project_THAIOIL02.png`,

  // Design Direction — 3 full-page mockups
  direction1: `${base}images/Project_THAIOIL03.png`,
  direction2: `${base}images/Project_THAIOIL04.png`,
  direction3: `${base}images/Project_THAIOIL05.png`,

  // Phase 1 — General UI Design screens
  phase1StyleGuide:  `${base}images/Project_THAIOIL06.png`,
  phase1Home:        `${base}images/Project_THAIOIL07.png`,
  phase1News2:       `${base}images/Project_THAIOIL08.png`,
  phase1About:       `${base}images/Project_THAIOIL09.png`,
  phase1News1:       `${base}images/Project_THAIOIL10.png`,
  phase1News3:       `${base}images/Project_THAIOIL11.png`,
  phase1News4:       `${base}images/Project_THAIOIL12.png`,
  phase1News5:       `${base}images/Project_THAIOIL13.png`,
  phase1News6:       `${base}images/Project_THAIOIL14.png`,
  phase1News7:       `${base}images/Project_THAIOIL15.png`,
  phase1News8:       `${base}images/Project_THAIOIL16.png`,
  phase1StyleGuide2: `${base}images/Project_THAIOIL17.png`,

  // Phase 2 — Content Template screens
  phase2Screen1: `${base}images/Project_THAIOIL18.png`,
  phase2Screen2: `${base}images/Project_THAIOIL19.png`,
}

// ─── Project metadata ────────────────────────────────────────────────────────
export const thaioilInfo = {
  duration: '6 Months',
  platform: 'Implementation Website',
  role:     'Ui Design',
}

// ─── "What I did" bullet list ────────────────────────────────────────────────
export const thaioilWhatIDid = [
  {
    parts: [
      { text: 'Gather business & user ', highlight: false },
      { text: 'requirements',           highlight: true  },
    ],
  },
  {
    parts: [
      { text: 'Designed interface',                                       highlight: true  },
      { text: ' screens aligned with clients brand guidelines',           highlight: false },
    ],
  },
  {
    parts: [
      { text: 'Handover UI',   highlight: true  },
      { text: ' to developers', highlight: false },
    ],
  },
  {
    parts: [
      { text: 'Reviewing',              highlight: true  },
      { text: ' UI designs from the vendor', highlight: false },
    ],
  },
  {
    parts: [
      { text: 'Review',          highlight: true  },
      { text: ' implemented UI', highlight: false },
    ],
  },
]

// ─── Challenge cards ─────────────────────────────────────────────────────────
export const thaioilChallenges = [
  {
    iconKey: 'challengeIcon1',
    text: '1. The project involved collaboration with a vendor, so maintaining design consistency across teams was a key challenge.',
  },
  {
    iconKey: 'challengeIcon2',
    text: '2. The website had a large scale with extensive content, making it challenging to manage layouts and maintain consistency.',
  },
]

// ─── Design direction cards ───────────────────────────────────────────────────
export const thaioilDirections = [
  {
    imgKey:     'direction1',
    alt:        'Direction 1 — Dynamic Innovative Professional',
    labelBold:  'Direction 1 - ',
    labelLight: 'Dynamic Innovative Professional',
  },
  {
    imgKey:     'direction2',
    alt:        'Direction 2 — Professional Sustainable image',
    labelBold:  'Direction 2 - ',
    labelLight: 'Professional Sustainable image using photo based',
  },
  {
    imgKey:     'direction3',
    alt:        'Direction 3 — Modern Professional & Sustainable',
    labelBold:  'Direction 3',
    labelLight: ' - Modern, Professional & Sustainable (A blend of Directions 1 & 2)',
  },
]

// ─── Phase 1 — General UI Design screens ────────────────────────────────────
export const thaioilPhase1Screens = [
  { imgKey: 'phase1StyleGuide',  alt: 'UI Style Guide',         aspectClass: 'aspect-[2/1]'   },
  { imgKey: 'phase1Home',        alt: 'Homepage UI',            aspectClass: 'aspect-video'   },
  { imgKey: 'phase1News2',       alt: 'News page 2',            aspectClass: 'aspect-video'   },
  { imgKey: 'phase1About',       alt: 'About page',             aspectClass: 'aspect-video'   },
  { imgKey: 'phase1News1',       alt: 'News page 1',            aspectClass: 'aspect-video'   },
  { imgKey: 'phase1News3',       alt: 'News page 3',            aspectClass: 'aspect-video'   },
  { imgKey: 'phase1News4',       alt: 'News page 4',            aspectClass: 'aspect-video'   },
  { imgKey: 'phase1News5',       alt: 'News page 5',            aspectClass: 'aspect-video'   },
  { imgKey: 'phase1News6',       alt: 'News page 6',            aspectClass: 'aspect-video'   },
  { imgKey: 'phase1News7',       alt: 'News page 7',            aspectClass: 'aspect-video'   },
  { imgKey: 'phase1News8',       alt: 'News page 8',            aspectClass: 'aspect-video'   },
  { imgKey: 'phase1StyleGuide2', alt: 'UI Style Guide (cont.)', aspectClass: 'aspect-[2/1]'   },
]

// ─── Phase 2 — Content Template screens ─────────────────────────────────────
export const thaioilPhase2Screens = [
  { imgKey: 'phase2Screen1', alt: 'Content template sheet 1', aspectClass: 'aspect-[2/1]' },
  { imgKey: 'phase2Screen2', alt: 'Content template sheet 2', aspectClass: 'aspect-[2/1]' },
]
