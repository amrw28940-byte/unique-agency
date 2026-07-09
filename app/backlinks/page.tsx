"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle, FaStar, FaShieldAlt, FaChartLine, FaGlobe, FaChevronDown, FaChevronUp, FaUserTie, FaBuilding, FaSearchPlus } from "react-icons/fa";

// 1. الهيرو سكشن
const HeroSection = () => (
  <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
    <img src="/backlinkss.webp" alt="خدمات بناء الروابط الخلفية" className="absolute w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/70 z-10" />
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-20 text-center px-6">
      <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
        ارفع ترتيب موقعك.. <span className="text-amber-400">باك لينك قوي في الصدارة</span>
      </h1>
      <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">نحن نبني لك جسوراً رقمية (Backlinks) من مواقع ذات سلطة عالية (High DA)، لتضع موقعك في النتائج الأولى لجوجل بشكل آمن واحترافي يضمن استمرارية تصدرك.</p>
      <a href="https://wa.me/201505388060" className="bg-amber-400 text-[#0B1B3D] px-10 py-4 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl">ابدأ رحلة الصدارة</a>
    </motion.div>
  </section>
);

// 2. سكشن القيمة
const WhyUsSection = () => (
  <section className="py-24 px-6 bg-[#0B1B3D]">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-black">لماذا الباك لينك هو العمود الفقري لـ SEO؟</h2>
        <p className="text-lg text-white/70 leading-relaxed">جوجل يعتبر الروابط الخلفية "تصويتاً بالثقة" لموقعك بدون روابط من مواقع ذات سلطة عالية، ستظل مجهولاً مهما كان محتواك رائعاً نحن نوفر لك بناءً آمناً يحول موقعك إلى مرجع موثوق في مجالك، مما يرفع تصنيفك في صفحات البحث (SERPs) بشكل تلقائي وتدريجي.</p>
        <ul className="space-y-4">
          {["رفع الـ Domain Authority (DA) لموقعك", "جلب زيارات حقيقية مستهدفة من مواقع ذات صلة", "تجاوز المنافسين في الكلمات المفتاحية الصعبة"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-amber-400 font-bold text-lg"><FaCheckCircle /> {item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center"><FaChartLine className="text-8xl text-amber-400 mx-auto mb-6"/><h3 className="text-2xl font-bold">نتائج ملموسة ونمو رقمي مستدام</h3></div>
    </div>
  </section>
);

// 3. الخدمات
const Services = () => (
  <section className="py-24 px-6">
    <h2 className="text-4xl font-black text-center mb-16">باقة خدماتنا المتكاملة</h2>
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {[ { t: "روابط Niche Edits", d: "وضع روابطك في مقالات قائمة ومؤرشفة ذات صلة قوية بمجالك، مما يعطي دفعة فورية لموقعك." }, { t: "نشر ضيف (Guest Post)", d: "كتابة ونشر محتوى حصري في مواقع إخبارية وتقنية كبرى لرفع سلطتك الرقمية." }, { t: "بناء ملف روابط متنوع", d: "خطة متوازنة بين الروابط القوية والروابط الطبيعية لتجنب أي تحديثات لخوارزميات جوجل." } ].map((s, i) => (
        <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-amber-400 transition-all">
          <FaSearchPlus className="text-4xl text-amber-400 mb-6"/>
          <h3 className="text-2xl font-bold mb-4">{s.t}</h3>
          <p className="text-white/70 leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  </section>
);

// 4. خطوات العمل
const Process = () => (
  <section className="py-24 bg-white/5 text-center px-6">
    <h2 className="text-4xl font-black mb-16">كيف نعمل (خريطة طريق الصدارة)</h2>
    <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
      {["تحليل منافسيك", "اختيار مواقع قوية", "كتابة محتوى متوافق", "إطلاق ومراقبة"].map((step, i) => (
        <div key={i} className="p-8 bg-[#0B1B3D] rounded-3xl border border-white/10 font-bold text-lg">{step}</div>
      ))}
    </div>
  </section>
);

// 5. الجودة والأمان
const Quality = () => (
  <section className="py-24 px-6 text-center max-w-4xl mx-auto">
    <FaShieldAlt className="text-7xl text-amber-400 mx-auto mb-8"/>
    <h2 className="text-4xl font-black mb-6">جودة آمنة (White Hat SEO)</h2>
    <p className="text-lg text-white/70 leading-relaxed">نحن نبتعد تماماً عن الروابط المزعجة (Spam) أو الطرق التي تخالف معايير جوجل. كل رابط نبنيه يمر بمراجعة يدوية دقيقة للتأكد من جودة الموقع الناشر وملاءمته لمجالك. نحن نحمي موقعك من أي عقوبات مستقبلية ونضمن لك بناء "سلطة" حقيقية لموقعك تعيش لسنوات.</p>
  </section>
);

// 6. أماكن النشر
const Where = () => (
  <section className="py-24 bg-[#0B1B3D]">
    <div className="max-w-4xl mx-auto text-center px-6">
      <h2 className="text-4xl font-black mb-12">أين نضع روابطك؟</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {["مواقع إخبارية كبرى", "مدونات تقنية متخصصة", "مواقع عالمية", "منصات تجارية", "مواقع تعليمية", "منتديات متخصصة"].map((l, i) => (
          <div key={i} className="p-6 border border-white/10 rounded-2xl font-bold">{l}</div>
        ))}
      </div>
    </div>
  </section>
);

// 7. آراء العملاء
const Testimonials = () => {
  const reviews = [
    { n: "د. خالد السعيد", t: "مدير شركة تقنية", c: "بفضل الروابط التي تم بناؤها، قفز موقعنا من الصفحة الثالثة للأولى خلال شهرين." },
    { n: "سارة محمود", t: "صاحبة متجر إلكتروني", c: "خدمة احترافية جداً، شعرت بفرق حقيقي في عدد الزوار والمبيعات بعد فترة وجيزة." },
    { n: "احمد عبد الرحمن", t: "استشاري عقارات", c: "من أفضل من تعاملت معهم في الـ SEO، دقة في المواعيد ونتائج تظهر بوضوح في تحليلات جوجل." }
  ];
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-4xl font-black mb-16">آراء شركاء النجاح</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 text-right">
            <FaStar className="text-amber-400 mb-6 text-2xl"/>
            <p className="text-lg italic mb-6">"{rev.c}"</p>
            <div className="flex items-center gap-4">
              <div className="bg-amber-400 p-3 rounded-full text-[#0B1B3D]"><FaUserTie /></div>
              <div><h4 className="font-bold">{rev.n}</h4><p className="text-sm text-white/50">{rev.t}</p></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 8. الأسئلة الشائعة
const FAQ = () => {
  const questions = [
    { q: "كم يستغرق ظهور نتائج الباك لينك؟", a: "في العادة تبدأ النتائج في الظهور خلال 3 إلى 6 أسابيع حسب قوة الكلمات المفتاحية ومنافسة السوق، ولكننا نضمن لك بناءً آمناً ومستداماً." },
    { q: "هل الروابط دائمة أم مؤقتة؟", a: "جميع الروابط التي نبنيها هي روابط دائمة ولا نقوم بإزالة روابطك بعد النشر، مما يضمن تراكم سلطة موقعك بمرور الوقت." },
    { q: "كيف تختارون المواقع المناسبة لموقعي؟", a: "نقوم بتحليل دقيق لنيش موقعك (مجالك) ونختار فقط المواقع التي تمتلك سلطة دومين (DA) عالية ومحتوى ذا صلة بموضوع موقعك لتجنب أي تأثير سلبي." },
    { q: "هل هذه الطريقة آمنة من تحديثات جوجل؟", a: "بالتأكيد، نحن نتبع استراتيجية الـ White Hat SEO فقط، ونبتعد عن تبادل الروابط العشوائي أو المزارع، مما يجعل عملك في أمان تام." },
    { q: "هل تقدمون تقارير متابعة؟", a: "نعم، بعد الانتهاء من العمل نقدم لك تقريراً مفصلاً يحتوي على روابط المواقع التي تم النشر فيها، بالإضافة إلى متابعة تغير ترتيب موقعك." }
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-16">أسئلة شائعة</h2>
      {questions.map((item, i) => (
        <div key={i} className="mb-4 border border-white/10 p-6 rounded-2xl">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full justify-between items-center font-bold text-lg">{item.q} {open === i ? <FaChevronUp/> : <FaChevronDown/>}</button>
          {open === i && <p className="mt-4 text-white/70 leading-relaxed">{item.a}</p>}
        </div>
      ))}
    </section>
  );
};

// 9. الثقة الرقمية
const Trust = () => (
  <section className="py-24 bg-white/5 text-center px-6">
    <FaGlobe className="text-7xl text-amber-400 mx-auto mb-8"/>
    <h2 className="text-4xl font-black mb-6">شبكة علاقات دولية ومحلية</h2>
    <p className="max-w-2xl mx-auto text-lg">بفضل شبكة علاقاتنا الواسعة مع مديري المواقع والمحررين في مختلف القطاعات، نضمن لك وصولاً حصرياً إلى منصات قوية لا يمكن للمنافسين الوصول إليها، مما يمنح موقعك ميزة تنافسية لا تضاهى.</p>
  </section>
);

// 10. التواصل
const Contact = () => (
  <section className="py-24 text-center border-t border-white/10 px-6">
    <h2 className="text-5xl font-black mb-8">هل أنت جاهز لتصدر جوجل؟</h2>
    <a href="https://wa.me/201505388060" className="text-4xl font-black text-amber-400 hover:underline">تواصل الآن</a>
  </section>
);

export default function BacklinksPage() {
  return (
    <main className="bg-[#0B1B3D] text-white font-cairo">
      <HeroSection />
      <WhyUsSection />
      <Services />
      <Process />
      <Quality />
      <Where />
      <Testimonials />
      <FAQ />
      <Trust />
      <Contact />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}