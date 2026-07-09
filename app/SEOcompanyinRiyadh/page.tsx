"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Zap, BarChart3, Target, ShieldCheck, Headphones, ShoppingCart, Building2, Plane, Code2, PenTool, Stethoscope, ChevronDown, MessageSquareText, Mail, Phone } from "lucide-react";

// 1. سكشن الفيديو
const HeroSection = () => (
  <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
    <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
  <source src="/SEO company in Riyadh.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/60 z-10" />
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-20 text-center px-6">
      <h1 className="text-4xl md:text-7xl font-black text-white mb-6">
        أفضل <span className="text-[#FFB703]">شركة سيو بالرياض</span>
      </h1>
      <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
        نساعدك في تصدر محركات البحث ورفع مبيعاتك من خلال استراتيجيات سيو مبتكرة مصممة خصيصاً لسوق الرياض.
      </p>
      <a href="https://wa.me/201505388060" className="bg-[#FFB703] text-[#0B1B3D] px-10 py-4 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl">تواصل معنا عبر الواتساب</a>
    </motion.div>
  </section>
);

// 2. سكشن المحتوى
const ContentSection = () => (
  <section className="py-24 px-6 bg-[#0B1B3D] text-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="order-1">
        <img src="/seoo.webp" alt="خدمات السيو" className="w-full h-auto rounded-3xl shadow-2xl border border-white/10" />
      </div>
      <div className="order-2 space-y-6">
        <h2 className="text-4xl font-black text-[#FFB703]">شركة سيو في السعودية</h2>
        <p className="text-lg text-white/80 leading-relaxed">
          في <strong className="text-white">Unique</strong>، نمنح مشروعك القوة للوصول إلى عملائك المستهدفين. نحن متخصصون في تقديم استراتيجيات سيو متكاملة للشركات والمتاجر في الرياض، جدة، والدمام، مستندين إلى فهم دقيق لآليات البحث في السوق السعودي.
        </p>
        <p className="text-lg text-white/80 leading-relaxed">
          بخبرة عقد من الزمن، نطبق حلولاً تقنية ومحتوىً إبداعياً يضمن أرشفة موقعك في مراتب الصدارة وفقاً لمعايير جوجل العالمية.
        </p>
        <div className="pt-6">
          <a href="https://wa.me/201505388060" className="inline-block bg-white text-[#0B1B3D] px-8 py-3 rounded-full font-bold hover:bg-[#FFB703] transition-all">
            تواصل عبر الواتساب: 01505388060
          </a>
        </div>
      </div>
    </div>
  </section>
);

