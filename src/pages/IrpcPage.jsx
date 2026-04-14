/**
 * IrpcPage — project case-study page for "IRPC Cooperate Website".
 * Structure mirrors ThaioilPage/TostemPage: cream intro section → wave divider → white content zone.
 */
import HomeNavbar           from '../components/home/HomeNavbar'
import HomeFooter           from '../components/home/HomeFooter'
import InnerPageBanner      from '../components/shared/InnerPageBanner'
import IrpcRoleInfoCard     from '../components/irpc/IrpcRoleInfoCard'
import IrpcWhatIDid         from '../components/irpc/IrpcWhatIDid'
import IrpcChallenge        from '../components/irpc/IrpcChallenge'
import IrpcProposalDirection from '../components/irpc/IrpcProposalDirection'
import IrpcDesignDirection  from '../components/irpc/IrpcDesignDirection'
import IrpcPhase1           from '../components/irpc/IrpcPhase1'
import IrpcPhase2           from '../components/irpc/IrpcPhase2'

export default function IrpcPage() {
  return (
    <div className="bg-white relative overflow-x-hidden font-fredoka">
      {/* Shared floating pill nav */}
      <HomeNavbar />

      {/* ── 1. Banner — cream background ──────────────────────── */}
      <div className="relative z-10 flex flex-col w-full bg-[#FEFCF1]">
        <InnerPageBanner title="IRPC" subtitle="Cooperate website" />
      </div>

      {/* ── 2. Intro section — cream bg + wave divider ──────────── */}
      <section aria-label="Project intro" className="relative w-full z-10 bg-[#FEFCF1]">
        <div className="relative z-10 flex flex-col w-full max-w-[1440px] mx-auto pb-[20px] lg:pb-[60px]">
          <IrpcRoleInfoCard />
          <IrpcWhatIDid />
        </div>

        {/* Wave divider — cream → white */}
        <div className="w-full flex justify-center items-end relative shrink-0 bg-white">
          <svg width="full" height="auto" viewBox="0 0 1440 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 37.5629C1192.43 160.809 886.963 66.6697 861.505 65.7594C836.049 64.8498 592.971 -34.2932 402.302 37.5629C249.766 95.0477 70.5442 90.6211 0 81.2222V0H1440V37.5629Z" fill="#FEFCF1"/>
          </svg>
        </div>
      </section>

      {/* ── 3. Content zone — white background ────────────────── */}
      <div className="relative z-10 flex flex-col w-full max-w-[1440px] mx-auto">
        <IrpcChallenge />
        <IrpcProposalDirection />
        <IrpcDesignDirection />
        <IrpcPhase1 />
        <IrpcPhase2 />
      </div>

      {/* Footer */}
      <HomeFooter />
    </div>
  )
}
