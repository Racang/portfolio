import React from 'react';
import { genaImages } from '../../data/genaData';

export default function GenaBackground() {
  return (
    <div className="content-center flex flex-wrap gap-[40px] items-center p-[40px] lg:p-[80px] relative shrink-0 w-full z-10">
      <div className="aspect-[609/445.24] content-stretch flex flex-[1_0_0] flex-col items-start max-h-[456.94px] max-w-[625px] min-h-[292.44px] min-w-[400px] pr-[40px] relative">
        <div className="aspect-[2000/1565] relative shrink-0 w-full rounded-2xl overflow-hidden drop-shadow-md">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={genaImages.imgImage1899} />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[500px] relative">
        <p className="font-semibold leading-none relative shrink-0 text-grey-800 text-[60px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Background
        </p>
        <p className="font-normal leading-[1.4] relative shrink-0 text-grey-400 text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          GENA (Genarative AI for Enterprise Assistant) is an enterprise AI platform designed to help organizations integrate genarative AI into their workflows in a secure and scalable way. The platform enables teams to create and manage AI assistants, connect with internal tools and data, and streamline various business processes through a centralized system.
        </p>
      </div>
    </div>
  );
}
