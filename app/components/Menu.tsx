import Image from 'next/image';

const menus = [
  {
    title: 'Klassisk Meny',
    desc: 'En tidlös meny med fokus på svenska favoriter, tillagade med premiumråvaror.',
    items: [
      'Förätt: Gravad lax',
      'Huvudrätt: Oxfilé',
      'Dessert: Chokladfondant',
    ],
    price: 'Från 395 SEK/person',
  },
  {
    title: 'Gourmet Meny',
    desc: 'En exklusiv meny för de som söker det extra, med unika smaker och presentation.',
    items: [
      'Förätt: Hummerbisque',
      'Huvudrätt: Lamm rack',
      'Dessert: Crème brûlée',
    ],
    price: 'Från 495 SEK/person',
  },
  {
    title: 'Buffé Meny',
    desc: 'En generös buffé perfekt för större sällskap med stor variation.',
    items: [
      'Förätt: Mezze tallrik',
      'Huvudrätt: Grillat kött & fisk',
      'Dessert: Dessertbord',
    ],
    price: 'Från 345 SEK/person',
  },
];

export default function Menu() {
  return (
    <section
      id="meny"
      className="bg-background py-12 md:py-20 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-accent">
          Exempelmenyer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menus.map((menu, idx) => (
            <article
              key={idx}
              className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition bg-secondary"
            >
              <div className="w-full h-40 md:h-48 overflow-hidden">
                <Image
                  src="/catering-menu.webp"
                  width={1920}
                  height={1080}
                  alt={menu.title}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  {menu.title}
                </h3>
                <p className="text-xs md:text-sm mb-4 text-muted-foreground">
                  {menu.desc}
                </p>
                <ul className="text-xs md:text-sm space-y-2 mb-4 text-foreground/90">
                  {menu.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="font-bold text-accent">{menu.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
