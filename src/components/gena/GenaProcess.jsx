import React from 'react';
import { genaImages } from '../../data/genaData';

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#a0a4b8] hidden xl:block">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowDown = () => (
  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" className="shrink-0 text-[#a0a4b8] hidden xl:block mx-auto my-[-10px]">
    <path d="M12 5V55M12 55L5 48M12 55L19 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DesktopLoopArrow = () => (
  <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none" className="absolute top-[-50px] left-[50%] -translate-x-[50%] w-[80%] pt-4 hidden xl:block text-[#a0a4b8]" style={{ zIndex: 0 }}>
    <path d="M950 80 V20 Q950 0 930 0 H50 Q30 0 30 20 V80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 73 L30 80 L37 73" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DesktopReturnArrow = () => (
  <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none" className="absolute bottom-[-50px] left-[6%] w-[75%] pb-4 hidden xl:block text-[#a0a4b8]" style={{ zIndex: 0 }}>
    <path d="M950 0 V60 Q950 80 930 80 H50 Q30 80 30 60 V0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6"/>
    <path d="M30 0 L37 7 L23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function GenaProcess() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-center p-[40px] lg:p-[80px] relative shrink-0 w-full z-10 bg-white">
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#3e446b] w-full max-w-[798px]">
        <h2 className="font-fredoka font-semibold text-section-title relative shrink-0 text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Work Process
        </h2>
      </div>

      <div className="w-full max-w-[1262px] flex flex-col gap-[60px] relative mx-auto mt-6">
        <img alt="" className="max-w-none object-contain size-full" src={genaImages.imgWorkProcess} />
      </div>
    </div>
  );
}
