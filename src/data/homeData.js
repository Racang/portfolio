// ─── Home page asset paths ──────────────────────────────────────────────────
// import.meta.env.BASE_URL is '/' in dev and '/Rachaya_Portfolio/' on GitHub Pages
const base = import.meta.env.BASE_URL

export const homeImages = {
  // Hero section
  heroBg:         `${base}images/5b90ee961fe86954ac3684169c3bc4cb0709d028.svg`,  // Vector 4 (right-side blob)
  heroDecor:      `${base}images/Home_Bannder_decor01.svg`,  // Group 1686550957
  heroGirl:       `${base}images/Home_Banner_girl.png`,  // a girl 2 character

  // About section
  aboutWave:      `${base}images/BG_Pink02.png`,  // About section full-bleed background (home page)
  aboutProfileBg: `${base}images/About_Profile_BG.svg`, // About page profile section BG (cream + wavy bottom)
  aboutProfile:   `${base}images/Home_About_me.png`,
  profileCircle:  `${base}images/Home_Banner_girl_decor.svg`,  // Ellipse 2155 (pink circle bg)

  // Project card shared
  cardFrame:      `${base}images/deb4883759bd3fc974709f2093d2859094ad29f4.svg`,  // white card frame
  cardThumb:      `${base}images/370e63fe7d2841d62f2c5d5ca14e77d2e9ca1582.png`,  // thumbnail

  // Project card backgrounds (one per card, all same shape, different fill)
  cardBg1:        `${base}images/276d284c7b94f43c48fb1408800736182d5e73b0.svg`,
  cardBg2:        `${base}images/2c86e06537308ef68b0a5345025d22e0da47bcd8.svg`,
  cardBg3:        `${base}images/f32b7e5efce31beca23a6f41fdadc12d3deebc46.svg`,
  cardBg4:        `${base}images/f5e9a9fe4d900347d615af538ef51d5e07683632.svg`,

  // Arrow icons
  arrowIcon:      `${base}images/ba43d650bfed32aa6b7ab5060c5502ff9a78caf1.svg`,

  // Contact section
  contactBg:      `${base}images/Home_Contact_bg.png`,                              // Contact section background (2884×1808)
  contactDecor1:  `${base}images/f53a4115a5ea688effd30d31ccb3f541b17bfe9b.svg`,  // Group 1686550951
  contactDecor2:  `${base}images/d8d51d09e8c86ac0a3af4d346a3862fa8992373c.svg`,  // Group 1686550954
  contactChar:    `${base}images/Home_Contact_Girl02.png`,  // Gemini character
  emailIcon:      `${base}images/e9b7b1cd3bdbb740baac13112169a9040a91517c.png`,  // open-email 1
  phoneIcon:      `${base}images/7c83765579a2f97748d90656286bb1738c3de9c2.png`,  // contact 1
  bubbleCircle:   `${base}images/43e3b3fd5c501fd95684843f87c002ad0e1a7a4a.svg`,  // Ellipse 2153 (white circle)
  bubbleShape:    `${base}images/5aaa5611d91c81849347708854f16afd0d83fb47.svg`,  // Vector bubble wrapper

  // Footer / misc
  footerBg:       `${base}images/Footer_bg.png`,                                     // Footer background
  footerWave:     `${base}images/e5a3c794fc27f908eb34fd7a3d71cc3961b942a3.svg`,  // Union footer wave
  paginationLine: `${base}images/a72935160eade7697512b7e8e69c1062d4d1d73c.svg`,  // Line 1399
}

// ─── Portfolio projects data ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    slug: 'gena',
    title: 'Generative Enterprise\nAI Platform',
    description:
      'A secure enterprise AI platform enabling teams to access internal knowledge and workflows efficiently.',
    logo: `${base}images/9c86fb41084f9ff855781c84020fec2ff01ac64e.svg`,  // Gena Logo
    logoWidth: 94,
    logoHeight: 32,
    bg: `${base}images/276d284c7b94f43c48fb1408800736182d5e73b0.svg`,
    thumb: `${base}images/Project_Gena_Cover.png`,
  },
  {
    id: 2,
    slug: 'irpc',
    title: 'IRPC Website',
    description:
      'An integrated petrochemical and petroleum company in Thailand, focused on innovation, industrial solutions, and sustainable energy.',
    logo: `${base}images/1cdb5d96b2265acbd0f48f14f1654bf56e028e4b.png`,
    logoWidth: 85,
    logoHeight: 29,
    bg: `${base}images/f32b7e5efce31beca23a6f41fdadc12d3deebc46.svg`,
    thumb: `${base}images/Project_Irpc_Cover.png`,
  },
  {
    id: 3,
    slug: 'thaioil',
    title: 'Thaioil website',
    description:
      "Thailand's largest petroleum refinery operator and one of the most efficient refineries in the Asia-Pacific region.",
    logo: `${base}images/1d03c5b2131211fe3a2ec7f831c23697a2e9d534.png`,
    logoWidth: 68,
    logoHeight: 32,
    bg: `${base}images/f5e9a9fe4d900347d615af538ef51d5e07683632.svg`,
    thumb: `${base}images/Project_Thaioil_Cover.png`,
  },
  {
    id: 4,
    slug: 'tostem',
    title: 'Tostem website',
    description:
      'A leading Japanese brand of high-quality pre-engineered aluminum doors and window solutions.',
    logo: `${base}images/1dc4aad31694aa6d03d522d566ebf471c5deccd6.png`,
    logoWidth: 85,
    logoHeight: 32,
    bg: `${base}images/2c86e06537308ef68b0a5345025d22e0da47bcd8.svg`,
    thumb: `${base}images/Project_Tostem_Cover.png`,
  },
]

// ─── Nav items ───────────────────────────────────────────────────────────────
export const homeNavItems = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact',  to: '/contact' },
]
