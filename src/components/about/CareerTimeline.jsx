/**
 * CareerTimeline — premium scroll-driven vertical career timeline.
 *
 * Visual style: soft light, feminine portfolio — blends with #F8E9E6 page bg.
 *
 * Animations:
 *   - Center line fills top→bottom via useScroll + useSpring (coral→rose gradient)
 *   - Milestone nodes activate (glow + scale + pulse ring) as line reaches them
 *   - Each card fades-up when entering viewport, hover lifts with glow shadow
 *   - Active card gets glowing coral border + brightened title
 *
 * Layout:
 *   Desktop: alternating left/right cards on 3-col grid, center line + nodes
 *   Mobile:  left-rail line, all cards stacked on right
 */
import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'

// ── Data ──────────────────────────────────────────────────────────────────────
const timeline = [
  {
    year: '2019 – 2021',
    role: 'Junior UX/UI Designer',
    company: 'Goconnext Co., Ltd.',
    subtitle: null,
    description:
      'Participated in meetings with clients and stakeholders to gather requirements, understand business objectives and user needs, and define project scope, then translated those requirements into clear, user-friendly, and responsive website designs. Developed and implemented websites using WordPress, managing the process from design to deployment, while overseeing the end-to-end workflow from client communication and wireframing to documentation and final website handover.',
  },
  {
    year: '2021 – 2023',
    role: 'Junior UX/UI Designer',
    company: 'InsightEra Co., Ltd.',
    subtitle: 'Gable Subsidiary',
    description:
      'Contributed to the design and improvement of digital products, focusing on enhancing usability, interface clarity, and overall user experience. Supported the UX/UI design process through competitor analysis, user journey mapping, interface design, and presenting design solutions to internal teams. Independently managed end-to-end website design projects, from requirement gathering and stakeholder discussions to cross-functional collaboration and developer handoff. Also designed branding materials, visual assets, and chatbot rich menu interfaces to ensure brand consistency and create intuitive user experiences.',
  },
  {
    year: '2023 – Now',
    role: 'UX/UI Designer',
    company: 'InsightEra Co., Ltd.',
    subtitle: 'Gable Subsidiary',
    description:
      'Served as the main UX/UI Designer for enterprise digital products, covering product ideation, AI-related research, feature definition, high-fidelity wireframes, design systems, reusable UI components, and final interface designs in close collaboration with product teams. Also contributed to feature development for internal management tools through competitor research, feature ideation, and interface design aligned with established design systems. Created user stories and clear acceptance criteria based on designed UI features to ensure accurate implementation and quality standards. Managed developer handoff through walkthrough sessions and design-to-code processes, enabling a smooth translation from design to implementation. Leveraged AI tools to accelerate high-fidelity wireframing, business validation, and UI review workflows, significantly reducing turnaround and review time. Independently handled website implementation design projects from pre-sales support and design direction to client requirement gathering, interface design aligned with brand guidelines, stakeholder presentations, developer handoff, and cross-functional collaboration to ensure on-time delivery.',
  },
  
    ]

// Scroll progress thresholds at which each node activates (0–1)
const NODE_THRESHOLDS = [0.08, 0.44, 0.76]

// Premium spring — snappy but not jarring
const LINE_SPRING = { stiffness: 60, damping: 22, restDelta: 0.001 }

// Shared ease curve
const SMOOTH = [0.22, 1, 0.36, 1]

// ── Sub-components ────────────────────────────────────────────────────────────

