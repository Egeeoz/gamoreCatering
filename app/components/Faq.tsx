export default function Faq() {
  return (
    <section className="py-12 md:py-16 border-t border-border-color bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-accent">
          Vanliga Frågor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <article className="border-b border-border-color pb-6">
            <h3 className="text-base md:text-lg font-bold mb-3 text-accent">
              Hur långt i förväg måste jag boka?
            </h3>
            <p className="text-foreground-secondary text-sm md:text-base">
              Vi rekommenderar minst två veckor för att säkerställa bästa
              möjliga service och ingrediens-kvalitet. För större events kan vi
              ibland hantera kortare tidsplan.
            </p>
          </article>
          <article className="border-b border-border-color pb-6">
            <h3 className="text-base md:text-lg font-bold mb-3 text-accent">
              Erbjuder ni vegetariska/veganska alternativ?
            </h3>
            <p className="text-foreground-secondary text-sm md:text-base">
              Ja, vi erbjuder både vegetariska och veganska alternativ. Vi kan
              anpassa menyer för alla dietära preferenser och allergier.
            </p>
          </article>
          <article className="border-b border-border-color pb-6">
            <h3 className="text-base md:text-lg font-bold mb-3 text-accent">
              Vilka områden i Stockholm täcker ni?
            </h3>
            <p className="text-foreground-secondary text-sm md:text-base">
              Vi levererar till hela Stockholm och omkringliggande området.
              Kontakta oss för att verifiera din specifika plats och eventuella
              leveranskostnader.
            </p>
          </article>
          <article className="border-b border-border-color pb-6">
            <h3 className="text-base md:text-lg font-bold mb-3 text-accent">
              Kan ni servera maten på plats?
            </h3>
            <p className="text-foreground-secondary text-sm md:text-base">
              Ja, vi erbjuder både leverans och fullständig servering. Vi kan
              anpassa servicenivån till dina behov och budget.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
