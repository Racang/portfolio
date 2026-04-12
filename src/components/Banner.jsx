import { images } from '../data/mockData'
import Navbar from './Navbar'

/**
 * Hero / Banner section.
 * — Full-width, 522px tall on desktop, scales on smaller viewports.
 * — Background architectural image covers the full area.
 * — Glassmorphism pill nav floats at the top.
 * — "Tostem" title (128 px → fluid) + "Cooperate website" subtitle (40 px → fluid).
 */
export default function Banner() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: 'clamp(320px, 36.25vw, 522px)' }}
      aria-label="Project banner"
    >
      {/* ── Background image ─────────────────────────────────── */}
      <img
        src={images.background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
      />

      {/* ── Semi-transparent overlay for text legibility ──────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.08)' }}
        aria-hidden="true"
      />

      {/* ── Nav ──────────────────────────────────────────────── */}
      <Navbar />

      {/* ── Title block ──────────────────────────────────────── */}
      <div
        className="relative z-10 text-center text-grey-800 leading-none flex flex-col items-center"
        style={{ paddingTop: 'clamp(32px, 4.9vw, 70px)' }}
      >
        <h1
          className="font-fredoka font-medium w-full"
          style={{
            fontSize: 'clamp(56px, 8.9vw, 128px)',
            fontVariationSettings: "'wdth' 100",
          }}
        >
          Tostem
        </h1>
        <p
          className="font-fredoka font-normal w-full"
          style={{
            fontSize: 'clamp(20px, 2.78vw, 40px)',
            fontVariationSettings: "'wdth' 100",
          }}
        >
          Cooperate website
        </p>
      </div>
    </section>
  )
}
