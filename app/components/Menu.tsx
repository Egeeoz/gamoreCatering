import Image from 'next/image';

export default function Menu() {
  return (
    <section
      id="meny"
      className="bg-background max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 border-t border-border-color"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-accent">
        Exempelmenyer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <article className="border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition bg-background-secondary">
          <div className="w-full h-40 md:h-48 object-cover relative overflow-hidden">
            <Image src="/catering.webp" alt="Menu Food" fill />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
              Exempel
            </h3>
            <p className="text-xs md:text-sm mb-4 text-foreground-secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              explicabo?
            </p>
            <ul className="text-xs md:text-sm space-y-2 mb-4 text-foreground-muted">
              <li>Förätt: Exempel</li>
              <li>Huvudrätt: Exepel</li>
              <li>Dessert: Exempel</li>
            </ul>
            <p className="font-bold text-accent">Från 395 SEK/person</p>
          </div>
        </article>

        <article className="border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition bg-background-secondary">
          <div className="w-full h-40 md:h-48 object-cover relative overflow-hidden">
            <Image src="/catering.webp" alt="Menu Food" fill />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
              Exempel
            </h3>
            <p className="text-xs md:text-sm mb-4 text-foreground-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              necessitatibus?
            </p>
            <ul className="text-xs md:text-sm space-y-2 mb-4 text-foreground-muted">
              <li>Förätt: Exempel</li>
              <li>Huvudrätt: Exempel</li>
              <li>Dessert: Exempel</li>
            </ul>
            <p className="font-bold text-accent">Från 365 SEK/person</p>
          </div>
        </article>

        <article className="border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition bg-background-secondary">
          <div className="w-full h-40 md:h-48 object-cover relative overflow-hidden">
            <Image src="/catering.webp" alt="Menu Food" fill />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
              Exempel
            </h3>
            <p className="text-xs md:text-sm mb-4 text-foreground-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
              saepe.
            </p>
            <ul className="text-xs md:text-sm space-y-2 mb-4 text-foreground-muted">
              <li>Förätt: Exempel</li>
              <li>Huvudrätt: Exempel</li>
              <li>Dessert: Exempel</li>
            </ul>
            <p className="font-bold text-accent">Från 345 SEK/person</p>
          </div>
        </article>
      </div>
    </section>
  );
}
