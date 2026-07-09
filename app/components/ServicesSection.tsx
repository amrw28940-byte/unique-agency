"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { title: "تحسين محركات البحث", image: "/Search engine optimization.webp", href: "/seo" },
  { title: "تصميم مواقع ووردبريس", image: "/WordPress website design (1).webp", href: "/wordpress-nextjs" },
  { title: "تطوير تطبيقات اندرويد", image: "/Android app design.webp", href: "/android" },
  { title: "تصميم متاجر إلكترونية", image: "/E-commerce store design.webp", href: "/e-commerce" },
  { title: "خطة محتوى", image: "/Content writing plan.webp", href: "/content-writing" },
  { title: "عمل خطة باك لينك", image: "/Backlinks.webp", href: "/backlinks" },
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
                {/* تم زيادة الارتفاع ليكون الكارت أطول وأكثر بروزاً */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-sky-950/40 group-hover:bg-sky-950/20 transition-colors" />
                </div>
                
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