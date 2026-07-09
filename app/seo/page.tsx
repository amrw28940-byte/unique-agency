"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  BarChart3, 
  Globe, 
  Zap, 
  ShieldCheck, 
  ArrowLeft, 
  MousePointerClick, 
  MessageCircle, 
  TrendingUp,
  LineChart,
  Target
} from "lucide-react";
// استخدام المكتبة المتخصصة للأيقونات لمنع أخطاء التصدير
import { FaFacebook, FaWhatsapp } from "react-icons/fa"; 
import Image from "next/image";

// مكون الأسئلة الشائعة التفاعلي
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-right outline-none">
        <span className="text-lg md:text-xl font-bold text-white">{question}</span>
        <span className="text-amber-200 text-2xl font-bold transition-transform duration-300">{isOpen ? "−" : "+"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="text-white/70 pt-4 leading-relaxed font-medium">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function SEOServicePage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] font-cairo" style={{ direction: "rtl" }}>
      
      {/* أيقونات التواصل العائمة */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <a href="https://wa.me/201505388060" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform">
          <FaWhatsapp size={28} />
        </a>
        <a href="https://www.facebook.com/uniquews" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform">
          <FaFacebook size={28} />
        </a>
      </div>

      {/* سكشن الهيرو - صورة SEO بعرض الصفحة بالكامل */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden border-b border-white/20">
        <Image 
          src="/seo.webp" 
          alt="SEO Service Header" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-sky-950/90 via-transparent to-transparent flex flex-col items-center justify-center text-center p-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
              تصدّر نتائج <span className="text-amber-200">البحث الأولى</span>
            </h1>
            <p className="text-white/90 text-lg md:text-2xl font-bold max-w-3xl mx-auto mb-8 drop-shadow-lg">
              نحن لا نضعك في جوجل فحسب، بل نجعل موقعك الخيار الأول لعملائك من خلال استراتيجيات SEO ذكية ومستدامة.
            </p>
            <a href="tel:01505388060" className="inline-flex items-center gap-3 bg-amber-200 text-sky-950 font-black py-5 px-12 rounded-full hover:bg-white transition-all shadow-2xl hover:scale-105 active:scale-95">
              ابدأ في السيطرة على مجالك <MousePointerClick className="w-6 h-6 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-24 px-6">
        
        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-sky-950/40 backdrop-blur-2xl border border-white/20 p-10 md:p-16 rounded-[3rem] shadow-2xl mb-24 text-center md:text-right">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            لماذا موقعك يحتاج إلى <span className="text-amber-200">SEO احترافي؟</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
            أفضل مكان لإخفاء جثة هو الصفحة الثانية في جوجل! نحن نضمن لك الظهور في الصفحة الأولى، مما يعني زيادة هائلة في الزيارات العضوية، وبناء سلطة لموقعك، وتحقيق مبيعات دون الحاجة لإعلانات ممولة مستمرة.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-white bg-white/5 p-4 rounded-xl border border-white/10 font-bold justify-center">
              <TrendingUp className="text-amber-200" /> <span>نمو مستدام</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/5 p-4 rounded-xl border border-white/10 font-bold justify-center">
              <Target className="text-amber-200" /> <span>جمهور مستهدف</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/5 p-4 rounded-xl border border-white/10 font-bold justify-center">
              <LineChart className="text-amber-200" /> <span>عائد استثمار عالي</span>
            </div>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16">خدمة السيو من <span className="text-amber-200">Unique WS</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-sky-500/30 backdrop-blur-md border-2 border-amber-300/50 p-8 rounded-[2rem] shadow-2xl">
              <h3 className="text-2xl font-bold text-amber-200 mb-8 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div> استراتيجيتنا الذكية
              </h3>
              <ul className="space-y-6 text-white font-bold">
                <li className="flex items-center gap-4">🚀 كلمات بحثية تحقق مبيعات</li>
                <li className="flex items-center gap-4">🛡️ بناء روابط خلفية قوية وحقيقية</li>
                <li className="flex items-center gap-4">📈 تحسين تقني شامل وسرعة خرافية</li>
              </ul>
            </div>
            <div className="bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-[2rem]">
              <h3 className="text-2xl font-bold text-white/50 mb-8 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20"></div> السيو التقليدي
              </h3>
              <ul className="space-y-6 text-white/60 font-medium">
                <li className="flex items-center gap-4">❌ استخدام كلمات بحثية عشوائية</li>
                <li className="flex items-center gap-4">❌ روابط سبام تضر بترتيب الموقع</li>
                <li className="flex items-center gap-4">❌ بطء في الأرشفة وأخطاء برمجية</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">أسئلة شائعة عن <span className="text-amber-200">السيو؟</span></h2>
          <div className="bg-sky-900/20 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl">
            <FAQItem question="كم من الوقت يستغرق ظهور نتائج السيو؟" answer="النتائج الملموسة تبدأ في الظهور بين 3 إلى 6 أشهر، اعتماداً على المنافسة." />
            <FAQItem question="هل تضمنون تصدر المركز الأول؟" answer="نتبع أفضل الممارسات التي تضعك في المراكز الأولى، لكن لا يوجد ضمان لتغيير خوارزميات جوجل." />
            <FAQItem question="هل خدمة السيو تشمل إصلاح أخطاء الموقع؟" answer="نعم، السيو التقني جزء أساسي من خدمتنا لضمان سرعة وأداء الموقع." />
            <FAQItem question="كيف تختارون الكلمات البحثية؟" answer="نحلل سلوك عملائك ونختار الكلمات الأكثر تحقيقاً للمبيعات." />
          </div>
        </motion.section>
{/* سكشن خطوات العمل في السيو */}
<motion.section 
  variants={sectionVariants} 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true }} 
  className="mb-24 px-6"
