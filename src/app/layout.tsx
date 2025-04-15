import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProNetwork - Professional Networking Platform",
  description: "Connect with professionals, find jobs, and grow your network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen bg-[#0B0F1C] overflow-hidden`}
      >
        <Navbar />
        <main className="flex-1 w-full overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </body>
    </html>
  );
}
