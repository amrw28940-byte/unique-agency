"use client";

import React, { useEffect, useRef, useState } from "react";

export default function WebDesignSaudiPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const codes = "01{}/><WordPress Next.js PHP React Tailwind CSS REST API Headless CMS div className";
    const characters = codes.split(" ");
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    
    const drops: number[] = Array.from({ length: columns }).map(() => Math.floor(Math.random() * -100));
    const speeds: number[] = Array.from({ length: columns }).map(() => 0.4 + Math.random() * 0.4);
    const counters: number[] = Array.from({ length: columns }).map(() => 0);

    const draw = () => {
      ctx.fillStyle = "rgba(11, 27, 61, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#FFD700";
      ctx.shadowColor = "#FFB703";
      ctx.shadowBlur = 12;
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        counters[i] += speeds[i];
        if (counters[i] >= 1) {
          drops[i]++;
          counters[i] = 0;
        }

        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = Math.floor(Math.random() * -20);
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const servicesData = [
    { title: "تصميم موقع الكتروني", desc: "بوابة رقمية أنيقة تعكس هويتك.", icon: "🌐" },
    { title: "برمجة التطبيقات", desc: "تطبيقات ذكية تلبي احتياجاتك.", icon: "📱" },
    { title: "هوية بصرية متكاملة", desc: "بصمة لا تُنسى تعبر عن قيمك.", icon: "✨" },
    { title: "تصميم شعار احترافي", desc: "وجه علامتك التجارية الفريد.", icon: "🎨" },
    { title: "متجر الكتروني", desc: "حوّل زوارك إلى عملاء دائمين.", icon: "🛒" },
    { title: "إدارة حسابات التواصل", desc: "نتواصل بفعالية مع جمهورك.", icon: "💬" },
    { title: "التسويق الالكتروني", desc: "نصل بك إلى جمهورك المستهدف.", icon: "📈" },
    { title: "تحسين محركات البحث", desc: "صدارة نتائج البحث لزيادة الزيارات.", icon: "🔍" },
    { title: "حملات رقمية مدفوعة", desc: "نتائج سريعة ومضمونة.", icon: "⚡" },
    { title: "حجز دومين واستضافة", desc: "الأساس المتين لموقعك.", icon: "🛡️" }
  ];

  const citiesData = [
    { title: "تصميم مواقع بحفر الباطن", desc: "نصل في شركة تصميم مواقع الكترونية في السعودية بنشاطك التجاري في حفر الباطن نحو آفاق رقمية جديدة." },
    { title: "تصميم مواقع في الباحة", desc: "حلول ويب مبتكرة ومصممة خصيصاً للشركات في منطقة الباحة." },
    { title: "تصميم مواقع بالمجمعة", desc: "نعزز تواجدك الرقمي والخدمي بمدينة المجمعة بأعلى معايير الجودة." },
    { title: "تصميم مواقع في سكاكا", desc: "نبني لك حضوراً استثنائياً ومؤثراً لشركتك في سكاكا ومنطقة الجوف." }
  ];

  const sectorsData = [
    { title: "الشركات والمؤسسات", desc: "موقع رسمي يعرض الخدمات، الثقة، وسابقة الأعمال بوضوح." },
    { title: "المتاجر الإلكترونية", desc: "عرض منتجات، سلة، دفع، وربط واتساب لتسهيل الطلب." },
    { title: "العيادات والمراكز الطبية", desc: "خدمات، أطباء، مواعيد، وطرق تواصل واضحة للمرضى." },
    { title: "المطاعم والكافيهات", desc: "منيو، فروع، عروض، وروابط طلب من التطبيقات أو واتساب." },
    { title: "المقاولات", desc: "مشاريع، مخططات، صور أعمال، ونموذج طلب عرض سعر." },
    { title: "التعليم والمعاهد", desc: "دورات، برامج، تسجيل، وصف واضح لكل خدمة تعليمية." },
    { title: "الجمعيات الخيرية", desc: "تعريف بالمبادرات، التبرعات، التقارير، وقنوات التواصل." },
    { title: "شركات العقارات", desc: "عرض العقارات، المشاريع، الصور، وطلبات التواصل والاستفسار." },
    { title: "المحاماة والاستشارات", desc: "خدمات قانونية، ملفات خبرة، وطلب استشارة بشكل مباشر." },
    { title: "الصيانة والخدمات", desc: "طلبات خدمة، مناطق التغطية، أسعار تقريبية، وتواصل سريع." },
    { title: "مواقع ووردبريس", desc: "تطوير سرعة، أمان، صفحات، إضافات، وتجربة استخدام احترافية." },
    { title: "النقل والسياحة", desc: "رحلات، حجوزات، عروض، وفروع أو نقاط انطلاق واضحة." }
  ];

  const uniqueBenefits = [
    {
      num: "01",
      title: "حلول تقنية بمعايير عالمية",
      desc: "في يونيك نعتمد على أحدث التقنيات ولغات البرمجة العالمية لبناء مواقع إلكترونية سريعة، آمنة، وقابلة للتطوير. هدفنا إنك تحصل على موقع احترافي يجمع بين الأداء العالي والتجربة المميزة، لذلك يعتبرنا كثير من عملائنا من أفضل الخيارات إذا كانوا يبحثون عن افضل شركة تصميم مواقع الكترونية في السعودية."
    },
    {
      num: "02",
      title: "دعم فني وصيانة مستمرة",
      desc: "نجاح مشروعك ما يوقف بعد إطلاق الموقع، لذلك توفر لك شركة تصميم مواقع الكترونية في السعودية دعم فني مستمر وخدمات صيانة دورية تضمن استقرار الموقع، وسرعة معالجة أي ملاحظات أو تحديثات، حتى يبقى موقعك أو متجرك الإلكتروني بأفضل أداء طوال الوقت."
    },
    {
      num: "03",
      title: "مواقع جاهزة للنمو والتوسع",
      desc: "نبني مواقع إلكترونية مرنة تواكب تطور أعمالك، بحيث تقدر تضيف خدمات أو أقسام جديدة بسهولة بدون الحاجة لإعادة بناء الموقع من البدايه، وهذا يضمن استثمار طويل الأمد يدعم نمو مشروعك."
    },
    {
      num: "04",
      title: "تصميم يعكس هوية علامتك التجارية",
      desc: "كل مشروع عندنا له هويته الخاصة، لذلك نصمم موقعك بما يتناسب مع نشاطك التجاري وجمهورك المستهدف، مع التركيز على تجربة المستخدم وسهولة الاستخدام، حتى يطلع الموقع بشكل احترافي يميز علامتك عن المنافسين."
    },
    {
      num: "05",
      title: "مواقع متوافقة مع محركات البحث (SEO)",
      desc: "من أول خطوة في التصميم نراعي أفضل ممارسات تحسين محركات البحث، سواء من ناحية سرعة الموقع أو الهيكلة أو تجربة المستخدم، حتى يكون موقعك جاهز للمنافسة وتحقيق ظهور أفضل في نتائج البحث وجذب عملاء أكثر."
    },
    {
      num: "06",
      title: "تنفيذ مختلف المشاريع الرقمية",
      desc: "مهما كانت فكرة مشروعك، فريق يونيك يقدر يحولها إلى واقع. سواء كنت تحتاج موقع شركة، متجر إلكتروني، منصة تعليمية، أو تطبيق ويب مخصص، نقدم لك حلول تقنية متكاملة تناسب احتياجات نشاطك وتساعدك على تحقيق أهدافك بثقة."
    }
  ];

  const whyChooseUsIrisStyle = [
    { title: "الفرادة والتميز", desc: "نوفر لك في يونيك الحصول على تصميم موقع الكتروني فريد، يعبر عن علامتك التجارية ويجعلها أكثر تميزًا بين منافسيها." },
    { title: "السرعة والاستقرار", desc: "نعمل في يونيك على استضافة المواقع الإلكترونية على أسرع سيرفرات الاستضافة العالمية، مما يضمن لك الحصول على موقع إلكتروني يتسم بالسرعة والاستقرار." },
    { title: "تجربة استخدام مثالية", desc: "نعمل في يونيك على تصميم مواقع إلكترونية توفر لمستخدميها تجربة استخدام مثالية، تمكنهم من استخدام الموقع والتنقل بين أقسامه المتنوعة بسهولة وسرعة عالية." },
    { title: "الظهور الاحترافي", desc: "عبر تصميم احترافي ومحتوى مُعد بدقة للتسويق لعلامتك التجارية، وإظهارها في أفضل صورة، نمكنك في يونيك من إظهار علامتك التجارية بأكثر الصور احترافية." },
    { title: "إبراز الخدمات", desc: "نعمل في يشركة تصميم مواقع الكترونية في السعودية على إنشاء تصميم موقع احترافي يبرز ما تقدمه علامتك التجارية من خدمات، ويحفز مستخدمي الموقع من اتخاذ الإجراء المستهدف." },
    { title: "حلول تصميم متنوعة", desc: "نوفر لك في يونيك عدة خيارات لتصميم وبرمجة مواقع الويب، يمكنك الاختيار من بينها ما يتناسب مع احتياجات عملك." },
    { title: "تعزيز التواصل", desc: "نحرص في يونيك على تضمين كافة الأزرار والإجراءات، التي تحفز عملائك على اتخاذ قرار الشراء أو التواصل معك." },
    { title: "باقات تناسب ميزانيتك", desc: "نوفر في يشركة تصميم مواقع الكترونية في السعودية عدة باقات لتصميم مواقع الويب، يمكنك الاختيار من بينها ما يتناسب مع ميزانيتك التسويقية وأيضًا احتياجات عملك." },
    { title: "خدمة دعم فني", desc: "نقدم لك في يونيك خدمة دعم فني على مدار الساعة لمساعدتك في معالجة أية مشكلة قد تواجهها عند استخدام الموقع." }
  ];

  const faqData = [
    { q: "ما هي التقنيات المستخدمة في بناء المواقع لدى يونيك؟", a: "نعتمد على دمج قوة وتقنيات Next.js و WordPress وهندسة Headless لضمان سرعة فائقة وتحكم مرن." },
    { q: "هل المواقع متوافقة مع محركات البحث SEO؟", a: "نعم، نبني الهيكل البرمجي والسرعة متوافقة 100% مع معايير محركات البحث العالمية من اليوم الأول." },
    { q: "هل تقدمون خدمات الدعم الفني بعد إطلاق الموقع؟", a: "نعم، نوفر صيانة ودعم فني مستمر على مدار الساعة لضمان استقرار وأمان موقعك." }
  ];

  return (
    <div className="min-h-screen bg-[#0B1B3D] text-white overflow-x-hidden font-sans" dir="rtl">
      
      {/* 1. السكشن الأول: الهيرو */}
      <section className="relative px-6 py-28 lg:py-40 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0B1B3D]">
        <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-[#0B1B3D]/75 backdrop-blur-[0.5px] z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-block px-5 py-2 rounded-full bg-[#FFB703] text-[#0B1B3D] text-sm font-black mb-6 shadow-2xl">
            هندسة الويب وتجربة المستخدم
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight text-white drop-shadow-xl">
            شركة تصميم مواقع الكترونية في السعودية
          </h1>
          
          <p className="text-xl md:text-2xl font-bold mb-10 text-white/95 max-w-3xl leading-relaxed">
            نبني لك منصات رقمية استثنائية عبر التقنيات الأقوى (WordPress & Next.js) لتجمع بين مرونة الإدارة والأداء الفائق، وتضع علامتك التجارية في صدارة المشهد الرقمي بالسوق السعودي.
          </p>

          <a 
            href="https://wa.me/201505388060"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFB703] text-[#0B1B3D] px-9 py-4 rounded-2xl font-black text-xl flex items-center gap-3 shadow-[0_15px_40px_rgba(255,183,3,0.3)] hover:scale-105 transition-transform duration-300"
          >
            <span>تواصل معنا عبر واتساب لبدء مشروعك</span>
          </a>
        </div>
      </section>

      {/* 2. سكشن خدمات يونيك (جدول رقمي مميز) */}
      <section className="relative px-6 py-28 bg-gradient-to-b from-[#0B1B3D] via-[#102a5c] to-[#0B1B3D] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold mb-4">
              خدمات يونيك
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-wide">
              نقدم حلولاً رقمية متكاملة ومبتكرة
            </h2>
            <p className="text-white/80 font-medium text-lg">
              لمساعدتك على تحقيق أهدافك والتميز في عالم الإنترنت، بصفتنا أفضل شركة تصميم مواقع الكترونية في السعودية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((s, idx) => (
              <div key={idx} className="bg-[#122854]/75 border border-[#FFB703]/20 hover:border-[#FFB703] p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-black mb-2 text-[#FFB703] group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-white/80 text-sm md:text-base font-medium">{s.desc}</p>
                </div>
                <span className="mt-6 text-xs font-bold text-[#FFB703] underline underline-offset-4 cursor-pointer">عرض التفاصيل</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. سكشن المدن السعودية (حفر الباطن، الباحة، المجمعة، سكاكا) */}
      <section className="relative px-6 py-24 bg-[#0B1B3D] border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">نخدم جميع القطاعات والمدن داخل السعودية</h2>
          <p className="text-white/80">تواجدي واسع واحترافي يغطي كافة مناطق المملكة بدقة عالية.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {citiesData.map((c, idx) => (
            <div key={idx} className="bg-[#122c5e]/50 border border-[#FFB703]/20 p-6 rounded-2xl text-right">
              <h3 className="text-lg font-black text-[#FFB703] mb-2">{c.title}</h3>
              <p className="text-white/80 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. سكشن القطاعات */}
      <section className="relative px-6 py-28 bg-gradient-to-b from-[#0B1B3D] via-[#102a5c] to-[#0B1B3D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">مواقع مصممة حسب طبيعة نشاطك وليس قالبًا واحدًا للجميع</h2>
            <p className="text-white/85 text-base md:text-lg font-medium">
              في يونيك لا نتعامل مع الموقع كصفحة شكلية؛ ندرس نوع نشاطك، طريقة طلب العميل، وأهم الصفحات التي يحتاجها قبل التنفيذ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
            <div className="p-4 rounded-xl bg-[#0B1B3D]/60 border border-[#FFB703]/30"><span className="text-[#FFB703] font-black">01</span> هيكلة حسب النشاط</div>
            <div className="p-4 rounded-xl bg-[#0B1B3D]/60 border border-[#FFB703]/30"><span className="text-[#FFB703] font-black">02</span> صفحات تخدم العميل</div>
            <div className="p-4 rounded-xl bg-[#0B1B3D]/60 border border-[#FFB703]/30"><span className="text-[#FFB703] font-black">03</span> جاهزية للبحث وواتساب</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorsData.map((sec, idx) => (
              <div key={idx} className="bg-[#122854]/60 border border-white/10 p-6 rounded-2xl hover:border-[#FFB703] transition-colors">
                <h3 className="text-lg font-black text-[#FFB703] mb-2">{sec.title}</h3>
                <p className="text-white/85 text-sm">{sec.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 text-[#FFB703] font-bold">كل قطاع له طريقة عرض مختلفة؛ لذلك نبدأ من هدف الموقع: هل تريد مكالمات؟ طلبات واتساب؟ حجوزات؟ أو مبيعات مباشرة؟</div>
        </div>
      </section>

      {/* 5. سكشن ليش تختار يونيك؟ (6 نقاط) */}
      <section className="relative px-6 py-28 bg-[#0B1B3D] overflow-hidden border-t border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold mb-4">
              ليش تختار يونيك؟
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-wide">
              مميزات تجعلنا خيارك الأول والأمثل
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueBenefits.map((item, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-[#122c5e]/80 to-[#0B1B3D] border border-[#FFB703]/20 hover:border-[#FFB703] p-8 rounded-3xl shadow-lg transition-all duration-500">
                <span className="text-3xl font-black text-[#FFB703] block mb-4">{item.num}</span>
                <h3 className="text-xl font-black mb-4 text-white group-hover:text-[#FFB703] transition-colors">{item.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ما يوفره لك تصميم موقع الكتروني من يونيك */}
      <section className="px-6 py-28 bg-gradient-to-b from-[#0B1B3D] via-[#102a5c] to-[#0B1B3D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">ما يوفره لك تصميم موقع الكتروني من يونيك شركة تصميم مواقع</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsIrisStyle.map((w, idx) => (
              <div key={idx} className="bg-[#122854]/60 border border-[#FFB703]/20 p-6 rounded-2xl">
                <h3 className="text-lg font-black text-[#FFB703] mb-2">{w.title}</h3>
                <p className="text-white/80 text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. سكشن الأسئلة الشائعة */}
      <section className="px-6 py-28 bg-[#0B1B3D] border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">الأسئلة الشائعة</h2>
          </div>
          <div className="space-y-4">
            {faqData.map((f, idx) => (
              <div key={idx} className="bg-[#122854]/60 border border-[#FFB703]/20 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-6 text-right font-black flex justify-between items-center text-[#FFB703]">
                  <span>{f.q}</span>
                  <span>{openFaq === idx ? "-" : "+"}</span>
                </button>
                {openFaq === idx && <div className="p-6 pt-0 text-white/80 text-sm md:text-base">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}