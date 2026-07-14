"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Search, Cpu, FileText, TrendingUp, MapPin, Award, LineChart, ShieldCheck, Target, Sparkles, CheckCircle2, TrendingUp as TrendIcon, BookOpen, ChevronDown } from "lucide-react";

const seoServicesEgyptData = [
  {
    title: "تحليل دقيق ومنافسة شرسة",
    desc: "دراسة شاملة لموقعك وللمنافسين لتحديد الفجوات واقتناص أفضل الفرص في السوق المصري.",
    icon: Search,
    border: "border-yellow-500/40",
    bg: "bg-gradient-to-br from-[#091428] via-[#0D1B36] to-[#040D1A]",
    accent: "text-yellow-400",
    glow: "shadow-[0_0_35px_rgba(250,204,21,0.25)]"
  },
  {
    title: "تهيئة تقنية فائقة",
    desc: "كما نقوم في شركة سيو في مصر بتحسين البنية التحتية لموقعك لضمان أسرع تصفح وأسهل فهرسة من قِبل عناكب جوجل",
    icon: Cpu,
    border: "border-cyan-500/40",
    bg: "bg-gradient-to-br from-[#041126] via-[#091C3E] to-[#040D1A]",
    accent: "text-cyan-400",
    glow: "shadow-[0_0_35px_rgba(6,182,212,0.25)]"
  },
  {
    title: "محتوى عربي ذكي",
    desc: "صياغة وتطوير محتوى متوافق مع خوارزميات جوجل ويلبي بدقة احتياجات واهتمامات الباحث المصري.",
    icon: FileText,
    border: "border-purple-500/40",
    bg: "bg-gradient-to-br from-[#120B24] via-[#1D123C] to-[#040D1A]",
    accent: "text-purple-400",
    glow: "shadow-[0_0_35px_rgba(168,85,247,0.25)]"
  },
  {
    title: "بناء روابط استراتيجي وآمن",
    desc: "تعزيز سلطة موقعك عبر روابط خلفية (Backlinks) قوية وموثوقة تدوم طويلاً.",
    icon: TrendingUp,
    border: "border-green-500/40",
    bg: "bg-gradient-to-br from-[#041F16] via-[#0A3828] to-[#040D1A]",
    accent: "text-green-400",
    glow: "shadow-[0_0_35px_rgba(34,197,94,0.25)]"
  },
  {
    title: "السيطرة على البحث المحلي",
    desc: "تهيئة حسابك على \"خرائط جوجل\" لضمان ظهور مشروعك للعملاء القريبين منك في الوقت المناسب.",
    icon: MapPin,
    border: "border-orange-500/40",
    bg: "bg-gradient-to-br from-[#1f1604] via-[#382b0a] to-[#040D1A]",
    accent: "text-orange-400",
    glow: "shadow-[0_0_35px_rgba(249,115,22,0.25)]"
  }
];

const whyChooseUniqueData = [
  {
    title: "خبرة واسعة في السوقين المصري والسعودي منذ 2015",
    desc: "نجحنا في شركة سيو في مصر في بناء مسيرة حافلة بالإنجازات وحافظنا على تقييمنا كـ أفضل شركة سيو وفقاً لآراء وتجارب مئات العملاء في الوطن العربي.",
    icon: Award,
  },
  {
    title: "أدوات وبرمجيات متقدمة لتحليل البيانات",
    desc: "نتميز في \"يونيك\" باستخدام أدوات متطورة للغاية للوصول إلى أهداف منطقية وقابلة للقياس، مما يجعلنا الاختيار الأول لكل من يبحث عن شركة سيو بمصر يعتمد عليها.",
    icon: LineChart,
  },
  {
    title: "قفزات استثنائية في ترتيب المواقع",
    desc: "أشاد عملاؤنا بتحقيق قفزات نوعية في ترتيب مواقعهم ومتاجرهم الإلكترونية على محركات البحث العالمية مثل \"جوجل\" و\"بينج\" مما ضاعف الزيارات والمبيعات في أصعب المجالات.",
    icon: Target,
  },
  {
    title: "سمعة ممتازة ونخبة من الخبراء",
    desc: "نفتخر بامتلاكنا سمعة ممتازة كـ افضل شركات سيو في مصر لأننا نجمع بين أقوى خبراء تحسين محركات البحث وبين أحدث الأدوات والتقنيات العالمية للتسويق.",
    icon: ShieldCheck,
  },
  {
    title: "خطة تحسين قوية وشاملة",
    desc: "ستحصل معنا على خطة تحسين شاملة تجمع بين تسويق المحتوى الاحترافي، واستهداف أقوى الكلمات المفتاحية، وبناء الباك لينك، والتهيئة التقنية المتكاملة للموقع.",
    icon: Sparkles,
  }
];

