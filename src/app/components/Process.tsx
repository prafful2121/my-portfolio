import { ScrollReveal } from "./ui/ScrollReveal";

const steps = [
  {
    n: "01",
    title: "DISCOVER & STRATEGIZE",
    desc: "We analyze the product, map target audience demographics, study marketplace competitors, and define precise visual goals.",
  },
  {
    n: "02",
    title: "DESIGN & CREATE",
    desc: "We transform ideas into premium creative assets through our custom high-fidelity AI pipeline, strategic design, and studio-grade production.",
  },
  {
    n: "03",
    title: "ITERATE & REFINE",
    desc: "Nothing ships until it's perfect. We gather detailed feedback and iterate on framing, grading, and text elements.",
  },
  {
    n: "04",
    title: "FINALIZE & LAUNCH",
    desc: "We deliver pixel-perfect, platform-native asset bundles fully optimized for immediate upload on Amazon, Myntra, or Shopify.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-12 md:py-24 relative overflow-hidden" style={{ background: "#F8F8F6" }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes linePulseHorizontal {
          0% { left: 0%; opacity: 0; }
          2% { opacity: 1; }
          15% { left: 0%; }
          25% { left: 33.333%; }
          40% { left: 33.333%; }
          50% { left: 66.666%; }
          65% { left: 66.666%; }
          75% { left: 100%; }
          85% { left: 100%; opacity: 1; }
          90% { opacity: 0; }
          100% { left: 0%; opacity: 0; }
        }

        @keyframes nodeGlow-1 {
          0%, 15%, 85%, 100% {
            border-color: #F4C542;
            box-shadow: 0 0 25px rgba(244, 197, 66, 0.6), inset 0 0 10px rgba(244, 197, 66, 0.2);
            color: #F4C542;
            transform: scale(1.12);
          }
          22%, 78% {
            border-color: rgba(17, 17, 17, 0.08);
            box-shadow: none;
            color: #111111;
            transform: scale(1);
          }
        }

        @keyframes nodeGlow-2 {
          0%, 20%, 45%, 100% {
            border-color: rgba(17, 17, 17, 0.08);
            box-shadow: none;
            color: #111111;
            transform: scale(1);
          }
          25%, 38% {
            border-color: #F4C542;
            box-shadow: 0 0 25px rgba(244, 197, 66, 0.6), inset 0 0 10px rgba(244, 197, 66, 0.2);
            color: #F4C542;
            transform: scale(1.12);
          }
        }

        @keyframes nodeGlow-3 {
          0%, 45%, 70%, 100% {
            border-color: rgba(17, 17, 17, 0.08);
            box-shadow: none;
            color: #111111;
            transform: scale(1);
          }
          50%, 63% {
            border-color: #F4C542;
            box-shadow: 0 0 25px rgba(244, 197, 66, 0.6), inset 0 0 10px rgba(244, 197, 66, 0.2);
            color: #F4C542;
            transform: scale(1.12);
          }
        }

        @keyframes nodeGlow-4 {
          0%, 70%, 95% {
            border-color: rgba(17, 17, 17, 0.08);
            box-shadow: none;
            color: #111111;
            transform: scale(1);
          }
          75%, 90% {
            border-color: #F4C542;
            box-shadow: 0 0 25px rgba(244, 197, 66, 0.6), inset 0 0 10px rgba(244, 197, 66, 0.2);
            color: #F4C542;
            transform: scale(1.12);
          }
        }

        @keyframes textGlow-1 {
          0%, 15%, 85%, 100% {
            opacity: 1;
            transform: translateY(-6px) scale(1.03);
          }
          22%, 78% {
            opacity: 0.5;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes textGlow-2 {
          0%, 20%, 45%, 100% {
            opacity: 0.5;
            transform: translateY(0) scale(1);
          }
          25%, 38% {
            opacity: 1;
            transform: translateY(-6px) scale(1.03);
          }
        }

        @keyframes textGlow-3 {
          0%, 45%, 70%, 100% {
            opacity: 0.5;
            transform: translateY(0) scale(1);
          }
          50%, 63% {
            opacity: 1;
            transform: translateY(-6px) scale(1.03);
          }
        }

        @keyframes textGlow-4 {
          0%, 70%, 95% {
            opacity: 0.5;
            transform: translateY(0) scale(1);
          }
          75%, 90% {
            opacity: 1;
            transform: translateY(-6px) scale(1.03);
          }
        }

        @keyframes pulseVertical-0 {
          0%, 15% { top: 0%; opacity: 0; }
          16% { opacity: 1; }
          24% { opacity: 1; }
          25%, 100% { top: 100%; opacity: 0; }
        }

        @keyframes pulseVertical-1 {
          0%, 40% { top: 0%; opacity: 0; }
          41% { opacity: 1; }
          49% { opacity: 1; }
          50%, 100% { top: 100%; opacity: 0; }
        }

        @keyframes pulseVertical-2 {
          0%, 65% { top: 0%; opacity: 0; }
          66% { opacity: 1; }
          74% { opacity: 1; }
          75%, 100% { top: 100%; opacity: 0; }
        }

        .animate-line-pulse-horizontal {
          animation: linePulseHorizontal 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-node-glow-0 {
          animation: nodeGlow-1 4s infinite ease-in-out;
        }

        .animate-node-glow-1 {
          animation: nodeGlow-2 4s infinite ease-in-out;
        }

        .animate-node-glow-2 {
          animation: nodeGlow-3 4s infinite ease-in-out;
        }

        .animate-node-glow-3 {
          animation: nodeGlow-4 4s infinite ease-in-out;
        }

        .animate-text-glow-0 {
          animation: textGlow-1 4s infinite ease-in-out;
          transform-origin: left top;
        }

        .animate-text-glow-1 {
          animation: textGlow-2 4s infinite ease-in-out;
          transform-origin: left top;
        }

        .animate-text-glow-2 {
          animation: textGlow-3 4s infinite ease-in-out;
          transform-origin: left top;
        }

        .animate-text-glow-3 {
          animation: textGlow-4 4s infinite ease-in-out;
          transform-origin: left top;
        }

        .animate-pulse-vertical-0 {
          animation: pulseVertical-0 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-pulse-vertical-1 {
          animation: pulseVertical-1 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-pulse-vertical-2 {
          animation: pulseVertical-2 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .group:hover .animate-node-glow-0,
        .group:hover .animate-node-glow-1,
        .group:hover .animate-node-glow-2,
        .group:hover .animate-node-glow-3 {
          border-color: #F4C542 !important;
          box-shadow: 0 0 30px rgba(244, 197, 66, 0.8), inset 0 0 12px rgba(244, 197, 66, 0.3) !important;
          color: #F4C542 !important;
          transform: scale(1.15) !important;
        }

        .group:hover .animate-text-glow-0,
        .group:hover .animate-text-glow-1,
        .group:hover .animate-text-glow-2,
        .group:hover .animate-text-glow-3 {
          opacity: 1 !important;
          transform: translateY(-8px) scale(1.05) !important;
        }
      `}} />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <ScrollReveal variant="fade-up" className="mb-12 md:mb-20 border-b border-[rgba(17,17,17,0.06)] pb-8">
          <div className="text-[10px] tracking-[0.25em] text-[#6B6B68] font-bold uppercase mb-4">
            Our Workflow
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
            HOW WE CREATE RESULTS
          </h2>
        </ScrollReveal>

        {/* Workflow timeline wrapper */}
        <div className="relative">
          {/* Connector timeline line (Desktop) */}
          <div
            className="absolute top-8 left-[32px] right-[calc(25%-32px)] h-[2px] bg-[rgba(17,17,17,0.06)] hidden lg:block"
          >
            {/* Traveling pulse dot on desktop */}
            <div className="absolute top-[-4px] w-[10px] h-[10px] bg-[#F4C542] rounded-full shadow-[0_0_8px_#F4C542] animate-line-pulse-horizontal" />
          </div>

          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <ScrollReveal
                key={s.n}
                variant="fade-up"
                delay={i * 100}
                className="relative w-full group flex flex-row lg:flex-col gap-6"
              >
                {/* Visual indicator node circle */}
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div
                    className={`w-16 h-16 border border-[rgba(17,17,17,0.08)] rounded-full flex items-center justify-center bg-white shadow-sm transition-all duration-500 z-10 animate-node-glow-${i}`}
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "24px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.n}
                  </div>

                  {/* Vertical line segment (Mobile/Tablet) */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-[64px] bottom-[-48px] left-[31px] w-[2px] bg-[rgba(17,17,17,0.06)] lg:hidden">
                      {/* Traveling pulse dot on mobile */}
                      <div className={`absolute left-[-4px] w-[10px] h-[10px] bg-[#F4C542] rounded-full shadow-[0_0_8px_#F4C542] animate-pulse-vertical-${i}`} />
                    </div>
                  )}
                </div>

                {/* Text description */}
                <div className={`flex flex-col gap-3 lg:gap-4 flex-grow pt-2 lg:pt-0 transition-all duration-500 animate-text-glow-${i}`}>
                  <div>
                    <span
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "14px", color: "#F4C542", letterSpacing: "0.12em" }}
                      className="font-bold font-mono"
                    >
                      PHASE {s.n}
                    </span>
                    <h3
                      className="mt-1.5"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "30px",
                        color: "#111111",
                        letterSpacing: "0.02em",
                        lineHeight: 1,
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>

                  <div className="w-8 h-px bg-[#F4C542] group-hover:w-12 transition-all duration-300" />

                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: "#6B6B68",
                      lineHeight: "1.7",
                      fontWeight: 300,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
