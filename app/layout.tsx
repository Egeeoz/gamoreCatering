import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gamore Catering | Premium Catering Stockholm | Hemlagat & Gourmet",
  description: "Gamore Catering Stockholm - Premium catering-tjänster för företag, fester och evenemang. Färsk mat, personlig service och autentisk meny. Boka din catering idag.",
  keywords: "catering stockholm, catering företag, event catering, festmiddag",
  authors: [{ name: "Gamore Catering" }],
  openGraph: {
    title: "Gamore Catering Stockholm",
    description: "Premium catering för alla tillfällen",
    url: "https://gamorecatering.se",
    siteName: "Gamore Catering",
    locale: "sv_SE",
    type: "website",
  },
  alternates: {
    canonical: "https://gamorecatering.se",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAF9F6]`}
      >
        {children}
      </body>
    </html>
  );
}
