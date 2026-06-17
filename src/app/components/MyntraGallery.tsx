import { useState, useEffect } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";
import myntra01 from "../../imports/myntra-fashion/myntra-01-primary-catalog-hero.png";
import myntra02 from "../../imports/myntra-fashion/myntra-02-lifestyle-campaign.png";
import myntra03 from "../../imports/myntra-fashion/myntra-03-craftsmanship-detail.png";
import myntra04 from "../../imports/myntra-fashion/myntra-04-full-body-back.png";
import myntra05 from "../../imports/myntra-fashion/myntra-05-motion-walking.png";
import myntra06 from "../../imports/myntra-fashion/myntra-06-primary-catalog-hero.png";
import myntra07 from "../../imports/myntra-fashion/myntra-07-side-third-quarter.png";
import myntra08 from "../../imports/myntra-fashion/myntra-08-craftsmanship-detail.png";
import myntra09 from "../../imports/myntra-fashion/myntra-09-full-body-back.png";
import myntra10 from "../../imports/myntra-fashion/myntra-10-motion-walking.png";

const productsData = [
  {
    id: 0,
    brand: "CONFIDENTIAL CLIENT 01",
    name: "Women's Fashion Collection",
    price: 1199,
    originalPrice: 1999,
    discount: "40% OFF",
    rating: "4.2",
    ratingCount: "1,240",
    images: [myntra01, myntra02, myntra03, myntra04, myntra05],
    description: "Premium knit design tailored for everyday elegance. Designed for high conversion on Myntra.",
  },
  {
    id: 1,
    brand: "CONFIDENTIAL CLIENT 02",
    name: "Women's Fashion Collection",
    price: 1499,
    originalPrice: 2499,
    discount: "40% OFF",
    rating: "4.5",
    ratingCount: "850",
    images: [myntra06, myntra07, myntra08, myntra09, myntra10],
    description: "Chic fashion listing creative featuring dynamic striped pattern details. Engineered for maximum organic visibility.",
  },
];

interface MyntraPDPProps {
  product: typeof productsData[0];
  isWishlisted: boolean;
  onWishlistToggle: () => void;
  onAddToBag: () => void;
  onCycleComplete?: () => void;
}

