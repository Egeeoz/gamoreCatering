import Nav from './components/Nav';
import Footer from './components/Footer';

import type { Metadata } from 'next';
import { Source_Sans_3, Indie_Flower } from 'next/font/google';
import './globals.css';

const sourceSans3 = Source_Sans_3({});

export const metadata: Metadata = {
  title: 'Gamore Catering | Premium Catering Stockholm | Hemlagat & Gourmet',
  description:
    'Gamore Catering Stockholm - Premium catering-tjänster för företag, fester och evenemang. Färsk mat, personlig service och autentisk meny. Boka din catering idag.',
  keywords: 'catering stockholm, catering företag, event catering, festmiddag',
  authors: [{ name: 'Gamore Catering' }],
  openGraph: {
    title: 'Gamore Catering Stockholm',
    description: 'Premium catering för alla tillfällen',
    url: 'https://gamorecatering.se',
    siteName: 'Gamore Catering',
    locale: 'sv_SE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gamorecatering.se',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${sourceSans3.className} antialiased bg-background text-foreground`}
      >
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
