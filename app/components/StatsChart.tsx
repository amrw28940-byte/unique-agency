"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { year: "2015", clicks: 24000, impressions: 26000, position: 36000 },
  { year: "2016", clicks: 9000, impressions: 27000, position: 32000 },
  { year: "2017", clicks: 14000, impressions: 17000, position: 24000 },
  { year: "2018", clicks: 4000, impressions: 22000, position: 28000 },
  { year: "2019", clicks: 7500, impressions: 11000, position: 19000 },
  { year: "2020", clicks: 5000, impressions: 12500, position: 16000 },
];

export default function StatsChart() {
  return (
    <section className="py-24 px-6 bg-sky-950 text-white" id="stats" aria-label="إحصاءات الأداء">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* جزء الشرح (اليسار) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-black mb-8 font-cairo">نستخدم الإحصاءات لتقدير قيمة النتائج</h2>
          <div className="space-y-6 text-sky-100/90 font-medium leading-relaxed">
            <p><strong className="text-cyan-400 font-bold">النـقرات:</strong> هي عدد المرات التي ضغط فيها المستخدم على رابط موقعك من نتائج البحث.</p>
            <p><strong className="text-blue-400 font-bold">الظهـور:</strong> هو عدد المرات التي ظهر فيها موقعك في نتائج البحث سواء تم الضغط عليه أم لا.</p>
            <p><strong className="text-indigo-400 font-bold">معدل موضع الإعلان:</strong> هو متوسط ترتيب ظهور صفحتك في نتائج البحث مقارنة بباقي المواقع.</p>
          </div>
        </motion.div>

        {/* جزء الرسم البياني (اليمين) - تم إلغاء البادينج الداخلي للمستطيل */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-96 w-full bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative flex flex-col justify-end"
        >
          <ResponsiveContainer width="100%" height="100%">
            {/* ضبط الـ margin إلى 0 في كل الاتجاهات لجعل التشارت يملأ المستطيل تماماً */}
            <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                {/* تدرج لوني للنقرات */}
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                </linearGradient>
                {/* تدرج لوني للظهور */}
                <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                </linearGradient>
                {/* تدرج لوني للموضع */}
                <linearGradient id="colorPosition" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              
              {/* إخفاء المحاور أو جعلها ناعمة لتعطي الطابع الممتد والمودرن */}
              <XAxis dataKey="year" stroke="#ffffff50" tickLine={false} axisLine={false} dy={-20} dx={10} style={{ fontSize: '12px', fontWeight: 'bold' }} />
              <YAxis hide={true} />
              
              {/* تعديل ستايل الـ Tooltip ليصبح زجاجي واحترافي */}
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "rgba(12, 74, 110, 0.9)", 
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.1)", 
                  borderRadius: "16px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  color: "#fff",
                  direction: "rtl",
                  textAlign: "right"
                }} 
              />
              
              {/* المنحنيات مع ربطها بالتدرجات اللونية المجهزة */}
              <Area type="monotone" dataKey="position" stroke="#6366f1" strokeWidth={2} fill="url(#colorPosition)" />
              <Area type="monotone" dataKey="impressions" stroke="#60a5fa" strokeWidth={2} fill="url(#colorImpressions)" />
              <Area type="monotone" dataKey="clicks" stroke="#22d3ee" strokeWidth={2} fill="url(#colorClicks)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
        
      </div>
    </section>
  );
}