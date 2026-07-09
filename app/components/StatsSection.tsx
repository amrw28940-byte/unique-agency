"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const stats = [
  { label: "موقع إلكتروني", value: 50 },
  { label: "ظهور", value: 5 },
  { label: "دقيقة فيديو AI", value: 2000 },
  { label: "زيادة مبيعات", value: 150 },
];

// مكون العداد الرقمي
function Counter({ to }: { to: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}

export default function StatsSection() {
  return (
    <section className="py-24 px-6 bg-[#0D2B42] relative overflow-hidden">
      {/* خلفية جمالية (نقاط) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* يمكنك إضافة زخارف أو نقاط هنا إذا أردت */}
      </div>

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">
          تأثيرنا بالأرقام
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-4">
                <Counter to={stat.value} />
              </div>
              <p className="text-white/90 font-bold text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}