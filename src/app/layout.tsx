import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Team NAVAMESH | Pushing the Boundaries of Innovation",
  description:
    "Official portfolio and achievements portal of Team NAVAMESH. Smart India Hackathon (SIH) 2025 Grand Finalist, multi-ideathon champion in robotics, AI, CleanTech, and advanced engineering.",
  keywords: [
    "Team NAVAMESH",
    "Smart India Hackathon",
    "SIH 2025",
    "Robotics",
    "AI",
    "Digital Twin",
    "Radar Detection",
    "Microplastics",
  ],
  authors: [{ name: "Team NAVAMESH" }],
  openGraph: {
    title: "Team NAVAMESH | Innovation, Hackathons & Advanced Engineering",
    description:
      "A track record of relentless innovation, high-pressure problem solving, and podium finishes across India's premier technical competitions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable} dark`}>
      <body className="min-h-screen bg-[#050505] text-white flex flex-col antialiased selection:bg-[#39ff14] selection:text-black">
        {/* Ambient background glow orbs */}
        <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[35vw] h-[35vw] bg-[#39ff14]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="fixed bottom-0 right-10 w-[30vw] h-[30vw] bg-[#39ff14]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
