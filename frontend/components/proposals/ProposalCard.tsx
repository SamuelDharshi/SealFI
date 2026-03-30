"use client";

import { useMemo } from "react";
import Link from "next/link";
import { SealedValue } from "@/components/ui/SealedValue";
import { cn } from "@/lib/utils";

export interface Proposal {
  id: string; title: string; proposer: string; voteStart: number; voteEnd: number; state: "PENDING" | "ACTIVE" | "TALLYING" | "SUCCEEDED" | "DEFEATED" | "EXECUTED";
  forVotes?: number; againstVotes?: number; abstainVotes?: number; voterCount: number;
}

export function ProposalCard({ proposal, className }: { proposal: Proposal; className?: string }) {
  const isClosed = ["SUCCEEDED", "DEFEATED", "EXECUTED"].includes(proposal.state);
  
  const headerStyle = useMemo(() => {
    switch (proposal.state) {
       case "ACTIVE": return "bg-gradient-to-r from-blue-400 to-blue-600";
       case "SUCCEEDED": return "bg-gradient-to-r from-green-400 to-green-600";
       case "DEFEATED": return "bg-gradient-to-r from-red-400 to-red-600";
       default: return "bg-gradient-to-r from-purple-400 to-pink-600";
    }
  }, [proposal.state]);

  return (
    <Link href={`/vote/${proposal.id}`} className={cn("group block bg-white rounded-[24px] border-[4px] border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] overflow-hidden transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]", className)}>
      <div className={cn("p-8 relative min-h-[160px] flex flex-col gap-4 text-white", headerStyle)}>
         <div className="flex justify-between items-start">
            <div className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase">SIP-{proposal.id}</div>
            <div className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider">{proposal.state}</div>
         </div>
         <h3 className="text-3xl font-heading font-black uppercase leading-none tracking-tight">{proposal.title}</h3>
         <p className="font-mono text-[10px] opacity-70 break-all">{proposal.proposer}</p>
      </div>

      <div className="p-8 flex justify-between items-end gap-10">
         <SealedValue value={isClosed ? proposal.voterCount : undefined} label="FOLLOWERS" unit="VOTERS" className="[&_span]:!text-2xl [&_span]:text-black" />
         <SealedValue value={isClosed ? proposal.forVotes : undefined} label="FOR" className="[&_span]:!text-2xl [&_span]:text-black" />
         <SealedValue value={isClosed ? proposal.againstVotes : undefined} label="AGAINST" className="[&_span]:!text-2xl [&_span]:text-black" />
      </div>
    </Link>
  );
}
