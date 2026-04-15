// ---------------------------------------------------------------------------
// IRPC — Cooperate Website  (DEC 2024 – FEB 2025)
// All image URLs sourced from Figma MCP (node 40000526:1509)
// ---------------------------------------------------------------------------

export const irpcImages = {
  // Role card icon
  computerIcon:     'https://www.figma.com/api/mcp/asset/fa5e1951-0d50-4a9e-9558-86cf033d4ba5',

  // What I Did — right screenshot
  uiHomepage:       'https://www.figma.com/api/mcp/asset/517a4a49-1643-4daf-855e-c20704a4367a',

  // Challenge icon
  challengeIcon:    'https://www.figma.com/api/mcp/asset/439348a7-ef02-40d2-825c-7a348e00dd5c',

  // Proposal Design Direction — left image (both directions composite)
  proposalImage:    'https://www.figma.com/api/mcp/asset/3eed51f8-d7e0-43b1-86c6-f540bd491164',

  // Design Direction — colour-palette overview strip
  paletteImage:     'https://www.figma.com/api/mcp/asset/5cb5a872-4fb8-4c6e-88d3-0ded191990f0',

  // Design Direction cards (updated — equal height ~1427px for top-alignment)
  direction21:      'https://www.figma.com/api/mcp/asset/7765808a-afda-4277-afdf-64b828fd5a17',
  direction22:      'https://www.figma.com/api/mcp/asset/2631db5b-3598-4ebc-9168-2ae205d93d3a',
  direction23:      'https://www.figma.com/api/mcp/asset/5762ca6a-04cf-4452-bac9-c4994475cae2',

  // Phase 1 screens
  phase1StyleGuide: 'https://www.figma.com/api/mcp/asset/d9ada589-b752-4e47-98a1-284b0373b3b1',
  phase1Home:       'https://www.figma.com/api/mcp/asset/f065f1c2-ee1a-4a3f-87a2-12259dc7738c',
  phase1News:       'https://www.figma.com/api/mcp/asset/84fd24ae-ef88-4262-8f2b-4c8afadc4cdf',
  phase1About:      'https://www.figma.com/api/mcp/asset/98939ba6-183b-45ec-8b29-8f1fce799e47',

  // Phase 2 — side-by-side preview thumbnails
  phase2Image1:     'https://www.figma.com/api/mcp/asset/e2d0268a-42a0-46ed-84a6-de0a62ae013e',
  phase2Image2:     'https://www.figma.com/api/mcp/asset/110ed3c3-a2a8-4602-a4b8-8e09bb10d474',

  // Phase 2 — full-width screens
  phase2StyleGuide: 'https://www.figma.com/api/mcp/asset/2f9a1d7b-cd77-47e0-b807-89b33712bc29',
  phase2Home:       'https://www.figma.com/api/mcp/asset/3a3e4129-62c2-4eac-bc82-198c1465d777',
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
