import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltamp – Päikesepaneelid ja energialahendused | Usaldusväärne partner Eestis",
  description: "Voltamp - Päikesekatused, päikesepaneelid, päikesepaneeli seadmed ja katuse paigaldus",
  keywords: ["päikesekatused", "päikesepaneelid", "energiasüsteemid", "taastuvenergia", "Eesti", "Voltamp"],
  openGraph: {
    title: "Voltamp – Päikesekatused, päikesepaneelid ja energialahendused",
    description: "Avasta Voltampi päikesepaneelide seadmed ja energialahendused. Täielik süsteеmide valik koos paigalduse ja tehnilise toega.",
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
