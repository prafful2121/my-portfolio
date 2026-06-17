import React from "react";

interface ArtProps {
  className?: string;
  size?: number;
}

/**
 * A beautiful translucent glass orb with radial gradients, outer glow, and backdrop-blur.
 */
export function GlassOrb({ className = "", size = 200 }: ArtProps) {
  return (
    <div
      className={`relative pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-[16px] border border-white/20 shadow-[0_8px_32px_0_rgba(17,17,17,0.06),inset_0_4px_16px_0_rgba(255,255,255,0.25)]" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35)_0%,rgba(244,197,66,0.1)_50%,rgba(17,17,17,0.05)_100%)]" />
      {/* Specular highlight */}
      <div className="absolute top-[12%] left-[12%] w-[25%] h-[25%] rounded-full bg-white/60 blur-[1px]" />
    </div>
  );
}

/**
 * An organic, fluid chrome blob with metallic reflections using multiple SVG gradients.
 */
export function ChromeLiquid({ className = "", size = 300 }: ArtProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="chromeGrad" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#e5e5e0" />
          <stop offset="45%" stopColor="#8d8d88" />
          <stop offset="55%" stopColor="#b3b3ad" />
          <stop offset="70%" stopColor="#F4C542" stopOpacity="0.4" />
          <stop offset="85%" stopColor="#111111" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <filter id="specularShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" floodColor="#111111" floodOpacity="0.08" />
        </filter>
      </defs>
      <path
        d="M50,150 C70,170 120,180 150,150 C180,120 170,70 150,50 C120,30 70,20 50,50 C30,80 30,130 50,150 Z"
        fill="url(#chromeGrad)"
        filter="url(#specularShadow)"
        className="transition-all duration-[2000ms] ease-in-out"
      />
    </svg>
  );
}

/**
 * A luxury gold/accent sculpture with fine structural lines, overlapping geometry and ambient light.
 */
export function GoldSculpture({ className = "", size = 250 }: ArtProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4C542" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#B89324" />
        </linearGradient>
      </defs>
      {/* Structural wireframe rings */}
      <circle cx="100" cy="100" r="75" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="100" r="55" stroke="url(#goldGrad)" strokeWidth="1.5" />
      <ellipse cx="100" cy="100" rx="75" ry="25" stroke="url(#goldGrad)" strokeWidth="1.2" transform="rotate(30 100 100)" />
      <ellipse cx="100" cy="100" rx="75" ry="25" stroke="url(#goldGrad)" strokeWidth="1.2" transform="rotate(-30 100 100)" />
      {/* Floating coordinates dots */}
      <circle cx="100" cy="25" r="3" fill="#F4C542" />
      <circle cx="100" cy="175" r="3" fill="#F4C542" />
      <circle cx="25" cy="100" r="3" fill="#111111" />
      <circle cx="175" cy="100" r="3" fill="#F4C542" />
    </svg>
  );
}

/**
 * A layered glass panel mockup container designed to overlay editorial components.
 */
export function GlassPlate({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`backdrop-blur-[12px] bg-white/5 border border-white/20 shadow-[0_8px_32px_0_rgba(17,17,17,0.04)] rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
