"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, MonitorSmartphone, Code2, Rocket, Search, ShieldCheck, 
  CheckSquare, Globe, ShoppingCart, Stethoscope, Building2, Plane, 
  GraduationCap, Layers, Cpu, Server, Zap, ChevronDown, Check, X,
  LineChart, Star, Settings, MessageSquare, LayoutTemplate, Calculator,
  Clock, ArrowLeft, Target, Fingerprint
} from "lucide-react";

// ==========================================
// 1. البيانات والمحتوى الموجه للـ SEO والمنافسة
// ==========================================

const sharjahAreas = [
  "المجاز", "النهدة", "الخان", "القاسمية", "مويلح", "الصناعية", "التعاون", "الذيد", "كلباء", "خورفكان", "دبي", "أبوظبي", "العين"
];

const websiteTypes = [
  { icon: Building2, title: "تصميم موقع شركة", desc: "تصميم موقع احترافي يعكس هوية شركتك، ويعزز الثقة مع عملائك في السوق الإماراتي." },
  { icon: ShoppingCart, title: "تصميم متجر إلكتروني الشارقة", desc: "تصميم متجر إلكتروني WooCommerce أو مخصص مع ربط بوابات الدفع وشركات الشحن." },
  { icon: Stethoscope, title: "المواقع الطبية", desc: "منصات للعيادات والمستشفيات مع نظام حجز مواعيد وإدارة ملفات المرضى." },
  { icon: Layers, title: "المواقع العقارية", desc: "عرض العقارات وتصميم بوابات إلكترونية تفاعلية بخرائط متقدمة." },
  { icon: Plane, title: "المواقع السياحية", desc: "أنظمة حجز رحلات وتصميم موقع متعدد اللغات لاستهداف السياح." },
  { icon: GraduationCap, title: "المنصات التعليمية", desc: "تطوير مواقع تعليمية عن بعد (LMS) متوافقة مع أحدث المعايير." }
];

const executionSteps = [
  { num: "01", title: "تحليل السوق المحلي", desc: "دراسة المنافسين في الشارقة وتحديد الجمهور المستهدف بدقة." },
  { num: "02", title: "UX/UI Design", desc: "رسم واجهات مستخدم (UI Design) وهندسة تجربة (UX Design) مبتكرة." },
  { num: "03", title: "برمجة مواقع نظيفة", desc: "تكويد الموقع بأحدث التقنيات ليكون تصميم موقع سريع ومستقر." },
  { num: "04", title: "فحص Core Web Vitals", desc: "اختبارات صارمة للسرعة والأمان والتوافقية مع الأجهزة المحمولة." },
  { num: "05", title: "الإطلاق الفعلي", desc: "رفع الموقع وتدريب فريقك على لوحة التحكم بالكامل." }
];

const techComparison = [
  { 
    feature: "سرعة التحميل (Core Web Vitals)", 
    next: "صاروخية (SSR/SSG)", 
    laravel: "سريعة جداً", 
    wp: "متوسطة (تعتمد على الإضافات)" 
  },
  { 
    feature: "الحماية من الاختراقات", 
    next: "أمان مطلق", 
    laravel: "نظام حماية مدمج قوي", 
    wp: "تتطلب صيانة وإضافات أمان" 
  },
  { 
    feature: "التوافق مع SEO", 
    next: "المعيار الذهبي لجوجل", 
    laravel: "ممتاز مع التهيئة", 
    wp: "جيد جداً عبر RankMath" 
  },
  { 
    feature: "أفضل استخدام", 
    next: "المنصات الكبرى والمتاجر الضخمة", 
    laravel: "الأنظمة المعقدة والبوابات", 
    wp: "المدونات والمواقع البسيطة" 
  }
];

