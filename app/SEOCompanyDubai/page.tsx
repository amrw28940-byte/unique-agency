"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Search, Wrench, TrendingUp, Compass, Key, FileText, Link2, Share2, ShieldAlert, CheckCircle, Users, BarChart, ShieldCheck, Target, FileCheck, ChartBar, ChevronDown, Building, TrendingDown, AlertTriangle, Globe } from "lucide-react";

const achievements = [
  "أكثر من 150 مشروعاً ناجحاً في صدارة جوجل",
  "مضاعفة حركة الزيارات للعملاء بنسبة تفوق 300%",
  "فريق محترف بخبرة تتجاوز 8 سنوات في السيو",
  "تقارير شفافة ومتابعة حية لنمو المبيعات",
  "حلول برمجية وتقنية متقدمة متوافقة مع الخوارزميات",
  "دعم فني استراتيجي متكامل على مدار الساعة"
];

const seoSteps = [
  { title: "الاستهداف الدقيق للكلمات المفتاحية", description: "نحدد الكلمات والعبارات التي يبحث عنها عميلك المستهدف بدقة لدمجها استراتيجياً في صلب المحتوى.", icon: Key },
  { title: "تحسين المحتوى (On-Page SEO)", description: "صياغة نصوص تفاعلية، هندسة العناوين والصور، وتعزيز تجربة القارئ والزائر بإجابات شافية ومباشرة.", icon: FileText },
  { title: "التحسين التقني (Technical SEO)", description: "معالجة الأكواد لضمان سرعة فائقة، أمان متكامل، وبنية تحتية مثالية لكسب رضا عناكب البحث.", icon: Wrench },
  { title: "بناء الروابط الخارجية (Off-Page SEO)", description: "استقطاب إشارات وروابط موثوقة من كبرى المنصات لرفع سلطة وموثوقية موقعك بقوة.", icon: TrendingUp },
  { title: "التتبع والتحليل المستمر", description: "مراقبـة الأداء بدقة باستخدام أدوات متطورة لضمان التحسين الدائم والنمو المتصاعد للزوار.", icon: Compass },
];

const uaeSeoServices = [
  {
    title: "1. تحسين العناصر والبيانات الوصفية (On-Page Metadata)",
    description: "نعمل على تهيئة العناوين الرئيسية (H1)، العناوين الفرعية (H2, H3)، الوصف الدلالي (Meta Description)، والنصوص البديلة للصور (Alt Text). توزيع الكلمات المفتاحية الذكية في هذه الأماكن الإستراتيجية يمنح صفحاتك القوة الكافية للترتيب في الصدارة بمحركات البحث.",
    icon: FileText
  },
  {
    title: "2. تحسين بنية الروابط (URL Structure)",
    description: "نحرص على صياغة روابط الصفحات والمقالات بشكل منظم ومبسط يحتوي على الكلمات المفتاحية الأساسية المعبرة عن المحتوى. الروابط النظيفة والمفهومة تسهل على عناكب البحث والمستخدمين فهم طبيعة الصفحة وتصفحها بسلاسة.",
    icon: Link2
  },
  {
    title: "3. تفعيل مسارات التنقل (Breadcrumbs)",
    description: "نوفر بنية تنقل واضحة ومباشرة داخل الموقع؛ هذه الخاصية لا تساعد عناكب البحث في الزحف وفهرسة الصفحات بسهولة فحسب، بل تُحسّن تجربة المستخدم بشكل كبير، مما يرفع من معدلات التحويل (Conversion Rates).",
    icon: Share2
  },
  {
    title: "4. فحص ومعالجة المحتوى المكرر (Duplicate Content)",
    description: "تكرار المحتوى داخل موقعك يضعف ترتيبه ويشتت محركات البحث، لذلك نقوم بفحص شامل للموقع وإعادة صياغة أي نصوص مكررة لضمان تقديم محتوى فريد وحصري. كما نراقب المواقع التي قد تنسخ محتواك، ونعمل في يونيك على معالجة أي تكرار خارجي فوراً لحماية سلطة موقعك (Domain Authority).",
    icon: ShieldAlert
  },
  {
    title: "5. إدارة ومراجعة الروابط الخلفية (Backlinks Audit)",
    description: "نظراً لأهمية الروابط الخارجية التي تشير إلى موقعك، فإننا في يونيك نتابعها بانتظام للتأكد من جودتها، ونشاطها، وصدورها من مواقع موثوقة ذات ثقة عالية (High Authority). بالتوازي مع ذلك، نقوم بتحليل الروابط الخلفية للمنافسين لاقتناص الفرص وبناء شراكات قوية تدعم ظهورك.",
    icon: Search
  }
];

