import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltamp – Päikesepaneelid ja energialahendused | Usaldusväärne partner Eestis",
  description:
    "Voltamp - Päikesekatused, päikesepaneelid, päikesepaneeli seadmed ja katuse paigaldus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="et">
      <body className={`${montserrat.variable} antialiased relative`}>
        <Analytics />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
