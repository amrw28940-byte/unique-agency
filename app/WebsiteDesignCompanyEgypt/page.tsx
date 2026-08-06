"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowUpRight, MonitorSmartphone, Code2, Rocket, Search, ShieldCheck, 
  Target, Globe, ShoppingCart, Briefcase, Layers, Cpu, Server, 
  Zap, ChevronDown, Check, X, TrendingUp, Smartphone, BadgeCheck,
  Building, Store, Landmark, HeartPulse, GraduationCap, MapPin,
  Clock, Calculator, Star, CheckCircle, ChevronLeft, Layout,
  Activity, ArrowRight, PlayCircle, ArrowLeft
} from "lucide-react";

// ============================================================================
// 1. DATA & CONTENT (Extensive Data Structures for SEO & E-E-A-T - Egypt)
// ============================================================================

const industries = [
  {
    id: "corporate",
    title: "شركات ومؤسسات",
    icon: Building,
    desc: "تصميم موقع شركة احترافي يبني الهوية المؤسسية القوية في السوق المصري، ويجذب عقود الـ B2B. نركز على عرض الخدمات بوضوح مع مسارات تحويل (Funnels) مدروسة.",
    features: ["تصميم بوابات إلكترونية", "أنظمة حجز استشارات", "لوحة تحكم ERP", "تصميم موقع متعدد اللغات"]
  },
  {
    id: "ecommerce",
    title: "متاجر إلكترونية",
    icon: ShoppingCart,
    desc: "تصميم متجر إلكتروني احترافي يحول الزوار إلى مشترين. نوفر خيارات تصميم متجر WooCommerce أو تصميم متجر Shopify أو برمجة مخصصة.",
    features: ["بوابات الدفع (فوري، Paymob)", "إدارة مخزون متقدمة", "تجربة مستخدم (UX) بيعية", "سرعة تحميل خيالية"]
  },
  {
    id: "realestate",
    title: "عقارات وإنشاءات",
    icon: Landmark,
    desc: "تصميم موقع عقاري متكامل يناسب العاصمة الإدارية والسوق المصري. يتيح للعملاء البحث المتقدم، استعراض المشاريع، والتواصل مع المبيعات.",
    features: ["خرائط تفاعلية", "فلاتر بحث دقيقة", "نظام إدارة العقارات (CRM)", "جولات افتراضية"]
  },
  {
    id: "medical",
    title: "القطاع الطبي",
    icon: HeartPulse,
    desc: "تصميم موقع طبي للعيادات والمستشفيات مع أنظمة حجز مواعيد إلكترونية، وملفات للمرضى، وتصميم يبعث على الثقة والأمان.",
    features: ["حجز مواعيد أونلاين", "بوابات المرضى", "أمان البيانات", "استشارات عن بعد"]
  },
  {
    id: "education",
    title: "تعليم وتدريب",
    icon: GraduationCap,
    desc: "تصميم موقع تعليمي أو أكاديمية أونلاين. أنظمة إدارة التعلم (LMS) متكاملة تتيح بيع الكورسات للطلاب في جميع محافظات مصر.",
    features: ["بيع الكورسات (فودافون كاش)", "فصول افتراضية", "شهادات إلكترونية", "منتديات نقاش"]
  }
];

const technologies = [
  {
    name: "Next.js & React",
    icon: Cpu,
    category: "الواجهات الأمامية (Frontend)",
    desc: "التقنية الأحدث عالمياً لضمان تصميم موقع سريع جداً، وتجربة مستخدم (UX Design) سلسة، وتفوق كاسح في معايير Core Web Vitals.",
    useCase: "المشاريع الكبرى والمتاجر التي تتطلب سرعة خارقة وأداء SEO استثنائي."
  },
  {
    name: "Laravel",
    icon: Server,
    category: "البرمجة الخلفية (Backend)",
    desc: "إطار العمل الأقوى والأكثر أماناً. نستخدمه في برمجة مواقع الشركات الكبرى والبوابات الإلكترونية لضمان عدم اختراق البيانات.",
    useCase: "الأنظمة المعقدة، الـ CRM، والمنصات التي تتطلب تخصيصاً برمجياً دقيقاً."
  },
  {
    name: "WordPress",
    icon: Layout,
    category: "أنظمة إدارة المحتوى (CMS)",
    desc: "النظام الأشهر عالمياً. نقوم ببناء تصميم موقع احترافي عبر ووردبريس مع قوالب مخصصة (Custom Themes) خالية من الأكواد الزائدة.",
    useCase: "المدونات، المواقع التعريفية، والشركات التي تبحث عن لوحة تحكم بسيطة."
  }
];

