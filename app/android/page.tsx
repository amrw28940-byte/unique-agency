"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MousePointerClick, Code, Palette, ShieldCheck, Zap, Globe, 
  BarChart3, Users, Headphones, Smartphone, DollarSign, Layers, 
  Database, Settings, LayoutGrid, Clock, MapPin, Phone 
} from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa"; 
import Image from "next/image";

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

export default function AndroidServicePage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted) return null;

  const services = [
    { title: "هوية بصرية", desc: "تصميم هوية بصرية فريدة تعكس جوهر مشروعك وتميزك عن المنافسين.", icon: <Palette className="text-amber-200 w-8 h-8" /> },
    { title: "برمجة التطبيق", desc: "بناء هيكل تقني قوي بأحدث اللغات لضمان سرعة واستقرار تطبيقك.", icon: <Code className="text-amber-200 w-8 h-8" /> },
    { title: "تقسيمات ذكية", desc: "هيكلة التطبيق بشكل يضمن سهولة الإدارة والتوسع المستقبلي للميزات.", icon: <LayoutGrid className="text-amber-200 w-8 h-8" /> },
    { title: "تجربة UX", desc: "محتوى UX مخصص يضمن رحلة مستخدم سلسة ومريحة داخل التطبيق.", icon: <Zap className="text-amber-200 w-8 h-8" /> },
    { title: "ترخيص وحماية", desc: "تشفير متطور وتراخيص رسمية لحماية بيانات عملائك ضد أي ثغرات.", icon: <ShieldCheck className="text-amber-200 w-8 h-8" /> },
    { title: "تسويق ودعم", desc: "باقات دعم فني وتسويق مدمج لضمان نمو تطبيقك وزيادة تحميلاته.", icon: <Globe className="text-amber-200 w-8 h-8" /> }
  ];

  const strengths = [
    { title: "تخطيط استراتيجي", desc: "ندرس المنافسين ونحلل الجمهور بدقة قبل البدء في أي تصميم.", icon: <BarChart3 className="text-amber-200 w-8 h-8" /> },
    { title: "واجهات احترافية", desc: "تصميمات جذابة وسهلة الاستخدام تناسب جميع فئات المستخدمين.", icon: <Smartphone className="text-amber-200 w-8 h-8" /> },
    { title: "لوحة تحكم", desc: "لوحة تحكم مرنة باللغتين العربية والإنجليزية لإدارة تطبيقك بسهولة.", icon: <LayoutGrid className="text-amber-200 w-8 h-8" /> },
    { title: "تحسين SEO", desc: "نطبق قواعد SEO للمتاجر لضمان ظهور تطبيقك في النتائج الأولى.", icon: <Globe className="text-amber-200 w-8 h-8" /> },
    { title: "خبرة متجددة", desc: "فريقنا يخضع لتدريب مستمر لمواكبة أحدث تغيرات البرمجة.", icon: <Users className="text-amber-200 w-8 h-8" /> },
    { title: "دعم 24/7", desc: "فريق دعمنا متاح للرد على استفساراتك في أي وقت بكفاءة.", icon: <Headphones className="text-amber-200 w-8 h-8" /> }
  ];

  const pricingFactors = [
    { title: "حجم ومزايا التطبيق", desc: "تعدد الخصائص يتطلب جهداً برمجياً أكبر، مما يؤثر على التكلفة النهائية.", icon: <Layers className="text-amber-200 w-8 h-8" /> },
    { title: "التعقيد والبساطة", desc: "التصاميم المعقدة تتطلب وقتاً أكبر في التطوير مقارنة بالتطبيقات البسيطة.", icon: <Settings className="text-amber-200 w-8 h-8" /> },
    { title: "الوقت الزمني", desc: "كلما زاد وقت التنفيذ لتطوير مميزات إضافية، زادت تكلفة الجهد البشري.", icon: <Clock className="text-amber-200 w-8 h-8" /> },
    { title: "تقنيات البرمجة", desc: "تختلف تقنيات البرمجة حسب النظام واللغات، مما يؤثر على التكلفة التقنية.", icon: <Code className="text-amber-200 w-8 h-8" /> },
    { title: "تصميم الواجهات", desc: "استخدام أحدث تقنيات UI/UX يضيف لمسة إبداعية تنعكس على ميزانية التصميم.", icon: <Palette className="text-amber-200 w-8 h-8" /> },
    { title: "البنية التحتية", desc: "التطبيقات التي تحتاج لسيرفرات خاصة تتطلب تكاليف إضافية للاستضافة والحماية.", icon: <Database className="text-amber-200 w-8 h-8" /> }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] font-cairo" style={{ direction: "rtl" }}>
      
      {/* أيقونات التواصل الثابتة */}
      <div className="fixed right-4 bottom-8 z-50 flex flex-col gap-4">
        <a href="https://wa.me/201505388060" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-4 rounded-full text-white shadow-2xl hover:scale-110 transition-transform">
          <FaWhatsapp size={30} />
        </a>
        <a href="https://www.facebook.com/uniquews" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-4 rounded-full text-white shadow-2xl hover:scale-110 transition-transform">
          <FaFacebook size={30} />
        </a>
      </div>

      {/* الهيدر */}
      <section className="relative w-full h-[60vh] overflow-hidden border-b border-white/20">
        <Image src="/android.webp" alt="Android Development" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6">تطبيقات أندرويد <span className="text-amber-200">بمعايير عالمية</span></h1>
          <a href="#contact" className="inline-flex items-center gap-3 bg-amber-200 text-sky-950 font-black py-5 px-12 rounded-full hover:bg-white transition-all shadow-2xl">
            اتصل بنا الآن <Phone className="w-6 h-6" />
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-24 px-6">
        {/* الخدمات */}
        <section className="mb-24"><h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center">ماذا نقدم في <span className="text-amber-200">تطبيقك؟</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((item, i) => (
            <div key={i} className="bg-sky-950/40 p-8 rounded-[2rem] border border-white/10">{item.icon}<h3 className="text-xl font-bold text-white mt-4">{item.title}</h3><p className="text-white/70 mt-2">{item.desc}</p></div>
          ))}</div>
        </section>

        {/* المميزات */}
        <section className="mb-24"><h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center">لماذا تختار <span className="text-amber-200">Unique WS؟</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{strengths.map((item, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-amber-200/20">{item.icon}<h3 className="text-xl font-bold text-white mt-4">{item.title}</h3><p className="text-white/70 mt-2">{item.desc}</p></div>
          ))}</div>
        </section>

        {/* معايير التسعير */}
        <section className="mb-24"><h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center">معايير <span className="text-amber-200">التسعير</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{pricingFactors.map((item, i) => (
            <div key={i} className="bg-sky-950/30 p-8 rounded-[2rem] border border-white/10">{item.icon}<h3 className="text-xl font-bold text-white mt-4">{item.title}</h3><p className="text-white/70 mt-2">{item.desc}</p></div>
          ))}</div>
        </section>

        {/* الأسئلة الشائعة */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">أسئلة <span className="text-amber-200">تراودك؟</span></h2>
          <div className="bg-sky-900/20 p-8 rounded-[2.5rem] border border-white/10">
            <FAQItem question="هل التطبيق يدعم جميع إصدارات الأندرويد؟" answer="نعم، نحرص على توافق التطبيق مع أحدث الإصدارات." />
            <FAQItem question="هل سأمتلك الكود المصدري للتطبيق؟" answer="بالطبع، الكود المصدري ملك لك بالكامل." />
            <FAQItem question="كيف أبدأ في طلب تطبيق؟" answer="تواصل معنا عبر واتساب، وسيقوم فريقنا بدراسة فكرتك." />
          </div>
        </section>

        {/* قسم اتصل بنا */}
        <section id="contact" className="bg-sky-950/40 p-12 rounded-[2rem] border border-white/10 backdrop-blur-md">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 text-center">تواصل <span className="text-amber-200">معنا</span></h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-200 shrink-0" size={32} />
                <p className="text-lg">١٣ ش الشهيد محمود جمعه، متفرع من جمال عبد الناصر، العصافره بحري، أعلى كافيه الفيروز، الدور الرابع، الإسكندرية، مصر.</p>
              </div>
            </div>
            <div className="w-full h-64 rounded-2xl overflow-hidden border-4 border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.8718228308485!2d30.0135!3d31.2725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE2JzIxLjAiTiAzMMKwMDAnNDguNiJF!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}
