import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  duration?: number;
  threshold?: number;
  style?: React.CSSProperties;
}

export function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  style = {},
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before it hits the viewport edge
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getVariantStyles = () => {
    switch (variant) {
      case "fade-up":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8";
      case "fade-in":
        return isVisible ? "opacity-100" : "opacity-0";
      case "slide-left":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-8";
      case "slide-right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8";
      case "scale-up":
        return isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95";
      default:
        return "";
    }
  };

  const mergedStyle = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Premium fluid easing
    ...style,
  };

  return (
    <div
      ref={ref}
      className={`will-change-[opacity,transform] ${getVariantStyles()} ${className}`}
      style={mergedStyle}
    >
      {children}
    </div>
  );
}
