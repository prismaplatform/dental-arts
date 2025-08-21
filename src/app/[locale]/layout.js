import { sora, urbanist } from "@/lib/fonts";
import Footer from "@/components/utils/Footer";
import "../globals.css";
import Header from "@/components/utils/Header";
import ScrollToTop from "@/components/utils/ScrollToTop";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata = {
  title: {
    default: "DentalArts Sopron - Modern Fogászati Rendelő",
    template: "%s | DentalArts Sopron",
  },
  description:
    "DentalArts Sopron - Professzionális fogászati szolgáltatások a szívében Sopronnak. Fogtömés, fogkő eltávolítás, fogfehérítés, implantátum, esztétikai fogászat. Tapasztalt fogorvosok, modern technológia.",
  keywords: [
    "fogászat Sopron",
    "fogorvos Sopron",
    "DentalArts",
    "fogászati rendelő Sopron",
    "fogtömés Sopron",
    "fogkő eltávolítás",
    "fogfehérítés Sopron",
    "fogimplantátum",
    "esztétikai fogászat",
    "gyökérkezelés Sopron",
    "fogpótlás",
    "szájsebészet",
    "fogszabályozás",
    "Sopron fogászat",
    "magánfogorvos Sopron",
  ],
  authors: [{ name: "DentalArts Sopron" }],
  creator: "DentalArts Sopron",
  publisher: "DentalArts Sopron",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dentalarts-sopron.hu"),
  alternates: {
    canonical: "/",
    languages: {
      "hu-HU": "/",
      "de-DE": "/de",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "DentalArts Sopron - Modern Fogászati Rendelő",
    description:
      "Professzionális fogászati szolgáltatások Sopronban. Tapasztalt fogorvosok, modern technológia, személyre szabott kezelések.",
    url: "https://dentalarts-sopron.hu",
    siteName: "DentalArts Sopron",
    images: [
      {
        url: "/og-image-dentalarts.jpg",
        width: 1200,
        height: 630,
        alt: "DentalArts Sopron Fogászati Rendelő",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalArts Sopron - Modern Fogászati Rendelő",
    description:
      "Professzionális fogászati szolgáltatások Sopronban. Tapasztalt fogorvosok, modern technológia.",
    images: ["/twitter-image-dentalarts.jpg"],
    creator: "@dentalarts_sopron",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-title": "Dental Arts",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#ffffff",
    "geo.region": "HU-GS",
    "geo.placename": "Sopron",
    "geo.position": "47.6833;16.5833",
    ICBM: "47.6833, 16.5833",
    "DC.title": "DentalArts Sopron - Modern Fogászati Rendelő",
    "DC.creator": "DentalArts Sopron",
    "DC.subject": "Fogászat, Fogorvos, Sopron, Dentálhigiénia",
    "DC.description": "Professzionális fogászati szolgáltatások Sopronban",
    "DC.publisher": "DentalArts Sopron",
    "DC.contributor": "DentalArts Sopron",
    "DC.date": new Date().toISOString(),
    "DC.type": "website",
    "DC.format": "text/html",
    "DC.identifier": "https://dentalarts-sopron.hu",
    "DC.language": "hu",
    "DC.coverage": "Sopron, Magyarország",
    "DC.rights": "Copyright DentalArts Sopron",
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "DentalArts Sopron",
    image: "https://dentalarts-sopron.hu/logo-dentalarts.jpg",
    description:
      "Professzionális fogászati szolgáltatások Sopronban. Tapasztalt fogorvosok, modern technológia, személyre szabott kezelések.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Példa utca 123",
      addressLocality: "Sopron",
      postalCode: "9400",
      addressCountry: "HU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.6833,
      longitude: 16.5833,
    },
    url: "https://dentalarts-sopron.hu",
    telephone: "+36-99-123-4567",
    email: "info@dentalarts-sopron.hu",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "SZÉP Kártya"],
    currenciesAccepted: "HUF",
    areaServed: {
      "@type": "City",
      name: "Sopron",
    },
    serviceType: [
      "Általános fogászat",
      "Esztétikai fogászat",
      "Implantológia",
      "Szájsebészet",
      "Gyermekfogászat",
      "Parodontológia",
    ],
    medicalSpecialty: "Dentistry",
    availableLanguage: ["Hungarian", "German", "English"],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${urbanist.variable} ${sora.variable} antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <Header />
          
          {children}
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
