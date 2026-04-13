import React from 'react';

/**
 * ProcessSteps — reusable Discover / Define / Design / Test visual block.
 * Accepts an array of { label, src } step objects.
 *
 * Figma ref: node 40000393:77301 (Portfolio website design)
 * Desktop exact values: 40px icons · 16px labels · gap-43px row · gap-20px col
 * Responsive: clamp on icon size, row gap, and col gap below desktop.
 */
export default function ProcessSteps({ steps = [] }) {
  return (
    <div className="flex flex-wrap gap-[clamp(20px,3.3vw,43px)] items-center w-full">
      {steps.map(({ label, src }) => (
        <div
          key={label}
          className="flex flex-col gap-[clamp(10px,1.5vw,20px)] items-center shrink-0"
        >
          {/* Icon — Figma: size-[40px], scales down via clamp */}
          <div
            className="relative shrink-0"
            style={{ width: 'clamp(28px, 3vw, 40px)', height: 'clamp(28px, 3vw, 40px)' }}
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={src}
            />
          </div>
          {/* Label — Figma: Fredoka Medium 16px / leading-none / #565B7E */}
          <p className="font-fredoka font-medium leading-none text-grey-700 text-[16px] whitespace-nowrap">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
