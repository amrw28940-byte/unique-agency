import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar"; 
import LayoutWrapper from "./components/LayoutWrapper"; 
import Snow from "./components/Snow"; 
import FooterSection from "./components/Footer";

export const metadata: Metadata = {
  title: "Unique WS",
  description: "وكالة رقمية متكاملة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="h-full">
      <body className="h-full min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] text-white flex flex-col justify-between">
        <div>
          <Snow /> 
          <Navbar />
          <LayoutWrapper>
            <main className="min-h-screen pt-20">
              {children}
            </main>
          </LayoutWrapper>
        </div>
        <FooterSection />
      </body>
    </html>
  );
}