const whyUniqueFeatures = [
  {
    number: "01",
    title: "استراتيجية مخصصة لكل عميل — بدون قوالب جاهزة",
    description: "نبدأ بفهم بزنسك، سوقك، وعملائك قبل ما نخطو أي خطوة. لأن اللي ينجح في دبي، مش بالضرورة ينجح في الشارقة.",
    icon: CheckCircle
  },
  {
    number: "02",
    title: "فريق كامل تحت سقف واحد",
    description: "خبراء سيو + مصممين + مبرمجين + متخصصين ذكاء اصطناعي. يعني ما يحتاي تدوّر أو تتعامل مع أكثر من جهة.",
    icon: Users
  },
  {
    number: "03",
    title: "تقارير شهرية بأرقام حقيقية",
    description: "كل شهر بتعرف بالملي شو اللي تحسن في موقعك، وكم عدد العملاء الفعليين اللي يوّك عن طريق جوجل.",
    icon: BarChart
  },
  {
    number: "04",
    title: "ضمان مكتوب — 90 يوماً للنتائج",
    description: "تشوف نتائج ملموسة خلال 90 يوم، وإلا بنكمل شغلنا وياك بدون أي رسوم إضافية. لأن الثقة أفعال مش مجرد كلام.",
    icon: ShieldCheck
  }
];

const locationsData = [
  {
    flag: "🇦🇪",
    title: "دولة الإمارات العربية المتحدة (تغطية شاملة للإمارات السبع)",
    target: "دبي • أبوظبي • الشارقة • عجمان • رأس الخيمة • الفجيرة • أم القيوين.",
    strategy: "نقدم لك خدمات سيو محلي (Local SEO) دقيق، يستهدف كل إمارة وكل حي تجاري بالملي لضمان الوصول لأعلى نسبة تحويل."
  },
  {
    flag: "🇸🇦",
    title: "المملكة العربية السعودية (من العاصمة إلى جبال أبها)",
    target: "الرياض • جدة • الدمام • مكة المكرمة • المدينة المنورة • الخبر • تبوك • حائل.",
    strategy: "نصيغ لك محتوى مخصص يحاكي ثقافة ولهجة السوق السعودي، ويفهم بدقة سلوك المستهلك هناك ليتصدر نشاطك محلياً."
  },
  {
    flag: "🇪🇬",
    title: "جمهورية مصر العربية (من القاهرة وحتى الإسكندرية)",
    target: "القاهرة • الجيزة • الإسكندرية • مدينة نصر • المعادي • الشروق.",
    strategy: "نطور موقعك ونهيئه لمحركات البحث بباقات مرنة وأسعار تنافسية تناسب تطلعات وحجم السوق المصري المتسارع."
  },
  {
    flag: "🇰🇼",
    title: "دولة الكويت (العاصمة وكافة المحافظات)",
    target: "مدينة الكويت • حولي • السالمية • الفروانية • الأحمدي • الجهراء.",
    strategy: "سيو خليجي احترافي مبني على الكلمات الأكثر طلباً وبحثاً من قِبل المستهلك الكويتي لضمان ظهورك أمام العميل المناسب."
  },
  {
    flag: "🇶🇦",
    title: "دولة قطر (الدوحة والمدن الاقتصادية الجديدة)",
    target: "الدوحة • لوسيل • الوكرة • الخور.",
    strategy: "خدمات متكاملة تشمل تصميم المواقع الفاخرة وتهيئة السيو بما يواكب الطفرة الاقتصادية المتنامية في السوق القطري."
  },
  {
    flag: "🇪🇺",
    title: "المملكة المتحدة وأوروبا (من لندن إلى برلين)",
    target: "لندن • باريس • برلين • أمستردام • مدريد • روما • زيورخ.",
    strategy: "تسويق رقمي وسيو عالمي عابر للحدود، يُدار باحترافية كاملة باللغتين العربية والإنجليزية لربط بزنسك بالأسواق الدولية."
  }
];