const pricingPackages = [
  {
    name: "موقع الشركات الناشئة",
    price: "2,500 درهم",
    target: "تصميم موقع للشركات الصغيرة",
    features: ["تصميم موقع متوافق مع الجوال", "لوحة تحكم لإدارة المحتوى", "ربط مع WhatsApp", "دعم فني 3 أشهر"]
  },
  {
    name: "باقة الأعمال الاحترافية",
    price: "4,800 درهم",
    target: "الأكثر مبيعاً في الشارقة",
    isPopular: true,
    features: ["تصميم موقع عربي وإنجليزي", "تصميم موقع متوافق مع SEO", "سرعة تحميل خيالية", "دعم فني 6 أشهر"]
  },
  {
    name: "المتاجر والبوابات",
    price: "طلب تسعير",
    target: "تصميم متاجر إلكترونية",
    features: ["بناء بـ Next.js أو Laravel", "بوابات الدفع الإلكتروني", "لوحات تحكم متعددة الصلاحيات", "أمان سيبراني كامل"]
  }
];

// قائمة موسعة لتغطية كافة الـ Long Tail Keywords والاعتراضات
const faqs = [
  { q: "لماذا أنتم أفضل شركة تصميم مواقع الكترونية في الشارقة ؟", a: "لأننا في Unique لا نستخدم قوالب جاهزة مكررة. نعتمد أسلوب البرمجة المخصصة (Custom Development) ونركز على معايير السرعة (Core Web Vitals) وتجربة المستخدم (UX Design) لضمان تفوقك على منافسيك في الإمارات." },
  { q: "كم تكلفة تصميم موقع في الشارقة؟", a: "تتراوح أسعار تصميم المواقع في الشارقة لدينا بين 2500 درهم للمواقع التعريفية البسيطة، وتصل إلى تكاليف أعلى للمتاجر الإلكترونية الضخمة والأنظمة المعقدة المبرمجة بـ Laravel أو Next.js. يمكنك استخدام حاسبة التكلفة في صفحتنا لأخذ فكرة دقيقة." },
  { q: "ما هي التقنية الأفضل: تصميم موقع WordPress الشارقة أم Laravel؟", a: "إذا كنت تبحث عن مدونة أو موقع تعريفي بسيط وسهل الإدارة بتكلفة منخفضة، فووردبريس هو الخيار. أما إذا كنت تحتاج إلى تصميم بوابات إلكترونية، أمان عالي، وتخصيص دقيق للمنطق البرمجي، فإن تصميم موقع Laravel الشارقة هو الحل الأمثل." },
  { q: "هل تقدمون تصميم متجر إلكتروني الشارقة؟", a: "نعم، نصمم متاجر إلكترونية احترافية سواء كانت عبر تصميم متجر إلكتروني WooCommerce أو بناء متاجر مخصصة بـ Next.js لضمان سرعات تحميل فائقة ترفع من معدل التحويل (Conversion Rate)." },
  { q: "هل يشمل العرض تصميم موقع متعدد اللغات؟", a: "بالتأكيد، نحن متخصصون في تصميم موقع عربي وإنجليزي مع ضبط احترافي لاتجاهات الشاشة (RTL و LTR) لضمان تجربة مستخدم مثالية لجميع شرائح المجتمع الإماراتي." },
  { q: "كيف تضمنون تصميم موقع متوافق مع SEO؟", a: "نبني هيكلية الموقع (Site Architecture) وأكواد الـ Schema Markup، ونحسن سرعة التحميل ونضغط الصور، مما يجعل الموقع محبوباً لعناكب بحث جوجل وجاهزاً لتصدر الكلمات المفتاحية." },
  { q: "كم يستغرق تصميم موقع للشركات؟", a: "يستغرق تصميم موقع احترافي للشركات عادة من أسبوعين إلى 3 أسابيع، بينما قد تستغرق المتاجر الإلكترونية والأنظمة المخصصة من شهر إلى شهرين حسب التعقيد." },
  { q: "هل تقدمون الدعم الفني بعد تسليم الموقع؟", a: "نعم، كل مشروع نسلمه يأتي مع فترة ضمان ودعم فني مجاني، بالإضافة إلى باقات صيانة سنوية مخصصة لضمان استقرار وتحديث منصتك بشكل دائم." },
  { q: "هل أحصل على تصميم موقع متوافق مع الجوال (Responsive Website)؟", a: "نسبة 100%. نتبع نهج (Mobile-First Design) لضمان أن الموقع يعمل بسلاسة وسرعة على كافة الهواتف الذكية والأجهزة اللوحية." },
  { q: "هل أستلم لوحة تحكم لإدارة المحتوى؟", a: "نعم، يتم تسليمك تصميم موقع مع لوحة تحكم سهلة الاستخدام باللغة العربية والإنجليزية، مع تدريب شامل لك ولفريقك على كيفية تعديل النصوص والصور والمنتجات." }
];

