"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-[#0D2B42] flex items-center justify-center">
      
      {/* حاوية الفيديو تتكيف بدون قص عبر أبعاد نسبة عرض لارتفاع مرنة */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none flex items-center justify-center">
        <iframe
          className="w-[177.77vh] min-w-full h-[56.25vw] min-h-full object-cover scale-125"
          src="https://www.youtube-nocookie.com/embed/jl-aa1H3gUM?autoplay=1&mute=1&loop=1&playlist=jl-aa1H3gUM&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
          title="Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: 'none' }}
        />
      </div>

      {/* طبقة التعتيم فوق الفيديو لضمان وضوح النصوص */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
      
      {/* المحتوى يطفو فوق الفيديو في المنتصف تماماً */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-xl sm:text-3xl md:text-6xl font-black mb-2 md:mb-6 leading-tight max-w-4xl">
          تصميم مواقع وردبريس احترافية مع تصدر محركات البحث (SEO)
        </h1>
        <p className="text-xs sm:text-base md:text-xl mb-4 md:mb-8 max-w-2xl">
          نحول رؤيتك إلى واقع رقمي سريع ومربح.
        </p>
        <a 
          href="/wizard" 
          className="inline-block bg-amber-200 text-sky-950 font-black py-2 px-6 md:py-3 md:px-8 rounded-full hover:bg-white transition-all shadow-xl text-xs sm:text-sm md:text-lg"
        >
          احسب تكلفة مشروعك
        </a>
      </div>
    </section>
  );
}