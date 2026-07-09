"use client";
import { motion } from "framer-motion";

const items = [
  { title: "تصميم تطبيقات اندرويد", image: "/Android apps.webp" },
  { title: "عمل خطة باك لينك", image: "/Backlink.webp" },
  { title: "كتابة محتوى للمواقع والسوشيال ميديا", image: "/Content writingg.webp" },
  { title: "متاجر ووكومرس وشوبيفاي", image: "/Online stores.webp" },
  { title: "تصميم فيديوهات AI", image: "/video ai.webp" },
  { title: "تصميم مواقع ووردبريس", image: "/WordPress sites.webp" },
];

export default function ShowcaseSection() {
  return (
    <section className="relative w-full">
      {items.map((item, index) => (
        <div 
          key={index} 
          // تم استخدام sticky top-0 هنا مباشرة من خلال كلاسات Tailwind ليعمل كـ ستارة تظهر فوق السكشن السابق
          className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        >
          {/* الصورة تظهر في الخلفية */}
          <img 
            src={item.image} 
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* طبقة تغميق */}
          <div className="absolute inset-0 bg-sky-950/70" />
          
          {/* العنوان يظهر فوق الصورة */}
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-4xl md:text-7xl font-black text-white text-center px-4"
          >
            {item.title}
          </motion.h2>
        </div>
      ))}
    </section>
  );
}