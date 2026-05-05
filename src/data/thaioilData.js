// ─── Thaioil project image assets ─────────────────────────────────────────────
// Figma MCP temporary URLs — replace with local public/images/thaioil-*.ext paths
// once assets are exported and placed in /public/images/.

const base = import.meta.env.BASE_URL

export const thaioilImages = {
  // Role card
  computerIcon: `${base}gena/db2f04457f0b478674721c461038ac1b4e33e4a9.png`,

  // WhatIDid — hero screenshot
  uiHomepage: 'https://www.figma.com/api/mcp/asset/87d0d095-81a6-4572-9289-1ab2548a4ad0',

  // Challenge section icons
  challengeIcon1: `${base}images/Project_thaioil_ChallengeIcon01.png`, // Temporary — reuse IRPC challenge icon
  challengeIcon2: `${base}images/Project_thaioil_ChallengeIcon02.png`, // Temporary — reuse IRPC challenge iconm
  // User Requirement illustration
  requirementIllustration: 'https://www.figma.com/api/mcp/asset/eeb8533d-e6f3-4f00-abfb-e380198d4369',

  // Design Direction — 3 full-page mockups
  direction1: 'https://www.figma.com/api/mcp/asset/61bf3d3d-7546-4b31-aa60-cb355c8c6a63',
  direction2: 'https://www.figma.com/api/mcp/asset/0b91c1ba-24c9-427b-9949-28393814eae9',
  direction3: 'https://www.figma.com/api/mcp/asset/9a592c75-fc65-4608-9be2-a2919c616655',

  // Phase 1 — General UI Design screens
  phase1StyleGuide:  'https://www.figma.com/api/mcp/asset/b212a8f7-8d06-4cd4-ae23-d9873686fb58',
  phase1Home:        'https://www.figma.com/api/mcp/asset/a0d6ad87-dede-466c-8a09-e10a1fa7ecdc',
  phase1News2:       'https://www.figma.com/api/mcp/asset/9c6c38cc-da70-4622-ba36-b95d1bfa22b5',
  phase1About:       'https://www.figma.com/api/mcp/asset/387189d6-fb66-4eac-b5a4-cf8e0434241f',
  phase1News1:       'https://www.figma.com/api/mcp/asset/cbc9adc1-652d-4fa1-a4b9-e80d267b7445',
  phase1News3:       'https://www.figma.com/api/mcp/asset/3066cc85-6b83-4234-a555-0a747923a4f9',
  phase1News4:       'https://www.figma.com/api/mcp/asset/8ec5e79a-70e8-4891-a3e8-212ab1b2cfa3',
  phase1News5:       'https://www.figma.com/api/mcp/asset/e32a81df-94f6-44f1-930e-77f5ca0cabf1',
  phase1News6:       'https://www.figma.com/api/mcp/asset/f9e3f2eb-fb79-47d0-97f1-c1f8ecceee79',
  phase1News7:       'https://www.figma.com/api/mcp/asset/f85c4300-aada-44ae-945f-a912e073fec6',
  phase1News8:       'https://www.figma.com/api/mcp/asset/596e63b1-0f4d-461d-95ab-474fbb217a17',
  phase1StyleGuide2: 'https://www.figma.com/api/mcp/asset/94120ff8-04fc-44f3-a7eb-7951e639ed64',

  // Phase 2 — Content Template screens
  phase2Screen1: 'https://www.figma.com/api/mcp/asset/4d223b63-c288-4f65-b011-fb4be9232b52',
  phase2Screen2: 'https://www.figma.com/api/mcp/asset/ee65faf5-d055-4b5d-bde0-10a355524b23',
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
