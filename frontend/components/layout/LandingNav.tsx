"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function LandingNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-[4px] border-black py-4">
      <div className="container flex h-14 items-center justify-between px-6 lg:px-12 max-w-full">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-black text-white px-2 py-1 flex items-center justify-center font-heading font-black text-2xl tracking-tighter uppercase">
            SEALFI
          </div>
          <p className="hidden md:block font-mono text-[10px] font-black uppercase text-[#555]">BLOCKCHAIN_ENVELOPE.V1</p>
        </Link>

        <div className="flex-1 flex gap-10 items-center justify-center ml-10">
          {["PROPOSALS", "VOTE", "GOV"].map((l) => (
            <Link key={l} href={`/${l.toLowerCase()}`} className={cn("font-heading font-black text-sm uppercase tracking-wide transition-colors", pathname.startsWith(`/${l.toLowerCase()}`) ? "text-primary" : "text-black hover:text-primary")}>
              {l}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-full font-heading font-black text-xs uppercase transition-all hover:scale-105 active:scale-95">CONNECT_ACCOUNT</button>
          <button className="bg-white text-black border-[3px] border-black px-6 py-2 rounded-full font-heading font-black text-xs uppercase transition-all hover:bg-black hover:text-white active:scale-95">SETTINGS</button>
        </div>
      </div>
    </nav>
  );
}
