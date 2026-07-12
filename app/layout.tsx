import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar"; 
import LayoutWrapper from "./components/LayoutWrapper"; 
import Snow from "./components/Snow"; 
import FooterSection from "./components/Footer";

export const metadata: Metadata = {
  title: "Unique WS - وكالة رقمية متكاملة",
  description: "وكالة رقمية متكاملة لحلول الويب وتصميم المواقع في السعودية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="h-full" data-scroll-behavior="smooth">
      <head>
        {/* حل مشكلة تسلسل الطلبات عبر الاتصال المسبق (Preconnect) والتحميل السريع */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.uniquee-ws.com" />
      </head>
      <body className="h-full min-h-screen bg-[#0B1B3D] text-white flex flex-col justify-between selection:bg-yellow-400 selection:text-[#0B1B3D]">
        <div className="flex flex-col min-h-screen relative overflow-x-hidden">
          <Snow /> 
          <Navbar />
          <LayoutWrapper>
            <main className="flex-grow pt-20">
              {children}
            </main>
          </LayoutWrapper>
        </div>
        <FooterSection />
      </body>
    </html>
  );
}