// ==========================================
// 2. المكون الرئيسي والتصميم (Neo-Brutalism + Black/Red/White)
// ==========================================

export default function SharjahWebDesignUltimate() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // حاسبة التكلفة (Interactive Component)
  const [calcType, setCalcType] = useState(2500);
  const [calcLang, setCalcLang] = useState(0);
  const [calcSeo, setCalcSeo] = useState(0);
  const totalCost = calcType + calcLang + calcSeo;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // تأثيرات Neo-Brutalism القوية
  const brutalShadow = "shadow-[12px_12px_0px_0px_#dc2626] hover:shadow-[16px_16px_0px_0px_#dc2626] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300";
  const brutalShadowWhite = "shadow-[12px_12px_0px_0px_#ffffff] hover:shadow-[16px_16px_0px_0px_#ffffff] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300";

  return (
    <main className="w-full min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden" dir="rtl">
      
      {/* خلفية شبكية صلبة (Grid) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 px-6 z-10 border-b-8 border-red-600">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-8 flex flex-col space-y-8">
              <div className="inline-block bg-white text-black font-black px-6 py-2 uppercase tracking-widest text-sm md:text-base border-4 border-black w-max shadow-[6px_6px_0px_0px_#dc2626]">
                وكالة Unique للحلول الرقمية
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tight">
                أقوى <span className="text-red-600 inline-block bg-white px-2 mt-2 border-4 border-red-600 shadow-[8px_8px_0_#dc2626]">شركة تصميم مواقع الكترونية في الشارقة</span> {/* 1 */}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-bold max-w-2xl border-r-8 border-red-600 pr-6 leading-relaxed">
                تبحث عن شركة تصميم مواقع الكترونية في الشارقة تقودك للقمة؟ نحن نبني منصات تتخطى التوقعات، تدمج بين هندسة الـ UX/UI الخارقة والأداء السريع لمضاعفة مبيعاتك في السوق الإماراتي. {/* 2 */}
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                <a href="#calculator" className={`bg-red-600 text-white font-black text-xl px-12 py-6 border-4 border-white flex items-center gap-4 ${brutalShadowWhite}`}>
                  احسب تكلفة مشروعك <Calculator className="w-8 h-8" />
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4 relative hidden lg:block">
               <div className="h-[600px] border-4 border-white bg-[#111] p-8 shadow-[20px_20px_0px_0px_#dc2626] flex flex-col justify-between relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-red-600 rounded-bl-[100px] -z-0"></div>
                 <Code2 className="w-20 h-20 text-white relative z-10" />
                 <div className="relative z-10">
                   <h3 className="text-5xl font-black text-white leading-tight mb-4">UX/UI<br/><span className="text-red-600">Design</span></h3>
                   <p className="text-xl font-bold text-gray-400">إبداع بلا حدود لشركتك.</p>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= LOCAL SEO TICKER ================= */}
      <div className="w-full bg-white border-b-8 border-black flex items-center overflow-hidden relative z-10 py-6">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] text-black font-black text-2xl uppercase tracking-widest">
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              {sharjahAreas.map((area, idx) => (
                <span key={`${i}-${idx}`} className="mx-8 flex items-center">
                  تصميم مواقع {area} <span className="mx-8 text-red-600">✦</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ================= WHY SHARJAH ================= */}
      <section className="py-24 px-6 relative z-10 bg-[#111]">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
            لماذا تحتاج إلى <span className="text-red-600">شركة تصميم مواقع الكترونية في الشارقة</span> لنمو أعمالك؟ {/* 3 */}
          </h2>
          <p className="text-2xl font-bold text-gray-300 max-w-4xl mx-auto leading-relaxed border-b-4 border-red-600 pb-12 mb-16">
            سوق الإمارات لا يرحم المتأخرين رقمياً. بناء هوية قوية عبر تصميم موقع احترافي للشركات هو بوابتك لاكتساب ثقة العملاء والسيطرة على نتائج البحث في دبي والشارقة.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Target, t: "تغطية محلية شاملة", d: "استهداف دقيق لعملاء الشارقة والإمارات." },
              { icon: Clock, t: "مبيعات 24/7", d: "موقعك هو موظف مبيعاتك الذي لا ينام أبداً." },
              { icon: ShieldCheck, t: "بناء الموثوقية", d: "تصميم موقع شركة يعكس حجم واحترافية كيانك." }
            ].map((item, i) => (
              <div key={i} className={`bg-black text-white p-10 border-4 border-white flex flex-col items-center justify-center text-center ${brutalShadow}`}>
                <item.icon className="w-16 h-16 text-red-600 mb-6" />
                <h3 className="text-2xl font-black mb-4">{item.t}</h3>
                <p className="text-gray-400 font-bold text-lg">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY UNIQUE ================= */}
      <section className="py-24 px-6 relative z-10 bg-white text-black border-y-8 border-red-600">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-8 border-black pb-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase">
              ما الذي يجعلنا أقوى <span className="text-red-600 drop-shadow-[4px_4px_0_#000000]">شركة تصميم مواقع الكترونية في الشارقة</span> ؟ {/* 4 */}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={`bg-black text-white p-12 border-8 border-red-600 ${brutalShadow}`}>
              <Zap className="w-20 h-20 mb-8 text-white" />
              <h3 className="text-4xl font-black mb-6">أداء يحطم المقاييس</h3>
              <p className="text-xl font-bold text-gray-300 leading-relaxed">بصفتنا شركة برمجة مواقع محترفة، لا نستخدم القوالب الجاهزة البطيئة. نكتب أكوادنا من الصفر لضمان تصميم موقع سريع يتوافق تماماً مع متطلبات (Core Web Vitals).</p>
            </div>
            <div className={`bg-red-600 text-white p-12 border-8 border-black ${brutalShadowWhite}`}>
              <Fingerprint className="w-20 h-20 mb-8 text-black" />
              <h3 className="text-4xl font-black mb-6 text-black">بصمة بصرية فريدة</h3>
              <p className="text-xl font-bold text-white leading-relaxed">فريقنا المتخصص في الـ UI/UX يخلق تصاميم تأسر العين وتجبر المستخدم على التفاعل. نحن شركة تطوير مواقع تحول زوارك إلى عملاء فعليين.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 px-6 relative z-10 bg-[#111]">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16">
            خدمات <span className="text-red-600">شركة تصميم مواقع الكترونية في الشارقة</span> الأوسع نطاقاً. {/* 5 */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code2, t: "برمجة مواقع" },
              { icon: LayoutTemplate, t: "UX / UI Design" },
              { icon: Search, t: "تصميم موقع متوافق مع SEO" },
              { icon: Globe, t: "تصميم موقع متعدد اللغات" }
            ].map((srv, i) => (
              <div key={i} className={`bg-black p-10 border-4 border-white group ${brutalShadow}`}>
                <srv.icon className="w-16 h-16 text-red-600 mb-6 group-hover:scale-125 transition-transform" />
                <h3 className="text-2xl font-black text-white">{srv.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WEBSITE TYPES ================= */}
      <section className="py-24 px-6 relative z-10 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-right">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              كـ <span className="text-red-600">شركة تصميم مواقع الكترونية في الشارقة</span>، نصمم كافة المنصات: {/* 6 */}
            </h2>
            <div className="w-48 h-4 bg-red-600 shadow-[4px_4px_0_#ffffff]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {websiteTypes.map((type, i) => (
              <div key={i} className={`bg-[#111] p-10 border-4 border-white relative overflow-hidden group ${brutalShadow}`}>
                <div className="absolute top-0 left-0 w-32 h-32 bg-red-600 rounded-br-full -z-0 transition-transform group-hover:scale-150 duration-500"></div>
                <type.icon className="w-12 h-12 text-white relative z-10 mb-6 group-hover:text-black transition-colors" />
                <h3 className="text-3xl font-black text-white mb-4 relative z-10">{type.title}</h3>
                <p className="text-lg font-bold text-gray-400 relative z-10">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH COMPARISON ================= */}
      <section className="py-24 px-6 relative z-10 bg-white text-black border-y-8 border-red-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-center uppercase">التقنية المناسبة لمشروعك</h2>
          <p className="text-2xl font-bold text-center text-gray-600 mb-16">
            مقارنة التقنيات من أفضل <span className="text-red-600 font-black">شركة تصميم مواقع الكترونية في الشارقة</span> {/* 7 */}
          </p>
          <div className="overflow-x-auto border-8 border-black shadow-[16px_16px_0px_0px_#dc2626] bg-white">
            <table className="w-full text-right border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-black text-white border-b-8 border-black">
                  <th className="p-8 font-black text-2xl">المعيار</th>
                  <th className="p-8 font-black text-2xl border-r-4 border-white text-red-500">تصميم موقع Next.js الشارقة</th>
                  <th className="p-8 font-black text-2xl border-r-4 border-white">تصميم موقع Laravel الشارقة</th>
                  <th className="p-8 font-black text-2xl border-r-4 border-white text-gray-400">تصميم موقع WordPress الشارقة</th>
                </tr>
              </thead>
              <tbody className="text-xl font-bold">
                {techComparison.map((row, i) => (
                  <tr key={i} className="border-b-4 border-black hover:bg-gray-100">
                    <td className="p-8 text-red-600 font-black bg-gray-50">{row.feature}</td>
                    <td className="p-8 border-r-4 border-black">{row.next}</td>
                    <td className="p-8 border-r-4 border-black">{row.laravel}</td>
                    <td className="p-8 border-r-4 border-black text-gray-600">{row.wp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= COST CALCULATOR (Interactive Tool) ================= */}
      <section id="calculator" className="py-24 px-6 relative z-10 bg-[#111]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 text-center">حاسبة تكلفة تصميم موقع</h2>
          <p className="text-xl font-bold text-gray-400 text-center mb-16">احصل على تقدير مبدئي لمشروعك فوراً.</p>
          
          <div className={`bg-black border-4 border-red-600 p-8 md:p-12 ${brutalShadow}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-2xl font-black text-white mb-4">نوع الموقع:</label>
                  <select 
                    onChange={(e) => setCalcType(Number(e.target.value))}
                    className="w-full bg-white text-black font-bold text-xl p-4 border-4 border-white outline-none cursor-pointer"
                  >
                    <option value={2500}>موقع تعريفي للشركات (من 2,500 درهم)</option>
                    <option value={5000}>متجر إلكتروني احترافي (من 5,000 درهم)</option>
                    <option value={10000}>بوابة إلكترونية / نظام مخصص (من 10,000 درهم)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-2xl font-black text-white mb-4">اللغات:</label>
                  <select 
                    onChange={(e) => setCalcLang(Number(e.target.value))}
                    className="w-full bg-white text-black font-bold text-xl p-4 border-4 border-white outline-none cursor-pointer"
                  >
                    <option value={0}>لغة واحدة (عربي أو إنجليزي)</option>
                    <option value={1000}>تصميم موقع عربي وإنجليزي (+1,000 درهم)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-2xl font-black text-white mb-4">باقة الـ SEO المتقدمة:</label>
                  <select 
                    onChange={(e) => setCalcSeo(Number(e.target.value))}
                    className="w-full bg-white text-black font-bold text-xl p-4 border-4 border-white outline-none cursor-pointer"
                  >
                    <option value={0}>تهيئة أساسية لمحركات البحث (مجاناً)</option>
                    <option value={1500}>تهيئة متقدمة + بناء محتوى SEO (+1,500 درهم)</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-red-600 p-10 flex flex-col justify-center items-center text-center border-4 border-white shadow-[8px_8px_0_#ffffff]">
                <h3 className="text-3xl font-black text-black mb-6 uppercase">التكلفة التقديرية</h3>
                <div className="text-6xl md:text-7xl font-black text-white mb-8">{totalCost} <span className="text-2xl">درهم</span></div>
                <p className="text-lg font-bold text-black mb-8">هذا تقدير مبدئي لتكلفة تصميم موقع، تواصل معنا للحصول على عرض سعر تصميم موقع نهائي.</p>
                <a href="https://wa.me/00201505388060" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-black text-xl px-8 py-4 w-full border-4 border-black hover:bg-white hover:text-black transition-colors">
                  اطلب العرض الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING PACKAGES ================= */}
      <section className="py-24 px-6 relative z-10 bg-black">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16 text-center">
            كم تكلفة التعاقد مع <span className="text-red-600">شركة تصميم مواقع الكترونية في الشارقة</span> ؟ {/* 8 */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
            {pricingPackages.map((pkg, i) => (
              <div key={i} className={`bg-[#111] border-8 ${pkg.isPopular ? 'border-red-600 scale-105 z-10' : 'border-white'} p-10 relative flex flex-col ${pkg.isPopular ? brutalShadow : brutalShadowWhite}`}>
                {pkg.isPopular && <span className="absolute -top-6 right-10 bg-red-600 text-white font-black px-6 py-2 border-4 border-black text-lg">الأفضل قيمة</span>}
                <h3 className="text-3xl font-black text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 font-bold mb-8 text-lg min-h-[60px]">{pkg.target}</p>
                <div className="text-5xl font-black text-red-600 mb-10">{pkg.price}</div>
                <ul className="space-y-6 mb-10 flex-1">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-white font-bold text-xl">
                      <Check className="w-8 h-8 text-red-600 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`w-full text-center font-black text-2xl py-6 border-4 ${pkg.isPopular ? 'bg-red-600 text-white border-white hover:bg-red-700' : 'bg-white text-black border-black hover:bg-gray-200'} transition-colors`}>
                  احجز خطتك
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES / NUMBERS ================= */}
      <section className="py-24 px-6 relative z-10 bg-red-600 border-y-8 border-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase drop-shadow-[4px_4px_0_#ffffff]">
            نتائج حقيقية حققتها <span className="text-white">شركة تصميم مواقع الكترونية في الشارقة</span> {/* 9 */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className={`bg-black p-12 border-4 border-white ${brutalShadowWhite}`}>
              <span className="block text-7xl font-black text-red-600 mb-4">+320%</span>
              <span className="text-2xl font-bold text-white">ارتفاع في التحويلات (Conversion)</span>
            </div>
            <div className={`bg-white p-12 border-4 border-black ${brutalShadow}`}>
              <span className="block text-7xl font-black text-black mb-4">0.6s</span>
              <span className="text-2xl font-bold text-red-600">سرعة تحميل قياسية لمواقعنا</span>
            </div>
            <div className={`bg-black p-12 border-4 border-white ${brutalShadowWhite}`}>
              <span className="block text-7xl font-black text-red-600 mb-4">#1</span>
              <span className="text-2xl font-bold text-white">تصدر الكلمات المفتاحية للعملاء</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEO & CORE WEB VITALS ================= */}
      <section className="py-24 px-6 relative z-10 bg-[#111]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white">
                معايير الـ SEO التي تطبقها <span className="text-red-600">شركة تصميم مواقع الكترونية في الشارقة</span> {/* 10 */}
              </h2>
              <p className="text-2xl font-bold text-gray-300 leading-relaxed border-r-8 border-red-600 pr-6">
                كل موقع تطلقه شركة تصميم مواقع الكترونية في الشارقة يكون مزوداً بهيكلة Schema صحيحة، تحسينات Core Web Vitals صارمة، وسرعة خوادم تجعل موقعك المعشوق الأول لخوارزميات جوجل.
              </p>
              <ul className="space-y-4">
                {["ضغط الصور التلقائي (WebP)", "أكواد نظيفة بدون Bloatware", "تهيئة خرائط الموقع (Sitemap XML)", "تشفير SSL مجاني لحماية البيانات"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl font-bold text-white"><CheckSquare className="w-6 h-6 text-red-600" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full relative">
               <div className="aspect-square bg-red-600 border-8 border-white p-8 shadow-[16px_16px_0_#dc2626] transform rotate-3 flex flex-col justify-center items-center text-center">
                 <Search className="w-32 h-32 text-white mb-8" />
                 <span className="text-4xl font-black text-black bg-white px-6 py-2 border-4 border-black">SEO Optimized</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-24 px-6 relative z-10 bg-white text-black border-y-8 border-red-600">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center">خارطة طريق إطلاق موقعك</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {executionSteps.map((step, i) => (
              <div key={i} className={`bg-black text-white p-8 border-4 border-red-600 relative flex flex-col ${brutalShadow}`}>
                <span className="text-7xl font-black text-red-600 opacity-60 mb-4">{step.num}</span>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-lg font-bold text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 px-6 relative z-10 bg-black">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-16 text-center">
            لماذا نحن أفضل <span className="text-red-600">شركة تصميم مواقع الكترونية في الشارقة</span> ؟ {/* 11 */}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-4 border-white bg-[#111] overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-8 text-right flex justify-between items-center font-black text-2xl text-white hover:bg-red-600 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-8 h-8 flex-shrink-0 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="p-8 border-t-4 border-white bg-black text-xl font-bold text-gray-300 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section id="contact" className="py-32 px-6 relative z-10 bg-red-600 border-t-8 border-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000033_4px,transparent_4px),linear-gradient(to_bottom,#00000033_4px,transparent_4px)] bg-[size:80px_80px]"></div>
        <div className="container mx-auto max-w-5xl relative z-20 text-center">
          <h2 className="text-5xl md:text-[5.5rem] font-black text-white mb-10 uppercase drop-shadow-[8px_8px_0_#000000] leading-tight">
            ابدأ مشروعك مع <span className="text-black bg-white px-4 border-8 border-black inline-block mt-4">شركة تصميم مواقع الكترونية في الشارقة</span> الآن {/* 12 */}
          </h2>
          <p className="text-3xl font-black text-black bg-white inline-block px-10 py-6 mb-16 border-8 border-black shadow-[12px_12px_0px_0px_#000000]">
            احصل على استشارة مجانية وعرض سعر في أقل من 24 ساعة.
          </p>
          <a 
            href={`https://wa.me/00201505388060?text=${encodeURIComponent("مرحباً، أود الاستفسار عن تصميم موقع في الشارقة.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-auto bg-black text-white font-black text-4xl px-16 py-8 border-8 border-white flex items-center justify-center gap-6 w-max ${brutalShadowWhite} hover:bg-white hover:text-black transition-colors`}
          >
            <MessageSquare className="w-12 h-12" />
            تواصل معنا عبر واتساب
          </a>
        </div>
      </section>

      {/* MARQUEE ANIMATION */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        .animate-\\[marquee_30s_linear_infinite\\] {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}