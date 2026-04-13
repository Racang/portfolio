/**
 * AboutContactStrip — slim "Let's work together" CTA at the bottom of the About page.
 *
 * Figma reference: About page bottom contact line
 * Layout:
 *   - Soft blue/teal wave background (contactBg SVG)
 *   - "Let's work together" heading + email link
 *   - Same visual language as HomeFooter but taller with a CTA button
 */
import { motion } from 'framer-motion'
import { homeImages } from '../../data/homeData'
import Button from '../ui/Button'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/animations'

export default function AboutContactStrip() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden"
      style={{ minHeight: 'clamp(220px, 22vw, 320px)' }}
      aria-label="Contact CTA"
    >
      {/* ── Wave background (contact SVG) ─────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
        <img
          src={homeImages.contactBg}
          alt=""
          className="absolute inset-0 w-full h-full object-fill"
        />
      </div>

      {/* ── Decorative floaters ───────────────────────── */}
      <motion.div
        className="absolute left-[6%] bottom-[18%] w-[60px] pointer-events-none select-none z-10 hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <img src={homeImages.contactDecor2} alt="" className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="absolute right-[6%] top-[22%] w-[64px] pointer-events-none select-none z-10 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        aria-hidden="true"
      >
        <img src={homeImages.contactDecor1} alt="" className="w-full h-auto" />
      </motion.div>

      {/* ── Content ───────────────────────────────────── */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-8"
        style={{
          paddingTop:    'clamp(48px, 5vw, 72px)',
          paddingBottom: 'clamp(48px, 5vw, 72px)',
        }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2
          variants={fadeUp}
          className="font-fredoka font-semibold text-grey-800 mb-4"
          style={{
            fontSize: 'clamp(28px, 3.5vw, 50px)',
            fontVariationSettings: "'wdth' 100",
          }}
        >
          Let's work together
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-fredoka text-grey-400 mb-8 text-body"
        >
          I'd love to hear about your project.{' '}
          <a
            href="mailto:Rachaya.ang@gmail.com"
            className="text-coral hover:underline transition-colors"
          >
            Rachaya.ang@gmail.com
          </a>
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button href="mailto:Rachaya.ang@gmail.com" variant="filled">
            Say&nbsp;&nbsp;Hello
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
