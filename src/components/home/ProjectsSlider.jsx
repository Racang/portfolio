/**
 * ProjectsSlider — premium editorial horizontal slider.
 *
 * Figma reference: node 40000192:29643
 * Interaction: drag · swipe · mouse-wheel (horizontal) · pagination click · prev/next arrows
 * Slide motion: full translate, ease-in-out ~800ms (naturalcore style)
 * Pagination: active indicator line + dark number; inactive = muted
 */
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { projects, homeImages } from '../../data/homeData'
import Button from '../ui/Button'
import { fadeUp, viewportOnce } from '../../lib/animations'

const EASE        = [0.65, 0, 0.35, 1]
const ENTER_TRANS = { duration: 0.8, ease: EASE }
const TRACK_GAP   = 80 // px gap between carousel slots

export default function ProjectsSlider() {
  const [current,  setCurrent]  = useState(0)
  const [slotPx,   setSlotPx]   = useState(0)
  const total        = projects.length
  const sectionRef   = useRef(null)
  const trackRef     = useRef(null)
  const currentRef   = useRef(current)
  const slotPxRef    = useRef(0)       // mirrors slotPx for imperative animate calls
  const animatingRef = useRef(false)   // prevents overlapping transitions
  const wheelLock    = useRef(false)
  const pointerStart = useRef(null)
  const x            = useMotionValue(0)

  // Keep ref in sync so event-listener callbacks avoid stale closures
  useEffect(() => { currentRef.current = current }, [current])

  // Keep slotPxRef in sync for imperative animate calls
  useEffect(() => { slotPxRef.current = slotPx }, [slotPx])

  const go = useCallback((idx) => {
    const next = ((idx % total) + total) % total
    if (next === currentRef.current) return
    if (animatingRef.current) return
    const isForwardLoop = currentRef.current === total - 1 && next === 0
    const targetSlot    = isForwardLoop ? total : next
    const step          = slotPxRef.current + TRACK_GAP

    setCurrent(next)
    currentRef.current = next
    animatingRef.current = true

    // Animate the track to the target slot (may be the clone at index `total`)
    animate(x, -(targetSlot * step), { duration: 0.8, ease: EASE }).then(() => {
      if (isForwardLoop) {
        // Instant silent reset from clone position to the real position 0
        x.set(0)
      }
      animatingRef.current = false
    })
  }, [total, x])

  const prev = useCallback(() => go(currentRef.current - 1), [go])
  const next  = useCallback(() => go(currentRef.current + 1), [go])

  // Autoplay — 4.5 s per slide; resets timer on every navigation (manual or auto)
  useEffect(() => {
    const id = setTimeout(() => next(), 4500)
    return () => clearTimeout(id)
  }, [current, next])

  // Measure first slot width — refreshes on resize, updates both state and ref
  useEffect(() => {
    const measure = () => {
      const first = trackRef.current?.querySelector('[data-slot]')
      if (first) {
        const w = first.getBoundingClientRect().width
        setSlotPx(w)
        slotPxRef.current = w
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Horizontal mouse-wheel — needs passive:false to preventDefault
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return  // ignore vertical
      if (wheelLock.current) return
      e.preventDefault()
      wheelLock.current = true
      if (e.deltaX > 0) next(); else prev()
      setTimeout(() => { wheelLock.current = false }, 1000)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [next, prev])

  // Pointer-based drag/swipe
  const onPointerDown = (e) => {
    pointerStart.current = { x: e.clientX, y: e.clientY }
  }
  const onPointerUp = (e) => {
    if (!pointerStart.current) return
    const dx = e.clientX - pointerStart.current.x
    const dy = e.clientY - pointerStart.current.y
    pointerStart.current = null
    if (Math.abs(dx) < Math.abs(dy) || Math.abs(dx) < 50) return
    dx < 0 ? next() : prev()
  }



  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-white overflow-hidden select-none z-0"
      style={{
        marginTop:     '-120px',
        paddingTop:    'calc(clamp(40px, 6.8vw, 100px) + 120px)',
        marginBottom:  '-100px',
        paddingBottom: 'calc(clamp(40px, 7.6vw, 100px) + 100px)',
      }}
      aria-label="My Projects"
    >
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-8 lg:px-20 pt-[21px] md:pt-0 pb-[21px] md:pb-0">

        {/* ── Heading ──────────────────────────────────────────── */}
        <motion.h2
          className="font-fredoka font-semibold text-grey-800 text-center mb-12 text-section-title"
          style={{ fontVariationSettings: "'wdth' 100" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          My Projects
        </motion.h2>

        {/* ── Carousel track — all cards persistent in a translating flex row ── */}
        <div
          className="relative cursor-grab active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => { pointerStart.current = null }}
        >
          <motion.div
            ref={trackRef}
            className="flex items-center"
            style={{ gap: TRACK_GAP, x }}
          >
            {/* Real cards + one looping clone of projects[0] appended for infinite right-side preview */}
            {[...projects, { ...projects[0], _clone: true }].map((p, i) => (
            <div
                key={p._clone ? `${p.id}-clone` : p.id}
                data-slot
                className="flex flex-col md:flex-row items-center shrink-0"
                style={{
                  width:      'clamp(280px, 90vw, 1024px)',
                  gap:        '24px',
                  opacity:    (!p._clone && i === current) ? 1 : 0.6,
                  transition: 'opacity 0.4s ease',
                  cursor:     (p._clone || i !== current) ? 'pointer' : 'default',
                }}
                onClick={(p._clone || i !== current) ? () => go(p._clone ? 0 : i) : undefined}
                role={(p._clone || i !== current) ? 'button' : undefined}
                aria-label={(p._clone || i !== current) ? `View ${p.title}` : undefined}
                tabIndex={(p._clone || i !== current) ? 0 : undefined}
                onKeyDown={(p._clone || i !== current) ? (e) => e.key === 'Enter' && go(p._clone ? 0 : i) : undefined}
              >
                {/* ── Left: card + blob ─────────────────────── */}
                <div
                  className="relative shrink-0 w-full md:w-auto"
                  style={{ width: 'clamp(240px, 32vw, 460px)', maxWidth: '100%' }}
                >
                  <div
                    className="absolute pointer-events-none select-none z-0"
                    style={{ top: '-18%', left: '-18%', width: '116%', aspectRatio: '533 / 475' }}
                  >
                    <img src={p.bg} alt="" aria-hidden="true" className="w-full h-full object-contain" />
                  </div>

                  <div className="relative z-10" style={{ aspectRatio: '514 / 400' }}>
                    <img
                      src={homeImages.cardFrame}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      style={{ objectFit: 'fill', filter: 'drop-shadow(0px 3px 16px rgba(24,74,234,0.09))' }}
                    />
                    <div className="absolute inset-[27px] rounded-[21px] overflow-hidden bg-[#d9d9d9] z-10">
                      <img
                        src={p.thumb}
                        alt={`${p.title} preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* ── Centre: text ──────────────────────────── */}
                <div className="flex flex-col gap-4 flex-1 min-w-0">
                  <div className="bg-white rounded-lg p-3 shadow-grey-card inline-flex w-fit">
                    <img
                      src={p.logo}
                      alt={`${p.title} logo`}
                      className="object-contain"
                      style={{ width: p.logoWidth, height: p.logoHeight }}
                    />
                  </div>
                  <h3
                    className="font-fredoka font-semibold text-grey-800 leading-[1.15] whitespace-pre-line"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', fontVariationSettings: "'wdth' 100" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-fredoka font-normal text-grey-700 leading-[1.4]"
                    style={{ fontSize: 'clamp(14px, 1.3vw, 18px)', fontVariationSettings: "'wdth' 100" }}
                  >
                    {p.description}
                  </p>
                  <Button to={`/projects/${p.slug}`} variant="outline">See more</Button>
                </div>

              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Pagination — bottom-right, 60px below track ──────── */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-[60px]">

          {/* Pagination: line renders between active item and next (or before last when last is active) */}
          <div className="flex items-center gap-5">
            {(() => {
              // Line always sits after this index: tracks active, but clamps to second-to-last
              const lineAfterIdx = Math.min(current, total - 2)
              return projects.map((p, i) => (
                <>
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to project ${i + 1}`}
                    aria-current={i === current ? 'true' : undefined}
                    className={[
                      'font-fredoka leading-none transition-colors duration-300',
                      i === current
                        ? 'text-grey-800 font-semibold'
                        : 'text-grey-400 font-normal hover:text-grey-600',
                    ].join(' ')}
                    style={{ fontSize: 'clamp(14px, 1.3vw, 18px)', fontVariationSettings: "'wdth' 100" }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </button>
                  {i === lineAfterIdx && (
                    <span key={`line-${i}`} className="block w-6 h-px bg-grey-800 shrink-0" aria-hidden="true" />
                  )}
                </>
              ))
            })()}
          </div>

        </div>

        {/* ── CTA — centered ───────────────────────────────────── */}
        <div className="flex justify-center mt-12">
          <Button to="/projects" variant="filled">See All Projects</Button>
        </div>

      </div>
    </section>
  )
}


