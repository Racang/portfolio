import { images, finalUIScreens } from '../data/mockData'

/**
 * Reusable screenshot card used in the Phase I grid.
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
 * Matches Gena section spacing: px-[40px] lg:px-[80px] py-[64px].
 */
export default function FinalUI() {
  return (
    <section
      className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[80px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="final-ui-heading"
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px] text-center">
        <h2
          id="final-ui-heading"
          className="font-fredoka font-semibold text-section-title w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Phase I Final UI
        </h2>
        <p
          className="font-normal text-body w-full text-grey-700"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          การ Design feature หนึ่งจะเริ่มต้นจากรับ feature หนึ่งจาก Bu team
          ในCase นี้จะยกตัวอย่าง Feature Gardrail
        </p>
      </div>

      {/* ── Screenshots ────────────────────────────────────── */}
      <div className="flex flex-col gap-[40px] w-full">
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
