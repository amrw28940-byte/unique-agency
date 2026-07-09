"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "تخطيط الأعمال الاستراتيجي",
    description: "نحن نؤمن بأن البداية الصحيحة هي أساس النجاح. نعمل معكم جنباً إلى جنب لتحليل احتياجات مؤسستكم، وتطوير خارطة طريق واضحة للعلاقات والأهداف التي ستشكل المرحلة القادمة من نمو أعمالكم، مع ضمان مواءمة التقنية مع رؤيتكم التجارية."
  },
  {
    title: "تنفيذ الأعمال المتكامل",
    description: "لا نكتفي بالتخطيط فقط، بل نتولى التنفيذ بأعلى المعايير. نقدم خدمات تسويق إلكتروني متكاملة، بدءاً من حملات الوصول للجمهور المستهدف وصولاً إلى تحليل البيانات الدقيق للنتائج، لضمان تحقيق أفضل عائد على الاستثمار لعملك في السوق."
  },
  {
    title: "إدارة البرامج والشراكات",
    description: "بناء الشراكات هو جوهر العمل الناجح. نقوم بإدارة علاقات دقيقة ومستمرة مع أصحاب المصلحة، ونبني شراكات ذكية تعزز من مكانة شركتك وتفتح أمامك فرصاً جديدة للتوسع والابتكار في بيئة أعمال تنافسية."
  },
  {
    title: "فحص وتدقيق المواقع الشامل",
    description: "موقعك هو واجهتك الأولى. نقوم بعمل فحص تقني وأمني شامل، لاكتشاف الثغرات وتدقيق الأداء، مع تحسين تجربة المستخدم وسرعة التحميل لضمان أن موقعك لا يعمل فقط بكفاءة، بل يتفوق على منافسيك في محركات البحث."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-sky-950">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">لماذا تختارنا؟</h2>
          <p className="text-sky-200 text-lg">رحلتنا نحو تميز أعمالكم الرقمية</p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              // تم إزالة flex و gap ليتمدد النص بعرض الكارت بالكامل
              className="bg-sky-900/40 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-3xl hover:border-yellow-400 transition-all duration-300 w-full"
            >
              <h3 className="text-2xl font-bold text-white mb-3 hover:text-yellow-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sky-100/80 leading-relaxed text-lg w-full text-justify">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}