"use client";

import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface NeonGradientCardProps {
  className?: string;
  children?: React.ReactNode;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: {
    firstColor: string;
    secondColor: string;
  };
}

export de function NeonGradientCard({
  className,
  children,
  borderSize = 5,
  borderRadius = 20,
  neonColors = { firstColor: "#ff00aa", secondColor: "#00FFF1" },
}: NeonGradientCardProps) {
  const styles: CSSProperties = {
    "--border-size": `${borderSize}px`,
    "--border-radius": `${borderRadius}px`,
    "--neon-first-color": neonColors.firstColor,
    "--neon-second-color": neonColors.secondColor,
    "--card-content-radius": `${borderRadius - borderSize}px`,
  } as CSSProperties;

  return (
    <div
      style={styles}
      className={cn(
        "relative z-10 overflow-hidden rounded-[var(--border-radius)]",
        className
      )}
    >
      <div
        className={cn(
          "relative size-full min-h-[inherit] rounded-[var(--card-content-radius)] bg-gray-100 p-6 dark:bg-neutral-900",
          "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
          "before:h-[calc(100%+var(--border-size)*2)] before:w-[calc(100%+var(--border-size)*2)] before:rounded-[var(--border-radius)] before:content-['']",
          "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
          "before:animate-background-position-spin",
          "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
          "after:h-[calc(100%+var(--border-size)*2)] after:w-[calc(100%+var(--border-size)*2)] after:rounded-[var(--border-radius)] after:blur-[calc(var(--border-size)*4)] after:content-['']",
          "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
          "after:animate-background-position-spin"
        )}
      >
        {children}
      </div>
    </div>
  );
}