'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleLinkClick = (href: string) => {
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 h-23 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg' : 'bg-background'
      }`}
    >
      <nav className="flex flex-col md:flex-row items-center justify-between md:gap-8 px-4 md:px-6 py-4 md:w-[80%] h-full mx-auto">
        <div>
          <h2 className="text-lg md:text-2xl font-bold leading-none text-title">
            Amore Catering
          </h2>
        </div>
        <div className="flex gap-4 md:gap-8 text-foreground text-sm md:text-base mt-2 md:mt-0 [&_a]:hover:text-accent [&_a]:hover:border-b-accent [&_a]:border-b-transparent [&_a]:border-b-[1.5px] [&_a]:transition-colors [&_a]:duration-300">
          <Link href="#meny" onClick={() => handleLinkClick('#meny')}>
            Meny
          </Link>
          <Link href="#om" onClick={() => handleLinkClick('#om')}>
            Om Oss
          </Link>
          <Link href="#kontakt" onClick={() => handleLinkClick('#kontakt')}>
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}
