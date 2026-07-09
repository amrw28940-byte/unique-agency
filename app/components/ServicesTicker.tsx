"use client";
import { motion } from "framer-motion"; // تم تصحيح الخطأ الإملائي هنا

const services = [
  "تصميم مواقع الكترونية ووردبريس",
  "تصميم مواقع الكترونية Next.js",
  "تصميم متاجر شوبيفاي",
  "تصميم متاجر ايزي اوردر",
  "تحسين محركات البحث",
  "باقات صيانة المواقع الدورية",
  "تحسين سرعة وأداء المواقع",
  "إعداد تتبع وتحليل البيانات",
  "ربط أنظمة الدفع والشحن",
  "نقل المواقع بين المنصات",
  "تحسين معدل تحويل العملاء",
  "فحص وتدقيق الأمان التقني",
  "تطوير صفحات الهبوط التسويقية"
];

export default function ServicesTicker() {
  return (
    <div className="relative w-full z-30 bg-white/5 backdrop-blur-md py-4 border-t border-b border-white/10 overflow-hidden">
      <motion.div 
        className="flex gap-12"
        animate={{ x: ["0%", "100%"] }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center gap-4 shrink-0">
            <span className="text-white font-black text-lg">✦</span>
            <span className="text-white font-bold text-lg whitespace-nowrap">
              {service}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}