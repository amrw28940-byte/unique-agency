"use client";
import { motion } from "framer-motion";
import { Download, ExternalLink, Briefcase } from "lucide-react";

export default function PortfolioPage() {
  const pdfUrl = "/portfolio.pdf";

  return (
    <main className="min-h-screen bg-sky-950 text-white pt-32 pb-16 px-4 md:px-8 font-cairo" style={{ direction: "rtl" }}>
      <div className="container mx-auto max-w-7xl space-y-12">
        
        {/* الجزء العلوي: الهيدر الخاص بالصفحة والمحسّن للـ SEO */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-white/10 pb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-3 text-yellow-400 font-bold text-sm bg-yellow-400/10 w-fit px-4 py-1 rounded-full border border-yellow-400/20">
              <Briefcase size={16} />
              <span>معرض أعمالنا</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              البورتفوليو الرقمي وشهدائنا من النجاح
            </h1>
            <p className="text-sky-200/70 text-sm md:text-base max-w-2xl font-medium">
              تصفح ملف أعمالنا الشامل مباشرة لمعاينة تفاصيل المشاريع، الاستراتيجيات، والنتائج التي حققناها لعملائنا في مختلف المجالات.
            </p>
          </motion.div>

          {/* أزرار تفاعلية سريعة تظهر بجانب العنوان */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 shrink-0"
          >
            <a 
              href={pdfUrl} 
              download="Portfolio-Agency.pdf"
              title="تحميل ملف البورتفوليو بصيغة PDF"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-sky-950 font-black px-6 py-3 rounded-xl text-sm transition-all shadow-[0_4px_20px_rgba(234,179,8,0.25)] hover:scale-105"
            >
              <Download size={18} />
              <span>تحميل الملف بالكامل</span>
            </a>
            
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all"
            >
              <ExternalLink size={18} />
              <span>فتح في علامة تبويب جديدة</span>
            </a>
          </motion.div>
        </div>

        {/* عرض الـ PDF الاحترافي الذي يملأ الشاشة والعرض بالكامل */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-[75vh] md:h-[85vh] rounded-3xl overflow-hidden border border-white/10 bg-sky-900/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative group"
        >
          {/* محاكاة إطار ماك أو ويندوز أعلى الملف لإضافة لمسة شياكة ديزاينر */}
          <div className="absolute top-0 left-0 w-full h-12 bg-sky-950/90 border-b border-white/5 flex items-center justify-between px-6 z-10 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-xs font-bold text-white/40 tracking-wider font-mono">PORTFOLIO_PREVIEW.PDF</span>
            <div className="w-12"></div>
          </div>

          {/* تضمين ملف الـ PDF ليعرض كاملاً ويمتد من الحافة للحافة مع دعم التجاوب والموبايل */}
          <div className="w-full h-full pt-12">
            <object
              data={`${pdfUrl}#view=FitH&scrollbar=1&toolbar=1`}
              type="application/pdf"
              width="100%"
              height="100%"
              className="w-full h-full"
            >
              {/* رسالة بديلة ذكية للـ SEO في حال كان المتصفح قديماً ولا يدعم العرض المباشر */}
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-sky-900/20">
                <p className="text-lg font-bold text-white mb-4">متصفحك لا يدعم العرض المباشر لملفات PDF المتطورة.</p>
                <a 
                  href={pdfUrl} 
                  download 
                  className="bg-yellow-400 text-sky-950 px-6 py-3 rounded-xl font-bold text-sm shadow-md"
                >
                  اضغط هنا لتحميل البورتفوليو فوراً ورؤيته
                </a>
              </div>
            </object>
          </div>
        </motion.div>
        
      </div>
    </main>
  );
}