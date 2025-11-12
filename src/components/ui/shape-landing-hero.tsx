"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import InteractiveHoverButton from "@/components/Button";
import React from "react";
import motherboard from "../../assets/motherboard.png";
import setting from "../../assets/setting.png";

/* -----------------------------------------------------------
 ✅ ElegantShape – Responsive
----------------------------------------------------------- */
interface ElegantShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

/* -----------------------------------------------------------
 ✅ HeroGeometric – Fully Responsive
----------------------------------------------------------- */
interface HeroProps {
  badge?: string;
  title1?: string;
  title2?: string;
}

function HeroGeometric({
  badge = "M-Tech Laptop Services",
  title1 = "Fast & Reliable Laptop Repair",
  title2 = "Near You",
}: HeroProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Animated Shapes (responsive positioning) */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={500}
          height={120}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-20%] sm:left-[-10%] lg:left-[-5%] top-[10%] sm:top-[15%]"
        />

        <ElegantShape
          delay={0.5}
          width={420}
          height={110}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-15%] sm:right-[0%] top-[70%]"
        />

        <ElegantShape
          delay={0.4}
          width={260}
          height={70}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[0%] sm:left-[10%] bottom-[8%]"
        />
      </div>

      {/* ✅ Responsive Images */}
      <img
        src={setting}
        className="h-[120px] sm:h-[180px] md:h-[230px] xl:h-[260px] absolute z-20 top-[12%] left-[8%] sm:left-[12%] pl-[70px]"
        alt=""
      />

      <img
        src={setting}
        className="h-0 sm:h-[180px] md:h-[230px] xl:h-[260px] absolute z-20 top-[55%] left-[58%] sm:left-[65%]"
        alt=""
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-14 text-center">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 sm:mb-10"
        >
          <Circle className="h-2 w-2 fill-rose-500/80" />
          <span className="text-xs sm:text-sm text-white/60">{badge}</span>
        </motion.div>

        {/* Responsive Title */}
        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            {title1}
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            {title2}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl mx-auto text-sm sm:text-lg md:text-xl text-white/40 mb-10 px-2 sm:px-4"
        >
          Get same-day repair, genuine parts, and professional service at affordable prices.
        </motion.p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <InteractiveHoverButton text="Explore" />
        </div>
      </div>

      {/* Top & Bottom Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
