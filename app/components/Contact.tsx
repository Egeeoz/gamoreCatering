export default function Contact() {
  return (
    <section id="kontakt" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-amber-900 mb-12">
        Boka Din Catering
      </h2>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <p className="text-amber-800 mb-6 leading-relaxed">
            Kontakta oss idag för att diskutera din event. Vi svarar snabbt och
            hjälper dig planera en perfekt meny som passa era behov och budget.
          </p>
          <div className="space-y-4 text-amber-900">
            <div>
              <p className="font-semibold mb-1">Telefon</p>
              <p>
                <a href="tel:+46701234567" className="hover:text-amber-700">
                  070 123 45 67
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">E-post</p>
              <p>
                <a
                  href="mailto:info@gamorecatering.se"
                  className="hover:text-amber-700"
                >
                  info@gamorecatering.se
                </a>
              </p>
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
  );
}
