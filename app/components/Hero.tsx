'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Smokum } from 'next/font/google';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState();

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    };

    // Scroll on initial mount and hash change
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  const handleClick = (href: string) => {
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <Image
        src="/catering.webp"
        alt="Premium Catering Background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Premium Catering i Stockholm
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-100 backdrop-blur-sm p-2 rounded-md">
              Vi levererar autentisk, hemlagad mat med gourmet-känsla. Perfekt
              för företagsevenemang, bröllop och privata fester. Lokal, färsk
              och personligt lagad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 [&_a]:hover:-translate-y-2 [&_a]:transition-all [&_a]:duration-300 [&_a]:rounded [&_a]:px-6 [&_a]:md:px-8 [&_a]:py-2 [&_a]:md:py-3">
              <Link
                href="#kontakt"
                className="bg-accent text-background font-medium text-center md:text-left"
                onClick={() => handleClick('#kontakt')}
              >
                Boka Catering
              </Link>
              <Link
                href="#meny"
                className="border-2 backdrop-blur-sm text-background font-medium text-center md:text-left"
                onClick={() => handleClick('#meny')}
              >
                Se Meny
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
