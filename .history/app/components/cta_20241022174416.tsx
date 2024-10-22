import { RainbowButton } from "@/components/ui/rainbow-button";
import { GridPattern } from "@/components/ui/grid-pattern";
import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-base-100 dark:bg-[#000000] relative py-24 md:py-48">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            className="absolute inset-0 h-full w-full fill-gray-100 stroke-gray-200 dark:fill-gray-800 dark:stroke-gray-700"
            squares={[
              [4, 3],
              [2, 1],
              [7, 3],
              [10, 6],
            ]}
          />
          <div className="relative px-6 py-16 sm:px-12 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-4xl font-black tracking-tight text-slate-800 dark:text-[#ff9501] md:mb-12 md:text-5xl">
                Discover Rare Finds and Connect with{" "}
                <span className="relative mt-2 inline-block">
                  <span className="absolute inset-0 -rotate-1 transform bg-[#ff9501]"></span>
                  <span className="relative z-10 px-2 py-2 text-white">
                    Enthusiasts
                  </span>
                </span>
              </h2>
              
              <p className="mb-12 max-w-md mx-auto text-lg text-slate-500 dark:text-slate-400">
                Join our community of sneaker collectors and vintage clothing aficionados. Buy, sell, and attend exclusive events.
              </p>
              <RainbowButton>
                Join the Community
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}