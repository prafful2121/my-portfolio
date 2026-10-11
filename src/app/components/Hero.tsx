import { useEffect, useRef } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { GlassOrb, ChromeLiquid, GoldSculpture } from "./ui/AbstractArt";
import { MapPin } from "lucide-react";
import paxonLogo from "../../assets/paxon-logo.png";
import paxonLogo2x from "../../assets/paxon-logo-2x.png";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logo3DRef = useRef<HTMLDivElement>(null);

  // High-performance 3D controller via direct DOM manipulation (bypasses React renders for 60fps)
  useEffect(() => {
    const container = containerRef.current;
    const logo3D = logo3DRef.current;
    if (!container || !logo3D) return;

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

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let startTime = Date.now();
    let animFrame: number;

    const update3D = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const scroll = window.scrollY;

      // Subtle scroll-induced rolling tilt
      const scrollTiltX = Math.sin(scroll * 0.002) * 3;

      if (isHovered) {
        const rect = container.getBoundingClientRect();
        // Dynamic, responsive 3D mouse tilt (up to 18° Y, 14° X) with hover elevation
        targetY = (mouseX / (rect.width / 2)) * 18;
        targetX = -(mouseY / (rect.height / 2)) * 14 + scrollTiltX;
      } else {
        // Subtle ambient resting sway (up to 2° X, 4° Y)
        targetX = Math.sin(elapsed * 0.9) * 2 + scrollTiltX;
        targetY = Math.cos(elapsed * 0.7) * 4;
      }

      // Smooth spring interpolation (lerp) — snappy 0.08 for responsive cursor tracking
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      // Apply transform directly to GPU compositor thread
      const elevationZ = isHovered ? 25 : 0;
      logo3D.style.transform = `translateZ(${elevationZ}px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg)`;

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
      id="work"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 sm:pt-36 lg:pt-28 pb-16"
      style={{ background: "#F8F8F6" }}
    >
      {/* Background 3D Abstract Shapes with parallax floating motion */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <GlassOrb 
          className="absolute -top-12 -left-16 opacity-30 animate-float-slow hidden md:block" 
          size={380} 
        />
        {/* Repositioned GoldSculpture to the bottom left corner to maintain breathing room around tagline */}
        <GoldSculpture 
          className="absolute bottom-[4%] -left-[2%] opacity-15 animate-float-slow hidden sm:block" 
          size={240} 
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center lg:items-start relative z-10">
        {/* Left — PAXON STUDIO 3D Brand Anchor: dominates 7 cols, logo vertically centered with right column */}
        <div className="lg:col-span-7 relative flex flex-col items-center lg:items-start lg:pt-16 xl:pt-20">
          <ScrollReveal variant="fade-in" duration={1200} className="relative z-10 w-full">
            {/* Hover-tilt and scroll-responsive 3D logo container */}
            <div
              ref={containerRef}
              className="relative select-none w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[680px] xl:max-w-[720px] cursor-pointer"
              style={{
                perspective: "1200px",
              }}
            >
              <div
                ref={logo3DRef}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(0deg) rotateY(0deg)",
                  willChange: "transform",
                }}
                className="relative z-10 transition-transform duration-100 ease-out"
              >
                {/* 3D Ambient Shadow Ground Plane — subtle studio contact shadow */}
                <div 
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 rounded-[100%] bg-[#111111]/8 blur-lg pointer-events-none"
                  style={{ transform: "translateZ(-20px)" }}
                />

                {/* Main 3D Brand Logo — ultra-crisp high-resolution master asset */}
                <div 
                  className="relative animate-logo-entrance"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="relative animate-logo-float">
                    <img
                      src={paxonLogo2x}
                      srcSet={`${paxonLogo} 1x, ${paxonLogo2x} 2x`}
                      alt="PAXON STUDIO"
                      width={897}
                      height={410}
                      className="w-full h-auto object-contain select-none pointer-events-none"
                      style={{
                        transform: "translateZ(30px)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        imageRendering: "auto",
                        filter: "drop-shadow(0 12px 24px rgba(17,17,17,0.08)) drop-shadow(0 2px 6px rgba(0,0,0,0.04))",
                      }}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline & Brand Identity with calibrated vertical space */}
            <div className="mt-6 sm:mt-7 lg:mt-8 flex flex-col items-center lg:items-start w-full">
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.22em",
                }}
                className="text-xs sm:text-sm font-semibold uppercase text-[#171717] tracking-[0.22em] flex items-center gap-2.5 text-center lg:text-left"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4C542]" />
                PRAFFUL'S AI-POWERED STUDIO
              </p>

              {/* Decorative metadata */}
              <div className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-[10px] tracking-widest text-[#6B6B68] font-mono uppercase">
                <MapPin size={12} className="text-[#F4C542] flex-shrink-0" />
                <span>India</span>
              </div>
            </div>
          </ScrollReveal>
        </div>


        {/* Right — headline + services + CTAs: spans 5 cols */}
        <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-10 relative z-10">
          <ScrollReveal variant="fade-up" delay={150}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(26px, 2.8vw, 38px)",
                lineHeight: "1.5",
                color: "#111111",
                fontWeight: 400,
              }}
              className="tracking-wide text-center lg:text-left"
            >
              High-converting{" "}
              <span className="font-bold text-[#111111] bg-[#F4C542]/15 px-2 py-0.5 rounded-md inline-block whitespace-nowrap">
                e-commerce creatives
              </span>{" "}
              that help brands{" "}
              <span className="font-bold text-[#111111] border-b-2 border-[#F4C542] pb-0.5">
                sell more.
              </span>
            </p>
          </ScrollReveal>

          {/* Service tags list */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="flex flex-col gap-3 w-full">
              {/* Row 1 */}
              <div className="flex gap-3 w-full">
                <a
                  href="#selected-work"
                  className="w-[calc(50%-6px)] text-center bg-white border border-[rgba(17,17,17,0.1)] px-5 py-3.5 text-xs font-bold tracking-widest uppercase text-[#6B6B68] rounded-lg shadow-sm hover:border-[#F4C542] hover:text-[#111111] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_24px_-8px_rgba(244,197,66,0.4)] transition-all duration-300 select-none cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Product Videos
                </a>
                <a
                  href="#myntra-gallery"
                  className="w-[calc(50%-6px)] text-center bg-white border border-[rgba(17,17,17,0.1)] px-5 py-3.5 text-xs font-bold tracking-widest uppercase text-[#6B6B68] rounded-lg shadow-sm hover:border-[#F4C542] hover:text-[#111111] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_24px_-8px_rgba(244,197,66,0.4)] transition-all duration-300 select-none cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Myntra Listing Creatives
                </a>
              </div>

              {/* Row 2 */}
              <div className="flex gap-3 w-full">
                <a
                  href="#amazon-listings"
                  className="w-[calc(50%-6px)] text-center bg-white border border-[rgba(17,17,17,0.1)] px-5 py-3.5 text-xs font-bold tracking-widest uppercase text-[#6B6B68] rounded-lg shadow-sm hover:border-[#F4C542] hover:text-[#111111] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_24px_-8px_rgba(244,197,66,0.4)] transition-all duration-300 select-none cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Amazon Listing Images
                </a>
                <a
                  href="#brand-store"
                  className="w-[calc(50%-6px)] text-center bg-white border border-[rgba(17,17,17,0.1)] px-5 py-3.5 text-xs font-bold tracking-widest uppercase text-[#6B6B68] rounded-lg shadow-sm hover:border-[#F4C542] hover:text-[#111111] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_24px_-8px_rgba(244,197,66,0.4)] transition-all duration-300 select-none cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Amazon Brand Stores
                </a>
              </div>

              {/* Row 3 */}
              <div className="flex justify-center w-full">
                <a
                  href="#ecommerce-website"
                  className="w-[calc(50%-6px)] text-center bg-white border border-[rgba(17,17,17,0.1)] px-5 py-3.5 text-xs font-bold tracking-widest uppercase text-[#6B6B68] rounded-lg shadow-sm hover:border-[#F4C542] hover:text-[#111111] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_24px_-8px_rgba(244,197,66,0.4)] transition-all duration-300 select-none cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  E-Commerce Websites
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal variant="fade-up" delay={450}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
              <a
                href="#selected-work"
                className="inline-flex items-center justify-center bg-[#111111] text-[#F8F8F6] px-8 py-4 text-xs font-bold tracking-widest hover:bg-[#F4C542] hover:text-[#111111] transition-all duration-300 uppercase w-full sm:w-auto"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                VIEW WORK
              </a>
              <a
                href={`${import.meta.env.BASE_URL}start-project`}
                className="inline-flex items-center justify-center bg-[#111111] text-[#F8F8F6] px-8 py-4 text-xs font-bold tracking-widest hover:bg-[#F4C542] hover:text-[#111111] transition-all duration-300 uppercase w-full sm:w-auto"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                START A PROJECT →
              </a>
            </div>
          </ScrollReveal>


        </div>
      </div>

      {/* Bottom marquee strip */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-[#111111] py-3.5 overflow-hidden z-20"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "15px", color: "#F4C542", letterSpacing: "0.15em" }}
              className="mx-12 select-none"
            >
              AMAZON LISTING IMAGES &nbsp;·&nbsp; MYNTRA LISTING CREATIVES &nbsp;·&nbsp; PRODUCT VIDEOS &nbsp;·&nbsp; AMAZON BRAND STORES &nbsp;·&nbsp; E-COMMERCE WEBSITES &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
