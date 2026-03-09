export default function Footer() {
  return (
    <footer className="py-8 md:py-12 border-t border-border-color bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-foreground">
              Gamore Catering
            </h4>
            <p className="text-xs md:text-sm text-foreground-secondary">
              Premium catering-tjänster i Stockholm. Hemlagad mat med
              gourmet-känsla för alla tillfällen.
            </p>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-foreground">
              Snabblänkar
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-foreground-secondary">
              <li>
                <a href="#meny" className="hover:text-accent-hover transition">
                  Meny
                </a>
              </li>
              <li>
                <a href="#om" className="hover:text-accent-hover transition">
                  Om Oss
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="hover:text-accent-hover transition"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-foreground">
              Kontakt
            </h4>
            <p className="text-xs md:text-sm text-foreground-secondary mb-1">
              070 123 45 67
            </p>
            <p className="text-xs md:text-sm text-foreground-secondary">
              info@gamorecatering.se
            </p>
          </div>
        </div>
        <div className="border-t border-border-color pt-6 md:pt-8 text-center text-xs md:text-sm text-foreground-secondary">
          <p>&copy; 2024 Gamore Catering Stockholm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
