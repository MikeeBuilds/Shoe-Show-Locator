import { RainbowButton } from "@/components/ui/rainbow-button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { DotPattern } from "@/components/ui/dot-pattern";
import React from "react";

export default function CallToAction() {
  return (
    <section className="relative bg-base-100 py-24 dark:bg-[#000000] md:py-48">
      <DotPattern className="absolute inset-0 h-full w-full opacity-50" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <NeonGradientCard className="items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center px-6 py-12 text-center sm:px-12">
            <h2 className="mb-8 text-4xl font-black tracking-tight text-slate-800 dark:text-[#ff9501] md:mb-12 md:text-5xl">
              Discover Rare Finds and Connect with{" "}
              <span className="relative mt-2 inline-block">
                <span className="absolute inset-0 -rotate-1 transform bg-[#ff9501]"></span>
                <span className="relative z-10 px-2 py-2 text-white">
                  Enthusiasts
                </span>
              </span>
            </h2>
            
            <p className="mb-12 max-w-md text-lg text-slate-600 dark:text-slate-300">
              Join our community of sneaker collectors and vintage clothing aficionados. Buy, sell, and attend exclusive events.
            </p>
            <RainbowButton className="z-20">
              Join the Community
            </RainbowButton>
          </div>
        </NeonGradientCard>
      </div>
    </section>
  );
}