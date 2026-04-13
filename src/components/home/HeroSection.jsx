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
      style={{ minHeight: 'clamp(560px, 56vw, 800px)' }}
      aria-label="Hero"
    >
      {/* ── Content grid ────────────────────────────────────────── */}
      <div
        className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20 flex items-center justify-between gap-8 lg:gap-12"
        style={{ paddingTop: 'clamp(100px, 10vw, 160px)', paddingBottom: 'clamp(60px, 6vw, 100px)' }}
      >
        {/* ── Left: text ─────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col gap-8 shrink-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.p
            variants={fadeLeft}
            className="font-fredoka text-grey-800 leading-none"
            style={{ fontSize: 'clamp(20px, 2.2vw, 32px)' }}
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
                width: 'clamp(56px, 7vw, 100px)',
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
              className="relative font-fredoka font-medium text-cyan-accent leading-none whitespace-nowrap"
              style={{
                fontSize: 'clamp(48px, 6.7vw, 96px)',
                fontVariationSettings: "'wdth' 100",
                zIndex: 10,
              }}
            >
              Ux/Ui portfolio
            </h1>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeLeft} className="flex gap-6 flex-wrap items-center">
            <Button
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              variant="filled"
            >
              Resume
            </Button>
            <Button
              href="#projects"
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              All Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* ── Right: character illustration ──────────────────────── */}
        <motion.div
          className="relative shrink-0 self-end hidden md:block"
          style={{
            width:  'clamp(300px, 43.7vw, 629px)',
            height: 'clamp(240px, 28vw, 404px)',
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

