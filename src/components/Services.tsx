'use client';
import {
  Laptop,
  Monitor,
  Smartphone,
  Keyboard,
  Battery,
  HardDrive,
  Download,
  Database,
  Shield,
  Cpu,
} from 'lucide-react';

import { motion, useReducedMotion } from 'motion/react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
  {
    icon: Laptop,
    title: 'Laptop Repair & Maintenance',
    description: 'Complete laptop servicing and repair solutions',
  },
  {
    icon: Monitor,
    title: 'Computer Repair',
    description: 'Desktop PC troubleshooting and repairs',
  },
  {
    icon: Smartphone,
    title: 'Screen Replacement',
    description: 'LCD, LED, and touchscreen replacement',
  },
  {
    icon: Keyboard,
    title: 'Keyboard Replacement',
    description: 'All brands keyboard repair and replacement',
  },
  {
    icon: Battery,
    title: 'Battery & Adapter Replacement',
    description: 'Genuine battery and power adapter solutions',
  },
  {
    icon: HardDrive,
    title: 'Windows Installation',
    description: 'OS installation and configuration',
  },
  {
    icon: Download,
    title: 'Software & Driver Installation',
    description: 'Complete software setup and driver updates',
  },
  {
    icon: Database,
    title: 'Data Recovery',
    description: 'Recover lost or corrupted data safely',
  },
  {
    icon: Shield,
    title: 'Virus Removal & Speed Boost',
    description: 'Clean malware and optimize performance',
  },
];

export default function DemoOne() {
  return (
    <section id="services" className="py-16 md:py-32 bg-neutral-950 text-white">
      <div className="mx-auto min-w-3xl space-y-8 px-14">
        
        {/* Heading */}
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide md:text-4xl lg:text-5xl xl:font-extrabold">
            Our Services
          </h2>
          <p className="text-neutral-400 mt-4 text-sm md:text-base">
            Comprehensive repair and maintenance solutions for all your computing needs
          </p>
        </AnimatedContainer>

        {/* Cards Grid */}
        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-neutral-800/60 border border-neutral-800/60 bg-neutral-900 rounded-xl sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>

      </div>
    </section>
  );
}

/* Animation Container */
type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return children;

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
