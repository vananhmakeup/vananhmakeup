import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Anh Do — Makeup Artist Helsinki",
    template: "%s | Anh Do — Makeup Artist Helsinki",
  },
  description:
    "Premium freelance makeup artist based in Helsinki, Finland. Specialising in Nordic clean beauty, high-end bridal styling, and editorial fashion makeup. Cruelty-free and sustainably minded.",
  keywords: [
    "makeup artist Helsinki",
    "bridal makeup Helsinki",
    "häämeikki Helsinki",
    "editorial makeup Finland",
    "cruelty free makeup artist Helsinki",
    "Nordic clean beauty",
  ],
  openGraph: {
    title: "Anh Do — Makeup Artist Helsinki",
    description:
      "Premium freelance makeup artist based in Helsinki, Finland. Clean beauty, bridal styling, and editorial fashion makeup.",
    locale: "en_FI",
    alternateLocale: "fi_FI",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
