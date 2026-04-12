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
        <div className="w-full lg:w-1/2 min-h-px min-w-px relative aspect-[300/200]">
          <div className="bg-white border border-[#e7e8ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px p-[16px] relative rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] w-full h-full">
            <div className="relative rounded-[16px] w-full h-full">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                <img alt="Multi-brand UI system left" className="absolute h-[122.37%] left-0 max-w-none top-[0.08%] w-[103.71%]" src={genaImages.imgRectangle82752} />
              </div>
            </div>
          </div>
        </div>
        <p className="font-normal text-[22px] text-grey-400 leading-[1.5] w-full lg:w-1/2 mt-4 lg:mt-0">
           {genaContent.applyBrand.desc}
        </p>
      </div>
      
      <div className="w-full mt-10 aspect-[300/200] relative">
        <div className="bg-white border border-[#e7e8ed] border-solid content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] w-full h-full">
          <div className="relative rounded-[16px] w-full h-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img alt="Multi-brand full view" className="absolute h-[142.53%] left-0 max-w-none top-[-0.01%] w-full" src={genaImages.imgRectangle82753} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