>
  <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
    كيف نضمن لك <span className="text-amber-200">المركز الأول؟</span>
  </h2>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { step: "01", title: "تحليل الموقع", desc: "نبدأ بفحص شامل للأخطاء التقنية وسرعة التحميل." },
      { step: "02", title: "البحث عن الكلمات", desc: "نستهدف كلمات البحث التي تجلب عملاء حقيقيين." },
      { step: "03", title: "تحسين المحتوى", desc: "نصيغ محتوى متوافق مع معايير جوجل وسلوك المستخدم." },
      { step: "04", title: "بناء السلطة", desc: "نحصل على روابط خلفية موثوقة لرفع ترتيب موقعك." }
    ].map((item, index) => (
      <div key={index} className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group">
        <div className="text-amber-200/30 text-6xl font-black mb-4 group-hover:text-amber-200 transition-colors">
          {item.step}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
        <p className="text-white/70 leading-relaxed">{item.desc}</p>
        
        {/* خط ديكوري صغير */}
        <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-amber-200 transition-all duration-500 rounded-b-[2rem]"></div>
      </div>
    ))}
  </div>
</motion.section>

       <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-6">
  <div className="grid md:grid-cols-2 gap-12 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/20 shadow-2xl">
    
    {/* الجزء اليمين: معلومات التواصل والاتصال */}
    <div className="flex flex-col justify-center space-y-8">
      <h2 className="text-3xl md:text-4xl font-black text-white">ابدأ رحلة التصدر</h2>
      <div className="space-y-4 text-white/90">
        <p className="flex items-center gap-3 text-lg">
          📍 <span className="font-bold">العنوان:</span> ١٣ش الشهيد محمود جمعه متفرع من جمال عبد الناصر العصافره بحري اعلى كافيه الفيروز الدور الرابع, Alexandria, Egypt، الإسكندرية، مصر
        </p>
        <p className="flex items-center gap-3 text-lg">
          📞 <span className="font-bold">الهاتف:</span> 01505388060
        </p>
      </div>
      <a 
        href="tel:01505388060" 
        className="bg-amber-200 text-sky-950 font-black py-4 px-8 rounded-full w-fit hover:bg-white transition-all shadow-lg hover:scale-105 active:scale-95"
      >
        اتصل بنا الآن
      </a>
    </div>

    {/* الجزء الشمال: مستطيل خريطة جوجل بكامل العرض والارتفاع */}
    <div className="rounded-[2rem] overflow-hidden border-4 border-white/10 h-[300px]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.8718228308485!2d30.0135!3d31.2725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE2JzIxLjAiTiAzMMKwMDAnNDguNiJF!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg"
        // إضافة الكلاسات لملء المساحة بالكامل 🛠️
        className="w-full h-full grayscale-[15%] contrast-[105%] hover:grayscale-0 transition-all duration-500"
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="خريطة مقر الوكالة الجغرافي"
      ></iframe>
    </div>

  </div>
</motion.section>
</div>

<style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
  .font-cairo { font-family: 'Cairo', sans-serif; }
`}</style>
</main>
);
}