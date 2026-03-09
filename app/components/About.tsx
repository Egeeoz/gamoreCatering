export default function About() {
  return (
    <section
      id="om"
      className="py-16 border-t border-border-color bg-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-accent">
          Om Gamore Catering
        </h2>
        <div className="grid grid-cols-2 gap-12 items-start">
          <div>
            <p className="mb-4 leading-relaxed text-foreground-secondary">
              Gamore Catering startades med en vision att leverera premium
              catering till Stockholm. Vi tror på hemlagad mat med
              gourmet-känsla, där varje detalj spelar roll.
            </p>
            <p className="mb-4 leading-relaxed text-foreground-secondary">
              Vårt team består av erfarna kockar med passion för matlagning. Vi
              arbetar noga med ingredienterna och tar tid för smaken. Ingen
              förinlagd mat, allt görs från grunden.
            </p>
            <p className="leading-relaxed text-foreground-secondary">
              Från små privata middagar till stora företagsevenemang, vi
              anpassar oss till dina behov. Din gästers upplevelse är vår högsta
              prioritet.
            </p>
          </div>
          <div className="rounded-lg p-8 border border-border-color bg-background-secondary">
            <h3 className="text-xl font-bold mb-6 text-accent">
              Vad vi erbjuder
            </h3>
            <div className="space-y-4 text-foreground-secondary">
              <div>
                <p className="font-semibold text-accent">
                  Anpassad Menyplanering
                </p>
                <p className="text-sm">
                  Vi skapar menyer som passar din event perfekt.
                </p>
              </div>
              <div>
                <p className="font-semibold text-accent">
                  Leverans & Servering
                </p>
                <p className="text-sm">
                  Vi levererar och serverar, eller bara maten - du väljer.
                </p>
              </div>
              <div>
                <p className="font-semibold text-accent">Företagsevenemang</p>
                <p className="text-sm">
                  Specialiserade lösningar för konferenser och business dinners.
                </p>
              </div>
              <div>
                <p className="font-semibold text-accent">
                  Bröllop & Privata Fester
                </p>
                <p className="text-sm">
                  Vi gör dina speciella tillfällen ännu mer minnesvärda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
