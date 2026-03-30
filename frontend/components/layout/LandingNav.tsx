"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function LandingNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background text-sm">
      <div className="container flex h-16 items-center justify-between px-6 lg:px-12 max-w-full">
        <Link href="/" className="flex items-center space-x-2 mr-10 group">
          <div className="bg-primary text-black px-2 py-1 flex items-center justify-center font-heading font-black text-xl tracking-tighter group-hover:bg-white transition-colors duration-200">
            SEALFI
          </div>
        </Link>

        <div className="flex-1 flex gap-8 items-center h-full">
          {[
            { label: "PROPOSALS", href: "/proposals" },
            { label: "VOTE", href: "/vote" },
            { label: "GOVERNANCE", href: "/governance" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "h-full flex items-center font-heading font-bold text-xs tracking-widest text-[#888888] hover:text-primary transition-colors border-b-2 border-transparent",
                pathname.startsWith(link.href) && "text-white border-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end mr-4 text-[10px] font-mono uppercase text-[#888888]">
            <span>SEPOLIA_SYSTEM: CONNECTED</span>
            <span className="text-primary group flex items-center gap-1 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              EMITTED_FHE_CORES: 12
            </span>
          </div>
          <button className="brutalist-button-primary text-xs font-black px-8 py-2">
            CONNECT_WALLET
          </button>
        </div>
      </div>
    </nav>
  );
}
