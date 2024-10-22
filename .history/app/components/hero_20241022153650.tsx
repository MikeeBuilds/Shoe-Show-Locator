import Marquee from "@/components/ui/marquee";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <h2 className="text-4xl font-bold text-white">Find Your Perfect Sneakers & Vintage Clothing</h2>
      <Marquee className="mt-4" pauseOnHover>
        <span className="text-lg">Explore the latest shows and events!</span>
      </Marquee>
    </div>
  );
}
