"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MessageCircle, Award, Sparkles, Search, Wrench, 
  TrendingUp, Compass, Key, ListOrdered, FileText, 
  Link2, Globe, ShieldCheck, Target, Clock, Cpu, CheckCircle2,
  BarChart3, Settings2
} from "lucide-react";

export default function CompleteSEOCompanySharjahPage() {
  const whatsappNumber = "00201505388060";
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدمات تحسين محركات البحث في الشارقة.");
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const howWeHelpCards = [
    { title: "فحص وتقييم الموقع", description: "إجراء تدقيق شامل وتقييم دقيق لكل زوايا موقعك الإلكتروني لضمان جاهزيته التقنية.", icon: Search },
    { title: "معالجة الثغرات والأخطاء", description: "اكتشاف شركة سيو في الشارقة الأخطاء البرمجية والثغرات المؤثرة على الأداء ومعالجتها جذرياً.", icon: Wrench },
    { title: "دراسة وتحليل المنافسين", description: "رصد تحركات المنافسين في السوق وتحديد نقاط القوة والضعف لديهم.", icon: TrendingUp },
    { title: "صياغة استراتيجيات السوق", description: "وضع خطط تسويقية مرنة ومدروسة للتعامل مع متغيرات وتحديات السوق.", icon: Compass },
    { title: "تحديد الكلمات المستهدفة", description: "اختيار واستهداف الكلمات الدلالية الأكثر بحثاً وفعالية لتحقيق أعلى عائد.", icon: Key },
    { title: "تحليل كلمات المنافسين", description: "بناء قائمة دقيقة تشتمل على الكلمات المفتاحية الناجحة التي يعتمد عليها منافسوك.", icon: ListOrdered },
    { title: "إعداد محتوى احترافي", description: "صياغة ونشر محتوى حصري، هادف، ومحسن خصيصاً للكلمات المفتاحية المستهدفة.", icon: FileText },
    { title: "هندسة الروابط (داخلية وخارجية)", description: "تنفيذ استراتيجية ربط داخلي وخارجي قوية لتعزيز سلطة وموثوقية موقعك لدى محركات البحث.", icon: Link2 },
  ];

  const advantagesCards = [
    { title: "خبرة محلية وعالمية عميقة", description: "فهم دقيق لسلوك المستهلك الإماراتي وخوارزميات محركات البحث العالمية.", icon: Target },
    { title: "حلول تقنية وبرمجية دقيقة", description: "تنظيف وهندسة الأكواد لضمان سرعة فائقة وتوافق تام مع الأرشيف الرقمي.", icon: Cpu },
    { title: "شفافية مطلقة وتقارير دورية", description: "متابعة حية لنتائج التقدم ونمو الزوار عبر أرقام وإحصائيات حقيقية.", icon: ShieldCheck },
    { title: "التزام كامل بالمواعيد والنتائج", description: "تنفيذ استراتيجيات مدروسة تضمن تحقيق قفزات نوعية في الترتيب بوقت قياسي.", icon: Clock },
  ];

  // كروت كيف يعمل السيو
  const howSeoWorksCards = [
    { step: "01", title: "اختيار الكلمات المفتاحية", description: "تحديد العبارات الدقيقة التي يبحث عنها عميلك المستهدف بدقة لدمجها استراتيجياً.", icon: Key },
    { step: "02", title: "تحسين المحتوى (On-Page)", description: "صياغة نصوص تفاعلية وإضافة روابط داخلية تقدم قيمة حقيقية للزائر.", icon: FileText },
    { step: "03", title: "التحسين التقني (Technical)", description: "رفع سرعة التحميل وتأمين بنية الموقع ليتوافق تماماً مع معايير محركات البحث.", icon: Settings2 },
    { step: "04", title: "بناء الروابط (Off-Page)", description: "استقطاب إشارات وخلفيات ربط موثوقة لرفع موثوقية موقعك لدى جوجل.", icon: Link2 },
    { step: "05", title: "التتبع والتحليل المستمر", description: "مراقبة مؤشرات النمو والأداء دورياً وتحديث الخطط لضمان التفوق الدائم.", icon: BarChart3 },
  ];

  if (!mounted) return null;

  return (
    <main className="w-full min-h-screen bg-[#040D1A] text-white overflow-x-hidden">
      
      {/* 1. قسم الهيرو */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden px-4 md:px-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="relative w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <Image 
              src="/seocompanysharjah.webp" 
              alt="شركة سيو في الشارقة - يونيك" 
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={true}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D]/80 via-[#071329]/70 to-[#040D1A]/90 z-10" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-20 text-center flex flex-col items-center">
          <span className="inline-block bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 text-xs sm:text-sm font-bold py-1.5 px-5 rounded-full mb-6 backdrop-blur-md shadow-lg">
            ريادة الحلول الرقمية في إمارة الشارقة
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl">
            شركة سيو في الشارقة
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            انطلق بنشاطك التجاري في الشارقة نحو صدارة نتائج البحث المحلية والعالمية. نساعدك في شركة سيو في الشارقة على تحقيق هيمنة رقمية ومضاعفة مبيعاتك عبر استراتيجيات سيو مدروسة ومخصصة لعملك مع يونيك.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3.5 bg-green-600 hover:bg-green-500 text-white font-black py-4 px-9 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(22,163,74,0.5)] hover:scale-105 text-base sm:text-lg"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>تواصل عبر واتساب</span>
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          </a>
        </div>
      </section>

      {/* 2. قسم: ما هي أفضل شركة سيو في الشارقة؟ */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-yellow-500/20" id="best-seo-sharjah">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div 
            className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#0F2248] via-[#0B1B3D] to-[#071329] overflow-hidden shadow-2xl"
            style={{ border: '1px solid rgba(234, 179, 8, 0.4)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_15px_#facc15]" />
            <div className="flex flex-col items-center text-center mb-8">
              <span className="inline-flex items-center gap-2 text-yellow-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/30 mb-4 shadow-md">
                <Award className="w-4 h-4 text-yellow-400" /> الريادة في تحسين محركات البحث
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                ما هي أفضل شركة سيو في الشارقة؟
              </h2>
            </div>
            <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed text-center sm:text-right">
              <p>ازدهار نشاطك التجاري وتحقيق أهدافك الرقمية في وقت قياسي لا يأتي بمحض الصدفة، بل يتطلب الاعتماد على عقول متمرسة وخبرات حقيقية تقودك بخطى ثابتة نحو قمة النتائج.</p>
              <p>في ظل الزحام الهائل للمواقع الإلكترونية بالسوق الإماراتي عامة، وإمارة الشارقة خاصة، تصبح المنافسة شرسة؛ وهنا يبرز دور  شركة سيو في الشارقة الحاسم لتحسين ترتيب موقعك في جوجل ليكون بوابتك الذهبية لاكتساب ثقة الجمهور المستهدف وتحويل الزوار إلى عملاء دائمين.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-yellow-500/20 flex items-center justify-between text-xs text-yellow-400/80 font-bold">
              <span><Sparkles className="w-4 h-4 inline" /> نتائج احترافية مضمونة</span>
              <span>يونيك &bull; Unique WS ✓</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. قسم: كيف تساعدك أفضل شركة سيو في الشارقة؟ */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-700/30">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-bold tracking-widest uppercase bg-slate-800/60 px-5 py-2 rounded-full border border-slate-700/50 mb-4 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-slate-400" /> منهجية العمل الاحترافية في يونيك
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              كيف تساعدك أفضل شركة سيو بالشارقة؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeHelpCards.map((item, index) => {
              const IconC = item.icon;
              return (
                <motion.div key={index} className="relative group p-8 rounded-3xl bg-[#091428]/95 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 shadow-xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                  <div className="absolute inset-0 rounded-3xl p-[1px] overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  </div>
                  <div className="relative z-10 flex flex-col items-start">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-600/40 flex items-center justify-center text-slate-200 mb-6 group-hover:scale-110 group-hover:border-slate-300 transition-all duration-300 shadow-md">
                      <IconC className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-slate-200 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="relative z-10 mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-bold">
                    <span>يونيك &bull; Unique WS</span>
                    <span>→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. قسم: خدمات تحسين محركات البحث في الشارقة */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] text-white border-t border-slate-700/30">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#0F2248] via-[#0B1B3D] to-[#071329] overflow-hidden shadow-2xl" style={{ border: '1px solid rgba(56, 189, 248, 0.3)' }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_#38bdf8]" />
            <div className="flex flex-col items-center text-center mb-8">
              <span className="inline-flex items-center gap-2 text-sky-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-sky-400/10 px-4 py-1.5 rounded-full border border-sky-400/30 mb-4 shadow-md">
                <Globe className="w-4 h-4 text-sky-400" /> الانتشار والظهور الرقمي
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                خدمات تحسين محركات البحث في الشارقة
              </h2>
            </div>
            <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed text-center sm:text-right">
              <p>حضورك القوي عبر الإنترنت لم يعد رفاهية، بل هو الركيزة الأساسية لتحقيق أهداف عملك وتحويل منصتك الرقمية إلى وجهة موثوقة. عندما يبحث العملاء عن منتج أو خدمة، تكون محركات البحث مثل جوجل، بينغ، وياهو هي محطتهم الأولى للوصول إلى ما يحتاجونه.</p>
              <p>من خلال خدمات شركة سيو في الشارقة، نعمل على صعود موقعك بذكاء إلى صفحة النتائج الأولى، مما يضمن تدفقاً مستمراً للزوار المتمتعين بنية عالية للشراء، ومضاعفة حقيقية في معدلات التحويل لعلامتك التجارية.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-sky-500/20 flex items-center justify-between text-xs text-sky-400/80 font-bold">
              <span><Sparkles className="w-4 h-4 inline" /> هيمنة رقمية متكاملة</span>
              <span>يونيك &bull; Unique WS ✓</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. قسم: شركة سيو الشارقة والموثوقية */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-700/30">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#0F2248] via-[#0B1B3D] to-[#071329] overflow-hidden shadow-2xl" style={{ border: '1px solid rgba(234, 179, 8, 0.3)' }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_15px_#facc15]" />
            <div className="flex flex-col items-center text-center mb-8">
              <span className="inline-flex items-center gap-2 text-yellow-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/30 mb-4 shadow-md">
                <Award className="w-4 h-4 text-yellow-400" /> شركة سيو الشارقة
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                شركة سيو الشارقة الموثوقة
              </h2>
            </div>
            <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed text-center sm:text-right">
              <p>تعد يونيك افضل شركة سيو في الشارقة (Unique WS) شركة السيو الرائدة في الشارقة التي يمكنك الوثوق بها للارتقاء بموقعك الإلكتروني إلى صدارة نتائج محركات البحث، مما يترجم مباشرة إلى زيادة ملموسة في الوعي بعلامتك التجارية ونمو هائل في مبيعاتك.</p>
              <p>نحن في يونيك لا نكتفي بوضع الكلمات المفتاحية؛ بل نقوم بهيكلة الموقع وتحليل المحتوى بعمق لتعزيز ظهوره وجاذبيته للزوار وجعل التنقل سلساً يشجع العملاء على الشراء.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-yellow-500/20 flex items-center justify-between text-xs text-yellow-400/80 font-bold">
              <span><Sparkles className="w-4 h-4 inline" /> شفافية ونزاهة تامة</span>
              <span>يونيك &bull; Unique WS ✓</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. قسم: لماذا تستثمر الشركات في سيو الشارقة؟ */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-slate-700/30">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#0F2248] via-[#0B1B3D] to-[#071329] overflow-hidden shadow-2xl" style={{ border: '1px solid rgba(56, 189, 248, 0.3)' }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]" />
            <div className="flex flex-col items-center text-center mb-8">
              <span className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/30 mb-4 shadow-md">
                <Globe className="w-4 h-4 text-cyan-400" /> الاستثمار الذكي
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                لماذا تستثمر الشركات في سيو الشارقة؟
              </h2>
            </div>
            <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed text-center sm:text-right">
              <p>إذا كنت تتساءل عن سر لجوء كبرى الشركات للاستثمار المكثف في خدمات سيو الشارقة، فالإجابة تكمن في رغبتهم بمضاعفة أرقام المبيعات وبناء حضور رقمي راقٍ وموثوق بين المستخدمين.</p>
              <p>الاستعانة بخبراء يونيك (Unique WS) تمنحك شركة سيو في الشارقة الأفضلية المطلقة عبر هندسة المحتوى، وتطوير وتصميم الواجهات، وتنظيم الأكواد لضمان تدفق الزوار وتحويلهم إلى عملاء دائمين.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-cyan-500/20 flex items-center justify-between text-xs text-cyan-400/80 font-bold">
              <span><Sparkles className="w-4 h-4 inline" /> رؤية استراتيجية واعدة</span>
              <span>يونيك &bull; Unique WS ✓</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. قسم: مميزات أفضل شركات سيو في الشارقة */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#040D1A] border-t border-slate-700/30">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-emerald-400/10 px-5 py-2 rounded-full border border-emerald-400/30 mb-4 shadow-lg backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> معايير التفوق والتميز
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              مميزات أفضل شركات سيو في الشارقة
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              تعرف على أبرز الخصائص والركائز التي تجعل اختيارك لشركة يونيك هو القرار الأمثل لنمو نشاطك التجاري.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantagesCards.map((item, index) => {
              const IconC = item.icon;
              return (
                <motion.div key={index} className="relative group p-8 rounded-3xl bg-[#091428]/95 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 shadow-xl border border-emerald-500/15 hover:border-emerald-500/40" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                  <div className="relative z-10 flex flex-col items-start">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-950/85 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                      <IconC className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="relative z-10 mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-emerald-400/80 font-bold">
                    <span>يونيك &bull; Unique WS</span>
                    <span>✓</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. قسم: كيف يعمل السيو؟ (الجديد - كروت المراحل الخمس) */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-slate-700/30">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-indigo-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-indigo-400/10 px-5 py-2 rounded-full border border-indigo-400/30 mb-4 shadow-lg backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-indigo-400" /> الآلية والخطوات التنفيذية
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              كيف يعمل السيو؟
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              يعتمد السيو داخل شركة سيو في الشارقة على منظومة متكاملة من المعايير التي تدرسها محركات البحث بدقة لتحديد ترتيب موقعك وتوجيه العملاء المهتمين إليك.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howSeoWorksCards.map((item, index) => {
              const IconC = item.icon;
              return (
                <motion.div key={index} className="relative group p-8 rounded-3xl bg-[#091428]/95 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 shadow-xl border border-indigo-500/15 hover:border-indigo-500/40" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                  <div className="absolute top-4 left-6 text-2xl font-black text-indigo-500/20 group-hover:text-indigo-400/40 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10 flex flex-col items-start pt-2">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-950/85 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                      <IconC className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="relative z-10 mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-indigo-400/80 font-bold">
                    <span>يونيك &bull; Unique WS</span>
                    <span>خطوة أساسية ✓</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}