const workStepsData = [
  {
    number: "01",
    title: "تدقيق رقمي شامل ومفصّل لموقعك",
    description: "نمسك موقعك ونفحصه من الألف إلى الياء؛ عشان نعرف شو اللي يمنع جوجل من إنه يشوفه، وين قاعدين يطيرون منك العملاء، وشو الأشياء اللي يسويها منافسينك وأنت غافل عنها.",
    icon: Search
  },
  {
    number: "02",
    title: "دراسة الكلمات اللي يبحث عنها عملائك",
    description: "نكتشف الكلمات والعبارات الحقيقية اللي يستخدمها عملائك في دبي، الشارقة، الرياض، أو القاهرة. ما عندنا شيء اسمه تخمين أو \"توقع\"، كل شغلنا مبني على بيانات دقيقة.",
    icon: Target
  },
  {
    number: "03",
    title: "بناء وتأسيس البنية التقنية",
    description: "نخلي سرعة تحميل موقعك أقل عن ثانيتين، مع تظبيط البنية البرمجية بالكامل، وكل الشغلات التقنية اللي يحتاجها جوجل عشان يمنح موقعك ثقته الكاملة.",
    icon: Wrench
  },
  {
    number: "04",
    title: "محتوى يقنع العميل ويبيع له",
    description: "نكتب لك محتوى يخاطب عميلك المستهدف بشكل مباشر، يجاوب على كل استفساراته، ويوجهه على طول عشان يتواصل وياك. كلام مكتوب عشان يرفع مبيعاتك ويجيب لك كاش، مش مجرد كلام للقراءة.",
    icon: FileCheck
  },
  {
    number: "05",
    title: "بناء سلطتك الرقمية (باك لينكس)",
    description: "نربط موقعك بشبكة من المواقع والمراجع القوية والموثوقة اللي تشير لك، وهذا الشيء يرفع من هيبة ومكانة موقعك عند جوجل ويخليه يثق فيك أكثر يوم عن يوم.",
    icon: Link2
  },
  {
    number: "06",
    title: "قياس الأداء والتحسين المستمر",
    description: "توصلك تقارير شهرية بأرقام واضحة ومفهومة، بالإضافة لاجتماع دوري وياك عشان تشوف بالملي شو اللي تحسّن بموقعك، وشو هي خطوتنا الجاية.",
    icon: ChartBar
  }
];

const whenToHireData = [
  {
    title: "زيادة المنافسة في السوق المحلي",
    description: "لما تشوف السوق صار زحمة، والمنافسين قاعدين يظهرون بكل مكان وياخذون من حصتك السوقية، هنا تحتاج سيو قوي يخليك أنت الخيار الأول.",
    icon: Building
  },
  {
    title: "طياح عدد زوار موقعك (Traffic)",
    description: "إذا لاحظت إن الزيارات اللي تيجيك من جوجل وباقي محركات البحث بدت تقل وتنزل بشكل يخوف، فهذا مؤشر إن موقعك محتاج تدخل فوري.",
    icon: TrendingDown
  },
  {
    title: "تراجع ترتيب موقعك مقارنة بالمنافسين",
    description: "لما تبحث عن خدماتك وتلاقي منافسينك متصدرين الصفحات الأولى، وموقعك راجع لورا؛ هنا لازم تتحرك عشان تسترد مكانتك الطبيعية في الصدارة.",
    icon: AlertTriangle
  },
  {
    title: "نيتك بالتوسع داخل الإمارات أو براها",
    description: "إذا خطتك الجاية هي التوسع واستهداف إمارات ثانية أو تبي تطلع لباقي دول الخليج والعالم، السيو هو أضمن وأوفر طريقة تفتح لك أسواق جديدة.",
    icon: Globe
  },
  {
    title: "تبي تبني اسم وحضور رقمي يعيش وياك طويل العمر",
    description: "إذا هدفك مش مجرد حملة إعلانية مؤقتة تخلص بانتهاء الميزانية، وتبي موقعك يظل شغال ويجيب لك عملاء بشكل مستمر على المدى البعيد.",
    icon: Key
  }
];

