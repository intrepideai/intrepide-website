import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Belief from '@/components/Belief';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import AgentsTeaser from '@/components/AgentsTeaser';
import Values from '@/components/Values';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Belief />
        <Stats />
        <About />
        <Services />
        <Industries />
        <AgentsTeaser />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