const projectPhases = [
  {
    phase: "01. الاكتشاف والتحليل",
    title: "دراسة السوق المصري",
    desc: "نقوم بتحليل منافسيك في مصر، ونحدد الكلمات المفتاحية (SEO)، ونرسم مسار المستخدم (User Journey) لضمان تحقيق المبيعات.",
    icon: Search
  },
  {
    phase: "02. تصميم واجهة المستخدم",
    title: "UI / UX Design",
    desc: "نبتكر هوية بصرية فاخرة تعكس علامتك التجارية. تصميم موقع احترافي يركز على سهولة الاستخدام وتوجيه الزائر نحو الـ CTA.",
    icon: Target
  },
  {
    phase: "03. التطوير والبرمجة",
    title: "Web Development",
    desc: "نكتب أكواداً نظيفة وآمنة. سواء كان تصميم موقع شركة أو تصميم متجر إلكتروني، نضمن برمجة خالية من الأخطاء بأحدث المعايير.",
    icon: Code2
  },
  {
    phase: "04. الاختبار الشامل",
    title: "QA & Testing",
    desc: "نختبر الموقع على كافة الأجهزة (Mobile, Tablet, Desktop) ونفحص سرعة التحميل والثغرات الأمنية قبل الإطلاق الرسمي.",
    icon: Activity
  },
  {
    phase: "05. الإطلاق والدعم",
    title: "Launch & SEO",
    desc: "نطلق الموقع على سيرفرات سحابية سريعة، ونربط أدوات تحليل جوجل (Analytics)، ونقدم دعماً فنياً مستمراً لاستقرار أعمالك.",
    icon: Rocket
  }
];

