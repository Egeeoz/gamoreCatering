import Link from 'next/link';

export default function Nav() {
  return (
    <header className="sticky top-0 bg-[#FAF9F6] backdrop-blur-sm border-b border-black">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-amber-900">Gelateria Amore</h2>
          <span className="text-base text-amber-900">Catering</span>
        </div>
        <div className="flex gap-8 text-amber-900">
          <Link href="#meny" className="hover:text-amber-700 transition">
            Meny
          </Link>
          <Link href="#om" className="hover:text-amber-700 transition">
            Om Oss
          </Link>
          <Link href="#kontakt" className="hover:text-amber-700 transition">
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}
