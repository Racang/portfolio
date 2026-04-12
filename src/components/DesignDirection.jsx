import { images } from '../data/mockData'

/**
 * Three Figma design-direction explorations, each rendered as a tall
 * card matching Figma's rounded-[8px] shadow-grey-card treatment.
 * On desktop they sit side-by-side; on mobile they stack.
 */
const directions = [
  {
    src:   images.direction1,
    alt:   'Design direction 1 — photo pattern option',
    label: 'Direction 1',
  },
  {
    src:   images.direction2,
    alt:   'Design direction 2 — investor option',
    label: 'Direction 2',
  },
  {
    src:   images.direction3,
    alt:   'Design direction 3 — photo background',
    label: 'Direction 3',
  },
]

export default function DesignDirection() {
  return (
    <section
      className="flex flex-col gap-11 items-center px-[clamp(16px,5.6vw,80px)] py-[80px]"
      aria-labelledby="design-direction-heading"
    >
      {/* ── Header ────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 items-center text-grey-800 max-w-[798px] text-center">
        <h2
          id="design-direction-heading"
          className="font-fredoka font-semibold leading-none w-full"
          style={{
            fontSize: 'clamp(36px, 4.2vw, 60px)',
            fontVariationSettings: "'wdth' 100",
          }}
        >
          Design Direction 
        </h2>
        <p
          className="font-fredoka font-normal leading-[1.4] text-[22px] w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Designing GENA, an Enterprise AI platform, presented several unique challenges.
        </p>
      </div>

      {/* ── Direction image grid ───────────────────────────── */}
      <div className="flex flex-wrap gap-x-10 gap-y-8 items-start w-full">
        {directions.map(({ src, alt, label }) => (
          <div
            key={label}
            className="flex-1 min-w-[240px] rounded-[8px] shadow-grey-card overflow-hidden"
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
