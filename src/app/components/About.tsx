import { useEffect, useRef } from "react";
import aboutPortrait from "../../assets/about-portrait.webp";
import { ScrollReveal } from "./ui/ScrollReveal";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatar3DRef = useRef<HTMLDivElement>(null);

  // High-performance 3D controller for the avatar card (direct DOM transforms at 60fps)
  useEffect(() => {
    const container = containerRef.current;
    const avatar3D = avatar3DRef.current;
    if (!container || !avatar3D) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      isHovered = true;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX = e.clientX - centerX;
      mouseY = e.clientY - centerY;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    let startTime = Date.now();
    let animFrame: number;

    const update3D = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const scroll = window.scrollY;

      // Calculate scroll-induced tilt based on element's viewport Y-coordinate
      const rect = container.getBoundingClientRect();
      const viewCenterY = window.innerHeight / 2;
      const elementCenterY = rect.top + rect.height / 2;
      const scrollOffset = (elementCenterY - viewCenterY) * 0.08;
      const scrollTiltX = Math.max(-15, Math.min(15, -scrollOffset * 0.12));

      if (isHovered) {
        const rect = container.getBoundingClientRect();
        // Mouse hover tilt (up to 20 deg Y, 18 deg X)
        targetY = (mouseX / (rect.width / 2)) * 20;
        targetX = -(mouseY / (rect.height / 2)) * 18 + scrollTiltX;
      } else {
        // Idle orbital float + scroll parallax tilt
        targetX = Math.sin(elapsed * 1.2) * 6 + scrollTiltX;
        targetY = Math.cos(elapsed * 0.8) * 10;
      }

      // Smooth spring interpolation (lerp)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      avatar3D.style.transform = `rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg)`;

      animFrame = requestAnimationFrame(update3D);
    };

    animFrame = requestAnimationFrame(update3D);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-12 md:py-24 relative overflow-hidden"
      style={{ background: "#F8F8F6" }}
    >
      {/* Inline styles for custom orbit animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spinOrbit {
          from { transform: translateZ(-40px) scale(1.08) rotate(0deg); }
          to { transform: translateZ(-40px) scale(1.08) rotate(360deg); }
        }
        .animate-spin-orbit-slow {
          animation: spinOrbit 24s linear infinite;
        }
      `}} />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left — Portrait 3D Avatar Card: spans 5 cols */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <ScrollReveal variant="scale-up" duration={1100} className="relative w-full max-w-[440px] lg:max-w-none flex justify-center">
              
              {/* 3D Viewport container in 3:4 aspect ratio (matching 768x1024 portrait) */}
              <div
                ref={containerRef}
                className="relative w-full max-w-[360px] aspect-[3/4] flex items-center justify-center cursor-default select-none"
                style={{ perspective: "1200px" }}
              >
                <div
                  ref={avatar3DRef}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(0deg) rotateY(0deg)",
                  }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* 1. Backdrop Golden Orbit Ring (translateZ(-40px)) */}
                  <div
                    className="absolute inset-[-12px] rounded-2xl border border-dashed border-[#F4C542]/40 opacity-60 animate-spin-orbit-slow"
                  />

                  {/* 2. Background Spotlight Glow (translateZ(-20px)) */}
                  <div
                    className="absolute inset-4 rounded-2xl filter blur-xl opacity-30"
                    style={{
                      background: "radial-gradient(circle, #F4C542 0%, transparent 70%)",
                      transform: "translateZ(-20px)",
                    }}
                  />

                  {/* 3. Outer Glowing Gold Rim (translateZ(20px)) */}
                  <div
                    className="absolute inset-0 rounded-2xl border-[1.5px] border-[#F4C542] shadow-[0_0_20px_rgba(244,197,66,0.3)]"
                    style={{
                      transform: "translateZ(20px)",
                    }}
                  />

                  {/* 4. Full Aspect-Ratio Portrait Image (translateZ(40px)) */}
                  <div
                    className="absolute inset-[3px] rounded-2xl overflow-hidden border border-[rgba(17,17,17,0.1)] bg-[#E2E2DF] shadow-inner"
                    style={{
                      transform: "translateZ(40px)",
                    }}
                  >
                    <img
                      src={aboutPortrait}
                      alt="Prafful Portrait"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* 5. Translucent Glass cover plate (translateZ(65px)) */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      transform: "translateZ(65px)",
                      background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%, rgba(17,17,17,0.05) 100%)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      boxShadow: "inset 0 10px 20px rgba(255,255,255,0.2), inset 0 -10px 20px rgba(17,17,17,0.1)",
                    }}
                  />

                  {/* 6. Foreground Diagonal Lens Flare Glare (translateZ(80px)) */}
                  <div
                    className="absolute -top-[10%] -left-[10%] w-[120%] h-[40%] pointer-events-none opacity-40"
                    style={{
                      transform: "translateZ(80px) rotate(-25deg)",
                      background: "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
                      filter: "blur(4px)",
                    }}
                  />
                </div>
              </div>

            </ScrollReveal>
          </div>

          {/* Right — Text content: spans 7 cols */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <ScrollReveal variant="fade-up">
              <div className="text-[10px] tracking-[0.25em] text-[#6B6B68] font-bold uppercase">
                About the Studio
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150}>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(48px, 5.5vw, 80px)",
                  lineHeight: "0.95",
                  color: "#111111",
                  letterSpacing: "0.01em",
                }}
              >
                CREATIVE SYSTEMS BUILT FOR MODERN E-COMMERCE BRANDS.
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={250}>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#6B6B68",
                  textTransform: "uppercase",
                  marginBottom: "-12px",
                }}
              >
                AI-Native Creative Studio
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={300}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "17px",
                  lineHeight: "1.75",
                  color: "#111111",
                  fontWeight: 300,
                }}
              >
                We combine AI-powered workflows, creative strategy, and premium design execution to build high-converting assets for modern e-commerce brands. From listing images and product videos to brand stores, websites, and custom creative systems, we deliver agency-grade results with the speed and flexibility of AI. From a single product image to a complete brand ecosystem, we build the creative infrastructure brands need to grow online.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={400} className="w-16 h-px bg-[#F4C542] my-2" />

            <ScrollReveal variant="fade-up" delay={450} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "AI-Powered Content Production",
                "Product Videos & Motion Content",
                "Marketplace & Storefront Design",
                "Custom Creative Systems",
              ].map((item, idx) => (
                <div
                  key={item}
                  className="flex items-center gap-4 py-3 border-b border-[rgba(17,17,17,0.06)]"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#111111" }}
                >
                  <span className="text-[10px] font-mono text-[#F4C542] font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="opacity-90">{item}</span>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={500}>
              <div
                className="pt-6 border-t border-[rgba(17,17,17,0.06)] flex flex-wrap gap-x-3.5 gap-y-2 items-center text-[10px] sm:text-[11px] text-gray-500 font-bold tracking-wider uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span>Amazon</span>
                <span className="text-[#F4C542] font-black">•</span>
                <span>Myntra</span>
                <span className="text-[#F4C542] font-black">•</span>
                <span>Brand Stores</span>
                <span className="text-[#F4C542] font-black">•</span>
                <span>Product Videos</span>
                <span className="text-[#F4C542] font-black">•</span>
                <span>Websites</span>
                <span className="text-[#F4C542] font-black">•</span>
                <span>Creative Automation</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
