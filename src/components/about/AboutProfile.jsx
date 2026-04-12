/**
 * AboutProfile — "More about myself" section.
 *
 * Figma reference: "Group 1686550938" (node 40000150:29719), y=457 h=1005
 * Layout (1440px wide):
 *   - Soft pink wavy Union background (BG_Pink02, same as home AboutSection)
 *   - Left  x=80:  profile photo in a 624×624 rounded-rectangle frame
 *   - Right x=776: "More about myself" heading + 3 bio paragraphs
 *   - No skills pills, no CTA button
 */
import { motion } from 'framer-motion'
import { homeImages } from '../../data/homeData'
import { fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../../lib/animations'

export default function AboutProfile() {
  return (
    <section
      id="about-profile"
      className="relative w-full overflow-hidden z-10"
      style={{ minHeight: 'clamp(500px, 70vw, 1005px)', marginTop: '-60px' }}
      aria-label="About profile"
    >
      {/* ── Wave background (BG_Pink02 — same as home About) ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{ left: '50%', transform: 'translateX(-50%)', width: '100vw' }}
        aria-hidden="true"
      >
        <img
          src={homeImages.aboutWave}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ── Content row ─────────────────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-[1440px] mx-auto px-20 flex items-center gap-20"
        style={{
          paddingTop:    'clamp(80px, 9vw, 130px)',
          paddingBottom: 'clamp(80px, 9vw, 130px)',
        }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* ── Left: Profile photo  (Figma: x=80, w=624, h=624) ── */}
        <motion.div
          variants={fadeLeft}
          className="hidden md:block shrink-0"
          style={{ width: 'clamp(280px, 43.3vw, 624px)', height: 'clamp(280px, 43.3vw, 624px)' }}
        >
          <img
            src={homeImages.aboutProfile}
            alt="Rachaya Angkanawin"
            className="w-full h-full object-cover rounded-[32px] shadow-card-dark"
          />
        </motion.div>

        {/* ── Right: bio text  (Figma: x=776, w=584) ─────────── */}
        <motion.div
          variants={fadeRight}
          className="flex flex-col gap-6 flex-1 min-w-0"
        >
          {/* Heading */}
          <h2
            className="font-fredoka font-semibold text-grey-800 leading-tight"
            style={{
              fontSize: 'clamp(32px, 4.2vw, 60px)',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            More about myself
          </h2>

          {/* Paragraph 1 */}
          <p
            className="font-poppins text-grey-400 leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.25vw, 18px)' }}
          >
            A UX/UI Designer with over 6 years of experience designing enterprise
            products and large-scale corporate websites. Skilled in translating
            business requirements into effective UI solutions and proposing design
            strategies backed by user research and competitive analysis.
          </p>

          {/* Paragraph 2 */}
          <p
            className="font-poppins text-grey-400 leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.25vw, 18px)' }}
          >
            Experienced in conducting the end-to-end design process, from
            conceptual design and design systems to wireframes and prototypes.
            Leveraging AI-assisted design methods to accelerate wire-framing
            and optimize design review processes.
          </p>

          {/* Paragraph 3 */}
          <p
            className="font-poppins text-grey-400 leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.25vw, 18px)' }}
          >
            Additionally, experienced in conducting design walkthrough sessions
            to hand off to developers and review implemented outputs to ensure
            they align with the intended design. Working closely with development
            and cross-functional teams to support the most efficient and effective
            product release process.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
