import type React from "react";
import type { Metadata } from "next";
import { Inter, Farro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Inter and Farro fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const farro = Farro({
  weight: ["400", "700"], // Corrected: Added available weights for Farro font
  subsets: ["latin"],
  variable: "--font-farro",
});

export const metadata: Metadata = {
  title: "Tsalla Aerospace - Unmanned Systems & AI Technology",
  description:
    "We Don't Build Drones. We Build Unfair Advantages. Leading aerospace technology company specializing in unmanned systems and AI.",
  keywords: "aerospace, drones, unmanned systems, AI, defense technology",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${farro.variable}`}>
      {/* The body class `font-farro` will apply the Farro font as the default.
        Ensure this aligns with your `globals.css` if it also sets a font-family for `body`.
        If 'Inter' is intended as the primary body font, you might adjust this to `font-inter`
        and apply `font-farro` to specific elements via a class or CSS variable.
      */}
      <body className="bg-black text-white font-farro">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
