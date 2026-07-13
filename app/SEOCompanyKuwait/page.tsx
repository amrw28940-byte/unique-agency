"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { 
  MessageCircle, 
  Search, 
  Wrench, 
  TrendingUp, 
  Key, 
  FileText, 
  Link2, 
  ChevronDown, 
  Building, 
  TrendingDown, 
  AlertTriangle, 
  Globe, 
  Target, 
  FileCheck, 
  ChartBar, 
  CheckCircle, 
  Users, 
  BarChart, 
  ShieldCheck, 
  Zap, 
  ShieldAlert, 
  Share2,
  Sparkles,
  Layers,
  Activity,
  Cpu
} from "lucide-react";

// Number Counter Component with Smooth Animation
function CounterItem({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth stop
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-yellow-400 mb-2 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]">
        {count}{suffix}
      </div>
      <div className="text-gray-300 text-sm sm:text-base font-bold">{label}</div>
    </div>
  );
}

const kuwaitAchievements = [
  "متصدرين أكثر من 120 موقع بالسوق الكويتي وعطونا الثقة",
  "نزيد أرباحك وزوار موقعك بنسب خيالية وواضحة",
  "فريق خبرة فاهم وعارف شسالفة السيو الكويتي عدل",
  "تقارير واضحة بالملي وبدون لف ودوران ولا تخمين",
  "شغل برمجيات وتقنية يرضي غوغل ويحبه حيل",
  "دعم فني وياك أول بأول وعلى مدار الساعة وطوال الأسبوع"
];

const seoStepsList = [
  { title: "الاستهداف الدقيق للكلمات", description: "نحدد الكلمات والعبارات اللي يبحث عنها عميلك بالكويت عشان ندمجها صح في المحتوى.", icon: Key },
  { title: "تحسين المحتوى (On-Page)", description: "نصيغ نصوص قوية، ونرتب العناوين والصور عشان نرضي الزائر وغوغل مع بعض.", icon: FileText },
  { title: "التحسين التقني (Technical)", description: "نعدل الأكواد عشان تصير السرعة طيارة والأمان عالي لعناكب البحث.", icon: Wrench },
  { title: "بناء الروابط (Off-Page)", description: "نجيب لك إشارات وروابط قوية وثقيلة ترفع سلطة موقعك فوق.", icon: TrendingUp },
  { title: "التحليل والتتبع المستمر", description: "نراقب الأداء بأحدث الأدوات لضمان نمو الزوار دايم وما ينزلون.", icon: Activity },
];

const whyChooseUsData = [
  {
    num: "01",
    title: "عندنا هدف واضح!",
    desc: "نحن في يونيك افضل شركة سيو في الكويت نسعى لقيادة السوق العربي في مجال السيو، وصناعة المحتوى، والتسويق الرقمي. وعشان نوصل لهالهدف.. ندري زين إن طريقنا الأول هو إننا نحقق لك نجاحك وتصدرك أنت أولاً!",
    icon: Target,
    border: "border-yellow-500/40",
    bg: "bg-gradient-to-br from-[#091428] via-[#0D1B36] to-[#040D1A]",
    accent: "text-yellow-400"
  },
  {
    num: "02",
    title: "نبني وياك شراكة حقيقية",
    desc: "اللي يخلينا الخيار الأفضل لك، هو إننا ما نتعامل وياك كـ \"عميل\".. أنت عندنا \"شريك نجاح\"! ولأن نجاح بزنسك هو نجاح لاسمنا، فنحن نحط إيدنا بإيدك ونشتغل كأننا فريق واحد جوه شركتك.. وطبعاً، بدون ما نشاركك في أرباحك!",
    icon: Users,
    border: "border-cyan-500/40",
    bg: "bg-gradient-to-br from-[#041126] via-[#091C3E] to-[#040D1A]",
    accent: "text-cyan-400"
  },
  {
    num: "03",
    title: "نوظف صفوة الخبراء",
    desc: "سمعتنا هي راس مالنا، وعشان كذا ما نعتمد إلا على كفاءات وخبرات تعدت الـ 8 سنوات. هذا غير إن قسم البحث والتطوير (R&D) عندنا شغال على مدار الساعة عشان يتابع أي تحديث ويضمن إن مشروعك ماشي في السليم.",
    icon: Cpu,
    border: "border-purple-500/40",
    bg: "bg-gradient-to-br from-[#120B24] via-[#1D123C] to-[#040D1A]",
    accent: "text-purple-400"
  },
  {
    num: "04",
    title: "نضمن لك نتائج تلمسها بنفسك",
    desc: "نحن في شركة سيو في الكويت نسخر كل خبراتنا وسنين شغلنا عشان نكبر بزنسك. استراتيجياتنا وخططنا أثبتت كفاءتها في السوق، وقدرت تصمد وبقوة أمام أصعب وأعقد تحديثات خوارزميات جوجل.",
    icon: ShieldCheck,
    border: "border-green-500/40",
    bg: "bg-gradient-to-br from-[#041F16] via-[#0A3828] to-[#040D1A]",
    accent: "text-green-400"
  }
];

