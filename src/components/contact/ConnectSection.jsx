/**
 * ConnectSection — "Let's Connect" section for the Contact page.
 *
 * Figma reference: node 40000260:3703 (top=449, h=717.23)
 * Layout:
 *   - Union wave background SVG (#FEFCF1 cream, 1442×1059)
 *   - "Let's Connect" heading — Fredoka SemiBold 60px / grey-800
 *   - Three contact cards in a flex-wrap row (gap=45px, justify-center):
 *       Email   · Call   · Address
 *   - Each card uses the green Bubble_Small SVG (#EEFBDC)
 *
 * Assets (downloaded from Figma):
 *   unionBg     → /images/contact/a1b8f15fd6e6415eedac0894ee6320de3767a8e7.svg  (1442×1059 wave)
 *   bubbleShape → /images/contact/98100ea091acd044b8fc9a05fe762bb4373277b7.svg  (396×237 green bubble)
 *   addressIcon → /images/contact/cf11603dd12e3bb9fb8735a6e47100be65cd9480.png
 *   emailIcon   → homeImages.emailIcon (shared)
 *   phoneIcon   → homeImages.phoneIcon (shared)
 *   circleIcon  → homeImages.bubbleCircle (shared 70×70 circle)
 */
import { motion } from 'framer-motion'
import { homeImages } from '../../data/homeData'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations'

const base         = import.meta.env.BASE_URL
const UNION_BG     = `${base}images/contact/a1b8f15fd6e6415eedac0894ee6320de3767a8e7.svg`
const BUBBLE_SHAPE = `${base}images/contact/98100ea091acd044b8fc9a05fe762bb4373277b7.svg`
const ADDRESS_ICON = `${base}images/contact/cf11603dd12e3bb9fb8735a6e47100be65cd9480.png`

const cards = [
  {
    icon:  homeImages.emailIcon,
    label: 'Email me',
    value: 'rachaya.ang@gmail.com',
    href:  'mailto:rachaya.ang@gmail.com',
  },
  {
    icon:  homeImages.phoneIcon,
    label: 'Call me',
    value: '+66955892108',
    href:  'tel:+66955892108',
  },
  {
    icon:  ADDRESS_ICON,
    label: 'Address',
    value: 'Bangkok, Thailand',
  },
]

function ContactCard({ icon, label, value, href }) {
  const sharedStyle = { width: 'clamp(280px, 27.5vw, 396px)', height: 'clamp(167px, 16.5vw, 237px)' }
  const sharedClass = 'relative group rounded-2xl'

  const inner = (
    <>
      {/* ── Bubble background ── */}
      <img
        src={BUBBLE_SHAPE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* ── Content — absolutely fills the bubble, always horizontally centered ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-start gap-[clamp(8px,0.9vw,13px)]"
        style={{ paddingTop: 'clamp(20px, 2.4vw, 34px)' }}
      >
        {/* Icon ring: circle background + inner icon, both centered */}
        <div
          className="relative shrink-0"
          style={{ width: 'clamp(50px, 4.86vw, 70px)', height: 'clamp(50px, 4.86vw, 70px)' }}
        >
          <img
            src={homeImages.bubbleCircle}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full"
          />
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 m-auto object-contain"
            style={{ width: 'clamp(32px, 3.19vw, 46px)', height: 'clamp(32px, 3.19vw, 46px)' }}
          />
        </div>

        {/* Label + value */}
        <div className="flex flex-col items-center gap-2 text-grey-800 text-center px-4">
          <p
            className="font-fredoka font-normal leading-[1.4]"
            style={{ fontSize: 'clamp(14px, 1.67vw, 24px)', fontVariationSettings: "'wdth' 100" }}
          >
            {label}
          </p>
          <p
            className={`font-fredoka font-medium leading-[1.2] transition-colors${href ? ' group-hover:text-coral' : ''}`}
            style={{ fontSize: 'clamp(15px, 1.94vw, 28px)', fontVariationSettings: "'wdth' 100" }}
          >
            {value}
          </p>
        </div>
      </div>
    </>
  )

  if (!href) {
    return (
      <motion.div
        variants={scaleIn}
        className={sharedClass}
        style={sharedStyle}
      >
        {inner}
      </motion.div>
    )
  }

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      variants={scaleIn}
      whileHover={{ scale: 1.03 }}
      className={`${sharedClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral`}
      style={sharedStyle}
    >
      {inner}
    </motion.a>
  )
}

export default function ConnectSection() {
  return (
    <section
      id="connect"
      className="relative w-full overflow-hidden z-10"
      style={{ marginTop: 'clamp(-50px, -4.8vw, -69px)' }}
      aria-label="Let's Connect"
    >
      {/* ── Union wave background (absolute, full-width) ── */}
      <img
        src={UNION_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full pointer-events-none select-none"
        style={{ height: 'clamp(700px, 73.5vw, 1059px)', objectFit: 'fill' }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20 flex flex-col items-center"
        style={{
          gap:           'clamp(32px, 3.9vw, 56px)',
          paddingTop:    'clamp(100px, 9.72vw, 140px)',
          paddingBottom: 'clamp(80px, 8.33vw, 120px)',
        }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="font-fredoka font-semibold text-grey-800 text-center leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(36px, 4.17vw, 60px)',
            fontVariationSettings: "'wdth' 100",
          }}
        >
          Let's Connect
        </motion.h2>

        {/* Cards row */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap gap-[45px] items-center justify-center w-full"
        >
          {cards.map((card) => (
            <ContactCard key={card.label} {...card} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
