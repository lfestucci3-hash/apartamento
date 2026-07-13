import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ""; // GTM-XXXXXX
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""; // G-XXXXXXXXXX

export const metadata: Metadata = {
  metadataBase: new URL("https://apartamentoribeirao.site"),
  title: "Apartamento à Venda em Ribeirão Preto | Grand Tropical – 58m² com 2 Quartos",
  description:
    "Apartamento 2 quartos, 58m², sacada gourmet, condomínio clube com piscina climatizada. Aceita FGTS e Minha Casa Minha Vida. R$ 25.000 abaixo da avaliação da Caixa. Ribeirão Preto/SP.",
  keywords: [
    "apartamento à venda Ribeirão Preto",
    "Minha Casa Minha Vida Ribeirão Preto",
    "Grand Tropical apartamento",
    "apartamento FGTS Ribeirão Preto",
    "condomínio clube Ribeirão Preto",
    "apartamento Parque dos Lagos",
    "apartamento 2 quartos Ribeirão Preto",
  ],
  authors: [{ name: "Grand Tropical Apartamento" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://apartamentoribeirao.site",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://apartamentoribeirao.site",
    siteName: "Apartamento Grand Tropical",
    title: "Apartamento à Venda | Grand Tropical – 58m², 2 Quartos, Ribeirão Preto",
    description:
      "Seu novo lar no Grand Tropical: 58m², 2 quartos, sacada gourmet, condomínio clube. Abaixo da avaliação da Caixa. FGTS e Minha Casa Minha Vida.",
    images: [
      {
        url: "/fotos/fachada-do-condominio.webp",
        width: 1200,
        height: 630,
        alt: "Condomínio Grand Tropical – Apartamento à venda em Ribeirão Preto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamento à Venda | Grand Tropical – Ribeirão Preto",
    description:
      "58m², 2 quartos, condomínio clube. Abaixo da avaliação da Caixa. Aceita FGTS e MCMV.",
    images: ["/fotos/fachada-do-condominio.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Apartamento à Venda – Condomínio Grand Tropical",
  description:
    "Apartamento com 58m², 2 dormitórios, 2 banheiros, 1 vaga, sacada gourmet. Condomínio com piscina climatizada, academia, quadra e muito mais. Aceita financiamento, FGTS e Minha Casa Minha Vida.",
  url: "https://apartamentoribeirao.site",
  image: "https://apartamentoribeirao.site/fotos/fachada-da-torre.jpg",
  offers: {
    "@type": "Offer",
    price: "265000",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Olivia Maria de Jesus, 1900",
    addressLocality: "Ribeirão Preto",
    addressRegion: "SP",
    postalCode: "14000-000",
    addressCountry: "BR",
  },
  numberOfRooms: 2,
  floorSize: {
    "@type": "QuantitativeValue",
    value: 58,
    unitCode: "MTK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GTM_ID!}
      />
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        {/* GTM */}
        {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
        {/* GA4 */}
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