const whatIsSeoPoints = [
  {
    title: "1. السيو مش سحر!",
    desc: "جوجل ما يختار المواقع اللي تتصدر عشوائياً أو بالحظ، السالفة كلها إن عنده خوارزميات (لوغاريتمات) دقيقة ترتب النتائج بناءً على عوامل معينة. ونحن في يونيك شركة سيو في الكويت، حملات السيو عنا مصممة عشان تطوّر وتحسن كل شبر وكل حرف في موقعك وتخليه يطابق هالعوامل، والنتيجة؟ تتصدر القائمة، وتجيك زيارات جاهزة ومستهدفة، وتضاعف أرباحك.",
    icon: Sparkles
  },
  {
    title: "2. السيو مش رفاهية",
    desc: "إذا عندك مشروع اليوم، فوجودك على الإنترنت ما عاد مجرد خيار تقدر تطنشه، خاصة لو كنت جاد وتبغى تجذب عملاء مهتمين وفلوسهم جاهزة. وهذا معناه إن السيو مش خيار تجميلي؛ أنت تحتاجه وبقوة عشان تبين فوق ويا \"يونيك\"، نحن قادرين نوصلك لأهدافك مهما كان حجم البزنس حقك.",
    icon: Layers
  },
  {
    title: "3. السيو يخليك \"الخيار الأول\"",
    desc: "تخيل إن 93% من الزيارات اللي تدخل المواقع تجيها من محركات البحث! هالرقم يخليك دايماً حريص إنك تكون أول اسم يلمحه العميل لما يبحث عن خدمتك. السيو هو اللي يضمن لك هالشيء، ونحن في يونيك عندنا خبرة طافت الـ 9 سنوات في إدارة وتكبير المشاريع الرقمية بمختلف أحجامها ومجالاتها.",
    icon: TrendingUp
  }
];

const seoServicesGrid = [
  {
    title: "1. السيو التقني (Technical SEO)",
    desc: "نمسك موقعك ونحل كل مشاكله البرمجية والتقنية؛ من أول بنية الموقع وتجهيزه لعناكب البحث، مروراً بمشاكل الزحف والفهرسة، لين نسرّع الموقع بالملي. وطبعاً نسلمك تقرير مفصل يوضح لك الفرق قبل وبعد الشغل.",
    icon: Wrench,
    cardBg: "bg-[#091428]",
    borderColor: "border-yellow-500/40"
  },
  {
    title: "2. السيو الداخلي (On-Page SEO)",
    desc: "نسوي لك دراسة كلمات مفتاحية (Keyword Research) عشان نغطي الفجوة بينك وبين أقوى منافسينك. هذا غير تخطيط وبناء شبكة روابط داخلية ذكية لموقعك، وتعديل العناوين والوصف (Meta Title & Description) عشان نرفع نسبة الضغط على رابط موقعك (CTR) لما يظهر في جوجل.",
    icon: FileText,
    cardBg: "bg-[#051126]",
    borderColor: "border-cyan-500/40"
  },
  {
    title: "3. السيو الخارجي (Off-Page SEO)",
    desc: "نحلل ونفحص ملف الروابط الخلفية (Backlinks) لموقعك، وننظفه من الروابط العشوائية والمضرة عبر ملف تنصل (Disavow File) نرفعه في الوقت الصح. بعدها، نرسم وننفذ استراتيجية باك لينكس قوية تخليك تتصدر وتطير بـ موقعك بعيد عن المنافسين.",
    icon: Link2,
    cardBg: "bg-[#140A28]",
    borderColor: "border-purple-500/40"
  },
  {
    title: "4. خدمة الجيست بوست (Guest Posting)",
    desc: "كل خبراء السيو يبصمون بالعشرة إن \"الجيست بوست\" هو الملك وأفضل طريقة لبناء باك لينكس قوي وموثوق. وتأكد إنك ويا يونيك، ومهما كان مجال بزنسك، بتلاقي عندنا قائمة بمواقع قوية ومتخصصة في نفس مجالك ومستعدة تنشر عنك.",
    icon: Share2,
    cardBg: "bg-[#041F16]",
    borderColor: "border-green-500/40"
  }
];

