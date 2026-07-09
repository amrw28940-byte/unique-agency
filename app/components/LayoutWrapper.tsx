"use client";
import { useEffect, useState } from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [snowflakes, setSnowflakes] = useState<any[]>([]);

  useEffect(() => {
    const s = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 5 + 3}px`,
      delay: `${Math.random() * 12}s`,
      duration: `${Math.random() * 10 + 7}s`,
      opacity: Math.random() * 0.6 + 0.4,
    }));
    setSnowflakes(s);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {snowflakes.map((snow) => (
          <div
            key={snow.id}
            className="absolute bg-white rounded-full animate-snow"
            style={{
              top: "-20px",
              left: snow.left,
              width: snow.size,
              height: snow.size,
              opacity: snow.opacity,
              animationDelay: snow.delay,
              animationDuration: snow.duration,
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {children}
      </div>

      <style jsx global>{`
        @keyframes snowFallAndSway {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(50vh) translateX(25px); }
          100% { transform: translateY(105vh) translateX(-15px); }
        }
        .animate-snow { animation: snowFallAndSway infinite linear; }
      `}</style>
    </>
  );
}