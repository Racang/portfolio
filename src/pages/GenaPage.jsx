import React from 'react';
import HomeNavbar from '../components/home/HomeNavbar';
import HomeFooter from '../components/home/HomeFooter';
import InnerPageBanner from '../components/shared/InnerPageBanner';
import { genaImages } from '../data/genaData';

// Gena specific components
import GenaRoleSection from '../components/gena/GenaRoleSection';
import GenaWhatIDid from '../components/gena/GenaWhatIDid';
import GenaBackground from '../components/gena/GenaBackground';
import GenaChallenge from '../components/gena/GenaChallenge';
import GenaProcess from '../components/gena/GenaProcess';
import GenaBrandDesign from '../components/gena/GenaBrandDesign';
import GenaGuardrailFeature from '../components/gena/GenaGuardrailFeature';
import GenaApplyBrand from '../components/gena/GenaApplyBrand';

export default function GenaPage() {
  return (
    <div className="bg-white relative overflow-x-hidden font-fredoka">
      {/* Shared floating pill nav */}
      <HomeNavbar />
      
      {/* ── Page content ────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col w-full bg-[#FEFCF1]">
        {/* 1. Hero banner */}
        <InnerPageBanner title="Gena" subtitle="Generative Enterprise AI Platform" />
      </div>

      {/* 2. Intro section with full width background and curve */}
      <section aria-label="Project intro" className="relative w-full z-10 bg-[#FEFCF1]">
        <div className="relative z-10 flex flex-col w-full max-w-[1440px] mx-auto pb-[20px] lg:pb-[60px]">
          <GenaRoleSection />
          <GenaWhatIDid />
        </div>
        
        {/* Decorative curve added next to What I Did section */}
        <div className="w-full flex justify-center items-end relative shrink-0 bg-white">
          <svg width="full" height="auto" viewBox="0 0 1440 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1440 37.5629C1192.43 160.809 886.963 66.6697 861.505 65.7594C836.049 64.8498 592.971 -34.2932 402.302 37.5629C249.766 95.0477 70.5442 90.6211 0 81.2222V0H1440V37.5629Z" fill="#FEFCF1"/>
</svg>
        </div>
      </section>

      <div className="relative z-10 flex flex-col w-full max-w-[1440px] mx-auto">
        {/* 3. Background block */}
        <GenaBackground />
      </div>

      {/* Full width challenge background block */}
      <GenaChallenge />

      {/* 4. Work Process Flowchart Block */}
      <GenaProcess />

      <div className="relative z-10 flex flex-col w-full max-w-[1440px] mx-auto">
        {/* 5. Brand & Design block */}
        <GenaBrandDesign />
      </div>

      {/* Full width section with heavy background image for Guardrail and Apply */}
      <div className="relative w-full shrink-0 flex flex-col">
        <div className="absolute w-full h-[2683px] top-[-40px] left-0 -z-10 flex justify-center">
          <img alt="" className="hidden lg:block absolute inset-0 size-full max-w-none object-cover" src={genaImages.imgBg} />
          <div className="lg:hidden absolute inset-0 bg-[#f7f5ff]"></div>
        </div>

        <div className="relative z-10 flex flex-col mx-auto w-full">
          <div className="w-full flex justify-center items-end relative shrink-0 bg-white">
            <svg width="full" height="auto" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1440 63.4373C1192.43 -59.8088 886.963 34.3304 861.505 35.2408C836.049 36.1504 592.971 135.293 402.302 63.4373C249.767 5.95251 70.5442 10.3791 3.05176e-05 19.778V101H1440V63.4373Z" fill="#F7F3F3"/>
</svg>
          </div>
          <GenaGuardrailFeature />
          <div className="w-full flex justify-center items-end relative shrink-0 bg-white">
            <svg width="full" height="auto" viewBox="0 0 1442 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M194.607 40.4567C118.871 5.99361 36.7815 20.1451 0 30.9668V0H1442V36.9604C1389.44 62.9326 1309.09 47.7822 1275.48 36.9604C1245.72 23.8078 1171.05 3.19658 1110.47 25.9722C1034.73 54.4417 1025.2 51.9444 988.585 51.9444C951.971 51.9444 884.761 26.4716 836.611 16.9818C776.423 13.4856 725.263 33.9637 689.652 44.4524C660.227 50.2795 589.74 56.3397 543.195 33.9636C496.65 11.5876 429.841 13.9851 397.741 20.4781C351.597 34.9626 266.331 64.9305 194.607 40.4567Z" fill="#F7F3F3"/>
            </svg>
          </div>
          <GenaApplyBrand />
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-20 mt-10">
        <HomeFooter />
      </div>
    </div>
  );
}
