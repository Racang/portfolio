import { images, finalUIScreens } from '../data/mockData'

/**
 * Reusable screenshot card used in the Phase I grid.
 * Accepts an aspect-ratio utility class so each screen can have its own ratio.
 */
function ScreenCard({ src, alt, aspectClass = 'aspect-video' }) {
  return (
    <div className={`relative w-full rounded-[24px] overflow-hidden ${aspectClass}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

/**
 * Phase I Final UI section.
 * — Title, Thai-language subtitle.
 * — Style guide (2:1 ratio), home page (16:9), then 11 × 16:9 news/about screens.
 * All cards: rounded-[24px], stacked vertically with 40px gap.
 */
export default function FinalUI() {
  return (
    <section
      className="flex flex-col gap-[30px] pb-16 pt-20"
      aria-labelledby="final-ui-heading"
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 items-center px-[clamp(16px,5.6vw,80px)] text-grey-800 text-center">
        <h2
          id="final-ui-heading"
          className="font-fredoka font-semibold text-section-title w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          PhaseI Final UI
        </h2>
        <p
          className="font-fredoka font-normal text-body w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          การDesign feature หนึ่งจะเริ่มต้นจากรับfeatureหนึ่งจากBu team
          ในCaseนี้จะยกตัวอย่างFeature Gardrail
        </p>
      </div>

      {/* ── Screenshots ────────────────────────────────────── */}
      <div className="flex flex-col gap-10 px-[clamp(16px,5.6vw,80px)]">
        {finalUIScreens.map(({ key, alt, aspectClass }) => (
          <ScreenCard
            key={key}
            src={images[key]}
            alt={alt}
            aspectClass={aspectClass}
          />
        ))}
      </div>
    </section>
  )
}