function MilestoneNode({ isActive }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 56, height: 56 }}>
      {/* Outer pulse ring — looping when active */}
      {isActive && (
        <motion.span
          key="pulse"
          aria-hidden="true"
          className="absolute rounded-full"
          initial={{ scale: 0.7, opacity: 0.7 }}
          animate={{ scale: 2.4, opacity: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          style={{
            width: 24,
            height: 24,
            border: '1.5px solid rgba(255,121,126,0.55)',
          }}
        />
      )}

      {/* Inner node dot */}
      <motion.span
        className="rounded-full"
        animate={{
          width:           isActive ? 22 : 14,
          height:          isActive ? 22 : 14,
          backgroundColor: isActive ? '#FF797E' : 'rgba(255,121,126,0.18)',
          boxShadow:       isActive
            ? '0 0 0 5px rgba(255,121,126,0.14), 0 0 22px 0 rgba(255,121,126,0.40)'
            : 'none',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      />
    </div>
  )
}

function TimelineCard({ item, isActive, delay }) {
  return (
    /* Outer — entry animation + hover lift */
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.72, ease: SMOOTH, delay }}
      whileHover="cardHover"
      className="w-full max-w-[480px]"
    >
      {/* Inner — active-state border + shadow; inherits "cardHover" variant */}
      <motion.div
        className="relative overflow-hidden rounded-2xl"
        style={{ border: '1px solid transparent' }}
        animate={{
          borderColor: isActive
            ? 'rgba(255,121,126,0.32)'
            : 'rgba(255,193,197,0.30)',
          boxShadow: isActive
            ? '0 0 28px 0 rgba(255,121,126,0.10), 0 8px 32px 0 rgba(255,121,126,0.08)'
            : '0 4px 20px 0 rgba(200,150,155,0.10)',
          background: isActive
            ? 'rgba(255,255,255,0.82)'
            : 'rgba(255,255,255,0.68)',
        }}
        variants={{
          cardHover: {
            boxShadow: '0 0 36px 0 rgba(255,121,126,0.16), 0 12px 44px 0 rgba(255,121,126,0.10)',
          },
        }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {/* Backdrop blur layer */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        />

        {/* Hover top-glow overlay */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          variants={{ cardHover: { opacity: 1 } }}
          transition={{ duration: 0.35 }}
          style={{
            background:
              'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255,175,179,0.18) 0%, transparent 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8">
          {/* Year badge */}
          <motion.span
            className="inline-flex items-center mb-5 px-3 py-[5px] rounded-full text-xs font-fredoka font-medium tracking-widest uppercase"
            style={{ fontVariationSettings: "'wdth' 100" }}
            animate={{
              color:           isActive ? '#FF797E' : '#ABADBE',
              backgroundColor: isActive ? 'rgba(255,121,126,0.08)' : 'rgba(255,193,197,0.15)',
              borderColor:     isActive ? 'rgba(255,121,126,0.28)' : 'rgba(255,193,197,0.35)',
              border:          '1px solid',
            }}
            transition={{ duration: 0.45 }}
          >
            {item.year}
          </motion.span>

          {/* Role */}
          <motion.h3
            className="font-fredoka font-semibold mb-2 leading-snug"
            style={{
              fontSize: 'clamp(18px, 1.6vw, 24px)',
              fontVariationSettings: "'wdth' 100",
            }}
            animate={{ color: isActive ? '#3E446B' : '#565B7E' }}
            transition={{ duration: 0.45 }}
          >
            {item.role}
          </motion.h3>

          {/* Company */}
          <motion.p
            className="font-fredoka font-medium mb-5"
            style={{
              fontSize: 'clamp(13px, 1.1vw, 16px)',
              fontVariationSettings: "'wdth' 100",
            }}
            animate={{ color: isActive ? '#FF797E' : '#ABADBE' }}
            transition={{ duration: 0.45 }}
          >
            {item.company}
            {item.subtitle && (
              <span
                className="block mt-0.5"
                style={{ fontSize: 'clamp(11px, 0.9vw, 13px)', opacity: 0.7 }}
              >
                {item.subtitle}
              </span>
            )}
          </motion.p>

          {/* Description */}
          <p
            className="font-fredoka font-normal leading-relaxed"
            style={{
              fontSize: 'clamp(13px, 1vw, 15px)',
              fontVariationSettings: "'wdth' 100",
              color: '#6E7390',
              lineHeight: 1.75,
            }}
          >
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function CareerTimeline() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.82', 'end 0.18'],
  })

  // Smooth the raw scroll value for the progress line
  const lineProgress = useSpring(scrollYProgress, LINE_SPRING)

  // Which nodes have been reached
  const [activeNodes, setActiveNodes] = useState([false, false, false])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = NODE_THRESHOLDS.map((t) => v >= t)
    setActiveNodes((prev) => {
      if (prev.every((p, i) => p === next[i])) return prev
      return next
    })
  })

  return (
    <section
      ref={sectionRef}
      id="career"
      className="relative w-full overflow-hidden"
      style={{ background: '#F7F3F3' }}
      aria-label="Career Timeline"
    >

      {/* ── Floating blur blobs ──────────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[540px] h-[540px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,175,179,1) 0%, transparent 70%)',
            opacity: 0.32,
            filter: 'blur(2px)',
          }}
        />
        <div
          className="absolute top-1/2 -right-52 w-[620px] h-[620px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,210,180,1) 0%, transparent 70%)',
            opacity: 0.22,
            filter: 'blur(2px)',
          }}
        />
        <div
          className="absolute -bottom-36 left-1/3 w-[480px] h-[480px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,230,220,1) 0%, transparent 70%)',
            opacity: 0.28,
            filter: 'blur(2px)',
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div
        className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-14"
        style={{
          paddingTop:    'clamp(96px, 10vw, 140px)',
          paddingBottom: 'clamp(96px, 10vw, 140px)',
        }}
      >
        {/* ── Section heading ─────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
          }}
        >
          <motion.p
            className="font-fredoka font-medium uppercase tracking-[0.22em] mb-3"
            style={{
              fontSize: 'clamp(11px, 0.9vw, 13px)',
              fontVariationSettings: "'wdth' 100",
              color: '#FF797E',
            }}
            variants={{
              hidden:   { opacity: 0, y: 14 },
              visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: SMOOTH } },
            }}
          >
            Career Journey
          </motion.p>

          <motion.h2
            className="font-fredoka font-semibold"
            style={{
              fontSize: 'clamp(32px, 4.4vw, 60px)',
              fontVariationSettings: "'wdth' 100",
              lineHeight: 1.1,
              color: '#3E446B',
            }}
            variants={{
              hidden:   { opacity: 0, y: 22 },
              visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: SMOOTH } },
            }}
          >
            My Experience
          </motion.h2>

          <motion.p
            className="font-fredoka font-medium mt-3"
            style={{
              fontSize: 'clamp(20px, 2.2vw, 32px)',
              fontVariationSettings: "'wdth' 100",
              color: '#05A2C6',
            }}
            variants={{
              hidden:   { opacity: 0, y: 14 },
              visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: SMOOTH } },
            }}
          >
            Since 2019
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            className="mx-auto mt-8"
            style={{ width: 48, height: 2, borderRadius: 99, background: 'linear-gradient(to right, #FF797E, #FFAFB3)' }}
            variants={{
              hidden:   { opacity: 0, scaleX: 0 },
              visible:  { opacity: 1, scaleX: 1, transition: { duration: 0.7, ease: SMOOTH } },
            }}
          />
        </motion.div>

        {/* ── Timeline ────────────────────────────────────────────────── */}
        <div className="relative">

          {/* ── DESKTOP: animated center progress line ──────────────── */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none"
            style={{ width: 2 }}
            aria-hidden="true"
          >
            {/* Dim background track */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: 'rgba(255,121,126,0.15)' }}
            />
            {/* Animated fill */}
            <motion.div
              className="absolute top-0 left-0 right-0 rounded-full origin-top"
              style={{
                height:     '100%',
                scaleY:     lineProgress,
                background: 'linear-gradient(to bottom, #FF797E 0%, #FFAFB3 100%)',
              }}
            />
          </div>

          {/* ── MOBILE: left rail progress line ─────────────────────── */}
          <div
            className="md:hidden absolute top-0 bottom-0 pointer-events-none"
            style={{ left: 27, width: 2 }}
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: 'rgba(255,121,126,0.15)' }}
            />
            <motion.div
              className="absolute top-0 left-0 right-0 rounded-full origin-top"
              style={{
                height:     '100%',
                scaleY:     lineProgress,
                background: 'linear-gradient(to bottom, #FF797E 0%, #FFAFB3 100%)',
              }}
            />
          </div>

          {/* ── Rows ────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-16 md:gap-28">
            {timeline.map((item, i) => {
              const isLeft   = i % 2 === 0
              const isActive = activeNodes[i]
              const delay    = 0.05

              return (
                <div key={i}>
                  {/* DESKTOP: 3-col grid */}
                  <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] md:items-center md:gap-8">
                    {/* Left column */}
                    <div className="flex justify-end">
                      {isLeft ? (
                        <TimelineCard item={item} isActive={isActive} delay={delay} />
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* Center: node */}
                    <div className="flex justify-center">
                      <MilestoneNode isActive={isActive} />
                    </div>

                    {/* Right column */}
                    <div className="flex justify-start">
                      {!isLeft ? (
                        <TimelineCard item={item} isActive={isActive} delay={delay} />
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>

                  {/* MOBILE: left-rail layout */}
                  <div className="md:hidden flex items-start gap-5">
                    {/* Node on left rail */}
                    <div className="shrink-0" style={{ paddingTop: 4 }}>
                      <MilestoneNode isActive={isActive} />
                    </div>
                    {/* Card on right */}
                    <div className="flex-1 min-w-0">
                      <TimelineCard item={item} isActive={isActive} delay={delay} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
