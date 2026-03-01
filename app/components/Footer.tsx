export default function Footer() {
  return (
    <footer className="bg-amber-900 text-[#FAF9F6] py-12 border-t border-amber-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Gamore Catering</h4>
            <p className="text-amber-100 text-sm">
              Premium catering-tjänster i Stockholm. Hemlagad mat med
              gourmet-känsla för alla tillfällen.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm text-amber-100">
              <li>
                <a href="#meny" className="hover:text-white">
                  Meny
                </a>
              </li>
              <li>
                <a href="#om" className="hover:text-white">
                  Om Oss
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <p className="text-sm text-amber-100 mb-1">070 123 45 67</p>
            <p className="text-sm text-amber-100">info@gamorecatering.se</p>
          </div>
        </div>
        <div className="border-t border-amber-800 pt-8 text-center text-sm text-amber-100">
          <p>&copy; 2024 Gamore Catering Stockholm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
