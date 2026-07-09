"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الخدمات", href: "/services" },
  { name: "بورتفوليو", href: "/portfolio" },
  { name: "مشاريعنا", href: "/projects" },
  { name: "المدونة", href: "/blog" },
  { name: "اتصل بنا", href: "/contact" },
  { name: "من نحن", href: "/aboutus" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/blog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 py-5 px-6 md:px-10 flex items-center justify-between transition-all duration-300 font-cairo ${
        isScrolled 
          ? "bg-sky-950/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(3,7,18,0.7)] border-b border-white/10" 
          : "bg-sky-950 shadow-[0_4px_25px_rgba(3,7,18,0.5)] border-b border-white/5"
      }`} 
      style={{ direction: "rtl" }}
    >
      {/* 1. الطرف الأيمن: اللوجو المعتمد بصيغة الـ WebP السريعة للـ SEO */}
      <div className="flex-shrink-0">
        <Link href="/" title="العودة للصفحة الرئيسية" className="w-12 h-12 relative block hover:opacity-90 transition-opacity">
          <Image 
            src="/logoo.webp" // تم التعديل لاسم ملفك الصحيح بدقة 🛠️
            alt="شعار الشركة الرسمي" 
            fill 
            sizes="48px"
            className="object-contain" 
            priority // معيار SEO هام جداً لتحميل الشعار فوراً بدون تأخير (LCP)
          />
        </Link>
      </div>

      {/* 2. المنتصف: مستطيل القائمة وتم تكبيره وتوسيعه (padding أكبر وgap أوسع) */}
      <div className="hidden lg:flex items-center justify-center flex-1 px-12">
        <div className="flex items-center gap-8 xl:gap-10 bg-white/5 border border-white/10 py-3 px-10 rounded-2xl shadow-md backdrop-blur-sm hover:border-white/20 transition-all">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className="text-white/90 font-bold text-base hover:text-yellow-400 transition-colors duration-200 whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* 3. الطرف الأيسر: بوكس البحث وزر ابدأ الآن */}
      <div className="flex items-center gap-4 flex-shrink-0 justify-end lg:max-w-md w-full lg:w-auto">
        
        {/* صندوق البحث الاحترافي */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex relative items-center w-full max-w-[280px] xl:max-w-[320px]">
          <input
            type="text"
            placeholder="ابحث عن المقالات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-sky-950/90 border border-white/10 text-white placeholder-white/40 text-sm font-medium pr-10 pl-4 py-2.5 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-sky-950 shadow-inner transition-all duration-200"
          />
          <Search className="absolute right-3 text-white/40 w-4 h-4 pointer-events-none" />
        </form>

        {/* زر الواتساب الأصفر */}
        <a 
          href="https://wa.me/201505388060" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2.5 rounded-xl text-sm font-black text-sky-950 bg-yellow-400 hover:bg-yellow-500 hover:scale-105 transition-all shadow-[0_4px_14px_rgba(234,179,8,0.3)] shrink-0"
        >
          ابدأ الآن
        </a>
        
        {/* زر القائمة للموبايل */}
        <button 
          className="lg:hidden text-white p-1 hover:text-yellow-400 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="قائمة التنقل"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* قائمة الموبايل عند الفتح */}
      {isOpen && (
        <div className="absolute top-full right-0 w-full bg-sky-950/95 backdrop-blur-xl text-white p-6 flex flex-col items-center gap-6 lg:hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-t border-white/10">
          <form onSubmit={handleSearchSubmit} className="flex relative items-center w-full max-w-sm md:hidden">
            <input
              type="text"
              placeholder="ابحث عن المقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-sky-900 border border-white/10 text-white placeholder-white/50 text-sm pr-10 pl-4 py-2.5 rounded-xl focus:outline-none focus:border-yellow-400"
            />
            <Search className="absolute right-3 text-white/50 w-4 h-4" />
          </form>

          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className="font-bold text-lg text-white/90 hover:text-yellow-400 transition-colors w-full text-center py-1" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <a 
            href="https://wa.me/201505388060" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-sm text-center py-3 rounded-xl font-black text-sky-950 bg-yellow-400 hover:bg-yellow-500 transition-all shadow-lg"
          >
            ابدأ الآن
          </a>
        </div>
      )}
    </nav>
  );
}