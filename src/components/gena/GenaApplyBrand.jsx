import React from 'react';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaApplyBrand() {
  return (
    <div className="w-full mx-auto max-w-[1440px] px-[40px] lg:px-[80px] py-[80px] flex flex-col items-center gap-[44px] z-10 relative">
      <div className="text-center w-full max-w-[798px]">
        <p className="font-semibold text-[60px] text-grey-800">{genaContent.applyBrand.title}</p>
        <p className="font-normal text-[22px] text-grey-700 mt-4">
          {genaContent.applyBrand.subtitle}
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-[40px] w-full items-start">
        <div className="bg-white p-[16px] rounded-[16px] shadow-grey-card w-full lg:w-1/2">
           <img src={genaImages.imgRectangle82752} alt="Multi-brand UI system left" className="w-full rounded-[16px] object-cover" />
        </div>
        <p className="font-normal text-[22px] text-grey-400 leading-[1.5] w-full lg:w-1/2 mt-4 lg:mt-0">
           {genaContent.applyBrand.desc}
        </p>
      </div>
      
      <div className="w-full lg:w-3/4 mx-auto mt-10">
        <div className="bg-white p-[16px] rounded-[16px] shadow-grey-card w-full">
           <img src={genaImages.imgRectangle82753} alt="Multi-brand full view" className="w-full rounded-[16px] object-cover" />
        </div>
      </div>
    </div>
  );
}
