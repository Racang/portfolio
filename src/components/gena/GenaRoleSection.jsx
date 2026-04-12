import React from 'react';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaRoleSection({ className }) {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[40px] lg:px-[213px] py-[37px] relative shrink-0 w-full z-10">
      <div className={className || "bg-white content-center flex flex-wrap gap-[40px] lg:gap-[80px] items-center justify-center px-[40px] lg:px-[60px] py-[32px] relative rounded-[80px] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] shrink-0 max-w-[1020px] w-full"}>
        <div className="flex items-center justify-center bg-[#ffe8e9] h-[90px] w-[90px] rounded-[24px] relative shrink-0">
          <img alt="" className="size-[56px] object-cover pointer-events-none" src={genaImages.imgComputer21} />
        </div>
        <div className="content-start flex flex-wrap gap-[32px] lg:gap-[60px] items-start relative shrink-0">
            <div className="flex flex-col gap-2 items-start relative min-w-[160px]">
                <p className="font-fredoka font-medium leading-none text-cyan-accent text-[20px]">
                  Duration:
                </p>
                <p className="font-fredoka font-normal leading-none text-grey-700 text-[20px]">
                  {genaContent.role.duration}
                </p>
            </div>
          <div className="flex flex-col gap-2 items-start relative min-w-[160px]">
            <p className="font-fredoka font-medium leading-none text-cyan-accent text-[20px]">
              Project
            </p>
            <p className="font-fredoka font-normal leading-none text-grey-700 text-[20px]">
              {genaContent.role.project}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start relative min-w-[160px]">
            <p className="font-fredoka font-medium leading-none text-cyan-accent text-[20px]">
              Role
            </p>
            <p className="font-fredoka font-normal leading-none text-grey-700 text-[20px]">
              {genaContent.role.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
