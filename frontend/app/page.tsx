"use client";

import Link from "next/link";
import { MoveRight, ShieldCheck, Lock, EyeOff, Zap, Database, Activity } from "lucide-react";
import { ProposalCard, Proposal } from "@/components/proposals/ProposalCard";
import { SealedValue } from "@/components/ui/SealedValue";

const mockProposals: Proposal[] = [
  { id: "003", title: "INCREASE TREASURY ALLOCATION TO 12%", proposer: "0x3f...a912", voteStart: Date.now() - 86400000, voteEnd: Date.now() + 172800000, state: "ACTIVE", voterCount: 847 },
  { id: "002", title: "ADD HBAR AS ACCEPTED COLLATERAL", proposer: "0x7a...c031", voteStart: Date.now() - 172800000, voteEnd: Date.now() + 86400000, state: "ACTIVE", voterCount: 1203 },
  { id: "001", title: "ADJUST PROTOCOL FEE TO 0.25%", proposer: "0x1b...f220", voteStart: Date.now() - 345600000, voteEnd: Date.now() - 86400000, state: "EXECUTED", forVotes: 2104221, againstVotes: 891044, abstainVotes: 112003, voterCount: 1542 },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full pb-20 selection:bg-primary selection:text-black">
      <section className="container relative z-10 px-6 lg:px-12 pt-16 pb-32 lg:pt-32 flex flex-col gap-10 max-w-full">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit bg-primary text-black px-4 py-1 font-heading font-black text-xs tracking-widest uppercase">fhEVM CONFIDENTIAL GOVERNANCE</div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-black leading-[0.85] tracking-tighter uppercase max-w-6xl">EVERY_VOTE <br /> IS_SEALED.</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
          <div className="flex flex-col gap-10">
            <p className="text-xl md:text-3xl font-light leading-snug text-[#BBBBBB] max-w-xl">SealFi is a confidential governance protocol. It opens once, when voting ends. Not before.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/proposals" className="brutalist-button-primary px-12 py-5 text-xl">LAUNCH_GOVERNANCE <MoveRight className="ml-2 w-6 h-6 inline" /></Link>
              <Link href="/docs" className="brutalist-button-outline px-12 py-5 text-xl">PROTOCOL_STATS</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[
               { icon: ShieldCheck, label: "ENCRYPTED", mono: "fhEVM_TFHE" },
               { icon: Lock, label: "SEALED", mono: "CIPHER_STATE" },
               { icon: EyeOff, label: "PRIVATE", mono: "ZERO_SIGNAL" },
               { icon: Zap, label: "ATOMIC", mono: "ONETIME_TALLY" },
             ].map((item, i) => (
                <div key={i} className="brutalist-card bg-black flex flex-col gap-6 p-8 border-[#333]">
                  <item.icon className="text-primary w-8 h-8" />
                  <div className="flex flex-col gap-1">
                    <span className="font-heading font-black text-sm tracking-widest uppercase">{item.label}</span>
                    <span className="font-mono text-[9px] text-[#555] uppercase font-bold">{item.mono}</span>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-[#0A0A0A] border-y-4 border-border overflow-hidden">
        <div className="container px-6 lg:px-12 py-32 max-w-full">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1 flex flex-col gap-10">
                 <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-none">THE_TALLY_IS_THE_<br />WEAPON.</h2>
                 <p className="text-xl text-[#888888] font-light max-w-xl leading-relaxed">SealFi replaces uint256 public with euint128 internal. Whale coordination: impossible. Signal gaming: zero.</p>
              </div>
              <div className="flex-1 w-full flex flex-col gap-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="brutalist-card bg-black border-[#222] p-8">
                       <span className="text-[10px] font-mono text-[#555] uppercase block mb-10 tracking-[0.3em]">STANDARD (LIVE)</span>
                       <div className="space-y-8">
                          <div><span className="text-[10px] uppercase mb-1">FOR</span><span className="text-4xl font-mono font-black block">4,821,304</span></div>
                          <div><span className="text-[10px] uppercase mb-1">AGAINST</span><span className="text-4xl font-mono font-black block">1,203,901</span></div>
                       </div>
                    </div>
                    <div className="brutalist-card bg-black border-primary p-8 border-t-8">
                       <span className="text-[10px] font-mono text-primary uppercase block mb-10 tracking-[0.3em]">SEALFI (SEALED)</span>
                       <div className="space-y-8">
                          <SealedValue value={undefined} label="FOR" className="[&_span]:text-4xl" />
                          <SealedValue value={undefined} label="AGAINST" className="[&_span]:text-4xl" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="container relative z-10 px-6 lg:px-12 py-32 max-w-full">
         <div className="flex flex-col gap-10">
            <div className="flex justify-between items-end border-b-2 border-border pb-10 uppercase font-heading font-black">
               <h2 className="text-5xl md:text-7xl tracking-tighter">ACTIVE_PROPOSALS</h2>
               <Link href="/proposals" className="brutalist-button-primary px-10 py-4 text-sm">VIEW_ALL</Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {mockProposals.map((prop) => (<ProposalCard key={prop.id} proposal={prop} />))}
            </div>
         </div>
      </section>

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: fit-content; animation: marquee 30s linear infinite; }
      `}</style>
    </div>
  );
}
