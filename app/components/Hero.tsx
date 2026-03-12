import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
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
              Premium Catering för Stockholm
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-100">
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
        </div>
      </div>
    </section>
  );
}
