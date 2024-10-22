"use client";

import DotPattern from "@/components/ui/dot-pattern";
import Link from 'next/link';

export default function Pricing() {
  return (
    <section className="relative flex overflow-hidden bg-slate-50 dark:bg-[#000000]" id="pricing">
      {/* Dot Pattern with faded edges */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-[#000000] dark:via-transparent dark:to-[#000000] z-10"></div>
        <DotPattern className="text-neutral-700 dark:text-neutral-300" />
      </div>
      
      <div className="relative z-20 mx-auto max-w-5xl px-8 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <div className="mb-4">
            <h1 className="mx-auto max-w-fit animate-pulse whitespace-nowrap rounded-full bg-[#ff9501] px-2 py-1 text-xs font-semibold text-white">
              ✨ Launch discount — 50% OFF Premium Seller Plan ✨
            </h1>
          </div>
          <h2 className="mx-auto mb-8 max-w-xl text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 lg:text-5xl">
            Take your sneaker and vintage clothing sales to the next level
          </h2>
          <div className="mx-auto max-w-md font-medium text-slate-500 dark:text-slate-400">
            Streamline your event search and connect with buyers effortlessly. Now is the best time to join the community!
          </div>
        </div>
        <div className="relative flex flex-col items-stretch justify-center gap-8 lg:flex-row ">
          <PricingCard
            key="Free Plan"
            title="Free Plan"
            isFeatured={false}
            price={0}
            originalPrice={0}
            features={[
              <span key="feature1">Access to local sneaker events</span>,
              <span key="feature2">Limited seller profile</span>,
              <span key="feature3">Basic event notifications</span>,
            ]}
            buttonLink="/sign-up"
            description="Great for new sellers and event-goers"
          />
          <PricingCard
            key="Premium Seller Plan"
            title="Premium Seller Plan"
            isFeatured={true}
            price={40}
            originalPrice={80}
            features={[
              <span key="feature1">Unlimited event access</span>,
              <span key="feature2">Premium seller profile with reviews</span>,
              <span key="feature3">Priority listing at events</span>,
              <span key="feature4">Advanced analytics on buyer interactions</span>,
              <span key="feature5">Direct messaging with buyers</span>,
            ]}
            buttonLink="/sign-up?priceId=premium-seller"
            description="Ideal for professional sellers"
            urgencyMessage="Offer valid for the first 10 sign-ups"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  originalPrice,
  features,
  buttonLink,
  isFeatured,
  description,
  urgencyMessage,
}: {
  title: string;
  price: number;
  originalPrice: number;
  features: React.ReactNode[];
  buttonLink: string;
  isFeatured?: boolean;
  description: string;
  urgencyMessage?: string;
}) {
  return (
    <div className={`relative w-full max-w-lg shadow-2xl dark:shadow-slate-800 ${isFeatured ? "lg:-mt-4" : ""}`}>
      {isFeatured && (
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
          <span className="whitespace-nowrap rounded-full bg-[#ff9501] px-2 py-1 text-xs font-semibold text-white">
            MOST POPULAR
          </span>
        </div>
      )}
      <div
        className={`relative z-10 h-full rounded-lg shadow-lg ${
          isFeatured ? "ring-2 ring-[#ff9501]" : "border border-zinc-200 dark:border-zinc-700"
        }`}
      >
        <div className="flex h-full flex-col gap-5 rounded-lg bg-white dark:bg-[#000000] p-8 lg:gap-8">
          {urgencyMessage && (
            <div className="absolute top-2 right-2 z-20 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
              {urgencyMessage}
            </div>
          )}
          <div>
            <h3 className="mb-2 text-xl font-bold text-slate-800 dark:text-slate-200">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
          </div>
          <div className="flex flex-wrap items-end gap-2">
            <div
              className={`mb-[4px] flex flex-col justify-end text-lg ${
                isFeatured ? "" : "hidden"
              }`}
            >
              <p className="relative">
                <span className="absolute inset-x-0 top-[53%] h-[1.5px] bg-slate-900 dark:bg-slate-200"></span>
                <span className="text-slate-700 dark:text-slate-400">${originalPrice}</span>
              </p>
            </div>
            <p className="text-5xl font-black tracking-tight text-slate-800 dark:text-slate-200">
              ${price}
            </p>
            <div className="mb-[4px] flex flex-col justify-end">
              <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                One-Time Payment
              </p>
            </div>
          </div>
          <ul
            className={`flex-1 space-y-2.5 text-base leading-relaxed ${
              isFeatured ? "text-green-600 dark:text-green-400" : "text-slate-700 dark:text-slate-400"
            }`}
          >
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-[18px] w-[18px] shrink-0 opacity-80"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700 dark:text-slate-400">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            <Link href={buttonLink} passHref legacyBehavior>
              <a href={buttonLink} className="w-full inline-block text-center bg-orange-500 text-white py-2 px-4 rounded">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
