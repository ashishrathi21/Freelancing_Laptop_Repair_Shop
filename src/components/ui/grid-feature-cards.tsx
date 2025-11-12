import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
  feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardPorps) {
  const p = genRandomPattern();

  return (
    <div
      className={cn(
        'relative overflow-hidden p-6 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors duration-300',
        'border border-neutral-800',
        className
      )}
      {...props}
    >
      {/* Background Pattern */}
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-white/5 to-white/0 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-white/5 stroke-white/15 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>

      {/* Icon */}
      <feature.icon
        className="text-white/80 size-6"
        strokeWidth={1.2}
        aria-hidden
      />

      {/* Title */}
      <h3 className="mt-10 text-sm md:text-base text-white/90">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-neutral-400 relative z-20 mt-2 text-xs font-light">
        {feature.description}
      </p>
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<'svg'> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />

      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
              className="fill-white/10"
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(length?: number): number[][] {
  length = length ?? 5;
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7, // x: 7–10
    Math.floor(Math.random() * 6) + 1, // y: 1–6
  ]);
}
