"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, MonitorSmartphone, Code2, Rocket, Search, ShieldCheck, 
  CheckSquare, Globe, ShoppingCart, Stethoscope, Building2, Plane, 
  GraduationCap, Layers, Cpu, Server, Zap, ChevronDown, Check, X,
  LineChart, Star, Settings, MessageSquare, LayoutTemplate
} from "lucide-react";

// ==========================================
// بيانات الصفحة المتكاملة
// ==========================================

const newsTickerItems = [
  "🔥 تصميم موقع احترافي للشركات بأحدث التقنيات",
  "⚡ برمجة متاجر إلكترونية متكاملة مع بوابات الدفع KNET",
  "🚀 شركة تصميم مواقع الكترونية في الكويت بمعايير SEO العالمية",
  "📈 ضاعف مبيعاتك بنسبة 300% مع Unique",
  "💎 تصميم موقع Next.js الكويت بأعلى سرعة أداء",
  "🌐 تصميم موقع عربي وإنجليزي متوافق مع كافة الشاشات"
];

const websiteTypes = [
  { icon: Building2, title: "مواقع الشركات", desc: "تصميم موقع احترافي للشركات يعكس قوة علامتك التجارية في السوق الكويتي." },
  { icon: ShoppingCart, title: "المتاجر الإلكترونية", desc: "تصميم متجر إلكتروني في الكويت مجهز ببوابات الدفع (KNET) وإدارة المخزون." },
  { icon: Stethoscope, title: "المواقع الطبية", desc: "منصات للعيادات والمستشفيات مع أنظمة حجز مواعيد متقدمة." },
  { icon: Building2, title: "المواقع العقارية", desc: "عرض العقارات بأسلوب تفاعلي مع فلاتر بحث متقدمة وخرائط." },
  { icon: Plane, title: "المواقع السياحية", desc: "منصات حجز رحلات وفنادق بتجربة مستخدم تلهم المسافرين." },
  { icon: GraduationCap, title: "المنصات التعليمية", desc: "أنظمة إدارة تعلم (LMS) متكاملة للمدارس ومراكز التدريب." }
];

const projectSteps = [
  { num: "01", title: "التحليل والتخطيط", desc: "دراسة السوق الكويتي والمنافسين وتحديد الهيكل الأمثل للموقع." },
  { num: "02", title: "تصميم واجهة المستخدم (UI/UX)", desc: "رسم النماذج البصرية بهوية تناسب ذوق المستهلك في الكويت." },
  { num: "03", title: "البرمجة والتطوير", desc: "كتابة أكواد نظيفة تضمن سرعة وتجاوب الموقع بالكامل." },
  { num: "04", title: "الاختبار الشامل", desc: "فحص الأمان، السرعة، والتوافق مع جميع المتصفحات والأجهزة." },
  { num: "05", title: "الإطلاق والدعم", desc: "رفع الموقع على السيرفرات المباشرة مع تقديم دعم فني مستمر." }
];

const technologies = [
  { icon: Code2, title: "Next.js", label: "تصميم موقع Next.js الكويت", desc: "الخيار الأقوى للسرعة الفائقة والأداء المذهل والـ SEO." },
  { icon: Server, title: "Laravel", label: "شركة تصميم مواقع Laravel الكويت", desc: "لبناء أنظمة الويب المعقدة والمخصصة بدرجة أمان عالية." },
  { icon: LayoutTemplate, title: "WordPress", label: "شركة تصميم مواقع ووردبريس الكويت", desc: "أنظمة مرنة وسهلة الإدارة للمدونات والمواقع التعريفية." },
  { icon: Cpu, title: "React & Headless CMS", label: "أحدث التقنيات", desc: "لفصل الواجهة عن لوحة التحكم وتحقيق أقصى سرعة." }
];

const techComparison = [
  { feature: "السرعة والأداء", next: "فائق جداً (SSR)", laravel: "سريع جداً", wp: "متوسط (حسب الإضافات)" },
  { feature: "الحماية والأمان", next: "ممتاز", laravel: "ممتاز (مبني للحماية)", wp: "جيد (يتطلب تأمين مستمر)" },
  { feature: "التوافق مع SEO", next: "مثالي ومدمج", laravel: "مرن وقابل للتهيئة", wp: "عبر الإضافات (RankMath)" },
  { feature: "حجم المشروع", next: "المشاريع الضخمة", laravel: "الأنظمة المعقدة", wp: "المواقع المتوسطة والبسيطة" }
];

