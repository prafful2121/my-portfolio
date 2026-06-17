import { ScrollReveal } from "./ui/ScrollReveal";

export function WorkTransition() {
  return (
    <section 
      className="pt-12 pb-4 md:pt-16 md:pb-6 relative overflow-hidden" 
      style={{ background: "#F8F8F6" }}
    >
      {/* High-contrast golden sweep keyframe animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes textSweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .highlight-sweep {
          background: linear-gradient(90deg, #B58204 0%, #F4C542 50%, #B58204 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textSweep 6s linear infinite;
          display: inline;
        }
      `}} />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 text-center">
        <ScrollReveal variant="fade-up" duration={1000}>
          {/* Small label above the headline */}
          <div className="text-[10px] tracking-[0.25em] text-[#6B6B68] font-bold uppercase mb-5 flex items-center justify-center gap-3 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4C542]" />
            OUR APPROACH
          </div>

          {/* Large editorial headline split into 3 lines on all screens */}
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.01em",
              maxWidth: "1150px",
            }}
            className="tracking-tight uppercase mx-auto flex flex-col gap-2 md:gap-3.5 text-[16px] xs:text-[19px] sm:text-[28px] md:text-[46px] lg:text-[60px] xl:text-[68px] leading-[1.2] md:leading-[1.05]"
          >
            <span className="block whitespace-nowrap">
              Built with <span className="highlight-sweep">Advanced AI Tools</span>
            </span>
            <span className="block whitespace-nowrap">
              Delivered through <span className="highlight-sweep">AI-Powered Workflows</span>
            </span>
            <span className="block whitespace-nowrap">
              Refined to <span className="highlight-sweep">Agency & Studio Standards</span>
            </span>
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
