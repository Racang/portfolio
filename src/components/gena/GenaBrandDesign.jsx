import React from 'react';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaBrandDesign() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-center p-[40px] lg:p-[80px] relative shrink-0 w-full z-10">
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px]">
        <h2 className="font-fredoka font-semibold text-section-title relative shrink-0 text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.brandDesign.title}</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-[30px] lg:gap-[48px] max-[1023px]:grid-cols-1 max-[1023px]:justify-items-start relative shrink-0 w-full">
        {/* Box 1 */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full relative">
          <div className="bg-white border border-[#e7e8ed] border-solid content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shadow-grey-card shrink-0 w-full max-[1023px]:max-w-[630px]">
            <div className="aspect-[400/300] relative rounded-[16px] shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={genaImages.imgRectangle82741} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start mt-2 max-[1023px]:w-full">
            <h3 className="font-fredoka font-medium text-card-title text-grey-800" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.brandDesign.boxes[0].title}</h3>
            <div className="font-normal text-grey-700">
              <p className="text-body mb-0">{genaContent.brandDesign.boxes[0].desc}</p>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full relative">
          <div className="bg-white border border-[#e7e8ed] border-solid content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] shrink-0 w-full max-[1023px]:max-w-[630px]">
            <div className="aspect-[361/270.75] relative rounded-[16px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
                <div className="absolute bg-[#fbf7ff] inset-0 rounded-[16px]" />
                <img alt="" className="absolute max-w-none object-contain rounded-[16px] size-full" src={genaImages.imgRectangle82742} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start mt-2 max-[1023px]:w-full">
            <h3 className="font-fredoka font-medium text-card-title text-grey-800" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.brandDesign.boxes[1].title}</h3>
            <div className="font-normal text-grey-700">
              <p className="text-body mb-0">{genaContent.brandDesign.boxes[1].desc}</p>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full relative">
          <div className="bg-white border border-[#e7e8ed] border-solid content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] shrink-0 w-full max-[1023px]:max-w-[630px]">
            <div className="aspect-[400/300] relative rounded-[16px] shrink-0 w-full">
                <div className="absolute bg-white inset-0 rounded-[16px]" />
                <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                  <img alt="" className="absolute h-[103.22%] left-0 max-w-none top-[-1.61%] w-full" src={genaImages.imgRectangle82743} />
                </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start mt-2 max-[1023px]:w-full">
            <h3 className="font-fredoka font-medium text-card-title text-grey-800" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.brandDesign.boxes[2].title}</h3>
            <div className="font-normal text-grey-700">
              <p className="text-body mb-0">{genaContent.brandDesign.boxes[2].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
