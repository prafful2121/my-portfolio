import { useEffect, useState, useRef } from "react";

interface LightboxDetail {
  src: string;
  images?: string[];
  type: "image" | "video";
}

export function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState<LightboxDetail | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<LightboxDetail>;
      if (customEvent.detail && customEvent.detail.src) {
        setMedia(customEvent.detail);
        setIsOpen(true);
        if (customEvent.detail.images) {
          const idx = customEvent.detail.images.indexOf(customEvent.detail.src);
          setActiveIndex(idx >= 0 ? idx : 0);
        } else {
          setActiveIndex(0);
        }
      }
    };

    window.addEventListener("open-lightbox", handleOpen);
    return () => {
      window.removeEventListener("open-lightbox", handleOpen);
    };
  }, []);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (media?.images && media.images.length > 1) {
      setActiveIndex((prev) => (prev === 0 ? media.images!.length - 1 : prev - 1));
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (media?.images && media.images.length > 1) {
      setActiveIndex((prev) => (prev === media.images!.length - 1 ? 0 : prev + 1));
    }
  };

  const currentSrc = media?.images && media.images.length > 0 ? media.images[activeIndex] : media?.src;

  useEffect(() => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentSrc]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, media, activeIndex]);

  const closeLightbox = () => {
    setIsOpen(false);
    setTimeout(() => {
      setMedia(null);
      setActiveIndex(0);
    }, 300);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!media && !isOpen) return null;

  return (
    <div
      onClick={closeLightbox}
      className={`fixed inset-0 z-55 flex flex-col items-center justify-center transition-all duration-300 ${
        isOpen
          ? "opacity-100 backdrop-blur-md bg-black/85"
          : "opacity-0 backdrop-blur-none bg-black/0 pointer-events-none"
      }`}
    >
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          closeLightbox();
        }}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white text-3xl font-light focus:outline-none z-[60] w-12 h-12 flex items-center justify-center transition-colors duration-200"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Navigation Arrows */}
      {media?.images && media.images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 z-[60] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-all duration-200 border border-white/10"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 z-[60] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-all duration-200 border border-white/10"
            aria-label="Next image"
          >
            →
          </button>
        </>
      )}

      {/* Media container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative max-w-[92vw] max-h-[80vh] flex flex-col items-center justify-center transition-all duration-300 transform ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {media?.type === "video" ? (
          <div className="relative max-w-full max-h-[72vh] rounded-lg shadow-2xl overflow-hidden bg-black group/video flex flex-col items-center">
            <video
              ref={videoRef}
              src={currentSrc}
              autoPlay
              playsInline
              loop
              muted={isMuted}
              onClick={togglePlay}
              className="max-w-full max-h-[72vh] cursor-pointer"
            />
            {/* Custom overlay controls shown on hover or touch */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-lg opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 z-30">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-[#F4C542] text-xs font-semibold tracking-wider transition-colors duration-200 cursor-pointer"
                >
                  {isPlaying ? "PAUSE" : "PLAY"}
                </button>
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-[#F4C542] text-xs font-semibold tracking-wider transition-colors duration-200 cursor-pointer"
                >
                  {isMuted ? "UNMUTE" : "MUTE"}
                </button>
              </div>
              <span className="text-[10px] text-white/50 tracking-wider font-mono">
                {isPlaying ? "PLAYING" : "PAUSED"}
              </span>
            </div>
          </div>
        ) : (
          <img
            src={currentSrc}
            alt="Preview"
            className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl bg-[#1a1a1a]/40"
          />
        )}

        {/* Slideshow dot indicators and counter */}
        {media?.images && media.images.length > 1 && (
          <div className="mt-5 flex flex-col items-center gap-2.5 z-[60]">
            <span className="text-white/60 text-[11px] tracking-widest font-mono">
              {activeIndex + 1} / {media.images.length}
            </span>
            <div className="flex gap-1.5">
              {media.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-[#F4C542] w-8" : "bg-white/20 hover:bg-white/40"
                  }`}
                  style={{ border: "none", outline: "none", padding: 0 }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