const pricingPackages = [
  {
    name: "الباقة الأساسية",
    price: "250 د.ك",
    desc: "مناسبة للشركات الناشئة لضمان تواجد رقمي قوي.",
    features: ["تصميم موقع متوافق مع الجوال", "لوحة تحكم أساسية", "دعم فني لمدة 3 أشهر", "ربط مع منصات التواصل"]
  },
  {
    name: "باقة الأعمال (الأكثر طلباً)",
    price: "450 د.ك",
    desc: "مثالية للشركات التي تبحث عن تصميم موقع احترافي للشركات.",
    features: ["تصميم موقع متعدد اللغات", "تصميم موقع عربي وإنجليزي", "تصميم موقع مع لوحة تحكم", "تهيئة لمحركات البحث (SEO)", "دعم فني 6 أشهر"]
  },
  {
    name: "الأنظمة والمتاجر",
    price: "حسب المتطلبات",
    desc: "برمجة خاصة وتطبيقات ويب معقدة تلبي احتياجاتك الدقيقة.",
    features: ["برمجة بـ Next.js أو Laravel", "بوابات دفع إلكترونية KNET", "لوحات تحكم متعددة الصلاحيات", "أمان سيبراني متقدم"]
  }
];

const features = [
  { icon: Search, title: "صديق لمحركات البحث", desc: "نحن شركة تصميم مواقع متوافقة مع SEO لضمان صدارتك في جوجل." },
  { icon: Zap, title: "سرعة تحميل صاروخية", desc: "بصفتنا شركة تصميم مواقع سريعة، نضمن تقييمات أداء تتخطى 95%." },
  { icon: ShieldCheck, title: "أمان وحماية عالية", desc: "تشفير البيانات وحماية ضد الثغرات (DDoS & SQL Injection)." },
  { icon: MonitorSmartphone, title: "تجاوب كامل", desc: "تصميم موقع متوافق مع الجوال ليظهر بشكل مثالي على كافة الشاشات." },
  { icon: Globe, title: "تعدد اللغات", desc: "تصميم موقع عربي وإنجليزي للوصول إلى كافة شرائح المجتمع." },
  { icon: Settings, title: "إدارة سهلة", desc: "تصميم موقع مع لوحة تحكم مرنة تتيح لك تعديل المحتوى بسهولة." }
];

const competitorsComparison = [
  { criteria: "سرعة التحميل", us: "أقل من ثانية واحدة", them: "3-5 ثوانٍ" },
  { criteria: "التصميم", us: "حصري ومخصص (Custom UI)", them: "قوالب جاهزة مكررة" },
  { criteria: "أكواد الـ SEO", us: "هيكلة Schema دقيقة مدمجة", them: "إضافات ثقيلة تبطئ الموقع" },
  { criteria: "الدعم الفني", us: "استجابة سريعة وتواصل مباشر", them: "ردود آلية وبطيئة" },
  { criteria: "لوحة التحكم", us: "مخصصة وسهلة (عربي/إنجليزي)", them: "معقدة وتحتاج خبرة" }
];

