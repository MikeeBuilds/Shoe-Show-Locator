import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Footer } from './components/footer';
import Pricing from './components/pricing';

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
