"use client";

import { useMemo } from "react";
import Link from "next/link";
import { SealedValue } from "@/components/ui/SealedValue";
import { cn } from "@/lib/utils";

export interface Proposal {
  id: string;
  title: string;
  proposer: string;
  voteStart: number;
  voteEnd: number;
  state: "PENDING" | "ACTIVE" | "TALLYING" | "SUCCEEDED" | "DEFEATED" | "EXECUTED";
  forVotes?: number;
  againstVotes?: number;
  abstainVotes?: number;
  voterCount: number;
}

interface Props {
  proposal: Proposal;
  className?: string;
}

export function ProposalCard({ proposal, className }: Props) {
  const isClosed = ["SUCCEEDED", "DEFEATED", "EXECUTED"].includes(proposal.state);
  const isActive = proposal.state === "ACTIVE";

  const statusColor = useMemo(() => {
    switch (proposal.state) {
      case "ACTIVE": return "bg-primary text-black";
      case "TALLYING": return "bg-[#333333] text-white";
      case "SUCCEEDED": return "bg-[#00FF00] text-black";
      case "DEFEATED": return "bg-[#FF0000] text-white";
      case "EXECUTED": return "bg-white text-black";
      default: return "bg-[#888888] text-black";
    }
  }, [proposal.state]);

  return (
    <Link
      href={`/vote/${proposal.id}`}
      className={cn(
        "group relative flex flex-col brutalist-card hover:border-primary border-r-4 transition-all duration-300",
        className
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
            PROPOSAL_{proposal.id.padStart(3, "0")}
          </span>
          <h3 className="text-xl font-heading font-black leading-tight group-hover:text-primary">
            {proposal.title}
          </h3>
        </div>
        <div className={cn("px-4 py-1 font-heading font-black text-[10px]", statusColor)}>
          {proposal.state}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="flex flex-col gap-1 col-span-1">
          <span className="font-heading font-black text-[10px] text-[#888888] tracking-widest uppercase">
            PROPOSER
          </span>
          <span className="font-mono text-xs overflow-hidden text-ellipsis whitespace-nowrap">
            {proposal.proposer}
          </span>
        </div>
        
        <div className="flex flex-col gap-1 col-span-1">
          <span className="font-heading font-black text-[10px] text-[#888888] tracking-widest uppercase">
            {isClosed ? "CLOSED" : "VOTING_ENDS"}
          </span>
          <span className="font-mono text-xs">
            {new Date(proposal.voteEnd).toLocaleString()}
          </span>
        </div>

        <div className="col-span-1">
          <SealedValue
            label="PARTICIPATION"
            value={proposal.voterCount}
            unit="VOTERS"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-0 border-t border-border pt-8 mt-auto">
        <SealedValue label="FOR" value={proposal.forVotes} unit="SEAL" className="border-r border-border pr-4" />
        <SealedValue label="AGAINST" value={proposal.againstVotes} unit="SEAL" className="border-r border-border px-4" />
        <SealedValue label="ABSTAIN" value={proposal.abstainVotes} unit="SEAL" className="pl-4" />
      </div>

      {isActive && (
        <div className="mt-8">
          <div className="w-full bg-[#1A1A1A] h-2">
            <div className="bg-primary h-full animate-pulse-fast" style={{ width: "100%" }} />
          </div>
          <p className="mt-2 text-[10px] font-mono text-primary uppercase animate-pulse">
            TALLY_ACCUMULATING_IN_CONFIDENTIAL_SPACE
          </p>
        </div>
      )}
    </Link>
  );
}
