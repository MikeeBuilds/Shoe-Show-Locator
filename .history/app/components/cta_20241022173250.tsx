import React from "react";
import { Button } from "./button";

export default function CallToAction() {
  return (
    <section className="bg-base-100 dark:bg-[#000000] relative">
      <div className="relative mx-auto max-w-7xl px-8 py-24 text-center text-slate-800 dark:text-slate-200 md:py-48">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
          <h2 className="mb-8 text-4xl font-black tracking-tight text-slate-800 dark:text-[#ff9501] md:mb-12 md:text-5xl">
            Supercharge Your Development with <span className="relative mt-2 inline-block">
            <span className="absolute inset-0 -rotate-1 transform bg-[#ff9501]"></span>
            <span className="relative z-10 px-2 py-2 text-white">
              LandingPlate
            </span>
          </span>
          </h2>
          
          <p className="mb-12 max-w-md text-lg text-slate-500 dark:text-slate-400">
            Quickly set up and deploy high-quality landing pages with our Next.js boilerplate template.
          </p>
          <Button className="h-12 w-48 text-lg text-white" color="orange" href="/sign-up">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}