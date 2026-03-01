import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Gamore Catering Stockholm | Premium Hemlagat Catering',
  description:
    'Premium catering-tjänster i Stockholm. Vi erbjuder färsk, hemlagad mat för företagsevenemang, bröllop och privata fester. Personlig service och gourmet-meny.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Navigation */}
      <Nav />
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Menu Section */}
      <Menu />
      {/* About Section */}
      <About />
      {/* Contact Section */}
      <Contact />
      {/* FAQ Section */}
      <Faq />
      {/* Footer */}
      <Footer />
    </div>
  );
}
