"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { SealedValue } from "@/components/ui/SealedValue";
import { cn } from "@/lib/utils";
import { Info, Check, Clock } from "lucide-react";

export default function VotePage() {
  const { id } = useParams();
  const [selectedVote, setSelectedVote] = useState<"FOR" | "AGAINST" | "ABSTAIN" | null>(null);
  const [isCasting, setIsCasting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const mockProposal = useMemo(() => ({
    id: id as string,
    title: "INCREASE TREASURY ALLOCATION TO 12%",
    description: "This proposal increases the protocol treasury allocation from 8% to 12% of all protocol fees.",
    proposer: "0x3f...a912",
    voteStart: Date.now() - 86400000,
    voteEnd: Date.now() + 172800000,
    state: "ACTIVE",
    voterCount: 847,
  }), [id]);

  const handleVote = () => {
    setIsCasting(true);
    setTimeout(() => { setIsCasting(false); setHasVoted(true); }, 2000);
  };

  return (
    <div className="container px-6 lg:px-12 py-20 max-w-full min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-12 xl:col-span-8 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
             <span className="font-mono text-xs text-primary font-black uppercase">PROPOSAL_UNDER_SEAL</span>
             <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tighter uppercase leading-[0.9]">{mockProposal.title}</h1>
          </div>
          <div className="flex flex-wrap gap-8 border-y border-border py-8 font-mono text-xs text-white uppercase">
            {["PROPOSED_BY: " + mockProposal.proposer, "CLOSES: " + new Date(mockProposal.voteEnd).toLocaleString(), "PARTICIPANTS: " + mockProposal.voterCount].map((v, i) => <div key={i}>{v}</div>)}
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-black text-xs text-[#888888] uppercase">SPECIFICATION</h3>
            <div className="brutalist-card bg-[#111] p-10"><p className="text-xl font-light text-[#CCC]">{mockProposal.description}</p></div>
          </div>
        </div>

        <div className="lg:col-span-12 xl:col-span-4 flex flex-col gap-8">
          <div className="brutalist-card border-primary p-10 bg-[#0A0A0A] border-t-8 flex flex-col gap-10">
            <h2 className="text-3xl font-heading font-black uppercase tracking-tighter">CAST_VOTE</h2>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                 <span className="font-heading font-black text-[10px] text-[#888] uppercase tracking-widest">SEALED_TALLY</span>
                 <div className="grid grid-cols-3 gap-0 border border-border">
                    {["FOR", "AGAINST", "ABSTAIN"].map((l, i) => <SealedValue key={i} label={l} value={undefined} className="border-r border-border p-4 last:border-0" />)}
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-mono text-primary animate-pulse"><Clock className="w-3 h-3" /><span>BLOCK_18,429,012</span></div>
              </div>

              <div className="flex flex-col gap-4">
                 <div className="flex justify-between font-heading font-black items-end uppercase text-[10px]"><span className="text-[#888]">SELECT_DIRECTION</span><span className="text-white">POWER: 14,210 SEAL</span></div>
                 <div className="space-y-3">
                   {["FOR", "AGAINST", "ABSTAIN"].map((vote) => (
                     <button key={vote} onClick={() => setSelectedVote(vote as any)} disabled={hasVoted || isCasting} className={cn("w-full p-6 text-left uppercase transition-all duration-200 border", selectedVote === vote ? "border-primary bg-[#111] text-primary" : "border-border text-[#888]")}>{vote}</button>
                   ))}
                 </div>
              </div>

              {hasVoted ? <div className="p-8 border border-primary bg-primary/10 text-center font-heading font-black text-primary uppercase">VOTE_SEALED</div> : (
                  <button onClick={handleVote} disabled={!selectedVote || isCasting} className={cn("brutalist-button-primary w-full py-6 text-xl", (!selectedVote || isCasting) && "opacity-20")}>
                    {isCasting ? "ENCRYPTING..." : "CAST_SEALED_VOTE"}
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
