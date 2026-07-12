"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// 1. أسمـاء الصور النظيفة بدون مسافات أو أقواس لتجنب مشاكل السيرفر
const services = [
  { title: "تحسين محركات البحث", image: "/search-engine-optimization.webp", href: "/seo" },
  { title: "تصميم مواقع ووردبريس", image: "/wordpress-website-design.webp", href: "/wordpress-nextjs" },
  { title: "تطوير تطبيقات اندرويد", image: "/android-app-design.webp", href: "/android" },
  { title: "تصميم متاجر إلكترونية", image: "/e-commerce-store-design.webp", href: "/e-commerce" },
  { title: "خطة محتوى", image: "/content-writing-plan.webp", href: "/content-writing" },
  { title: "عمل خطة باك لينك", image: "/backlinks.webp", href: "/backlinks" },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-sky-950" id="services">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
          خدماتنا الاحترافية
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={service.href} 
                className="group block overflow-hidden rounded-2xl shadow-xl border border-white/10 hover:border-yellow-400 transition-all duration-300"
              >
                {/* الحاوية الأساسية للكارت */}
                <div className="relative h-80 overflow-hidden">
                  
                  {/* تم إضافة كلاس relative هنا لحل خطأ الـ invalid position للـ fill إجبارياً */}
                  <div className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-115">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={index < 3} // تحميل أول 3 صور بشكل فوري لزيادة سرعة الـ LCP
                    />
                  </div>
                  
                  {/* طبقة الظل فوق الصورة */}
                  <div className="absolute inset-0 bg-sky-950/40 group-hover:bg-sky-950/20 transition-colors" />
                </div>
                
                {/* عنوان الخدمة تحت الصورة */}
                <div className="p-6 text-center bg-sky-900/50">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}