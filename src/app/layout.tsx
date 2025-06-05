import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pusula Deniz Spor Kulübü - Kocaeli'nin En İyi Yüzme Eğitimi Merkezi",
    template: "%s | Pusula Deniz Spor Kulübü"
  },
  description: "Kocaeli'nde 15+ yıllık deneyimle profesyonel yüzme eğitimi. Özel dersler, grup eğitimleri ve yarışma hazırlık programları. Şekerpınar ve Gebze lokasyonlarında hizmet.",
  keywords: [
    "yüzme eğitimi Kocaeli",
    "yüzme kursu Gebze", 
    "özel yüzme dersi",
    "grup yüzme eğitimi",
    "profesyonel yüzme antrenörü",
    "çocuk yüzme kursu",
    "yetişkin yüzme eğitimi",
    "yarışma hazırlık",
    "deniz sporları kulübü",
    "Şekerpınar yüzme",
    "Gebze yüzme havuzu",
    "Pusula Deniz Spor"
  ],
  authors: [{ name: "Pusula Deniz Spor Kulübü" }],
  creator: "Pusula Deniz Spor Kulübü",
  publisher: "Pusula Deniz Spor Kulübü",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pusuladenizsportsclub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pusula Deniz Spor Kulübü - Kocaeli'nin En İyi Yüzme Eğitimi Merkezi",
    description: "15+ yıllık deneyimle profesyonel yüzme eğitimi. Özel dersler, grup eğitimleri ve yarışma hazırlık programları. Şekerpınar ve Gebze'de hizmet.",
    url: 'https://pusuladenizsportsclub.com',
    siteName: 'Pusula Deniz Spor Kulübü',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Pusula Deniz Spor Kulübü',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pusula Deniz Spor Kulübü - Kocaeli'nin En İyi Yüzme Eğitimi Merkezi",
    description: "15+ yıllık deneyimle profesyonel yüzme eğitimi. Özel dersler, grup eğitimleri ve yarışma hazırlık programları.",
    images: ['/opengraph-image'],
    creator: '@pusuladenizsporkulubu_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