const comprehensiveSteps = [
  { title: "تحليل وفحص عميق لموقعك 🔍", desc: "فريق السيو التقني (Technical SEO) عندنا يسحب موقعك بالكامل على أنظمتنا، عشان نفحص كل الروابط ونكشف أي مشكلة تقنية أو برمجية تخص السيو الداخلي، ونصنفها ونشوف تأثيرها عشان نحلها من جذورها." },
  { title: "تنظيف وفحص ملف الروابط 🧼", desc: "فريقنا يراجع كل الروابط اللي تشير لموقعك والروابط اللي طالعة منه. نرسم استراتيجية طويلة المدى لتنقية هالروابط والتخلص من المضر منها، وبطريقة ذكية تضمن عدم تأثر ترتيبك الحالي في جوجل." },
  { title: "هندسة وتحليل بنية الروابط 🗺️", desc: "نحلل طريقة تقسيم الروابط والأقسام والوسوم (Tags) في موقعك، ونعيد تنظيمها عشان يسهل على عناكب جوجل فهم الموقع وفهرسته بسرعة، وبنفس الوقت تكون تجربة التصفح سهلة ومريحة للزائر." },
  { title: "التخطيط الذكي للروابط الداخلية 🔗", desc: "الروابط الداخلية هي اللي تعلم جوجل شو هي الصفحات الأهم في موقعك. ولأنها عامل أساسي، فريقنا يخطط لها بأفضل الأساليب والاستراتيجيات المجربة لربط صفحاتك بقوة." },
  { title: "تسريع الموقع وتحسين التجربة ⚡", desc: "سرعة الموقع وتجربة المستخدم صارت اليوم شرط أساسي عند جوجل عشان يعطيك الصدارة. عشان كذا، فريقنا يعطيها اهتمام خاص ويضبط كل عوامل السرعة عشان موقعك يفتح في لمح البصر." },
  { title: "نفض وتحسين المحتوى القديم 📝", desc: "نمر على كل المقالات والنصوص القديمة في موقعك، ونحللها عشان نتأكد إنها تتماشى مع آخر تحديثات جوجل، وخالية من أي مشاكل تمنعها من الظهور، ونعيد توجيهها لاستهداف الكلمات الأكثر ربحية لك." },
  { title: "التخطيط للمحتوى الجديد 🎯", desc: "نحلل محتوى المنافسين ونقيس الفجوة بينك وبينهم. بعدها، نبني لك خطة محتوى جديدة مبنية على دراسة شاملة ودقيقة للكلمات المفتاحية باستخدام أقوى الأدوات المدفوعة." },
  { title: "خريطة الكلمات المفتاحية 🗺️", desc: "نوزع الكلمات المفتاحية على الصفحات المناسبة لها بدقة، ونحلل مدى صعوبة المنافسة عليها، عشان نجهز الأرضية الصح قبل ما نبتدي نضخ الباك لينكات." },
  { title: "بناء باك لينكس قوي وذو سلطة 🏗️", desc: "نختار المواقع اللي بنحط فيها روابط موقعك بعناية شديدة. يهمنا الجودة وقوة الموقع مش مجرد العدد؛ عشان نضمن إن كل باك لينك يرفع موقعك لفوق ويكون تأثيره ملموس مهما كانت المنافسة صعبة." }
];

