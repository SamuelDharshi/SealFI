"use client";

import Link from "next/link";
import { MoveRight, ShieldCheck, Lock, EyeOff, Zap, Plus, LayoutGrid, BarChart, Calendar, MessageSquare } from "lucide-react";
import { ProposalCard, Proposal } from "@/components/proposals/ProposalCard";

const mockProposals: Proposal[] = [
  { id: "003", title: "TREASURY INCREASE TO 12%", proposer: "0x3f...a912", voteStart: Date.now() - 86400, voteEnd: Date.now() + 172800000, state: "ACTIVE", voterCount: 847 },
  { id: "002", title: "ADD HBAR AS COLLATERAL", proposer: "0x7a...c031", voteStart: Date.now() - 172800, voteEnd: Date.now() + 86400000, state: "ACTIVE", voterCount: 1203 },
  { id: "001", title: "ADJUST PROTOCOL FEE TO 0.25%", proposer: "0x1b...f220", voteStart: Date.now() - 345600, voteEnd: Date.now() - 86400, state: "EXECUTED", forVotes: 2104221, againstVotes: 891044, abstainVotes: 112003, voterCount: 1542 },
];

export default function LandingPage() {
  return (
    <div className="flex w-full bg-white min-h-screen text-black">
      <div className="w-[300px] border-r-[4px] border-black p-8 flex flex-col gap-10 sticky top-[80px] h-[calc(100vh-80px)]">
         <div className="flex flex-col gap-4">
            {[{ icon: LayoutGrid, l: "Dashboard", a: true }, { icon: BarChart, l: "Analytics", a: false }, { icon: Calendar, l: "Calendar", a: false }, { icon: MessageSquare, l: "Messages", a: false }].map((m) => (
               <div key={m.l} className={`flex items-center gap-4 px-6 py-4 font-heading font-black text-lg uppercase cursor-pointer rounded-full transition-all ${m.a ? "bg-black text-white" : "text-black hover:bg-black/5"}`}>
                  <m.icon className="w-5 h-5" /> {m.l}
               </div>
            ))}
         </div>
         <div className="mt-10 flex flex-col gap-6">
            <h4 className="font-heading font-black text-sm uppercase tracking-widest text-[#888]">PROTOCOLS</h4>
            <div className="flex flex-col gap-3">
               {["Ethereum", "Starknet", "Sepolia"].map((p) => (
                  <div key={p} className="px-6 py-3 border-[3px] border-black rounded-full font-heading font-black text-sm uppercase flex items-center gap-3 active:scale-95 cursor-pointer">
                     <span className="w-2 h-2 rounded-full bg-black"></span> {p}
                  </div>
               ))}
            </div>
         </div>
      </div>

      <main className="flex-1 p-16 flex flex-col gap-20">
         <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-heading font-black tracking-tight leading-none uppercase">SEALED_GOVERNANCE</h1>
            <p className="text-xl text-[#555] font-light max-w-2xl uppercase font-mono font-black italic">Every vote is cast into an encrypted envelope. Visibility occurs exactly once at the block threshold.</p>
         </div>

         <div className="flex flex-col gap-10">
            <div className="flex justify-between items-end">
               <h2 className="text-4xl font-heading font-black tracking-tighter uppercase">ACTIVE_PROPOSALS</h2>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12">
               {mockProposals.map((p) => <ProposalCard key={p.id} proposal={p} />)}
               <div className="rounded-[24px] border-[4px] border-black border-dashed min-h-[300px] flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-black/5 transition-all text-[#888] hover:text-black">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center border-[3px] border-black group-hover:bg-primary transition-colors">
                     <Plus className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-black text-sm uppercase">CREATE_NEW_PROPOSAL</span>
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-10 pt-20 border-t-[4px] border-black">
            <h2 className="text-4xl font-heading font-black tracking-tighter uppercase">PROTOCOL_STATISTICS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[ { l: "TOTAL_VOTES_CAST", v: "142,821" }, { l: "TREASURY_UNDER_GOV", v: "$12.4M" }, { l: "fhEVM_TALLIES", v: "4,204" }].map((s) => (
                  <div key={s.l} className="bg-white border-[3px] border-black rounded-[20px] p-8 flex flex-col gap-2">
                     <span className="font-heading font-black text-[10px] text-[#888] uppercase tracking-widest">{s.l}</span>
                     <span className="text-4xl font-mono font-black">{s.v}</span>
                  </div>
               ))}
            </div>
         </div>
      </main>
    </div>
  );
}
