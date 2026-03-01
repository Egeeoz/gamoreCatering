// metadata.ts - Global SEO configuration
export const siteName = "Gamore Catering Stockholm";
export const siteDescription =
  "Premium catering-tjänster i Stockholm. Hemlagad mat med gourmet-känsla för företagsevenemang, bröllop och privata fester.";
export const siteUrl = "https://gamorecatering.se";
export const socialImage = `${siteUrl}/og-image.jpg`;

export const cateringKeywords = [
  "catering stockholm",
  "catering företag stockholm",
  "event catering",
  "bröllopscatering stockholm",
  "festcatering",
  "restaurang catering",
  "hemlagad catering",
  "gourmet catering stockholm",
  "buffé stockholm",
  "affärsmiddag stockholm",
];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  telephone: "+46701234567",
  email: "info@gamorecatering.se",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stockholm",
    addressLocality: "Stockholm",
    postalCode: "SE-100",
    addressCountry: "SE",
  },
  areaServed: {
    "@type": "City",
    name: "Stockholm",
  },
  priceRange: "SEK 345-395",
  servesCuisine: ["Swedish", "Mediterranean", "Vegetarian"],
  image: socialImage,
  sameAs: [],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hem",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Meny",
      item: `${siteUrl}#meny`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Om Oss",
      item: `${siteUrl}#om`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Kontakt",
      item: `${siteUrl}#kontakt`,
    },
  ],
};