const faqs = [
  { q: "لماذا نعتبر أفضل شركة تصميم مواقع الكترونية في الكويت؟", a: "لأننا في Unique ندمج بين أحدث التقنيات البرمجية (Next.js, Laravel) والتصميم العصري، مع التركيز التام على تجربة المستخدم وتهيئة محركات البحث (SEO) لتحقيق مبيعات حقيقية." },
  { q: "كم تكلفة تصميم موقع في الكويت؟", a: "تختلف التكلفة بناءً على المتطلبات. الباقات التعريفية تبدأ من 250 د.ك، بينما المتاجر الإلكترونية والأنظمة المخصصة تعتمد على حجم المميزات المطلوبة. تواصل معنا للحصول على تسعير دقيق." },
  { q: "هل تقدمون خدمات تصميم متجر إلكتروني في الكويت؟", a: "نعم، نبني متاجر إلكترونية احترافية سريعة التحميل مع ربط متكامل ببوابات الدفع المحلية (KNET) وشركات الشحن." },
  { q: "هل أنتم شركة تصميم مواقع ووردبريس الكويت؟", a: "بالتأكيد، نحن نصمم مواقع ووردبريس احترافية وسريعة، ولكننا نتفوق أيضاً في بناء أنظمة مخصصة عبر التقنيات الأحدث." },
  { q: "ما هي المدة المستغرقة لتنفيذ المشروع؟", a: "للمواقع التعريفية من أسبوعين إلى 3 أسابيع، والمتاجر الإلكترونية من 3 إلى 5 أسابيع حسب حجم المشروع." },
  { q: "هل الموقع سيكون متوافقاً مع الهواتف؟", a: "نعم، نضمن تصميم موقع متوافق مع الجوال بنسبة 100% ليقدم تجربة مستخدم مثالية على جميع الأجهزة." },
  { q: "هل تضمنون تصدر الموقع في نتائج جوجل؟", a: "نحن شركة تصميم مواقع متوافقة مع SEO، نؤسس البنية التحتية البرمجية بشكل مثالي لجوجل، مما يسهل ويسرع عملية تصدر النتائج." },
  { q: "هل توفرون تصميم موقع متعدد اللغات؟", a: "نعم، نحن خبراء في تصميم موقع عربي وإنجليزي مع توافق تام لاتجاهات الشاشة (RTL و LTR)." },
  { q: "كيف يمكنني إدارة محتوى موقعي لاحقاً؟", a: "نقوم بـ تصميم موقع مع لوحة تحكم سهلة جداً باللغتين العربية والإنجليزية لتتمكن من إضافة وتعديل الصور والنصوص بسهولة." },
  { q: "هل أنتم شركة تصميم مواقع Laravel الكويت؟", a: "نعم، لدينا فريق متخصص في برمجة الأنظمة المعقدة باستخدام إطار عمل Laravel لضمان الأمان العالي والأداء المتقدم." },
  { q: "ما الذي يميز تصميم موقع Next.js الكويت لديكم؟", a: "تقنية Next.js توفر سرعة تحميل فائقة (SSR) وهي الأفضل عالمياً لتحسين محركات البحث والأداء، ونحن من رواد استخدامها في الكويت." },
  { q: "هل أستلم السورس كود (Source Code) بعد الانتهاء؟", a: "نعم، بمجرد الانتهاء من المشروع وسداد كامل الدفعات، تصبح ملكية الموقع والأكواد لك بالكامل." },
  { q: "هل تقدمون خدمات الاستضافة والدومين؟", a: "نعم، نوفر خطط استضافة سحابية فائقة السرعة مع حجز الدومين وربط شهادات الأمان (SSL) مجاناً للسنة الأولى." },
  { q: "ما هي شروط الدفع والتعاقد؟", a: "يتم توثيق العمل بعقد رسمي، وتُقسم الدفعات عادة إلى 50% كدفعة مقدمة، و50% عند الاستلام النهائي." },
  { q: "هل يمكنني ربط الموقع ببرامج المحاسبة (ERP)؟", a: "نعم، خاصة عند استخدامنا لتقنيات مثل Laravel، يمكننا برمجة وتطوير (API) لربط موقعك بأي نظام خارجي." },
  { q: "كيف يمكنني التأكد من أنكم أفضل شركة تصميم مواقع للشركات؟", a: "من خلال الاطلاع على سابقة أعمالنا في السوق الكويتي، حيث حققنا أرقاماً ونتائج ملموسة في مضاعفة أرباح عملائنا." },
  { q: "هل تقدمون دعماً فنياً بعد تسليم الموقع؟", a: "بالتأكيد، جميع باقاتنا تتضمن فترة دعم فني مجانية لضمان استقرار الموقع، مع إمكانية تجديد عقود الصيانة سنوياً." },
  { q: "ما الفرق بين المواقع الجاهزة والمواقع المبرمجة من الصفر؟", a: "المواقع الجاهزة سريعة ورخيصة ولكنها بطيئة وصعبة التطوير. أما المواقع المخصصة فهي تبنى لتناسب هويتك بدقة وتكون أسرع وأكثر أماناً." },
  { q: "هل يمكن ترقية الموقع مستقبلاً وإضافة خصائص جديدة؟", a: "نعم، معمارية الأكواد التي نستخدمها في Unique قابلة للتوسع (Scalable) لتنمو مع نمو أعمالك." },
  { q: "كيف أبدأ العمل معكم الآن كـ شركة تصميم مواقع الكترونية في الكويت؟", a: "ببساطة تواصل معنا عبر الواتساب أسفل الصفحة وسيقوم أحد خبرائنا بتقديم استشارة مجانية لمشروعك." }
];

