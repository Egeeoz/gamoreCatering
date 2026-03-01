export default function Features() {
  return (
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
              Varje rätt är noggrant lagad med färska ingredienser. Vi använder
              traditionella metoder för att säkerställa autentisk smak.
            </p>
          </article>
          <article className="border border-amber-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              Personlig Service
            </h3>
            <p className="text-amber-800">
              Vi arbetar nära dig för att förstå dina behov. Från menyplanering
              till servering - vi tar hand om allt.
            </p>
          </article>
          <article className="border border-amber-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              Lokal Närvaro
            </h3>
            <p className="text-amber-800">
              Vi är baserade i Stockholm och levererar till hela området. Snabb
              kommunikation och flexibla lösningar.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
