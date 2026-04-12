import React from 'react';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaBrandDesign() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-center p-[40px] lg:p-[80px] relative shrink-0 w-full z-10">
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px]">
        <p className="font-semibold leading-none relative shrink-0 text-[60px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.brandDesign.title}</p>
      </div>
      
      <div className="content-start flex flex-wrap gap-[30px] lg:gap-[48px] items-start relative shrink-0 w-full">
        {/* Box 1 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[300px] relative">
          <div className="bg-white border border-[#e7e8ed] border-solid content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shadow-grey-card shrink-0 w-full">
            <div className="aspect-[400/300] relative rounded-[16px] shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={genaImages.imgRectangle82741} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start mt-2">
            <p className="font-medium leading-[1.2] text-grey-800 text-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.brandDesign.boxes[0].title}</p>
            <div className="font-normal text-grey-700 text-[20px]">
              <p className="leading-[1.4] mb-0">{genaContent.brandDesign.boxes[0].desc}</p>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[300px] relative">
          <div className="bg-white border border-[#e7e8ed] border-solid content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shadow-grey-card shrink-0 w-full">
            <div className="aspect-[400/300] relative rounded-[16px] shrink-0 w-full overflow-hidden flex items-center justify-center bg-[#fbf7ff]">
              <img alt="" className="object-cover size-full rounded-[16px]" src={genaImages.imgRectangle82742} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start mt-2">
            <p className="font-medium leading-[1.2] text-grey-800 text-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.brandDesign.boxes[1].title}</p>
            <div className="font-normal text-grey-700 text-[20px]">
              <p className="leading-[1.4] mb-0">{genaContent.brandDesign.boxes[1].desc}</p>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[300px] relative">
          <div className="bg-white border border-[#e7e8ed] border-solid content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shadow-grey-card shrink-0 w-full">
            <div className="aspect-[400/300] relative rounded-[16px] shrink-0 w-full overflow-hidden bg-white">
              <img alt="" className="object-cover size-full rounded-[16px]" src={genaImages.imgRectangle82743} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start mt-2">
            <p className="font-medium leading-[1.2] text-grey-800 text-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.brandDesign.boxes[2].title}</p>
            <div className="font-normal text-grey-700 text-[20px]">
              <p className="leading-[1.4] mb-0">{genaContent.brandDesign.boxes[2].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
