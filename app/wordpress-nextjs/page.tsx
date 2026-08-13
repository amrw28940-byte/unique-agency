"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ArrowLeft, Layout, Rocket, MousePointerClick } from "lucide-react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

// تعريف الـ variants خارج المكون لمنع الأخطاء
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// مكون الأسئلة الشائعة التفاعلي
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-right">
        <span className="text-lg md:text-xl font-bold text-white">{question}</span>
        <span className="text-amber-200 text-2xl font-bold transition-transform duration-300">{isOpen ? "−" : "+"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="text-white/70 pt-4 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function WordPressNextService() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] py-24 px-6 font-cairo" style={{ direction: "rtl" }}>
      
      {/* أيقونات التواصل العائمة */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <a href="https://wa.me/201505388060" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform">
          <FaWhatsapp size={28} />
        </a>
        <a href="https://www.facebook.com/uniquews" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform">
          <FaFacebook size={28} />
        </a>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* سكشن الفيديو */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-5xl mx-auto mb-16 rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl">
          <video className="w-full h-[500px] object-cover" autoPlay muted loop playsInline><source src="/vidio%20page.mp4" type="video/mp4" /></video>
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-sky-950/80 to-transparent flex flex-col items-center justify-center text-center p-6">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h2 className="text-white text-2xl md:text-4xl font-black mb-6">جاهز لامتلاك موقع <span className="text-amber-200">فائق الأداء؟</span></h2>
                <a href="/contact" className="inline-flex items-center gap-3 bg-amber-200 text-sky-950 font-black py-5 px-10 rounded-full hover:bg-white transition-all shadow-2xl">ابدأ مشروعك الآن <MousePointerClick className="w-6 h-6 animate-bounce" /></a>
             </motion.div>
          </div>
        </motion.div>

        {/* سكشن المعلومات */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-sky-950/40 backdrop-blur-2xl border border-white/20 p-10 md:p-16 rounded-[3rem] shadow-2xl mb-24 text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">تصميم مواقع <span className="text-amber-200">WordPress & Next.js</span></h1>
          <p className="text-white/80 text-lg md:text-xl mb-10">نحول ووردبريس لمحرك قوي، ونستخدم Next.js لسرعة خرافية وأمان مطلق.</p>
        </motion.section>

        {/* سكشن خلف الكواليس */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center mb-24 bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">دقة في التنفيذ.. <br/><span className="text-amber-200">وسرعة في الإنجاز.</span></h2>
            <p className="text-white/70 text-lg leading-relaxed">نحن لا نبيعك مجرد موقع، نحن نبني لك تجربة رقمية فائقة. في ثوانٍ معدودة، نلخص لك شغفنا في البرمجة وتصميم واجهات تتحدث لغة التكنولوجيا الحديثة.</p>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline><source src="/vidioo.mp4" type="video/mp4" /></video>
          </div>
        </motion.section>

        {/* سكشن خطوات العمل */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">كيف نحول فكرتك إلى <span className="text-amber-200">واقع رقمي؟</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[ { icon: <Layout />, title: "تحليل الاحتياجات", desc: "ندرس أهدافك ونحدد المتطلبات التقنية بدقة." }, { icon: <Code2 />, title: "التصميم والتطوير", desc: "نصمم واجهة عصرية ونبدأ البرمجة بأحدث التقنيات." }, { icon: <Rocket />, title: "الإطلاق والدعم", desc: "نختبر الأداء وننطلق بموقعك مع دعم فني متواصل." } ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-amber-200/10 transition-all text-center flex flex-col items-center group">
                <div className="text-amber-200 mb-4 bg-white/10 p-4 rounded-full group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* سكشن المقارنة */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16">لماذا تختار <span className="text-amber-200">Unique WS</span>؟</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-sky-500/30 backdrop-blur-md border-2 border-amber-300/50 p-8 rounded-[2rem] shadow-2xl">
              <h3 className="text-2xl font-bold text-amber-200 mb-8">مع Unique WS</h3>
              <ul className="space-y-6 text-white font-bold"><li>🚀 سرعة خارقة بفضل Next.js</li><li>🛡️ أمان محصن بمعمارية Headless</li><li>📈 تصدر الـ SEO وتوافق تام مع جوجل</li></ul>
            </div>
            <div className="bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-[2rem]">
              <h3 className="text-2xl font-bold text-white/50 mb-8">المواقع التقليدية</h3>
              <ul className="space-y-6 text-white/60"><li>❌ بطء في التحميل</li><li>❌ ثغرات أمنية متكررة</li><li>❌ أداء ضعيف في جوجل</li></ul>
            </div>
          </div>
        </motion.section>

        {/* الزر النهائي */}
        <div className="text-center pb-12">
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-sky-950 font-black py-4 px-8 rounded-full hover:bg-amber-200 transition-all shadow-xl">تواصل معنا اليوم <ArrowLeft className="w-5 h-5" /></a>
        </div>
      </div>

      {/* سكشن الأسئلة الشائعة */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">أسئلة قد تدور <span className="text-amber-200">في ذهنك؟</span></h2>
        <div className="bg-sky-900/20 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10">
          <FAQItem question="هل سأتمكن من تعديل محتوى موقعي؟" answer="نعم، ستتمتع بواجهة ووردبريس المألوفة لإضافة وتعديل المحتوى بكل بساطة." />
          <FAQItem question="لماذا الربط بين WordPress و Next.js؟" answer="لجمع سهولة إدارة ووردبريس مع السرعة الخارقة والأمان العالي لـ Next.js." />
          <FAQItem question="ما هي المدة المتوقعة للتنفيذ؟" answer="نلتزم بجدول زمني دقيق يبدأ من تحليل الاحتياجات وصولاً للإطلاق مع تقارير دورية." />
          <FAQItem question="هل تقدمون خدمات الدعم الفني؟" answer="نعم، نقدم باقات دعم فني متواصل لضمان أداء الموقع وحمايته دائماً." />
          <FAQItem question="كيف أتابع سير عمل مشروعي؟" answer="نعتمد الشفافية التامة؛ ستكون على اطلاع دائم بكل مرحلة عبر التواصل المباشر." />
        </div>
      </motion.section>

      {/* سكشن تواصل معنا وخريطة جوجل */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/20 shadow-2xl">
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-white">تواصل معنا</h2>
            <div className="space-y-4 text-white/90">
              <p className="flex items-center gap-3 text-lg">
                📍 <span className="font-bold">العنوان:</span>١٣ش الشهيد محمود جمعه متفرع من جمال عبد الناصر العصافره بحري اعلى كافيه الفيروز الدور الرابع، الإسكندرية، مصر
              </p>
              <p className="flex items-center gap-3 text-lg">
                📞 <span className="font-bold">الهاتف:</span> 01505388060
              </p>
            </div>
            <a href="tel:01505388060" className="bg-amber-200 text-sky-950 font-black py-4 px-8 rounded-full w-fit hover:bg-white transition-all shadow-lg">
              اتصل الآن
            </a>
          </div>

          <div className="rounded-[2rem] overflow-hidden border-4 border-white/10 h-[300px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.8718228308485!2d30.0135!3d31.2725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE2JzIxLjAiTiAzMMKwMDAnNDguNiJF!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </motion.section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}
