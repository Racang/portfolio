/**
 * HeroSection — above-the-fold hero for the portfolio homepage.
 *
 * Figma reference: root layer (node 40000150:29722)
 * Layout:
 *   Left  → Name (Fredoka 32px) + Title "Ux/Ui portfolio" (Fredoka 96px cyan, single line) + buttons
 *           heroDecor sparkles anchored to the title's right edge
 *   Right → pink circle (centered) + girl character + heroBg squiggle (anchored to image div)
 * Background: #f7f3f3 (bg-warm)
 */
import { motion } from 'framer-motion'
import { homeImages } from '../../data/homeData'
import Button from '../ui/Button'
import { fadeLeft, fadeRight, floatY, staggerContainer } from '../../lib/animations'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full bg-bg-warm overflow-hidden"
      style={{ minHeight: 'clamp(480px, 56vw, 800px)' }}
      aria-label="Hero"
    >
      {/* ── Content grid ────────────────────────────────────────── */}
      <div
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12"
        style={{ paddingTop: 'clamp(80px, 10vw, 160px)', paddingBottom: 'clamp(40px, 6vw, 100px)' }}
      >
        {/* ── Left: text ─────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col gap-6 md:gap-8 shrink-0 w-full md:w-auto text-center md:text-left items-center md:items-start"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.p
            variants={fadeLeft}
            className="font-fredoka text-grey-800 leading-none"
            style={{ fontSize: 'clamp(18px, 2.2vw, 32px)' }}
          >
            Rachaya Angkanawin
          </motion.p>

          {/* Title + decorative shape behind "portfolio" */}
          <motion.div variants={fadeLeft} className="relative overflow-visible">
            {/* heroDecor — subtle accent, upper-right of "portfolio" */}
            <motion.div
              className="absolute pointer-events-none select-none"
              style={{
                top: '-55%',
                right: '-2%',
                width: 'clamp(40px, 7vw, 100px)',
                zIndex: 0,
              }}
              variants={floatY}
              animate="animate"
            >
              <img
                src={homeImages.heroDecor}
                alt=""
                aria-hidden="true"
                className="w-full h-auto"
              />
            </motion.div>

            <h1
              className="relative font-fredoka font-medium text-cyan-accent leading-none"
              style={{
                fontSize: 'clamp(42px, 6.7vw, 96px)',
                fontVariationSettings: "'wdth' 100",
                zIndex: 10,
              }}
            >
              Ux/Ui portfolio
            </h1>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeLeft} className="flex gap-4 md:gap-6 flex-wrap items-center justify-center md:justify-start">
            <Button
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              variant="filled"
            >
              Resume
            </Button>
            <Button
              to="/projects"
              variant="outline"
            >
              All Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* ── Right: character illustration — hidden on mobile (<768px) ─── */}
        <motion.div
          className="relative shrink-0 self-end w-full md:w-auto hidden md:block"
          style={{
            width:  'clamp(220px, 43.7vw, 629px)',
            height: 'clamp(176px, 28vw, 404px)',
            maxWidth: '100%',
          }}
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >

          {/* Pink circle (Home_Banner_girl_decor) — soft float behind girl, z=1 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            style={{ zIndex: 1 }}
            aria-hidden="true"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
          >
            <img
              src={homeImages.profileCircle}
              alt=""
              className="w-[85%] h-[85%] object-contain"
            />
          </motion.div>

          {/* Girl illustration — z=2, sits above circle */}
          <img
            src={homeImages.heroGirl}
            alt="Designer character illustration"
            className="absolute inset-0 w-full h-full object-contain object-bottom"
            style={{ zIndex: 2 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

