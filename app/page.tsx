import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Gamore Catering Stockholm | Premium Hemlagat Catering",
  description: "Premium catering-tjänster i Stockholm. Vi erbjuder färsk, hemlagad mat för företagsevenemang, bröllop och privata fester. Personlig service och gourmet-meny.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Navigation */}
      <header className="sticky top-0 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-amber-200">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-amber-900">
            <span className="tracking-tight">gamore</span>
            <span className="block text-sm font-normal text-amber-700">catering</span>
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

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-amber-900 mb-6 leading-tight">
              Premium Catering för Stockholm
            </h1>
            <p className="text-lg text-amber-800 mb-8 leading-relaxed">
              Vi levererar autentisk, hemlagad mat med gourmet-känsla. Perfekt för företagsevenemang, bröllop och privata fester. Lokal, färsk och personligt lagad.
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

      {/* Features Section */}
      <section className="bg-white py-16 border-t border-amber-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-amber-900 mb-12">
            Varför Välja Gamore Catering?
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <article className="border border-amber-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Hemlagad Kvalitet
              </h3>
              <p className="text-amber-800">
                Varje rätt är noggrant lagad med färska ingredienser. Vi använder traditionella metoder för att säkerställa autentisk smak.
              </p>
            </article>
            <article className="border border-amber-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Personlig Service
              </h3>
              <p className="text-amber-800">
                Vi arbetar nära dig för att förstå dina behov. Från menyplanering till servering - vi tar hand om allt.
              </p>
            </article>
            <article className="border border-amber-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Lokal Närvaro
              </h3>
              <p className="text-amber-800">
                Vi är baserade i Stockholm och levererar till hela området. Snabb kommunikation och flexibla lösningar.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="meny" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-amber-900 mb-12">
          Exempelmenyer
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <article className="bg-white border border-amber-200 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="bg-amber-100 h-48 flex items-center justify-center">
              <p className="text-amber-700">Klassisk Middag</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Klassisk Middag
              </h3>
              <p className="text-sm text-amber-800 mb-4">
                Traditionell meny med nordiska smaker. Perfekt för formella evenemang och affärsmiddagar.
              </p>
              <ul className="text-sm text-amber-700 space-y-2 mb-4">
                <li>Förätt: Hemmagjord rödsoppa</li>
                <li>Huvudrätt: Grillad entrecôte</li>
                <li>Dessert: Chokladmousse</li>
              </ul>
              <p className="font-bold text-amber-900">Från 395 SEK/person</p>
            </div>
          </article>

          <article className="bg-white border border-amber-200 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="bg-amber-100 h-48 flex items-center justify-center">
              <p className="text-amber-700">Medelhavet</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Medelhavsmeny
              </h3>
              <p className="text-sm text-amber-800 mb-4">
                Friska, ljusa smaker från Medelhavet. Idealisk för sommarevenemang och casual gatherings.
              </p>
              <ul className="text-sm text-amber-700 space-y-2 mb-4">
                <li>Förätt: Handgjord mozzarella</li>
                <li>Huvudrätt: Grill lax</li>
                <li>Dessert: Citronpanna cotta</li>
              </ul>
              <p className="font-bold text-amber-900">Från 365 SEK/person</p>
            </div>
          </article>

          <article className="bg-white border border-amber-200 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="bg-amber-100 h-48 flex items-center justify-center">
              <p className="text-amber-700">Vegetarisk</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Vegetarisk Elegans
              </h3>
              <p className="text-sm text-amber-800 mb-4">
                Sofisstikerad vegetarisk meny utan kompromisser. Gourmet-smaker för alla preferenser.
              </p>
              <ul className="text-sm text-amber-700 space-y-2 mb-4">
                <li>Förätt: Rotfruktskräm</li>
                <li>Huvudrätt: Pilzragu med pasta</li>
                <li>Dessert: Jordgubbstårta</li>
              </ul>
              <p className="font-bold text-amber-900">Från 345 SEK/person</p>
            </div>
          </article>
        </div>
      </section>

      {/* About Section */}
      <section id="om" className="bg-white py-16 border-t border-amber-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">
            Om Gamore Catering
          </h2>
          <div className="grid grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-amber-800 mb-4 leading-relaxed">
                Gamore Catering startades med en vision att leverera premium catering till Stockholm. Vi tror på hemlagad mat med gourmet-känsla, där varje detalj spelar roll.
              </p>
              <p className="text-amber-800 mb-4 leading-relaxed">
                Vårt team består av erfarna kockar med passion för matlagning. Vi arbetar noga med ingredienterna och tar tid för smaken. Ingen förinlagd mat, allt görs från grunden.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Från små privata middagar till stora företagsevenemang, vi anpassar oss till dina behov. Din gästers upplevelse är vår högsta prioritet.
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-6">
                Vad vi erbjuder
              </h3>
              <div className="space-y-4 text-amber-800">
                <div>
                  <p className="font-semibold text-amber-900">Anpassad Menyplanering</p>
                  <p className="text-sm">Vi skapar menyer som passar din event perfekt.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Leverans & Servering</p>
                  <p className="text-sm">Vi levererar och serverar, eller bara maten - du väljer.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Företagsevenemang</p>
                  <p className="text-sm">Specialiserade lösningar för konferenser och business dinners.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Bröllop & Privata Fester</p>
                  <p className="text-sm">Vi gör dina speciella tillfällen ännu mer minnesvärda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-amber-900 mb-12">
          Boka Din Catering
        </h2>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <p className="text-amber-800 mb-6 leading-relaxed">
              Kontakta oss idag för att diskutera din event. Vi svarar snabbt och hjälper dig planera en perfekt meny som passa era behov och budget.
            </p>
            <div className="space-y-4 text-amber-900">
              <div>
                <p className="font-semibold mb-1">Telefon</p>
                <p><a href="tel:+46701234567" className="hover:text-amber-700">070 123 45 67</a></p>
              </div>
              <div>
                <p className="font-semibold mb-1">E-post</p>
                <p><a href="mailto:info@gamorecatering.se" className="hover:text-amber-700">info@gamorecatering.se</a></p>
              </div>
              <div>
                <p className="font-semibold mb-1">Plats</p>
                <p>Stockholm, Sverige</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Öppettider</p>
                <p>Mån-Lör: 10:00 - 20:00</p>
              </div>
            </div>
          </div>
          <form className="bg-white border border-amber-200 rounded-lg p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-amber-900 font-medium mb-2">
                  Namn
                </label>
                <input
                  type="text"
                  className="w-full border border-amber-200 rounded px-4 py-2 text-amber-900 placeholder-amber-400 focus:outline-none focus:border-amber-900"
                  placeholder="Ditt namn"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  className="w-full border border-amber-200 rounded px-4 py-2 text-amber-900 placeholder-amber-400 focus:outline-none focus:border-amber-900"
                  placeholder="din@email.se"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">
                  Typ av Event
                </label>
                <select className="w-full border border-amber-200 rounded px-4 py-2 text-amber-900 focus:outline-none focus:border-amber-900">
                  <option>Välj typ av event</option>
                  <option>Företagsevenemang</option>
                  <option>Bröllop</option>
                  <option>Privat fest</option>
                  <option>Konferens</option>
                  <option>Annat</option>
                </select>
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">
                  Antal gäster
                </label>
                <input
                  type="number"
                  className="w-full border border-amber-200 rounded px-4 py-2 text-amber-900 placeholder-amber-400 focus:outline-none focus:border-amber-900"
                  placeholder="Cirka antal"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">
                  Meddelande
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-amber-200 rounded px-4 py-2 text-amber-900 placeholder-amber-400 focus:outline-none focus:border-amber-900"
                  placeholder="Berätta om din event..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-900 text-[#FAF9F6] py-3 rounded font-medium hover:bg-amber-800 transition"
              >
                Skicka Förfrågan
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-amber-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-amber-900 mb-12">
            Vanliga Frågor
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <article className="border-b border-amber-200 pb-6">
              <h3 className="text-lg font-bold text-amber-900 mb-3">
                Hur långt i förväg måste jag boka?
              </h3>
              <p className="text-amber-800">
                Vi rekommenderar minst två veckor för att säkerställa bästa möjliga service och ingrediens-kvalitet. För större events kan vi ibland hantera kortare tidsplan.
              </p>
            </article>
            <article className="border-b border-amber-200 pb-6">
              <h3 className="text-lg font-bold text-amber-900 mb-3">
                Erbjuder ni vegetariska/veganska alternativ?
              </h3>
              <p className="text-amber-800">
                Ja, vi erbjuder både vegetariska och veganska alternativ. Vi kan anpassa menyer för alla dietära preferenser och allergier.
              </p>
            </article>
            <article className="border-b border-amber-200 pb-6">
              <h3 className="text-lg font-bold text-amber-900 mb-3">
                Vilka områden i Stockholm täcker ni?
              </h3>
              <p className="text-amber-800">
                Vi levererar till hela Stockholm och omkringliggande områden. Kontakta oss för att verifiera din specifika plats och eventuella leveranskostnader.
              </p>
            </article>
            <article className="border-b border-amber-200 pb-6">
              <h3 className="text-lg font-bold text-amber-900 mb-3">
                Kan ni servera maten på plats?
              </h3>
              <p className="text-amber-800">
                Ja, vi erbjuder både leverans och fullständig servering. Vi kan anpassa servicenivån till dina behov och budget.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-[#FAF9F6] py-12 border-t border-amber-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Gamore Catering</h4>
              <p className="text-amber-100 text-sm">
                Premium catering-tjänster i Stockholm. Hemlagad mat med gourmet-känsla för alla tillfällen.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Snabblänkar</h4>
              <ul className="space-y-2 text-sm text-amber-100">
                <li><a href="#meny" className="hover:text-white">Meny</a></li>
                <li><a href="#om" className="hover:text-white">Om Oss</a></li>
                <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <p className="text-sm text-amber-100 mb-1">070 123 45 67</p>
              <p className="text-sm text-amber-100">info@gamorecatering.se</p>
            </div>
          </div>
          <div className="border-t border-amber-800 pt-8 text-center text-sm text-amber-100">
            <p>&copy; 2024 Gamore Catering Stockholm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
