"use client";
import React from "react";
import Image from "next/image";
import { 
  MessageCircle, TrendingUp, Award, CheckCircle2, 
  Users, BarChart3, Star, ArrowUpRight, Search, 
  DollarSign, ShieldAlert, Rocket, TrendingDown, 
  AlertTriangle, Sparkles, HelpCircle, Layers, 
  Check, X, Compass, Wrench, FileText, Globe, 
  Zap, Bug, Database, FileCode, Sliders, Cpu, 
  Activity, Layout, Target, Copy, Link2, CheckCircle
} from "lucide-react";

// ==================== بيانات السكشن الأول (Hero) ====================
const trustNumbers = [
  { label: "سنوات خبرة", value: "+11", icon: Award, color: "text-yellow-400" },
  { label: "مشروع SEO ناجح", value: "+350", icon: CheckCircle2, color: "text-cyan-400" },
  { label: "زيارة عضوية", value: "+15M", icon: TrendingUp, color: "text-green-400" },
  { label: "عميل في مصر والخليج", value: "+120", icon: Users, color: "text-purple-400" },
];

const caseStudies = [
  {
    category: "المتاجر الإلكترونية",
    title: "متجر ملابس وأزياء",
    beforeVisits: "1,800",
    afterVisits: "26,000",
    growth: "+1344%",
    duration: "7 أشهر",
    badgeColor: "bg-yellow-400/10 text-yellow-400 border-yellow-400/30",
    glowColor: "hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]",
  },
  {
    category: "قطاع العقارات",
    title: "شركة تطوير عقاري",
    beforeVisits: "900",
    afterVisits: "18,500",
    growth: "+1955%",
    duration: "6 أشهر",
    badgeColor: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30",
    glowColor: "hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]",
  },
  {
    category: "قطاع المقاولات",
    title: "شركة تشطيبات ومقاولات",
    beforeVisits: "150",
    afterVisits: "8,900",
    growth: "+5833%",
    duration: "5 أشهر",
    badgeColor: "bg-green-400/10 text-green-400 border-green-400/30",
    glowColor: "hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]",
  },
];

// ==================== بيانات السكشن الثاني (خسائر عدم الاستثمار) ====================
const lossReasons = [
  {
    title: "منافسك يظهر قبلك في نتائج البحث",
    desc: "عندما يبحث العميل عن خدمة تقدمها، فإنه يضغط على النتائج الأولى. إذا كان منافسك في الصدارة وموقعك متأخر، فأنت تمنحه عملاءك مجانًا كل يوم.",
    icon: Search,
    borderColor: "border-red-500/40",
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.2)]",
    iconColor: "text-red-400",
    bg: "from-[#1a0c10] via-[#0d1527] to-[#040d1a]"
  },
  {
    title: "تكلفة الإعلانات المدفوعة ترتفع باستمرار",
    desc: "الاعتماد الكامل على الإعلانات يعني أنك تدفع مقابل كل عميل. ومع زيادة المنافسة ترتفع تكلفة النقرة، بينما الـ SEO يمنحك زيارات مجانية ومستدامة.",
    icon: DollarSign,
    borderColor: "border-amber-500/40",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.2)]",
    iconColor: "text-amber-400",
    bg: "from-[#1a150c] via-[#0d1527] to-[#040d1a]"
  },
  {
    title: "العملاء يثقون في النتائج الأولى أكثر",
    desc: "أغلب المستخدمين يعتبرون المواقع التي تصدرت الصفحة الأولى هي الأكثر موثوقية واحترافية، مما ينعكس مباشرة على ثقة الجمهور ومعدل المبيعات.",
    icon: ShieldAlert,
    borderColor: "border-cyan-500/40",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    iconColor: "text-cyan-400",
    bg: "from-[#0c181a] via-[#0d1527] to-[#040d1a]"
  },
  {
    title: "منافسوك يبنون حضورًا أقوى كل يوم",
    desc: "بينما تؤجل الاستثمار في الـ SEO، يعمل منافسوك على نشر المحتوى، استهداف كلمات جديدة، وتحسين Authority الموقع، مما يجعل تخطيهم أصعب مستقبلاً.",
    icon: Rocket,
    borderColor: "border-purple-500/40",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    iconColor: "text-purple-400",
    bg: "from-[#150c1a] via-[#0d1527] to-[#040d1a]"
  }
];

const costOfNoSEO = [
  { title: "انخفاض الزيارات", desc: "يفقد موقعك آلاف الزيارات العضوية التي يمكن أن تتحول لعملاء.", icon: TrendingDown, accent: "text-rose-400" },
  { title: "ارتفاع تكلفة التسويق", desc: "تعتمد بشكل كامل على الإعلانات المدفوعة للحصول على العملاء.", icon: DollarSign, accent: "text-amber-400" },
  { title: "انخفاض العملاء المحتملين", desc: "كلما انخفض ترتيبك، قلت فرص التواصل والمبيعات المباشرة.", icon: Users, accent: "text-cyan-400" },
  { title: "زيادة قوة المنافسين", desc: "كل شهر يمر يمنح منافسيك فرصة للسيطرة التامة على نتائج البحث.", icon: AlertTriangle, accent: "text-purple-400" }
];

