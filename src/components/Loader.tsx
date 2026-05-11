import { useState, useEffect } from "react";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [rendered, setRendered] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate loading
    const duration = 2000; // 2 seconds to reach 100%
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Quando chega em 100%, a tela fica preta (o estado muda a classe de bg).
      // Depois de um momento mínimo para ver a tela preta, ele some revelando o site.
      setTimeout(() => setVisible(false), 400);
      // Desmonta do DOM após a transição de opacidade do loader
      setTimeout(() => setRendered(false), 900);
    }
  }, [progress]);

  if (!rendered) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 flex flex-col ${progress >= 100 ? "bg-black" : "bg-[#1041D7]"
        } ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* Logo no bottom inferior esquerdo com animação de fade in */}
      <img
        src="/logo.png"
        alt="Zantana Logo"
        className={`absolute bottom-8 left-8 w-32 h-auto transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"
          }`}
      />

      {/* Porcentagem no bottom inferior direito */}
      <div 
        className="absolute bottom-8 right-8 text-[120px] text-white leading-none"
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
}
