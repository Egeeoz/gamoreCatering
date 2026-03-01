export default function Faq() {
  return (
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
              Vi rekommenderar minst två veckor för att säkerställa bästa
              möjliga service och ingrediens-kvalitet. För större events kan vi
              ibland hantera kortare tidsplan.
            </p>
          </article>
          <article className="border-b border-amber-200 pb-6">
            <h3 className="text-lg font-bold text-amber-900 mb-3">
              Erbjuder ni vegetariska/veganska alternativ?
            </h3>
            <p className="text-amber-800">
              Ja, vi erbjuder både vegetariska och veganska alternativ. Vi kan
              anpassa menyer för alla dietära preferenser och allergier.
            </p>
          </article>
          <article className="border-b border-amber-200 pb-6">
            <h3 className="text-lg font-bold text-amber-900 mb-3">
              Vilka områden i Stockholm täcker ni?
            </h3>
            <p className="text-amber-800">
              Vi levererar till hela Stockholm och omkringliggande områden.
              Kontakta oss för att verifiera din specifika plats och eventuella
              leveranskostnader.
            </p>
          </article>
          <article className="border-b border-amber-200 pb-6">
            <h3 className="text-lg font-bold text-amber-900 mb-3">
              Kan ni servera maten på plats?
            </h3>
            <p className="text-amber-800">
              Ja, vi erbjuder både leverans och fullständig servering. Vi kan
              anpassa servicenivån till dina behov och budget.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