const counterData = [
  { number: "800+", label: "مشروع ناجح" },
  { number: "300%", label: "متوسط مضاعفة الزيارات" },
  { number: "8+", label: "سنوات من الخبرة" },
  { number: "90", label: "يوماً لضمان النتائج" },
];

const faqData = [
  {
    q: "متى تبان نتائج السيو (SEO) الصراحة؟",
    a: "يا طال عمرك، السيو مش سحر بين ليلة وضحاها. غالباً تبدا تشوف التحسن الحقيقي والنتائج الملموسة خلال 3 إلى 6 شهور على حسب قوة المنافسة في بزنسك."
  },
  {
    q: "ليش أختار يونيك وغيرنا واجد في دبي؟",
    a: "لأننا ما نبيعك كلام وخرابيط وتقارير ملونة مالها أصل. حنا نركز على الأرقام والعملاء الفعليين، ومعانا ضمان 90 يوم تشوف فيه شغل حقيقي ولا نرجع نشتغل بدون رسوم."
  },
  {
    q: "هل السيو يغني عن الإعلانات المدفوعة PPC؟",
    a: "السيو يبني لك أصل طويل العمر يضل يجيب لك زوار وعملاء مجاناً حتى لو توقفت عن الدفع، بينما الإعلانات توقف بمجرد ما تخلص ميزانيتك. الأفضل ندمجهم بس السيو يبقى الأساس."
  },
  {
    q: "كيف أعرف إن شغلكم جايب نتيجة معي؟",
    a: "بكل شفافية، بنعطيك تقارير شهرية واضحة وموثقة بالأرقام من أدوات جوجل، وبنسوي اجتماع دوري وياك عشان تشوف بنفسك كم زار الموقع وكم شخص تواصل وياك."
  }
];