const faqs = [
  {
    q: "كيف أختار أفضل شركة تصميم مواقع الكترونية في مصر ؟", // KW 10
    a: "ابحث عن الشفافية، سابقة الأعمال القوية (Case Studies)، والقدرة على البرمجة المخصصة وليس فقط استخدام القوالب الجاهزة. والأهم، تأكد من أنهم يدمجون معايير الـ SEO وتجربة المستخدم (UX) في جوهر عملهم، وهو ما نقدمه في Unique بفخر."
  },
  {
    q: "كم تكلفة تصميم موقع إلكتروني في مصر؟",
    a: "أسعار تصميم المواقع تختلف حسب المتطلبات. المواقع التعريفية للشركات تبدأ من 15,000 إلى 30,000 جنيه مصري، بينما تصميم متجر إلكتروني أو أنظمة مخصصة قد يبدأ من 40,000 جنيه فأكثر. استخدم حاسبة التكلفة في صفحتنا لتقدير مبدئي."
  },
  {
    q: "كم يستغرق تصميم موقع؟",
    a: "تصميم موقع شركة احترافي يستغرق عادة بين 3 إلى 5 أسابيع. أما المشاريع الأكبر مثل المتاجر الإلكترونية أو الأنظمة الخاصة بـ Laravel قد تستغرق من شهرين إلى 3 أشهر لضمان الجودة والأمان."
  },
  {
    q: "هل تقومون بـ تصميم موقع متوافق مع Google و SEO؟",
    a: "بالتأكيد. تحسين محركات البحث (SEO) ليس إضافة، بل هو أساس عملنا. نقوم بضبط سرعة الموقع (Core Web Vitals)، هيكلة الروابط، وإضافة أكواد Schema Markup لضمان تصدر موقعك في مصر."
  },
  {
    q: "نحن كـ شركة تصميم مواقع الكترونية في مصر نضمن لك الدعم، لكن ما مدته؟", // KW 11
    a: "نقدم دعماً فنياً مجانياً لمدة 6 أشهر بعد إطلاق المشروع يشمل إصلاح أي أخطاء برمجية، مع خيارات لعقود صيانة سنوية ممتدة لضمان التحديثات والأمان المستمر."
  },
  {
    q: "مقارنة WordPress وLaravel: أيهما أختار لمشروعي؟",
    a: "إذا كان مشروعك موقعاً تعريفياً، مدونة، أو متجراً متوسطاً، فـ تصميم موقع باستخدام WordPress مثالي وسريع التكلفة. أما إذا كنت تبني نظام إدارة داخلي أو تطبيق ويب مخصص، فإن Laravel هو الخيار الأقوى."
  },
  {
    q: "هل تقومون بـ تصميم موقع متعدد اللغات؟",
    a: "نعم، نبرمج مواقع تدعم اللغة العربية والإنجليزية وأي لغات أخرى، مع ضبط اتجاه الشاشة (RTL & LTR) بشكل مثالي لتجربة مستخدم خالية من العيوب."
  },
  {
    q: "ما هو تصميم موقع باستخدام Next.js ولماذا هو مكلف؟",
    a: "Next.js هي تقنية توفر سرعات تحميل فورية (Server-Side Rendering)، مما يرفع معدلات التحويل ويحسن الـ SEO بشكل مذهل. هي استثمار للشركات الكبرى التي تبحث عن أداء لا يقارن."
  },
  {
    q: "هل تصممون متاجر عبر Shopify و WooCommerce؟",
    a: "نعم، نقدم خدمة تصميم متجر إلكتروني WooCommerce للمرونة والتحكم الكامل بالبيانات، وتصميم متجر Shopify لسرعة الانطلاق والاعتمادية."
  },
  {
    q: "هل أحصل على تصميم موقع متوافق مع الجوال (Responsive Design)؟",
    a: "بشكل قاطع، نعم. الترافيك الأكبر في مصر يأتي عبر الهواتف، لذا نعتمد نهج Mobile-First Design لتجربة تصفح سلسة على كافة الأجهزة."
  },
  {
    q: "ما هي خطوات الدفع والتعاقد؟",
    a: "العمل يكون بعقد رسمي موثق يحفظ حقوق الطرفين. الدفعات تُقسم غالباً إلى: 40% دفعة مقدمة، 30% بعد اعتماد التصميم (UI)، و 30% عند التسليم والإطلاق النهائي."
  },
  {
    q: "هل تقدمون خدمات الاستضافة (Web Hosting) والتسويق الإلكتروني؟",
    a: "نعم، نوفر استضافات سحابية فائقة السرعة، وبصفتنا وكالة متكاملة نقدم خدمات الـ SEO والتسويق لضمان جلب الزوار وتحقيق الأرباح بعد إطلاق الموقع."
  },
  {
    q: "أريد تصميم موقع عقاري، هل توفرون خصائص البحث المتقدم؟",
    a: "نعم، نصمم مواقع العقارات بخصائص متقدمة مثل خرائط تفاعلية، فلترة بالمنطقة والسعر، حاسبة القروض، وجولات افتراضية."
  },
  {
    q: "هل أحصل على كود المصدر (Source Code)؟",
    a: "بكل تأكيد. بمجرد الانتهاء وتسديد الدفعات، تنتقل ملكية الموقع وأكواده البرمجية بالكامل إليك، دون أي شروط احتكار."
  },
  {
    q: "كيف تضمنون سرعة تحميل الموقع؟",
    a: "نستخدم تقنيات ضغط الصور (WebP)، التخزين المؤقت (Caching)، وشبكات توصيل المحتوى (CDN)، ونكتب أكواداً نظيفة خالية من الإضافات الثقيلة."
  },
  {
    q: "هل تقومون بـ تصميم موقع طبي يتوافق مع المعايير؟",
    a: "نعم، نصمم منصات طبية تراعي خصوصية المرضى وأمان البيانات، مع إمكانية ربطها بأنظمة العيادات والمستشفيات."
  },
  {
    q: "لدي موقع قديم، هل يمكنكم إعادة تصميمه؟",
    a: "نعم، نقوم بخدمة Website Redesign مع الحفاظ على تصدرك في محركات البحث لضمان عدم خسارة الزوار السابقين."
  },
  {
    q: "هل توفرون لوحة تحكم (CMS) سهلة الاستخدام؟",
    a: "نعم، نسلمك تصميم موقع مع لوحة تحكم مرنة وندرب فريقك على كيفية إضافة المقالات، المنتجات، وتعديل الصور بكل سهولة."
  },
  {
    q: "ما الذي يميز خدمات الـ UX Design لديكم؟",
    a: "نحن ندرس سيكولوجية الزائر، ونطبق معايير تقليل الاحتكاك لتسهيل وصول العميل لهدفه، مما يرفع معدل التحويل (Conversion Rate) بشكل كبير."
  },
  {
    q: "أين تقدمون خدماتكم جغرافياً؟",
    a: "نغطي كافة أنحاء مصر؛ القاهرة، الإسكندرية، الجيزة، المنصورة، وكافة المحافظات، بالإضافة إلى تقديم خدماتنا لدول الخليج."
  },
  {
    q: "هل تقومون بربط بوابات الدفع الإلكترونية المصرية؟",
    a: "نعم، نربط متجرك مع بوابات الدفع المحلية والعالمية مثل فوري (Fawry)، باي موب (Paymob)، إنستاباي، وبطاقات الائتمان بكل أمان."
  },
  {
    q: "ما هي أفضل لغات برمجة المواقع؟",
    a: "لا توجد لغة واحدة 'أفضل'، بل التقنية الأنسب لهدفك. نستخدم React/Next.js للسرعة، PHP/Laravel للأنظمة المتينة، و Node.js لتطبيقات الزمن الفعلي."
  },
  {
    q: "أحتاج لتصميم بوابات إلكترونية ضخمة لمنظمتي، هل يمكنكم ذلك؟",
    a: "بالتأكيد. لدينا فريق من مهندسي البرمجيات القادرين على بناء هيكلية معقدة وربطها بـ APIs متقدمة للجهات الحكومية والخاصة."
  },
  {
    q: "هل الموقع محمي من الهجمات السيبرانية؟",
    a: "نطبق بروتوكولات أمان صارمة، تشمل شهادات SSL، الحماية من هجمات DDoS و SQL Injection، ونسخ احتياطي (Backups) دوري للبيانات."
  },
  {
    q: "كيف أبدأ العمل معكم؟",
    a: "اضغط على زر التواصل، شاركنا تفاصيل فكرتك، وسنقوم بجدولة اجتماع افتراضي أو حضوري في القاهرة لنناقش التفاصيل ونقدم عرض سعر احترافي."
  }
];