function MyntraPDP({ product, isWishlisted, onWishlistToggle, onAddToBag, onCycleComplete }: MyntraPDPProps) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [userActivityTime, setUserActivityTime] = useState(Date.now());

  // Carousel transition state
  const currentImgSrc = product.images[activeImgIdx];
  const [displayedImg, setDisplayedImg] = useState(currentImgSrc);
  const [lastImg, setLastImg] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const recordUserActivity = () => {
    setUserActivityTime(Date.now());
  };

  // Sync state if product changes (essential for desktop PLP selection)
  useEffect(() => {
    setActiveImgIdx(0);
    setDisplayedImg(product.images[0]);
    setLastImg(null);
    setIsTransitioning(false);
  }, [product]);

  useEffect(() => {
    if (currentImgSrc !== displayedImg) {
      setLastImg(displayedImg);
      setDisplayedImg(currentImgSrc);
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [currentImgSrc, displayedImg]);

  useEffect(() => {
    const timer = setInterval(() => {
      // Pause autoplay for 8 seconds if there was recent manual interaction
      if (Date.now() - userActivityTime < 8000) {
        return;
      }

      if (activeImgIdx < product.images.length - 1) {
        setActiveImgIdx((prev) => prev + 1);
      } else {
        if (onCycleComplete) {
          onCycleComplete();
        } else {
          setActiveImgIdx(0);
        }
      }
    }, 1600);

    return () => clearInterval(timer);
  }, [product, activeImgIdx, userActivityTime, onCycleComplete]);

  const handleAddToBagLocal = () => {
    if (isAdding) return;
    setIsAdding(true);
    onAddToBag();
    recordUserActivity();
    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-pdp-fade-in">
      {/* Product Image Gallery (Grid-col 7) */}
      <div className="md:col-span-7 flex flex-col-reverse sm:flex-row gap-4 sm:items-start w-full">
        {/* Clickable Vertical Thumbnails */}
        <div className="w-full sm:w-auto flex sm:flex-col gap-2 overflow-x-auto sm:overflow-x-visible overflow-y-hidden sm:overflow-y-auto shrink-0 max-h-[380px] py-1">
          {product.images.map((img, idx) => {
            const isImgSelected = activeImgIdx === idx;
            return (
              <div
                key={idx}
                className={`w-14 sm:w-16 aspect-[3/4] h-auto rounded-lg overflow-hidden cursor-pointer transition-all shrink-0 border-2 ${
                  isImgSelected
                    ? "border-[#ff3f6c] shadow-sm"
                    : "border-gray-100 hover:border-gray-200"
                }`}
                onClick={() => {
                  setActiveImgIdx(idx);
                  recordUserActivity();
                }}
              >
                <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx + 1}`} />
              </div>
            );
          })}
        </div>

        {/* Large Main Showcase Image */}
        <div
          className="w-full sm:flex-1 flex-none aspect-[3/4] rounded-xl overflow-hidden bg-gray-50 border border-gray-100 relative group cursor-pointer"
          onClick={() => {
            recordUserActivity();
            window.dispatchEvent(
              new CustomEvent("open-lightbox", {
                detail: {
                  src: product.images[activeImgIdx],
                  images: product.images,
                  type: "image",
                },
              })
            );
          }}
        >
          {/* Previous Slide (Background) */}
          {lastImg && (
            <img
              src={lastImg}
              className="absolute inset-0 w-full h-full object-cover"
              alt="previous slide"
            />
          )}

          {/* Active Slide (Foreground with slide animation) */}
          <img
            key={displayedImg}
            src={displayedImg}
            className={`absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ${
              isTransitioning ? "animate-slide-in-right" : ""
            }`}
            alt={product.name}
          />

          {/* Carousel Dots Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/45 backdrop-blur-md px-2.5 py-1.5 rounded-full pointer-events-none">
            {product.images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeImgIdx === idx ? "bg-[#ff3f6c] w-4" : "bg-white/50 w-1.5"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-mono tracking-widest px-2.5 py-1 rounded z-10 pointer-events-none">
            ✦ CLICK TO ZOOM
          </div>
        </div>
      </div>

      {/* Product Information Column (Grid-col 5) */}
      <div className="md:col-span-5 flex flex-col gap-5 text-left pt-2">
        <div>
          {/* Brand Name */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#111111] uppercase tracking-wide">
            CONFIDENTIAL CLIENT
          </h2>
          {/* Product Name */}
          <p className="text-gray-500 text-sm sm:text-base font-light mt-0.5">
            Marketplace Listing Creative System
          </p>
        </div>

        {/* Star Ratings badge */}
        <div className="inline-flex items-center gap-1.5 border border-gray-200 rounded px-2.5 py-1 text-xs w-fit bg-gray-50 font-bold text-gray-700">
          <span>5 Listing Images Designed</span>
        </div>

        {/* Price tag detail */}
        <div className="flex items-baseline gap-3 border-t border-gray-100 pt-4 mt-1">
          <span className="text-xl sm:text-2xl font-extrabold text-[#111111] uppercase tracking-wide">
            Marketplace Creative Package
          </span>
        </div>

        {/* Deliverable/Image Template Selector */}
        <div className="flex flex-col gap-2.5 mt-2">
          <div className="flex flex-wrap gap-2">
            {(product.id === 0
              ? ["Front Hero", "Side/3-Quarter View", "Detail and Craftsmanship", "Back View", "Movement and Fit"]
              : ["Front Hero", "Neck View", "Side View", "Back View", "Movement and Fit"]
            ).map((sz, idx) => {
              const isSizeSelected = activeImgIdx === idx;
              return (
                <button
                  key={sz}
                  className={`px-3.5 h-10 rounded-full border text-xs font-bold transition-all ${
                    isSizeSelected
                      ? "border-[#ff3f6c] text-[#ff3f6c] bg-[#ff3f6c]/5 ring-1 ring-[#ff3f6c]"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                  onClick={() => {
                    setActiveImgIdx(idx);
                    recordUserActivity();
                  }}
                >
                  {sz}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action buttons (ADD TO BAG & WISHLIST) */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={handleAddToBagLocal}
            className="flex-1 bg-[#ff3f6c] hover:bg-[#ff3f6c]/95 text-white font-bold py-3.5 px-4 rounded flex items-center justify-center gap-2 text-xs sm:text-sm tracking-widest transition-colors shadow-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z M3 6h18 M16 10a4 4 0 01-8 0" />
            </svg>
            {isAdding ? "ADDED TO BAG" : "ADD TO BAG"}
          </button>
          <button
            onClick={onWishlistToggle}
            className={`border font-bold py-3.5 px-6 rounded flex items-center justify-center gap-2 text-xs sm:text-sm tracking-widest transition-all ${
              isWishlisted
                ? "border-[#ff3f6c] bg-[#ff3f6c]/5 text-[#ff3f6c]"
                : "border-gray-300 hover:border-gray-400 text-gray-700 bg-white"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={isWishlisted ? "#ff3f6c" : "none"} stroke={isWishlisted ? "#ff3f6c" : "currentColor"} strokeWidth="2.5">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            {isWishlisted ? "WISHLISTED" : "WISHLIST"}
          </button>
        </div>


      </div>
    </div>
  );
}

export function MyntraGallery() {
  const [activeProduct, setActiveProduct] = useState(productsData[0]);
  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});
  const [bagCount, setBagCount] = useState(0);

  const handleAddToBag = () => {
    setBagCount((prev) => prev + 1);
  };

  const handleWishlistToggleForProduct = (productId: number) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const isWishlistedForActive = !!wishlist[activeProduct.id];

  return (
    <section id="myntra-gallery" className="py-12 md:py-24 relative overflow-hidden" style={{ background: "#F8F8F6" }}>
      {/* Dynamic fade-in animations for product detail switching */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pdpFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-pdp-fade-in {
          animation: pdpFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideInFromRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-24 border-b border-[rgba(17,17,17,0.06)] pb-8 text-left">
          <ScrollReveal variant="fade-up">
            <div className="text-[10px] tracking-[0.25em] text-[#6B6B68] font-bold uppercase mb-4">
              MYNTRA CREATIVES
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(56px, 7vw, 90px)",
                lineHeight: 0.9,
                color: "#111111",
              }}
              className="tracking-tight uppercase"
            >
              MYNTRA LISTING IMAGES
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
              Editorial-style listing creatives built using <span className="bg-[#F4C542]/20 text-[#111111] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">AI-enhanced visual</span> workflows and marketplace expertise.
            </p>
          </ScrollReveal>
        </div>

        {/* Split-Layout (Desktop) and Stacked-Layout (Mobile) */}
        <div className="w-full">
          {/* DESKTOP VIEW: Split screen e-commerce layout */}
          <div className="hidden lg:flex lg:flex-row gap-8 lg:gap-12 w-full items-start">
            {/* LEFT SIDE: Product Listing Page (PLP) (30% width) */}
            <div className="w-full lg:w-[30%] bg-white border border-[rgba(17,17,17,0.08)] rounded-2xl p-5 shadow-sm text-left">
              {/* Mini Myntra App Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3 gap-2">
                {/* Brand Logo - Overlapping Ribbon M */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 100 100" className="shrink-0">
                    <defs>
                      <linearGradient id="myntra-grad-1" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF3F6C" />
                        <stop offset="50%" stopColor="#FF6B35" />
                        <stop offset="100%" stopColor="#FFBE1A" />
                      </linearGradient>
                      <linearGradient id="myntra-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF3F6C" />
                        <stop offset="100%" stopColor="#D11950" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 10 85 L 45 15 C 47 11 51 11 53 15 L 65 42 L 40 85 Z"
                      fill="url(#myntra-grad-1)"
                      opacity="0.95"
                    />
                    <path
                      d="M 38 85 L 58 45 L 75 15 C 77 11 81 11 83 15 L 90 85 L 65 85 Z"
                      fill="url(#myntra-grad-2)"
                      opacity="0.95"
                    />
                  </svg>
                  <span className="text-[10px] font-black tracking-widest text-[#ff3f6c] font-sans">MYNTRA</span>
                </div>
                
                {/* Search Bar & Icons */}
                <div className="flex items-center gap-2 flex-1 justify-end">
                  <div className="relative w-full max-w-[95px]">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-gray-100 text-[9px] px-2 py-1.5 pl-6 rounded border-none focus:outline-none focus:ring-1 focus:ring-[#ff3f6c]/30 text-gray-700 font-light"
                      readOnly
                    />
                    <span className="absolute left-2 top-1.5 text-gray-400 text-[8px]">🔍</span>
                  </div>
                  
                  {/* Mini Header Icons */}
                  <div className="flex items-center gap-2 shrink-0 text-gray-600">
                    {/* Wishlist Icon */}
                    <div className="relative cursor-pointer hover:text-[#ff3f6c] transition-colors" onClick={() => handleWishlistToggleForProduct(activeProduct.id)}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill={isWishlistedForActive ? "#ff3f6c" : "none"} stroke={isWishlistedForActive ? "#ff3f6c" : "currentColor"} strokeWidth="2.5">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                      {Object.values(wishlist).filter(Boolean).length > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-[#ff3f6c] text-white text-[7px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center scale-75">
                          {Object.values(wishlist).filter(Boolean).length}
                        </span>
                      )}
                    </div>
                    
                    {/* Bag Icon */}
                    <div className="relative cursor-pointer hover:text-[#ff3f6c] transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z M3 6h18 M16 10a4 4 0 01-8 0" />
                      </svg>
                      {bagCount > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-[#ff3f6c] text-white text-[7px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center scale-75">
                          {bagCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Myntra-style Menu Links */}
              <div className="flex justify-between text-[8px] font-bold text-gray-500 border-b border-gray-100 pb-2 mb-4 tracking-wider">
                <span>MEN</span>
                <span>WOMEN</span>
                <span>KIDS</span>
                <span>HOME</span>
                <span className="text-[#ff3f6c]">BEAUTY</span>
              </div>

              {/* Product Cards Loop (Two items only) */}
              <div className="flex flex-col gap-3.5">
                {productsData.map((p) => {
                  const isSelected = activeProduct.id === p.id;
                  return (
                    <div
                      key={p.id}
                      className={`flex gap-3.5 p-2.5 border rounded-xl cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? "border-[#ff3f6c] bg-[#ff3f6c]/5 shadow-sm scale-[1.01]"
                          : "border-gray-100 hover:border-gray-200 bg-white"
                      }`}
                      onClick={() => {
                        setActiveProduct(p);
                      }}
                    >
                      {/* Hero Image Thumbnail */}
                      <div className="w-16 h-20 aspect-[3/4] rounded-lg overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
                        <img src={p.images[0]} className="w-full h-full object-cover" alt={p.name} />
                      </div>
                      
                      {/* Simple Product Info */}
                      <div className="flex flex-col justify-center text-left gap-0.5 min-w-0">
                        <span className="text-[10px] font-extrabold text-gray-900 uppercase tracking-wider">{p.brand}</span>
                        <span className="text-[9px] text-gray-500 font-light truncate max-w-[130px]">{p.name}</span>
                        
                        <div className="text-[8.5px] font-bold text-gray-600 mt-1">
                          5 Images Designed
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE: Product Detail Page (PDP) (70% width) */}
            <div className="w-full lg:w-[70%] bg-white border border-[rgba(17,17,17,0.08)] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <MyntraPDP
                product={activeProduct}
                isWishlisted={isWishlistedForActive}
                onWishlistToggle={() => handleWishlistToggleForProduct(activeProduct.id)}
                onAddToBag={handleAddToBag}
                onCycleComplete={() => {
                  const nextProductId = activeProduct.id === 0 ? 1 : 0;
                  const nextProduct = productsData.find((p) => p.id === nextProductId) || productsData[0];
                  setActiveProduct(nextProduct);
                }}
              />
            </div>
          </div>

          {/* MOBILE VIEW: Stacked PDP cards individually without PLP selector box */}
          <div className="flex flex-col gap-10 lg:hidden w-full">
            {productsData.map((p) => (
              <div key={p.id} className="w-full bg-white border border-[rgba(17,17,17,0.08)] rounded-2xl p-4 sm:p-6 shadow-sm">
                <MyntraPDP
                  product={p}
                  isWishlisted={!!wishlist[p.id]}
                  onWishlistToggle={() => handleWishlistToggleForProduct(p.id)}
                  onAddToBag={handleAddToBag}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
