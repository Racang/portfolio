/**
 * AboutProfile — "More about myself" section.
 *
 * Figma reference: "About_Section_Profile" (node 40000150:29719), BG y=421 h=1005
 * Layout (1440px wide):
 *   - Cream wavy BG (About_Profile_BG.svg, #FEFCF1) overlapping banner by 97px
 *   - Left  x=80:  profile photo in a 624×624 rounded-[48px] frame (top-cropped)
 *   - Right x=776: "More about myself" heading + 3 bio paragraphs in Fredoka 22px
 */
import { motion } from 'framer-motion'
import { homeImages } from '../../data/homeData'
import { fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../../lib/animations'

export default function AboutProfile() {
  return (
    <section
      id="about-profile"
      className="relative w-full overflow-hidden z-10"
      style={{ minHeight: 'clamp(500px, 70vw, 1005px)', marginTop: '-97px' }}
      aria-label="About profile"
    >
      {/* ── Background — cream SVG with wavy bottom edge (node 40000420:22531) ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <img
          src={homeImages.aboutProfileBg}
          alt=""
          className="w-full h-full"
          style={{ display: 'block' }}
        />
      </div>

      {/* ── Content row ─────────────────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-[1440px] mx-auto px-20 flex items-center gap-[72px]"
        style={{
          paddingTop:    'clamp(100px, 12.7vw, 183px)',
          paddingBottom: 'clamp(100px, 13.75vw, 198px)',
        }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* ── Left: Profile photo  (Figma: x=80, w=624, h=624, crop top -28.81%) ── */}
        <motion.div
          variants={fadeLeft}
          className="hidden md:block shrink-0"
          style={{ width: 'clamp(280px, 43.3vw, 624px)', height: 'clamp(280px, 43.3vw, 624px)' }}
        >
          <div className="w-full h-full rounded-[48px] overflow-hidden shadow-card-dark">
            <img
              src={`${import.meta.env.BASE_URL}images/About_Profileimg.png`}
              alt="Rachaya Angkanawin"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 0%' }}
            />
          </div>
        </motion.div>

        {/* ── Right: bio text  (Figma: shrink-0, w=584) ─────────── */}
        <motion.div
          variants={fadeRight}
          className="flex flex-col gap-6 flex-1 min-w-0"
          style={{ maxWidth: '584px' }}
        >
          {/* Heading */}
          <h2
            className="font-fredoka font-semibold text-grey-800 leading-none"
            style={{
              fontSize: 'clamp(32px, 4.2vw, 60px)',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            More about myself
          </h2>

          {/* Paragraph 1 */}
          <p
            className="font-fredoka font-normal text-grey-400"
            style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '1.4', fontVariationSettings: "'wdth' 100" }}
          >
            A UX/UI Designer with over 6 years of experience designing enterprise
            products and large-scale corporate websites. Skilled in translating
            business requirements into effective UI solutions and proposing design
            strategies backed by user research and competitive analysis.
          </p>

          {/* Paragraph 2 */}
          <p
            className="font-fredoka font-normal text-grey-400"
            style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '1.4', fontVariationSettings: "'wdth' 100" }}
          >
            Experienced in conducting the end-to-end design process, from
            conceptual design and design systems to wireframes and prototypes.
            Leveraging AI-assisted design methods to accelerate wire-framing
            and optimize design review processes.
          </p>

          {/* Paragraph 3 */}
          <p
            className="font-fredoka font-normal text-grey-400"
            style={{ fontSize: 'clamp(16px, 1.53vw, 22px)', lineHeight: '1.4', fontVariationSettings: "'wdth' 100" }}
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
