import { useState, useRef } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";

const benefits = [
  {
    n: "01",
    title: "Faster Content Production",
    desc: "Our AI-accelerated creative workflow cuts project timelines in half without sacrificing premium artistic standards. High-volume, high-prestige assets delivered quickly.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="2" width="24" height="24" stroke="#F4C542" strokeWidth="1.5" />
        <path d="M14 6V14L19 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "AI-Powered Workflows",
    desc: "We utilize advanced AI generative tools for color grading, lighting adjustment, and asset upscaling, allowing a single studio to deliver team-sized scale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z" stroke="#F4C542" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Premium Visual Quality",
    desc: "Every single frame, layout, and pixel is held to top-tier global agency design standards. We create completely custom art direction — never using generic templates.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L26 10L22 24H6L2 10L14 2Z" stroke="#F4C542" strokeWidth="1.5" />
        <path d="M14 8L18 16H10L14 8Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Marketplace Native Expertise",
    desc: "Deep visual psychology expertise tailored to modern e-commerce platforms. We know exactly how to guide consumer eye paths and drive listing clicks.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#F4C542" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 2V6M14 22V26M2 14H6M22 14H26" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Conversion-Focused Art",
    desc: "We bridge fine digital design aesthetics with proven consumer conversion optimization, ensuring every visual assets directly strengthens your bottom line.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="2" width="24" height="24" stroke="#F4C542" strokeWidth="1.5" />
        <path d="M6 20L11 15L15 19L22 11M22 11H17M22 11V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function BenefitCard({ b, i }: { b: typeof benefits[0]; i: number }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
    }
  };

  return (
    <ScrollReveal
      variant="fade-up"
      delay={i * 100}
      className={`w-full flex ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-full bg-white border border-[rgba(17,17,17,0.06)] p-8 md:p-10 flex flex-col gap-6 transition-all duration-500 rounded-xl overflow-hidden cursor-default hover:border-[rgba(244,197,66,0.5)] hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(17,17,17,0.05)]"
      >
        {/* Cursor tracking radial glow backdrop */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(320px circle at ${coords.x}px ${coords.y}px, rgba(244,197,66,0.08) 0%, transparent 80%)`,
          }}
        />

        {/* Cursor tracking border glow reveal */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-xl"
          style={{
            opacity: isHovered ? 0.35 : 0,
            border: "2.5px solid #F4C542",
            maskImage: `radial-gradient(100px circle at ${coords.x}px ${coords.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(100px circle at ${coords.x}px ${coords.y}px, black 0%, transparent 100%)`,
          }}
        />

        {/* Content Details */}
        <div className="flex items-start justify-between relative z-10">
          <span className="text-[#111111] transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6">
            {b.icon}
          </span>
          <span
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "14px", color: "#6B6B68", letterSpacing: "0.1em" }}
            className="transition-colors duration-300 group-hover:text-[#F4C542] font-bold"
          >
            {b.n}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "30px",
            letterSpacing: "0.02em",
            lineHeight: 1.05,
            color: "#111111",
          }}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        >
          {b.title}
        </h3>

        <p
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#6B6B68", lineHeight: "1.7", fontWeight: 300 }}
          className="relative z-10 transition-colors duration-300 group-hover:text-[#111111]"
        >
          {b.desc}
        </p>

        {/* Visual progress bar line */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-[#F4C542] transition-all duration-[600ms] w-0 group-hover:w-full z-10"
        />
      </div>
    </ScrollReveal>
  );
}

export function WhyMe() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden" style={{ background: "#F8F8F6" }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20 border-b border-[rgba(17,17,17,0.06)] pb-8">
          <div>
            <div className="text-[10px] tracking-[0.25em] text-[#6B6B68] font-bold uppercase mb-4">
              Our Advantage
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(52px, 7vw, 90px)",
                lineHeight: 0.9,
                color: "#111111",
              }}
              className="tracking-tight"
            >
              WHY BRANDS WORK WITH US
            </h2>
          </div>
          <div className="w-px h-16 bg-[#F4C542] hidden md:block" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} b={b} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
