/**
 * ProjectCard — pixel-perfect vertical card for the Projects listing page.
 *
 * Figma reference: Project_card_verticle (node 40000383:69637)
 * - Card:        bg-white, rounded-[30px], shadow-grey-card, p-[32px], gap-[24px]
 * - Thumbnail:   aspect-ratio 400/300, rounded-[21px], full-width, bg-[#d9d9d9]
 * - Info block:  flex col, gap-[16px]
 * - Title:       Fredoka Medium 28px / grey-800 / leading-[1.4]
 * - Description: Fredoka Regular 20px / grey-700 / leading-[1.3] / 3-line overflow clamp
 * - Interaction: whole card is a Link; hover lifts card -6px with shadow deepening
 */
import { motion } from 'framer-motion'
import { Link }   from 'react-router-dom'
import { fadeUp, viewportOnce } from '../../lib/animations'

const MotionLink = motion(Link)

const EASE  = [0.25, 0.46, 0.45, 0.94]
const TRANS = { duration: 0.26, ease: EASE }

export default function ProjectCard({ project, index = 0 }) {
  const delay = (index % 2) * 0.12

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="h-full"
    >
      <MotionLink
        to={`/projects/${project.slug}`}
        className="bg-white rounded-[30px] flex flex-col gap-[24px] p-[32px] h-full"
        style={{ boxShadow: '0px 3px 16px 0px rgba(24,74,234,0.09)' }}
        whileHover={{ y: -6, boxShadow: '0px 12px 32px 0px rgba(24,74,234,0.14)' }}
        whileTap={{ scale: 0.98, y: -2 }}
        transition={TRANS}
        aria-label={`View ${project.title} case study`}
      >
        {/* ── Thumbnail ──────────────────────────────────────── */}
        <div
          className="w-full rounded-[21px] overflow-hidden bg-[#d9d9d9] shrink-0 relative"
          style={{ aspectRatio: '400 / 300' }}
        >
          <img
            src={project.thumb}
            alt={`${project.title} preview`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* ── Info block ─────────────────────────────────────── */}
        <div className="flex flex-col gap-[16px] w-full flex-1">
          {/* Title */}
          <h3
            className="font-fredoka font-medium text-grey-800"
            style={{
              fontSize: 'clamp(20px, 1.94vw, 28px)',
              lineHeight: 1.4,
              fontVariationSettings: "'wdth' 100",
            }}
          >
            {project.title}
          </h3>

          {/* Description — fixed 3-line overflow to match Figma h-[84px] */}
          <p
            className="font-fredoka font-normal text-grey-700 overflow-hidden text-body"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            {project.description}
          </p>
        </div>
      </MotionLink>
    </motion.div>
  )
}
