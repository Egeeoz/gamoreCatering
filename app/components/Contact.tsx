export default function Contact() {
  return (
    <section
      id="kontakt"
      className="bg-background max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-accent">
        Boka Din Catering
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <p className="mb-6 leading-relaxed text-foreground-secondary text-sm md:text-base">
            Kontakta oss idag för att diskutera din event. Vi svarar snabbt och
            hjälper dig planera en perfekt meny som passa era behov och budget.
          </p>
          <div className="space-y-4 text-accent text-sm md:text-base">
            <div>
              <p className="font-semibold mb-1">Telefon</p>
              <p>
                <a
                  href="tel:+46701234567"
                  className="hover:text-accent-hover transition"
                >
                  070 123 45 67
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">E-post</p>
              <p>
                <a
                  href="mailto:info@gamorecatering.se"
                  className="hover:text-accent-hover transition"
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
        <form className="border border-border-color rounded-lg p-4 md:p-8 bg-background-secondary">
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-2 text-accent text-sm md:text-base">
                Namn
              </label>
              <input
                type="text"
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent text-sm"
                placeholder="Ditt namn"
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-accent text-sm md:text-base">
                E-post
              </label>
              <input
                type="email"
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent text-sm"
                placeholder="din@email.se"
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-accent text-sm md:text-base">
                Typ av Event
              </label>
              <select className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent text-sm">
                <option>Välj typ av event</option>
                <option>Företagsevenemang</option>
                <option>Bröllop</option>
                <option>Privat fest</option>
                <option>Konferens</option>
                <option>Annat</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2 text-accent text-sm md:text-base">
                Antal gäster
              </label>
              <input
                type="number"
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent text-sm"
                placeholder="Cirka antal"
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-accent text-sm md:text-base">
                Meddelande
              </label>
              <textarea
                rows={4}
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent text-sm"
                placeholder="Berätta om din event..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 md:py-3 rounded font-medium bg-accent text-background hover:bg-accent-hover transition text-sm md:text-base"
            >
              Skicka Förfrågan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
