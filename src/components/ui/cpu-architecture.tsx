import { cn } from "@/lib/utils";
import React from "react";

export interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

const CpuArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  text = "CPU",
  showCpuConnections = true,
  animateText = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
}: CpuArchitectureSvgProps) => {
  return (
    <div className={cn("w-full h-full flex items-center justify-center", className)}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 100"
        preserveAspectRatio="xMidYMid meet"
        className="text-muted"
      >
        {/* ----------- PATHS GROUP ----------- */}
        <g stroke="currentColor" fill="none" strokeWidth="0.3">
          <path id="path-1" strokeDasharray="100 100" pathLength="100" d="M 10 20 h 79.5 q 5 0 5 5 v 30">
            {animateLines && (
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" />
            )}
          </path>

          <path id="path-2" strokeDasharray="100 100" pathLength="100" d="M 180 10 h -69.7 q -5 0 -5 5 v 30">
            {animateLines && (
              <animate attributeName="stroke-dashoffset" from="100" to="0" begin="0.1s" dur="1s" fill="freeze" />
            )}
          </path>

          <path id="path-3" d="M 130 20 v 21.8 q 0 5 -5 5 h -10">
            {animateLines && (
              <animate attributeName="stroke-dashoffset" from="100" to="0" begin="0.2s" dur="1s" fill="freeze" />
            )}
          </path>

          <path id="path-4" d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50">
            {animateLines && (
              <animate attributeName="stroke-dashoffset" from="100" to="0" begin="0.3s" dur="1s" fill="freeze" />
            )}
          </path>

          <path
            id="path-5"
            strokeDasharray="100 100"
            pathLength="100"
            d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
          >
            {animateLines && (
              <animate attributeName="stroke-dashoffset" from="100" to="0" begin="0.4s" dur="1s" fill="freeze" />
            )}
          </path>

          <path id="path-6" d="M 94.8 95 v -36">
            {animateLines && (
              <animate attributeName="stroke-dashoffset" from="100" to="0" begin="0.5s" dur="1s" fill="freeze" />
            )}
          </path>

          <path
            id="path-7"
            d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14"
          >
            {animateLines && (
              <animate attributeName="stroke-dashoffset" from="100" to="0" begin="0.6s" dur="1s" fill="freeze" />
            )}
          </path>

          <path id="path-8" d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20">
            {animateLines && (
              <animate attributeName="stroke-dashoffset" from="100" to="0" begin="0.7s" dur="1s" fill="freeze" />
            )}
          </path>
        </g>

        {/* ------- MOVING LIGHT PARTICLES ------- */}
        {[1,2,3,4,5,6,7,8].map((i) => (
          <g key={i} mask={`url(#cpu-mask-${i})`}>
            <circle
              cx="0"
              cy="0"
              r="8"
              fill={`url(#cpu-grad-${i})`}
            >
              {animateMarkers && (
                <animateMotion dur="5s" begin={`${(i-1)*0.2}s`} repeatCount="indefinite">
                  <mpath href={`#path-${i}`} />
                </animateMotion>
              )}
            </circle>
          </g>
        ))}

        {/* ----------- CPU BOX + TEXT ----------- */}
        <g>
          {showCpuConnections && (
            <g fill="url(#cpu-connection-gradient)">
              <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
              <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
            </g>
          )}

          <rect x="85" y="40" width="30" height="20" rx="2" fill="#181818" />

          <text
            x="92"
            y="52.5"
            fontSize="7"
            fill={animateText ? "url(#cpu-text-gradient)" : "white"}
            fontWeight="600"
            letterSpacing="0.05em"
          >
            {text}
          </text>
        </g>

        {/* ----------- MASKS + GRADIENTS ----------- */}
        <defs>
          {[1,2,3,4,5,6,7,8].map((i) => (
            <mask id={`cpu-mask-${i}`} key={i}>
              <path
                d={
                  {
                    1: "M 10 20 h 79.5 q 5 0 5 5 v 24",
                    2: "M 180 10 h -69.7 q -5 0 -5 5 v 24",
                    3: "M 130 20 v 21.8 q 0 5 -5 5 h -10",
                    4: "M 170 80 v -21.8 q 0 -5 -5 -5 h -50",
                    5: "M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20",
                    6: "M 94.8 95 v -36",
                    7: "M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14",
                    8: "M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20",
                  }[i]
                }
                stroke="white"
                strokeWidth="0.5"
              />
            </mask>
          ))}

          {/* Light gradients */}
          <radialGradient id="cpu-grad-1"><stop offset="0%" stopColor="#00E8ED"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          <radialGradient id="cpu-grad-2"><stop offset="0%" stopColor="#FFD800"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          <radialGradient id="cpu-grad-3"><stop offset="0%" stopColor="#830CD1"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          <radialGradient id="cpu-grad-4"><stop offset="0%" stopColor="white"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          <radialGradient id="cpu-grad-5"><stop offset="0%" stopColor="#22c55e"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          <radialGradient id="cpu-grad-6"><stop offset="0%" stopColor="#f97316"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          <radialGradient id="cpu-grad-7"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          <radialGradient id="cpu-grad-8"><stop offset="0%" stopColor="#f43f5e"/><stop offset="100%" stopColor="transparent"/></radialGradient>

          {/* Text animated gradient */}
          <linearGradient id="cpu-text-gradient">
            <stop offset="0%" stopColor="#666" />
            <stop offset="50%" stopColor="#fff" />
            <stop offset="100%" stopColor="#666" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export { CpuArchitecture };
