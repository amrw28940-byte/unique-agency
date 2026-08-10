import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أفضل شركة تصميم مواقع في الإسكندرية | حلول ويب متكاملة وتنافسية',
  description: 'أفضل شركة تصميم مواقع في الإسكندرية. نمتلك حلولاً برمجية فائقة السرعة، متوافقة مع الجوال، وبأعلى معايير الـ SEO لتتصدر محركات البحث.',
};

export default function AlexandriaWebDesignPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white" dir="rtl">
      
      {/* 1. قسم شريط الإشعارات العلوي وسرعة التواصل */}
      <div className="bg-blue-900/40 border-b border-blue-800/50 py-2.5 px-4 text-center text-xs md:text-sm text-blue-200">
        <span>⚡ العرض الأقوى في الإسكندرية: موقعك بـ ووردبريس مع تصدر محركات البحث الآن | </span>
        <a href="tel:01270506511" className="font-bold text-white underline hover:text-blue-300 mx-2">01270506511</a>
      </div>

      {/* 2. قسم الهيدر الرئيسي (الواجهة والخلفية الخاصة) */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 px-6 text-center border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0,transparent_100%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            متفوقون على SkyCloud و Alex Web Design
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            أقوى شركة تصميم مواقع وتطبيقات في الإسكندرية
          </h1>
          <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            نحن لا نصمم مجرد مواقع كلاسيكية بطيئة مثل المنافسين، بل نبني منصات رقمية فائقة السرعة بـ ووردبريس لتكتسح بها السوق المحلي.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/201270506511" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-emerald-900/30 transition transform hover:-translate-y-0.5"
            >
              تواصل عبر الواتساب الآن
            </a>
            <a 
              href="tel:01270506511" 
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-8 rounded-xl border border-slate-700 transition"
            >
              اتصل بنا
            </a>
          </div>
        </div>
      </header>

      {/* 3. قسم مميزات التفوق البرمجي */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">لماذا نتفوق على منافسي الإسكندرية؟</h2>
        <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto">نقاط قوة حصرية تضمن لك التفوق التقني والظهور في صدارة قوقل.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition">
            <div className="text-blue-500 text-3xl mb-4 font-bold">01</div>
            <h3 className="text-xl font-bold text-white mb-3">سرعة خارقة (SSR/SSG)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">تحميل في أقل من ثانية واحدة، متجاوزاً مشاكل البطء الملحوظة في مواقع الشركات المنافسة.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition">
            <div className="text-blue-500 text-3xl mb-4 font-bold">02</div>
            <h3 className="text-xl font-bold text-white mb-3">سيو محلي متطور (Local SEO)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">هيكلة برمجية تضمن ظهورك لأي عميل يبحث عن تصميم مواقع في مناطق الإسكندرية المختلفة.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition">
            <div className="text-blue-500 text-3xl mb-4 font-bold">03</div>
            <h3 className="text-xl font-bold text-white mb-3">حماية وأمان مضاعف</h3>
            <p className="text-slate-400 text-sm leading-relaxed">تأمين كامل ضد الاختراقات وثغرات الحماية المتواجدة في المواقع التقليدية القديمة.</p>
          </div>
        </div>
      </section>

      {/* 4. قسم جدول مقارنة الأداء مع المنافسين */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 p-6 md:p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">مقارنة الأداء الحاسمة</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-right text-sm md:text-base">
              <thead>
                <tr className="border-b border-slate-800 text-blue-400">
                  <th className="p-4">وجه المقارنة</th>
                  <th className="p-4">الشركات المنافسة (SkyCloud / Green IT)</th>
                  <th className="p-4 text-emerald-400">خدماتنا المتقدمة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="p-4 font-bold">سرعة التحميل</td>
                  <td className="p-4 text-slate-400">بطيئة بسبب السكريبتات الثقيلة</td>
                  <td className="p-4 text-emerald-400 font-semibold">صاروخية (أقل من ثانية)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">التوافق مع الجوال</td>
                  <td className="p-4 text-slate-400">مشاكل في الشاشات الصغيرة</td>
                  <td className="p-4 text-emerald-400 font-semibold">متوافق بنسبة 100%</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">هيكلة محركات البحث</td>
                  <td className="p-4 text-slate-400">تقليدية وعشوائية</td>
                  <td className="p-4 text-emerald-400 font-semibold">متقدمة (Schema & Metadata)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. قسم الخدمات البرمجية */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">خدماتنا المتكاملة للارتقاء بعلامتك</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex gap-4 items-start">
            <div className="bg-blue-600/10 text-blue-400 p-3 rounded-xl font-bold">01</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">تصميم وتطوير مواقع الشركات</h3>
              <p className="text-slate-400 text-sm">مواقع تعريفية تليق بحجم شركتك وتعكس احترافيتك أمام عملائك بالترتيب الأول.</p>
            </div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex gap-4 items-start">
            <div className="bg-blue-600/10 text-blue-400 p-3 rounded-xl font-bold">02</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">متاجر إلكترونية احترافية</h3>
              <p className="text-slate-400 text-sm">متاجر سريعة ومربوطة ببوابات الدفع الإلكتروني لزيادة مبيعاتك وأرباحك فوراً.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. قسم مراحل العمل والخطوات */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">كيف نبني نجاحك في 3 خطوات؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
            <h3 className="font-bold text-white mb-2">التحليل والتخطيط</h3>
            <p className="text-slate-400 text-sm">دراسة نشاطك التجاري بدقة ومنافسيك لوضع استراتيجية الفوز.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
            <h3 className="font-bold text-white mb-2">التصميم والبرمجة</h3>
            <p className="text-slate-400 text-sm">تطوير الكود بأحدث تقنيات ووردبريس لضمان أعلى سرعة وأمان.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
            <h3 className="font-bold text-white mb-2">الإطلاق والتصدر</h3>
            <p className="text-slate-400 text-sm">نشر الموقع وربطه بمحركات البحث لتبدأ في استقبال العملاء فوراً.</p>
          </div>
        </div>
      </section>

      {/* 7. قسم آراء العملاء والثقة */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">ماذا يقول عملاؤنا عنا في الإسكندرية؟</h2>
          <p className="text-slate-300 italic mb-6 text-lg max-w-2xl mx-auto">
            "الفرق شاسع جداً بين شركتنا القديمة وموقعنا الجديد بـ ووردبريس الذي صمموه لنا. السرعة رهيبة وعدد العملاء المتواصلين عبر الواتساب تضاعف 3 مرات!"
          </p>
          <p className="text-blue-400 font-bold">أحمد م. - صاحب شركة تجارية بالإسكندرية</p>
        </div>
      </section>

      {/* 8. قسم الأسئلة الشائعة (FAQ) */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          <details className="bg-slate-900 border border-slate-800 p-6 rounded-xl cursor-pointer">
            <summary className="font-bold text-white">كم يستغرق تنفيذ موقع الويب؟</summary>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">عادة ما تستغرق المشاريع الاحترافية من أسبوع إلى أسبوعين حسب حجم التفاصيل والمتطلبات.</p>
          </details>
          <details className="bg-slate-900 border border-slate-800 p-6 rounded-xl cursor-pointer">
            <summary className="font-bold text-white">هل موقعي سيكون متصدراً في قوقل؟</summary>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">نعم، نبني الموقع من اليوم الأول بقواعد سيو صارمة وتوافق تام مع متطلبات محركات البحث المحلية.</p>
          </details>
        </div>
      </section>

      {/* 9. قسم الدعوة المباشرة للاتصال والتواصل */}
      <section className="py-20 px-6 text-center bg-gradient-to-t from-blue-950/40 to-transparent border-t border-slate-900">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">هل أنت مستعد لاكتساح منافسيك في الإسكندرية؟</h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          تواصل معنا الآن مباشرة عبر الهاتف أو الواتساب لتحصل على استشارة مجانية لموقعك القادم.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://wa.me/201270506511" 
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition text-lg"
          >
            تواصل عبر واتساب
          </a>
          <a 
            href="tel:01270506511" 
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition text-lg"
          >
            اتصل هاتفياً الآن
          </a>
        </div>
      </section>

      {/* 10. قسم الفوتر وحقوق النشر */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8 px-6 text-center text-slate-500 text-sm">
        <p className="mb-2">جميع الحقوق محفوظة © 2026 - أفضل شركة تصميم مواقع في الإسكندرية</p>
        <p>للتواصل السريع: <a href="tel:01270506511" className="text-blue-400 hover:underline">01270506511</a></p>
      </footer>

    </div>
  );
}