const customCreativeData = [
  {
    title: "تهيئة المواقع مع أفضل شركة سيو SEO يونيك",
    paragraphs: [
      "تعتبر عوامل الـ SEO وتحسين الظهور على محركات البحث من أهم مصادر جذب الزوار المستهدفين مجاناً إلى موقعك الإلكتروني لذا، نحن في يونيك نصنف كـ أفضل شركة سيو بشهادة مئات العملاء الذين شاركونا رحلة النجاح منذ عام 2015.",
      "نحن لا نعمل بعشوائية بل نقوم بدراسة مجالك بدقة، وتحليل السوق والمنافسين بعناية لنضع لك خطة تهيئة متكاملة توفر عليك الكثير من المال والوقت والجهد، وتضمن تهيئة موقعك وظهوره بثبات في النتائج الأولى للبحث في جوجل."
    ],
    icon: CheckCircle2,
  },
  {
    title: "موقعك في النتائج الأولى على جوجل مع يونيك",
    paragraphs: [
      "ظهور موقعك أو متجرك الإلكتروني في مقدمة محرك البحث جوجل يعني باختصار وصول آلاف الزوار والعملاء المهتمين بخدماتك مباشرة إليك، وهو ما تسعى إليه أي شركة تطمح لزيادة مبيعاتها وأرباحها بشكل مستدام بصفتنا شركة تحسين محركات البحث الرائدة، نساعدك على تحقيق هذا الهدف بكفاءة من خلال:",
      "نطبق أحدث تقنيات الـ SEO الداخلي والخارجي والتقني لضمان توافق موقعك مع خوارزميات جوجل الذكية وسرعة أرشفة صفحاته.",
      "نركز في شركة سيو على جلب زوار مستهدفين يبحثون بالفعل عن خدماتك ومنتجاتك في مصر والوطن العربي لضمان أعلى معدل تحويل للمبيعات.",
      "بصفتنا شركة سيو في مصر تفهم تفاصيل السوق واهتمامات المستهلك المصري، نصيغ لك استراتيجيات محتوى محلي يكتسح المنافسة تماماً."
    ],
    icon: TrendIcon,
  }
];

const seoGlossaryData = [
  {
    title: "Crawl & Index (الزحف والفهرسة)",
    desc: "الزحف هو اكتشاف عناكب البحث لصفحاتك الجديدة، والفهرسة هي إدراجها رسمياً في قاعدة بيانات جوجل لتظهر للباحثين. هذه العمليات التقنية يتابعها فريق شركة تحسين محركات البحث SEO يومياً لضمان عدم وجود أي عوائق برمجية تمنع ظهور موقعك."
  },
  {
    title: "White Hat SEO (السيو الأبيض الشرعي)",
    desc: "هي الممارسات الآمنة والشرعية التي توافق تماماً مع إرشادات وجداول جوجل. هذا هو الأسلوب المستدام الوحيد الذي يعتمد عليه أفضل خبير سيو لضمان صدارة موقعك لنتائج البحث دون الخوف من العقوبات أو التحديثات الفجائية."
  },
  {
    title: "Keyword Research (البحث عن الكلمات المفتاحية)",
    desc: "عملية تحديد واختيار العبارات الدقيقة التي يستخدمها جمهورك المستهدف للوصول لخدماتك. بناء هذه القوائم بذكاء هو أول خطوة تبدأ بها شركة سيو في مصر لتوجيه خطة المحتوى نحو جلب زيارات تتحول لمبيعات فعلية."
  },
  {
    title: "Backlinks & Link Building (الروابط الخلفية وبناء الروابط)",
    desc: "الحصول على روابط من مواقع خارجية قوية تشير إلى موقعك كمرجع موثوق. تعتبر هذه الخدمة من أهم الركائز التي تقدمها شركات SEO في مصر لتعزيز ترتيبك وتفوقك على منافسيك في المجالات الأكثر صعوبة."
  },
  {
    title: "Technical SEO (السيو التقني)",
    desc: "تحسين البنية التحتية للموقع، سرعة التحميل، وتوافقه التام مع الهواتف الذكية. وهي المساحة التقنية التي تبرع فيها أي شركة سيو في مصر رائدة لضمان تجربة تصفح مثالية وسلسة للمستخدمين وعناكب البحث معاً."
  },
  {
    title: "SEO Auditing (تدقيق وتحليل الموقع)",
    desc: "فحص فني ومالي شامل للموقع لكشف المشاكل التقنية التي تحجب الأرشفة وتمنع تصدر الكلمات. هذا التدقيق تقدمه لك شركة سيو في مصر متخصصة قبل البدء في العمل لتوفير الوقت والمال ووضع خطة علاجية واضحة."
  },
  {
    title: "Local SEO (السيو المحلي)",
    desc: "تهيئة موقعك ونشاطك التجاري للظهور للعملاء الباحثين في محيطك الجغرافي وعلى خرائط جوجل. تعد هذه الخدمة ضرورية للأنشطة والشركات الخدمية وتوفرها لك شركة سيو في مصر متمكنة لربطك بالجمهور الأقرب إليك مباشرة."
  }
];

