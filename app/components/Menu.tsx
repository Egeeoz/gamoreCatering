export default function Menu() {
  return (
    <section id="meny" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-amber-900 mb-12">Exempelmenyer</h2>
      <div className="grid grid-cols-3 gap-8">
        <article className="bg-white border border-amber-200 rounded-lg overflow-hidden hover:shadow-lg transition">
          <div className="bg-amber-100 h-48 flex items-center justify-center">
            <p className="text-amber-700">Klassisk Middag</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              Klassisk Middag
            </h3>
            <p className="text-sm text-amber-800 mb-4">
              Traditionell meny med nordiska smaker. Perfekt för formella
              evenemang och affärsmiddagar.
            </p>
            <ul className="text-sm text-amber-700 space-y-2 mb-4">
              <li>Förätt: Hemmagjord rödsoppa</li>
              <li>Huvudrätt: Grillad entrecôte</li>
              <li>Dessert: Chokladmousse</li>
            </ul>
            <p className="font-bold text-amber-900">Från 395 SEK/person</p>
          </div>
        </article>

        <article className="bg-white border border-amber-200 rounded-lg overflow-hidden hover:shadow-lg transition">
          <div className="bg-amber-100 h-48 flex items-center justify-center">
            <p className="text-amber-700">Medelhavet</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              Medelhavsmeny
            </h3>
            <p className="text-sm text-amber-800 mb-4">
              Friska, ljusa smaker från Medelhavet. Idealisk för sommarevenemang
              och casual gatherings.
            </p>
            <ul className="text-sm text-amber-700 space-y-2 mb-4">
              <li>Förätt: Handgjord mozzarella</li>
              <li>Huvudrätt: Grill lax</li>
              <li>Dessert: Citronpanna cotta</li>
            </ul>
            <p className="font-bold text-amber-900">Från 365 SEK/person</p>
          </div>
        </article>

        <article className="bg-white border border-amber-200 rounded-lg overflow-hidden hover:shadow-lg transition">
          <div className="bg-amber-100 h-48 flex items-center justify-center">
            <p className="text-amber-700">Vegetarisk</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              Vegetarisk Elegans
            </h3>
            <p className="text-sm text-amber-800 mb-4">
              Sofisstikerad vegetarisk meny utan kompromisser. Gourmet-smaker
              för alla preferenser.
            </p>
            <ul className="text-sm text-amber-700 space-y-2 mb-4">
              <li>Förätt: Rotfruktskräm</li>
              <li>Huvudrätt: Pilzragu med pasta</li>
              <li>Dessert: Jordgubbstårta</li>
            </ul>
            <p className="font-bold text-amber-900">Från 345 SEK/person</p>
          </div>
        </article>
      </div>
    </section>
  );
}
