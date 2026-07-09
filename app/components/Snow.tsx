"use client";
import { useEffect, useState } from 'react';

export default function Snow() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  
  if (!mounted) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none', 
      zIndex: 50, // تم تقليل الـ zIndex قليلاً ليكون فوق السكاشن وتحت النافبار
      overflow: 'hidden' 
    }}>
      {Array.from({ length: 50 }).map((_, i) => (
        <div 
          key={i} 
          className="absolute bg-white/40 rounded-full animate-snow" 
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20px',
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${Math.random() * 10 + 8}s`,
            // إضافة تأثير خفيف للشفافية ليتناسب مع الخلفية الزرقاء
          }}
        />
      ))}
    </div>
  );
}