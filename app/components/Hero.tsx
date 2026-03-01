import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-amber-900 mb-6 leading-tight">
            Premium Catering för Stockholm
          </h1>
          <p className="text-lg text-amber-800 mb-8 leading-relaxed">
            Vi levererar autentisk, hemlagad mat med gourmet-känsla. Perfekt för
            företagsevenemang, bröllop och privata fester. Lokal, färsk och
            personligt lagad.
          </p>
          <div className="flex gap-4">
            <Link
              href="#kontakt"
              className="px-8 py-3 bg-amber-900 text-[#FAF9F6] hover:bg-amber-800 transition font-medium"
            >
              Boka Catering
            </Link>
            <Link
              href="#meny"
              className="px-8 py-3 border-2 border-amber-900 text-amber-900 hover:bg-amber-50 transition font-medium"
            >
              Se Meny
            </Link>
          </div>
        </div>
        <div className="bg-amber-100 rounded-lg h-80 flex items-center justify-center">
          <p className="text-amber-700">Catering showcase image</p>
        </div>
      </div>
    </section>
  );
}
