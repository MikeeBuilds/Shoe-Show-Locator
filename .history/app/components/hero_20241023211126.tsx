import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg- text-foreground">
      <GridPattern
        className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 dark:fill-neutral-950 dark:stroke-neutral-100/5"
        y={-96}
        squares={[
          [4, 3],
          [2, 1],
          [7, 3],
          [10, 6],
        ]}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Find Your Perfect Sneakers & Vintage Clothing
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Discover the latest shows and events in sneakers and vintage fashion, all in one place.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <RainbowButton className="w-full sm:w-auto">Get Started</RainbowButton>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:ml-8">
              <div className="relative w-full max-w-lg mx-auto lg:max-w-md">
                <div className="relative aspect-w-5 aspect-h-3 rounded-lg bg-gray-100 dark:bg-neutral-950 shadow-lg overflow-hidden">
                  <BorderBeam 
                    size={250}
                    duration={12}
                    delay={9}
                    colorFrom="rgb(236, 168, 72)"
                    colorTo="rgb(218, 75, 250)"
                  />
                  {/* Replace with your product image */}
                  <Image
                    src="/ipad-gif.gif"
                    alt="Product showcase"
                    width={500}
                    height={300}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}