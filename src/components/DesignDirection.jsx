import { images } from '../data/mockData'

/**
 * Three Figma design-direction explorations, each rendered as a tall
 * card matching Gena challenge card style: rounded-[20px], shadow-grey-card, bg-white.
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
      className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[190px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="design-direction-heading"
    >
      {/* ── Header ────────────────────────────────────────── */}
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px] text-center">
        <h2
          id="design-direction-heading"
          className="font-fredoka font-semibold text-section-title w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Design Direction
        </h2>
        <p
          className="font-normal text-body w-full text-grey-700"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Designing the Tostem cooperate website presented several unique design direction explorations.
        </p>
      </div>

      {/* ── Direction image grid ───────────────────────────── */}
      <div className="content-start flex flex-wrap gap-[30px] items-stretch justify-center relative shrink-0 w-full">
        {directions.map(({ src, alt, label }) => (
          <div
            key={label}
            className="bg-white flex-[1_0_0] min-w-[240px] max-w-[530px] rounded-[20px] shadow-grey-card overflow-hidden"
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
