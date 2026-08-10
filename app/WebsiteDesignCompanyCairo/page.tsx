"use client";

import React, { useState } from "react";
import { 
  Phone, MessageSquare, Zap, ShieldCheck, Cpu, 
  Star, ChevronDown, Globe, ShoppingCart, Search, CheckCircle2
} from "lucide-react";

export default function WordPressLandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    // أضفنا padding-top هنا (pt-28 أو حسب ارتفاع الهيدر عندك) عشان الشريط ما يختفيش تحت الهيدر الثابت
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 pt-24 sm:pt-28" dir="rtl">
      
      {/* 1. شريط الإشعارات العلوي (Top Announcement Bar) - تم ضبط الـ z-index والـ top */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2.5 px-4 fixed top-16 sm:top-20 left-0 right-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm font-medium gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded text-xs animate-pulse">عرض خاص</span>
            <span>تصميم مواقع وتطوير ووردبريس احترافي بضمان السرعة والسيو خلال أيام!</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+201000000000" className="flex items-center gap-1.5 bg-slate-950/30 hover:bg-slate-950/50 px-3 py-1 rounded-full transition">
              <Phone className="w-3.5 h-3.5 text-cyan-300" />
              <span>اتصل بنا مباشرة</span>
            </a>
            <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 px-3 py-1 rounded-full transition">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>واتساب سريع</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. الهيدر الرئيسي (Hero Section) */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6">
            <Zap className="w-4 h-4" />
            <span>خبير ووردبريس: مواقع سريعة، آمنة، ومصممة للمبيعات</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            تصميم مواقع <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ووردبريس (WordPress)</span> احترافية في مصر
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
            لا تهدر ميزانية إعلاناتك على مواقع ووردبريس بطيئة أو مخترقة. نبني لك مواقع تعريفية ومتاجر إلكترونية سريعة وخفيفة، مهيئة تماماً لتتصدر محركات البحث Google.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/201000000000" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition">
              <MessageSquare className="w-5 h-5" />
              <span>اطلب استشارتك المجانية عبر واتساب</span>
            </a>
            <a href="tel:+201000000000" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl transition">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>اتصال هاتفي مباشر</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. شبكة الميزات التنافسية */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">لماذا تختار خبرتنا في الووردبريس؟</h2>
            <p className="text-slate-400">نحل عيوب الووردبريس الشائعة (البطء والثغرات) عبر هندسة نظيفة ومتطورة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">سرعة تحميل فائقة</h3>
              <p className="text-slate-400 text-sm leading-relaxed">تنظيف الكود، إزالة الإضافات الزائدة، وضبط التخزين المؤقت ليعمل موقعك بسرعة الصواريخ.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">حماية وأمان متقدم</h3>
              <p className="text-slate-400 text-sm leading-relaxed">تأمين لوحة التحكم، إغلاق الثغرات، وحماية الموقع ضد هجمات الاختراق والبرمجيات الخبيثة.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">تهيئة كاملة للسيو (SEO)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">إعداد الكلمات المفتاحية، سرعة الأرشفة، وتوافق الهيكلة مع تحديثات جوجل لضمان الصدارة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. جدول المقارنة المباشر */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">الفارق بين ووردبريس احترافي وبين الشركات التقليدية</h2>
            <p className="text-slate-400">قارن بنفسك واكتشف سر نجاح مواقعنا.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-sm">
                  <th className="py-4 px-6">المعيار</th>
                  <th className="py-4 px-6 text-cyan-400">معنا (ووردبريس احترافي ومحسّن)</th>
                  <th className="py-4 px-6 text-red-400">الشركات التقليدية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">سرعة الموقع</td>
                  <td className="py-4 px-6 text-cyan-300">سريع جداً (تحسين الإضافات والصور)</td>
                  <td className="py-4 px-6 text-slate-400">ثقيل وبطيء بسبب الإضافات العشوائية</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">الأمان والحماية</td>
                  <td className="py-4 px-6 text-cyan-300">محمي ببرمجيات وتحديثات دورية</td>
                  <td className="py-4 px-6 text-slate-400">عرضة للاختراق بسبب الإهمال</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">إدارة المحتوى</td>
                  <td className="py-4 px-6 text-cyan-300">سهل المرونة، وتدريب كامل لك</td>
                  <td className="py-4 px-6 text-slate-400">معقد ويحتاج لشركة دائماً</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. قسم الخدمات (Services Grid) */}
      <section className="py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">خدمات تطوير الووردبريس المتكاملة</h2>
            <p className="text-slate-400">حلول مخصصة للشركات والمتاجر في السوق المصري.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <Globe className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">مواقع الشركات (Corporate)</h3>
              <p className="text-slate-400 text-sm">مواقع تعريفية فاخرة تعكس ثقل مؤسستك وتجذب عملائك.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <ShoppingCart className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">المتاجر الإلكترونية (WooCommerce)</h3>
              <p className="text-slate-400 text-sm">متاجر متكاملة مع بوابات الدفع والشحن لزيادة مبيعاتك.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <Cpu className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">صيانة وتسريع المواقع</h3>
              <p className="text-slate-400 text-sm">حل مشاكل البطء، تنظيف الأكواد، وتأمين المواقع القائمة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. خطوات العمل */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">خطوات العمل بكل شفافية</h2>
            <p className="text-slate-400">نضمن تسليم مشروعك في الموعد المحدد وبأعلى جودة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <div className="w-10 h-10 bg-cyan-500 text-slate-950 font-bold rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-white mb-2">تحديد الفكرة والمتطلبات</h3>
              <p className="text-slate-400 text-sm">مناقشة أهداف موقعك وتصميم الهوية المناسبة.</p>
            </div>

            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <div className="w-10 h-10 bg-cyan-500 text-slate-950 font-bold rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-white mb-2">التصميم والتطوير</h3>
              <p className="text-slate-400 text-sm">بناء الموقع، ضبط الإضافات، وتحسين السرعة.</p>
            </div>

            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <div className="w-10 h-10 bg-cyan-500 text-slate-950 font-bold rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-white mb-2">الإطلاق والتدريب</h3>
              <p className="text-slate-400 text-sm">نشر الموقع رسمياً وتدريبك على إدارته بكل سهولة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. آراء العملاء */}
      <section className="py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">آراء عملائنا</h2>
            <p className="text-slate-400">ما يقوله أصحاب الشركات عن مواقعهم المطورة معنا.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                "الموقع أصبح أسرع بكثير وتم ترتيب الأقسام بطريقة احترافية زادت من مبيعاتنا عبر الإعلانات."
              </p>
              <div className="font-bold text-white text-sm">محمد عبد الله</div>
              <div className="text-slate-500 text-xs">صاحب متجر إلكتروني</div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                "احترافية عالية، التزام بالمواعيد، ودعم فني ممتاز بعد التسليم. أنصح بالتعامل معه بشدة."
              </p>
              <div className="font-bold text-white text-sm">كريم الشريف</div>
              <div className="text-slate-500 text-xs">مدير شركة خدمية</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. الأسئلة الشائعة */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">الأسئلة الشائعة</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "هل مواقع الووردبريس آمنة ضد الاختراق؟",
                a: "نعم، عندما يتم تصميمها وتأمينها بواسطة خبير يحذف الإضافات الزهيدة ويستخدم إضافات حماية قوية ودورية."
              },
              {
                q: "هل يمكنني تعديل محتوى الموقع بنفسي بعد الانتهاء؟",
                a: "بالتأكيد، الووردبريس يتميز بلوحة تحكم عربية سهلة جداً، ونوفر لك شرحاً كاملاً لطريقة التعديل."
              },
              {
                q: "كم تستغرق مدة تصميم الموقع؟",
                a: "تتراوح المدة عادة بين أسبوع إلى أسبوعين حسب تفاصيل ومحتوى المشروع."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-right p-5 flex justify-between items-center font-semibold text-white transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. قسم الاتصال النهائي */}
      <section className="py-20 bg-gradient-to-t from-slate-900 to-slate-950 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            جاهز لامتلاك موقع ووردبريس احترافي يضاعف أرباحك؟
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            تواصل معنا الآن واحصل على استشارة مجانية لموقعك القادم.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/201000000000" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition">
              <MessageSquare className="w-5 h-5" />
              <span>تواصل عبر الواتساب فوراً</span>
            </a>
            <a href="tel:+201000000000" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold px-8 py-4 rounded-xl transition">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>اتصل هاتفياً الآن</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}