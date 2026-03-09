import Link from 'next/link';

export default function Nav() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="flex flex-col md:flex-row items-center justify-between md:gap-8 px-4 md:px-6 py-4 bg-background border-b border-border-color">
        <div>
          <h2 className="text-lg md:text-2xl font-bold leading-none">
            Gelateria Amore
          </h2>
          <span className="text-sm md:text-base text-accent leading-none">
            Catering
          </span>
        </div>
        <div className="flex gap-4 md:gap-8 text-foreground text-sm md:text-base mt-4 md:mt-0">
          <Link
            href="#meny"
            className="transition-colors hover:text-accent-hover"
          >
            Meny
          </Link>
          <Link
            href="#om"
            className="transition-colors hover:text-accent-hover"
          >
            Om Oss
          </Link>
          <Link
            href="#kontakt"
            className="transition-colors hover:text-accent-hover"
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}
