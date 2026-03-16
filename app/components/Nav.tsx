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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-sm'
          : 'bg-background'
      }`}
    >
      <nav className="flex flex-col md:flex-row items-center justify-between md:gap-8 px-6 md:px-12 lg:px-20 py-4 h-full mx-auto max-w-350">
        <h2 className="text-lg md:text-2xl font-bold leading-none text-title uppercase border-b-2 border-accent">
          Amore Catering
        </h2>
        <div className="flex gap-4 md:gap-8 text-foreground text-sm md:text-base mt-2 md:mt-0 [&_a]:hover:text-accent [&_a]:hover:border-b-accent [&_a]:border-b-transparent [&_a]:border-b-[1.5px] [&_a]:transition-colors [&_a]:duration-300 [&_a]:uppercase">
          <Link href="#meny" onClick={() => handleLinkClick('#meny')}>
            Meny
          </Link>
          <Link href="#om" onClick={() => handleLinkClick('#om')}>
            Om Oss
          </Link>
          <Link href="#kontakt" onClick={() => handleLinkClick('#kontakt')}>
            Boka
          </Link>
        </div>
      </nav>
    </header>
  );
}
