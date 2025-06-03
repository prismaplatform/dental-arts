import { Figtree, Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import "../sass/index.scss";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
});

export const metadata = {
  title: {
    absolute: "",
    default: "ProHealth - Medical and Healthcare NextJS Template",
    template: "%s | ProHealth - Medical and Healthcare NextJS Template",
  },
  description: "ProHealth - Medical and Healthcare NextJS Template",
  openGraph: {
    title: "ProHealth - Medical and Healthcare NextJS Template",
    description: "ProHealth - Medical and Healthcare NextJS Template",
    images: ["/openGraphImage.jpeg"],
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${figtree.variable} ${poppins.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header logoSrc="/images/logo.svg" variant="cs_heading_color" />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