// ==================== بيانات السكشن الثالث (SEO vs Ads & How We Work) ====================
const comparisonData = [
  { criterion: "💰 التكلفة", seo: "استثمار طويل الأجل يقلل تكلفة الحصول على العميل مع الوقت.", ads: "تدفع مقابل كل نقرة أو زيارة، وتزداد التكلفة مع المنافسة." },
  { criterion: "📈 الاستمرارية", seo: "النتائج تستمر حتى بعد انتهاء العمل، مع المتابعة الدورية.", ads: "تتوقف الزيارات فور إيقاف الحملة الإعلانية." },
  { criterion: "💵 العائد على الاستثمار (ROI)", seo: "يزداد تدريجيًا مع تحسن ترتيب الموقع ونمو الزيارات العضوية.", ads: "يعتمد على حجم الميزانية وقد ينخفض مع ارتفاع تكلفة الإعلانات." },
  { criterion: "👥 عدد العملاء المحتملين", seo: "يحقق تدفقًا مستمرًا من العملاء الباحثين عن الخدمة بشكل طبيعي.", ads: "مرتبط بحجم الميزانية اليومية وسقف الإنفاق." },
  { criterion: "⭐ ثقة العملاء", seo: "المستخدمون يثقون أكثر بالنتائج العضوية لأنها تُعتبر الأكثر مصداقية.", ads: "بعض المستخدمين يتجاوزون الإعلانات ويتجهون مباشرة إلى النتائج العضوية." },
  { criterion: "📊 قيمة العلامة التجارية", seo: "يبني حضورًا رقميًا وسلطة قوية لعلامتك التجارية على المدى الطويل.", ads: "يركز على تحقيق نتائج سريعة دون بناء سلطة حقيقية للموقع." },
  { criterion: "🎯 الاستهداف", seo: "يستهدف المستخدم في جميع مراحل رحلة الشراء عبر المحتوى والكلمات المفتاحية.", ads: "يعتمد على الكلمات المفتاحية والميزانية الإعلانية فقط." }
];