const comparisonTableData = [
  { feature: "الاستراتيجية المتبعة", others: "قوالب جاهزة ومكررة لكل العملاء", unique: "مخصصة بالملي حسب طبيعة السوق الكويتي" },
  { feature: "الشفافية والتقارير", others: "تقارير ملونة وهمية بلا أرقام", unique: "أرقام فعلية وموثقة من أدوات غوغل" },
  { feature: "الخبرة الميدانية", others: "مبتدئين أو حديثي العهد بالسوق", unique: "أكثر من 8 سنوات خبرة مثبتة" },
  { feature: "ضمان النتائج", others: "بدون أي التزامات واضحة", unique: "ضمان حقيقي ومتابعة مستمرة" }
];

const kuwaitFaqData = [
  { q: "متى تبان نتائج السيو (SEO) بالسوق الكويتي؟", a: "يا طال عمرك، السيو يبي له وقت شغل تقني ومحتوى صح، وغالباً تبدا تشوف النتايج الحقيقية خلال 3 إلى 6 شهور على حسب قوة منافسينك." },
  { q: "ليش أختار يونيك لخدمات السيو بالكويت؟", a: "لأننا ما نبيعك كلام وخرابيط، حنا نركز على العملاء الحقيقيين والأرقام اللي ترفع مبيعاتك بالملي، ومعانا فريق مختص." },
  { q: "هل السيو يغني عن الإعلانات المدفوعة؟", a: "السيو يبني لك أصل دائم يجيب لك زوار مجاناً حتى لو وقفت إعلانات، بينما الإعلانات توقف بمجرد ما تخلص ميزانيتك." },
  { q: "شلون أعرف إن شغلكم جايب نتيجة معي؟", a: "نعطيك تقارير شهرية واضحة وموثقة بالأرقام من غوغل، ونسوي وياك اجتماعات دورية عشان تشوف بعينك كم زار الموقع." }
];

