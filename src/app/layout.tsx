import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

import { NextSeo } from 'next-seo';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltamp",
  description: "Voltamp - Päikesekatused, päikesepaneelid, päikesepaneeli seadmed ja katuse paigaldus",
  keywords: ["päikesekatused", "päikesepaneelid", "energiasüsteemid", "taastuvenergia", "Eesti", "Voltamp"],
  openGraph: {
    title: "Voltamp – Päikesекатусед, päikesепанеелиd ja energialahendused",
    description: "Avasta Voltampi päikesепанеелиde seadmed ja energialahendused. Täielik süsteемide valик koos paigalduse ja tehnilise toega.",
    url: "https://voltamp.ee",
    siteName: "Voltamp",
    images: [
      {
        url: "https://voltamp.ee/images/logos/logo.webp",
        width: 1200,
        height: 630,
        alt: "Voltamp logo"
      }
    ],
    locale: "et_EE",
    type: "website",
  },
  alternates: {
    canonical: "https://voltamp.ee",
  }
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} antialiased relative`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
