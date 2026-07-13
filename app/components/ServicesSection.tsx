"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesData = [
  {
    href: "/seo",
    title: "تحسين محركات البحث",
    description: "Optimize rankings & visibility.",
    // فئات التلوين والإضاءة الخاصة بـ Tailwind عند الـ Hover
    colorClass: "text-[#2ae1a6] hover:shadow-[#2ae1a6]/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
        <path d="M22 7l-9 9-4-4L2 19" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/wordpress-nextjs",
    title: "تصميم مواقع ووردبريس",
    description: "Scalable, custom solutions.",
    colorClass: "text-[#0f8bfd] hover:shadow-[#0f8bfd]/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16">
        <rect x="2" y="2" width="20" height="20" rx="1" />
        <path d="M2 12h20M12 2v20M7 2v20M17 2v20M2 7h20M2 17h20" />
      </svg>
    ),
  },
  {
    href: "/android",
    title: "تطوير تطبيقات اندرويد",
    description: "User-centric mobile experiences.",
    colorClass: "text-[#8e44ad] hover:shadow-[#8e44ad]/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    href: "/e-commerce",
    title: "تصميم متاجر إلكترونية",
    description: "Drive conversions & sales.",
    colorClass: "text-[#f39c12] hover:shadow-[#f39c12]/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.99-1.72L23 6H6" />
      </svg>
    ),
  },
  {
    href: "/content-writing",
    title: "خطة محتوى",
    description: "Compelling narratives that engage.",
    colorClass: "text-[#1abc9c] hover:shadow-[#1abc9c]/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
        <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/backlinks",
    title: "عمل خطة باك لينك",
    description: "Build authority and trust.",
    colorClass: "text-[#3498db] hover:shadow-[#3498db]/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section 
      className="py-24 px-6 bg-[#011627] relative overflow-hidden" 
      id="services" 
      style={{
        backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(32, 107, 163, 0.03) 25%, rgba(32, 107, 163, 0.03) 26%, transparent 27%, transparent 74%, rgba(32, 107, 163, 0.03) 75%, rgba(32, 107, 163, 0.03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(32, 107, 163, 0.03) 25%, rgba(32, 107, 163, 0.03) 26%, transparent 27%, transparent 74%, rgba(32, 107, 163, 0.03) 75%, rgba(32, 107, 163, 0.03) 76%, transparent 77%, transparent)`,
        backgroundSize: "50px 50px",
      }}
    >
      <div className="container mx-auto max-w-6xl text-center" dir="rtl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          خدماتنا الاحترافية
        </h2>
        <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
          حلول تقنية متطورة ومصممة بدقة وبدون أي عبء على سرعة الموقع.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link 
                href={service.href}
                className={`group block bg-[#011d33] border border-white/5 rounded-2xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] ${service.colorClass}`}
              >
                {/* حاوية الأيقونة مع تأثير الفلتر المضيء الافتراضي */}
                <div className="mb-6 flex justify-center items-center drop-shadow-[0_0_12px_currentColor]">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-inherit transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}