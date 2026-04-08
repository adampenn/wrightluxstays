import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wright Lux Stays | Luxury Vacation Rentals",
  description:
    "Luxury vacation rentals in Sonoma CA, Kansas City, Austin TX, and Carmel CA. Unforgettable stays curated by the Wright family.",
  openGraph: {
    title: "Wright Lux Stays | Luxury Vacation Rentals",
    description:
      "Luxury vacation rentals in Sonoma CA, Kansas City, Austin TX, and Carmel CA.",
    url: "https://www.wrightluxstays.com",
    siteName: "Wright Lux Stays",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1a1a1a]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
