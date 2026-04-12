/**
 * ExperienceTimeline — "My Experience / Since 2019" section.
 *
 * Figma reference: "Group 1686550940" (node 40000150:29721), y=1146 h=3024
 * Layout (1440px wide):
 *   - Centered "My Experience" heading + coral "Since 2019" subtitle
 *   - Small chibi character illustration at top of center line
 *   - Thin vertical grey center line running down the full section
 *   - 3 alternating entries — each has:
 *       side='left'  → card on LEFT  | coral dot + horizontal line + year on RIGHT
 *       side='right' → year + horizontal line + coral dot on LEFT | card on RIGHT
 *   - Job title in coral (Fredoka semibold), "(Gable Subsidiary)" in smaller coral
 *   - Description in Poppins regular grey-400
 *   - Responsive: single column on mobile with left-rail dot + line
 */
import { motion } from 'framer-motion'
import { timelineItems } from '../../data/aboutData'
import { fadeLeft, fadeRight, fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations'

// Small chibi character that sits at the top of the center timeline line
const TIMELINE_CHAR = `${import.meta.env.BASE_URL}images/Home_Contact_Girl.png`

/** One timeline row — handles both left and right variants */
function TimelineRow({ item }) {
  const isLeft = item.side === 'left'

  const card = (
    <motion.div
      variants={isLeft ? fadeLeft : fadeRight}
      className="flex flex-col gap-3 w-full max-w-[430px]"
    >
      {/* Role title */}
      <p
        className="font-fredoka font-semibold text-coral leading-tight"
        style={{ fontSize: 'clamp(18px, 1.9vw, 28px)', fontVariationSettings: "'wdth' 100" }}
      >
        {item.role}
        <br />
        at {item.company}
        {item.subsidiary && (
          <span className="block" style={{ fontSize: 'clamp(14px, 1.3vw, 20px)' }}>
            ({item.subsidiary})
          </span>
        )}
      </p>

      {/* Description */}
      <p
        className="font-poppins text-grey-400 leading-relaxed"
        style={{ fontSize: 'clamp(13px, 1vw, 14px)' }}
      >
        {item.description}
      </p>
    </motion.div>
  )

  const yearNode = (
    <motion.div
      variants={scaleIn}
      className={`flex items-center gap-3 shrink-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Horizontal connector line */}
      <div className="w-12 h-px bg-grey-500/40" />
      {/* Coral dot */}
      <div className="w-10 h-10 rounded-full bg-coral border-[3px] border-white shadow-pink shrink-0" />
      {/* Horizontal connector line */}
      <div className="w-12 h-px bg-grey-500/40" />
      {/* Year label */}
      <p
        className="font-fredoka font-medium text-grey-800 whitespace-nowrap"
        style={{ fontSize: 'clamp(16px, 1.8vw, 26px)', fontVariationSettings: "'wdth' 100" }}
      >
        {item.period}
      </p>
    </motion.div>
  )

  return (
    <>
      {/* ── DESKTOP layout ─────────────────────────────────────────── */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
        {/* Left column */}
        <div className="flex justify-end">
          {isLeft ? card : <div />}
        </div>

        {/* Center node (year + dot + lines) */}
        <div className="flex flex-col items-center">
          {yearNode}
        </div>

        {/* Right column */}
        <div className="flex justify-start">
          {!isLeft ? card : <div />}
        </div>
      </div>

      {/* ── MOBILE layout ──────────────────────────────────────────── */}
      <div className="md:hidden flex items-start gap-4">
        {/* Left rail: dot */}
        <div className="flex flex-col items-center shrink-0 pt-1">
          <div className="w-4 h-4 rounded-full bg-coral border-2 border-white shadow-pink" />
        </div>
        {/* Content */}
        <div className="flex-1 pb-2">
          <p
            className="font-fredoka font-medium text-coral mb-3"
            style={{ fontSize: '14px', fontVariationSettings: "'wdth' 100" }}
          >
            {item.period}
          </p>
          {card}
        </div>
      </div>
    </>
  )
}

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative w-full bg-bg-warm overflow-hidden"
      style={{
        paddingTop:    'clamp(60px, 6vw, 86px)',
        paddingBottom: 'clamp(80px, 9vw, 130px)',
      }}
      aria-label="Experience"
    >
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">

        {/* ── Section heading ──────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={fadeUp}
            className="font-fredoka font-semibold text-grey-800 leading-tight"
            style={{
              fontSize: 'clamp(36px, 4.2vw, 60px)',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            My Experience
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-fredoka font-medium text-coral"
            style={{
              fontSize: 'clamp(22px, 3vw, 44px)',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            Since 2019
          </motion.p>
        </motion.div>

        {/* ── Timeline wrapper — relative for the center line ── */}
        <div className="relative">

          {/* ── Center vertical line (desktop only) ──────────── */}
          <div
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
            style={{ width: '1px', backgroundColor: 'rgba(180,180,200,0.35)' }}
            aria-hidden="true"
          />

          {/* ── Chibi character at top of center line ─────────── */}
          <div
            className="hidden md:flex justify-center items-center mb-8 relative z-10"
            aria-hidden="true"
          >
            <div
              className="rounded-[16px] overflow-hidden shadow-pink-sm"
              style={{ width: 'clamp(80px, 8.7vw, 126px)', height: 'clamp(70px, 7.6vw, 110px)' }}
            >
              <img
                src={TIMELINE_CHAR}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ── Entries ──────────────────────────────────────── */}
          <motion.div
            className="flex flex-col gap-16 md:gap-20 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Mobile: left rail line behind items */}
            <div
              className="md:hidden absolute top-0 bottom-0 left-2 -translate-x-px pointer-events-none"
              style={{ width: '1px', backgroundColor: 'rgba(180,180,200,0.4)' }}
              aria-hidden="true"
            />

            {timelineItems.map(item => (
              <TimelineRow key={item.id} item={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
