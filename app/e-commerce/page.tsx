"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  MousePointerClick, TrendingUp, CreditCard, LayoutDashboard, Smartphone, 
  Search, Palette, Code, Rocket, Store, ShoppingBag, CheckCircle2 
} from "lucide-react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";

export default function EcommerceService() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  // متغيرات الحركة (Animations)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const horizontalCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] py-24 px-6 font-cairo" style={{ direction: "rtl" }}>
      
      {/* أيقونات التواصل العائمة */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <a href="https://wa.me/201505388060" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform" aria-label="تواصل معنا عبر واتساب">
          <FaWhatsapp size={28} />
        </a>
        <a href="https://www.facebook.com/uniquews" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform" aria-label="تابعنا على فيسبوك">
          <FaFacebook size={28} />
        </a>
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* ================= 1. سكشن الهيرو ================= */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full mx-auto rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl bg-sky-950/40 backdrop-blur-md flex flex-col items-center pt-12 md:pt-16"
        >
          <div className="w-full text-center px-6 z-20 flex flex-col items-center mb-8 md:mb-12">
             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
                  اطلق متجرك الإلكتروني <br className="hidden md:block"/>
                  <span className="text-amber-200">وضاعف مبيعاتك</span>
                </h1>
                <p className="text-white/90 text-lg md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                  نصمم لك متجراً إلكترونياً احترافياً، متوافقاً مع محركات البحث (SEO) وسريعاً على الموبايل، ليوفر تجربة شراء سلسة لعملائك ومزوداً بأحدث تقنيات الدفع.
                </p>
                <a 
                  href="https://wa.me/201505388060" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-black py-4 px-10 rounded-full hover:bg-white hover:text-[#25D366] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)] text-xl hover:scale-105"
                >
                  ابدأ تجارتك الآن 
                  <FaWhatsapp className="w-7 h-7 animate-bounce" />
                </a>
             </motion.div>
          </div>

          <div className="w-full relative z-10">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-950/20 z-10 pointer-events-none"></div>
             <motion.img 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4, duration: 0.8 }}
                src="/e-commerce.webp" 
                alt="تصميم متجر إلكتروني احترافي متوافق مع السيو والموبايل" 
                loading="eager"
                className="w-full h-auto max-h-[600px] object-cover md:object-contain object-bottom hover:scale-105 transition-transform duration-700"
             />
          </div>
        </motion.header>

        {/* ================= 2. سكشن المميزات ================= */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative z-20"
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              لماذا تختار <span className="text-amber-200">منصاتنا؟</span>
            </h2>
            <div className="bg-sky-950/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-200 mb-4">شريكك التقني للنمو الرقمي</h3>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                لا نكتفي بإنشاء متجر، بل نبني لك بيئة عمل متكاملة. ندمج خبرتنا في محركات البحث (SEO) مع سرعة الأداء لتضمن ظهور متجرك في الصدارة، مع دعم كامل للربط مع بوابات الدفع المحلية والعالمية، لضمان استلام أموالك بكل سهولة وأمان.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp className="w-10 h-10" />, title: "تصدر نتائج البحث", desc: "أكواد نظيفة متوافقة تماماً مع خوارزميات جوجل لضمان وصول العملاء إليك مجاناً." },
              { icon: <CreditCard className="w-10 h-10" />, title: "بوابات دفع آمنة", desc: "ربط سلس مع فيزا، ماستركارد، وبوابات الدفع المحلية لاستقبال أموالك فوراً." },
              { icon: <LayoutDashboard className="w-10 h-10" />, title: "إدارة متكاملة", desc: "لوحة تحكم ذكية وبسيطة لإدارة المنتجات، المخزون، والطلبات بضغطة زر." },
              { icon: <Smartphone className="w-10 h-10" />, title: "تجربة موبايل خرافية", desc: "أكثر من 80% من المبيعات تتم عبر الموبايل، لذلك نصمم واجهات فائقة الاستجابة." }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:border-amber-300/50 flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/0 to-amber-200/0 group-hover:from-amber-200/10 group-hover:to-transparent transition-all duration-500 rounded-[2rem]"></div>
                <div className="relative z-10 w-20 h-20 bg-sky-900/50 border border-white/10 rounded-2xl flex items-center justify-center text-amber-200 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                  {feature.icon}
                </div>
                <h4 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-amber-200 transition-colors">
                  {feature.title}
                </h4>
                <p className="relative z-10 text-white/70 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= 3. سكشن مرونة الخيارات ================= */}
        <section className="relative z-20 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              مرونة الخيارات.. <span className="text-amber-200">المنصة الأنسب لك</span>
            </h2>
            <h3 className="text-2xl font-bold text-white/90 mb-6">اختر الحل الذي ينمي مشروعك</h3>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto bg-sky-950/30 p-6 rounded-2xl border border-white/10">
              نحن نوفر لك خيارات متنوعة تناسب حجم وطبيعة نشاطك، سواء كنت تحتاج إلى القوة العالمية، السهولة المحلية، أو المرونة الكاملة للتحكم في برمجياتك.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div className="bg-gradient-to-b from-white/10 to-black/20 backdrop-blur-xl border-2 border-green-400/30 rounded-[3rem] p-8 hover:border-green-400 transition-all duration-500 shadow-2xl">
                 <Store className="w-16 h-16 text-green-400 mb-6" />
                 <h4 className="text-2xl font-black text-white mb-4">Shopify</h4>
                 <p className="text-white/70 mb-6">القوة العالمية والموثوقية العالية للمشاريع التي تستهدف التوسع السريع.</p>
            </motion.div>

            <motion.div className="bg-gradient-to-b from-white/10 to-black/20 backdrop-blur-xl border-2 border-purple-400/30 rounded-[3rem] p-8 hover:border-purple-400 transition-all duration-500 shadow-2xl">
                 <SiWoocommerce className="w-16 h-16 text-purple-400 mb-6" />
                 <h4 className="text-2xl font-black text-white mb-4">WooCommerce</h4>
                 <p className="text-white/70 mb-6">المرونة المطلقة على ووردبريس، تحكم كامل في متجرك، وتخصيص لا نهائي لمميزات موقعك.</p>
            </motion.div>

            <motion.div className="bg-gradient-to-b from-white/10 to-black/20 backdrop-blur-xl border-2 border-blue-400/30 rounded-[3rem] p-8 hover:border-blue-400 transition-all duration-500 shadow-2xl">
                 <ShoppingBag className="w-16 h-16 text-blue-400 mb-6" />
                 <h4 className="text-2xl font-black text-white mb-4">EasyOrder</h4>
                 <p className="text-white/70 mb-6">الحل الذكي والمحلي، واجهة عربية بسيطة وسهولة تامة في إدارة الطلبات والمخزون.</p>
            </motion.div>
          </div>
        </section>

        {/* ================= 4. سكشن خطوات العمل ================= */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative z-20 max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              خطوة بخطوة نحو <span className="text-amber-200">متجرك الاحترافي</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              نحن نؤمن بالشفافية والوضوح. إليك رحلة تصميم متجرك معنا من الفكرة وحتى تحقيق أول مبيعاتك بنجاح.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { num: "01", icon: <Search className="w-8 h-8" />, title: "تحليل النشاط والجمهور", desc: "نبدأ بتحليل نشاطك التجاري والجمهور المستهدف بدقة." },
              { num: "02", icon: <Palette className="w-8 h-8" />, title: "تصميم واجهة عصرية", desc: "نصمم واجهة جذابة تعكس هوية علامتك التجارية." },
              { num: "03", icon: <Code className="w-8 h-8" />, title: "البرمجة والربط التقني", desc: "ننتقل لمرحلة البرمجة بأحدث التقنيات مع الربط ببوابات الدفع." },
              { num: "04", icon: <Rocket className="w-8 h-8" />, title: "الاختبار، الإطلاق، والتدريب", desc: "اختبارات دقيقة للأداء والأمان قبل التسليم النهائي." }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                variants={horizontalCardVariants}
                className="group relative w-full bg-[#0B1B3D] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-right gap-6 md:gap-8 overflow-hidden hover:border-amber-400/30 transition-all duration-300 shadow-xl"
              >
                <div className="absolute -left-4 -top-8 text-[8rem] font-black text-white/[0.03] select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  {step.num}
                </div>
                <div className="relative z-10 shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-[#0B1B3D] shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="relative z-10 flex-1 mt-2 md:mt-0">
                  <h4 className="text-2xl font-bold text-white mb-3 flex items-center justify-center md:justify-start gap-3">
                    <span className="text-amber-200 text-lg font-black bg-white/10 px-3 py-1 rounded-lg">{step.num}</span>
                    {step.title}
                  </h4>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= 5. سكشن الخاتمة ================= */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-20 max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-lg border border-white/20 rounded-[3rem] p-12 md:p-16 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-transparent"></div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            هل أنت جاهز للبدء؟
          </h2>
          
          <p className="text-white/80 text-lg md:text-2xl mb-10 leading-relaxed">
            لا تترك نجاحك للصدفة. احجز استشارتك المجانية الآن، ودعنا نناقش كيف يمكننا تحويل فكرتك التجارية إلى متجر إلكتروني يحقق مبيعات حقيقية.
          </p>

          <a 
            href="https://wa.me/201505388060" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-amber-400 text-[#0B1B3D] font-black py-5 px-12 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(251,191,36,0.4)] text-2xl hover:scale-105"
          >
            تواصل معي الآن عبر واتساب
            <FaWhatsapp className="w-8 h-8" />
          </a>
          
          <p className="mt-8 text-white/50 font-medium">
            أو يمكنك مراسلتنا مباشرة على: 01505388060
          </p>
        </motion.section>

      </div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}