export default function SECompanyDubaiPage() {
  const whatsappNumber = "00201505388060";
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في طلب خدمة تحسين محركات البحث في دبي والإمارات.");
  
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="w-full min-h-screen bg-[#040D1A] text-white overflow-x-hidden">
      
      {/* 1. السكشن الأول: الهيرو */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden px-4 md:px-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="relative w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <Image 
              src="/seocompanydubai.webp" 
              alt="شركة سيو في دبي" 
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
            ريادة الحلول الرقمية في إمارة دبي
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl">
            شركة سيو في دبي لصدارة نتائج البحث
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            انطلق بنشاطك التجاري في دبي نحو قمة المنافسة الرقمية ومضاعفة مبيعاتك عبر استراتيجيات سيو احترافية ومدروسة.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3.5 bg-green-600 hover:bg-green-500 text-white font-black py-4 px-9 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(22,163,74,0.5)] hover:scale-105 text-base sm:text-lg"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>اطلب الخدمة</span>
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          </a>
        </div>
      </section>

      {/* 2. السكشن الثاني: شريط الإنجازات المتحرك */}
      <div className="relative w-full z-30 bg-white/5 backdrop-blur-md py-5 border-t border-b border-white/10 overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...achievements, ...achievements].map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0">
              <span className="text-yellow-400 font-black text-lg">✦</span>
              <span className="text-white font-bold text-base whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. السكشن الثالث: كيف تعمل شركة سيو في دبي؟ (كارت ذهبي كبير وكروت كحلي داخلية) */}
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
                منظومة هندسية دقيقة
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E293B]">
                كيف تعمل شركة سيو في دبي؟
              </h2>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-center mb-10 font-bold text-slate-900 max-w-3xl mx-auto">
              لا يعتبر تحسين محركات البحث سحراً خفياً، بل هو منظومة هندسية تعتمد على معايير صارمة ترشد محركات البحث لتقييم المنصات. ونحن في يونيك افضل شركة سيو في دبي نترجم هذه الآلية عبر 5 ركائز أساسية:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seoSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div 
                    key={step.title} 
                    className="p-6 rounded-2xl bg-[#091428] text-white border border-yellow-500/30 shadow-[0_10px_25px_rgba(4,13,26,0.5)] backdrop-blur-sm flex flex-col items-start transition-transform hover:-translate-y-1.5"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-[#040D1A] flex items-center justify-center mb-4 shadow-lg">
                      <IconComponent className="w-6 h-6 font-bold" />
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

      {/* 4. السكشن الرابع: خدمات السيو (SEO) في الإمارات */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-800/60">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-slate-800 text-slate-300 border border-slate-600/40 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              السوق الإماراتي المتكامل
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              خدمات السيو (SEO) في الإمارات من شركة &quot;يونيك&quot;
            </h2>
            <p className="text-base sm:text-lg leading-relaxed font-bold text-gray-300 max-w-3xl mx-auto">
              نحن في يونيك شركة سيو في دبي ندرك أهمية تصدر موقعك في نتائج البحث داخل السوق الإماراتي، لذلك نقدم لك استراتيجية متكاملة لتهيئة موقعك داخلياً وخارجياً عبر المحاور التالية:
            </p>
          </div>

          <div className="space-y-8">
            {uaeSeoServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <motion.div 
                  key={service.title} 
                  className="p-8 sm:p-10 rounded-[2rem] bg-[#091428] text-white border-2 border-slate-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(148,163,184,0.15)] backdrop-blur-md flex flex-col items-start transition-all hover:-translate-y-1.5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-200 to-slate-400 text-[#040D1A] flex items-center justify-center mb-5 shadow-lg shrink-0">
                    <IconComp className="w-6 h-6 font-bold" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-100 mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. السكشن الخامس: ليش يونيك؟ */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-slate-800/60">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              لماذا نحن الخيار الأمثل؟
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              ليش &quot;يونيك&quot;؟
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-6">
              شو الفرق بين وكالة تبيعك كلام، و&quot;يونيك&quot; اللي تثبت لك بالأرقام؟
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto mb-4">
              أغلب وكالات السيو وتصميم المواقع في الإمارات بتبيعك تقارير ملونة ووعود حلوة عالفاضي. أما في يونيك شركة سيو في دبي، نحن نبيعك شيء واحد وبس: عملاء حقيقيين وأرقام واضحة تقدر تقيسها بنفسك.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-gray-400 max-w-3xl mx-auto">
              ومن سنة 2018، وبفضل مشاريعنا اللي عدت الـ 800 مشروع في الإمارات، السعودية، مصر، وأوروبا، قدرنا نبني منهجية خاصة تجمع بين الخبرة التقنية والفهم العميق لكل سوق—لأن دبي غير عن الشارقة، والرياض غير عن جدة، وكل عميل له وضعه الخاص.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUniqueFeatures.map((feat, idx) => {
              const IconC = feat.icon;
              return (
                <motion.div 
                  key={feat.title} 
                  className="relative p-8 sm:p-10 rounded-[2rem] bg-[#091428] text-white border-2 border-slate-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(148,163,184,0.15)] backdrop-blur-md flex flex-col justify-between transition-all hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-6 left-8 text-3xl font-black text-slate-600/30">
                    {feat.number}
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-[#040D1A] flex items-center justify-center mb-6 shadow-lg">
                      <IconC className="w-6 h-6 font-bold" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-yellow-300 mb-3">{feat.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. السكشن السادس: نخدمك وين ما كنت */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-800/60">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              التغطية الجغرافية الواسعة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              نخدمك وين ما كنت
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
              كل مكان وله طبيعته، نوعية عملائه، والكلمات اللي يبحثون بها. عشان كذا، نحن في يونيك شركة سيو في دبي نخطط ونبني استراتيجية منفصلة ومخصصة لكل مدينة—لأن العميل في دبي يفكر ويبحث بطريقة تختلف تماماً عن العميل في الرياض أو القاهرة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locationsData.map((loc, idx) => (
              <motion.div 
                key={loc.title} 
                className="p-8 sm:p-10 rounded-[2rem] bg-[#091428] text-white border-2 border-slate-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(148,163,184,0.15)] backdrop-blur-md flex flex-col justify-between transition-all hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{loc.flag}</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-100">{loc.title}</h3>
                  </div>
                  <div className="mb-4 text-sm font-bold text-yellow-400/90 bg-yellow-400/10 border border-yellow-400/20 py-2 px-4 rounded-xl">
                    {loc.target}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    <strong className="text-slate-200">استراتيجيتنا: </strong>
                    {loc.strategy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. السكشن السابع: كيف نشتغل؟ (6 خطوات تحول موقعك إلى مصدر دائم للعملاء) */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-slate-800/60">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-green-500/20 text-green-400 border border-green-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              منهجية العمل الواضحة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              كيف نشتغل في شركة سيو في دبي؟
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-green-300 mb-6">
              6 خطوات تحوّل موقعك إلى مصدر دائم للعملاء
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
              ما نبتدي بأي خطوة قبل ما نفهم بزنسك وطبيعة عملك بالملي. كل خطوة عندنا مبنية على لغة الأرقام، وكل قرار ناخذه وراه سبب ومبرر واضح.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workStepsData.map((step, idx) => {
              const IconW = step.icon;
              return (
                <motion.div 
                  key={step.number} 
                  className="relative p-8 sm:p-10 rounded-[2rem] bg-[#091428] text-white border-2 border-slate-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(148,163,184,0.15)] backdrop-blur-md flex flex-col justify-between transition-all hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-6 left-8 text-3xl font-black text-slate-600/30">
                    {step.number}
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-[#040D1A] flex items-center justify-center mb-6 shadow-lg">
                      <IconW className="w-6 h-6 font-bold" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-green-300 mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. السكشن الثامن: متى يكون التعاقد مع وكالة سيو في دبي قرار بمحله؟ */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-800/60">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              التوقيت المناسب للخطوة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              متى يكون التعاقد مع وكالة سيو في دبي قرار بمحله؟
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
              في حالات معينة وواضحة، يكون الاستعانة بخبراء سيو في دبي مش مجرد خيار، إلا خطوة ضرورية وما تتأجل عشان تحمي بزنسك:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whenToHireData.map((item, idx) => {
              const IconWt = item.icon;
              return (
                <motion.div 
                  key={item.title} 
                  className="p-8 sm:p-10 rounded-[2rem] bg-[#091428] text-white border-2 border-slate-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(148,163,184,0.15)] backdrop-blur-md flex flex-col justify-between transition-all hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 text-[#040D1A] flex items-center justify-center mb-6 shadow-lg">
                      <IconWt className="w-6 h-6 font-bold" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-purple-300 mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-base sm:text-lg text-center mt-12 text-slate-300 font-bold max-w-3xl mx-auto bg-slate-800/40 border border-slate-700/60 p-6 rounded-2xl backdrop-blur-md">
            في مثل هالحالات، دورنا في يونيك كـ وكالة سيو متخصص في دبي، إننا نمسك موقعك، نحلل وضعه الحالي بالملي، نكتشف وين الفرص الضايعة، ونرسم لك خطة مدروسة نمشي عليها خطوة بخطوة لين نوصلك للقمة.
          </p>

        </div>
      </section>

      {/* 9. سكشن العداد (Counter) */}
      <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-r from-[#091428] via-[#0B1B3D] to-[#091428] border-t border-b border-yellow-500/30">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {counterData.map((c, idx) => (
              <motion.div 
                key={c.label} 
                className="p-6 rounded-2xl bg-[#040D1A]/60 border border-yellow-500/20 backdrop-blur-md shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 mb-2">{c.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm font-bold">{c.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. سكشن الأسئلة الشائعة (FAQ) باللهجة الخليجية */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-800/60">
        <div className="container mx-auto max-w-4xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              الاستفسارات المتكررة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              الأسئلة الشائعة
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
              كل شي تبغي تعرفه عن خدماتنا وطريقتنا في السيو، جمعناه لك هني بوضوح وبدون لفة أو دوران:
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <motion.div 
                key={faq.q} 
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