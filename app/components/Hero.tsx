import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight text-accent">
              Premium Catering för Stockholm
            </h1>
            <p className="text-lg mb-8 leading-relaxed text-foreground-secondary">
              Vi levererar autentisk, hemlagad mat med gourmet-känsla. Perfekt
              för företagsevenemang, bröllop och privata fester. Lokal, färsk
              och personligt lagad.
            </p>
            <div className="flex gap-4">
              <Link
                href="#kontakt"
                className="px-8 py-3 bg-accent text-background hover:bg-accent-hover transition font-medium"
              >
                Boka Catering
              </Link>
              <Link
                href="#meny"
                className="px-8 py-3 border-2 border-accent text-accent hover:bg-background-secondary transition font-medium"
              >
                Se Meny
              </Link>
            </div>
          </div>
          <div className="bg-background-secondary border border-border-color rounded-lg h-80 flex items-center justify-center">
            <p className="text-foreground-muted">Catering showcase image</p>
          </div>
        </div>
      </div>
    </section>
  );
}
