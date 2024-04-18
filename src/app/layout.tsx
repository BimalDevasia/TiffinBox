import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "800" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Tiffin Box",
  description: "A food booking app for GEC canteen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${bebas.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