export default function SECompanyKuwaitPage() {
  const whatsappNumber = "00201505388060";
  const whatsappMessage = encodeURIComponent("مرحباً، أبي أطلب خدمة تحسين محركات البحث في الكويت.");
  
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="w-full min-h-screen bg-[#040D1A] text-white overflow-x-hidden">
      
      {/* 1. سكشن الهيرو: يملي الشاشة بالطول والعرض مع حركة لورا */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden px-4 md:px-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="relative w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <Image 
              src="/seocompanykuwait.webp" 
              alt="شركة سيو في الكويت" 
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={true}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D]/80 via-[#071329]/70 to-[#040D1A]/90 z-10" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-20 text-center flex flex-col items-center">
          <span className="inline-block bg-yellow-400/25 text-yellow-400 border border-yellow-400/40 text-xs sm:text-sm font-bold py-1.5 px-5 rounded-full mb-6 backdrop-blur-md shadow-lg">
            قمة الحلول الرقمية بدولة الكويت
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl">
            شركة سيو في الكويت لعيون صدارة غوغل
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            طوّر بزنسك بالسوق الكويتي وخلّك الخيار الأول جدام الزباين باستراتيجيات سيو قوية ترفع مبيعاتك فوق.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3.5 bg-green-600 hover:bg-green-500 text-white font-black py-4 px-9 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(22,163,74,0.5)] hover:scale-105 text-base sm:text-lg"
          >
            <MessageCircle className="w-6 h-6 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
            <span>طلب الخدمة</span>
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          </a>
        </div>
      </section>

      {/* 2. شريط الأخبار المتحرك (المعدل باللهجة الكويتي) */}
      <div className="relative w-full z-30 bg-white/5 backdrop-blur-md py-5 border-t border-b border-white/10 overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...kuwaitAchievements, ...kuwaitAchievements].map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0">
              <span className="text-yellow-400 font-black text-lg">✦</span>
              <span className="text-white font-bold text-base whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. السكشن الثالث */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A]">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#FEF3C7] via-[#FDE68A] to-[#D97706] text-[#1E293B] shadow-[0_25px_60px_rgba(217,119,6,0.25)] border-2 border-yellow-200/80 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-yellow-100 to-transparent shadow-[0_0_20px_#fef08a]" />
            
            <div className="text-center mb-10">
              <span className="inline-block bg-[#1E293B] text-yellow-400 border border-yellow-500/30 text-xs sm:text-sm font-black py-1.5 px-5 rounded-full mb-3 uppercase tracking-wider shadow-md">
                أهمية وجودك الرقمي
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E293B] mb-4">
                ليش محتاج سيو اليوم بالكويت؟
              </h2>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-center font-bold text-slate-900 max-w-3xl mx-auto mb-10">
              إذا عندك متجر أو موقع إلكتروني، فأنت بأمس الحاجة لـ شركة سيو متخصصة في الكويت اليوم، صار السيو (SEO) هو السلاح الأقوى وأفضل استراتيجية ترفع من قدر ومكانة موقعك في محركات البحث عشان تتصدر النتائج الأولى وتضمن سيل من العملاء والزيارات الحقيقية هذا كله مش بس بيجيب لك أعلى عائد على الاستثمار (ROI)، إلا إنه بيبني هيبة لاسمك ويحفر علامتك التجارية في بال الجمهور.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoStepsList.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div 
                    key={idx} 
                    className="p-6 rounded-2xl bg-[#091428] text-white border border-yellow-500/30 shadow-[0_10px_25px_rgba(4,13,26,0.5)] flex flex-col items-start transition-transform hover:-translate-y-1.5"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-[#040D1A] flex items-center justify-center mb-4 shadow-lg">
                      <IconComponent className="w-6 h-6 text-yellow-300 font-bold" />
                    </div>
                    <h3 className="text-lg font-black text-yellow-300 mb-2">{step.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. السكشن الرابع: ليش تختارنا مع اختلاف أشكال وألوان الكروت وبروز وظل وحركة موشن */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-slate-800/60">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              الميزة التنافسية
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              ليش تختارنا نحن.. ومش شركات السيو &quot;الثانية&quot;؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUsData.map((item, idx) => {
              const IconC = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  className={`relative p-8 sm:p-10 rounded-[2rem] ${item.bg} text-white border-2 ${item.border} shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md flex flex-col justify-between transition-all`}
                  initial={{ opacity: 0, y: 40, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="absolute top-6 left-8 text-3xl font-black text-white/20">
                    {item.num}
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 shadow-lg border border-white/20">
                      <IconC className={`w-6 h-6 ${item.accent}`} />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-black ${item.accent} mb-3`}>{item.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. السكشن الخامس: زين.. شو هو السيو (SEO) أصلاً؟ */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-800/60">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              مفاهيم أساسية
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              زين.. شو هو السيو (SEO) أصلاً؟
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
              السيو باختصار شديد، هو إننا نجهز ونطوّر موقعك عشان يفهمه جوجل وباقي محركات البحث وهو خطوة أساسية ومهمة لأي موقع على الإنترنت يبي يتصدر نتائج البحث الأولى، عشان يلاقيه جمهوره المستهدف ويبتدي يحقق أرباح حقيقية.. بس قبل ما ندخل في التفاصيل، لازم تعرف كذا شغلة:
            </p>
          </div>

          <div className="space-y-8">
            {whatIsSeoPoints.map((point, idx) => {
              const IconP = point.icon;
              return (
                <motion.div 
                  key={idx} 
                  className="p-8 sm:p-10 rounded-[2rem] bg-[#091428] text-white border-2 border-slate-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(148,163,184,0.15)] backdrop-blur-md flex flex-col items-start transition-all"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex items-center justify-center mb-5 shadow-lg shrink-0">
                    <IconP className="w-6 h-6 font-bold" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-cyan-300 mb-3">{point.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{point.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. السكشن السادس: خدمات السيو عندنا تنقسم لـ 4 أنواع */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-slate-800/60">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              الخدمات الأساسية
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              خدمات السيو عندنا تنقسم لـ 4 أنواع
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-6">
              وكلها خدمات لها ثقلها وتأثيرها اللي بتشوفه بعينك!
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServicesGrid.map((serv, idx) => {
              const IconS = serv.icon;
              return (
                <motion.div 
                  key={idx} 
                  className={`p-8 sm:p-10 rounded-[2rem] ${serv.cardBg} text-white border-2 ${serv.borderColor} shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(148,163,184,0.15)] backdrop-blur-md flex flex-col justify-between transition-all`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 shadow-lg border border-white/10">
                      <IconS className="w-6 h-6 text-yellow-300 font-bold" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-yellow-300 mb-3">{serv.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{serv.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. السكشن السابع: خدمات السيو عندنا خدمات متكاملة + جدول احترافي غوغل تحبه */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-800/60">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-green-500/20 text-green-400 border border-green-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              التكامل الاحترافي
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              خدمات السيو عندنا خدمات متكاملة !
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
              السالفة مش روابط وبس؛ في تفاصيل وعوامل وايد لازم نهتم فيها بالملي عشان نحقق أهدافك التسويقية، ونخليك تطير بعيد عن منافسينك وتخلق بينك وبينهم فجوة ماب يقدرون يلحقونك فيها. إليك كيف نشتغل على موقعك:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {comprehensiveSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#091428] text-white border-2 border-slate-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col items-start transition-transform"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-lg font-black text-yellow-300 mb-2">{step.title}</div>
                <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* الجدول الاحترافي لتحسين سيو الصفحة وترتيب البيانات */}
          <div className="mt-12 overflow-x-auto rounded-[2rem] border-2 border-yellow-500/30 bg-[#091428] p-4 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-black text-yellow-400">مقارنة أداء الشركات مقابل خدمات يونيك</h3>
              <p className="text-gray-300 text-sm mt-2">عشان تعرف ليش نحن الخيار الأول والأنسب لبزنسك</p>
            </div>
            <table className="w-full text-right border-collapse min-h-[250px]">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/50">
                  <th className="p-4 sm:p-5 font-black text-yellow-300 text-sm sm:text-base">المعيار الرئيسي</th>
                  <th className="p-4 sm:p-5 font-black text-red-400 text-sm sm:text-base">الشركات التقليدية</th>
                  <th className="p-4 sm:p-5 font-black text-green-400 text-sm sm:text-base">وكالة يونيك (Unique)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {comparisonTableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-200 text-xs sm:text-sm">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-gray-400 text-xs sm:text-sm">{row.others}</td>
                    <td className="p-4 sm:p-5 text-green-300 font-extrabold text-xs sm:text-sm">{row.unique}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 8. سكشن الكوانتر: أرقام متحركة من البداية للنهاية */}
      <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-r from-[#091428] via-[#0B1B3D] to-[#091428] border-t border-b border-yellow-500/30">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterItem end={120} label="موقع متصدر" suffix="+" />
            <CounterItem end={300} label="نسبة مضاعفة الزيارات" suffix="%" />
            <CounterItem end={8} label="سنوات خبرة بالسوق" suffix="+" />
            <CounterItem end={90} label="يوم لضمان النتائج" suffix="" />
          </div>
        </div>
      </section>

      {/* 9. سكشن الأسئلة الشائعة (FAQ) باللهجة الكويتية الأصيلة */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-800/60">
        <div className="container mx-auto max-w-4xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              الأسئلة الشائعة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              الأسئلة الشائعة
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
              كل شي تبي تعرفه عن خدماتنا وطريقتنا بالسيو، جمعناه لك هني بوضوح وبدون لف ودوران:
            </p>
          </div>

          <div className="space-y-4">
            {kuwaitFaqData.map((faq, idx) => (
              <motion.div 
                key={idx} 
                className="rounded-2xl bg-[#091428] border-2 border-slate-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-right flex items-center justify-between gap-4 font-black text-lg text-yellow-300 hover:text-yellow-200 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180 text-yellow-400' : 'text-slate-400'}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}