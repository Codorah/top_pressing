import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SmoothScroll from "@/components/layout/SmoothScroll";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B3A6F",
};

export const metadata: Metadata = {
  title: "Top Pressing — Blanchisserie Pro Haute Performance | Lomé, Togo",
  description:
    "Expert en blanchisserie professionnelle au Togo. Création de pressing, formation du personnel, vente de machines, blanchisserie hôtelière. Basé à Lomé.",
  keywords: ["pressing", "blanchisserie", "Lomé", "Togo", "formation", "machines laver", "hôtel"],
  openGraph: {
    title: "Top Pressing — Blanchisserie Pro Haute Performance",
    description: "Votre expert en blanchisserie haute performance et partenaire des porteurs de projet pressing au Togo.",
    locale: "fr_TG",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Top Pressing",
              description: "Expert en blanchisserie professionnelle haute performance au Togo.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lomé",
                addressCountry: "TG",
              },
              url: "https://top-pressing-c.vercel.app",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </SmoothScroll>
      </body>
    </html>
  );
}
