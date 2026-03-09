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
          <div className="bg-background-tertiary h-40 md:h-48 flex items-center justify-center">
            <p className="text-foreground-muted text-sm md:text-base">
              Klassisk Middag
            </p>
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
              Klassisk Middag
            </h3>
            <p className="text-xs md:text-sm mb-4 text-foreground-secondary">
              Traditionell meny med nordiska smaker. Perfekt för formella
              evenemang och affärsmiddagar.
            </p>
            <ul className="text-xs md:text-sm space-y-2 mb-4 text-foreground-muted">
              <li>Förätt: Hemmagjord rödsoppa</li>
              <li>Huvudrätt: Grillad entrecôte</li>
              <li>Dessert: Chokladmousse</li>
            </ul>
            <p className="font-bold text-accent">Från 395 SEK/person</p>
          </div>
        </article>

        <article className="border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition bg-background-secondary">
          <div className="bg-background-tertiary h-40 md:h-48 flex items-center justify-center">
            <p className="text-foreground-muted text-sm md:text-base">
              Medelhavet
            </p>
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
              Medelhavsmeny
            </h3>
            <p className="text-xs md:text-sm mb-4 text-foreground-secondary">
              Friska, ljusa smaker från Medelhavet. Idealisk för sommarevenemang
              och casual gatherings.
            </p>
            <ul className="text-xs md:text-sm space-y-2 mb-4 text-foreground-muted">
              <li>Förätt: Handgjord mozzarella</li>
              <li>Huvudrätt: Grill lax</li>
              <li>Dessert: Citronpanna cotta</li>
            </ul>
            <p className="font-bold text-accent">Från 365 SEK/person</p>
          </div>
        </article>

        <article className="border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition bg-background-secondary">
          <div className="bg-background-tertiary h-40 md:h-48 flex items-center justify-center">
            <p className="text-foreground-muted text-sm md:text-base">
              Vegetarisk
            </p>
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
              Vegetarisk Elegans
            </h3>
            <p className="text-xs md:text-sm mb-4 text-foreground-secondary">
              Sofisstikerad vegetarisk meny utan kompromisser. Gourmet-smaker
              för alla preferenser.
            </p>
            <ul className="text-xs md:text-sm space-y-2 mb-4 text-foreground-muted">
              <li>Förätt: Rotfruktskräm</li>
              <li>Huvudrätt: Pilzragu med pasta</li>
              <li>Dessert: Jordgubbstårta</li>
            </ul>
            <p className="font-bold text-accent">Från 345 SEK/person</p>
          </div>
        </article>
      </div>
    </section>
  );
}
