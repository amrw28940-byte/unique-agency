"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, Globe, Code2, Server, Smartphone, Zap, Shield, Search, 
  ChevronDown, CheckCircle2, Star, LineChart, Cpu, Layout, Layers, 
  MessageSquare, ArrowUpLeft, ShoppingBag, Building, BriefcaseMedical
} from "lucide-react";

export default function EmiratesWebDesignPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // ==========================================
  // البيانات (مزودة بجميع الكلمات المفتاحية)
  // ==========================================

  const services = [
    { icon: Layout, title: "تصميم موقع احترافي", desc: "نقدم خدمات UI Design و UX Design لضمان تجربة مستخدم مبهرة." },
    { icon: ShoppingBag, title: "تصميم متجر إلكتروني", desc: "تصميم متجر إلكتروني دبي متكامل مع بوابات الدفع لزيادة المبيعات." },
    { icon: Code2, title: "تطوير مواقع إلكترونية", desc: "أعلى معايير Website Design Dubai و Web Development Dubai." },
    { icon: Globe, title: "تصميم بوابات إلكترونية", desc: "بناء بوابات حكومية ومؤسسية ضخمة بأعلى معايير الأمان." }
  ];

  const websiteTypes = [
    { title: "تصميم موقع شركة", icon: Building, desc: "منصات تعكس قوة علامتك وتعتبر الخيار الأول كـ أفضل نظام لبناء موقع شركة." },
    { title: "المتاجر الإلكترونية", icon: ShoppingBag, desc: "تصميم متجر إلكتروني WooCommerce أو تصميم متجر Shopify في الإمارات." },
    { title: "القطاع العقاري", icon: Layers, desc: "مواقع عقارية بخرائط تفاعلية لتسهيل وصول العملاء للعقارات." },
    { title: "الرعاية الصحية", icon: BriefcaseMedical, desc: "منصات طبية مع أنظمة حجز مواعيد إلكترونية." }
  ];

  const techComparison = [
    { 
      title: "WordPress", 
      icon: Layout,
      useCase: "تصميم موقع باستخدام WordPress", 
      desc: "المنصة الأكثر مرونة للمواقع التعريفية والمدونات.", 
      pros: ["مرن جداً", "تكلفة اقتصادية", "إدارة سهلة"] 
    },
    { 
      title: "Laravel", 
      icon: Server,
      useCase: "تصميم موقع باستخدام Laravel", 
      desc: "أقوى إطار عمل لبناء الأنظمة المخصصة والبوابات المعقدة.", 
      pros: ["أمان عالي", "تخصيص كامل", "أداء مستقر"] 
    },
    { 
      title: "Next.js", 
      icon: Cpu,
      useCase: "تصميم موقع باستخدام Next.js", 
      desc: "التقنية المستقبلية لتحقيق سرعات تحميل خارقة (SSR).", 
      pros: ["سرعة فائقة", "صديق للـ SEO", "تجربة مستخدم حية"] 
    }
  ];

  const executionSteps = [
    { num: "01", title: "التحليل الاستراتيجي", desc: "دراسة السوق وفهم احتياجات نشاطك التجاري في الإمارات." },
    { num: "02", title: "UX/UI Design", desc: "رسم واجهات تعكس الفخامة وتناسب ذوق المستهلك الإماراتي." },
    { num: "03", title: "برمجة مواقع دقيقة", desc: "تحويل التصميم لأكواد نظيفة كأفضل شركة برمجة مواقع." },
    { num: "04", title: "الاطلاق والتسويق", desc: "تدشين الموقع بعد فحصه ليكون تصميم موقع متوافق مع Core Web Vitals." }
  ];

  const pricingPackages = [
    {
      name: "باقة رواد الأعمال",
      price: "يبدأ من 2,500 درهم",
      target: "تصميم موقع شركة",
      features: ["تصميم موقع متوافق مع الجوال", "لوحة تحكم أساسية", "دعم اللغة العربية والإنجليزية", "استضافة مجانية لعام"]
    },
    {
      name: "باقة الأعمال المتكاملة",
      price: "يبدأ من 5,000 درهم",
      target: "تصميم مواقع للشركات",
      isPopular: true,
      features: ["تصميم موقع سريع (Next.js/WP)", "تصميم موقع متوافق مع SEO", "تصميم موقع متعدد اللغات", "دعم فني ممتد"]
    },
    {
      name: "المتاجر والبوابات",
      price: "تسعير مخصص",
      target: "تصميم متجر إلكتروني",
      features: ["تصميم موقع باستخدام Laravel", "ربط بوابات دفع إماراتية", "لوحات تحكم متقدمة", "حماية سيبرانية عالية"]
    }
  ];

  const faqs = [
    { q: "كم يستغرق تصميم موقع؟", a: "بصفتنا شركة تصميم مواقع الكترونية في الامارات، يعتمد الوقت على حجم المشروع. عادةً ننجز المواقع التعريفية خلال أسبوعين إلى 3 أسابيع، كأفضل شركة تصميم مواقع للشركات في دبي." },
    { q: "ما هي أسعار تصميم المواقع في الإمارات؟", a: "باعتبارنا شركة تصميم مواقع الكترونية في الامارات، نوفر شفافية تامة. تكلفة تصميم موقع إلكتروني في دبي تبدأ من 2500 درهم وتختلف حسب المتطلبات الدقيقة والتقنيات المستخدمة." },
    { q: "هل تقدمون تصميم موقع متعدد اللغات؟", a: "بالتأكيد، نحن خبراء في تصميم موقع يدعم اللغة العربية والإنجليزية لتوسيع قاعدة عملائك في المجتمع الإماراتي المتنوع." },
    { q: "هل تصممون متاجر إلكترونية متكاملة؟", a: "نعم، نوفر تصميم متجر إلكتروني WooCommerce و تصميم متجر Shopify في الإمارات بما يتناسب مع حجم أعمالك." },
    { q: "ما الفرق في مقارنة WordPress وLaravel؟", a: "الووردبريس ممتاز للمدونات والمواقع البسيطة، بينما Laravel مخصص للأنظمة المعقدة والأمان العالي. نحن شركة تطوير مواقع نحدد الأنسب لك." },
    { q: "هل يشمل عملكم تصميم مواقع أبوظبي والشارقة؟", a: "نعم، خدماتنا تغطي كافة الإمارات؛ نقدم تصميم مواقع أبوظبي، تصميم مواقع الشارقة، تصميم مواقع عجمان، و تصميم مواقع رأس الخيمة بجودة عالمية." },
    { q: "هل مواقعكم متوافقة مع محركات البحث؟", a: "نعم، نضمن تصميم موقع متوافق مع Google و تصميم موقع متوافق مع SEO بالكامل لتصدر النتائج." }
  ];

  // ==========================================
  // ستايلات الزجاج (Glassmorphism)
  // ==========================================
  const glassPanel = "bg-[#040D1A]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]";
  const neonText = "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400";
  const neonGlow = "shadow-[0_0_20px_rgba(6,182,212,0.5)]";

  return (
    <main className="w-full min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500 selection:text-white overflow-hidden" dir="rtl">
      
      {/* خلفية فضائية / زجاجية متحركة */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/40 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-screen flex items-center pt-28 pb-20 px-6 z-10">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 w-max">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-400 text-sm font-bold tracking-wider">Unique Digital Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.2] text-white">
              نصنع المستقبل الرقمي مع أفضل <span className={neonText}>شركة تصميم مواقع الكترونية في الامارات</span> {/* [1] */}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-lg leading-relaxed">
              ارتقِ بعلامتك التجارية في قلب دبي عبر منصات رقمية فائقة السرعة. كـ شركة تصميم مواقع في دبي، ندمج بين الإبداع المطلق (UX Design) والأداء التقني الاستثنائي.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#contact" className={`px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-black text-lg flex items-center gap-3 transition-transform hover:scale-105 ${neonGlow}`}>
                ابدأ مشروعك الرقمي <ArrowUpLeft className="w-6 h-6" />
              </a>
              <div className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold flex items-center gap-2">
                <Globe className="text-cyan-400 w-5 h-5" /> Web Development Dubai
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-[3rem] p-1 bg-gradient-to-br from-cyan-500/40 via-purple-500/40 to-transparent">
              <div className="w-full h-full rounded-[2.8rem] bg-[#020617] p-8 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/20 blur-[60px]"></div>
                <Code2 className="w-16 h-16 text-cyan-400 mb-4 relative z-10" />
                <h3 className="text-4xl font-black text-white relative z-10 leading-tight">
                  تصميم مواقع دبي<br/>
                  <span className="text-slate-400 text-2xl font-bold">بمعايير عالمية</span>
                </h3>
                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. لماذا تحتاج موقعًا في الإمارات؟ */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            لماذا تحتاج موقعاً في <span className={neonText}>دبي والإمارات</span>؟
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
            في سوق ديناميكي لا ينام، تواجدك الرقمي هو واجهتك الأولى. بصفتنا <span className="font-bold text-cyan-400">شركة تصميم مواقع الكترونية في الامارات</span> {/* [2] */}، ندرك أن تطوير مواقع إلكترونية احترافية هو مفتاحك لكسب ثقة المستهلك الإماراتي المطلع، والتفوق في نتائج بحث جوجل لتوليد مبيعات لا تتوقف.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Search, t: "تصميم موقع متوافق مع Google", d: "صدارة مستمرة في نتائج البحث." },
              { icon: Zap, t: "تصميم موقع سريع", d: "أداء يخطف الزوار ويقلل الارتداد." },
              { icon: Shield, t: "هوية مؤسسية موثوقة", d: "تصميم مواقع الإمارات تعكس فخامتك." }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-3xl flex flex-col items-center ${glassPanel} hover:border-cyan-500/50 transition-colors`}>
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.t}</h3>
                <p className="text-slate-400 text-sm text-center">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. لماذا Unique؟ */}
      <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">لماذا تختار <span className={neonText}>شركتنا</span>؟</h2>
              <p className="text-lg text-slate-400">
                Unique ليست مجرد <span className="text-cyan-400 font-bold">شركة تصميم مواقع الكترونية في الامارات</span> {/* [3] */}، بل شريك استراتيجي. نحن أفضل شركة تصميم مواقع في دبي لأننا نجمع بين الفن البرمجي وعلم التسويق لتقديم تصميم موقع احترافي يحقق العائد (ROI).
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <span className="px-6 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">UI Design</span>
              <span className="px-6 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">شركة تصميم مواقع احترافية</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. الخدمات */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">خدمات متكاملة من <span className={neonText}>شركة تصميم مواقع الكترونية في الامارات</span> رائدة</h2> {/* [4] */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {services.map((srv, i) => (
              <div key={i} className={`p-8 rounded-3xl text-right ${glassPanel} group`}>
                <srv.icon className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black text-white mb-3">{srv.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. أنواع المواقع */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16">أنظمة رقمية تناسب <span className={neonText}>كافة القطاعات</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websiteTypes.map((type, i) => (
              <div key={i} className={`p-8 rounded-[2rem] flex items-start gap-6 ${glassPanel}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shrink-0 shadow-lg">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3">{type.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. مقارنة التقنيات */}
      <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">مقارنة <span className={neonText}>التقنيات الحديثة</span></h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              نحن <span className="font-bold text-cyan-400">شركة تصميم مواقع الكترونية في الامارات</span> {/* [5] */} تتقن اختيار التقنية الأنسب كـ شركة برمجة مواقع متخصصة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techComparison.map((tech, i) => (
              <div key={i} className={`p-8 rounded-[2.5rem] relative overflow-hidden ${glassPanel} border-t-2 border-t-cyan-500/50`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-[100px]"></div>
                <tech.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-3xl font-black text-white mb-2">{tech.title}</h3>
                <span className="text-sm font-bold text-teal-400 block mb-4">{tech.useCase}</span>
                <p className="text-slate-400 mb-6 min-h-[50px]">{tech.desc}</p>
                <ul className="space-y-3">
                  {tech.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white font-medium">
                      <CheckCircle2 className="w-5 h-5 text-teal-400" /> {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. مراحل التنفيذ */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16">من الفكرة إلى <span className={neonText}>الريادة</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {executionSteps.map((step, i) => (
              <div key={i} className={`p-8 rounded-3xl relative ${glassPanel}`}>
                <span className="text-6xl font-black text-white/5 absolute -bottom-2 -left-2">{step.num}</span>
                <h3 className="text-xl font-black text-cyan-400 mb-4">{step.title}</h3>
                <p className="text-sm text-slate-300 font-medium leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. جدول الأسعار */}
      <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">تكلفة <span className={neonText}>تصميم موقع</span></h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              أسعار تنافسية من <span className="font-bold text-cyan-400">شركة تصميم مواقع الكترونية في الامارات</span> {/* [6] */} تضمن لك أعلى جودة وأفضل عائد على الاستثمار (أسعار تصميم المواقع).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {pricingPackages.map((pkg, i) => (
              <div key={i} className={`p-8 rounded-[2.5rem] relative ${pkg.isPopular ? `bg-[#040D1A] border-2 border-cyan-500 ${neonGlow} scale-105 z-10` : glassPanel}`}>
                {pkg.isPopular && <span className="absolute -top-4 right-8 bg-cyan-500 text-white font-bold px-4 py-1 rounded-full text-sm">تصميم مواقع دبي المفضل</span>}
                <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                <p className="text-teal-400 font-bold mb-6 text-sm">{pkg.target}</p>
                <div className="text-3xl font-black text-white mb-8">{pkg.price}</div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`w-full py-4 rounded-xl font-bold flex justify-center items-center transition-colors ${pkg.isPopular ? 'bg-cyan-500 hover:bg-cyan-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                  اطلب باقتك
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. نتائج وأرقام */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">لغة <span className={neonText}>الأرقام</span></h2>
          <p className="text-xl text-slate-400 mb-16">
            لغة الأرقام هي ما يميز أي <span className="font-bold text-cyan-400">شركة تصميم مواقع الكترونية في الامارات</span> {/* [7] */} ناجحة.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-3xl ${glassPanel}`}>
              <span className="block text-6xl font-black text-cyan-400 mb-4">+400%</span>
              <span className="text-lg font-bold text-white">متوسط زيادة زيارات عملائنا</span>
            </div>
            <div className={`p-8 rounded-3xl border border-cyan-500/50 bg-[#040D1A]/80 ${neonGlow}`}>
              <span className="block text-6xl font-black text-white mb-4">0.9s</span>
              <span className="text-lg font-bold text-teal-400">سرعة استجابة تصميماتنا (Core Web Vitals)</span>
            </div>
            <div className={`p-8 rounded-3xl ${glassPanel}`}>
              <span className="block text-6xl font-black text-emerald-400 mb-4">#1</span>
              <span className="text-lg font-bold text-white">تصدر نتائج بحث Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. نحن مقابل السوق */}
      <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-8">نحن مقابل <span className={neonText}>السوق</span></h2>
          <p className="text-center text-lg text-slate-400 mb-16">لماذا نختلف عن أي <span className="font-bold text-cyan-400">شركة تصميم مواقع الكترونية في الامارات</span> {/* [8] */} أخرى كأهم شركة تطوير مواقع؟</p>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#040D1A]/40 backdrop-blur-md">
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-6 font-black text-lg">
              <div className="text-white">المعيار</div>
              <div className="text-cyan-400">Unique Agency</div>
              <div className="text-slate-500">الشركات التقليدية</div>
            </div>
            {[
              { m: "السرعة والأداء", u: "تقنيات Next.js ولارافل فائقة", t: "قوالب جاهزة بطيئة" },
              { m: "تجربة المستخدم", u: "تصميمات UX/UI مخصصة للسوق الإماراتي", t: "تصاميم مكررة" },
              { m: "توافق SEO", u: "مدمج في البنية التحتية البرمجية", t: "عبر إضافات خارجية ثقيلة" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 last:border-0 font-medium">
                <div className="text-white">{row.m}</div>
                <div className="text-teal-400 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> {row.u}</div>
                <div className="text-slate-500">{row.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. آراء العملاء */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16">ثقة <span className={neonText}>شركاء النجاح</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className={`p-10 rounded-[2rem] ${glassPanel}`}>
              <div className="flex text-yellow-400 mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}</div>
              <p className="text-lg font-bold text-white mb-6 leading-relaxed">
                "أرقى <span className="text-cyan-400 font-black">شركة تصميم مواقع الكترونية في الامارات</span> {/* [9] */} تعاملت معها. تصميم موقع احترافي، تصميم موقع إلكتروني دبي يعكس فخامة شركتنا بشكل مذهل."
              </p>
              <div className="text-teal-400 font-bold">- مدير شركة استشارات، دبي</div>
            </div>
            <div className={`p-10 rounded-[2rem] ${glassPanel}`}>
              <div className="flex text-yellow-400 mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}</div>
              <p className="text-lg font-bold text-white mb-6 leading-relaxed">
                "بناء منصتنا مع Unique كان نقطة التحول. أفضل تصميم مواقع إلكترونية دبي وحلول تصميم متجر إلكتروني احترافية ضاعفت مبيعاتنا."
              </p>
              <div className="text-teal-400 font-bold">- مؤسس منصة تجارية، الشارقة</div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. الأسئلة الشائعة */}
      <section className="py-24 px-6 relative z-10 bg-white/5 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16">الأسئلة <span className={neonText}>الشائعة</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`rounded-2xl overflow-hidden ${glassPanel} transition-all duration-300`}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-right flex justify-between items-center font-bold text-lg text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform ${activeFaq === index ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="p-6 pt-0 border-t border-white/10 mt-4 text-slate-300 font-medium leading-relaxed">
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

      {/* 14. CTA النهائي */}
      <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-[#020617] -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-20">
          <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(6,182,212,0.6)]">
            <Rocket className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            انطلق الآن مع أقوى <span className={neonText}>شركة تصميم مواقع الكترونية في الامارات</span> {/* [12] */}
          </h2>
          <p className="text-xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto">
            لا تكتفِ بتواجد عادي. احصل على تصميم مواقع الإمارات الأسرع والأكثر فخامة لدفع نشاطك التجاري نحو القمة.
          </p>
          <a 
            href={`https://wa.me/00201505388060?text=${encodeURIComponent("مرحباً، أود الاستفسار عن تصميم موقع في الإمارات.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-4 bg-cyan-500 text-white font-black text-2xl px-12 py-6 rounded-[2rem] hover:bg-cyan-400 transition-all hover:-translate-y-2 ${neonGlow}`}
          >
            <MessageSquare className="w-8 h-8" /> استشارة مجانية لمشروعك
          </a>
        </div>
      </section>

    </main>
  );
}