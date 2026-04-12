import React from 'react';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaChallenge() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[190px] py-[64px] relative shrink-0 w-full z-10">
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px]">
        <p className="font-semibold leading-none text-[60px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.challenge.title}</p>
        <p className="font-normal leading-[1.4] text-[22px] text-center w-full text-grey-700" style={{ fontVariationSettings: "'wdth' 100" }}>
          {genaContent.challenge.subtitle}
        </p>
      </div>
      <div className="content-start flex flex-wrap gap-[30px] items-stretch justify-center relative shrink-0 w-full">
        <div className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <img alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgAi1} />
          <p className="font-normal leading-[1.4] text-grey-700 text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[0]}
          </p>
        </div>
        <div className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <img alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgElearning1} />
          <p className="font-normal leading-[1.4] text-grey-700 text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[1]}
          </p>
        </div>
        <div className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <img alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgShape1} />
          <p className="font-normal leading-[1.4] text-grey-700 text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[2]}
          </p>
        </div>
        <div className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <img alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgArt1} />
          <p className="font-normal leading-[1.4] text-grey-700 text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[3]}
          </p>
        </div>
      </div>
    </div>
  );
}