const workSteps = [
  {
    period: "الأسبوع الأول",
    title: "SEO Audit",
    subtitle: "تحليل شامل للموقع",
    desc: "نبدأ بفهم الوضع الحالي للموقع واكتشاف جميع المشكلات التي تؤثر على ظهوره في نتائج البحث.",
    points: [
      "تحليل الأداء الفني للموقع.",
      "فحص سرعة الموقع وCore Web Vitals.",
      "مراجعة الفهرسة وأرشفة الصفحات.",
      "تحليل الروابط الداخلية والخارجية.",
      "اكتشاف الأخطاء التقنية.",
      "دراسة المنافسين الحاليين.",
      "إعداد تقرير شامل بالأولويات."
    ],
    output: "تقرير تدقيق احترافي وخطة تنفيذ واضحة.",
    icon: Search,
    color: "from-amber-400 to-yellow-500",
    border: "border-yellow-500/40",
    glow: "shadow-[0_0_25px_rgba(234,179,8,0.2)]"
  },
  {
    period: "الأسبوع الثاني",
    title: "Keyword Mapping",
    subtitle: "بناء استراتيجية الكلمات المفتاحية",
    desc: "لا نختار الكلمات الأعلى بحثًا فقط، بل الكلمات التي تحقق أعلى عائد للأعمال.",
    points: [
      "تحليل نية الباحث (Search Intent).",
      "اختيار الكلمات التجارية.",
      "اكتشاف الكلمات طويلة الذيل.",
      "تجميع الكلمات في Clusters.",
      "توزيع الكلمات على صفحات الموقع.",
      "تحديد فرص إنشاء صفحات أو مقالات جديدة."
    ],
    output: "خريطة كلمات مفتاحية وهيكل محتوى يخدم أهدافك التجارية.",
    icon: Compass,
    color: "from-cyan-400 to-blue-500",
    border: "border-cyan-500/40",
    glow: "shadow-[0_0_25px_rgba(6,182,212,0.2)]"
  },
  {
    period: "الأسبوع الثالث",
    title: "Technical SEO",
    subtitle: "تحسين البنية التقنية للموقع",
    desc: "بعد تحديد الأولويات، نبدأ بمعالجة المشكلات التقنية التي تمنع الموقع من تحقيق أفضل أداء.",
    points: [
      "تحسين سرعة الموقع.",
      "إصلاح أخطاء الفهرسة.",
      "تحسين ملفات Robots وSitemap.",
      "تطبيق البيانات المنظمة (Schema).",
      "تحسين تجربة المستخدم على الجوال.",
      "معالجة الصفحات المكررة وأخطاء الزحف.",
      "تحسين بنية الروابط الداخلية."
    ],
    output: "موقع أسرع وأكثر توافقًا مع معايير Google.",
    icon: Wrench,
    color: "from-purple-400 to-indigo-500",
    border: "border-purple-500/40",
    glow: "shadow-[0_0_25px_rgba(168,85,247,0.2)]"
  },
  {
    period: "الشهر الثاني",
    title: "Content Strategy & Optimization",
    subtitle: "بناء محتوى يتصدر نتائج البحث",
    desc: "المحتوى هو الوقود الحقيقي لأي استراتيجية SEO ناجحة.",
    points: [
      "إنشاء خطة محتوى شهرية.",
      "كتابة صفحات الخدمات.",
      "إنشاء مقالات داعمة.",
      "تحسين المحتوى الحالي.",
      "بناء Topical Authority.",
      "ربط الصفحات داخليًا بطريقة استراتيجية.",
      "تحسين معدل التحويل داخل المحتوى."
    ],
    output: "محتوى احترافي يجذب الزيارات ويحولها إلى عملاء.",
    icon: FileText,
    color: "from-green-400 to-emerald-500",
    border: "border-green-500/40",
    glow: "shadow-[0_0_25px_rgba(34,197,94,0.2)]"
  },
  {
    period: "الشهر الثالث",
    title: "Authority Building",
    subtitle: "بناء سلطة الموقع",
    desc: "حتى أفضل المحتوى يحتاج إلى تعزيز ثقة Google.",
    points: [
      "بناء روابط خلفية عالية الجودة.",
      "تحسين الإشارات الرقمية للعلامة التجارية.",
      "تعزيز الظهور في النتائج المحلية (Local SEO).",
      "تحسين ملف Google Business Profile.",
      "الحصول على إشارات من مواقع موثوقة.",
      "مراقبة قوة النطاق والمنافسين."
    ],
    output: "زيادة سلطة الموقع وتحسين فرص المنافسة على الكلمات الصعبة.",
    icon: Globe,
    color: "from-rose-400 to-red-500",
    border: "border-rose-500/40",
    glow: "shadow-[0_0_25px_rgba(244,63,94,0.2)]"
  },
  {
    period: "الشهر الرابع وما بعده",
    title: "Growth & Scaling",
    subtitle: "التوسع وتحقيق نمو مستدام",
    desc: "بعد تحقيق الأساس القوي، نبدأ في مرحلة التوسع وزيادة الحصة السوقية.",
    points: [
      "استهداف كلمات مفتاحية جديدة.",
      "إنشاء صفحات خدمات إضافية.",
      "تطوير المحتوى بناءً على بيانات الأداء.",
      "تحسين معدل التحويل (CRO).",
      "متابعة المنافسين بشكل دوري.",
      "إصدار تقارير شهرية توضح النمو والنتائج.",
      "تحسين الاستراتيجية باستمرار وفق تحديثات Google."
    ],
    output: "نمو مستمر في الزيارات العضوية والعملاء المحتملين بأعلى ROI.",
    icon: Zap,
    color: "from-amber-300 via-yellow-400 to-amber-500",
    border: "border-yellow-400/60",
    glow: "shadow-[0_0_30px_rgba(234,179,8,0.3)]"
  }
];

