"use client";
import React, { useState, useEffect } from 'react';

const addonsList = [
  { name: "WP Rocket", price: 5 }, { name: "LiteSpeed", price: 5 },
  { name: "Rank Math", price: 5 }, { name: "Yoast SEO", price: 5 },
  { name: "Elementor Pro", price: 5 }, { name: "Wordfence", price: 5 },
  { name: "Contact Form 7", price: 5 }, { name: "WooCommerce", price: 5 },
  { name: "JetPack", price: 5 }, { name: "UpdraftPlus", price: 5 }
];

export default function ProjectWizard() {
  const [service, setService] = useState("");
  const [platform, setPlatform] = useState("wp");
  const [pages, setPages] = useState(1);
  const [templateType, setTemplateType] = useState("free");
  const [templateName, setTemplateName] = useState("");
  const [elementor, setElementor] = useState("none");
  const [addons, setAddons] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    if (service === "web") {
      newTotal += (pages * 10);
      if (templateType === "paid") newTotal += 50; // سعر وهمي للقالب المدفوع
      if (elementor === "paid") newTotal += 5;
    }
    newTotal += (addons.length * 5);
    setTotal(newTotal);
  }, [pages, templateType, elementor, addons, service]);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 text-white shadow-2xl">
      {/* اختيار الخدمة */}
      <div className="mb-8">
        <label className="block mb-2 font-bold">الخدمة المطلوبة:</label>
        <select onChange={(e) => setService(e.target.value)} className="w-full bg-sky-900 p-3 rounded-lg">
          <option value="">اختر خدمة...</option>
          <option value="web">تصميم موقع إلكتروني</option>
          <option value="store">تصميم متجر إلكتروني</option>
          <option value="app">تصميم تطبيق أندرويد</option>
          <option value="app">تصميم فيديو ai </option>
          <option value="app">كتابة محتوى</option>
          <option value="app">خدمة باك لينك</option>
          <option value="app">خدمة جيست بوست</option>

        </select>
      </div>

      {service === "web" && (
        <div className="space-y-6 border-t border-white/20 pt-6">
          <div>
            <label className="block mb-2">نوع المنصة:</label>
            <select onChange={(e) => setPlatform(e.target.value)} className="w-full bg-sky-900 p-3 rounded-lg">
              <option value="wp">ووردبريس</option>
              <option value="next">Next.js</option>
            </select>
          </div>

          {platform === "wp" && (
            <>
              <div className="flex justify-between items-center">
                <label>عدد الصفحات (الصفحة 10$):</label>
                <input type="number" value={pages} onChange={(e) => setPages(Number(e.target.value))} className="w-20 bg-white/20 p-2 rounded text-center" />
              </div>

              <div>
                <label className="block mb-2">القالب:</label>
                <select onChange={(e) => setTemplateType(e.target.value)} className="w-full bg-sky-900 p-3 rounded-lg mb-2">
                  <option value="free">قالب مجاني</option>
                  <option value="paid">قالب مدفوع (50$)</option>
                </select>
                {templateType === "paid" && (
                  <select onChange={(e) => setTemplateName(e.target.value)} className="w-full bg-sky-800 p-3 rounded-lg">
                    <option value="">اختر قالب من القائمة...</option>
                    {["Astra Pro", "OceanWP", "Flatsome", "Divi", "Avada", "GeneratePress"].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                )}
              </div>

              <div>
                <label className="block mb-2">إليمنتور:</label>
                <select onChange={(e) => setElementor(e.target.value)} className="w-full bg-sky-900 p-3 rounded-lg">
                  <option value="none">بدون</option>
                  <option value="free">مجاني</option>
                  <option value="paid">مدفوع (5$)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {addonsList.map((a) => (
                  <label key={a.name} className="flex items-center gap-2">
                    <input type="checkbox" onChange={() => setAddons(prev => prev.includes(a.name) ? prev.filter(i => i !== a.name) : [...prev, a.name])} />
                    {a.name} (5$)
                  </label>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="mt-8 text-center text-3xl font-bold bg-white/10 p-4 rounded-xl">
        الإجمالي: {total}$
      </div>
    </div>
  );
}
