"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface Props {
  value: number | undefined; // undefined = still sealed
  label?: string;
  className?: string;
  unit?: string;
}

export function SealedValue({ value, label, className, unit }: Props) {
  const isSealed = value === undefined;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <span className="font-heading font-black text-[10px] text-[#888888] tracking-[0.2em] uppercase">
          {label}
        </span>
      )}
      <div className="flex items-baseline gap-2">
        <span
          className={cn(
            "font-mono text-lg font-bold transition-all duration-300",
            isSealed ? "text-primary animate-pulse-fast" : "text-white"
          )}
        >
          {isSealed ? "[SEALED]" : value.toLocaleString()}
        </span>
        {!isSealed && unit && (
          <span className="font-mono text-[10px] text-[#888888] uppercase">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}
