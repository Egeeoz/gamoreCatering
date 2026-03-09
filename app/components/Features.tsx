export default function Features() {
  return (
    <section className="py-16 border-t border-border-color bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-accent">
          Varför Välja Gamore Catering?
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <article className="border border-border-color rounded-lg p-8">
            <h3 className="text-xl font-bold mb-3 text-accent">
              Hemlagad Kvalitet
            </h3>
            <p className="text-foreground-secondary">
              Varje rätt är noggrant lagad med färska ingredienser. Vi använder
              traditionella metoder för att säkerställa autentisk smak.
            </p>
          </article>
          <article className="border border-border-color rounded-lg p-8">
            <h3 className="text-xl font-bold mb-3 text-accent">
              Personlig Service
            </h3>
            <p className="text-foreground-secondary">
              Vi arbetar nära dig för att förstå dina behov. Från menyplanering
              till servering - vi tar hand om allt.
            </p>
          </article>
          <article className="border border-border-color rounded-lg p-8">
            <h3 className="text-xl font-bold mb-3 text-accent">
              Lokal Närvaro
            </h3>
            <p className="text-foreground-secondary">
              Vi är baserade i Stockholm och levererar till hela området. Snabb
              kommunikation och flexibla lösningar.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
