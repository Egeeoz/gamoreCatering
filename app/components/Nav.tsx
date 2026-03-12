import Link from 'next/link';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 h-20 bg-background">
      <nav className="flex flex-col md:flex-row items-center justify-between md:gap-8 px-4 md:px-6 py-4 md:w-[80%] h-full mx-auto">
        <div>
          <h2 className="text-lg md:text-2xl font-bold leading-none">
            Amore Catering
          </h2>
        </div>
        <div className="flex gap-4 md:gap-8 text-foreground text-sm md:text-base mt-2 md:mt-0 [&_a]:hover:text-accent [&_a]:hover:border-b-accent [&_a]:border-b-transparent [&_a]:border-b-[1.5px] [&_a]:transition-colors [&_a]:duration-300">
          <Link href="#meny">Meny</Link>
          <Link href="#om">Om Oss</Link>
          <Link href="#kontakt">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
}
