"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, FaChevronDown, FaChevronUp, FaStar, FaQuoteRight, 
  FaCheckCircle, FaRocket, FaPenNib, FaSearch, FaUserTie, FaEnvelope, FaPhoneAlt 
} from "react-icons/fa";

// 1. سكشن الهيرو
const HeroSection = () => (
  <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
    <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
      <source src="/content-writing.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0B1B3D]/90" />
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-6">
      <h1 className="text-4xl md:text-7xl font-black text-white mb-6">قوة الكلمة.. <span className="text-amber-400">تحول زوارك لعملاء</span></h1>
      <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
        نصنع لك محتوىً إبداعياً يدمج بين قوة الإقناع ومعايير الـ SEO، ليجعل موقعك يتصدر محركات البحث ويخلق اتصالاً حقيقياً مع جمهورك.
      </p>
      <a href="https://wa.me/201505388060" className="bg-amber-400 text-[#0B1B3D] px-10 py-4 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-lg">تواصل معنا الأن</a>
    </motion.div>
  </section>
);

// 2. سكشن المميزات
const FeaturesSection = () => (
  <motion.section className="py-24 px-6 bg-[#0B1B3D]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-16">لماذا نحن خيارك الأول؟</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-amber-400">استراتيجية سيو (SEO) دقيقة</h3>
          <p className="text-white/70 leading-relaxed text-lg">نحن لا نكتب للمتصفح فقط، بل للخوارزميات. نعتمد على تحليل المنافسين، البحث عن الكلمات المفتاحية ذات الحجم العالي والمنافسة المناسبة، لضمان ظهور موقعك في الصدارة دائماً.</p>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-amber-400">إبداع لغوي بلا حدود</h3>
          <p className="text-white/70 leading-relaxed text-lg">نمتلك فريقاً قادراً على كتابة محتوى بأي نبرة صوت تحتاجها. سواء كانت نبرة رسمية، ودودة، تعليمية أو إقناعية (بيع مباشر)، نحن نضمن اتساق المحتوى مع هوية شركتك.</p>
        </div>
      </div>
    </div>
  </motion.section>
);

// 3. سكشن الخدمات المتكاملة
const ServicesSection = () => (
  <section className="py-24 px-6 bg-[#0B1B3D]/50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-16">ماذا نقدم؟</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[ { icon: <FaPenNib />, title: "كتابة إبداعية", text: "نصوص تعكس هوية علامتك." }, { icon: <FaSearch />, title: "SEO احترافي", text: "صدارة في محركات البحث." }, { icon: <FaRocket />, title: "كتابة إعلانية", text: "زيادة معدلات التحويل." } ].map((item, i) => (
          <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-amber-400 transition-all">
            <div className="text-4xl text-amber-400 mb-6">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/70">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 4. سكشن آراء العملاء
const Testimonials = () => {
  const reviews = [
    { name: "أحمد منصور", title: "مدير متجر", text: "تضاعفت المبيعات بفضل المحتوى الاحترافي." },
    { name: "سارة خالد", title: "شركة تقنية", text: "تصدرنا النتائج بفضل مقالاتهم المتميزة." },
    { name: "محمد العلي", title: "عقارات", text: "صياغة فخمة تليق بعقاراتنا." },
    { name: "ليلى يوسف", title: "مدونة", text: "التزام كامل بالمواعيد وجودة عالية." },
    { name: "عمر فاروق", title: "مسوق", text: "نصوص بيعية تحقق تحويلاً حقيقياً." },
    { name: "منى صبري", title: "أزياء", text: "إبداع في وصف المنتجات." }
  ];
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16">ماذا قالوا عنا؟</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-[#0B1B3D] p-8 rounded-3xl border border-white/10">
              <FaQuoteRight className="text-amber-400 mb-6 text-2xl" />
              <p className="text-lg mb-6">"{rev.text}"</p>
              <h4 className="font-bold text-amber-400">{rev.name}</h4>
              <p className="text-sm">{rev.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. سكشن الأسئلة الشائعة (10 أسئلة)
const FAQ = () => {
  const questions = [
    { q: "ما هي المدة الزمنية؟", a: "نبدأ من 48 ساعة للمشاريع الصغيرة." },
    { q: "هل المحتوى أصلي؟", a: "نعم، 100% حصري ومفحوص." },
    { q: "ما هي سياسة التعديلات؟", a: "نقدم تعديلات مجانية حتى الوصول للرضا التام." },
    { q: "هل لديكم خدمات لغات أخرى؟", a: "نعم، نقدم محتوى بالعربية والإنجليزية." },
    { q: "كيف يتم الدفع؟", a: "نوفر طرق دفع متعددة تناسبكم." },
    { q: "هل المحتوى مهيأ للسيو؟", a: "بالتأكيد، السيو هو أساس عملنا." },
    { q: "هل تكتبون للمدونات فقط؟", a: "نكتب للمدونات، المواقع، الشركات، والمنصات." },
    { q: "هل يمكنني طلب عينة؟", a: "نعم، يمكننا توفير نموذج مصغر." },
    { q: "كيف نحدد نبرة الصوت؟", a: "نناقش هذا في جلسة البدء." },
    { q: "ماذا لو لم يعجبني المحتوى؟", a: "نعمل على تطويره حتى يناسب ذوقك." }
  ];
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-16">أسئلة شائعة</h2>
      {questions.map((item, i) => (
        <div key={i} className="mb-4 p-6 border border-white/10 rounded-2xl">
          <h4 className="font-bold text-lg">{item.q}</h4>
          <p className="mt-2 text-white/70">{item.a}</p>
        </div>
      ))}
    </section>
  );
};

// 6. سكشن التواصل
const ContactSection = () => (
  <section className="py-24 px-6 bg-amber-400 text-[#0B1B3D] text-center">
    <h2 className="text-4xl font-black mb-8">هل أنت مستعد لنبدأ؟</h2>
    <div className="flex flex-col items-center gap-6 text-2xl font-bold">
      <a href="https://wa.me/201505388060" className="flex items-center gap-3"><FaWhatsapp /> 01505388060</a>
      <a href="mailto:uniquecompany55@gmail.com" className="flex items-center gap-3"><FaEnvelope /> uniquecompany55@gmail.com</a>
    </div>
  </section>
);

export default function FullContentPage() {
  return (
    <main className="bg-[#0B1B3D] text-white font-cairo">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      {/* 7. سكشن إضافي: كيف نعمل */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-black mb-16">خطوات العمل</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {["تحليل", "بحث", "كتابة", "تدقيق"].map((s, i) => (
            <div key={i} className="p-8 bg-white/5 rounded-full border border-white/10">{s}</div>
          ))}
        </div>
      </section>
      <Testimonials />
      <FAQ />
      {/* 8. سكشن إضافي: خريطة النجاح */}
      <section className="py-24 bg-white/5 text-center">
        <h2 className="text-4xl font-black mb-6">نحن نبني جسوراً بينك وبين عملائك</h2>
        <p className="max-w-2xl mx-auto text-lg">نحن نؤمن أن الكلمات هي التي تحرك العالم، لذا نضع خبراتنا بين يديك لنصنع مستقبلاً أفضل لعلامتك التجارية.</p>
      </section>
      <ContactSection />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}