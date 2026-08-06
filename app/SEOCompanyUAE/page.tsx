"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Search, Globe, ShoppingCart, Megaphone, Bot, Compass, FileText, Link2, BarChart3, Server, MapPin, Store, SlidersHorizontal, Sparkles, Crosshair, Zap, Layers, RefreshCw, ShieldCheck } from "lucide-react";

import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import("react-leaflet").then((mod) => mod.CircleMarker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const mapLocations = [
  { name: "القاهرة (مصر)", lat: 30.0444, lng: 31.2357, desc: "المركز الرئيسي للعمليات والخدمات البرمجية" },
  { name: "الإسكندرية (مصر)", lat: 31.2001, lng: 29.9187, desc: "فرع الدعم والحلول التقنية الساحلية" },
  { name: "الرياض (السعودية)", lat: 24.7136, lng: 46.6753, desc: "مقر المشاريع الاستراتيجية والشركات الكبرى" },
  { name: "جدة (السعودية)", lat: 21.5433, lng: 39.1728, desc: "حلقة الوصل التجارية للساحل الغربي" },
  { name: "مكة المكرمة (السعودية)", lat: 21.3891, lng: 39.8579, desc: "خدمات رقمية متخصصة لقطاع الأعمال" },
  { name: "تبوك (السعودية)", lat: 28.3835, lng: 36.5662, desc: "نطاق المشاريع والتطوير الإقليمي" },
  { name: "دبي (الإمارات)", lat: 25.2048, lng: 55.2708, desc: "قطب التسويق الدولي وهيمنة محركات البحث" },
  { name: "الشارقة (الإمارات)", lat: 25.3463, lng: 55.4209, desc: "دعم وتطوير المنصات الرقمية والتجارية" },
  { name: "الكويت (الكويت)", lat: 29.3759, lng: 47.9774, desc: "الاستشارات وحلول المتاجر المتقدمة" },
  { name: "المنامة (البحرين)", lat: 26.2285, lng: 50.5860, desc: "خدمات السيو المتقدمة والربط المحلي" },
  { name: "مسقط (عمان)", lat: 23.5859, lng: 58.4059, desc: "التموضع الإقليمي والخدمات الرقمية" },
  { name: "عمان (الأردن)", lat: 31.9544, lng: 35.9106, desc: "التطوير التقني وحلول الذكاء الاصطناعي" },
  { name: "الدوحة (قطر)", lat: 25.2854, lng: 51.5310, desc: "الحملات الإعلانية الموجهة والريادة الرقمية" },
];

const features = [
  {
    number: "01",
    title: "هيمنة رقمية تضعك في صدارة محركات البحث",
    description: "لاكتساح نتائج البحث في أبوظبي، دبي، أو أي سوق إقليمي، يتطلب الأمر أكثر من مجرد كلمات مفتاحية عشوائية. نحن نؤسس لك بصمة ريادية تقود الزائر مباشرة إلى موقعك باعتباره المرجعية الأولى والأوثق في قطاعك.",
    tags: ["SEO Leadership", "دبي", "أبوظبي", "الرياض", "الشارقة"],
    icon: Search,
    span: "lg:col-span-2",
  },
  {
    number: "02",
    title: "منصات تفاعلية تحقق مبيعات متواصلة",
    description: "نحول تصميم واجهة موقعك من مجرد استعراض بصري صامت إلى ركيزة مبيعات ديناميكية تنبض بالحيوية على مدار اليوم، مهندسة خصيصاً لجذب انتباه المتصفح وتحويله إلى عميل دائم بلا إبطاء.",
    tags: ["UI/UX", "هوية رقمية"],
    icon: Globe,
    span: "lg:col-span-1",
  },
  {
    number: "03",
    title: "متاجر رقمية متطورة وآمنة",
    description: "نبتكر لك بيئات تسوق إلكتروني متكاملة ومصممة خصيصاً لعملك، مدعومة بأعلى معايير الحماية التقنية وأنظمة الدفع السلسة وتجربة تصفح مرنة تضمن ولاء عملائك.",
    tags: ["WordPress", "eCommerce"],
    icon: ShoppingCart,
    span: "lg:col-span-1",
  },
  {
    number: "04",
    title: "مساعد تفاعلي ذكي يعمل بلا توقف",
    description: "نظام رد آلي متطور مدعوم بالذكاء الاصطناعي يستقبل استفسارات الزوار عبر المنصة أو الواتساب بشكل فوري، يوضح التفاصيل ويقودهم نحو إتمام الصفقة بكفاءة فريق متكامل.",
    tags: ["WhatsApp AI", "أتمتة ذكية"],
    icon: Bot,
    span: "lg:col-span-1",
  },
  {
    number: "05",
    title: "حملات إعلانية ذكية لعائد مالي سريع",
    description: "اختصر مسافات الانتظار؛ نخطط وننفذ حملات تسويقية مدفوعة عالية الدقة عبر شبكات جوجل وميتا، لتستهدف جمهورك الفعلي بدقة متناهية وتحقق أرباحاً ملموسة من الأيام الأولى.",
    tags: ["Meta Ads", "Google Ads"],
    icon: Megaphone,
    span: "lg:col-span-1",
  },
];

const steps = [
  { number: "01", title: "تشخيص تقني شامل لهيكلة موقعك", description: "نجري عملية فحص استراتيجية دقيقة لكل زوايا منصتك، لرصد العوائق البرمجية التي تحجب فهارس جوجل، وتحديد الفجوات التي تضيع منك الفرص مقارنة بالمنافسين.", icon: Compass },
  { number: "02", title: "تحليل معمق لسلوكيات وبحث جمهورك", description: "نستخرج بدقة المداخل والعبارات البحثية الفعلية التي ينشغل بها عميلك المستهدف في مختلف المدن، معتمدين على لغة الأرقام الصادقة بعيداً عن التوقعات.", icon: Crosshair },
  { number: "03", title: "هندسة البنية التحتية والسرعة الفائقة", description: "نوفر لتجربة الاستخدام سرعات تحميل استثنائية وهيكلة كود برمجية نظيفة، تمنح خوارزميات محرك البحث المبرر الكافي لترجيح كفتك ووضعك في المقدمة.", icon: Zap },
  { number: "04", title: "صياغة سرد تسويقي يخطف الانتباه", description: "رسائل نصية مصممة بعناية فائقة لتتحدث إلى احتياجات العميل مباشرة، تزيل شكوكه بذكاء، وتلهمه لاتخاذ قرار الشراء بثقة ويقين تام.", icon: FileText },
  { number: "05", title: "تعزيز السمعة الرقمية والانتشار الموثوق", description: "نربط مشروعك بشبكة من الروابط والمصادر ذات الثقل والمصداقية العالية، لترتفع مكانة موقعك الاعتبارية وتزداد ثقة جوجل به يوماً بعد يوم.", icon: Link2 },
  { number: "06", title: "تتبع أدائي ومتابعة تطوير دورية", description: "نضع بين يديك لوحات قياس وتقارير واضحة المعالم، مصحوبة بجلسات استشارية منتظمة تطلعك على مؤشرات النمو وتحدد بدقة المحطة القادمة.", icon: BarChart3 },
];

const uaeSeoServices = [
  { number: "01", title: "هندسة المحتوى الداخلي والتوافق الذكي", description: "إعادة بناء وتطوير النصوص والصفحات الداخلية لتتطابق بدقة تامة مع نوايا وعادات بحث المستخدمين، مما يرفع وثوقية الصفحات وقدرتها على تصدر النتائج الأولى.", tags: ["On-Page SEO"], icon: SlidersHorizontal },
  { number: "02", title: "بناء السلطة الرقمية والروابط الخارجية", description: "تعزيز السمعة والمصداقية لعلامتك التجارية عبر استراتيجيات احترافية لجلب روابط خلفية قوية ونقية، وتوسيع نطاق الانتشار لزيادة الثقة لدى خوارزميات البحث.", tags: ["Off-Page SEO"], icon: Link2 },
  { number: "03", title: "التموضع الجغرافي والانتشار المحلي", description: "مضاعفة ظهورك في الخرائط والاستعلامات القريبة لعملائك المستهدفين في محيطك الجغرافي، لضمان جذب الزوار الأكثر جاهزية للشراء في منطقتك.", tags: ["Local SEO"], icon: MapPin },
  { number: "04", title: "مضاعفة مبيعات وحركة المتاجر الرقمية", description: "تطوير أداء أقسام المنتجات وواجهات التسوق لرفع معدلات التحويل وجذب متسوقين دائمين مهتمين فعلياً بطلب منتجاتك بكل سهولة وسلاسة.", tags: ["Ecommerce SEO"], icon: Store },
  { number: "05", title: "الاستقرار التقني وسهولة الزحف البرمجي", description: "معالجة التحديات التحتية والفنية لضمان أرشفة سريعة وسلسة لكامل صفحات الموقع من قِبل روبوتات محركات البحث، لرفع كفاءة الأداء العام لأقصى درجة.", tags: ["Technical SEO"], icon: Server },
];

const goldenCards = [
  {
    title: "مفاتيح الصدارة في ركائز المحتوى",
    subtitle: "العناوين الرئيسية، الفرعية، الوصف، والنص البديل",
    description: "تضمين الكلمات المفتاحية الاستراتيجية في عناوينك الرئيسية والفرعية، ووصف الميتا، والنص البديل (Alt Text) يعزز بقوة استيعاب خوارزميات البحث لطبيعة صفحاتك ويقودك لمراتب متقدمة.",
    icon: Layers,
    badge: "توزيع الكلمات المفتاحية"
  },
  {
    title: "هندسة روابط مقروءة وواضحة",
    subtitle: "بنية رابط الصفحة URL",
    description: "تصميم روابط (URLs) واضحة ومدمجة بكلمات أساسية تعبر بصدق عن جوهر المحتوى، لتمكين عناكب البحث من قراءة الصفحات بمرونة وتوجيه المستخدمين إليك بلا تعقيد.",
    icon: Sparkles,
    badge: "برمجية الروابط"
  },
  {
    title: "مسارات تنقل واضحة وذكية",
    subtitle: "بنية التنقل بين الصفحات Breadcrumbs",
    description: "إبراز مسار تصفح المستخدم بذكاء داخل الموقع لمساعدة روبوتات الزحف على فهم الأرشيف، فضلاً عن رفع جاهزية العميل ومضاعفة نسب التحويل بفاعلية.",
    icon: Zap,
    badge: "تجربة الاستخدام"
  },
  {
    title: "محتوى فريد ومعالجة الازدواجية",
    subtitle: "التحقق من التكرار DuplicateContent",
    description: "نفحص بدقة أرشيفك ونعالج أي تكرار داخلي أو مسروقات خارجية يعتمد عليها المنافسون لسرقة ترتيبك، لنمنحك نصوصاً فريدة ومصانة بالكامل.",
    icon: RefreshCw,
    badge: "فرادة الأصول"
  },
  {
    title: "تدقيق وتحليل المصادر المرجعية",
    subtitle: "مراجعة الروابط الخلفية Backlinks",
    description: "متابعة الروابط المحيلة لضمان نقائها ومصداقيتها الدائمة، مع فحص عميق لمصادر منافسيك واقتناص فرص حقيقية للربط مع منصات ذات ثقل موثوق.",
    icon: ShieldCheck,
    badge: "السلطة الرقمية"
  }
];

export default function SEOCompanyUAEPage() {
  const whatsappNumber = "00201505388060"; 
  const whatsappMessage = encodeURIComponent("مرحباً، أهتم بخدمات تحسين محركات البحث في الوطن العربي وأرغب في استشارة.");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#0B1B3D] text-white overflow-x-hidden">
      
      {/* القسم الأول: الهيرو */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B3D] via-[#0D2B42] to-[#040D1A] z-0 pointer-events-none" />
        <div className="container mx-auto max-w-6xl z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-right">
            <span className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 text-xs sm:text-sm font-bold py-1.5 px-4 rounded-full mb-6">
              الريادة في حلول التسويق الرقمي
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              أفضل <span className="text-yellow-400">شركة سيو في الامارات</span> والوطن العربي
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              نساعد عملك في دبي، أبوظبي وكل إمارات الدولة ومختلف البلدان العربية على مضاعفة الزيارات العضوية، وبناء سلطة رقمية متقدمة تحقق أعلى عائد على الاستثمار.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-black py-3 px-8 rounded-full transition-all shadow-xl text-base w-full sm:w-auto"
              >
                <span>تواصل عبر واتساب</span>
                <span dir="ltr">+20 15 05388060</span>
              </a>
              <a 
                href="/wizard" 
                className="flex items-center justify-center bg-yellow-400 hover:bg-white text-[#0B1B3D] font-black py-3 px-8 rounded-full transition-all shadow-xl text-base w-full sm:w-auto"
              >
                احسب تكلفة مشروعك
              </a>
            </div>
          </div>
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-sky-950/50">
            <Image 
              src="/seocompanyuae.webp" 
              alt="شركة سيو في الامارات - Unique WS" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={true}
            />
          </div>
        </div>
      </section>

      {/* القسم الثاني: المميزات */}
      <section className="py-24 px-6 relative overflow-hidden border-t border-white/5" id="features">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-yellow-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/20">
              لماذا تختار Unique WS؟
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-6 tracking-tight">
              حلول رقمية متكاملة تضمن تفوقك
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className={`group relative bg-gradient-to-b from-sky-900/40 to-sky-950/60 p-8 rounded-3xl border border-white/10 hover:border-yellow-400/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl ${item.span}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-yellow-400/10 transition-all duration-500 pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-sky-950/80 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-sky-950 transition-all duration-300 shadow-inner">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-4xl font-black text-white/10 group-hover:text-yellow-400/30 transition-colors font-mono">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {item.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-950/60 text-yellow-400/90 border border-yellow-400/10 group-hover:border-yellow-400/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* القسم الثالث: الخطوات */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-yellow-500/10" id="steps">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-yellow-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/20">
              منهجية دقيقة ومدروسة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-6 tracking-tight mb-4">
              6 خطوات تحوّل موقعك إلى مصدر دائم للعملاء
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              لا نبدأ بالعمل قبل أن نفهم عملك تماماً. كل خطوة مبنية على البيانات، وكل قرار له مبرر واضح.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-[#0B1B3D]/80 p-8 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col justify-between"
                  style={{
                    border: '1px solid rgba(234, 179, 8, 0.3)',
                    boxShadow: '0 0 15px rgba(234, 179, 8, 0.05), inset 0 0 15px rgba(234, 179, 8, 0.03)'
                  }}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    borderColor: 'rgba(234, 179, 8, 0.9)',
                    boxShadow: '0 0 25px rgba(234, 179, 8, 0.25), inset 0 0 20px rgba(234, 179, 8, 0.1)'
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-sky-950 border border-yellow-500/30 group-hover:border-yellow-400 flex items-center justify-center text-yellow-400 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-sky-950 transition-all duration-300 shadow-lg">
                        <StepIcon className="w-7 h-7" />
                      </div>
                      <span className="text-4xl font-black text-yellow-500/20 group-hover:text-yellow-400/60 transition-colors font-mono">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-yellow-500/10 flex items-center justify-between text-xs text-yellow-400/70 font-semibold">
                    <span>الخطوة {step.number} من 06</span>
                    <span className="group-hover:translate-x-1 transition-transform">← التفاصيل</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* القسم الرابع: خدمات تحسين السيو */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#0A1832] border-t border-slate-300/15" id="seo-services">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-slate-200 text-xs sm:text-sm font-bold tracking-widest uppercase bg-slate-300/10 px-4 py-1.5 rounded-full border border-slate-300/25 shadow-sm">
              استراتيجيات الصدارة الشاملة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-6 tracking-tight mb-4">
              خدمات متكاملة لتحسين محركات البحث
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uaeSeoServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-[#0E2246]/90 p-8 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col justify-between"
                  style={{
                    border: '1px solid rgba(226, 232, 240, 0.35)',
                    boxShadow: '0 0 15px rgba(226, 232, 240, 0.05), inset 0 0 15px rgba(226, 232, 240, 0.02)'
                  }}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    borderColor: 'rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 0 30px rgba(226, 232, 240, 0.35), inset 0 0 20px rgba(226, 232, 240, 0.15)'
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-sky-950 border border-slate-300/40 group-hover:border-white flex items-center justify-center text-slate-100 group-hover:scale-110 group-hover:bg-slate-200 group-hover:text-sky-950 transition-all duration-300 shadow-xl">
                        <ServiceIcon className="w-7 h-7" />
                      </div>
                      <span className="text-4xl font-black text-slate-300/20 group-hover:text-slate-100/70 transition-colors font-mono">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-slate-200 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-300/15 flex items-center justify-between text-xs text-slate-200/80 font-semibold">
                    <span className="px-3 py-1 rounded-full bg-slate-300/10 border border-slate-300/20">
                      {service.tags[0]}
                    </span>
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group-hover:translate-x-1 transition-transform text-slate-100 font-bold"
                    >
                      اطلب الاستشارة ←
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* القسم الخامس: خريطة العمليات التفاعلية مع العلامات */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#030814] border-t border-cyan-500/20" id="real-map">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/35 shadow-lg">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              خريطة العمليات التفاعلية
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-6 tracking-tight mb-4 text-white">
              انقر على العلامات لاستعراض نطاق عملنا بالمدن والدول
            </h2>
          </div>
          <div className="relative p-4 sm:p-6 rounded-[2.5rem] bg-gradient-to-b from-[#0A1D3F]/95 to-[#040A17]/95 border border-cyan-500/35 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden">
            <div className="w-full h-[520px] rounded-3xl overflow-hidden border border-cyan-500/40 relative z-20">
              {isClient && (
                <MapContainer 
                  key="unique-interactive-map-instance"
                  center={[25.276987, 45.284119]} 
                  zoom={5} 
                  scrollWheelZoom={false}
                  style={{ width: "100%", height: "100%", backgroundColor: "#0b1b3d" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {mapLocations.map((loc, idx) => (
                    <CircleMarker 
                      key={idx}
                      center={[loc.lat, loc.lng]}
                      radius={12}
                      pathOptions={{ 
                        color: "#0284c7", 
                        weight: 3, 
                        fillColor: "#22d3ee", 
                        fillOpacity: 0.95 
                      }}
                    >
                      <Popup>
                        <div style={{ color: "#0B1B3D", textAlign: "right", minWidth: "150px" }}>
                          <strong style={{ fontSize: "14px", display: "block", marginBottom: "4px" }}>
                            {loc.name}
                          </strong>
                          <p style={{ margin: 0, fontSize: "12px", color: "#334155" }}>
                            {loc.desc}
                          </p>
                        </div>
                      </Popup>
                    </CircleMarker>
                  ))}
                </MapContainer>
              )}
            </div>
            <div className="mt-8 text-center pt-6 border-t border-cyan-500/20 relative z-30">
              <p className="text-xs sm:text-sm text-gray-300 mb-6">
                هل يتواجد نشاطك التجاري في أي مدينة أخرى؟ نحن نقدم خدماتنا عن بُعد وفي الموقع لكافة الأقطار العربية.
              </p>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-sky-950 font-black py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] text-sm sm:text-base"
              >
                <span>ابدأ استشارتك الإقليمية الآن</span>
                <span>←</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* القسم السادس: الكروت الذهبية والخطوط الفضية الساطعة */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-amber-400/30" id="golden-strategies">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.06),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/30 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              ريادة الهندسة البرمجية والمحتوى
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-6 tracking-tight mb-4 text-white">
              أساسيات التقنية والصدارة في محركات البحث
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              معايير تشغيلية مذهلة مدعومة بإطارات ذهبية وأطياف فضية ساطعة لضمان تثبيت موقعك بأقوى كلمات البحث المرجعية.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goldenCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={idx}
                  className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-[#0F2248] to-[#071329] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
                  style={{
                    border: '1px solid rgba(251, 191, 36, 0.45)',
                    boxShadow: '0 0 25px rgba(251, 191, 36, 0.08), inset 0 0 15px rgba(226, 232, 240, 0.1)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -6, 
                    borderColor: 'rgba(226, 232, 240, 0.9)', 
                    boxShadow: '0 0 35px rgba(251, 191, 36, 0.25), inset 0 0 20px rgba(226, 232, 240, 0.25)' 
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-80 group-hover:opacity-100 group-hover:shadow-[0_0_12px_#e2e8f0] transition-all" />
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-sky-950 border border-amber-400/40 group-hover:border-slate-200 flex items-center justify-center text-amber-400 group-hover:text-slate-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                        <CardIcon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                        {card.badge}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black mb-2 text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-300 mb-4 tracking-wide font-mono">
                      {card.subtitle}
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200/15 flex items-center justify-between text-xs text-slate-200 font-bold">
                    <span>تحسين مستمر وأداء قوي</span>
                    <span className="text-amber-400 group-hover:translate-x-1 transition-transform">✓ معتمد</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* القسم السابع والأخير: أسباب الاستعانة بأفضل شركة سيو في الإمارات (خلفية ذهبية، حواف فضي، خطوط داخلية كحلي) */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#071329] border-t border-amber-400/30" id="seo-reasons-uae">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,191,36,0.06),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/30 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              الضرورة التسويقية للريادة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-6 tracking-tight mb-4 text-white">
              أسباب الاستعانة بأفضل شركة سيو في الإمارات
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              أصبح التعاون مع شركات تحسين محركات البحث خطوة استراتيجية حتمية لضمان الانتشار الواسع والترويج الفعّال للخدمات والمنتجات أمام الجمهور المستهدف بدقة واحترافية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            {/* كارت 01: زيادة عدد زيارات الموقع */}
            <div 
              className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
              style={{
                border: '2px solid #e2e8f0',
                boxShadow: '0 0 30px rgba(226, 232, 240, 0.4), inset 0 0 20px rgba(11, 27, 61, 0.45)'
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-slate-100 to-transparent shadow-[0_0_15px_#ffffff]" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-[#0B1B3D] text-amber-300 border border-slate-200 shadow-lg">
                    01 / نمو الزيارات
                  </span>
                  <span className="text-2xl font-black text-[#0B1B3D] drop-shadow-sm">📈</span>
                </div>
                <h3 className="text-2xl font-black mb-3 text-[#0B1B3D] leading-snug">
                  مضاعفة زيارات المنصة والوصول للجمهور
                </h3>
                <p className="text-[#0B1B3D] font-medium text-sm sm:text-base leading-relaxed">
                  يدفعك السيو نحو صدارة نتائج البحث الأولى، ليظهر موقعك أمام أعداد ضخمة من العملاء المهتمين. بتصميم احترافي وتجربة تسوق ممتعة، نضمن تحويل هؤلاء الزوار إلى مشترين دائمين لرفع أرباحك في وقت قياسي.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#0B1B3D]/25 flex items-center justify-between text-xs text-[#0B1B3D] font-extrabold">
                <span>صدارة بحثية مؤكدة</span>
                <span>نتائج مباشرة ✓</span>
              </div>
            </div>

            {/* كارت 02: خفض تكلفة التسويق */}
            <div 
              className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
              style={{
                border: '2px solid #e2e8f0',
                boxShadow: '0 0 30px rgba(226, 232, 240, 0.4), inset 0 0 20px rgba(11, 27, 61, 0.45)'
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-slate-100 to-transparent shadow-[0_0_15px_#ffffff]" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-[#0B1B3D] text-amber-300 border border-slate-200 shadow-lg">
                    02 / كفاءة التكلفة
                  </span>
                  <span className="text-2xl font-black text-[#0B1B3D] drop-shadow-sm">💰</span>
                </div>
                <h3 className="text-2xl font-black mb-3 text-[#0B1B3D] leading-snug">
                  خفض ميزانيات التسويق وتحقيق الكفاءة
                </h3>
                <p className="text-[#0B1B3D] font-medium text-sm sm:text-base leading-relaxed">
                  نقدم حلول تحسين محركات البحث بتكاليف اقتصادية ومدروسة. تتيح لك هذه التقنية الترويج لمنتجاتك بكفاءة عالية واستهداف العملاء الفعليين خلال أوقات قياسية دون إهدار للموارد المالية.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#0B1B3D]/25 flex items-center justify-between text-xs text-[#0B1B3D] font-extrabold">
                <span>عائد استثماري ذكي</span>
                <span>تكلفة مخفضة ✓</span>
              </div>
            </div>

            {/* كارت 03: تقديم حركة مرور على المدى الطويل */}
            <div 
              className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
              style={{
                border: '2px solid #e2e8f0',
                boxShadow: '0 0 30px rgba(226, 232, 240, 0.4), inset 0 0 20px rgba(11, 27, 61, 0.45)'
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-slate-100 to-transparent shadow-[0_0_15px_#ffffff]" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-[#0B1B3D] text-amber-300 border border-slate-200 shadow-lg">
                    03 / استدامة المرور
                  </span>
                  <span className="text-2xl font-black text-[#0B1B3D] drop-shadow-sm">⏳</span>
                </div>
                <h3 className="text-2xl font-black mb-3 text-[#0B1B3D] leading-snug">
                  تدفق مستدام لحركة المرور طويل الأمد
                </h3>
                <p className="text-[#0B1B3D] font-medium text-sm sm:text-base leading-relaxed">
                  يتفوق السيو على الإعلانات المدفوعة بتقديم نتائج مستدامة وطويلة المدى، مما يجعله الأداة الأقوى في تاريخ التسويق الرقمي لتطوير المبيعات وتعظيم العائد الاستثماري لمشروعك بمرور الوقت.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#0B1B3D]/25 flex items-center justify-between text-xs text-[#0B1B3D] font-extrabold">
                <span>استمرارية وثبات</span>
                <span>نتائج طويلة الأمد ✓</span>
              </div>
            </div>

            {/* كارت 04: تنظيم المحتوى */}
            <div 
              className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
              style={{
                border: '2px solid #e2e8f0',
                boxShadow: '0 0 30px rgba(226, 232, 240, 0.4), inset 0 0 20px rgba(11, 27, 61, 0.45)'
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-slate-100 to-transparent shadow-[0_0_15px_#ffffff]" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-[#0B1B3D] text-amber-300 border border-slate-200 shadow-lg">
                    04 / هندسة المحتوى
                  </span>
                  <span className="text-2xl font-black text-[#0B1B3D] drop-shadow-sm">🎯</span>
                </div>
                <h3 className="text-2xl font-black mb-3 text-[#0B1B3D] leading-snug">
                  تنظيم وهيكلة المحتوى الاحترافي
                </h3>
                <p className="text-[#0B1B3D] font-medium text-sm sm:text-base leading-relaxed">
                  نعمل على استخراج الكلمات المفتاحية الأكثر استقطاباً للبحث، مع توفير بصريات وصور عالية الجودة ومضغوطة بعناية فائقة لمنع أي تباطؤ أو خلل في سرعة أداء الموقع ومنصتك الرقمية.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#0B1B3D]/25 flex items-center justify-between text-xs text-[#0B1B3D] font-extrabold">
                <span>أداء وسرعة فائقة</span>
                <span>محتوى منظم ✓</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}