// ==================== بيانات السكشن الرابع (الشهر الأول - Marquee) ====================
const monthOneChecks = [
  {
    code: "Crawl Errors",
    title: "تحليل أخطاء الزحف",
    desc: "نفحص جميع الأخطاء التي تمنع روبوتات Google من الوصول إلى صفحات موقعك، مثل صفحات 404، وأخطاء الخادم، والروابط المكسورة، وسلاسل إعادة التوجيه (Redirect Chains).",
    icon: Bug,
    tag: "Technical",
    accent: "text-rose-400",
    border: "border-rose-500/30",
    bg: "from-rose-950/30 via-[#091730] to-[#040D1A]"
  },
  {
    code: "Indexing",
    title: "مراجعة الفهرسة",
    desc: "نتحقق من الصفحات المفهرسة وغير المفهرسة، ونحدد أسباب عدم ظهور بعض الصفحات في نتائج البحث، مع معالجة مشكلات Noindex، والصفحات المستبعدة والمكررة.",
    icon: Database,
    tag: "Indexing",
    accent: "text-amber-400",
    border: "border-amber-500/30",
    bg: "from-amber-950/30 via-[#091730] to-[#040D1A]"
  },
  {
    code: "XML Sitemap",
    title: "مراجعة خريطة الموقع",
    desc: "نتأكد من أن ملف XML Sitemap محدث ويحتوي على جميع الصفحات المهمة، وأنه مرسل إلى Google Search Console بطريقة صحيحة لتسهيل اكتشاف المحتوى.",
    icon: FileCode,
    tag: "Sitemap",
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "from-cyan-950/30 via-[#091730] to-[#040D1A]"
  },
  {
    code: "Robots.txt",
    title: "فحص ملف Robots",
    desc: "نراجع ملف robots.txt للتأكد من أنه لا يمنع Google من الوصول إلى الصفحات المهمة، وأنه يسمح بالزحف إلى المحتوى الذي تريد ظهوره في نتائج البحث.",
    icon: Sliders,
    tag: "Access",
    accent: "text-purple-400",
    border: "border-purple-500/30",
    bg: "from-purple-950/30 via-[#091730] to-[#040D1A]"
  },
  {
    code: "Core Web Vitals",
    title: "قياس تجربة المستخدم",
    desc: "نحلل مؤشرات الأداء الأساسية التي تعتمد عليها Google لتقييم تجربة المستخدم، مع تحديد المشكلات التي تؤثر على سرعة الموقع واستقراره واستجابته.",
    icon: Cpu,
    tag: "Performance",
    accent: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "from-emerald-950/30 via-[#091730] to-[#040D1A]"
  },
  {
    code: "CLS",
    title: "استقرار تصميم الصفحة",
    desc: "نقيس معدل Cumulative Layout Shift (CLS) للتأكد من أن عناصر الصفحة لا تتحرك بشكل مفاجئ أثناء التحميل، مما يوفر تجربة استخدام احترافية ويقلل الارتداد.",
    icon: Layout,
    tag: "UX Metric",
    accent: "text-blue-400",
    border: "border-blue-500/30",
    bg: "from-blue-950/30 via-[#091730] to-[#040D1A]"
  },
  {
    code: "LCP",
    title: "سرعة تحميل المحتوى الرئيسي",
    desc: "نقيس Largest Contentful Paint (LCP) لمعرفة الوقت الذي يستغرقه تحميل أهم عنصر داخل الصفحة، ثم نعمل على تحسين الصور والخادم لتقليل زمن التحميل.",
    icon: Activity,
    tag: "Speed Metric",
    accent: "text-yellow-400",
    border: "border-yellow-500/30",
    bg: "from-yellow-950/30 via-[#091730] to-[#040D1A]"
  },
  {
    code: "INP",
    title: "سرعة استجابة الموقع",
    desc: "نفحص Interaction to Next Paint (INP) لمعرفة مدى سرعة استجابة الموقع لتفاعل المستخدم، مثل الضغط على الأزرار أو فتح القوائم تقديمًا لتجربة سلسة.",
    icon: Zap,
    tag: "Responsiveness",
    accent: "text-orange-400",
    border: "border-orange-500/30",
    bg: "from-orange-950/30 via-[#091730] to-[#040D1A]"
  },
  {
    code: "Schema Markup",
    title: "مراجعة البيانات المنظمة",
    desc: "نتحقق من تطبيق Schema Markup بالشكل الصحيح لمساعدة Google على فهم محتوى الموقع وزيادة فرص الظهور بنتائج البحث الغنية (Rich Results).",
    icon: Target,
    tag: "Structured Data",
    accent: "text-pink-400",
    border: "border-pink-500/30",
    bg: "from-pink-950/30 via-[#091730] to-[#040D1A]"
  },
  {
    code: "Internal Links",
    title: "تحليل الروابط الداخلية",
    desc: "نراجع بنية الروابط الداخلية بالكامل لضمان انتقال قوة الصفحات المهمة، وتحسين تجربة التنقل، ومساعدة محركات البحث على اكتشاف الصفحات بسهولة.",
    icon: Link2,
    tag: "Architecture",
    accent: "text-teal-400",
    border: "border-teal-500/30",
    bg: "from-teal-950/30 via-[#091730] to-[#040D1A]"
  },
  {
    code: "Duplicate Content",
    title: "اكتشاف المحتوى المكرر",
    desc: "نفحص الصفحات التي تحتوي على محتوى متشابه أو مكرر، ونحدد الحلول المناسبة مثل Canonical Tags أو إعادة هيكلة المحتوى، لمنع تشتت قوة الموقع.",
    icon: Copy,
    tag: "Content Quality",
    accent: "text-indigo-400",
    border: "border-indigo-500/30",
    bg: "from-indigo-950/30 via-[#091730] to-[#040D1A]"
  }
];

const monthOneDeliverables = [
  "جميع المشكلات التقنية مرتبة حسب الأولوية.",
  "الفرص السريعة التي يمكن تنفيذها لتحقيق نتائج مبكرة (Quick Wins).",
  "الكلمات المفتاحية الأكثر قيمة لنشاطك.",
  "تحليل شامل لأقوى المنافسين في السوق.",
  "خطة محتوى مبنية على نية الباحث (Search Intent).",
  "خارطة طريق تنفيذية للأشهر القادمة.",
  "مؤشرات الأداء (KPIs) التي سنقيس بها النجاح."
];

