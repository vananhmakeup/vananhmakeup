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
    default: "Anh Do — Asian-Inspired Makeup Artist",
    template: "%s | Anh Do — Asian-Inspired Makeup Artist",
  },
  description:
    "Premium freelance makeup artist specialising in Asian-inspired beauty looks: luminous skin, soft glam bridal styling, and editorial makeup artistry. Cruelty-free and sustainably minded.",
  keywords: [
    "asian makeup artist",
    "asian bridal makeup",
    "k-beauty inspired makeup",
    "j-beauty inspired makeup",
    "editorial asian makeup",
    "soft glam makeup artist",
  ],
  openGraph: {
    title: "Anh Do — Asian-Inspired Makeup Artist",
    description:
      "Asian-inspired beauty looks with luminous skin, refined bridal styling, and editorial polish.",
    locale: "en",
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