// 3. سكشن المميزات
const FeaturesSection = () => {
  const features = [
    { icon: <Search />, title: "تحليل معمق", desc: "دراسة شاملة للمنافسين والكلمات الأكثر بحثاً." },
    { icon: <Zap />, title: "أرشفة سريعة", desc: "تحسين سرعة الموقع وتوافقية الجوال." },
    { icon: <BarChart3 />, title: "نتائج ملموسة", desc: "تقارير أداء دورية توضح صعود موقعك." },
    { icon: <Target />, title: "استهداف دقيق", desc: "الوصول للعميل المناسب في الوقت المناسب." },
    { icon: <ShieldCheck />, title: "معايير آمنة", desc: "استراتيجيات سيو تحترم خوارزميات جوجل." },
    { icon: <Headphones />, title: "دعم مخصص", desc: "فريق عمل محترف بجانبك في كل خطوة." }
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1B3D]/95">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 text-white">لماذا Unique تتصدر؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#FFB703] text-[#0B1B3D] hover:scale-105 transition-transform duration-300 shadow-xl">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-2xl font-black mb-2">{f.title}</h3>
              <p className="font-medium opacity-90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. سكشن التخصصات
const ServicesSection = () => {
  const services = [
    { title: "المتاجر الإلكترونية", desc: "سلة، ووردبريس، ماجنتو، وأودو.", icon: <ShoppingCart size={40} /> },
    { title: "الشركات والمؤسسات", desc: "نمو الشركات السعودية الناشئة والكبرى.", icon: <Building2 size={40} /> },
    { title: "السياحة والحجوزات", desc: "خدمات السفر، السياحة، والخدمات المنزلية.", icon: <Plane size={40} /> },
    { title: "المواقع التقنية", desc: "تهيئة المواقع البرمجية والتقنية الحديثة.", icon: <Code2 size={40} /> },
    { title: "المدونات", desc: "تحسين ترتيب المقالات والمحتوى الرقمي.", icon: <PenTool size={40} /> },
    { title: "المواقع الطبية", desc: "مستشفيات، عيادات، ومعامل تحاليل.", icon: <Stethoscope size={40} /> },
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1B3D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">مجالات خبرتنا</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">نساعدك في تصدر محركات البحث في أغلب مجالات المواقع المنتشرة في الوطن العربي والسعودية.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[#122c5e] border border-white/10 p-8 rounded-[2rem] hover:border-[#FFB703] transition-all group">
              <div className="text-[#FFB703] mb-6">{s.icon}</div>
              <h3 className="text-2xl font-black text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-lg">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. سكشن التقنيات المتقدمة
const AdvancedTechSection = () => {
  const techs = [
    { title: "السيو الدلالي (Semantic SEO)", desc: "لا نعتمد على الكلمات المفتاحية فقط، بل نطبق السيو الدلالي لنمنح محركات البحث فهماً عميقاً لسياق محتوى موقعك وربطه بصلب اهتمامات جمهورك في السعودية." },
    { title: "الذكاء الاصطناعي (AI Intelligence)", desc: "نتجاوز التحليل التقليدي بدمج أدوات الذكاء الاصطناعي المتقدمة لتحليل المنافسين واقتناص الثغرات." },
    { title: "تحسين المحتوى البصري (Visual SEO)", desc: "نطبق هندسة معقدة للـ Schema ونعزز محتواك البصري بأوصاف Alt Text استراتيجية لتصدر نتائج البحث البصري." },
    { title: "السيو الصوتي (Voice Search)", desc: "نهيئ موقعك ليتحدث لغة المستخدم الطبيعية ونضمن أن تكون علامتك التجارية هي الخيار الأول في نتائج البحث الصوتي." },
    { title: "الأداء وتجربة المستخدم", desc: "نطبق تقنيات متطورة لرفع كفاءة سرعة التحميل وسلاسة التصفح على الجوال لزيادة معدلات التحويل." },
    { title: "هيكلية السيلو (Silo Structure)", desc: "ننظم موقعك بنظام هيكلي مترابط يسهل على الزوار الوصول للخدمات وعلى محركات البحث أرشفة موقعك بكفاءة." },
    { title: "تعزيز الثقة والمصداقية (E-A-T)", desc: "نبرز خبرتك وشهادات عملائك ومشاريعك الناجحة كبراهين دامغة تفرض ثقة مطلقة لدى الزوار ومحركات البحث." },
    { title: "التحليلات التنبؤية", desc: "نستخدم بيانات السوق للتنبؤ بكلمات البحث القادمة، لنضع موقعك في المكان الصحيح قبل الجميع." }
  ];

  return (
    <section className="relative h-[800vh] w-full bg-[#0B1B3D] py-20">
      <div className="sticky top-10 z-50 text-center mb-10"><h2 className="text-4xl md:text-6xl font-black text-white">أحدث <span className="text-[#FFB703]">تقنيات السيو</span></h2></div>
      {techs.map((t, i) => (
        <div key={i} className="sticky top-0 h-screen w-full flex items-center justify-center p-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-4xl h-[70vh] bg-[#0B1B3D] border-2 border-[#FFB703] p-16 rounded-[3rem] flex flex-col justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <span className="text-[#FFB703] text-lg font-bold mb-4 block">تقنية رقم {i + 1}</span>
            <h3 className="text-4xl md:text-6xl font-black mb-8 text-white">{t.title}</h3>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed border-t border-white/10 pt-8">{t.desc}</p>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

// 6. سكشن الأسئلة الشائعة (FAQ)
const FAQSection = () => {
  const faqs = [
    { q: "ما هي المدة المتوقعة لرؤية نتائج السيو؟", a: "تعتمد النتائج على حالة موقعك ومجال المنافسة، ولكن عادة ما تبدأ النتائج الملموسة في الظهور خلال 3 إلى 6 أشهر." },
    { q: "هل تضمنون تصدر النتائج الأولى؟", a: "نحن نتبع أحدث معايير جوجل العالمية ونعمل على تحسين كل تفاصيل الموقع لزيادة فرص تصدرك، والنتائج هي تتويج لعمل استراتيجي متقن." },
    { q: "ما الفرق بين السيو والاعلانات الممولة؟", a: "السيو يوفر نمواً طويل الأمد ومستداماً ومجانياً من النقرات، بينما الإعلانات الممولة تجلب زواراً طالما كنت تدفع للمنصة." },
    { q: "هل تحتاجون للوصول إلى لوحة تحكم الموقع؟", a: "نعم، لكي نقوم بالتحسينات التقنية وتطبيق Schema وتحسين الأداء، نحتاج للوصول إلى لوحة التحكم (WordPress, Salla, etc)." },
    { q: "هل تقدمون خدمات السيو خارج السعودية؟", a: "نعم، نمتلك خبرة في تهيئة المواقع لمختلف الأسواق، مع تركيز خاص واحترافية عالية في السوق السعودي والخليجي." }
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#0B1B3D] border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 text-white">أسئلة شائعة</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#122c5e] rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-6 text-right flex justify-between items-center font-bold text-xl text-white">
                {f.q} <ChevronDown className={`transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-6 pb-6 text-gray-300 text-lg">
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 7. سكشن التواصل القوي (Contact Section)
const ContactSection = () => (
  <section className="py-24 px-6 bg-[#FFB703] text-[#0B1B3D]">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="space-y-8">
        <MessageSquareText size={80} className="mx-auto" />
        <h2 className="text-5xl md:text-7xl font-black">مستعد للسيطرة على محركات البحث؟</h2>
        <p className="text-2xl font-bold opacity-90 max-w-2xl mx-auto">
          لا تترك الفرصة للمنافسين. فريق Unique في انتظارك لتحويل موقعك إلى آلة مبيعات وتصدر النتائج في الرياض والسعودية.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
          <a href="https://wa.me/201505388060" className="bg-[#0B1B3D] text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl flex items-center gap-3 justify-center">
            <Phone /> ابدأ استشارتك المجانية
          </a>
          <a href="mailto:info@uniquews.com" className="bg-white text-[#0B1B3D] px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-xl flex items-center gap-3 justify-center">
            <Mail /> راسلنا عبر البريد
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function RiyadhSEOPage() {
  return (
    <main className="font-cairo bg-[#0B1B3D] text-white">
      <HeroSection />
      <ContentSection />
      <FeaturesSection />
      <ServicesSection />
      <AdvancedTechSection />
      <FAQSection />
      <ContactSection />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}