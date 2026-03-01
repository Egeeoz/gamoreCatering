export default function About() {
  return (
    <section id="om" className="bg-white py-16 border-t border-amber-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">
          Om Gamore Catering
        </h2>
        <div className="grid grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-amber-800 mb-4 leading-relaxed">
              Gamore Catering startades med en vision att leverera premium
              catering till Stockholm. Vi tror på hemlagad mat med
              gourmet-känsla, där varje detalj spelar roll.
            </p>
            <p className="text-amber-800 mb-4 leading-relaxed">
              Vårt team består av erfarna kockar med passion för matlagning. Vi
              arbetar noga med ingredienterna och tar tid för smaken. Ingen
              förinlagd mat, allt görs från grunden.
            </p>
            <p className="text-amber-800 leading-relaxed">
              Från små privata middagar till stora företagsevenemang, vi
              anpassar oss till dina behov. Din gästers upplevelse är vår högsta
              prioritet.
            </p>
          </div>
          <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 mb-6">
              Vad vi erbjuder
            </h3>
            <div className="space-y-4 text-amber-800">
              <div>
                <p className="font-semibold text-amber-900">
                  Anpassad Menyplanering
                </p>
                <p className="text-sm">
                  Vi skapar menyer som passar din event perfekt.
                </p>
              </div>
              <div>
                <p className="font-semibold text-amber-900">
                  Leverans & Servering
                </p>
                <p className="text-sm">
                  Vi levererar och serverar, eller bara maten - du väljer.
                </p>
              </div>
              <div>
                <p className="font-semibold text-amber-900">
                  Företagsevenemang
                </p>
                <p className="text-sm">
                  Specialiserade lösningar för konferenser och business dinners.
                </p>
              </div>
              <div>
                <p className="font-semibold text-amber-900">
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
