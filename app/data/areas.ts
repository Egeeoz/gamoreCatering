export interface Area {
  id: string;
  name: string;
  slug: string;
  description: string;
  meta: string;
  highlights: string[];
}
export const areas: Area[] = [
  {
    id: 'vasastaden',
    name: 'Vasastaden',
    slug: 'vasastaden',
    description:
      'Premium catering för Stockholm centrum. Vi levererar färsk, hemlagad mat direkt till ditt evenemang i Vasastaden – från företagsluncher till privata middagar.',
    meta: 'Hemlagad catering levererat till Vasastaden – färsk mat för företag och privata event i centrala Stockholm.',
    highlights: [
      'Företagsluncher & konferenser',
      'Privata middagar',
      'Leverans inom 24h',
    ],
  },
  {
    id: 'sodermalm',
    name: 'Södermalm',
    slug: 'sodermalm',
    description:
      'Premium catering i Södermalm. Oavsett om det är en rooftop-fest eller en intim middag, levererar vi smakfull mat med kärlek.',
    meta: 'Hemlagad catering levererat till ditt hem i Södermalm – perfekt för fester, middagar och företagsevent.',
    highlights: [
      'Buffé & sittande middagar',
      'Fester & firanden',
      'Flexibla menyer',
    ],
  },
  {
    id: 'huddinge',
    name: 'Huddinge',
    slug: 'huddinge',
    description:
      'Catering specialiserad för Huddinge och omnejd. Vi tar med oss samma kvalitet och smak som vi erbjuder i Stockholms innerstad.',
    meta: 'Färsk mat direkt till din event i Huddinge – professionell catering med hemlagad kvalitet.',
    highlights: [
      'Bröllop & familjeträffar',
      'Företagsevent',
      'Stora & små sällskap',
    ],
  },
];
