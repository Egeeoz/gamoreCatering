import Link from 'next/link';

export default function Nav() {
  return (
    <header className="sticky top-0 backdrop-blur-sm border-b border-border-color bg-background-secondary transition-all">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-brand-red">Gelateria Amore</h2>
          <span className="text-base text-accent">Catering</span>
        </div>
        <div className="flex gap-8 text-foreground">
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
