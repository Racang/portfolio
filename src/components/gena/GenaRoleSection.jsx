import React from 'react';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaRoleSection({ className }) {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[40px] lg:px-[213px] py-[37px] relative shrink-0 w-full z-10">
      <div className={className || "bg-white flex flex-wrap gap-[60px] items-center justify-center px-[40px] py-[36px] relative rounded-[80px] shadow-grey-card shrink-0 max-w-[1014px] w-full"}>

        {/* Icon with offset pink background */}
        <div className="flex gap-[10px] items-center relative shrink-0">
          <div className="absolute bg-[#ffe8e9] h-[93px] w-[99px] rounded-[18px] left-[-16.5px] top-[-15px]" />
          <div className="relative shrink-0 size-[65px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={genaImages.imgComputer21}
            />
          </div>
        </div>

        {/* Metadata columns */}
        <div className="content-start flex flex-wrap gap-[48px] items-start relative shrink-0">
          <div className="flex flex-col gap-[12px] items-start relative min-w-[220px]">
            <p className="font-fredoka font-medium leading-none text-cyan-accent text-[20px]">
              Duration:
            </p>
            <p className="font-fredoka font-normal text-body text-grey-700">
              {genaContent.role.duration}
            </p>
          </div>
          <div className="flex flex-col gap-[12px] items-start relative min-w-[220px]">
            <p className="font-fredoka font-medium leading-none text-cyan-accent text-[20px]">
              Project
            </p>
            <p className="font-fredoka font-normal text-body text-grey-700">
              {genaContent.role.project}
            </p>
          </div>
          <div className="flex flex-col gap-[12px] items-start relative min-w-[220px]">
            <p className="font-fredoka font-medium leading-none text-cyan-accent text-[20px]">
              Role
            </p>
            <p className="font-fredoka font-normal text-body text-grey-700">
              {genaContent.role.role}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
