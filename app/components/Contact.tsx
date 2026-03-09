export default function Contact() {
  return (
    <section
      id="kontakt"
      className="bg-background max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-12 text-accent">
        Boka Din Catering
      </h2>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <p className="mb-6 leading-relaxed text-foreground-secondary">
            Kontakta oss idag för att diskutera din event. Vi svarar snabbt och
            hjälper dig planera en perfekt meny som passa era behov och budget.
          </p>
          <div className="space-y-4 text-accent">
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
        <form className="border border-border-color rounded-lg p-8 bg-background-secondary">
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-2 text-accent">Namn</label>
              <input
                type="text"
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent"
                placeholder="Ditt namn"
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-accent">
                E-post
              </label>
              <input
                type="email"
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent"
                placeholder="din@email.se"
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-accent">
                Typ av Event
              </label>
              <select className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent">
                <option>Välj typ av event</option>
                <option>Företagsevenemang</option>
                <option>Bröllop</option>
                <option>Privat fest</option>
                <option>Konferens</option>
                <option>Annat</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2 text-accent">
                Antal gäster
              </label>
              <input
                type="number"
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent"
                placeholder="Cirka antal"
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-accent">
                Meddelande
              </label>
              <textarea
                rows={4}
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent"
                placeholder="Berätta om din event..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded font-medium bg-accent text-background hover:bg-accent-hover transition"
            >
              Skicka Förfrågan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
