import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Pricing } from './components/pricing';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
      <Footer />
    </div>
  );
}
