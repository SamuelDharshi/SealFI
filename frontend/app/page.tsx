"use client";

import Link from "next/link";
import { MoveRight, ShieldCheck, Lock, EyeOff, Zap, Database, Activity, Terminal } from "lucide-react";
import { ProposalCard, Proposal } from "@/components/proposals/ProposalCard";
import { SealedValue } from "@/components/ui/SealedValue";

const mockProposals: Proposal[] = [
  { id: "003", title: "INCREASE TREASURY ALLOCATION TO 12%", proposer: "0x3f...a912", voteStart: Date.now() - 86400, voteEnd: Date.now() + 172800000, state: "ACTIVE", voterCount: 847 },
  { id: "002", title: "ADD HBAR AS COLLATERAL", proposer: "0x7a...c031", voteStart: Date.now() - 172800, voteEnd: Date.now() + 86400000, state: "ACTIVE", voterCount: 1203 },
  { id: "001", title: "ADJUST PROTOCOL FEE TO 0.25%", proposer: "0x1b...f220", voteStart: Date.now() - 345600, voteEnd: Date.now() - 86400, state: "EXECUTED", forVotes: 2104221, againstVotes: 891044, abstainVotes: 112003, voterCount: 1542 },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary selection:text-black min-h-screen bg-black">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20"><div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 0)", backgroundSize: "40px 40px" }} /></div>
      
      <section className="container relative z-10 px-6 lg:px-12 pt-20 pb-32 lg:pt-32 flex flex-col gap-10 max-w-full">
        <div className="flex flex-col gap-6">
          <div className="w-fit bg-primary text-black px-4 py-1 font-heading font-black text-xs tracking-widest uppercase">fhEVM_CONFIDENTIAL_GOVERNANCE</div>
          <h1 className="text-6xl md:text-8xl lg:text-[11.5rem] font-heading font-black leading-[0.8] tracking-tighter uppercase max-w-6xl">EVERY_VOTE <br /> IS_SEALED.</h1>
          <div className="flex items-center gap-6 mt-4"><div className="h-[2px] w-24 bg-primary" /><span className="font-mono text-xs text-primary uppercase tracking-[0.5em] animate-pulse">DECRYPTING_THE_GOVERNANCE_PRIMITIVE</span></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
          <div className="flex flex-col gap-10">
            <p className="text-xl md:text-3xl font-light text-[#BBB] max-w-xl">DAOs publish live tallies. SealFi is a sealed envelope. It opens exactly once, when voting ends. Not before.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/proposals" className="brutalist-button-primary px-12 py-5 text-xl">LAUNCH_GOVERNANCE <MoveRight className="ml-2 w-6 h-6 inline" /></Link>
              <Link href="/docs" className="brutalist-button-outline px-12 py-5 text-xl">READ_THE_PRD</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[ { icon: ShieldCheck, l: "ENCRYPTED", m: "fhEVM_TFHE" }, { icon: Lock, l: "SEALED", m: "CIPHER_STATE" }, { icon: EyeOff, l: "PRIVATE", m: "ZERO_SIGNAL" }, { icon: Zap, l: "ATOMIC", m: "ONE_TIME" }].map((item, i) => (
                <div key={i} className="brutalist-card bg-black flex flex-col gap-6 p-8 border-[#222] hover:border-primary transition-all group">
                  <item.icon className="text-[#444] group-hover:text-primary w-8 h-8 transition-colors" />
                  <div className="flex flex-col gap-1"><span className="font-heading font-black text-xs tracking-widest uppercase">{item.l}</span><span className="font-mono text-[9px] text-[#555] uppercase font-bold">{item.m}</span></div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <div className="w-full bg-primary py-4 overflow-hidden border-y-4 border-black relative z-20">
         <div className="flex gap-12 font-heading font-black text-xs text-black uppercase animate-marquee">
            {[...Array(20)].map((_, i) => <span key={i} className="flex gap-8"><span>EVERY_VOTE_IS_SEALED</span><span>ZAMA_fhEVM_TFHE</span></span>)}
         </div>
      </div>

      <section className="relative z-10 w-full bg-[#0A0A0A] border-y-4 border-border overflow-hidden">
        <div className="container px-6 lg:px-12 py-32 max-w-full">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1 flex flex-col gap-10">
                 <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter uppercase leading-[0.85]">THE_TALLY <br />IS_THE_<br />WEAPON.</h2>
                 <p className="text-xl text-[#888] font-light max-w-xl">SealFi replaces uint256 with euint128. Attack classes: zero. coordination: impossible.</p>
              </div>
              <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="brutalist-card bg-black border-[#222] p-8">
                    <span className="text-[10px] font-mono text-[#555] uppercase block mb-10">STANDARD_GOVERNOR_(LIVE)</span>
                    <div className="space-y-8">
                       <div><span className="text-[10px] uppercase mb-1 block">FOR</span><span className="text-4xl font-mono font-black">4,821,304</span></div>
                       <div><span className="text-[10px] uppercase mb-1 block">AGAINST</span><span className="text-4xl font-mono font-black text-[#555]">1,203,901</span></div>
                    </div>
                 </div>
                 <div className="brutalist-card bg-black border-primary p-8 border-t-[10px] shadow-[15px_15px_0px_rgba(254,228,0,0.1)]">
                    <span className="text-[10px] font-mono text-primary uppercase block mb-10">SEALFI_LEDGER_(SEALED)</span>
                    <div className="space-y-8">
                       <SealedValue value={undefined} label="FOR" className="[&_span]:text-4xl" />
                       <SealedValue value={undefined} label="AGAINST" className="[&_span]:text-4xl" />
                    </div>
                    <div className="mt-8 flex items-center gap-2"><Terminal className="text-primary w-4 h-4" /><span className="text-[10px] font-mono text-primary uppercase animate-pulse">WAITING_FOR_CLOSE</span></div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="container relative z-10 px-6 lg:px-12 py-32 max-w-full"><div className="flex flex-col gap-20">
         <div className="flex justify-between items-end border-b-4 border-border pb-10 uppercase font-heading">
            <div className="flex gap-4 items-center">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">ACTIVE_PROPOSALS</h2>
              <Activity className="text-primary w-12 h-12 animate-pulse" />
            </div>
            <Link href="/proposals" className="brutalist-button-primary px-10 py-5 text-lg">VIEW_ALL</Link>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">{mockProposals.map((p) => <ProposalCard key={p.id} proposal={p} />)}</div>
      </div></section>

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: fit-content; animation: marquee 30s linear infinite; }
      `}</style>
    </div>
  );
}