export default function SEOCompanyCairoPage() {
  return (
    <main className="w-full bg-[#040D1A] text-white font-cairo overflow-hidden min-h-screen" style={{ direction: "rtl" }}>
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen py-16 lg:py-24 border-b border-slate-800/80">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <Image
            src="/seocompanycairo.webp"
            alt="شركة سيو في القاهرة ومصر تحقق نمواً حقيقياً"
            fill
            priority
            unoptimized
            className="object-cover object-center opacity-85 select-none scale-100 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040D1A]/60 via-[#040D1A]/70 to-[#040D1A] z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#040D1A]/80 border border-yellow-500/40 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)] animate-slide-down">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
            <span className="text-xs md:text-sm font-bold text-yellow-400">نتائج مثبتة وأرقام تتحدث عن نفسها</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-center text-white leading-tight lg:leading-[1.15] mb-6 max-w-5xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] animate-fade-in">
            شركة سيو في مصر تحقق <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">نموًا حقيقيًا</span> في الزيارات والعملاء وليس مجرد تحسين ترتيب الكلمات!
          </h1>

          <p className="text-base md:text-xl text-slate-200 font-semibold text-center mb-12 max-w-3xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            نعمل على زيادة الزيارات العضوية وتحويل الباحثين إلى عملاء دائمين من خلال استراتيجية SEO علمية، آمنة، ومبنية على تحليل البيانات والأرقام الملموسة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md sm:max-w-none mb-16">
            <a
              href="https://wa.me/201505388060"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-5 rounded-2xl font-black text-sky-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 hover:scale-[1.04] transition-all shadow-[0_0_30px_rgba(234,179,8,0.4)] text-base md:text-lg group"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              احصل على تحليل SEO مجاني لموقعك
            </a>

            <a
              href="https://www.uniquee-ws.com/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-5 rounded-2xl font-bold text-white bg-[#040D1A]/80 border border-slate-500/80 hover:bg-white/10 hover:border-yellow-400/80 transition-all backdrop-blur-md text-base md:text-lg shadow-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
            >
              <BarChart3 className="w-5 h-5 text-yellow-400" />
              شاهد نتائج ودراسات الحالة
            </a>
          </div>

          <div className="w-full max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
            {trustNumbers.map((item, idx) => {
              const IconC = item.icon;
              return (
                <div
                  key={idx}
                  className="relative p-6 md:p-8 rounded-3xl bg-[#091833]/90 backdrop-blur-md border-2 border-slate-700/70 hover:border-yellow-500/80 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent group-hover:via-yellow-400 opacity-70 transition-all" />
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconC className={`w-7 h-7 ${item.color} drop-shadow-[0_0_8px_currentColor]`} />
                  </div>
                  <span className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs md:text-sm font-semibold text-slate-300">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div id="case-studies" className="w-full max-w-6xl pt-6">
            <div className="text-center mb-10">
              <span className="inline-block bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 tracking-wider backdrop-blur-sm">
                PROOF OF RESULTS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-md">
                قصص نجاح واقعية <span className="text-yellow-400">بالأرقام والنتائج</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {caseStudies.map((study, idx) => (
                <div
                  key={idx}
                  className={`relative p-7 md:p-8 rounded-[2.5rem] bg-gradient-to-br from-[#081730]/95 via-[#061226]/95 to-[#040D1A]/95 backdrop-blur-md border-2 border-slate-700/80 ${study.glowColor} shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between group overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-black border ${study.badgeColor}`}>
                        {study.category}
                      </span>
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                        المدة: {study.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white mb-6 group-hover:text-yellow-400 transition-colors">
                      {study.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#040D1A]/90 border border-slate-800 mb-6">
                      <div className="flex flex-col text-right">
                        <span className="text-xs text-slate-400 font-medium mb-1">قبل السيو</span>
                        <span className="text-lg font-black text-rose-400 line-through decoration-rose-500/50">
                          {study.beforeVisits}
                        </span>
                        <span className="text-[10px] text-slate-400">زيارة شهرياً</span>
                      </div>

                      <div className="flex flex-col text-right border-r border-slate-800 pr-3">
                        <span className="text-xs text-slate-400 font-medium mb-1">بعد السيو</span>
                        <span className="text-xl font-black text-green-400">
                          {study.afterVisits}
                        </span>
                        <span className="text-[10px] text-slate-400">زيارة شهرياً</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">معدل النمو</span>
                      <span className="text-2xl font-black text-yellow-400 tracking-tight">
                        {study.growth}
                      </span>
                    </div>

                    <a
                      href="https://www.uniquee-ws.com/projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-sky-950 transition-all group-hover:scale-110"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 2: ماذا يحدث عندما لا تستثمر في الـ SEO؟ */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#030914] border-b border-slate-800/80">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 backdrop-blur-md mb-6">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span className="text-xs md:text-sm font-bold text-rose-400">تنبيه هام لكل صاحب عمل</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              ماذا يحدث عندما <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-400 to-yellow-400">لا تستثمر</span> في تحسين محركات البحث (SEO)؟
            </h2>

            <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-6">
              كل يوم يتأخر فيه موقعك عن الظهور في نتائج البحث، يزداد عدد العملاء الذين يتجهون مباشرة إلى منافسيك. فاليوم لم يعد امتلاك موقع إلكتروني كافيًا، بل أصبح الظهور في الصفحة الأولى من Google هو العامل الذي يحدد من يحصل على العملاء ومن يظل بعيدًا عن المنافسة.
            </p>
            
            <p className="text-sm md:text-base text-yellow-400/90 font-bold bg-yellow-400/5 border border-yellow-400/20 p-4 rounded-2xl max-w-2xl mx-auto">
              بدون استراتيجية SEO احترافية، ستفقد فرصًا حقيقية للنمو، بينما يستمر منافسوك في بناء حضورهم الرقمي وجذب المزيد من العملاء المحتملين.
            </p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-white">
              لماذا تخسر آلاف العملاء المحتملين كل شهر؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {lossReasons.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className={`relative p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br ${item.bg} border-2 ${item.borderColor} ${item.glow} backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] group overflow-hidden flex flex-col justify-between`}
                >
                  <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-yellow-400 transition-all duration-500" />
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${item.iconColor} drop-shadow-[0_0_10px_currentColor]`} />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-8 sm:p-12 rounded-[3rem] bg-gradient-to-b from-[#08152c] to-[#040d1a] border-2 border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.9)] mb-20">
            <div className="text-center mb-10">
              <span className="text-rose-400 font-black text-xs sm:text-sm uppercase tracking-widest block mb-2">COST OF DELAY</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                📉 تكلفة عدم الاستثمار في SEO أكبر مما تتخيل
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {costOfNoSEO.map((cost, idx) => {
                const IconC = cost.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#040D1A]/90 border border-slate-800 hover:border-slate-600 transition-all hover:scale-105 flex flex-col items-center text-center group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                      <IconC className={`w-6 h-6 ${cost.accent}`} />
                    </div>
                    <h5 className="text-lg font-black text-white mb-2">{cost.title}</h5>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">{cost.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#0d2142] via-[#091730] to-[#051024] border-2 border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.2)] text-center max-w-4xl mx-auto overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 animate-pulse" />
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black mb-4">
              <Sparkles className="w-4 h-4" />
              الفرصة ما زالت قائمة
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white mb-4">
              💡 الخبر الجيد... النتائج ليست دائمة، ويمكن تغييرها!
            </h3>

            <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed max-w-3xl mx-auto mb-8">
              من خلال استراتيجية SEO مبنية على تحليل المنافسين، وتحسين الموقع تقنيًا، وإنشاء محتوى يستهدف نية الباحث، وبناء سلطة قوية للموقع، يمكن تحويل موقعك إلى مصدر مستمر للعملاء المحتملين وتحقيق نمو طويل الأمد دون الاعتماد الكامل على الإعلانات.
            </p>

            <div className="pt-8 border-t border-slate-700/60 flex flex-col items-center">
              <h4 className="text-xl font-black text-yellow-400 mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6" />
                هل تريد معرفة لماذا لا يظهر موقعك في الصفحة الأولى؟
              </h4>

              <a
                href="https://wa.me/201505388060"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-sky-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 hover:scale-[1.05] transition-all shadow-[0_0_30px_rgba(234,179,8,0.45)] text-lg group"
              >
                <MessageCircle className="w-7 h-7 fill-current" />
                اطلب تحليل SEO مجاني الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION 3: SEO أم Google Ads؟ أيهما الأنسب + كيف نعمل؟ */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#040D1A] border-b border-slate-800/80">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          
          {/* مقدمة المقارنة */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md mb-6">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-xs md:text-sm font-bold text-cyan-400">مقارنة شاملة وواضحة</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              لماذا أصبح تحسين محركات البحث (SEO) <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-amber-400">أهم من الإعلانات المدفوعة؟</span>
            </h2>

            <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-6">
              الإعلانات المدفوعة وسيلة فعّالة للحصول على نتائج سريعة، لكنها تتوقف بمجرد توقف الميزانية. أما تحسين محركات البحث (SEO)، فهو استثمار طويل الأجل يهدف إلى بناء حضور رقمي مستدام، وجذب عملاء يبحثون بالفعل عن خدماتك دون الحاجة إلى الدفع مقابل كل زيارة.
            </p>

            <p className="text-sm md:text-base text-cyan-300/90 font-bold bg-cyan-950/40 border border-cyan-500/20 p-4 rounded-2xl max-w-3xl mx-auto backdrop-blur-sm">
              لهذا السبب تعتمد الشركات الرائدة على SEO والإعلانات معًا، لكن تجعل السيو هو الأساس الذي يضمن لها النمو المستمر وتقليل تكلفة الحصول على العملاء بمرور الوقت.
            </p>
          </div>

          {/* جدول المقارنة الفخم والواضح */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                📊 SEO أم Google Ads؟ أيهما الأنسب لنمو أعمالك؟
              </h3>
            </div>

            <div className="w-full overflow-x-auto rounded-[2.5rem] border-2 border-slate-700/80 bg-gradient-to-b from-[#081730] to-[#040d1a] shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md">
              <table className="w-full text-right border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-700/80 bg-[#061226]">
                    <th className="p-6 text-lg font-black text-yellow-400 w-1/4">المعيار</th>
                    <th className="p-6 text-lg font-black text-green-400 w-3/8 bg-green-500/5">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-400" />
                        تحسين محركات البحث (SEO)
                      </div>
                    </th>
                    <th className="p-6 text-lg font-black text-rose-400 w-3/8 bg-rose-500/5">
                      <div className="flex items-center gap-2">
                        <X className="w-5 h-5 text-rose-400" />
                        الإعلانات المدفوعة (Google Ads)
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6 font-bold text-white text-base group-hover:text-yellow-400 transition-colors">
                        {row.criterion}
                      </td>
                      <td className="p-6 text-slate-200 text-sm md:text-base font-medium leading-relaxed bg-green-500/[0.02]">
                        {row.seo}
                      </td>
                      <td className="p-6 text-slate-400 text-sm md:text-base font-medium leading-relaxed bg-rose-500/[0.02]">
                        {row.ads}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* التوضيح: هل الإعلانات غير مهمة؟ */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#091b36] to-[#040d1a] border-2 border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.7)] mb-28 max-w-4xl mx-auto">
            <h4 className="text-2xl font-black text-white mb-4 text-center">
              هل هذا يعني أن الإعلانات غير مهمة؟
            </h4>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mb-6" />
            <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed mb-6 text-center">
              بالتأكيد لا. الإعلانات المدفوعة ممتازة لإطلاق المنتجات الجديدة، والعروض المؤقتة، وتحقيق نتائج سريعة، لكن الاعتماد عليها وحدها يعني أنك ستظل تدفع مقابل كل عميل جديد.
            </p>
            <p className="text-yellow-300 font-bold text-base sm:text-lg leading-relaxed text-center bg-yellow-400/10 p-4 rounded-2xl border border-yellow-400/20">
              أما تحسين محركات البحث فيحول موقعك إلى أصل رقمي يحقق زيارات مجانية ومستدامة، ويعمل على جذب العملاء حتى أثناء عدم تشغيل أي حملات إعلانية.
            </p>
          </div>

          {/* قسم: كيف نعمل؟ (How We Work Timeline) */}
          <div className="pt-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-md mb-4">
                <Rocket className="w-4 h-4 text-yellow-400" />
                <span className="text-xs md:text-sm font-bold text-yellow-400">منهجية مثبتة ونتائج مضمونة</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                كيف <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">نعمل؟</span>
              </h2>

              <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
                في شركتنا لا نعتمد على حلول عشوائية أو تنفيذ مهام متفرقة، بل نتبع خطة عمل واضحة تبدأ بتحليل موقعك وتنتهي بتحقيق نمو مستدام في الزيارات والعملاء.
              </p>
            </div>

            {/* الخريطة الزمنيّة - Timeline الكروت */}
            <div className="relative border-r-2 border-slate-800 mr-4 md:mr-10 pr-6 md:pr-12 space-y-12 mb-10">
              {workSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="relative group">
                    <div className="absolute -right-[31px] md:-right-[55px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#040D1A] border-4 border-yellow-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(234,179,8,0.8)] z-20" />

                    <div className={`p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#081730] via-[#061226] to-[#040d1a] border-2 ${step.border} ${step.glow} backdrop-blur-md transition-all duration-500 hover:-translate-y-2`}>
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} p-0.5 shadow-lg`}>
                            <div className="w-full h-full bg-[#040D1A] rounded-[14px] flex items-center justify-center">
                              <IconComponent className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-black text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded-full inline-block mb-1">
                              {step.period}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-white">
                              {step.title} <span className="text-slate-400 text-base font-normal">({step.subtitle})</span>
                            </h3>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-300 text-base font-medium mb-6 leading-relaxed">
                        {step.desc}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-400 mb-3">يتضمن ذلك:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {step.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-2.5 text-slate-200 text-sm font-medium">
                              <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#040D1A]/90 border border-slate-800 flex items-center gap-3">
                        <span className="text-xs font-black text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-lg border border-yellow-400/30 flex-shrink-0">
                          المخرجات
                        </span>
                        <p className="text-sm font-bold text-white">
                          {step.output}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 4: ماذا يحدث خلال أول شهر من العمل؟ (شريط أخبار واحد متحرك) */}
      {/* ========================================================================= */}
      <section className="py-24 relative overflow-hidden bg-[#02060E]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-yellow-500/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl px-6 md:px-12 relative z-10 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-md mb-6">
              <Wrench className="w-4 h-4 text-yellow-400" />
              <span className="text-xs md:text-sm font-bold text-yellow-400">التأسيس الفني الشامل</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              ماذا يحدث خلال <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">أول شهر</span> من العمل؟
            </h2>

            <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-6">
              لا نبدأ بكتابة المحتوى أو بناء الروابط مباشرة، بل نبدأ بفهم موقعك من الداخل واكتشاف كل ما يمنع Google من منحه الترتيب الذي يستحقه.
            </p>

            <p className="text-sm md:text-base text-yellow-300/90 font-bold bg-yellow-400/5 border border-yellow-400/20 p-4 rounded-2xl max-w-3xl mx-auto backdrop-blur-sm">
              خلال أول شهر، نجري تدقيقًا تقنيًا واستراتيجيًا شاملًا للموقع، ونحلل أكثر من 100 نقطة فحص لضمان بناء استراتيجية SEO على أسس صحيحة، وليس على التخمين.
            </p>
          </div>
        </div>

        {/* شريط الأخبار المتحرك الوحيد (من الشمال إلى اليمين) */}
        <div className="w-full overflow-hidden py-6 mb-20 relative group">
          {/* ظلال التدرج على الأطراف لإعطاء تأثير إخفاء ناعم */}
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#02060E] to-transparent z-20 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#02060E] to-transparent z-20 pointer-events-none" />

          <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused] gap-6">
            {[...monthOneChecks, ...monthOneChecks].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`w-[320px] sm:w-[380px] flex-shrink-0 p-7 rounded-[2rem] bg-gradient-to-br ${item.bg} border-2 ${item.border} backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between transition-transform duration-300 hover:scale-105`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <IconComp className={`w-6 h-6 ${item.accent}`} />
                      </div>
                      <span className="text-[11px] font-black tracking-widest uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                        {item.tag}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className={`text-xs font-black uppercase tracking-wider block ${item.accent}`}>
                        {item.code}
                      </span>
                      <h3 className="text-xl font-black text-white">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* المخرجات والنتائج بعد أول شهر */}
        <div className="container mx-auto max-w-5xl px-6 md:px-12 relative z-10">
          <div className="p-8 sm:p-12 rounded-[3rem] bg-gradient-to-br from-[#081730] via-[#061226] to-[#040d1a] border-2 border-yellow-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md">
            
            <div className="text-center mb-10">
              <span className="text-yellow-400 font-black text-xs sm:text-sm uppercase tracking-widest block mb-2">MONTH 1 DELIVERABLES</span>
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                وفي نهاية الشهر الأول ستحصل على:
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium mt-2">
                بدلًا من مجرد تقرير تقليدي، ستحصل على خطة تنفيذ واضحة توضح:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {monthOneDeliverables.map((deliv, dIdx) => (
                <div key={dIdx} className="p-4 rounded-2xl bg-[#040D1A]/80 border border-slate-800 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm md:text-base font-bold leading-snug">{deliv}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 text-center mb-8">
              <h4 className="text-lg font-black text-yellow-400 mb-2">🚀 النتيجة بعد أول شهر</h4>
              <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed max-w-3xl mx-auto">
                بنهاية الشهر الأول، لن يكون لديك مجرد تقرير SEO، بل خطة استراتيجية متكاملة توضح بدقة ما الذي يمنع موقعك من تصدر نتائج البحث، وما هي الخطوات المطلوبة لتحقيق نمو مستدام في الزيارات والعملاء. هذه المرحلة هي الأساس الذي تُبنى عليه جميع أعمال التحسين اللاحقة، مما يضمن أن كل خطوة يتم تنفيذها تحقق قيمة حقيقية لأعمالك.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/201505388060"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-5 rounded-2xl font-black text-sky-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 hover:scale-[1.04] transition-all shadow-[0_0_30px_rgba(234,179,8,0.4)] text-lg"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                اطلب فحص موقعك للبدء الآن
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* الأنيميشنات لربط الماركي والظهور */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(50%); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.8s ease-out forwards;
        }
        .animate-marquee-left {
          animation: marqueeLeft 35s linear infinite;
        }
      `}</style>
    </main>
  );
}