import { ScrollReveal } from "./ui/ScrollReveal";
import { GlassOrb, ChromeLiquid } from "./ui/AbstractArt";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-12 md:py-24 relative overflow-hidden"
      style={{ background: "#F8F8F6" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 relative z-10">
        {/* Large yellow card container */}
        <div
          className="relative bg-[#F4C542] rounded-3xl p-10 md:p-20 overflow-hidden border border-[#111111]/5 shadow-sm text-center flex flex-col items-center gap-8 md:gap-10"
        >
          {/* Internal floating art elements */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 opacity-45">
            <GlassOrb className="absolute -top-10 -left-10 animate-float-slow" size={240} />
            <ChromeLiquid className="absolute -bottom-16 -right-16 animate-float-reverse" size={260} />
          </div>

          {/* Big background text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
            aria-hidden
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(100px, 18vw, 240px)",
                color: "rgba(17,17,17,0.03)",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              CREATE FUTURE
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <ScrollReveal variant="scale-up" className="max-w-[840px]">
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(48px, 6.5vw, 96px)",
                  lineHeight: 0.9,
                  color: "#111111",
                }}
                className="tracking-tight"
              >
                READY TO BUILD BETTER PRODUCT EXPERIENCES?
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={120} className="max-w-[500px]">
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "17px",
                  color: "#111111",
                  lineHeight: "1.65",
                  fontWeight: 300,
                }}
                className="opacity-90"
              >
                Let's discuss how premium listing images, video direction, storefronts, and custom Shopify setups can elevate your e-commerce growth.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={240} className="w-full sm:w-auto mt-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <a
                  href={`${import.meta.env.BASE_URL}start-project`}
                  className="inline-flex items-center justify-center bg-[#111111] text-[#F8F8F6] px-10 py-4 text-xs font-bold tracking-widest hover:bg-[#F8F8F6] hover:text-[#111111] transition-all duration-300 uppercase shadow-md"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  START A PROJECT
                </a>
                <a
                  href="mailto:prafful.mahawar2000@gmail.com"
                  className="hidden md:inline-flex items-center justify-center bg-[#111111] text-[#F8F8F6] px-10 py-4 text-xs font-bold tracking-widest hover:bg-[#F8F8F6] hover:text-[#111111] transition-all duration-300 uppercase shadow-md"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  GET IN TOUCH
                </a>
                <a
                  href="https://wa.me/919887574517"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex md:hidden items-center justify-center bg-[#111111] text-[#F8F8F6] px-10 py-4 text-xs font-bold tracking-widest hover:bg-[#F8F8F6] hover:text-[#111111] transition-all duration-300 uppercase shadow-md"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  GET IN TOUCH
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

