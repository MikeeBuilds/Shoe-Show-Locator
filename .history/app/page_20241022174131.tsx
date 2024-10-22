import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Footer } from './components/footer';
import Pricing from './components/pricing';
import FrequentlyAskedQuestions from './components/faq';
import AccordionFeatures from './components/accordion-features';
import BeforeAfter from './components/before-after';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AccordionFeatures />
      <BeforeAfter />
      <Pricing />
      <FrequentlyAskedQuestions />
      <C />
      <Footer />
    </div>
  );
}
