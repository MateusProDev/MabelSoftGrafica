import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import WhatsAppFloat from "@/components/public/WhatsAppFloat";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";
import { BUSINESS } from "@/lib/business";

const baseUrl = getSiteUrl();
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mabel Gráfica — Impressões e Serviços Digitais em Fortaleza",
    template: "%s | Mabel Gráfica",
  },
  description:
    "Gráfica rápida em Fortaleza: Xerox, impressões, plastificação, encadernação, cartão de visita, panfletos, adesivos, apostilhas, agendas e personalizados. Atendimento no Sabiaguaba e serviços online para todo o Brasil.",
  keywords: [
    "gráfica rápida fortaleza",
    "xerox fortaleza",
    "impressão fortaleza",
    "cartão de visita fortaleza",
    "panfletos fortaleza",
    "adesivos personalizados",
    "plastificação fortaleza",
    "encadernação fortaleza",
    "apostilhas e livretos",
    "caixa de decoração de festa",
    "gráfica sabiaguaba",
    "impressão online",
  ],
  authors: [{ name: BUSINESS.shortName }],
  creator: BUSINESS.shortName,
  publisher: BUSINESS.shortName,
  alternates: { canonical: baseUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "Mabel Gráfica — Impressões e Serviços Digitais em Fortaleza",
    description:
      "Xerox, impressões, plastificação, encadernação, cartões, panfletos, adesivos e personalizados. Agilidade e qualidade no Sabiaguaba, Fortaleza.",
    siteName: BUSINESS.shortName,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mabel Gráfica — Impressões e Serviços Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mabel Gráfica — Impressões e Serviços Digitais",
    description: "Gráfica rápida em Fortaleza. Do Xerox ao personalizado.",
    images: [`${baseUrl}/og-image.png`],
  },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0B2A5B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased">
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-tag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}

        <LocalBusinessJsonLd
          name={BUSINESS.name}
          url={baseUrl}
          logo={`${baseUrl}/logo.png`}
          description="Gráfica rápida em Fortaleza especializada em impressões, Xerox, plastificação, encadernação e materiais personalizados."
          address={{
            street: BUSINESS.street,
            number: BUSINESS.number,
            neighborhood: BUSINESS.neighborhood,
            city: BUSINESS.city,
            state: BUSINESS.state,
            zip: BUSINESS.zip,
          }}
          phone={BUSINESS.phoneIntl}
          email={BUSINESS.email}
          openingHours={`Mo-Sa ${BUSINESS.opens} - ${BUSINESS.closes}`}
          latitude={BUSINESS.latitude}
          longitude={BUSINESS.longitude}
        />
        <WebSiteJsonLd
          name={BUSINESS.shortName}
          url={baseUrl}
          description="Impressões e serviços digitais em Fortaleza. Xerox, cartões, panfletos, adesivos e personalizados."
        />

        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
