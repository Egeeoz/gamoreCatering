export default function Menu() {
  return (
    <section
      id="meny"
      className="bg-background max-w-6xl mx-auto px-6 py-20 border-t border-border-color"
    >
      <h2 className="text-3xl font-bold mb-12 text-accent">Exempelmenyer</h2>
      <div className="grid grid-cols-3 gap-8">
        <article className="border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition bg-background-secondary">
          <div className="bg-background-tertiary h-48 flex items-center justify-center">
            <p className="text-foreground-muted">Klassisk Middag</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-accent">
              Klassisk Middag
            </h3>
            <p className="text-sm mb-4 text-foreground-secondary">
              Traditionell meny med nordiska smaker. Perfekt för formella
              evenemang och affärsmiddagar.
            </p>
            <ul className="text-sm space-y-2 mb-4 text-foreground-muted">
              <li>Förätt: Hemmagjord rödsoppa</li>
              <li>Huvudrätt: Grillad entrecôte</li>
              <li>Dessert: Chokladmousse</li>
            </ul>
            <p className="font-bold text-accent">Från 395 SEK/person</p>
          </div>
        </article>

        <article className="border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition bg-background-secondary">
          <div className="bg-background-tertiary h-48 flex items-center justify-center">
            <p className="text-foreground-muted">Medelhavet</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-accent">
              Medelhavsmeny
            </h3>
            <p className="text-sm mb-4 text-foreground-secondary">
              Friska, ljusa smaker från Medelhavet. Idealisk för sommarevenemang
              och casual gatherings.
            </p>
            <ul className="text-sm space-y-2 mb-4 text-foreground-muted">
              <li>Förätt: Handgjord mozzarella</li>
              <li>Huvudrätt: Grill lax</li>
              <li>Dessert: Citronpanna cotta</li>
            </ul>
            <p className="font-bold text-accent">Från 365 SEK/person</p>
          </div>
        </article>

        <article className="border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition bg-background-secondary">
          <div className="bg-background-tertiary h-48 flex items-center justify-center">
            <p className="text-foreground-muted">Vegetarisk</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-accent">
              Vegetarisk Elegans
            </h3>
            <p className="text-sm mb-4 text-foreground-secondary">
              Sofisstikerad vegetarisk meny utan kompromisser. Gourmet-smaker
              för alla preferenser.
            </p>
            <ul className="text-sm space-y-2 mb-4 text-foreground-muted">
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
