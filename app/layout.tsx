import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "The Ark Design Studio | Architectural Excellence",
    template: "%s | The Ark Design Studio",
  },
  description: "Merging brutalist integrity with modern sustainability. The Ark Design Studio creates spaces that stand the test of time. Specializing in high-end residential, commercial, and industrial architecture.",
  keywords: ["Architecture", "Design", "Construction", "Interior Design", "Sustainable Architecture", "Brutalist Design", "Modern Homes", "Commercial Buildings"],
  authors: [{ name: "The Ark Design Studio" }],
  creator: "The Ark Design Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theark.design",
    siteName: "The Ark Design Studio",
    title: "The Ark Design Studio | Architectural Excellence",
    description: "Merging brutalist integrity with modern sustainability. We create spaces that stand the test of time.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", // Fallback hero image
        width: 1200,
        height: 630,
        alt: "The Ark Design Studio Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ark Design Studio",
    description: "Merging brutalist integrity with modern sustainability.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"],
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
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}
      >
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
