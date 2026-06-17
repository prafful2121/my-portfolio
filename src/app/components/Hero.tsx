import { useEffect, useRef } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { GlassOrb, ChromeLiquid, GoldSculpture } from "./ui/AbstractArt";
import { MapPin } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text3DRef = useRef<HTMLDivElement>(null);

  // High-performance 3D controller via direct DOM manipulation (bypasses React renders for 60fps)
  useEffect(() => {
    const container = containerRef.current;
    const text3D = text3DRef.current;
    if (!container || !text3D) return;

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

      // scroll-induced rolling tilt
      const scrollTiltX = Math.sin(scroll * 0.003) * 8;

      if (isHovered) {
        const rect = container.getBoundingClientRect();
        // Mouse hover tilt (up to 25 degrees Y, 20 degrees X)
        targetY = (mouseX / (rect.width / 2)) * 25;
        targetX = -(mouseY / (rect.height / 2)) * 20 + scrollTiltX;
      } else {
        // Idle sway + scroll parallax tilt
        targetX = Math.sin(elapsed * 1.1) * 7 + scrollTiltX;
        targetY = Math.cos(elapsed * 0.8) * 14;
      }

      // Smooth spring interpolation (lerp)
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      // Apply transform directly to GPU compositor thread
      text3D.style.transform = `rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg)`;

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
      className="relative min-h-screen flex items-center overflow-hidden pt-36 sm:pt-40 lg:pt-32 pb-20"
      style={{ background: "#F8F8F6" }}
    >
      {/* Background 3D Abstract Shapes with parallax floating motion */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <GlassOrb 
          className="absolute -top-12 -left-16 opacity-30 animate-float-slow hidden md:block" 
          size={380} 
        />
        {/* Removed background ChromeLiquid to keep tagline text readable */}
        <GoldSculpture 
          className="absolute bottom-[10%] left-[5%] opacity-20 animate-float-slow" 
          size={260} 
        />
        {/* Removed background GlassOrb to keep tagline text readable */}
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left — massive typography: dominates 7 cols */}
        <div className="lg:col-span-7 relative flex flex-col items-center lg:items-start">
          <ScrollReveal variant="fade-in" duration={1200} className="relative z-10 w-full">
            <div className="text-[10px] tracking-[0.25em] text-[#6B6B68] font-bold uppercase mb-6 flex items-center justify-center lg:justify-start gap-3 w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4C542]" />
              Interactive Design
            </div>

            {/* Hover-tilt and scroll-responsive 3D typography container */}
            <div
              ref={containerRef}
              className="relative select-none"
              style={{
                perspective: "1200px",
              }}
            >
              <div
                ref={text3DRef}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(0deg) rotateY(0deg)",
                }}
                className="relative z-10 py-6"
              >
                {/* Main 3D Preserved Text */}
                <h1
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(80px, 11vw, 150px)",
                    lineHeight: "0.9",
                    letterSpacing: "0.01em",
                    color: "#111111",
                    transformStyle: "preserve-3d",
                  }}
                  className="font-black tracking-tight relative animate-float-slow text-center lg:text-left"
                >
                  <span
                    className="block transition-all duration-300"
                    style={{
                      transform: "translateZ(40px)",
                    }}
                  >
                    PRAFFUL'S
                  </span>
                  <span
                    className="block transition-all duration-300"
                    style={{
                      transform: "translateZ(85px) scale(1.02)",
                      color: "#F4C542",
                    }}
                  >
                    AI-POWERED
                  </span>
                  <span
                    className="block transition-all duration-300"
                    style={{
                      transform: "translateZ(50px)",
                    }}
                  >
                    STUDIO
                  </span>
                </h1>
              </div>
            </div>

            {/* Decorative metadata */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-[10px] tracking-widest text-[#6B6B68] font-mono uppercase w-full">
              <MapPin size={12} className="text-[#F4C542] flex-shrink-0" />
              <span>India</span>
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
