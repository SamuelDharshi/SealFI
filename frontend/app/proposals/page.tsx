"use client";

import { useState } from "react";
import { ProposalCard, Proposal } from "@/components/proposals/ProposalCard";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const mockProposals: Proposal[] = [
  {
    id: "003",
    title: "INCREASE TREASURY ALLOCATION TO 12%",
    proposer: "0x3f...a912",
    voteStart: Date.now() - 86400000,
    voteEnd: Date.now() + 172800000,
    state: "ACTIVE",
    forVotes: undefined,
    againstVotes: undefined,
    abstainVotes: undefined,
    voterCount: 847,
  },
  {
    id: "002",
    title: "ADD HBAR AS ACCEPTED COLLATERAL",
    proposer: "0x7a...c031",
    voteStart: Date.now() - 172800000,
    voteEnd: Date.now() + 86400000,
    state: "ACTIVE",
    forVotes: undefined,
    againstVotes: undefined,
    abstainVotes: undefined,
    voterCount: 1203,
  },
  {
    id: "001",
    title: "ADJUST PROTOCOL FEE FROM 0.30% TO 0.25%",
    proposer: "0x1b...f220",
    voteStart: Date.now() - 345600000,
    voteEnd: Date.now() - 86400000,
    state: "EXECUTED",
    forVotes: 2104221,
    againstVotes: 891044,
    abstainVotes: 112003,
    voterCount: 1542,
  },
];

export default function ProposalsPage() {
  const [filter, setFilter] = useState<"ALL" | "ACTIVE" | "CLOSED">("ALL");

  const filteredProposals = mockProposals.filter((p) => {
    if (filter === "ALL") return true;
    if (filter === "ACTIVE") return p.state === "ACTIVE";
    if (filter === "CLOSED") return ["SUCCEEDED", "DEFEATED", "EXECUTED"].includes(p.state);
    return true;
  });

  return (
    <div className="container px-6 lg:px-12 py-20 max-w-full min-h-screen">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-[#888888] uppercase tracking-[0.4em]">SEALFI_GOVERNANCE_REGISTRY</span>
            <h1 className="text-6xl font-heading font-black tracking-tighter uppercase">
              PROPOSALS
            </h1>
          </div>
          <button className="flex items-center gap-2 bg-[#E41E26] text-white px-6 py-3 font-heading font-black text-xs uppercase tracking-widest neo-border-thick neo-shadow-hard hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            <Plus className="w-4 h-4" />
            CREATE_NEW_PROPOSAL
          </button>
        </div>

        <div className="flex gap-0 border-b border-border">
          {["ALL", "ACTIVE", "CLOSED"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as any)}
              className={cn(
                "px-8 py-4 font-heading font-black text-xs uppercase tracking-widest border-b-2 transition-all",
                filter === tab ? "border-primary text-primary bg-[#111]" : "border-transparent text-[#555] hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {filteredProposals.length > 0 ? (
            filteredProposals.map((prop, idx) => {
              const colors = ["#E41E26", "#8B5CF6", "#10B981", "#EC4899", "#F59E0B"];
              const color = colors[idx % colors.length];
              return (
                <ProposalCard 
                  key={prop.id} 
                  id={prop.id}
                  title={prop.title}
                  status={prop.state === "EXECUTED" ? "PASSED" : "ACTIVE"}
                  description="Proposal to adjust the protocol parameters for optimal efficiency and decentralization."
                  votes={prop.voterCount ? `${(prop.voterCount / 100).toFixed(1)}M` : "0.0M"}
                  timeLeft={prop.state === "ACTIVE" ? "2D 14H" : "CLOSED"}
                  category="PROTOCOL"
                  color={color}
                  className="max-w-full"
                />
              );
            })
          ) : (
            <div className="p-20 border border-border flex flex-col items-center justify-center text-center gap-4">
              <span className="font-mono text-[#555] uppercase animate-pulse">ZERO_RECORDS_FOUND</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
