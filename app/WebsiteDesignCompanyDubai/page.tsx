"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, BarChart, Code2, Rocket, Search, ShieldCheck, 
  Target, Globe, ShoppingBag, Briefcase, Layers, Cpu, Server, 
  Zap, ChevronDown, Check, TrendingUp, Smartphone, BadgeCheck,
  Building, Store
} from "lucide-react";

export default function DubaiWebDesignPremium() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // تأثيرات الحواف البارزة والظلال (Bevels & Strong Shadows)
  const brutalBevel = "border-t-4 border-l-4 border-white border-b-8 border-r-8 border-red-700 bg-black";
  const brutalShadow = "shadow-[12px_12px_0px_0px_#dc2626] transition-all hover:-translate-y-1 hover:shadow-[16px_16px_0px_0px_#dc2626]";
  const brutalShadowWhite = "shadow-[12px_12px_0px_0px_#ffffff] transition-all hover:-translate-y-1 hover:shadow-[16px_16px_0px_0px_#ffffff]";

  // ==========================================
  // بيانات الـ SEO والمنافسين
  // ==========================================
  const eeatStats = [
    { value: "98%", label: "نسبة الاحتفاظ بالعملاء (Retention Rate)" },
    { value: "+300%", label: "متوسط العائد على الاستثمار (Average ROI)" },
    { value: "450+", label: "مشاريع High Converting مكتملة" }
  ];

  const productLedStores = [
    { title: "متجر عطور", icon: Store, desc: "تصميم متاجر تعكس فخامة العطور بتجربة مستخدم بصرية راقية." },
    { title: "متجر ملابس", icon: ShoppingBag, desc: "متاجر أزياء سريعة التحميل مع فلاتر بحث متقدمة لزيادة المبيعات." },
    { title: "متجر إلكترونيات", icon: Cpu, desc: "بنية برمجية قوية تتحمل آلاف المنتجات وترافيك عالي." },
    { title: "متجر منتجات رقمية", icon: Layers, desc: "تسليم تلقائي وأنظمة دفع رقمية آمنة (KNET & Stripe)." }
  ];

  const services = [
    { title: "Corporate Website", icon: Building, desc: "تصميم موقع شركة يبني الثقة ويجذب عملاء B2B محتملين." },
    { title: "Ecommerce Development", icon: ShoppingBag, desc: "تطوير متاجر قادرة على توليد Predictable Revenue مستدام." },
    { title: "Web Development", icon: Code2, desc: "برمجة مواقع مخصصة باستخدام Next.js و Laravel لأنظمة معقدة." },
    { title: "Local SEO Dubai", icon: Search, desc: "تصدر نتائج محركات البحث في دبي والإمارات بهيكلة تقنية سليمة." }
  ];

  const faqs = [
    { q: "هل أنتم شركة تصميم مواقع الكترونية في دبي فقط؟", a: "نحن مقرنا الرئيسي في الإمارات ونخدم دبي، أبوظبي، والشارقة، بالإضافة إلى تقديم خدماتنا للسوق الخليجي بالكامل بأعلى معايير Website Development Company." },
    { q: "لماذا أسعار شركة تصميم مواقع الكترونية في دبي تختلف؟", a: "تعتمد التكلفة على الـ Premium Quality. المواقع المبنية بقوالب جاهزة رخيصة لكنها لا تحقق عائداً. نحن نبني مواقع High Converting ترفع من الـ ROI الخاص بك." },
    { q: "هل تقدمون خدمات Mobile Apps بجانب المواقع؟", a: "نعم، نعتبر وكالة شاملة (Digital Marketing Agency) تقدم خدمات تطوير تطبيقات الجوال بالتوازي مع Web Development Dubai لضمان تواجد رقمي متكامل." },
    { q: "ما هي التقنيات التي تستخدمونها؟", a: "نعتمد على Next.js للسرعة الخارقة، Laravel للأنظمة الآمنة، و WordPress للمدونات، مما يضمن توافق موقعك مع تحديثات جوجل (Core Web Vitals)." },
    { q: "كيف تضمنون تحقيق Predictable Revenue؟", a: "من خلال دمج الـ UX Design الاحترافي مع الـ Technical SEO، وتصميم بوابات إلكترونية ومسارات تحويل (Funnels) مجربة لتحويل الزوار إلى عملاء." }
  ];

  return (
    <main className="w-full min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-hidden" dir="rtl">
      
      {/* خلفية شبكية صارمة (Strict Grid) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* ================= HERO SECTION (Editorial Style) ================= */}
      <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 px-6 z-10 border-b-8 border-red-600 bg-black/90">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Typography Heavy Left Side */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-8 flex flex-col z-20">
              <div className="flex gap-4 mb-6">
                <span className="bg-white text-black font-black px-4 py-1 border-2 border-black shadow-[4px_4px_0_#dc2626] uppercase text-sm">Premium UX</span>
                <span className="bg-red-600 text-white font-black px-4 py-1 border-2 border-white shadow-[4px_4px_0_#ffffff] uppercase text-sm">Growth</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tight uppercase mb-8">
                أفضل <span className="text-transparent text-stroke-2 text-stroke-white bg-clip-text bg-gradient-to-b from-white to-gray-500 block mt-2">شركة تصميم مواقع الكترونية في دبي</span> {/* [1] */}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 font-bold max-w-2xl border-l-8 border-red-600 pl-6 leading-relaxed bg-black/50 p-4">
                تبحث عن شركة تصميم مواقع الكترونية في دبي تضمن لك الـ ROI؟ نحن نبني منصات رقمية (High Converting) تدمج بين الجمالية البصرية والهندسة البرمجية لمضاعفة إيراداتك. {/* [2] */}
              </p>
              
              <div className="flex flex-wrap gap-6 pt-8">
                <a href="#contact" className={`bg-red-600 text-white font-black text-2xl px-12 py-6 flex items-center gap-4 ${brutalBevel} ${brutalShadowWhite} hover:bg-red-700`}>
                  Start Your Project <ArrowUpRight className="w-8 h-8" />
                </a>
              </div>
            </motion.div>
            
            {/* Isometric 3D Right Side */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-4 relative hidden lg:flex justify-center items-center h-full">
              <div className="relative w-full h-[500px] perspective-1000">
                <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 border-4 border-white transform rotate-y-12 rotate-x-12 shadow-[20px_20px_0_#ffffff] flex flex-col justify-center items-center text-center p-6 z-20">
                  <BarChart className="w-20 h-20 text-white mb-4" />
                  <span className="text-4xl font-black text-white leading-none">Predictable<br/>Revenue</span>
                </div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-black border-4 border-red-600 transform -rotate-y-12 -rotate-x-12 shadow-[20px_20px_0_#dc2626] flex flex-col justify-center items-center text-center p-6 z-10">
                  <Code2 className="w-20 h-20 text-red-600 mb-4" />
                  <span className="text-3xl font-black text-white leading-none">Custom<br/>Web Design</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= EEAT / STATS (Bento Grid) ================= */}
      <section className="py-16 px-6 relative z-10 bg-white text-black border-b-8 border-red-600">
        <div className="container mx-auto max-w-7xl">
          <p className="text-2xl font-black text-center mb-10 uppercase">
            كأهم شركة تصميم مواقع الكترونية في دبي، نحقق أرقاماً تتحدث عن نفسها: {/* [3] */}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eeatStats.map((stat, i) => (
              <div key={i} className={`bg-black text-white p-8 border-4 border-red-600 flex flex-col items-center justify-center text-center ${brutalShadow}`}>
                <span className="text-6xl font-black text-red-600 mb-2">{stat.value}</span>
                <span className="text-lg font-bold uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES (Masonry Style) ================= */}
      <section className="py-24 px-6 relative z-10 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-8 border-white pb-8">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase">
              خدمات <span className="text-red-600">شركة تصميم مواقع الكترونية في دبي</span> {/* [4] */}
            </h2>
            <p className="text-xl font-bold text-gray-400 max-w-sm text-right mt-6 md:mt-0">
              بصفتنا شركة تصميم مواقع الكترونية في دبي نعتمد نهجاً يركز على الـ Conversion Rate والـ Branding. {/* [5] */}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((srv, i) => (
              <div key={i} className={`bg-black border-4 border-white p-10 group relative overflow-hidden ${brutalShadowWhite}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 transform translate-x-16 -translate-y-16 rotate-45 group-hover:scale-150 transition-transform duration-500 z-0"></div>
                <srv.icon className="w-16 h-16 text-red-600 mb-8 relative z-10" />
                <h3 className="text-4xl font-black text-white mb-4 relative z-10 uppercase">{srv.title}</h3>
                <p className="text-xl font-bold text-gray-300 relative z-10">{srv.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-red-600 font-black text-lg relative z-10">
                  EXPLORE <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCT-LED ECOMMERCE ================= */}
      <section className="py-24 px-6 relative z-10 bg-red-600 border-y-8 border-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-black uppercase mb-6 drop-shadow-[4px_4px_0_#ffffff]">
              Ecommerce Development
            </h2>
            <p className="text-2xl font-black text-white bg-black inline-block px-8 py-3 border-4 border-white shadow-[8px_8px_0_#000000]">
              شركة تصميم مواقع الكترونية في دبي متخصصة في المتاجر المتخصصة {/* [6] */}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productLedStores.map((store, i) => (
              <div key={i} className={`bg-white text-black p-8 border-4 border-black flex flex-col items-center text-center ${brutalShadow}`}>
                <store.icon className="w-16 h-16 text-red-600 mb-6" />
                <h3 className="text-2xl font-black mb-4">{store.title}</h3>
                <p className="font-bold text-gray-700">{store.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK (Horizontal Sticky Scroll effect layout) ================= */}
      <section className="py-24 px-6 relative z-10 bg-black">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 lg:sticky lg:top-24 h-max">
            <h2 className="text-5xl font-black text-white uppercase mb-6 leading-tight">
              Website Development Company
            </h2>
            <p className="text-xl font-bold text-gray-400 border-r-8 border-red-600 pr-6">
              شركة تصميم مواقع الكترونية في دبي تعتمد على أحدث معايير الويب لضمان أمان وسرعة مشروعك (Business Website). {/* [7] */}
            </p>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-10">
            {[
              { t: "Next.js & React", d: "لبناء واجهات تفاعلية سريعة التحميل تتوافق مع Core Web Vitals.", c: "bg-[#111] border-white text-white" },
              { t: "Laravel Framework", d: "لبناء بوابات إلكترونية آمنة وأنظمة B2B معقدة قابلة للتوسع.", c: "bg-red-600 border-white text-white" },
              { t: "WordPress / WooCommerce", d: "للمدونات والمتاجر السريعة مع إدارة محتوى سلسة لعملائك.", c: "bg-white border-black text-black" }
            ].map((tech, i) => (
              <div key={i} className={`${tech.c} border-4 p-10 ${brutalShadow}`}>
                <h3 className="text-4xl font-black mb-4">{tech.t}</h3>
                <p className="text-2xl font-bold">{tech.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6 relative z-10 bg-white text-black border-y-8 border-red-600">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 max-w-4xl mx-auto leading-tight">
            لماذا تختار Unique كأفضل <span className="text-red-600">شركة تصميم مواقع الكترونية في دبي</span> ؟ {/* [8] */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className={`bg-black text-white p-10 border-4 border-red-600 ${brutalShadow}`}>
              <BadgeCheck className="w-16 h-16 text-red-600 mb-6" />
              <h3 className="text-2xl font-black mb-4 uppercase">Web Design Company</h3>
              <p className="text-lg font-bold text-gray-300">تصاميم UI/UX مدروسة لزيادة وقت بقاء الزائر (Time on Site) وتقليل الارتداد.</p>
            </div>
            <div className={`bg-red-600 text-white p-10 border-4 border-black ${brutalShadowWhite}`}>
              <TrendingUp className="w-16 h-16 text-black mb-6" />
              <h3 className="text-2xl font-black mb-4 text-black uppercase">SEO Agency</h3>
              <p className="text-lg font-bold text-white">نبني المواقع مهيأة بالكامل لمحركات البحث (Technical SEO) لتتصدر المنافسة.</p>
            </div>
            <div className={`bg-black text-white p-10 border-4 border-red-600 ${brutalShadow}`}>
              <Smartphone className="w-16 h-16 text-red-600 mb-6" />
              <h3 className="text-2xl font-black mb-4 uppercase">Mobile Apps</h3>
              <p className="text-lg font-bold text-gray-300">حلول رقمية متكاملة تمتد من الويب إلى تطبيقات الجوال لتعزيز ولاء عملائك.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 px-6 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-16 uppercase">
            قالوا عن <span className="text-red-600">شركة تصميم مواقع الكترونية في دبي</span> {/* [9] */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className={`bg-[#111] border-4 border-white p-10 ${brutalShadowWhite}`}>
              <p className="text-2xl font-bold text-white mb-8 leading-relaxed">
                "بحثنا عن Web Design Dubai agency تفهم متطلبات السوق التجاري. منصة Unique وفرت لنا تصميماً Premium رفع الـ ROI بنسبة 40%."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 border-2 border-white rounded-full"></div>
                <div>
                  <h4 className="text-xl font-black text-white">أحمد المنصوري</h4>
                  <span className="text-red-600 font-bold">CEO - Dubai Tech</span>
                </div>
              </div>
            </div>
            <div className={`bg-[#111] border-4 border-red-600 p-10 ${brutalShadow}`}>
              <p className="text-2xl font-bold text-white mb-8 leading-relaxed">
                "أفضل Website Development Company تعاملنا معها. بناء المتجر الإلكتروني كان سريعاً ومعدل التحويل (High Converting) فاق التوقعات."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white border-2 border-red-600 rounded-full"></div>
                <div>
                  <h4 className="text-xl font-black text-white">سارة المهيري</h4>
                  <span className="text-red-600 font-bold">Founder - Fashion Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ (Rich Results Focused) ================= */}
      <section className="py-24 px-6 relative z-10 bg-white text-black border-t-8 border-red-600">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-black uppercase mb-16 text-center shadow-black">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className={`border-4 border-black bg-white overflow-hidden ${brutalShadow}`}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-8 text-right flex justify-between items-center font-black text-2xl hover:bg-red-600 hover:text-white transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-8 h-8 flex-shrink-0 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-black text-white">
                      <div className="p-8 border-t-4 border-black text-xl font-bold leading-relaxed">
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
      <section id="contact" className="py-32 px-6 relative z-10 bg-red-600 border-t-8 border-black">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase mb-10 drop-shadow-[6px_6px_0_#ffffff]">
            Get Free Quote Today
          </h2>
          <p className="text-3xl font-black text-white bg-black inline-block px-10 py-6 mb-16 border-4 border-white shadow-[12px_12px_0px_0px_#ffffff]">
            تعاقد مع <span className="text-red-600">شركة تصميم مواقع الكترونية في دبي</span> {/* [12] */} تصنع الفارق الرقمي.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/00201505388060"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-black text-white font-black text-4xl px-16 py-8 flex items-center justify-center gap-6 w-max uppercase ${brutalBevel} ${brutalShadowWhite} hover:bg-gray-900`}
            >
              Contact Us <ArrowUpRight className="w-12 h-12 text-red-600" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}