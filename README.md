# Gamore Catering Stockholm

Premium catering-hemsida byggd med Next.js, optimerad för SEO och prestanda.

## Funktioner

- **SEO-optimerad** för "catering stockholm" och relaterade sökord
- **Snabb och responsiv** designad för alla enheter
- **Amber/Cream palett** inspirerad av Marquet och The Food Truck Club
- **Semantic HTML** med korrekt struktur för sökmotorer
- **Bildoptimering** med Next.js Image-komponenter
- **Form-hantering** för bokningsförfrågningar
- **Sitemap & Robots.txt** för bättre SEO

## Filstruktur

```
gamore-catering/
├── app/
│   ├── layout.tsx          # Root layout med metadata
│   ├── page.tsx            # Hemesida med alla sektioner
│   └── globals.css         # Global styling
├── public/
│   └── (SVG-ikoner och bilder här)
├── next.config.ts          # Next.js konfiguration
├── tsconfig.json           # TypeScript-konfiguration
├── postcss.config.mjs       # PostCSS-konfiguration
├── package.json            # Beroenden
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Robot-instruktioner
└── metadata.ts             # Centraliserad metadata
```

## Installation

1. **Klona projektet:**
   ```bash
   git clone https://github.com/ditt-repo/gamore-catering.git
   cd gamore-catering
   ```

2. **Installera beroenden:**
   ```bash
   pnpm install
   # eller
   npm install
   ```

3. **Starta utvecklingsserver:**
   ```bash
   pnpm dev
   # eller
   npm run dev
   ```

4. **Öppna i webbläsare:**
   Gå till [http://localhost:3000](http://localhost:3000)

## SEO-optimeringar

### On-Page SEO
- **H1-tag** en gång per sida (unik titel)
- **Meta-beskrivningar** för varje sida
- **Semantic HTML5** (`<section>`, `<article>`, `<nav>`)
- **Strukturerad data** (Schema.org) för lokala företag
- **Breadcrumbs** för bättre navigering

### Lokalt SEO
- **Lokala nyckelord:** "catering stockholm", "event catering stockholm"
- **Google Business Profile** data i schema
- **Stad-specifika sektioner** för Stockholm
- **Kontaktinformation** synlig på sidan

### Teknisk SEO
- **Open Graph-metadata** för social sharing
- **Sitemap.xml** för bättre indexering
- **Robots.txt** för crawl-kontroll
- **Canonical URLs** för duplikat-hantering
- **Snabb laddningstid** (<3 sekunder)
- **Mobile-optimerad** responsive design

### Prestanda
- **Next.js Image Optimization** för snabbare laddning
- **CSS & JS Minification** automatisk med Next.js
- **Lazy Loading** för off-screen content
- **Cache-Headers** för bättre prestanda

## Anpassning

### Byt kontaktinformation
Uppdatera i `page.tsx`:
```tsx
<a href="tel:+46701234567">070 123 45 67</a>
<a href="mailto:info@gamorecatering.se">info@gamorecatering.se</a>
```

### Uppdatera menyer
Redigera menykorten i "Exempelmenyer"-sektionen. Lägg till:
- Ny rätt/meny
- Prisinformation
- Beskrivning

### Lägg till bilder
1. Lägg bilder i `public/` mappen
2. Ersätt placeholder-diverna med `<Image />` komponenter:
```tsx
<Image
  src="/catering-image.jpg"
  alt="Beskrivande text för SEO"
  width={600}
  height={400}
  priority
/>
```

### Anpassa färger
Ändra i `globals.css`:
```css
:root {
  --background: #FAF9F6; /* Cream */
  --foreground: #78350f; /* Amber-900 */
  --accent: #b45309;     /* Amber-600 */
}
```

## Deployment

### Vercel (rekommenderad)
1. Pusha din kod till GitHub
2. Gå till [vercel.com](https://vercel.com)
3. Importera ditt repository
4. Vercel bygger och deployas automatiskt

### Andra hosting
- **Netlify:** Kopiera `package.json` och kör `npm run build`
- **Self-hosted:** Kör `npm run build` och `npm start`

## Optimeringstips

### För bättre SEO
1. **Lägg till Google Analytics**
   - Lägg till i `layout.tsx`
   
2. **Skapa Content**
   - Blogginlägg om catering-tips
   - FAQ-sektionen (redan finns)
   
3. **Lokal länkning**
   - Länka till andra Stockholm-företag
   - Se till att ditt Google Business Profile är uppdaterat

4. **Användar-recensioner**
   - Uppmuntra gäster att lämna recensioner
   - Lägg till i structured data

### För snabbare laddning
1. **Optimera bilder** (WebP-format)
2. **Använd CDN** för statiska filer
3. **Enable gzip compression** på servern
4. **Minifiera CSS/JS** (redan gjort med Next.js)

## Formulär-hantering

Formuläret skickar data till din backend. För att aktivera:

1. Skapa en API-route i `app/api/contact/route.ts`
2. Lägg till din email-service (t.ex., SendGrid, Mailgun)
3. Uppdatera form-handlingen i `page.tsx`

Exempel API-route:
```tsx
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  // Skicka email här
  
  return NextResponse.json({ success: true });
}
```

## Prestanda-tips

Kontrollera prestanda:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://www.webpagetest.org)

Målvärden:
- **Largest Contentful Paint:** <2.5s
- **Cumulative Layout Shift:** <0.1
- **First Input Delay:** <100ms

## Support och uppdateringar

- Uppdatera `next` och `react` regelbundet
- Testa alla ändringar innan deployment
- Kontrollera SEO-ändringar i Google Search Console

## Licens

Privat projekt för Gamore Catering Stockholm.
