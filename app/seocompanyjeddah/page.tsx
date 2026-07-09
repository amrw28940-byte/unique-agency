"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  MapPin, ShieldCheck, BarChart3, Users, Trophy, 
  ChevronRight, ChevronLeft, CheckCircle2, Globe, 
  Smile, TrendingUp, Award, Clock, Search, 
  FileText, Link2, Settings, ShoppingCart, 
  Store, Video, ExternalLink, Sparkles, XCircle,
  HelpCircle, ChevronDown
} from "lucide-react";

// ==========================================
// 1. سكشن الهيرو (Hero Section)
// ==========================================
const HeroSection = () => (
  <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-[#0B1B3D]">
    <motion.div 
      initial={{ scale: 1 }}
      animate={{ scale: 1.06 }}
      transition={{ duration: 12, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    >
      <Image
        src="/SEO company in Jeddah.webp"
        alt="SEO company in Jeddah"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </motion.div>
    <div className="absolute inset-0 bg-black/65 z-10" />
    <div className="relative z-20 text-center px-6 max-w-4xl">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight"
      >
        <span className="text-[#FFB703]">شركة سيو بجدة</span> تضمن لك صدارة جوجل
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
      >
        ضاعف مبيعاتك وحسّن ظهور موقعك الإلكتروني في نتائج البحث الأولى من خلال استراتيجيات سيو ذكية ومخصصة لسوق جدة والسعودية.
      </motion.p>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}>
        <motion.a 
          href="https://wa.me/201505388060" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#FFB703] text-[#0B1B3D] px-10 py-4 rounded-full font-black text-xl shadow-xl transition-colors hover:bg-[#e0a100]"
        >
          Tواصل معنا عبر الواتساب
        </motion.a>
      </motion.div>
    </div>
  </section>
);

// ==========================================
// 2. السكشن الثاني (نظام الكروت)
// ==========================================
const BusinessNecessitySection = () => {
  const cardsData = [
    {
      icon: <MapPin size={32} className="text-[#FFB703]" />,
      title: "استقطاب المستهلكين المحليين",
      desc: "تتوجه معظم عمليات البحث الحالية نحو النطاق الجغرافي القريب. فالمستخدمون في جدة يبحثون عن “أبرز مطاعم جدة”، “ورشة سيارات بجدة”، أو “مركز أسنان في جدة”. الاعتماد على وكالة سيو في جدة يضمن لك استهداف هذه الشريحة بدقة."
    },
    {
      icon: <ShieldCheck size={32} className="text-[#FFB703]" />,
      title: "تعزيز الموثوقية والمكانة",
      desc: "تحظى المؤسسات التي تحجز مقاعدها في الخطوط الأولى على جوجل بتقدير أكبر ومصداقية أعلى لدى الجمهور المستهدف."
    },
    {
      icon: <BarChart3 size={32} className="text-[#FFB703]" />,
      title: "مردود مالي مستدام (ROI)",
      desc: "بالمقارنة مع الحملات الإعلانية الممولة، يمنحك السيو عائدًا استثماريًا ممتدًا وأكثر ثباتًا، إذ تواصل جهود التحسين جذب العملاء لفترات زمنية متعاقبة."
    },
    {
      icon: <Users size={32} className="text-[#FFB703]" />,
      title: "قراءة تطلعات العملاء",
      desc: "تتيح أدوات تحليل السيو للمنشآت استيعابًا أعمق لآلية بحث الجمهور عن السلع أو الخدمات، مما يسهل تلبية رغباتهم بكفاءة عالية."
    },
    {
      icon: <Trophy size={32} className="text-[#FFB703]" />,
      title: "تجاوز الشركات المنافسة",
      desc: "عبر تبني خطة سيو متكاملة، تستطيع التقدم بخطوات واسعة على منافسيك الذين يغفلون عن أهمية الاستثمار في تهيئة محركات البحث."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1B3D] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-16 text-right">
          <motion.h2 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-black text-[#FFB703] mb-6 leading-tight">
            لماذا تعد شركة سيو في جدة ضرورة لعملك؟
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
            تتميز جدة، بصفتها وجهة استثمارية وتجارية رئيسية، بقفزة رقمية هائلة. هذا التطور يفرز بالضرورة منافسة شرسة في الفضاء الإلكتروني. باختصار، غياب مشروعك عن صدارة نتائج محركات البحث يعني هدرًا لفرص استثنائية لا تُعوض:
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="bg-[#122c5e] border border-white/10 p-8 rounded-[2rem] shadow-xl hover:border-[#FFB703] transition-all flex flex-col justify-between group">
              <div>
                <div className="mb-6 p-4 w-fit bg-[#0B1B3D] rounded-2xl group-hover:bg-[#FFB703] group-hover:text-[#0B1B3D] transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#FFB703] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base font-normal">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. السكشن الثالث (سلايدر الصور المهيأ للسيو)
// ==========================================
const ImageSliderSection = () => {
  const slides = [
    {
      src: "/a.webp",
      title: "شريكك المثالي كأفضل شركة سيو بجدة لحصد الصدارة",
      alt: "شركة سيو بجدة لتصدر محركات البحث وتحسين ظهور المواقع الإلكترونية"
    },
    {
      src: "/b.webp",
      title: "تحليلات متقدمة ودراسة دقيقة للمنافسين في السوق السعودي",
      alt: "استراتيجيات تهيئة محركات البحث ودراسة الكلمات المفتاحية بجدة"
    },
    {
      src: "/c.webp",
      title: "تحسين وتطوير السيو التقني ومؤشرات السرعة وملاءمة الجوال",
      alt: "تحسين السيو الداخلي والتقني لمواقع الويب والمتاجر الإلكترونية"
    },
    {
      src: "/d.webp",
      title: "صناعة محتوى إبداعي متوافق بالكامل مع معايير خوارزميات جوجل",
      alt: "خدمات كتابة المحتوى المتوافق مع السيو في المملكة العربية السعودية"
    },
    {
      src: "/e.webp",
      title: "بناء باك لينك قوي ورفع سلطة الدومين بطرق آمنة وقانونية",
      alt: "خدمات بناء الروابط الخارجية والباك لينك لزيادة الثقة والمصداقية"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-24 px-6 bg-[#0B1B3D]/95 border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white"
          >
            نظرة شاملة على <span className="text-[#FFB703]">محاور عملنا</span>
          </motion.h2>
        </div>

        <div className="relative h-[400px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slides[currentIndex].src}
                alt={slides[currentIndex].alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-8 md:p-12 text-right z-20">
                <motion.h3 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-2xl md:text-4xl font-black text-[#FFB703] max-w-4xl leading-tight"
                >
                  {slides[currentIndex].title}
                </motion.h3>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={handlePrev}
            aria-label="الصورة السابقة"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 border border-white/10 text-white hover:bg-[#FFB703] hover:text-[#0B1B3D] transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={handleNext}
            aria-label="الصورة التالية"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 border border-white/10 text-white hover:bg-[#FFB703] hover:text-[#0B1B3D] transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`الانتقال للشريحة رقم ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "w-8 bg-[#FFB703]" : "w-3 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. السكشن الرابع (ما الذي نقدمه؟)
// ==========================================
const WhatWeOfferSection = () => {
  const offerPoints = [
    { title: "تحليل دقيق وشامل للموقع", desc: "فحص البنية التقنية ومعالجة الأخطاء البرمجية التي تمنع أرشفتك." },
    { title: "استهداف الكلمات المفتاحية الرابحة", desc: "تحديد الكلمات ذات العائد المالي والبحث العالي في السعودية." },
    { title: "تحسين وتهيئة السيو المحلي", desc: "ربط نشاطك التجاري بخرائط جوجل واستهداف عملاء جدة بدقة." },
    { title: "كتابة محتوى سيو احترافي", desc: "صياغة مقالات وصفحات هبوط جذابة ومتوافقة مع خوارزميات البحث." },
    { title: "بناء الروابط الخلفية الآمنة", desc: "الحصول على باك لينك عالي الجودة لرفع موثوقية موقعك لدى جوجل." }
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1B3D] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 space-y-8 text-right">
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-black text-[#FFB703] mb-6 leading-tight">
              ما الذي نقدمه لنجاح مشروعك الرقمي؟
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              نحن لا نعتمد على الحلول المؤقتة، بل نبني لك منظومة تسويق عبر محركات البحث متكاملة ومستدامة تناسب خصوصية السوق السعودي وتلبي تطلعات عملائك في كل مدينة وبشكل خاص في جدة.
            </p>
          </motion.div>
          <div className="space-y-4">
            {offerPoints.map((point, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#122c5e] border border-white/5 hover:border-[#FFB703]/50 transition-all"
              >
                <CheckCircle2 size={24} className="text-[#FFB703] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{point.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 relative w-full h-[350px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-[#122c5e]">
          <Image 
            src="/Saudi.webp" 
            alt="خدمات استراتيجيات السيو وتحسين محركات البحث في السعودية" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. السكشن الخامس (عداد الأرقام المميز)
// ==========================================
const CounterItem = ({ end, label, icon, suffix = "+" }: { end: number; label: string; icon: React.ReactNode; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="bg-[#122c5e]/80 border border-white/10 hover:border-[#FFB703] p-8 rounded-[2rem] shadow-xl text-center transition-all duration-300 hover:-translate-y-2 group">
      <div className="mx-auto mb-6 p-4 w-fit bg-[#0B1B3D] rounded-2xl text-[#FFB703] group-hover:bg-[#FFB703] group-hover:text-[#0B1B3D] transition-colors duration-300 shadow-md">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-wider">
        <span>{count.toLocaleString()}</span>
        <span className="text-[#FFB703]">{suffix}</span>
      </div>
      <p className="text-gray-300 font-bold text-base">{label}</p>
    </div>
  );
};

const StatsCounterSection = () => {
  const stats = [
    { end: 150, label: "موقع ومشروع مُميز", icon: <Globe size={32} /> },
    { end: 120, label: "عميل راضٍ ومتصدر", icon: <Smile size={32} /> },
    { end: 350, label: "كلمة مفتاحية بالصدارة", icon: <TrendingUp size={32} /> },
    { end: 8, label: "سنوات من الخبرة", icon: <Award size={32} />, suffix: "" },
    { end: 24, label: "دعم فني ومتابعة مستمرة", icon: <Clock size={32} />, suffix: "/7" }
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1B3D] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#FFB703] mb-4"
          >
            أرقام تتحدث عن إنجازاتنا
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            نضع بين يديك خبرة حقيقية مترجمة في لغة الأرقام والنتائج المثبتة على أرض الواقع في السوق السعودي والخليجي.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <CounterItem 
              key={index} 
              end={stat.end} 
              label={stat.label} 
              icon={stat.icon} 
              suffix={stat.suffix} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. السكشن السادس (خدمات السيو المبعثرة والساطعة)
// ==========================================
const ScatteredServicesSection = () => {
  const servicesList = [
    { title: "بحث الكلمات المفتاحية", eng: "Keyword Research", icon: <Search size={28} className="text-[#FFB703]" />, desc: "تحديد دقيق لأكثر الكلمات ربحية وبحثاً في السوق السعودي." },
    { title: "السيو الداخلي", eng: "On-Page SEO", icon: <FileText size={28} className="text-[#FFB703]" />, desc: "تحسين بنية المحتوى والعناوين ليتوافق تماماً مع محركات البحث." },
    { title: "السيو الخارجي", eng: "Off-Page SEO", icon: <Link2 size={28} className="text-[#FFB703]" />, desc: "بناء شبكة روابط قوية ترفع من سلطة وثقة موقعك." },
    { title: "السيو التقني", eng: "Technical SEO", icon: <Settings size={28} className="text-[#FFB703]" />, desc: "معالجة سرعة الموقع والأخطاء البرمجية والأرشفة." },
    { title: "سيو سلة", eng: "Salla SEO", icon: <ShoppingCart size={28} className="text-[#FFB703]" />, desc: "تحسين متاجر سلة لزيادة الظهور والمبيعات المباشرة." },
    { title: "سيو النشاط التجاري", eng: "Local SEO", icon: <MapPin size={28} className="text-[#FFB703]" />, desc: "التصدر في خرائط جوجل واستهداف الزبائن محلياً بجدة." },
    { title: "سيو المتاجر الإلكترونية", eng: "E-Commerce SEO", icon: <Store size={28} className="text-[#FFB703]" />, desc: "مضاعفة مبيعات متجرك الإلكتروني عبر استهداف عملاء الشراء." },
    { title: "سيو اليوتيوب", eng: "Youtube SEO", icon: <Video size={28} className="text-[#FFB703]" />, desc: "تصدر فيديوهاتك نتائج البحث على يوتيوب وجوجل معاً." }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#061026] border-t border-white/10 text-white overflow-hidden">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#FFB703]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-[#FFB703]/15 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold shadow-sm">
            <Sparkles size={16} /> خدماتنا المتكاملة
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight">
            حلول <span className="text-[#FFB703]">السيو الاحترافية</span> لنمو متصاعد
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            نقدم لك باقة شاملة ومدروسة بعناية لتغطية كافة جوانب تهيئة محركات البحث، بتصميم عصري وكروت مبعثرة وحركة تفاعلية قوية.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => {
            const scatterOffsets = [
              "translate-y-0", "translate-y-4 lg:-translate-y-6", 
              "translate-y-0", "translate-y-2 lg:translate-y-6",
              "lg:-translate-y-4", "translate-y-0", 
              "lg:translate-y-4", "translate-y-0"
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ scale: 1.05, y: -10, rotate: 0, transition: { duration: 0.3 } }}
                className={`relative group bg-gradient-to-b from-[#122c5e]/90 to-[#0B1B3D]/95 border border-white/15 hover:border-[#FFB703] p-7 rounded-[2rem] shadow-2xl flex flex-col justify-between transition-all duration-300 ${scatterOffsets[index % scatterOffsets.length]}`}
              >
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FFB703] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_12px_#FFB703]" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 bg-[#0B1B3D] border border-white/10 rounded-2xl group-hover:bg-[#FFB703] group-hover:text-[#0B1B3D] group-hover:border-[#FFB703] transition-all duration-300 shadow-lg">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-black tracking-widest text-[#FFB703]/80 uppercase bg-[#FFB703]/10 px-3 py-1 rounded-full border border-[#FFB703]/20">
                      {service.eng}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#FFB703] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#FFB703]">
                  <span>اكتشف الخدمة</span>
                  <ExternalLink size={16} className="transform transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. السكشن السابع (جدول المقارنة المُصحح تماماً)
// ==========================================
const ComparisonTableSection = () => {
  const tableData = [
    { feature: "النتائج والاستمرارية", seo: "مستدامة وتستمر لسنوات طويلة مجاناً", ads: "تتوقف فور انتهاء الميزانية المالية" },
    { feature: "ثقة العملاء والمصداقية", seo: "ثقة عالية جداً لأنك بصدارة النتائج الطبيعية", ads: "يعلم المستخدم أنها إعلانات ممولة" },
    { feature: "عائد الاستثمار (ROI)", seo: "عائد مالي طويل الأجل ومضاعف", ads: "مكلف على المدى الطويل ومتأرجح" },
    { feature: "استهداف السوق المحلي", seo: "دقيق واحترافي لمدن مثل جدة والسعودية", ads: "محدد بنطاق الحملة المؤقتة" },
    { feature: "م معدل النقر والتحويل (CTR)", seo: "يستحوذ على النصيب الأكبر من النقرات", ads: "نسبة أقل مقارنة بالنتائج الأولى الطبيعية" }
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1B3D] border-t border-white/10 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-[#FFB703]/15 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold">
            <BarChart3 size={16} /> مقارنة شاملة
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            لماذا تختار <span className="text-[#FFB703]">السيو (SEO)</span> بدلاً من الإعلانات التقليدية؟
          </h2>
          <p className="text-gray-300 text-lg">
            جدول تفصيلي يوضح الفرق الجوهري بين الاستثمار طويل الأجل في محركات البحث والإعلانات الممولة المؤقتة.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[2rem] border border-white/15 shadow-2xl bg-[#122c5e]/60 backdrop-blur-md">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-[#0B1B3D] border-b border-white/15 text-[#FFB703] text-lg font-black">
                <th className="p-6 md:p-8">وجه المقارنة</th>
                <th className="p-6 md:p-8 bg-[#FFB703]/10 border-x border-white/10">تحسين محركات البحث (SEO)</th>
                <th className="p-6 md:p-8">الإعلانات الممولة (PPC)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm md:text-base font-normal">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-6 md:p-8 font-bold text-white flex items-center gap-3">
                    <Sparkles size={18} className="text-[#FFB703] flex-shrink-0" /> {row.feature}
                  </td>
                  <td className="p-6 md:p-8 bg-[#FFB703]/5 border-x border-white/10 text-gray-100 font-semibold">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" /> 
                      <span>{row.seo}</span>
                    </div>
                  </td>
                  <td className="p-6 md:p-8 text-gray-300">
                    <div className="flex items-center gap-2">
                      <XCircle size={20} className="text-red-400 flex-shrink-0" /> 
                      <span>{row.ads}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 8. السكشن الثامن (الأسئلة الشائعة)
// ==========================================
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "متى تظهر نتائج تحسين محركات البحث (SEO) لموقعي في جدة؟", 
      a: "يبدأ ظهور التحسينات المبدئية والأرشفة الصحيحة خلال أول شهرين إلى 3 أشهر، بينما تظهر النتائج الكبرى والوصول للصدارة للكلمات التنافسية العالية خلال 4 إلى 6 أشهر حسب حالة الموقع التاريخية." 
    },
    { 
      q: "هل خدمة السيو تضمن لي الظهور في الصفحة الأولى لجوجل نهائياً؟", 
      a: "نعم، نعتمد على استراتيجيات برمجية وتقنية ومحتوى متوافق 100% مع خوارزميات جوجل الرسمية لضمان حجز مقعدك في الصدارة والمحافظة عليه باستمرار." 
    },
    { 
      q: "هل تقدمون خدمات السيو للمتاجر الإلكترونية وسلة ومنصات الإيبوك؟", 
      a: "نعم بالتأكيد، نقدم خدمات مخصصة لسيو المتاجر الكبرى ومنصة سلة (Salla) لرفع مبيعات المتاجر وظهور المنتجات مباشرة أمام العملاء الجادين بالشراء." 
    },
    { 
      q: "ما هو الفرق بين السيو المحلي (Local SEO) والسيو العام؟", 
      a: "السيو المحلي يركز بالدرجة الأولى على استهداف العملاء ضمن نطاق جغرافي محدد (مثل مدينة جدة والمنطقة الغربية) وظهور نشاطك التجاري في خرائط جوجل وبحث المحمول بدقة متناهية." 
    },
    { 
      q: "كيف أبدأ معكم وما هي الخطوة الأولى للتعاون؟", 
      a: "الخطوة الأولى بسيطة جداً، تواصل معنا عبر زر الواتساب الموجود في الموقع وسنقوم بعمل فحص وتحليل مبدئي مجاني لموقعك لنقترح عليك خطة العمل المناسبة." 
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#061026] border-t border-white/10 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-[#FFB703]/15 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold">
            <HelpCircle size={16} /> استفسارات شائعة
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            الأسئلة <span className="text-[#FFB703]">الشائعة</span>
          </h2>
          <p className="text-gray-300 text-lg">
            إجابات واضحة ومباشرة عن كل ما يدور في ذهنك حول خدمات السيو وتصدر محركات البحث.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-[#122c5e]/80 border border-white/15 rounded-2xl overflow-hidden shadow-lg transition-all">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-right flex items-center justify-between font-bold text-lg md:text-xl text-white hover:text-[#FFB703] transition-colors"
                >
                  <ChevronDown size={22} className={`transform transition-transform duration-300 text-[#FFB703] ${isOpen ? "rotate-180" : ""}`} />
                  <span>{faq.q}</span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-gray-300 text-base leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 9. المكون الأساسي لصفحة الخدمة
// ==========================================
export default function JeddahSeoServicePage() {
  return (
    <main className="font-cairo bg-[#0B1B3D] text-white min-h-screen" dir="rtl">
      <HeroSection />
      <BusinessNecessitySection />
      <ImageSliderSection />
      <WhatWeOfferSection />
      <StatsCounterSection />
      <ScatteredServicesSection />
      <ComparisonTableSection />
      <FaqSection />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}