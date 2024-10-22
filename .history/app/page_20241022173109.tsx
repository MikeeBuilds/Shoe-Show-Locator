import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Footer } from './components/footer';
import Pricing from './components/pricing';
import FrequentlyAskedQuestions from './components/faq';
import AccordionFeatures from './components/accordion-features';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AccordionFeatures />
      <BeforeAfter />
      <FrequentlyAskedQuestions />
      <Pricing />
      <Footer />
    </div>
  );
}
