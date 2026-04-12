/**
 * AboutSection  — "Hello there! I'm Toey." preview section.
 *
 * Figma reference: Banner (node 40000150:29772)
 * Layout:
 *   - Soft pink wavy Union background shape
 *   - Left: circular profile portrait
 *   - Right: greeting, paragraph, "About Me" button
 * Transition: slight clip-path wave on top edge
 */
import { motion } from 'framer-motion'
import { homeImages } from '../../data/homeData'
import Button from '../ui/Button'
import { fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../../lib/animations'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden z-10"
      style={{ minHeight: 'clamp(480px, 53vw, 764px)', marginTop: '-120px' }}
      aria-label="About preview"
    >
      {/* ── Wave background (Union SVG, true full-bleed) ──────────
          Uses w-screen + left-50% -translate-x-50% so the background
          always spans the full viewport regardless of ancestor width. */}
      <div
        className="absolute inset-y-0 pointer-events-none select-none z-0"
        style={{ left: '50%', transform: 'translateX(-50%)', width: '100vw' }}
      >
        <img
          src={homeImages.aboutWave}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20 flex items-center gap-10 lg:gap-20 h-full"
        style={{
          paddingTop: 'clamp(80px, 8.3vw, 120px)',
          paddingBottom: 'clamp(80px, 9.7vw, 140px)',
        }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Profile image — circular crop */}
        <motion.div
          variants={fadeLeft}
          className="relative shrink-0 hidden md:block"
          style={{ width: 'clamp(260px, 35.7vw, 514px)', height: 'clamp(360px, 38vw, 540px)' }}
        >
          {/* Pink circle decoration behind photo */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: 'translate(-30px, -30px)' }}
          >
            <img
              src={homeImages.profileCircle}
              alt=""
              aria-hidden="true"
              className="w-[260px] h-[260px] object-contain"
            />
          </div>

          {/* Portrait — no rectangular frame, image fills container */}
          <div className="relative w-full h-full">
            <img
              src={homeImages.aboutProfile}
              alt="Rachaya Angkanawin profile portrait"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          variants={fadeRight}
          className="flex flex-col gap-6 flex-1 min-w-0"
        >
          <h2
            className="font-fredoka font-semibold text-grey-800 leading-none"
            style={{
              fontSize: 'clamp(36px, 4.2vw, 60px)',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            Hello there! I'm Toey.
          </h2>
          <p
            className="font-poppins text-grey-400 leading-relaxed"
            style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}
          >
            I'm a UX/UI Designer with over 6 years of experience in designing web applications
            and websites. I'm passionate about design and specialize in transforming complex
            workflows into intuitive, easy-to-use solutions.
          </p>
          <div className="pt-2">
            <Button href="#contact" variant="filled">
              About&nbsp;&nbsp;Me
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
