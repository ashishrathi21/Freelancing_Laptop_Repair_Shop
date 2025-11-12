"use client";

import { RetroGrid } from "@/components/ui/retro-grid";

function RetroGridDemo() {
  return (
    <div className="relative flex h-[400px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 md:shadow-xl">

      {/* ✅ Responsive Text */}
      <span className="
        pointer-events-none z-10 whitespace-pre-wrap 
        bg-gradient-to-b from-[#34d399] via-[#14b8a6] to-[#0ea5e9] 
        bg-clip-text text-center font-bold leading-none tracking-tighter text-transparent
        text-3xl sm:text-4xl md:text-6xl lg:text-7xl
      ">
        M-Tech Laptop Services
      </span>

      <RetroGrid />
    </div>
  );
}

export default RetroGridDemo;
