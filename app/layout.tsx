import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Bartie | Front-End & Mobile Developer",
  description: "Portfolio of Chris Bartie, specializing in React, Next.js, and React Native development for high-quality web and mobile experiences.",
  openGraph: {
    title: "Chris Bartie | Developer Portfolio",
    description: "Portfolio for Chris Bartie - Building intuitive user experiences and pixel-perfect designs.",
    url: "www.chrisbartie.dev",
    siteName: "Chris Bartie Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}