const competitorsComparison = [
  { criteria: "تصميم واجهة المستخدم (UI/UX)", us: "مخصص وحصري (Bespoke Design)", them: "قوالب جاهزة ومكررة" },
  { criteria: "سرعة التحميل (Performance)", us: "أقل من ثانية واحدة (Next.js/Optimized)", them: "3-5 ثوانٍ (Bloated Code)" },
  { criteria: "تحسين محركات البحث (SEO)", us: "مدمج في البنية التحتية البرمجية", them: "إضافات خارجية تبطئ الموقع" },
  { criteria: "لوحة التحكم", us: "سهلة ومخصصة لاحتياجاتك", them: "معقدة وتحتاج تدريب طويل" },
  { criteria: "الدعم والضمان", us: "دعم فني استباقي و SLA واضح", them: "ردود متأخرة وبدون ضمانات" }
];

// ============================================================================
// 2. MAIN COMPONENT (Pinnacle Luxury Design)
// ============================================================================

export default function EgyptPinnacleWebDesign() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [isMounted, setIsMounted] = useState(false);

  // Calculator State (Egypt Pricing)
  const [calcType, setCalcType] = useState<number>(15000);
  const [calcLang, setCalcLang] = useState<number>(0);
  const [calcSeo, setCalcSeo] = useState<number>(0);
  
  const { scrollYProgress } = useScroll();
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Modern Luxury Theme Classes
  const goldGradient = "bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600";
  const darkGlass = "bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl";
  const buttonGold = "bg-gradient-to-r from-amber-400 to-yellow-600 hover:from-amber-500 hover:to-yellow-700 text-black font-black transition-all shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)]";
  const cardHover = "transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-[0_20px_40px_-15px_rgba(251,191,36,0.2)]";

  return (
    <main className="w-full min-h-screen bg-[#030303] text-gray-200 font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden" dir="rtl">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <motion.section 
        style={{ opacity: opacityTransform, scale: scaleTransform }}
        className="relative w-full min-h-[100svh] flex items-center justify-center pt-32 pb-20 px-6 z-10"
      >
        <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
            
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-md mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <span className="text-amber-400 text-sm font-bold tracking-widest uppercase">الوكالة الرقمية الفاخرة</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tight mb-8 text-white">
              أفضل <span className={goldGradient}>شركة تصميم مواقع الكترونية في مصر</span> {/* KW 1 */}
            </h1>

            <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-3xl leading-relaxed mb-12">
              تبحث عن شركة تصميم مواقع الكترونية في مصر تجمع بين الفخامة البصرية والأداء التقني الاستثنائي؟ نحن نبني منصات رقمية (High Converting) تضع علامتك التجارية في صدارة السوق المصري. {/* KW 2 */}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              <a href="#contact" className={`px-10 py-5 rounded-2xl ${buttonGold} flex items-center justify-center gap-3 text-lg`}>
                ابدأ مشروعك الآن <ArrowUpRight className="w-6 h-6" />
              </a>
              <a href="#portfolio" className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold transition-all flex items-center justify-center gap-3 text-lg backdrop-blur-md">
                شاهد أعمالنا <PlayCircle className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Hero Visual Details */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="w-full mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-10">
            {[
              { label: "مشاريع ناجحة", value: "+450" },
              { label: "عائد استثمار", value: "300%" },
              { label: "سرعة تحميل", value: "0.8s" },
              { label: "عملاء مستمرون", value: "98%" }
            ].map((stat, i) => (
              <div key={i} className="text-center border-l last:border-0 border-white/10">
                <div className="text-3xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= THE PROBLEM & SOLUTION ================= */}
      <section className="py-24 px-6 relative z-10 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full"></div>
              <div className={`relative p-8 rounded-3xl ${darkGlass} border-amber-500/20`}>
                <div className="flex flex-col gap-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/30">
                      <X className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">المواقع التقليدية</h4>
                      <p className="text-gray-400">قوالب جاهزة، بطء في التحميل، واختفاء تام من نتائج محركات البحث.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <CheckCircle className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">معايير Unique</h4>
                      <p className="text-gray-400">برمجة مخصصة، سرعة صاروخية، وتجربة مستخدم (UX) مصممة لزيادة المبيعات.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                لماذا نحن أهم <span className={goldGradient}>شركة تصميم مواقع الكترونية في مصر</span>؟ {/* KW 3 */}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                في السوق المصري، المنافسة الشرسة تتطلب أكثر من مجرد موقع عادي. تواجدك الرقمي يجب أن يكون استثنائياً. نحن لا نبيع لك "كوداً برمجياً"، بل نقدم أداة تسويقية متكاملة. كأبرز شركة تصميم مواقع الكترونية في مصر، نقدم حلول التجارة الإلكترونية، بوابات الشركات، والأنظمة المعقدة بأعلى معايير الجودة العالمية. {/* KW 4 */}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["تصميم UX/UI حصري", "أكواد محسنة للـ SEO", "استجابة 100% للجوال", "أمان سيبراني متقدم"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-bold">
                    <BadgeCheck className="w-6 h-6 text-amber-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES (Interactive Tabs) ================= */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              قطاعات نتميز في <span className={goldGradient}>تحويلها رقمياً</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              نحن شركة تصميم مواقع الكترونية في مصر تخدم قطاعات العقارات، الطب، التعليم، والتجارة بحلول مصممة خصيصاً لاحتياجات كل صناعة. {/* KW 5 */}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs Navigation */}
            <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry)}
                  className={`flex items-center gap-4 p-5 rounded-2xl transition-all w-full min-w-[200px] text-right font-bold text-lg
                    ${activeIndustry.id === industry.id 
                      ? 'bg-amber-500/10 border border-amber-500/50 text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.1)]' 
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                >
                  <industry.icon className={`w-6 h-6 shrink-0 ${activeIndustry.id === industry.id ? 'text-amber-400' : 'text-gray-500'}`} />
                  {industry.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className={`p-10 rounded-[2rem] h-full ${darkGlass}`}
                >
                  <activeIndustry.icon className="w-16 h-16 text-amber-500 mb-6" />
                  <h3 className="text-3xl font-black text-white mb-4">{activeIndustry.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 h-auto md:h-24">
                    {activeIndustry.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-8">
                    {activeIndustry.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-amber-500" />
                        <span className="text-white font-bold">{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK & SEO ================= */}
      <section className="py-24 px-6 relative z-10 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              التقنيات التي تستخدمها <span className={goldGradient}>شركة تصميم مواقع الكترونية في مصر</span> {/* KW 6 */}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              لا نساوم على الجودة. نختار الأداة البرمجية الأنسب لحجم مشروعك وتطلعاته المستقبلية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {technologies.map((tech, i) => (
              <div key={i} className={`p-8 rounded-[2rem] ${darkGlass} ${cardHover}`}>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <tech.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{tech.name}</h3>
                <span className="text-sm font-bold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full mb-4 inline-block">{tech.category}</span>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{tech.desc}</p>
                <div className="p-4 bg-black/50 rounded-xl border border-white/5">
                  <span className="text-white font-bold block mb-1">الاستخدام الأمثل:</span>
                  <span className="text-gray-500 text-sm">{tech.useCase}</span>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Focus Box */}
          <div className={`p-12 rounded-[3rem] ${darkGlass} border-amber-500/30 overflow-hidden relative`}>
            <div className="absolute -right-20 -bottom-20 opacity-5">
              <Search className="w-96 h-96" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                  <span className={goldGradient}>شركة تصميم مواقع الكترونية في مصر</span> متخصصة في الـ SEO {/* KW 7 */}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  الموقع الجميل بلا زوار هو استثمار خاسر. تضمن لك أفضل شركة تصميم مواقع الكترونية في مصر بناء هيكلية برمجية صديقة لمحركات البحث (Technical SEO). {/* KW 8 */}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  نقوم بضبط أداء الويب الأساسي (Core Web Vitals)، ودمج البيانات المنظمة (Schema Markup)، وضغط الأصول لضمان تصدرك لنتائج جوجل.
                </p>
                <ul className="space-y-4">
                  {["تحسين سرعة التحميل", "بنية URL صديقة لـ SEO", "أكواد خالية من الأخطاء", "تهيئة الصور التلقائية"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-bold"><Check className="w-5 h-5 text-amber-500" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/50 p-8 rounded-3xl border border-white/10">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <span className="text-white font-bold">مؤشرات الأداء (Google Lighthouse)</span>
                  <span className="text-amber-500 font-black">99 / 100</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Performance", val: "99" },
                    { label: "Accessibility", val: "100" },
                    { label: "Best Practices", val: "100" },
                    { label: "SEO", val: "100" }
                  ].map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">{metric.label}</span>
                        <span className="text-emerald-400">{metric.val}</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${metric.val}%` }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-emerald-500"></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT PHASES ================= */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-20">خارطة طريق <span className={goldGradient}>النجاح الرقمي</span></h2>
          <div className="relative border-r-2 border-amber-500/30 pr-8 md:pr-12 space-y-16">
            {projectPhases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -right-[41px] md:-right-[57px] top-0 w-6 h-6 rounded-full bg-black border-4 border-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.6)]"></div>
                <div className={`p-8 rounded-3xl ${darkGlass} ${cardHover}`}>
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                      <phase.icon className="w-8 h-8 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-amber-500 font-black text-sm mb-2 block">{phase.phase}</span>
                      <h3 className="text-2xl font-black text-white mb-3">{phase.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING CALCULATOR ================= */}
      <section className="py-24 px-6 relative z-10 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              أسعار <span className={goldGradient}>شركة تصميم مواقع الكترونية في مصر</span> {/* KW 9 */}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              الشفافية هي أساس عملنا. استخدم الحاسبة التقديرية أدناه لمعرفة التكلفة المبدئية لمشروعك، بناءً على احتياجاتك الفعلية.
            </p>
          </div>

          <div className={`p-8 md:p-12 rounded-[3rem] ${darkGlass}`}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-8">
                
                {/* Type of Website */}
                <div>
                  <label className="block text-white font-bold text-lg mb-4">نوع المنصة الرقمية</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button onClick={() => setCalcType(15000)} className={`p-4 rounded-xl text-right transition-all font-bold ${calcType === 15000 ? 'bg-amber-500 text-black shadow-lg' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>موقع شركة تعريفي</button>
                    <button onClick={() => setCalcType(25000)} className={`p-4 rounded-xl text-right transition-all font-bold ${calcType === 25000 ? 'bg-amber-500 text-black shadow-lg' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>متجر إلكتروني متكامل</button>
                    <button onClick={() => setCalcType(50000)} className={`p-4 rounded-xl text-right transition-all font-bold sm:col-span-2 ${calcType === 50000 ? 'bg-amber-500 text-black shadow-lg' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>بوابة إلكترونية / نظام مخصص (Laravel/Next.js)</button>
                  </div>
                </div>

                {/* Language */}
                <div>
                  <label className="block text-white font-bold text-lg mb-4">اللغات المدعومة</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => setCalcLang(0)} className={`p-4 rounded-xl text-right transition-all font-bold ${calcLang === 0 ? 'bg-amber-500 text-black' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>لغة واحدة (عربي/إنجليزي)</button>
                    <button onClick={() => setCalcLang(5000)} className={`p-4 rounded-xl text-right transition-all font-bold ${calcLang === 5000 ? 'bg-amber-500 text-black' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>ثنائي اللغة (Multi-language)</button>
                  </div>
                </div>

                {/* SEO */}
                <div>
                  <label className="block text-white font-bold text-lg mb-4">تهيئة محركات البحث (SEO)</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => setCalcSeo(0)} className={`p-4 rounded-xl text-right transition-all font-bold ${calcSeo === 0 ? 'bg-amber-500 text-black' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>تهيئة تقنية أساسية</button>
                    <button onClick={() => setCalcSeo(8000)} className={`p-4 rounded-xl text-right transition-all font-bold ${calcSeo === 8000 ? 'bg-amber-500 text-black' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>خطة SEO متقدمة + محتوى</button>
                  </div>
                </div>

              </div>

              {/* Total Display */}
              <div className="lg:col-span-2 bg-black/50 p-10 rounded-3xl border border-white/10 text-center flex flex-col justify-center h-full">
                <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider">التكلفة التقديرية المبدئية</h3>
                <div className="text-5xl md:text-6xl font-black text-white mb-4">
                  {calcType + calcLang + calcSeo} <span className="text-2xl text-amber-500">EGP</span>
                </div>
                <p className="text-sm text-gray-500 mb-8">* هذا السعر تقريبي وقد يختلف بناءً على المتطلبات الدقيقة للـ UI/UX وخصائص البرمجة المطلوبة.</p>
                <a href="#contact" className={`w-full py-5 rounded-xl ${buttonGold} text-lg`}>
                  اطلب عرض سعر رسمي
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS & COMPETITORS ================= */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Testimonial */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-10">أصوات <span className={goldGradient}>النجاح</span></h2>
              <div className={`p-10 rounded-[2.5rem] ${darkGlass} relative`}>
                <div className="absolute top-10 left-10 text-9xl text-white/5 font-serif leading-none">"</div>
                <div className="flex gap-1 text-amber-400 mb-8 relative z-10">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                <p className="text-2xl font-bold text-white leading-relaxed mb-10 relative z-10">
                  "أرقى <span className="text-amber-400">شركة تصميم مواقع الكترونية في مصر</span> {/* KW 10 */} تعاملنا معها. لم يكن مجرد تصميم، بل كان إعادة هيكلة شاملة لوجودنا الرقمي. المتجر الآن سريع جداً ومبيعاتنا تضاعفت بفضل تجربة المستخدم الممتازة."
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-full border-2 border-amber-500/50 flex items-center justify-center font-black text-xl text-amber-500">M</div>
                  <div>
                    <div className="text-white font-black text-lg">محمود فوزي</div>
                    <div className="text-gray-400 text-sm">مؤسس مجموعة تجارية رائدة</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitor Comparison */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-10">المنافسون <span className={goldGradient}>مقابل Unique</span></h2>
              <div className="space-y-4">
                {competitorsComparison.map((comp, i) => (
                  <div key={i} className={`p-6 rounded-2xl ${darkGlass} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}>
                    <div className="text-white font-bold text-lg">{comp.criteria}</div>
                    <div className="flex flex-col gap-2 text-sm w-full sm:w-1/2">
                      <div className="flex items-center justify-between text-amber-400 font-bold bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                        <span>{comp.us}</span> <CheckCircle className="w-4 h-4 shrink-0" />
                      </div>
                      <div className="flex items-center justify-between text-gray-500 font-medium px-3 py-1.5">
                        <span>{comp.them}</span> <X className="w-4 h-4 shrink-0" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MASSIVE FAQ (Rich Results Targeted) ================= */}
      <section className="py-24 px-6 relative z-10 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">الأسئلة <span className={goldGradient}>الشائعة</span></h2>
            <p className="text-lg text-gray-400">إجابات شفافة ومباشرة لكل ما يدور في ذهنك قبل بدء مشروعك الرقمي.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === index ? 'bg-white/10 border-amber-500/50' : 'bg-white/5 hover:bg-white/10 border-white/10'} border`}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 md:p-8 text-right flex justify-between items-center text-white focus:outline-none"
                >
                  <span className="font-bold text-lg md:text-xl pr-4 leading-relaxed">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeFaq === index ? 'bg-amber-500 text-black' : 'bg-white/10 text-white'}`}>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 md:p-8 pt-0 text-gray-400 font-medium text-lg leading-relaxed border-t border-white/5 mt-2">
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

      {/* ================= FINAL PREMIUM CTA ================= */}
      <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-[#030303] -z-10"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-20">
          
          <div className="w-24 h-24 mx-auto bg-amber-500/10 rounded-full border border-amber-500/30 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(251,191,36,0.3)]">
            <Rocket className="w-12 h-12 text-amber-500" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            ابدأ مشروعك مع <span className={goldGradient}>شركة تصميم مواقع الكترونية في مصر</span> {/* KW 12 */}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            لا تدع منافسيك يستحوذون على عملائك المحتملين. احصل على استشارة مجانية وقم بترقية وجودك الرقمي الآن.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={`https://wa.me/00201505388060?text=${encodeURIComponent("مرحباً، أرغب في الحصول على استشارة مجانية وعرض سعر لتصميم موقع في مصر.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-12 py-6 rounded-2xl ${buttonGold} text-2xl flex items-center gap-4`}
            >
              تواصل معنا عبر واتساب <ArrowLeft className="w-8 h-8" />
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6 text-gray-400 font-bold">
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-amber-500" /> استشارة مجانية</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-amber-500" /> رد خلال 24 ساعة</div>
          </div>

        </div>
      </section>

    </main>
  );
}