import { cn } from "@/lib/utils";

interface SealedValueProps {
  value?: string | number;
  isSealed?: boolean;
  className?: string;
}

export function SealedValue({ value, isSealed = true, className }: SealedValueProps) {
  if (isSealed || value === undefined) {
    return (
      <span className={cn("font-mono text-[#FFE500] uppercase animate-pulse", className)}>
        [sealed]
      </span>
    );
  }

  return (
    <span className={cn("font-mono text-[#F5F5F5]", className)}>
      {value}
    </span>
  );
}
