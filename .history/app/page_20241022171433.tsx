import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Footer } from './components/footer';
import Pricing from './components/pricing';
import FrequentlyAskedQuestions from './components/faq';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FrequentlyAskedQuestions />
      <Pricing />
      <Footer />
    </div>
  );
}