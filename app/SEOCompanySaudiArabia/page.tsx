"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function SEOCompanySaudiArabiaPage() {
  const cardsData = [
    {
      title: "منهجية النمو المعتمدة على البيانات",
      desc: "نعتمد في شركة سيو في السعودية على تحليل بيانات السوق وسلوك العملاء لتطوير استراتيجيات SEO ترتبط بشكل مباشر بمنتجاتك وخدماتك، بحيث لا تقتصر النتائج على زيادة الزيارات فقط، بل تمتد إلى رفع معدلات التحويل وتحقيق أهدافك التجارية الفعلية.",
      icon: "📊"
    },
    {
      title: "تعزيز الهيمنة على السوق",
      desc: "هدفنا لا يقتصر على تحسين ترتيب موقعك في نتائج البحث، بل نسعى إلى ترسيخ حضور علامتك التجارية في السوق، وزيادة ظهورها أمام الجمهور المستهدف، وبناء ميزة تنافسية تجعلها الخيار الأول في مجالها.",
      icon: "👑"
    },
    {
      title: "بناء منظومة رقمية قوية",
      desc: "نقوم في شركة سيو في السعودية بتطوير أصول رقمية مترابطة تشمل الموقع والمحتوى واستراتيجية الكلمات المفتاحية، لتعمل معًا كمنظومة متكاملة تدعم النمو المستمر وتمنح نشاطك التجاري قدرة أكبر على التوسع ومواجهة تغيرات السوق.",
      icon: "🌐"
    },
    {
      title: "اكتشاف الفرص غير المستغلة",
      desc: "نبحث باستمرار عن الفرص الجديدة داخل السوق، ونحلل فجوات المنافسين واحتياجات الجمهور، مما يساعدك على الوصول إلى شرائح جديدة وتحقيق انتشار أوسع باستخدام استراتيجيات فعّالة لاختراق السوق.",
      icon: "🔍"
    },
    {
      title: "فريق من الخبراء المتخصصين",
      desc: "في يونيك يعمل على مشروعك فريق من المتخصصين ذوي الخبرة العملية في تحسين محركات البحث وتصميم المواقع وتجربة المستخدم. نحن نؤمن بأن نجاح العميل يبدأ من العمل مع خبراء حقيقيين يمتلكون المعرفة والقدرة على تنفيذ الاستراتيجيات باحترافية.",
      icon: "👥"
    },
    {
      title: "قوة تقنية وأرشفة عالية الجودة",
      desc: "نحرص في شركة سيو في السعودية على بناء هيكل تقني متكامل لموقعك يشمل السرعة العالية، وتقليل الأكواد والعناصر غير الضرورية، وتحسين جودة الأرشفة، مما يساعد محركات البحث على فهم موقعك بسهولة ويمنح الزوار تجربة استخدام سلسة ومميزة.",
      icon: "⚡"
    },
    {
      title: "شريكك لتحقيق النمو الرقمي",
      desc: "بفضل خبرتنا الواسعة كـ شركة سيو في السعودية، نعمل على تحويل موقعك الإلكتروني إلى أداة فعّالة لجذب العملاء وزيادة المبيعات وبناء حضور رقمي قوي يواكب طموحات علامتك التجارية.",
      icon: "🚀"
    }
  ];

  const servicesData = [
    {
      id: "01",
      title: "خدمات السيو التقني (Technical SEO)",
      desc: "نعمل على تحسين البنية التقنية لموقعك لضمان سرعة الأداء، وسهولة الزحف والأرشفة، ومعالجة جميع المشكلات التقنية التي تؤثر على ترتيب الموقع. كما نقدم خدمات نقل المواقع (Website Migration) مع الحفاظ على قوة الموقع وترتيبه في نتائج البحث.",
      icon: "⚙️"
    },
    {
      id: "02",
      title: "خدمات تحسين الصفحات الداخلية (On-Page SEO)",
      desc: "نطور جميع عناصر صفحات موقعك بما يشمل الكلمات المفتاحية، والعناوين، والوصف التعريفي، والروابط الداخلية، وهيكلة المحتوى، مع تطبيق أحدث استراتيجيات Keyword Mapping وContent Clusters لتحسين فرص التصدر.",
      icon: "📄"
    },
    {
      id: "03",
      title: "خدمات السيو الخارجي (Off-Page SEO)",
      desc: "نعزز موثوقية موقعك من خلال استراتيجيات فعالة لبناء الروابط الخلفية (Backlinks)، وزيادة سلطة النطاق، وتحسين سمعة العلامة التجارية بما يتوافق مع معايير E-E-A-T التي تعتمد عليها محركات البحث.",
      icon: "🔗"
    },
    {
      id: "04",
      title: "خدمات النمو العضوي والتوسع",
      desc: "تساعد شركة سيو في السعودية نشاطك التجاري على الوصول إلى أسواق جديدة عبر استراتيجيات السيو المحلي، والسيو الوطني، والسيو الدولي، بالإضافة إلى تحسين المواقع متعددة اللغات لاستهداف جماهير مختلفة بكفاءة.",
      icon: "📈"
    },
    {
      id: "05",
      title: "استراتيجيات SEO متقدمة",
      desc: "نوظف أحدث تقنيات تحسين محركات البحث مثل Programmatic SEO، والأتمتة الذكية، وبناء استراتيجيات طويلة الأمد تضمن استمرار نمو موقعك وتحقيق أفضل النتائج.",
      icon: "💡"
    },
    {
      id: "06",
      title: "تحليل المنافسين واكتشاف فرص النمو",
      desc: "نجري تحليلاً شاملاً للمنافسين لتحديد نقاط القوة والضعف، واكتشاف الفرص التي تمنح علامتك التجارية ميزة تنافسية في الأسواق المستهدفة.",
      icon: "🎯"
    },
    {
      id: "07",
      title: "بناء روابط احترافية عالية الجودة",
      desc: "ننفذ حملات بناء روابط تعتمد على الجودة والموثوقية، مما يعزز ظهور موقعك، ويرفع مستوى الثقة لدى محركات البحث، ويزيد من قوة علامتك التجارية.",
      icon: "🏆"
    },
    {
      id: "08",
      title: "تصميم هيكل موقع احترافي",
      desc: "نقوم ببناء هيكل معلومات منظم يسهل على المستخدمين ومحركات البحث الوصول إلى المحتوى، مع تحسين تجربة المستخدم ورفع كفاءة الزحف والأرشفة.",
      icon: "🏗️"
    },
    {
      id: "09",
      title: "تهيئة المواقع لمحركات البحث المعتمدة على الذكاء الاصطناعي",
      desc: "نساعد موقعك على مواكبة مستقبل البحث من خلال تحسين المحتوى والبنية التقنية بما يتوافق مع محركات البحث المدعومة الذكاء الاصطناعي وتجارب البحث الحديثة.",
      icon: "🤖"
    },
    {
      id: "10",
      title: "إدارة السمعة الرقمية (Brand Reputation)",
      desc: "نعمل على بناء صورة رقمية قوية لعلامتك التجارية من خلال إنشاء محتوى احترافي، وتعزيز الإشارات الإيجابية، وزيادة ثقة العملاء في خدماتك ومنتجاتك.",
      icon: "🌟"
    },
    {
      id: "11",
      title: "استراتيجيات SEO مخصصة للأسواق المحلية",
      desc: "نطور خططًا تناسب طبيعة كل سوق، مع مراعاة الثقافة المحلية وسلوك الجمهور والكلمات المفتاحية الأكثر تأثيرًا، لتحقيق أفضل النتائج في الأسواق العربية والخليجية.",
      icon: "🌍"
    },
    {
      id: "12",
      title: "تطبيق السيو الدلالي (Semantic SEO)",
      desc: "نبني منظومة محتوى مترابطة تعتمد على Topic Clusters لتعزيز السلطة الموضوعية (Topical Authority)، وتحسين فهم محركات البحث لتخصص موقعك، مما يزيد من فرص تصدر عدد أكبر من الكلمات المفتاحية.",
      icon: "📚"
    },
    {
      id: "13",
      title: "خدمات SEO للشركات (B2B SEO)",
      desc: "نقدم حلولًا متخصصة للشركات التي تستهدف قطاع الأعمال (B2B)، مع استراتيجيات تناسب دورات البيع الطويلة وتساعد على جذب العملاء المحتملين ذوي الجودة العالية.",
      icon: "💼"
    },
    {
      id: "14",
      title: "استشارات تحسين محركات البحث",
      desc: "توفر شركة سيو في السعودية خبراؤنا استشارات احترافية وتحليلات دقيقة لموقعك، مع وضع خطة عمل واضحة تساعدك على تحقيق أهدافك الرقمية وتحسين نتائجك في محركات البحث.",
      icon: "🗣️"
    },
    {
      id: "15",
      title: "خدمات SEO للمتاجر الإلكترونية",
      desc: "نساعد المتاجر الإلكترونية على زيادة الزيارات والمبيعات من خلال تحسين صفحات المنتجات، والفئات، وتجربة المستخدم، بما يضمن تصدر نتائج البحث التقليدية ومحركات البحث المدعومة بالذكاء الاصطناعي.",
      icon: "🛒"
    }
  ];

  const comparisonTable = [
    {
      feature: "منهجية العمل",
      traditional: "خطط عشوائية وثابتة لا تتغير",
      unique: "استراتيجيات مخصصة ومبنية على تحليل البيانات"
    },
    {
      feature: "السرعة والأداء التقني",
      traditional: "إهمال الجوانب التقنية العميقة",
      unique: "تهيئة تقنية شاملة وسرعة فائقة للأرشفة"
    },
    {
      feature: "نوعية الكلمات المفتاحية",
      traditional: "استهداف كلمات غير مربحة أو عالية المنافسة بلا جدوى",
      unique: "استهداف كلمات ذات نية شراء فعلية وعالية التحويل"
    },
    {
      feature: "بناء الروابط الخلفية",
      traditional: "روابط ضعيفة ومضرّة (Spam Backlinks)",
      unique: "روابط موثوقة وعالية الجودة متوافقة مع معايير E-E-A-T"
    },
    {
      feature: "التقارير والمتابعة",
      traditional: "تقارير مبهمة لا توضح العائد على الاستثمار",
      unique: "تقارير دورية شفافة وقابلة للقياس والتحليل"
    }
  ];

  const faqData = [
    {
      q: "ما هو الوقت المتوقع لظهور نتائج تحسين محركات البحث (SEO)؟",
      a: "تختلف المدة بناءً على قوة المنافسة في السوق وحالة الموقع الحالية، وعادة ما تبدأ النتائج الحقيقية والنمو العضوي في الظهور خلال فترة تتراوح بين 3 إلى 6 أشهر من بدء تنفيذ الاستراتيجية بدقة."
    },
    {
      q: "لماذا أحتاج إلى افضل شركة سيو متخصصة في السوق السعودي والسوق الخليجي؟",
      a: "لكل سوق ثقافته الخاصة وسلوك مستخدمين مغاير في البحث؛ لذا نضمن في يونيك صياغة كلمات مفتاحية وخطط محتوى تستهدف الجمهور المحلي بدقة متناهية وترفع نسب تحويل الزوار إلى عملاء فعليين."
    },
    {
      q: "هل يتم تعديل هيكل الموقع وبرمجته ضمن خدمة الـ SEO؟",
      a: "نعم، يشمل السيو التقني الذي نقدمه تحسين الأكواد، وسرعة الاستجابة، وتجربة المستخدم، وهيكلة المعلومات بما يسهل على عناكب محركات البحث فهم موقعك وأرشفته بأعلى كفاءة."
    },
    {
      q: "كيف يمكنني بدء العمل وطلب الخدمة من شركة يونيك؟",
      a: "يمكنك بكل سهولة ملء نموذج الطلب التفاعلي أدناه أو التواصل المباشر معنا عبر البريد الإلكتروني uniquecompany55@gmail.com أو قنوات الواتساب المتاحة بالصفحة."
    }
  ];

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % servicesData.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [servicesData.length]);

  const currentService = servicesData[activeServiceIndex];

  return (
    <div className="min-h-screen bg-[#0B1B3D] text-white overflow-x-hidden" dir="rtl">
      {/* السكشن الأول */}
      <section className="relative px-6 py-24 lg:py-36 min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0B1B3D]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/SEOCompanySaudiArabia.webp"
            alt="شركة سيو في السعودية"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1B3D]/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-block px-5 py-2 rounded-full bg-[#FFB703] text-[#0B1B3D] text-sm font-black mb-6 shadow-xl">
            الريادة في محركات البحث
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight text-white drop-shadow-lg">
            شركة سيو في السعودية
          </h1>
          
          <p className="text-xl md:text-2xl font-bold mb-10 text-white/95 max-w-3xl leading-relaxed">
            نسير بك نحو القمة ونضع مشروعك في صدارة محركات البحث لاستهداف الجمهور الفعلي في السوق السعودي بكفاءة واحترافية لا تقبل المنافسة.
          </p>

          <a 
            href="https://wa.me/201505388060"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFB703] text-[#0B1B3D] px-9 py-4 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
            </svg>
            <span>احصل على استشارة مجانية عبر واتساب</span>
          </a>
        </div>
      </section>

      {/* السكشن الثاني: من نحن */}
      <section className="relative px-6 py-24 bg-gradient-to-b from-[#0B1B3D] via-[#102a5c] to-[#0B1B3D] overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold mb-4">
            من نحن
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-wide">
            شركة سيو في السعودية
          </h2>
          <div className="bg-[#122854]/60 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md text-right">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium mb-6">
              في يونيك نؤمن أن النجاح الرقمي يبدأ باستراتيجية مدروسة تجمع بين تصميم مواقع الويب الاحترافي وتحسين محركات البحث (SEO). لذلك نعمل على تطوير حلول رقمية متكاملة تساعد الشركات على بناء حضور قوي على الإنترنت، وزيادة الظهور أمام العملاء المستهدفين، وتحقيق نمو مستدام في المبيعات والأعمال.
            </p>
          </div>
        </div>
      </section>

      {/* السكشن الثالث: مزايا استراتيجية (7 كروت) */}
      <section className="relative px-6 py-28 bg-[#0B1B3D] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold mb-4">
              مزايا استراتيجية تضمن لك التفوق مع يونيك
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-wide">
              لماذا تختارنا شريكاً استراتيجياً لنجاحك؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {cardsData.map((card, idx) => (
              <div 
                key={idx}
                className={`group relative bg-gradient-to-br from-[#122c5e]/80 to-[#0B1B3D] border border-[#FFB703]/20 hover:border-[#FFB703] p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between ${
                  idx === 6 ? "lg:col-span-3 max-w-2xl mx-auto w-full" : ""
                }`}
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#FFB703]/10 border border-[#FFB703]/30 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#FFB703] group-hover:text-[#0B1B3D] transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-4 text-[#FFB703] group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed font-medium text-base md:text-lg">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* السكشن الرابع: عارض الخدمات التلقائي لكارت كبير */}
      <section className="relative px-6 py-32 bg-gradient-to-b from-[#0B1B3D] via-[#0d234f] to-[#0B1B3D] overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold mb-4">
              خدمات تحسين محركات البحث في يونيك
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-wide">
              حلول متكاملة لهيمنتك الرقمية
            </h2>
          </div>

          <div className="bg-[#122854]/95 border border-[#FFB703]/50 rounded-[2.5rem] p-10 md:p-20 shadow-[0_30px_80px_rgba(0,0,0,0.8)] backdrop-blur-md relative overflow-hidden transition-all duration-700">
            <div className="flex flex-col justify-between min-h-[440px] text-right" key={currentService.id}>
              <div>
                <div className="flex items-center justify-between mb-10">
                  <div className="w-24 h-24 rounded-3xl bg-[#FFB703]/10 border border-[#FFB703]/40 flex items-center justify-center text-5xl">
                    {currentService.icon}
                  </div>
                  <span className="px-6 py-3 rounded-2xl bg-[#FFB703] text-[#0B1B3D] text-lg font-black">
                    الخدمة {currentService.id} من {servicesData.length}
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-8 text-[#FFB703] leading-snug">
                  {currentService.title}
                </h3>
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium mb-14">
                  {currentService.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* السكشن الخامس (الجدول الاحترافي): مقارنة الأداء لتحسين محركات البحث */}
      <section className="relative px-6 py-28 bg-[#0B1B3D] overflow-hidden border-t border-white/10">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold mb-4">
              لماذا يونيك تتفوق بالمعايير الحقيقية
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
              جدول مقارنة الأداء: الطريقة التقليدية مقابل استراتيجية يونيك
            </h2>
            <p className="text-white/80 font-medium text-lg">نظرة عامة ومقارنة دقيقة توضح الفارق الفعلي لجودة العمل.</p>
          </div>

          <div className="overflow-x-auto bg-[#122854]/60 border border-[#FFB703]/30 rounded-3xl shadow-2xl backdrop-blur-md">
            <table className="w-full text-right border-collapse min-h-[300px]">
              <thead>
                <tr className="border-b border-white/15 bg-[#18346d]/80 text-[#FFB703]">
                  <th className="p-5 font-black text-lg">وجه المقارنة</th>
                  <th className="p-5 font-black text-lg">الشركات / الطرق التقليدية</th>
                  <th className="p-5 font-black text-lg bg-[#FFB703]/10">شركة يونيك (Unique)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-medium text-base">
                {comparisonTable.map((row, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className="p-5 font-bold text-[#FFB703]">{row.feature}</td>
                    <td className="p-5 text-white/75">{row.traditional}</td>
                    <td className="p-5 text-white/95 bg-[#FFB703]/5 font-semibold">{row.unique}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* السكشن السادس: ابدأ استراتيجية هيمنتك الرقمية (طلب خدمة السيو) */}
      <section className="relative px-6 py-28 bg-gradient-to-b from-[#0B1B3D] to-[#0f2754] overflow-hidden border-t border-white/10">
        <div className="max-w-4xl mx-auto relative z-10 text-right">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold mb-4">
              ابدأ استراتيجية هيمنتك الرقمية مع يونيك
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
              اطلب خدمة تحسين محركات البحث (SEO) اليوم
            </h2>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("تم إعداد الطلب وتوجيهه إلى البريد: uniquecompany55@gmail.com");
            }} 
            className="bg-[#122854]/80 border border-[#FFB703]/30 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md space-y-12"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#FFB703] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#FFB703] text-[#0B1B3D] flex items-center justify-center text-sm font-bold">1</span>
                معلومات التواصل
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">اسم العميل *</label>
                  <input type="text" placeholder="أدخل اسمك الكامل" className="w-full bg-[#0B1B3D] border border-white/10 rounded-2xl px-4 py-3 text-white focus:border-[#FFB703] outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">رقم الهاتف *</label>
                  <input type="tel" placeholder="رقم الهاتف مع رمز الدولة" className="w-full bg-[#0B1B3D] border border-white/10 rounded-2xl px-4 py-3 text-white focus:border-[#FFB703] outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">البريد الإلكتروني للعميل *</label>
                  <input type="email" placeholder="أدخل بريدك الإلكتروني الشخصي" className="w-full bg-[#0B1B3D] border border-white/10 rounded-2xl px-4 py-3 text-white focus:border-[#FFB703] outline-none" required />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#FFB703] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#FFB703] text-[#0B1B3D] flex items-center justify-center text-sm font-bold">2</span>
                العناصر والخدمات المطلوبة
              </h3>
              <p className="text-sm text-white/70 mb-6 font-medium">يرجى تحديد ما تحتاجه لمشروعك (يمكنك اختيار أكثر من عنصر):</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["السيو التقني وسرعة الموقع", "تحسين الصفحات الداخلية", "بناء الروابط والخارجي", "صناعة المحتوى التوافقي", "سيو المتاجر الإلكترونية", "السيو المحلي للنشاط"].map((srv, i) => (
                  <label key={i} className="flex items-center gap-3 bg-[#0B1B3D]/60 border border-white/5 hover:border-[#FFB703]/40 p-4 rounded-2xl cursor-pointer transition-all">
                    <input type="checkbox" className="w-5 h-5 accent-[#FFB703] rounded" />
                    <span className="font-bold text-sm text-white/90">{srv}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#FFB703] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#FFB703] text-[#0B1B3D] flex items-center justify-center text-sm font-bold">3</span>
                معلومات أساسية عن النشاط
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">اسم الشركة / المؤسسة *</label>
                  <input type="text" placeholder="اسم شركتك أو مشروعك" className="w-full bg-[#0B1B3D] border border-white/10 rounded-2xl px-4 py-3 text-white focus:border-[#FFB703] outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">نشاط الشركة الدقيق *</label>
                  <input type="text" placeholder="ما الذي تقدمه باختصار؟" className="w-full bg-[#0B1B3D] border border-white/10 rounded-2xl px-4 py-3 text-white focus:border-[#FFB703] outline-none" required />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              <div>
                <span className="block text-sm font-bold mb-2 text-[#FFB703]">إرسال الطلب إلى شركة يونيك عبر:</span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-sm">
                    <input type="radio" name="sendMethod" defaultChecked className="accent-[#FFB703]" /> البريد الإلكتروني (uniquecompany55@gmail.com)
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-sm">
                    <input type="radio" name="sendMethod" className="accent-[#FFB703]" /> واتساب
                  </label>
                </div>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <button type="button" className="flex-1 md:flex-none bg-[#1d3870] hover:bg-white/20 text-white px-6 py-3.5 rounded-2xl font-bold transition-all">
                  معاينة الطلب
                </button>
                <button type="submit" className="flex-1 md:flex-none bg-[#FFB703] text-[#0B1B3D] px-8 py-3.5 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform">
                  إرسال الطلب
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* السكشن السابع والاخير: الأسئلة الشائعة FAQ */}
      <section className="relative px-6 py-28 bg-[#0B1B3D] overflow-hidden border-t border-white/10">
        <div className="max-w-4xl mx-auto relative z-10 text-right">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold mb-4">
              إجابات واضحة لتساؤلاتك
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
              الأسئلة الشائعة (FAQ)
            </h2>
            <p className="text-white/80 font-medium text-lg">كل ما تحتاج لمعرفته حول خدمات تحسين محركات البحث مع يونيك.</p>
          </div>

          <div className="space-y-6">
            {faqData.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#122854]/60 border border-white/10 hover:border-[#FFB703]/40 rounded-3xl p-6 md:p-8 transition-all cursor-pointer backdrop-blur-md"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-black text-[#FFB703]">
                    {item.q}
                  </h3>
                  <span className="text-xl font-bold text-[#FFB703]">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </div>
                {openFaq === idx && (
                  <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed font-medium pt-4 border-t border-white/10 animate-fadeIn">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}