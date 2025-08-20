import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltamp",
  description: "Voltamp - Päikesekatused, päikesepaneelid, päikesepaneeli seadmed ja katuse paigaldus",
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
