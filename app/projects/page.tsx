"use client";
import React from "react";
import Image from "next/image"; // استيراد مكون الصور المحسن من نكست
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Truck, Landmark, ShoppingBag, Plane, BarChart3, MonitorPlay } from "lucide-react";

// مصفوفة البيانات المحدثة مع دمج أسماء الصور الخاصة بمجلد public بناءً على الرابط
const projectCategories = [
  {
    title: "نماذج مواقع قرآن",
    icon: <BookOpen className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "موقع قرآني", url: "https://quraaany.com/", img: "/quraaanyy.webp", desc: "منصة تعليمية للقرآن الكريم" }
    ]
  },
  {
    title: "خدمات سعودية وعقارية",
    icon: <Landmark className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "بوابة الرياض", url: "https://riyadhgateway.com/", img: "/riyadhgateway.webp", desc: "خدمات عامة بالمملكة" },
      { name: "موقع تعتيم", url: "https://taatim.com/", img: "/taatim.webp", desc: "خدمات متخصصة" },
      { name: "المستعمل", url: "https://almustaemal.com/", img: "/almustaemal.webp", desc: "حراج وإعلانات" },
      { name: "سعودي كار باي", url: "https://saudicarbuy.com/", img: "/saudicarbuy.webp", desc: "بيع وشراء السيارات" },
      { name: "رياض جيكس", url: "https://riyadhgeeks.com/", img: "/riyadhgeeks.webp", desc: "حلول تقنية" },
      { name: "جولد شيلد", url: "https://goldshield-sa.com/", img: "/goldshield.webp", desc: "خدمات أمنية" },
      { name: "البدر العقارية", url: "https://elbadrelakarya.org/", img: "/elbadrelakarya.webp", desc: "تسويق عقاري" },
      { name: "البدر للخدمات العقارية", url: "https://www.elbadrrealestate.com/", img: "/elbadrrealestate.webp", desc: "استثمار عقاري" },
    ]
  },
  {
    title: "مواقع تاكسي ونقل أثاث",
    icon: <Truck className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "تاكسي VIP الكويت", url: "https://taxivipkuwait.com/", img: "/taxivipkuwait.webp", desc: "حجز تاكسي بالكويت" },
      { name: "تاكسي 24", url: "https://taxi24-kw.com/", img: "/taxi24-kw.webp", desc: "خدمات توصيل" },
      { name: "حفل لوري", url: "https://haflorry.com/", img: "/haflorry.webp", desc: "نقل أثاث محترف" },
      { name: "فاست موف الكويت", url: "https://fastmovekw.com/", img: "/fastmovekw.webp", desc: "خدمات النقل السريع" },
      { name: "المملكة للنقل", url: "https://www.elmamlaka.com/", img: "/elmamlaka.webp", desc: "نقل عفش وتخزين" },
    ]
  },
  {
    title: "مواقع سياحية",
    icon: <Plane className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "AHM Egypt Travel", url: "https://ahmegypttravel.com/", img: "/ahmegypttravel.webp", desc: "سياحة داخلية بمصر" },
      { name: "Egy Travel Lux", url: "https://egytravellux.com/", img: "/egytravellux.webp", desc: "سياحة فاخرة" },
      { name: "جنان للسياحة", url: "https://jinantravels.com/", img: "/jinantravels.webp", desc: "رحلات سياحية" },
      { name: "ترافيل فريند", url: "https://travelfriend-ag.com/", img: "/travelfriend (2).webp", desc: "خدمات سياحية" },
      { name: "رحال", url: "https://rahalar.com/", img: "/rahalar.webp", desc: "رحلات وجولات" },
    ]
  },
  {
    title: "متاجر إلكترونية وديكور",
    icon: <ShoppingBag className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "رنين", url: "https://www.raneen.com/ar/", img: "/rahalar.webp", desc: "متجر أدوات منزلية" },
      { name: "لمسات للديكور", url: "https://lmsatt.com/", img: "/lmsatt.webp", desc: "تصميم وتنفيذ ديكور" },
      { name: "كويت مارت", url: "https://blog-ar.kuwaitmart.com/", img: "/kuwaitmart.webp", desc: "متجر إلكتروني" },
      { name: "MK Furniture", url: "https://mkfurniture.org/", img: "/mkfurniture.webp", desc: "متجر أثاث" }, 
      { name: "إيجي جولدن تك", url: "https://egygoldentech.com/", img: "/egygoldentech.webp", desc: "تقنيات ذهبية" },
      { name: "تكييف دوت كوم", url: "https://takyf.com/", img: "/takyf.webp", desc: "أجهزة تبريد" },
      { name: "متجر الدبيسي", url: "https://eldbesy.org/", img: "/eldbesy.webp", desc: "تجارة عامة" },
      { name: "سكاي لايت", url: "https://skyllight.com/", img: "/skyllight.webp", desc: "أنظمة إضاءة" },
    ]
  },
  {
    title: "مشاريع متنوعة وخدمات",
    icon: <MonitorPlay className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "عشاء العربية", url: "https://3shal3arabia.com/", img: "/3shal3arabia.webp", desc: "مجلة ثقافية" },
      { name: "أرب نيوز", url: "https://arbnews.net/", img: "/arbnews.webp", desc: "بوابة إخبارية" },
      { name: "نجوم المملكة", url: "https://njomelmamlkh.com/", img: "/njomelmamlkh.webp", desc: "أخبار السعودية" },
      { name: "الأخبار الكويت", url: "https://alkhabarkw.com/", img: "/alkhabarkw.webp", desc: "بث ومتابعة مباريات" },
      { name: "بيت ويذ ات", url: "https://www.petwithit.com/", img: "/petwithit.webp", desc: "تربية حيوانات أليفة" },
      { name: "دكانك", url: "https://dokansa.com/", img: "/dokansa.webp", desc: "مستلزمات حيوانات" },
      { name: "خدمات تنظيف", url: "https://cleanservicee.com/", img: "/cleanservicee.webp", desc: "حلول تنظيف شاملة" },
      { name: "CAD Consult", url: "https://cadconsult.net/", img: "/cadconsult.webp", desc: "استشارات هندسية" },
    ]
  },
  {
    title: "تسويق إلكتروني",
    icon: <BarChart3 className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "يونيك للخدمات", url: "https://unique-ws.com/", img: "/unique.webp", desc: "حلول تسويقية" },
      { name: "خدمات الشريف", url: "https://alshref-services.com/", img: "/alshref-services.webp", desc: "إدارة منصات" },
      { name: "Designary BH", url: "https://designarybh.com/", img: "/designarybh.webp", desc: "تصميم وهوية" },
    ]
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] py-20 px-4 sm:px-6 font-cairo overflow-x-hidden" style={{ direction: "rtl" }}>
      
      {/* رأس الصفحة */}
      <div className="max-w-7xl mx-auto text-center mb-16 sm:mb-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-sm">
          معرض أعمالنا الفخورين به
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 drop-shadow-lg">مشاريعنا</h1>
        <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          نستعرض معكم مجموعة من المواقع التي قمنا بتطويرها باحترافية، محققين بها نتائج استثنائية لشركائنا حول العالم.
        </p>
      </div>

      {/* أقسام المشاريع */}
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">
        {projectCategories.map((category, catIndex) => (
          <section key={catIndex}>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3.5 mb-8 sm:mb-10 border-b border-white/10 pb-4">
              <div className="p-3 bg-sky-950/60 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg">{category.icon}</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{category.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {category.projects.map((project, pIndex) => {
                const isPriority = catIndex === 0 && pIndex < 2;

                return (
                  <motion.div key={pIndex} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: pIndex * 0.04 }}>
                    {/* جعل الكارت بالكامل رابط (Anchor) قابل للنقر */}
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group relative flex flex-col justify-between bg-sky-950/40 backdrop-blur-2xl border border-white/15 hover:border-amber-200/80 rounded-[1.75rem] p-4 sm:p-5 transition-all duration-400 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-sky-900/50 overflow-hidden h-full block"
                    >
                      {/* حاوية الصورة بتصميم جذاب ومثالي (Aspect Ratio ثابت ونظيف) */}
                      <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-5 bg-sky-900/40 border border-white/10">
                        <Image 
                          src={project.img} 
                          alt={project.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          priority={isPriority}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/60 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                      </div>

                      {/* تفاصيل المشروع */}
                      <div className="flex flex-col flex-grow justify-between px-1">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-amber-200 transition-colors">
                              {project.name}
                            </h3>
                            <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-amber-200 transition-colors flex-shrink-0" />
                          </div>
                          <p className="text-white/70 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed font-normal">
                            {project.desc}
                          </p>
                        </div>
                        
                        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-200/95 group-hover:text-amber-100">
                          <span>تصفح المشروع مباشرة</span>
                          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}