const comparisonTableData = [
  {
    criterion: "التغلغل في عمق السوق المستهدف",
    regional: "تقدم شركة سيو في مصر تحليلات عامة مبنية على أرقام السوق العربي الشامل، وتحتاج وقتاً إضافياً للتكيف مع تفاصيل الشارع المصري.",
    local: "فهم استثنائي وعميق لنبض المستهلك المصري، وسلوكياته الشرائية، ومصطلحاته الدارجة التي تصنع فارقاً في المبيعات."
  },
  {
    criterion: "توثيق السمعة وسابقة الأعمال",
    regional: "ترتكز على استراتيجيات نمو نظرية، وتتطلب منك التدقيق في مدى ملاءمة نجاحاتها الإقليمية لطبيعة نشاطك محلياً.",
    local: "تمتلك سجل إنجازات واقعي، ودراسات حالة حية (Case Studies) لشركات مصرية حققت معها قفزات فعلية في الأرباح منذ 2015."
  },
  {
    criterion: "تنوع وتكامل الخدمات الرقمية",
    regional: "توفر باقات تسويقية عامة تشمل الإعلانات والخطط الإستراتيجية دون تخصص دقيق في قنوات معينة.",
    local: "تجمع بين التخصص الفائق في الـ SEO والتهيئة التقنية، مع تقديم حلول تسويق رقمي متكاملة تفيد مشروعك مباشرة."
  },
  {
    criterion: "انسيابية التواصل ولغة الخطاب",
    regional: "تعتمد لغة تواصل رسمية قد تخلق فجوة تمنع التعبير عن روح الهوية التجارية للشركات المحلية.",
    local: "تواصل مباشر، سريع، وباللهجة المصرية الدارجة التي تلمس قلوب وعقول جمهورك المستهدف وتبسط لك تفاصيل العمل."
  },
  {
    criterion: "التركيز والامتداد الجغرافي",
    regional: "تشتت جهودها عبر رقعة جغرافية واسعة ومترامية الأطراف في الوطن العربي والعالم.",
    local: "تركيز بؤري مكثف على السوق المصري وخصوصيته الجغرافية مع القدرة على التوسع الإقليمي المدروس."
  },
  {
    criterion: "مرونة وبناء الميزانيات",
    regional: "تفرض تسعيراً نمطياً مرتفعاً يعتمد على معايير دولية قد لا تتناسب مع العائد المتوقع للاستثمار المحلي.",
    local: "مرونة عالية في تصميم باقات أسعار مخصصة تضمن تحقيق أقصى عائد على الاستثمار (ROI) يناسب حجم ميزانيتك."
  }
];

const faqData = [
  {
    question: "كم تكلفة خدمات تحسين محركات البحث (SEO) في مصر؟",
    answer: "تختلف التكلفة بناءً على حجم موقعك الحالي، ومدى شراسة المنافسة في مجالك، والأهداف التي ترغب في تحقيقها. في 'يونيك'، نقدم استشارة وباقات مخصصة تضمن لك أفضل عائد على الاستثمار (ROI) يناسب ميزانيتك بدقة."
  },
  {
    question: "متى تبدأ نتائج السيو في الظهور بوضوح على جوجل؟",
    answer: "عادةً ما تبدأ النتائج الأولية والتحسينات التقنية في الظهور خلال أول 3 إلى 6 أشهر، بينما الظهور القوي والتصدر للكلمات المفتاحية الكبرى يعتمد على استدامة المحتوى وسلطة الباك لينك وبناء قوة الموقع بمرور الوقت."
  },
  {
    question: "لماذا تختار شركة 'يونيك' كأفضل شركة سيو في مصر؟",
    answer: "لأننا نمتلك خبرة حقيقية بالسوق المصري منذ عام 2015، ونعتمد على استراتيجيات White Hat الآمنة، ولدينا فريق متخصص يجمع بين البرمجة والتقنية وصياغة المحتوى الموجه للمستهلك المصري مباشرة."
  },
  {
    question: "هل أضمن الاستمرار في الصدارة بعد انتهاء العقد؟",
    answer: "نعم، لأننا نبني موقعك على أسس برمجية ومحتوى متوافق تماماً مع خوارزميات جوجل، مما يجعل نتائجك مستدامة، مع إمكانية متابعة الديانة والصيانة الدورية للحفاظ على التفوق الدائم ضد المنافسين."
  }
];

export default function SEOCompanyEgyptCompletePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="w-full bg-[#040D1A] text-white font-cairo overflow-x-hidden" style={{ direction: "rtl" }}>
      
      {/* 1. السكشن الأول: الهيرو */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/seocompanyegypt.webp"
            alt="شركة سيو في مصر - تصدر محركات البحث"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1000"
            style={{ animation: "slowZoom 12s ease-in-out infinite alternate" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-950/80 to-sky-950/70 z-10" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-10 text-center lg:text-right w-full flex flex-col items-center lg:items-start justify-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" />
            <span className="text-xs md:text-sm font-bold text-yellow-400">الوكالة الرقمية الأولى للصدارة والريادة</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl drop-shadow-lg">
            شركة سيو في مصر <span className="text-yellow-400">لتحقيق الصدارة</span> ومضاعفة أرباحك الرقمية
          </h1>

          <p className="text-base md:text-lg text-white/80 font-medium mb-10 max-w-2xl leading-relaxed">
            نحن في شركة سيو في مصر نساعد علامتك التجارية على الهيمنة على نتائج محركات البحث الأولى في السوق المصري، وجذب عملاء مستهدفين جاهزين للشراء يومياً باحترافية واستراتيجيات مدروسة.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/201505388060"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-sky-950 bg-yellow-400 hover:bg-yellow-500 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(234,179,8,0.4)] text-base md:text-lg"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              تواصل معنا عبر واتساب الآن
            </a>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-yellow-400/50 transition-all backdrop-blur-sm text-base md:text-lg"
            >
              اكتشف خدماتنا
              <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. السكشن التاني: خدمات السيو المتكاملة وكروت براقة */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-slate-800/60">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              خدماتنا الاحترافية
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              خدمات سيو (SEO) المتكاملة لتصدر نتائج البحث في مصر
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServicesEgyptData.map((item, idx) => {
              const IconC = item.icon;
              return (
                <div 
                  key={idx} 
                  className={`relative p-8 rounded-[2rem] ${item.bg} text-white border-2 ${item.border} ${item.glow} backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2`}
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/20">
                      <IconC className={`w-8 h-8 ${item.accent} drop-shadow-[0_0_10px_currentColor]`} />
                    </div>
                    <h3 className={`text-xl font-black ${item.accent} mb-3`}>{item.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. السكشن الثالث: لماذا الاهتمام بتهيئة موقعك مع يونيك */}
      <section className="py-28 px-6 relative overflow-hidden bg-[#061021] border-t border-slate-800/80">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-sky-500/15 text-sky-400 border border-sky-400/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-sm">
              لماذا نحن؟
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              لماذا يجب عليك الاهتمام بتهيئة موقعك لمحركات البحث مع &quot;يونيك&quot;؟
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              نجاح مشروعك الرقمي يبدأ من تصدر نتائج البحث الأولى، وإليك ما يجعل شركة سيو في مصر شريكك المثالي لتحقيق ذلك:
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {whyChooseUniqueData.map((item, idx) => {
              const IconC = item.icon;
              return (
                <div 
                  key={idx} 
                  className="relative p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-r from-[#0B1E3F] via-[#0D234B] to-[#081734] text-white border border-slate-600/50 shadow-[0_20px_50px_rgba(3,7,18,0.9)] hover:shadow-[0_25px_60px_rgba(255,255,255,0.12)] transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 group overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-[2.5rem] border border-slate-400/35 pointer-events-none group-hover:border-slate-300/60 transition-colors" />
                  <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300/50 to-transparent pointer-events-none" />

                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/5 border border-slate-400/40 flex items-center justify-center shadow-[0_0_25px_rgba(148,163,184,0.25)] group-hover:scale-105 transition-transform">
                    <IconC className="w-10 h-10 text-slate-200 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
                  </div>

                  <div className="flex-1 text-center sm:text-right">
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-yellow-400 transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#0D254F] via-[#091C3E] to-[#040D1A] border-2 border-yellow-400/40 shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-center relative overflow-hidden">
            <div className="absolute inset-0 rounded-[2.5rem] border border-yellow-400/20 pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              هل أنت مستعد لاكتساح المنافسة؟
            </h3>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              تواصل الآن مع فريق &quot;يونيك&quot; بصفتنا شركة سيو في مصر رائدة في هذا المجال منذ سنوات، واحصل على خطة مخصصة تضمن لموقعك أو متجرك الإلكتروني تصدر النتائج الأولى وجذب آلاف الزيارات المستهدفة.
            </p>
            <a
              href="https://wa.me/201505388060"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-sky-950 bg-yellow-400 hover:bg-yellow-500 hover:scale-105 transition-all shadow-[0_15px_35px_rgba(234,179,8,0.45)] text-lg"
            >
              <MessageCircle className="w-7 h-7 fill-current" />
              ابدأ الآن وتواصل مع خبير السيو
            </a>
          </div>
        </div>
      </section>

      {/* 4. السكشن الرابع: الكروت الإبداعية */}
      <section className="py-28 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-800/80">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col gap-8">
            {customCreativeData.map((item, idx) => {
              const IconC = item.icon;
              return (
                <div 
                  key={idx}
                  className="relative p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-r from-[#091B38] via-[#0C2246] to-[#07152E] text-white border-2 border-slate-500/40 shadow-[0_25px_60px_rgba(2,6,23,0.95)] hover:shadow-[0_30px_70px_rgba(255,255,255,0.15)] transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 group overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-[2.5rem] border border-slate-300/30 pointer-events-none group-hover:border-slate-200/60 transition-colors" />
                  <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-slate-200/50 to-transparent pointer-events-none" />

                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-slate-300/40 flex items-center justify-center shadow-[0_0_30px_rgba(226,232,240,0.25)] group-hover:scale-105 transition-transform">
                    <IconC className="w-8 h-8 text-slate-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                  </div>

                  <div className="flex-1 text-center sm:text-right flex flex-col gap-3">
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-yellow-400 transition-colors mb-1">
                      {item.title}
                    </h3>
                    {item.paragraphs.map((pText, pIdx) => (
                      <p key={pIdx} className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                        {pText}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. السكشن الخامس: مصطلحات تحسين محركات البحث بالكروت الكحلي والحدود الذهبية المتحركة */}
      <section className="py-28 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-800/80">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              قاموس السيو الشامل
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight drop-shadow-md">
              أهم مصطلحات شركات <span className="text-yellow-400">تحسين محركات البحث</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              دليلك التعريفي لأبرز المفاهيم التقنية والإسترشادية التي نعتمد عليها لتحقيق الصدارة والنجاح الرقمي المستدام.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {seoGlossaryData.map((item, idx) => {
              return (
                <div 
                  key={idx}
                  className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#08152B] via-[#0A1D3F] to-[#040D1A] text-white border-2 border-yellow-500/30 shadow-[0_30px_70px_rgba(0,0,0,0.95)] hover:shadow-[0_35px_80px_rgba(234,179,8,0.2)] transition-all duration-500 group overflow-hidden shimmer-gold-border"
                >
                  <div className="absolute inset-0 rounded-[2.5rem] border border-yellow-400/20 pointer-events-none group-hover:border-yellow-400/60 transition-colors" />
                  <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80 animate-shimmer" />
                  <div className="absolute bottom-0 right-10 left-10 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.25)] group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_12px_rgba(234,179,8,0.8)]" />
                    </div>

                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="text-xl sm:text-2xl font-black text-yellow-400 group-hover:text-yellow-300 transition-colors tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. السكشن السادس: جدول المقارنة التحليلية مع سطوع ذهبي متحرك ومتواصل على الحدود */}
      <section className="py-28 px-6 relative overflow-hidden bg-[#050E1D] border-t border-slate-800/80">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-md">
              قرار ذكي وآمن
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              كيف تختار <span className="text-yellow-400">الشريك الرقمي</span> الذي يقود نمو أعمالك؟
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              عندما تقرر الاستثمار في حضورك الرقمي، فإن اختيار الوكالة المناسبة هو الخطوة التي تحدد مصير ميزانيتك التسويقية. إليك مقارنة تحليلية دقيقة بين نموذج الشركات الاستشارية العابرة للحدود وبين شريكك المحلي المتغلغل في تفاصيل السوق:
            </p>
          </div>

          {/* الحاوية الكبيرة بحدود ذهبية بسطوع متحرك متواصل وقوي */}
          <div className="relative p-2 sm:p-4 rounded-[2.5rem] bg-gradient-to-br from-[#09162E] via-[#071329] to-[#040D1A] border-4 border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.3)] overflow-hidden gold-glow-box">
            <div className="absolute top-0 right-0 left-0 h-[4px] bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 animate-shimmer opacity-100" />
            <div className="absolute bottom-0 right-0 left-0 h-[4px] bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 animate-shimmer opacity-100" />

            <div className="overflow-x-auto rounded-[2rem]">
              <table className="w-full text-right border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#0D2040] border-b-2 border-yellow-500/40 text-yellow-400">
                    <th className="p-5 sm:p-6 text-base sm:text-lg font-black w-1/4 border-l border-yellow-500/20">معيار الاختيار والتقييم</th>
                    <th className="p-5 sm:p-6 text-base sm:text-lg font-black w-3/8 border-l border-yellow-500/20">الوكالات الإقليمية (مثل Steps Grow)</th>
                    <th className="p-5 sm:p-6 text-base sm:text-lg font-black w-3/8 text-yellow-300">شركة &quot;يونيك&quot; والوكالات المحلية</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm sm:text-base font-medium">
                  {comparisonTableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-5 sm:p-6 font-bold text-yellow-400/90 bg-[#09152C]/60 border-l border-slate-700/60">
                        {row.criterion}
                      </td>
                      <td className="p-5 sm:p-6 text-slate-300 border-l border-slate-700/60 leading-relaxed">
                        {row.regional}
                      </td>
                      <td className="p-5 sm:p-6 text-slate-100 bg-yellow-500/5 leading-relaxed font-semibold">
                        {row.local}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-r from-[#0C2248] via-[#091A39] to-[#040D1A] border-2 border-yellow-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center">
            <h3 className="text-xl sm:text-2xl font-black text-yellow-400 mb-3">
              💡 خلاصة القرار:
            </h3>
            <p className="text-slate-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
              إذا كنت تبحث عن استشارات واسعة النطاق لعلامة تجارية عابرة للقارات، فالخيارات الإقليمية قد تكون مناسبة. أما إذا كان هدفك هو بناء حضور رقمي قوي، والسيطرة على نتائج البحث في مصر، وتحقيق مبيعات حقيقية بأسرع وقت وأقل تكلفة، فإن شريكك المحلي الموثوق مثل &quot;يونيك&quot; هو الخيار الذكي والآمن لنمو أعمالك.
            </p>
          </div>
        </div>
      </section>

      {/* 7. السكشن السابع: الأسئلة الشائعة (FAQ) */}
      <section className="py-28 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-800/80">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-sky-500/15 text-sky-400 border border-sky-400/30 text-xs sm:text-sm font-black py-1.5 px-6 rounded-full mb-3 uppercase tracking-wider shadow-sm">
              إجابات واضحة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              الأسئلة الشائعة حول <span className="text-yellow-400">خدمات السيو</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              كل ما تحتاج معرفته للإجابة على تساؤلاتك قبل البدء معنا في رحلة الصدارة الرقمية.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-gradient-to-r from-[#09162D] via-[#0C1F40] to-[#071328] border border-slate-700/60 overflow-hidden transition-all duration-300 shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 sm:p-7 text-right flex items-center justify-between gap-4 font-bold text-lg sm:text-xl text-white hover:text-yellow-400 transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-6 h-6 text-yellow-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-7 pt-2 text-slate-300 text-base leading-relaxed border-t border-slate-800/80 font-medium">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/201505388060"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-sky-950 bg-yellow-400 hover:bg-yellow-500 hover:scale-105 transition-all shadow-[0_15px_40px_rgba(234,179,8,0.5)] text-lg"
            >
              <MessageCircle className="w-7 h-7 fill-current" />
              تواصل معنا الآن لتحقيق الصدارة
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
        @keyframes goldGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(234,179,8,0.3), inset 0 0 15px rgba(234,179,8,0.15); }
          50% { box-shadow: 0 0 60px rgba(234,179,8,0.6), inset 0 0 30px rgba(234,179,8,0.3); }
        }
        .gold-glow-box {
          animation: goldGlow 4s infinite ease-in-out;
        }
      `}</style>

    </main>
  );
}