import React from "react";

import { cn } from "@/lib/utils";
interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

  export function RainbowButton({
    children,
    className,
    ...props
  }: RainbowButtonProps) {
    return (
      <button
        className={cn(
          // Base styles
          "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl px-8 py-2",
          "font-medium text-white", // Changed to white text for better contrast
          "z-20", // Added z-index to ensure visibility
          
          // Background gradient
          "bg-gradient-to-r from-[#ff9501] to-[#ff5f6d]",
          "hover:from-[#ff5f6d] hover:to-[#ff9501]",
          
          // Animation and effects
          "transition-all duration-300 ease-in-out",
          "hover:scale-105",
          "focus:outline-none focus:ring-2 focus:ring-[#ff9501] focus:ring-offset-2",
          
          // Shadow effect
          "shadow-lg hover:shadow-xl",
          "before:absolute before:inset-0 before:z-0 before:animate-rainbow before:rounded-xl before:opacity-75 before:blur-lg",
          
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
