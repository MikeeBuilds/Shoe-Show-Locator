import React from "react";
import { cn } from "@/lib/utils";

interface GridPatternCardProps {
  children: React.ReactNode;
  className?: string;
  gridProps?: React.ComponentProps<typeof GridPattern>;
}

export function GridPatternCard({ children, className, gridProps }: GridPatternCardProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-white shadow-md", className)}>
      <GridPattern className="absolute inset-0 h-full w-full" {...gridProps} />
      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
}