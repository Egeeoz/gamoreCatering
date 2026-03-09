import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-accent">
              Premium Catering för Stockholm
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed text-foreground-secondary">
              Vi levererar autentisk, hemlagad mat med gourmet-känsla. Perfekt
              för företagsevenemang, bröllop och privata fester. Lokal, färsk
              och personligt lagad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#kontakt"
                className="px-6 md:px-8 py-2 md:py-3 bg-accent text-background hover:bg-accent-hover transition font-medium text-center md:text-left"
              >
                Boka Catering
              </Link>
              <Link
                href="#meny"
                className="px-6 md:px-8 py-2 md:py-3 border-2 border-accent text-accent hover:bg-background-secondary transition font-medium text-center md:text-left"
              >
                Se Meny
              </Link>
            </div>
          </div>
          <div className="bg-background-secondary border border-border-color rounded-lg h-64 md:h-80 flex items-center justify-center">
            <p className="text-foreground-muted">Catering showcase image</p>
          </div>
        </div>
      </div>
    </section>
  );
}