// ==========================================
// المكون الرئيسي
// ==========================================

export default function KuwaitUltimateWebDesign() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const brutalShadow = "shadow-[8px_8px_0px_0px_#dc2626] hover:shadow-[12px_12px_0px_0px_#dc2626] transition-all duration-300";
  const brutalShadowWhite = "shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-[12px_12px_0px_0px_#ffffff] transition-all duration-300";

  return (
    <main className="w-full min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden" dir="rtl">
      
      {/* شبكة الخلفية الموحدة */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff33_2px,transparent_2px),linear-gradient(to_bottom,#ffffff33_2px,transparent_2px)] bg-[size:50px_50px]"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-screen flex items-center pt-24 pb-20 px-6 z-10 border-b-8 border-red-600">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col space-y-8">
            <div className="inline-block bg-white text-black font-black px-6 py-2 uppercase tracking-widest text-sm border-4 border-black w-max shadow-[6px_6px_0px_0px_#dc2626]">
              Unique Web Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              أفضل <span className="text-red-600 drop-shadow-[4px_4px_0_#ffffff]">شركة تصميم مواقع الكترونية في الكويت</span>
            </h1>
            <p className="text-xl text-gray-300 font-bold max-w-lg border-r-8 border-red-600 pr-6">
              نصمم هويتك الرقمية بأحدث التقنيات لنضمن لك صدارة السوق الكويتي. موقع سريع، متوافق مع محركات البحث، وجاهز لمضاعفة مبيعاتك.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#contact" className={`bg-red-600 text-white font-black text-xl px-10 py-5 border-4 border-white flex items-center gap-3 ${brutalShadowWhite}`}>
                ابدأ مشروعك الآن <ArrowUpRight className="w-7 h-7" />
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative hidden lg:block h-[600px] border-4 border-white bg-[#111] p-8 shadow-[16px_16px_0px_0px_#dc2626] overflow-hidden">
             <div className="absolute top-10 -left-10 w-64 h-64 bg-red-600/30 blur-[80px]"></div>
             <div className="grid grid-cols-2 gap-6 h-full">
               <div className="bg-red-600 border-4 border-black p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_#ffffff]">
                 <Code2 className="w-16 h-16 text-black" />
                 <span className="text-3xl font-black text-black leading-tight">تصميم موقع احترافي للشركات</span>
               </div>
               <div className="bg-white border-4 border-black p-6 flex flex-col justify-end shadow-[6px_6px_0px_0px_#dc2626]">
                 <ShoppingCart className="w-16 h-16 text-red-600 mb-4" />
                 <span className="text-2xl font-black text-black">تصميم متجر إلكتروني في الكويت</span>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* شريط الأخبار (News Ticker) */}
      <div className="w-full bg-white border-b-8 border-red-600 flex items-center overflow-hidden relative z-10 py-4">
        <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] text-black font-black text-2xl uppercase tracking-wider">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              {newsTickerItems.map((news, idx) => (
                <span key={`${i}-${idx}`} className="mx-8 flex items-center">
                  {news} <span className="mx-8 text-red-600">✦</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. لماذا تحتاج موقع إلكتروني في الكويت؟ */}
      <section className="py-24 px-6 relative z-10 bg-white text-black border-b-8 border-red-600">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase">لماذا تحتاج موقع إلكتروني في <span className="text-red-600">الكويت</span>؟</h2>
          <p className="text-xl font-bold max-w-3xl mx-auto leading-relaxed mb-16 border-b-4 border-black pb-8">
            في ظل التحول الرقمي السريع، المستهلك الكويتي يبحث عن خدماتك عبر جوجل قبل اتخاذ قرار الشراء. عدم وجودك رقمياً يعني خسارة آلاف العملاء المحتملين يومياً. الاستعانة بـ <span className="text-red-600 font-black">شركة تصميم مواقع الكترونية في الكويت</span> هو استثمارك الأهم.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "92%", text: "من المستهلكين يبحثون أونلاين قبل الشراء" },
              { num: "24/7", text: "تواجد مستمر لخدماتك ومنتجاتك بدون توقف" },
              { num: "3X", text: "مضاعفة الأرباح عبر بناء ثقة ومصداقية قوية" }
            ].map((stat, i) => (
              <div key={i} className={`bg-black text-white p-8 border-4 border-red-600 flex flex-col items-center justify-center ${brutalShadow}`}>
                <span className="text-5xl font-black text-red-600 mb-4">{stat.num}</span>
                <span className="text-lg font-bold">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. لماذا تختار شركتنا (Unique) */}
      <section className="py-24 px-6 relative z-10 bg-[#111]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-white pb-8">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase">
              لماذا تختار <span className="text-red-600">Unique</span>؟
            </h2>
            <p className="text-xl font-bold text-gray-400 max-w-md mt-6 md:mt-0 text-right">
              نحن لا نقدم مجرد قوالب، بل نعتبر أفضل شركة تصميم مواقع للشركات بفضل الهندسة البرمجية الدقيقة المخصصة لنمو أعمالك.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-red-600 text-white p-10 border-4 border-white ${brutalShadowWhite}`}>
              <Star className="w-16 h-16 mb-6" />
              <h3 className="text-3xl font-black mb-4">تصميم موقع احترافي للشركات</h3>
              <p className="text-lg font-bold">كل بكسل مصمم ليعكس فخامة علامتك التجارية ويجبر العميل على اتخاذ قرار الشراء، نحن أفضل شركة تصميم مواقع الكترونية في الكويت تركز على النتائج.</p>
            </div>
            <div className={`bg-black text-white p-10 border-4 border-red-600 ${brutalShadow}`}>
              <LineChart className="w-16 h-16 mb-6 text-red-600" />
              <h3 className="text-3xl font-black mb-4">تركيز كامل على العائد (ROI)</h3>
              <p className="text-lg font-bold text-gray-300">نحن شركة تصميم مواقع متوافقة مع SEO، لا نكتفي بالشكل الجمالي بل نضمن لك موقعاً مهيأً لتصدر نتائج جوجل في السوق الكويتي.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. خدمات تصميم المواقع وأنواعها */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6">أنواع المواقع التي نصممها</h2>
            <div className="w-32 h-2 bg-red-600 mx-auto shadow-[4px_4px_0px_0px_#ffffff]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteTypes.map((type, i) => (
              <div key={i} className={`bg-[#0a0a0a] p-8 border-4 border-white group relative overflow-hidden ${brutalShadow}`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600 rounded-bl-full -z-0 transition-transform group-hover:scale-125"></div>
                <type.icon className="w-12 h-12 text-white relative z-10 mb-6 group-hover:text-black transition-colors" />
                <h3 className="text-2xl font-black text-white mb-4 relative z-10">{type.title}</h3>
                <p className="text-gray-400 font-bold relative z-10">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. مراحل تنفيذ المشروع */}
      <section className="py-24 px-6 relative z-10 bg-red-600 border-y-8 border-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-16 text-center drop-shadow-[4px_4px_0_#ffffff]">خطوات الإطلاق الناجح</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {projectSteps.map((step, i) => (
              <div key={i} className={`bg-black text-white p-6 border-4 border-white relative ${brutalShadowWhite}`}>
                <span className="text-6xl font-black text-red-600 absolute -top-8 -right-4 opacity-50 drop-shadow-[2px_2px_0_#ffffff]">{step.num}</span>
                <h3 className="text-xl font-black mb-3 mt-4 relative z-10">{step.title}</h3>
                <p className="text-sm font-bold text-gray-300 relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. التقنيات المستخدمة */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b-4 border-red-600 pb-8">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase">الترسانة التقنية</h2>
            <p className="text-xl font-bold text-gray-400 mt-6 md:mt-0 text-right max-w-md">نحن شركة تصميم مواقع الكترونية في الكويت تعتمد أحدث الأطر العالمية.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, i) => (
              <div key={i} className={`bg-[#111] p-8 border-4 border-white flex flex-col items-center text-center ${brutalShadow}`}>
                <tech.icon className="w-16 h-16 text-red-600 mb-6" />
                <h3 className="text-3xl font-black text-white mb-2">{tech.title}</h3>
                <span className="inline-block bg-red-600 text-white font-bold px-3 py-1 text-xs mb-4 uppercase">{tech.label}</span>
                <p className="text-gray-400 font-bold text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. مقارنة التقنيات */}
      <section className="py-24 px-6 relative z-10 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-12 text-center">أيهما الأنسب لمشروعك؟</h2>
          <div className="overflow-x-auto border-4 border-white bg-black shadow-[12px_12px_0px_0px_#dc2626]">
            <table className="w-full text-right border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b-4 border-white bg-red-600 text-white">
                  <th className="p-6 font-black text-xl">وجه المقارنة</th>
                  <th className="p-6 font-black text-xl border-r-4 border-white">Next.js</th>
                  <th className="p-6 font-black text-xl border-r-4 border-white">Laravel</th>
                  <th className="p-6 font-black text-xl border-r-4 border-white">WordPress</th>
                </tr>
              </thead>
              <tbody className="text-lg font-bold">
                {techComparison.map((row, i) => (
                  <tr key={i} className="border-b-2 border-white/20 hover:bg-white/5">
                    <td className="p-6 text-red-600 font-black">{row.feature}</td>
                    <td className="p-6 text-white border-r-2 border-white/20">{row.next}</td>
                    <td className="p-6 text-white border-r-2 border-white/20">{row.laravel}</td>
                    <td className="p-6 text-gray-400 border-r-2 border-white/20">{row.wp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 11. مميزات المواقع */}
      <section className="py-24 px-6 relative z-10 bg-white text-black border-y-8 border-red-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center">مميزات تصميمات <span className="text-red-600">Unique</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div key={i} className={`bg-black text-white p-8 border-4 border-red-600 flex flex-col items-start ${brutalShadow}`}>
                <feat.icon className="w-12 h-12 text-red-600 mb-6" />
                <h3 className="text-2xl font-black mb-3">{feat.title}</h3>
                <p className="font-bold text-gray-300">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. الأسعار والباقات */}
      <section className="py-24 px-6 relative z-10 bg-[#111]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4">باقات تصميم المواقع</h2>
            <p className="text-xl text-red-600 font-black">كم تكلفة تصميم موقع في الكويت؟ الإجابة بكل شفافية:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {pricingPackages.map((pkg, i) => (
              <div key={i} className={`bg-black border-4 ${i === 1 ? 'border-red-600 scale-105' : 'border-white'} p-8 flex flex-col relative ${i === 1 ? brutalShadow : brutalShadowWhite}`}>
                {i === 1 && <span className="absolute -top-5 right-8 bg-red-600 text-white font-black px-4 py-1 uppercase text-sm border-2 border-white">الأكثر طلباً</span>}
                <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 font-bold mb-6 min-h-[60px]">{pkg.desc}</p>
                <div className="text-4xl font-black text-red-600 mb-8">{pkg.price}</div>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white font-bold">
                      <Check className="w-5 h-5 text-red-600" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`w-full text-center font-black text-lg py-4 border-4 ${i === 1 ? 'bg-red-600 text-white border-white hover:bg-red-700' : 'bg-white text-black border-black hover:bg-gray-200'} transition-colors`}>
                  احجز باقتك
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. أعمال سابقة / نتائج */}
      <section className="py-24 px-6 relative z-10 border-t-8 border-red-600">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-8">لغة الأرقام لا تكذب</h2>
          <p className="text-xl font-bold text-gray-400 mb-16">بصفتنا شركة تصميم مواقع الكترونية في الكويت رائدة، نحقق نتائج قابلة للقياس.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-red-600 p-8 border-4 border-white ${brutalShadowWhite}`}>
              <span className="block text-6xl font-black text-black mb-4">+300%</span>
              <span className="text-xl font-bold text-white">زيادة في المبيعات لأحد متاجرنا</span>
            </div>
            <div className={`bg-white p-8 border-4 border-black ${brutalShadow}`}>
              <span className="block text-6xl font-black text-red-600 mb-4">0.8s</span>
              <span className="text-xl font-bold text-black">متوسط سرعة تحميل مواقعنا</span>
            </div>
            <div className={`bg-black p-8 border-4 border-red-600 ${brutalShadow}`}>
              <span className="block text-6xl font-black text-white mb-4">#1</span>
              <span className="text-xl font-bold text-gray-300">تصدر النتائج لعملائنا في جوجل</span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. مقارنة بينك وبين المنافسين */}
      <section className="py-24 px-6 relative z-10 bg-white text-black border-y-8 border-red-600">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center">لماذا نحن خارج المنافسة؟</h2>
          <div className="border-4 border-black shadow-[12px_12px_0px_0px_#dc2626]">
            {competitorsComparison.map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-black last:border-0">
                <div className="p-6 bg-black text-white font-black text-xl flex items-center md:border-l-4 border-black">{item.criteria}</div>
                <div className="p-6 bg-red-600 text-white font-black text-xl flex items-center gap-3 md:border-l-4 border-black">
                  <CheckSquare className="w-6 h-6" /> Unique: {item.us}
                </div>
                <div className="p-6 bg-gray-200 text-gray-600 font-bold flex items-center gap-3">
                  <X className="w-6 h-6" /> الشركات الأخرى: {item.them}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. آراء العملاء */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-16 text-center">ماذا يقول عملاؤنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-[#111] p-10 border-4 border-red-600 ${brutalShadow}`}>
              <div className="flex text-red-600 mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-current" />)}</div>
              <p className="text-xl font-bold text-white mb-8 leading-relaxed">"أفضل شركة تصميم مواقع للشركات تعاملنا معها في الكويت. الاحترافية، السرعة، والأهم هو تصميم موقع مع لوحة تحكم سهلة جداً لإدارة منتجاتنا."</p>
              <div className="font-black text-red-600 text-xl">- مدير تسويق شركة عقارية، الكويت</div>
            </div>
            <div className={`bg-white p-10 border-4 border-black ${brutalShadowWhite}`}>
              <div className="flex text-red-600 mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-current" />)}</div>
              <p className="text-xl font-bold text-black mb-8 leading-relaxed">"بناء متجرنا الإلكتروني بواسطة Unique ضاعف مبيعاتنا بشكل لم نتوقعه. السرعة خيالية والدعم الفني لا يعلى عليه."</p>
              <div className="font-black text-black text-xl">- صاحبة متجر أزياء، حولي</div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. الأسئلة الشائعة (FAQ) */}
      <section className="py-24 px-6 relative z-10 bg-[#0a0a0a] border-t-8 border-red-600">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-16 text-center">الأسئلة الشائعة</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-4 border-white bg-black overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-right flex justify-between items-center font-black text-xl text-white hover:bg-red-600 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-8 h-8 flex-shrink-0 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0 }} 
                      animate={{ height: "auto" }} 
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 border-t-4 border-white bg-[#111] text-lg font-bold text-gray-300 leading-relaxed">
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

      {/* 15. CTA نهائي قوي */}
      <section id="contact" className="py-32 px-6 relative z-10 bg-red-600 border-t-8 border-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000033_3px,transparent_3px),linear-gradient(to_bottom,#00000033_3px,transparent_3px)] bg-[size:60px_60px]"></div>
        <div className="container mx-auto max-w-5xl relative z-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase drop-shadow-[6px_6px_0_#000000]">
            الخطوة التالية نحو قمة السوق
          </h2>
          <p className="text-2xl font-bold text-black bg-white inline-block px-8 py-4 mb-12 border-4 border-black shadow-[8px_8px_0px_0px_#000000]">
            بصفتنا شركة تصميم مواقع الكترونية في الكويت موثوقة، نحن جاهزون لتحويل فكرتك إلى واقع رقمي يدر الأرباح.
          </p>
          <a 
            href={`https://wa.me/00201505388060?text=${encodeURIComponent("مرحباً، أود الاستفسار عن تصميم موقع في الكويت.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-auto bg-black text-white font-black text-3xl px-16 py-8 border-8 border-white flex items-center justify-center gap-6 w-max ${brutalShadowWhite} hover:bg-gray-900 hover:scale-105`}
          >
            <MessageSquare className="w-10 h-10" />
            تحدث مع الخبراء الآن
          </a>
        </div>
      </section>

      {/* أكواد الحركات (CSS Animations) الخاصة بشريط الأخبار */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        .animate-\\[marquee_40s_linear_infinite\\] {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </main>
  );
}