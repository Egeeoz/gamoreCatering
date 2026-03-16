export default function Features() {
  return (
    <section className="py-16 md:py-24 border-t border-border-color bg-gradient-to-b from-background via-background to-background-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
            Varför Välja Gamore Catering?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Hemlagad Kvalitet',
              desc: 'Varje rätt är noggrant lagad med färska ingredienser. Vi använder traditionella metoder för att säkerställa autentisk smak.',
            },
            {
              title: 'Personlig Service',
              desc: 'Vi arbetar nära dig för att förstå dina behov. Från menyplanering till servering - vi tar hand om allt.',
            },
            {
              title: 'Lokal Närvara',
              desc: 'Vi är baserade i Stockholm och levererar till hela området. Snabb kommunikation och flexibla lösningar.',
            },
          ].map((feature, idx) => (
            <article
              key={idx}
              className="group relative bg-background-secondary border border-border-color rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-accent transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent group-hover:translate-y-[-2px] transition-transform duration-300">
                  {feature.title}
                </h3>
                <p className="text-foreground-secondary text-sm md:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
