"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { title: "Backlinks", slug: "backlinks", icon: "🔗" },
  { title: "Android", slug: "android", icon: "🤖" },
  { title: "Content Writing", slug: "content-writing", icon: "✍️" },
  { title: "E-commerce", slug: "e-commerce", icon: "🛒" },
  { title: "SEO", slug: "seo", icon: "📈" },
  { title: "WordPress Nextjs", slug: "wordpress-nextjs", icon: "⚡" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B1B3D] py-20 px-6 font-cairo">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            خدماتنا <span className="text-[#FFB703]">الاحترافية</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            نقدم حلولاً رقمية متكاملة مصممة خصيصاً لتعزيز تواجدك الرقمي وزيادة أرباحك في السوق السعودي.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Link key={i} href={`/${s.slug}`}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#FFB703] p-10 rounded-[2.5rem] text-[#0B1B3D] h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,183,3,0.3)]"
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h2 className="text-3xl font-black mb-4">{s.title}</h2>
                <div className="w-12 h-1 bg-[#0B1B3D] rounded-full group-hover:w-20 transition-all duration-300"></div>
                <div className="mt-8 text-[#0B1B3D]/80 font-bold underline underline-offset-8">
                  استعرض التفاصيل
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}