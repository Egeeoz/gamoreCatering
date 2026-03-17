'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { areas } from '@/app/data/areas';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <Link href="/">Amore Catering</Link>
        </h2>
        <div className="flex gap-4 md:gap-8 text-foreground text-sm md:text-base mt-2 md:mt-0 [&_a]:hover:text-accent [&_a]:transition-colors [&_a]:duration-300 [&_a]:uppercase">
          <Link href="/#meny" onClick={() => handleLinkClick('#meny')}>
            Meny
          </Link>
          <Link href="/#om" onClick={() => handleLinkClick('#om')}>
            Om Oss
          </Link>
          <div className="relative group">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-accent transition-colors duration-300 uppercase cursor-pointer"
            >
              Områden
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-32 bg-secondary border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 top-full pt-2">
              {areas.map((area) => (
                <Link
                  key={area.id}
                  href={`/omraden/${area.slug}`}
                  className="flex px-4 py-2 text-sm text-foreground"
                  onClick={() => setDropdownOpen(false)}
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#kontakt" onClick={() => handleLinkClick('#kontakt')}>
            Boka
          </Link>
        </div>
      </nav>
    </header>
  );
}
