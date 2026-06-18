import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";
import video01 from "../../imports/Woman_showcasing_top_Zara_ad_202606061919.mp4";
import video02 from "../../imports/Woman_showcasing_top_Zara_ad_202606061927.mp4";
import video03 from "../../imports/Woman_showcasing_top_Zara_ad_202606062017.mp4";

const projects = [
  {
    title: "01 PRODUCT VIDEO SHOWCASE",
    category: "FASHION BRAND CREATIVE",
    description:
      "Premium fashion storytelling focused on garment presentation, movement, and visual elements.",
    video: video01,
    tag: "01",
  },
  {
    title: "02 PRODUCT VIDEO SHOWCASE",
    category: "FASHION BRAND CREATIVE",
    description:
      "A detail-focused fashion creative highlighting texture craftsmanship, knit structure, and fabric drape.",
    video: video02,
    tag: "02",
  },
  {
    title: "03 PRODUCT VIDEO SHOWCASE",
    category: "FASHION BRAND CREATIVE",
    description:
      "Minimalist fashion content designed to elevate product perception through refined art direction and lighting.",
    video: video03,
    tag: "03",
  },
];

interface LazyVideoProps {
  src: string;
  className?: string;
}

function LazyVideo({ src, className }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // 1. Observer to lazy-load the video source when it gets close to the viewport
    const loadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            loadObserver.disconnect();
          }
        });
      },
      {
        rootMargin: "350px 0px", // Start loading when within 350px of the viewport
      }
    );

    loadObserver.observe(videoElement);

    // 2. Observer to play/pause the video when it enters/leaves the visible viewport
    const playObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px", // Trigger slightly inside the viewport
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    playObserver.observe(videoElement);

    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !shouldLoad) return;

    if (isPlaying) {
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Autoplay prevented (e.g., Low Power Mode or browser settings)
          console.warn("Video play prevented:", error);
        });
      }
    } else {
      videoElement.pause();
    }
  }, [isPlaying, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      loop
      muted
      playsInline
      className={className}
      preload={shouldLoad ? "auto" : "none"}
    />
  );
}

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="pt-10 pb-12 md:pt-16 md:pb-24 relative overflow-hidden"
      style={{ background: "#F8F8F6" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-24 border-b border-[rgba(17,17,17,0.06)] pb-8">
          <ScrollReveal variant="fade-up">
            <div className="text-[10px] tracking-[0.25em] text-[#6B6B68] font-bold uppercase mb-4">
              Featured Work
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(56px, 7vw, 90px)",
                lineHeight: 0.9,
                color: "#111111",
              }}
              className="tracking-tight"
            >
              PRODUCT VIDEOS
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "#6B6B68",
                maxWidth: "380px",
                lineHeight: "1.7",
              }}
              className="font-light"
            >
              Cinematic product videos created through <span className="bg-[#F4C542]/20 text-[#111111] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">AI-assisted production</span> and premium creative direction.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-Column Grid for Selected Product Films */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((p, i) => {
            return (
              <ScrollReveal
                key={p.tag}
                variant="fade-up"
                delay={i * 150}
                className="flex flex-col"
              >
                {/* Video Card Container */}
                <div
                  className="relative group w-full aspect-[9/16] overflow-hidden bg-[#E2E2DF] border border-[rgba(17,17,17,0.08)] cursor-pointer shadow-md rounded-md"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent("open-lightbox", {
                        detail: { src: p.video, type: "video" },
                      })
                    )
                  }
                >
                  <LazyVideo
                    src={p.video}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-[1.2s] ease-out"
                  />
                  
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/15 transition-colors duration-500" />

                  {/* Monospaced tag number "01", "02", "03" in yellow */}
                  <div className="absolute top-4 left-4 text-[#F4C542] text-xs font-mono font-bold tracking-widest">
                    {p.tag}
                  </div>

                  {/* Category badge at the bottom-left */}
                  <div className="absolute bottom-4 left-4 bg-[#F4C542] text-[#111111] text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm">
                    {p.category}
                  </div>


                </div>

                {/* Card Title & Description */}
                <div className="mt-6 flex flex-col items-start">
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(24px, 2vw, 28px)",
                      color: "#111111",
                      lineHeight: "1",
                      letterSpacing: "0.02em",
                    }}
                    className="uppercase tracking-wide"
                  >
                    {p.title}
                  </h3>
                  
                  {/* Subtle horizontal line */}
                  <div className="h-[1px] w-6 bg-[#111111]/30 my-3.5" />

                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: "#6B6B68",
                      lineHeight: "1.65",
                      fontWeight: 300,
                    }}
                    className="opacity-95 text-left"
                  >
                    {p.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
