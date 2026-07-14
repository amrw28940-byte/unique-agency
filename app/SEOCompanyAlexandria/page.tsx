import Image from 'next/image';

export default function SEOPageAlexandria() {
  return (
    <div className="w-full bg-slate-950 overflow-x-hidden" dir="rtl">

      {/* ========================================================================= */}
      {/* السكشن الأول: Hero Section (بدون أي تغيير نهائياً كما طلبته بالظبط) */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full transform scale-100 animate-[zoom_25s_infinite_alternate] ease-in-out">
          <Image
            src="/seocompanyalexandria.webp"
            alt="شركة سيو في اسكندرية - SEO Company Alexandria"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 w-full">
          <div className="bg-[#0f172a]/80 backdrop-blur-sm border border-blue-900/40 p-8 md:p-12 rounded-2xl text-center text-black shadow-2xl">
            <span className="inline-block bg-blue-600 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 text-white">
              شريكك الرقمي في عروس البحر المتوسط
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight md:leading-snug mb-6 text-white">
              شركة سيو في اسكندرية <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                تضمن لك صدارة نتائج بحث جوجل
              </span>
            </h1>
            <p className="text-base md:text-lg text-black max-w-2xl mx-auto font-semibold leading-relaxed mb-8">
              نحن لا نصنع مجرد مواقع، بل نهيئ حضورك الرقمي بالكامل ليتصدر منافسيك في الإسكندرية ومصر بأحدث استراتيجيات السيو (SEO).
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 text-sm md:text-base text-white">
                تواصل معنا الآن
              </a>
              <a href="#services" className="px-8 py-3.5 bg-black/10 hover:bg-black/20 border border-black/20 font-bold rounded-lg transition-all text-sm md:text-base text-white">
                رؤية خدماتنا
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* السكشن الثاني: من نحن (About Us) - كما هو بدون تعديل */}
      {/* ========================================================================= */}
      <section id="about" className="relative w-full py-20 lg:py-28 bg-slate-900 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right">
              <div className="inline-flex items-center gap-2.5 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs md:text-sm font-bold text-blue-400">من نحن؟</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                وكالة تصدر محركات البحث الرائدة <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  من قلب الإسكندرية إلى العالم
                </span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                نحن لسنا مجرد شركة خدمات عادية، بل نحن شركاء نجاحك الرقمي. في سوق الإسكندرية المليء بالمنافسة، نبتكر حلول سيو (SEO) مخصصة تضمن انتقال موقعك من الصفحات الخلفية ليتصدر النتيجة الأولى.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">تحليل منافسين شرس</h4>
                    <p className="text-slate-400 text-sm">ندرس منافسيك بدقة لنكشف ثغراتهم ونضعك فوقهم.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-lg">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">سيو محلي (Local SEO)</h4>
                    <p className="text-slate-400 text-sm">نجعل شركتك الخيار الأول لكل باحث داخل الإسكندرية.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative bg-slate-950 border border-slate-800 p-8 rounded-2xl shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs text-slate-500 font-mono">SEOC_ALEX_DASHBOARD</span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end text-sm">
                    <span className="text-green-400 font-bold text-lg">+340%</span>
                    <span className="text-slate-400">متوسط نمو زيارات عملائنا</span>
                  </div>
                  <div className="w-full h-2 bg-slate-850 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-[88%]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-center">
                    <div className="text-2xl md:text-3xl font-black text-blue-400 mb-1">5K+</div>
                    <div className="text-xs text-slate-400">كلمة مفتاحية بالصفحة الأولى</div>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-center">
                    <div className="text-2xl md:text-3xl font-black text-cyan-400 mb-1">98%</div>
                    <div className="text-xs text-slate-400">نسبة رضا وثقة شركائنا</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* السكشن الثالث: أهمية السيو (10 كروت شيك مع بروز وبروز قوي) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">ما هي أهمية السيو لمشروعك الرقمي؟</h2>
          <p className="text-blue-400 font-medium mb-12">تقدم لك <span className="text-cyan-400 font-bold">يونيك</span> أفضل شركة سيو في اسكندرية القوة الكامنة خلف الصدارة العضوية</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "زيادة الزيارات المجانية", d: "الحصول على تدفق ضخم مستمر من الزوار المستهدفين دون دفع سنت واحد للإعلانات." },
              { t: "بناء الثقة والمصداقية", d: "المستخدمون يثقون في النتائج الأولى العضوية لـ جوجل أكثر من الإعلانات المدفوعة بشكل تلقائي." },
              { t: "عائد استثماري خيالي (ROI)", d: "السيو يمنحك أعلى عائد على المدى الطويل مقارنة بجميع قنوات التسويق الرقمي." },
              { t: "استهداف عملاء يبحثون عنك", d: "أنت لا تبحث عن العميل، بل تظهر له في اللحظة التي يحتاج فيها لخدمتك بالظبط." },
              { t: "تحسين تجربة مستخدم موقعك", d: "عمليات السيو التقني تضمن سرعة وسلاسة فائقة للموقع مما يرفع المبيعات والتحويلات." },
              { t: "التفوق الكامل على المنافسين", d: "عندما تحتل المركز الأول، تسحب البساط والحصة السوقية من الشركات المنافسة في مجالك." },
              { t: "الظهور على مدار 24 ساعة", d: "موقعك يعمل كأفضل موظف مبيعات لا ينام، يجلب العملاء ليلاً ونهاراً دون توقف." },
              { t: "أرشفة وبناء حضور مستدام", d: "النتائج التي تحققها اليوم في السيو تستمر معك لسنوات ولا تختفي بانتهاء ميزانية الإعلان." },
              { t: "فهم عميق لسلوك عملائك", d: "من خلال بيانات الكلمات المفتاحية تكتشف ما يبحث عنه جمهورك بدقة شديدة لتطوير منتجاتك." },
              { t: "دعم الوعي بالعلامة التجارية", d: "ظهورك المتكرر في نتائج البحث المختلفة يرسخ اسم شركتك في أذهان العملاء كقائد للمجال." }
            ].map((c, i) => (
              <div key={i} className="group relative bg-slate-900 border-2 border-blue-500/30 p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_20px_40px_rgba(6,182,212,0.25)] flex flex-col justify-between text-right">
                <div className="absolute top-4 left-4 text-6xl font-black text-slate-800/40 select-none group-hover:text-cyan-500/10">{(i+1).toString().padStart(2, '0')}</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{c.t}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{c.d}</p>
                </div>
                <div className="mt-6 text-xs font-semibold text-blue-500/60 group-hover:text-cyan-400">يونيك - شركة سيو في اسكندرية</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* السكشن الرابع: ليه تتعامل مع شركتنا (6 كروت بشكل دائري زجاجي مختلف وبوردر قوي) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">لماذا تختار "يونيك" لشغل السيو الخاص بك؟</h2>
          <p className="text-cyan-400 font-medium mb-16">ما الذي يجعلنا أفضل شركة سيو في اسكندرية وخيارك الحتمي للنمو</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "استراتيجيات مخصصة وحصرية", d: "لا نستخدم قوالب جاهزة؛ ندرس كود ونظام موقعك ونصنع خطة سيو فريدة تلائم طبيعة عملك ونقاط قوتك." },
              { t: "شفافية مطلقة وتقارير دورية", d: "لوحة تحكم حية مخصصة لك تتابع من خلالها صعود كلماتك، تطور الروابط، وحجم الزيارات لحظة بلحظة." },
              { t: "فريق خبير وعقلية هندسية", d: "فريقنا يجمع بين مهندسي البرمجيات وخبراء التسويق المحترفين لضمان تفوق تقني ومحتوى مبهر." },
              { t: "الالتزام التام بقوانين جوجل الأبيض", d: "نتبع أساليب White-Hat SEO الآمنة تماماً لنضمن حماية موقعك من أي تحديثات أو عقوبات مستقبلية لـ جوجل." },
              { t: "تركيز كامل على زيادة المبيعات", d: "لا نهتم بالزيارات الوهمية، بل نستهدف الكلمات البحثية ذات النية الشرائية العالية التي تتحول لأرباح فعلية كاش." },
              { t: "دعم فني واستشارات مستمرة", d: "شراكتنا مستدامة؛ نحن معك على مدار الساعة لحل أي طارئ تقني وتحسين البنية التحتية البرمجية لمنصتك." }
            ].map((c, i) => (
              <div key={i} className="group relative bg-gradient-to-b from-slate-950 to-slate-900 border-t-4 border-l-2 border-r-2 border-cyan-500 p-8 rounded-br-[40px] rounded-tl-[40px] shadow-[5px_15px_35px_rgba(0,0,0,0.7)] transition-all duration-500 hover:rounded-none hover:border-blue-500 hover:shadow-[0_25px_50px_rgba(59,130,246,0.3)] text-right">
                <h3 className="text-xl font-bold mb-4 text-cyan-400 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" /> {c.t}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{c.d}</p>
                <div className="text-xs font-bold text-slate-500 tracking-wider">يونيك ✦ شركة سيو في اسكندرية</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* السكشن الخامس: لما تعمل سيو لموقعك ايه اللي حيحصل (8 كروت نيون وتصميم أفقي كبسولة) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">ما السيناريو المتوقع عند تهيئة موقعك للسيو؟</h2>
          <p className="text-blue-400 font-medium mb-16">رحلة صعود وتطور مشروعك مع يونيك - شركة سيو في اسكندرية المعتمدة</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { t: "الشهر الأول: تطهير الأخطاء البرمجية والزحف", d: "تتحسن سرعة موقعك بنسبة 200% وتختفي كافة روابط 404 وتكتشف الروبوتات صفحاتك بسلاسة." },
              { t: "الشهر الثاني: انفجار الأرشفة وظهور الكلمات", d: "يبدأ جوجل بوضع موقعك في الحسبان لآلاف الكلمات الطويلة (Long-tail keywords) في الصفحات الأولى." },
              { t: "الشهر الثالث: مضاعفة الزيارات المستهدفة وبدء البيع", d: "تلاحظ قفزة عمودية في تحليلات Google Analytics وبدء استقبال طلبات حقيقية من زوار مهتمين." },
              { t: "الشهر الرابع: السيادة المحلية واكتساح المنافسين", d: "تتصدر كلماتك الرئيسية جغرافياً، وتصبح شركتك الاسم الأبرز للباحثين في نطاق عملك الإقليمي." },
              { t: "الشهر الخامس: بناء سلطة النطاق (Domain Authority)", d: "تكتسب روابط خلفية قوية وتتحول منصتك إلى مرجع موثوق في مجالك تقتبس منه المواقع الأخرى." },
              { t: "الشهر السادس: الاستقرار التام في المركز الأول", d: "تستقر في صدارة نتائج البحث الصعبة لتجني ثمار الاستثمار العضوي المستدام بمعدلات نمو ثابتة." },
              { t: "على المدى البعيد: خفض تكاليف التسويق بنسبة 70%", d: "تكتشف أنك لم تعد بحاجة لضخ ميزانيات ضخمة في الإعلانات الممولة بفضل سيل الزيارات المجاني." },
              { t: "النتيجة النهائية: نمو مستمر وبناء أصل رقمي لا يثمن", d: "يتحول موقعك لأصل تجاري ذو قيمة سوقية عملاقة يجلب لك قيمة وأرباح متزايدة بصورة مستمرة." }
            ].map((c, i) => (
              <div key={i} className="group flex flex-col md:flex-row items-center gap-6 bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-slate-850 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] text-right w-full">
                <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-black text-xl group-hover:bg-purple-500 group-hover:text-white transition-all flex-shrink-0">
                  {i+1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white mb-1 group-hover:text-purple-300">{c.t}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-2">{c.d}</p>
                  <span className="text-[10px] text-purple-400/70 font-semibold uppercase tracking-wider block">شركة سيو في اسكندرية</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* السكشن السادس: تحليل العائد على الاستثمار من الاستثمار في السيو (جدول كبير وقوي) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">تحليل العائد على الاستثمار (ROI): السيو ضد الإعلانات المدفوعة</h2>
          <p className="text-cyan-400 font-medium mb-12">مقارنة مالية وتقنية توضح لماذا يعتبر السيو الخيار الأقوى والأوفر لشركتك</p>
          
          <div className="w-full overflow-x-auto rounded-xl border border-slate-800 shadow-2xl">
            <table className="w-full text-right border-collapse bg-slate-950 text-sm md:text-base min-w-[800px]">
              <thead>
                <tr className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-bold border-b border-slate-800">
                  <th className="p-5">وجه المقارنة</th>
                  <th className="p-5">الاستثمار في السيو (SEO)</th>
                  <th className="p-5">الإعلانات المدفوعة (PPC / Ads)</th>
                  <th className="p-5">التحليل والتأثير المالي</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-slate-300">
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="p-5 font-bold text-white">التكلفة على المدى الطويل</td>
                  <td className="p-5 text-green-400 font-medium">ثابتة ومستقرة، وتقل تكلفة التحويل بمرور الوقت.</td>
                  <td className="p-5 text-red-400 font-medium">متصاعدة ومستمرة، وتدفع مقابل كل نقرة للأبد.</td>
                  <td className="p-5 text-slate-400">السيو يوفر حتى 75% من النفقات التسويقية الإجمالية.</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="p-5 font-bold text-white">استمرارية تدفق الزوار</td>
                  <td className="p-5">مستمرة على مدار 24 ساعة حتى لو توقفت عن التطوير لفترة.</td>
                  <td className="p-5">تتوقف الزيارات كلياً في نفس الثانية التي تنتهي فيها الميزانية.</td>
                  <td className="p-5 text-slate-400">السيو يبني أصلاً رقمياً دائماً لا يزول بزوال التمويل.</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="p-5 font-bold text-white">نسبة النقر للظهور (CTR)</td>
                  <td className="p-5 text-green-400 font-medium">تحصد النتائج الـ 3 الأولى العضوية أكثر من 65% من النقرات.</td>
                  <td className="p-5 text-red-400 font-medium">لا تتعدى نسبة النقر على الإعلانات حاجز الـ 3-5%.</td>
                  <td className="p-5 text-slate-400">الجمهور يتجاوز الإعلانات ويبحث عن الثقة العضوية.</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="p-5 font-bold text-white">تأثير ثقة البراند</td>
                  <td className="p-5">يعزز سلطة علامتك التجارية ويجعلك القائد الطبيعي للسوق.</td>
                  <td className="p-5">يظهرك كمعلن يلح للحصول على عملاء مما يقلل المصداقية أحياناً.</td>
                  <td className="p-5 text-slate-400">الترتيب العضوي يمنح العميل شعوراً بأنك الأفضل في مجالك.</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="p-5 font-bold text-white">التهيئة الفنية وكود الموقع</td>
                  <td className="p-5">يجبرك على تحسين كود وسرعة وسلاسة الموقع بالكامل.</td>
                  <td className="p-5">لا يشترط تحسينات برمجية عميقة؛ فقط صفحة هبوط صالحة للاستخدام.</td>
                  <td className="p-5 text-slate-400">عمليات السيو ترفع من كفاءة البنية التحتية لمشروعك البرمجي.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* السكشن السابع: الركائز الهندسية الأربع وتأثير الـ CSS Cards الفردي (Full Screen Content Slider Style) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <span className="text-blue-500 font-mono text-sm uppercase tracking-widest block mb-2">✦ ENTERPRISE SYSTEMS ✦</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">الركائز الهندسية الأربع لتمكين الكيانات الكبرى رقماً</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">إن تحسين محركات البحث للشركات العملاقة (Enterprise SEO) يتجاوز المفاهيم التقليدية للكلمات المفتاحية؛ إنه معركة برمجية وهندسية تُحسم على مستوى البنية التحتية وتكامل الأنظمة المعقدة.</p>
        </div>

        {/* كروت تملأ السكشن تباعاً بشكل متناسق وفاخر للغاية */}
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* الركيزة 1 */}
          <div className="w-full bg-slate-900 border border-blue-900/40 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-bl-full border-b border-l border-blue-500/20 flex items-center justify-center font-mono font-bold text-blue-400">R-01</div>
            <div className="space-y-6 text-right">
              <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-400 transition-colors">الركيزة الأولى: معمارية الويب الضخم وهندسة معالجة الصفحات</h3>
              <p className="text-slate-300 leading-relaxed text-base">نعمل في شركة سيو في مصر على تشييد بنية برمجية صلبة للمنصات ذات الملايين من الصفحات بالاعتماد على تقنيات العرض الديناميكي مثل العرض من جهة الخادم (SSR) وتجديد المحتوى الفوري التدريجي (ISR). من خلال تحييد حزم جافا سكريبت (JS) الثقيلة وتقديم صفحات HTML مجهزة مسبقاً، نضمن حصد الأرشفة الفورية وحماية ميزانية الزحف من الهدر.</p>
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center gap-3 text-sm text-blue-300">
                <span className="font-bold text-blue-500">التحكم الذكي في معالجة الـ JS:</span> نضمن في شركة سيو اسكندرية لزواحف البحث الوصول لجوهر المحتوى دون إرهاق خوادم المعالجة الخاصة بها.
              </div>
            </div>
          </div>

          {/* الركيزة 2 */}
          <div className="w-full bg-slate-900 border border-cyan-900/40 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-600/10 rounded-bl-full border-b border-l border-cyan-500/20 flex items-center justify-center font-mono font-bold text-cyan-400">R-02</div>
            <div className="space-y-6 text-right">
              <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">الركيزة الثانية: ترشيد ميزانية الزحف وهندسة مسارات البيانات</h3>
              <p className="text-slate-300 leading-relaxed text-base">نقوم برفع كفاءة ومعدل تدفق زواحف البحث (مثل Googlebot وPerplexityBot) عبر تنقية مسارات التتبع (Query Parameters)، وتطهير الروابط المكررة، وصياغة قواعد توجيه صارمة على مستوى البروكسي العكسي (Reverse Proxy). يضمن ذلك توجيه طاقة روبوتات البحث مباشرة نحو الصفحات التشغيلية والأكثر ربحية.</p>
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center gap-3 text-sm text-cyan-300">
                <span className="font-bold text-cyan-500">تسيير زواحف البحث:</span> هندسة ذكية للمسارات تضمن استغلال كل ثانية من وقت الزحف في الصفحات ذات القيمة العالية.
              </div>
            </div>
          </div>

          {/* الركيزة 3 */}
          <div className="w-full bg-slate-900 border border-indigo-900/40 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/10 rounded-bl-full border-b border-l border-indigo-500/20 flex items-center justify-center font-mono font-bold text-indigo-400">R-03</div>
            <div className="space-y-6 text-right">
              <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-indigo-400 transition-colors">الركيزة الثالثة: الهيكلة الإقليمية وحوكمة التدويل متعدد اللغات</h3>
              <p className="text-slate-300 leading-relaxed text-base">نؤسس بنية تحتية مرنة وعالية السرعة موجهة لأسواق الشرق الأوسط والخليج العربي. من خلال التوزيع الدقيق لوسوم اللغات والموقع hreflang على مستوى المجلدات الفرعية (Subdirectories)، وتحسين أداء الخطوط العربية واللاتينية المتوافقة، نمنح المستخدم تجربة بصرية فائقة ونضمن لمحركات البحث فهماً دقيقاً للاستهداف الجغرافي.</p>
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center gap-3 text-sm text-indigo-300">
                <span className="font-bold text-indigo-500">التوسع والسيادة الإقليمية:</span> توطين برمجة ذكي يضمن ريادة الأسواق الخليجية والعربية بمرونة مطلقة.
              </div>
            </div>
          </div>

          {/* الركيزة 4 */}
          <div className="w-full bg-slate-900 border border-purple-900/40 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 rounded-bl-full border-b border-l border-purple-500/20 flex items-center justify-center font-mono font-bold text-purple-400">R-04</div>
            <div className="space-y-6 text-right">
              <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-purple-400 transition-colors">الركيزة الرابعة: البيانات المنظمة وتكامل الكيانات الرقمية (Entities)</h3>
              <p className="text-slate-300 leading-relaxed text-base">نعمل على دمج أصولك الرقمية بروابط وثيقة مع قواعد البيانات المعرفية العالمية عبر مخططات JSON-LD الهيكلية المتداخلة والمعقدة. من خلال ربط علامتك التجارية بمدخلات موثقة على منصات مثل Wikidata وWikipedia، نرسخ حقائق مؤسستك داخل الرسوم البيانية المعرفية (Knowledge Graphs)، مما يجعلها مرجعاً غير قابل للتزييف لمحركات البحث التوليدية القائمة على الذكاء الاصطناعي.</p>
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center gap-3 text-sm text-purple-300">
                <span className="font-bold text-purple-500">هندسة الكيانات المعرفية:</span> صياغة الهوية الرقمية للعلامة بصيغة يفهمها الذكاء الاصطناعي ويتبناها كحقيقة مطلقة.
              </div>
            </div>
          </div>

          {/* فقرة البرهنة الرياضية الصارمة */}
          <div className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 text-center shadow-xl mt-12">
            <h4 className="text-xl font-bold text-cyan-400 mb-3">الصرامة العلمية والبرهنة الرياضية</h4>
            <h5 className="text-lg font-semibold text-white mb-4">معادلات السيادة الرقمية والظهور العضوي</h5>
            <p className="text-sm text-slate-400 leading-relaxed max-w-4xl mx-auto">
              نحن في <span className="text-white font-bold">يونيك</span> لا نبني استراتيجياتنا على التخمين أو صياغة الكلمات بشكل عشوائي. نتعامل مع الظهور الرقمي كمنظومة هندسية دقيقة قابلة للقياس الرياضي. نترجم التفوق البرمجي إلى معادلات ومؤشرات أداء ملموسة تضمن سيادة منصتك على محركات البحث الكلاسيكية وأنظمة التوليد الذكي (LLMs) على حد سواء.
            </p>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* السكشن الثامن: أهم أسباب تراجع ترتيب موقعك في البحث وكيف نعالجه */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">أهم أسباب تراجع ترتيب موقعك في البحث وكيف نعالجه؟</h2>
          <p className="text-blue-400 font-medium mb-16">التشخيص الدقيق والعلاج الفوري للأعطال التكتيكية بواسطة خبراء يونيك افضل شركات السيو في اسكندرية</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-right">
            {[
              { r: "بطء سرعة تحميل خوادم الموقع وصفحاته", s: "نقوم بضغط وتوطين الصور، تنظيف حزم الـ JavaScript المهدرة، وتفعيل خاصية الكاش المتقدم وسيرفرات الـ CDN لتسريع التصفح كلياً." },
              { r: "ضعف وفقر المحتوى وتكراره بصورة عشوائية", s: "نقوم بإعادة صياغة وبناء هندسة المحتوى (Content Architecture) بالكامل لتقديم قيمة معرفية فائقة ومقروءة تتجاوز المنافسين." },
              { r: "روابط خلفية (Backlinks) ضعيفة أو معطوبة أو سبام", s: "نعمل على تنظيف ملف الروابط الخلفية للموقع كلياً عبر أداة Disavow وضخ روابط خلفية فائقة القوة والسلطة من مواقع معتمدة." },
              { r: "عدم التوافق البرمجي التام مع الهواتف الذكية", s: "نقوم بإعادة بناء واجهة المستخدم (UI) وتطبيق مفاهيم التصميم المستجيب (Responsive Design) ليعمل موقعك بمرونة كاملة على شتى الشاشات." }
            ].map((item, index) => (
              <div key={index} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full mb-4 inline-block">السبب الشائع رقم {index+1}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{item.r}</h3>
                  <div className="w-full h-[1px] bg-slate-800 my-4" />
                  <p className="text-sm text-slate-400 leading-relaxed"><strong className="text-green-400 font-bold block mb-1">كيف تعالجه يونيك؟</strong>{item.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* السكشن التاسع: الاسئلة الشائعة (FAQ Accordion Style) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">الأسئلة الشائعة حول خدمات السيو</h2>
          <p className="text-cyan-400 font-medium mb-16">كل ما تود معرفته عن آليات تصدر محركات البحث مع يونيك أفضل شركة سيو في اسكندرية</p>
          
          <div className="space-y-4 text-right">
            {[
              { q: "كم من الوقت يستغرق ظهور نتائج السيو بشكل فعلي؟", a: "يستغرق ظهور النتائج المستدامة والقوية فترة تتراوح بين 3 إلى 6 أشهر، بناءً على مدى قوة المنافسة في مجالك والحالة التقنية الحالية للموقع الإلكتروني قبل البدء." },
              { q: "هل تضمن شركتكم الوصول للمركز الأول في جوجل؟", a: "نعم، نضمن لك تطبيق أفضل المعايير الهندسية والخطط الذكية التي تضع موقعك في مقدمة النتائج الأولى العضوية لجميع الكلمات الرئيسية المستهدفة بمجالك." },
              { q: "ما الفرق بين السيو العضوي والإعلانات المدفوعة؟", a: "السيو العضوي يمنحك ظهوراً مجانياً ومستداماً يبني ثقة حقيقية لدى الزائر دون دفع تكلفة مقابل كل نقرة، بينما الإعلانات المدفوعة تنتهي فاعليتها وتتوقف تماماً بمجرد نفاد الميزانية المرصودة لها." },
              { q: "هل يحتاج موقعي إلى صيانة وتحسين مستمر للسيو؟", a: "محركات البحث وتحديثات الخوارزميات تتغير باستمرار، بالإضافة إلى حركة المنافسين الشرسة؛ لذلك تتطلب صدارة المواقع متابعة وتحديثات دورية وضخ روابط ومحتوى جديد للحفاظ على القمة دائماً." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg transition-colors hover:border-slate-700">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                  <span className="text-cyan-400">✦</span> {faq.q}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed pr-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}