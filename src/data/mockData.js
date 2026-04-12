// ─── Local image assets (stored in /public/images/) ─────────────────────────
export const images = {
  // Banner
  background:   '/images/banner-background.svg',
  union:        '/images/banner-union.svg',

  // Role card (Tostem logo group)
  logo:         '/images/logo-tostem.svg',

  // What I Did — node: UI_ Homepage 1
  uiHomepage1:  '/images/whatidid-ui-homepage.png',

  // Design Direction — one flat image per card (no layered overlays)
  direction1:   '/images/design-direction-01.png',
  direction2:   '/images/design-direction-02.png',
  direction3:   '/images/design-direction-03.png',

  // Phase I Final UI — 12 screens matching Figma node order
  styleGuide:   '/images/finalui-style-guide.png',
  iprpcHome:    '/images/finalui-iprpc-home.png',
  iprpcNews2:   '/images/finalui-iprpc-news-02.png',
  iprpcAbout:   '/images/finalui-iprpc-about.png',
  iprpcNews1:   '/images/finalui-iprpc-news-01.png',
  iprpcNews3:   '/images/finalui-iprpc-news-03.png',
  iprpcNews4:   '/images/finalui-iprpc-news-04.png',
  iprpcNews5:   '/images/finalui-iprpc-news-05.png',
  iprpcNews7:   '/images/finalui-iprpc-news-07.png',
  iprpcNews8:   '/images/finalui-iprpc-news-08.png',
  iprpcNews9:   '/images/finalui-iprpc-news-09.png',
  iprpcNews10:  '/images/finalui-iprpc-news-10.png',
}

// ─── Navigation ────────────────────────────────────────────────────────────
export const navItems = [
  { label: 'Home',    active: false },
  { label: 'Project', active: true  },
  { label: 'About',   active: false },
  { label: 'Contact', active: false },
]

// ─── Project metadata ───────────────────────────────────────────────────────
export const projectInfo = {
  duration:  '10 Week',
  period:    '(JUN 2022 – AUG 2022)',
  platform:  'Website',
  role:      'UI Design',
}

// ─── "What I did" bullet list ────────────────────────────────────────────────
export const whatIDidItems = [
  {
    parts: [{ text: 'Design direction to support sales proposals.', highlight: false }],
  },
  {
    parts: [
      { text: 'Gather business & user ',  highlight: false },
      { text: 'requirements',             highlight: true  },
    ],
  },
  {
    parts: [{ text: 'Designed interface screens aligned with clients brand guidelines', highlight: false }],
  },
  {
    parts: [
      { text: 'Handover UI',   highlight: true  },
      { text: ' to developers', highlight: false },
    ],
  },
  {
    parts: [
      { text: 'Review',          highlight: true  },
      { text: ' implemented UI', highlight: false },
    ],
  },
]

// ─── Phase I Final UI screenshots ───────────────────────────────────────────
export const finalUIScreens = [
  { key: 'styleGuide', alt: 'UI Style Guide',   aspectClass: 'aspect-[2/1]' },
  { key: 'iprpcHome',  alt: 'IPRPC Home',       aspectClass: 'aspect-video' },
  { key: 'iprpcNews2', alt: 'IPRPC News (2)',   aspectClass: 'aspect-video' },
  { key: 'iprpcAbout', alt: 'IPRPC About',      aspectClass: 'aspect-video' },
  { key: 'iprpcNews1', alt: 'IPRPC News (1)',   aspectClass: 'aspect-video' },
  { key: 'iprpcNews3', alt: 'IPRPC News (3)',   aspectClass: 'aspect-video' },
  { key: 'iprpcNews4', alt: 'IPRPC News (4)',   aspectClass: 'aspect-video' },
  { key: 'iprpcNews5', alt: 'IPRPC News (5)',   aspectClass: 'aspect-video' },
  { key: 'iprpcNews7', alt: 'IPRPC News (7)',   aspectClass: 'aspect-video' },
  { key: 'iprpcNews8', alt: 'IPRPC News (8)',   aspectClass: 'aspect-video' },
  { key: 'iprpcNews9', alt: 'IPRPC News (9)',   aspectClass: 'aspect-video' },
  { key: 'iprpcNews10',alt: 'IPRPC News (10)',  aspectClass: 'aspect-video' },
]
