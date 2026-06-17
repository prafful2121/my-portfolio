import { ScrollReveal } from "./ui/ScrollReveal";
import { useState, useEffect } from "react";
import spirulina1 from "../../assets/spirulina/spirulina-1.jpg";
import spirulina2 from "../../assets/spirulina/spirulina-2.jpg";
import spirulina3 from "../../assets/spirulina/spirulina-3.jpg";
import spirulina4 from "../../assets/spirulina/spirulina-4.jpg";
import spirulina5 from "../../assets/spirulina/spirulina-5.jpg";
import spirulina6 from "../../assets/spirulina/spirulina-6.jpg";
import spirulina7 from "../../assets/spirulina/spirulina-7.jpg";

import magnesium1 from "../../assets/magnesium/magnesium-1.jpg";
import magnesium2 from "../../assets/magnesium/magnesium-2.jpg";
import magnesium3 from "../../assets/magnesium/magnesium-3.jpg";
import magnesium4 from "../../assets/magnesium/magnesium-4.jpg";
import magnesium5 from "../../assets/magnesium/magnesium-5.jpg";
import magnesium6 from "../../assets/magnesium/magnesium-6.jpg";
import magnesium7 from "../../assets/magnesium/magnesium-7.jpg";

import probiotic1 from "../../assets/probiotic/probiotic-1.jpg";
import probiotic2 from "../../assets/probiotic/probiotic-2.jpg";
import probiotic3 from "../../assets/probiotic/probiotic-3.jpg";
import probiotic4 from "../../assets/probiotic/probiotic-4.jpg";
import probiotic5 from "../../assets/probiotic/probiotic-5.jpg";
import probiotic6 from "../../assets/probiotic/probiotic-6.jpg";
import probiotic7 from "../../assets/probiotic/probiotic-7.jpg";

interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: string;
  ratingCount: string;
  images: string[];
  sizeLabel: string;
  sizes: string[];
  description: string;
  bullets: string[];
}

const productsData: Product[] = [
  {
    id: 0,
    brand: "CONFIDENTIAL CLIENT 01",
    name: "Amazon Listing Creative System",
    price: 999,
    originalPrice: 1299,
    discount: "23% OFF",
    rating: "4.7",
    ratingCount: "2,410",
    images: [spirulina1, spirulina2, spirulina3, spirulina4, spirulina5, spirulina6, spirulina7],
    sizeLabel: "Creative Deliverables:",
    sizes: ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 6", "Image 7"],
    description: "A conversion-optimized listing design that highlights raw ingredient purity, dosage transparency, and health benefit infographics to drive high cart-conversion rates.",
    bullets: [
      "100% PURE & ORGANIC: Harvested from clean, sustainable water source sites under strict quality guidelines.",
      "RICH IN NUTRIENTS: Packed with plant-based proteins, essential amino acids, iron, and antioxidant chlorophyll.",
      "IMMUNE & ENERGY SUPPORT: Promotes natural body detoxification, immune defense, and daily metabolic vitality.",
      "VEGAN & GLUTEN-FREE: Formulated in veggie capsules, free of preservatives, non-GMO, and certified organic."
    ]
  },
  {
    id: 1,
    brand: "CONFIDENTIAL CLIENT 02",
    name: "Amazon Listing Creative System",
    price: 1499,
    originalPrice: 1799,
    discount: "17% OFF",
    rating: "4.6",
    ratingCount: "940",
    images: [magnesium1, magnesium2, magnesium3, magnesium4, magnesium5, magnesium6, magnesium7],
    sizeLabel: "Creative Deliverables:",
    sizes: ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 6", "Image 7"],
    description: "Clean medical-grade layout aesthetics designed to educate consumers on dermal magnesium absorption benefits, lifestyle usage contexts, and formula purity.",
    bullets: [
      "HIGH POTENCY MAGNESIUM: Formulated with pure magnesium chloride sourced from ancient seabeds for rapid dermal uptake.",
      "SOOTHING MSM BLEND: Added OptiMSM to promote muscle relaxation, joint comfort, and skin hydration.",
      "NON-GREASY TEXTURE: Lightweight, quick-absorbing lotion with organic shea butter and sweet almond oil base.",
      "FRAGRANCE-FREE & SENSITIVE: Free of synthetic parabens, artificial fragrances, and harsh preservatives."
    ]
  },
  {
    id: 2,
    brand: "CONFIDENTIAL CLIENT 03",
    name: "Amazon Listing Creative System",
    price: 1299,
    originalPrice: 1599,
    discount: "19% OFF",
    rating: "4.8",
    ratingCount: "1,850",
    images: [probiotic1, probiotic2, probiotic3, probiotic4, probiotic5, probiotic6, probiotic7],
    sizeLabel: "Creative Deliverables:",
    sizes: ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 6", "Image 7"],
    description: "Highlighting gut microbiome restoration benefits and clean shelf-stable packaging features through bright color schemes and premium modern typography layouts.",
    bullets: [
      "50 BILLION CFU ACTIVE: High-potency daily probiotic with 10 clinically studied strains for complete coverage.",
      "DIGESTIVE & IMMUNE SUPPORT: Promotes balanced gut flora, healthy bowel movements, and overall immune resistance.",
      "SHELF STABLE & NO REFRIGERATION: Advanced double-walled packaging protects strains from heat, light, and moisture.",
      "PREBIOTIC INULIN: Formulated with organic chicory root extract to feed and nourish active healthy gut bacteria."
    ]
  }
];

interface AmazonPDPProps {
  product: Product;
  isWishlisted: boolean;
  onWishlistToggle: () => void;
  onAddToCart: () => void;
  onCycleComplete?: () => void;
}

function AmazonPDP({ product, isWishlisted, onWishlistToggle, onAddToCart, onCycleComplete }: AmazonPDPProps) {
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

  // Sync size selection and carousel when product changes
  useEffect(() => {
    setActiveImgIdx(0);
    setDisplayedImg(product.images[0]);
    setLastImg(null);
    setIsTransitioning(false);
  }, [product]);

  // Handle layering of previous slides
  useEffect(() => {
    if (currentImgSrc !== displayedImg) {
      setLastImg(displayedImg);
      setDisplayedImg(currentImgSrc);
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [currentImgSrc, displayedImg]);

  // Autoplay slideshow cycling through images and switching products (faster cycle)
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
    }, 1600); // Dynamic 1.6 seconds per image transition

    return () => clearInterval(timer);
  }, [product, activeImgIdx, userActivityTime, onCycleComplete]);

  const handleAddToCartLocal = () => {
    if (isAdding) return;
    setIsAdding(true);
    onAddToCart();
    recordUserActivity();
    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
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
                className={`w-14 sm:w-16 aspect-square h-auto rounded overflow-hidden cursor-pointer transition-all shrink-0 border-2 p-0.5 flex items-center justify-center bg-white ${
                  isImgSelected
                    ? "border-[#FF9900] shadow-sm"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => {
                  setActiveImgIdx(idx);
                  recordUserActivity();
                }}
              >
                <img src={img} className="max-w-full max-h-full object-contain" alt={`Thumb ${idx + 1}`} />
              </div>
            );
          })}
        </div>

        {/* Large Main Showcase Image */}
        <div
          className="w-full sm:flex-1 flex-none aspect-square rounded-xl overflow-hidden bg-white border border-gray-100 relative group cursor-pointer flex items-center justify-center p-2 sm:p-4"
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
              className="absolute inset-0 w-full h-full object-contain p-2 sm:p-4"
              alt="previous slide"
            />
          )}

          {/* Active Slide (Foreground with slide animation) */}
          <img
            key={displayedImg}
            src={displayedImg}
            className={`absolute inset-0 w-full h-full object-contain p-2 sm:p-4 group-hover:scale-[1.01] transition-transform duration-500 ${
              isTransitioning ? "animate-slide-in-right" : ""
            }`}
            alt={product.name}
          />

          {/* Carousel Dots Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-full pointer-events-none">
            {product.images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeImgIdx === idx ? "bg-[#FF9900] w-4" : "bg-white/50 w-1.5"
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
      <div className="md:col-span-5 flex flex-col gap-4 text-left pt-1">
        <div>
          {/* Brand Link */}
          <span className="text-[11px] font-medium text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer block select-none mb-1">
            Visit the {product.brand.split(" ")[0]} Store
          </span>
          
          {/* Product Title */}
          <h1 className="text-base sm:text-lg font-medium text-gray-900 leading-snug">
            Amazon Listing Creative System<br />
            <span className="text-gray-500 font-light text-sm">Conversion-Focused Product Image Suite</span>
          </h1>
        </div>

        {/* Rating badge */}
        <div className="inline-flex items-center gap-1.5 border border-gray-200 rounded px-2.5 py-1 text-xs w-fit bg-gray-50 font-bold text-gray-700 select-none">
          <span>7 Listing Images Designed</span>
        </div>

        {/* Price block */}
        <div className="border-t border-b border-gray-150 py-3.5 my-1 text-left">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold text-gray-950">
              Marketplace Conversion Package
            </span>
          </div>
          
          {/* Delivery & Prime Information */}
          <div className="flex flex-col gap-1 mt-3 text-xs text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
            <span className="font-semibold text-emerald-700">Built to educate, persuade, and convert shoppers.</span>
          </div>
        </div>

        {/* Style/Sizing Selector */}
        <div className="flex flex-col gap-2 mt-1">
          <span className="text-xs font-semibold text-gray-900">{product.sizeLabel}</span>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((sz, idx) => {
              const isSizeSelected = activeImgIdx === idx;
              return (
                <button
                  key={sz}
                  className={`px-3 py-2 border text-xs rounded-md transition-all font-medium ${
                    isSizeSelected
                      ? "border-[#F0C14B] bg-[#FFF8E7] ring-1 ring-[#F0C14B]"
                      : "border-gray-300 text-gray-700 hover:border-gray-400 bg-white"
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

        {/* Action buttons (ADD TO CART & BUY NOW) */}
        <div className="flex flex-col gap-2.5 mt-4">
          <button
            onClick={handleAddToCartLocal}
            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] active:border-[#E5C100] text-gray-950 py-2.5 rounded-full text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🛒</span>
            {isAdding ? "System Loaded..." : "View Creative System"}
          </button>
          <button
            onClick={handleAddToCartLocal}
            className="w-full bg-[#FFA41C] hover:bg-[#F3A847] border border-[#FF8F00] active:border-[#E07E00] text-gray-950 py-2.5 rounded-full text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>⚡</span>
            Explore Image Set
          </button>
          
          {/* Add to Wish List link */}
          <span
            onClick={onWishlistToggle}
            className="text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer text-xs mt-1 text-center font-light select-none block"
          >
            {isWishlisted ? "❤️ Marketplace Design Portfolio" : "♡ Marketplace Design Portfolio"}
          </span>
        </div>


      </div>
    </div>
  );
}

export function AmazonListings() {
  const [activeProduct, setActiveProduct] = useState(productsData[0]);
  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleWishlistToggleForProduct = (productId: number) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const isWishlistedForActive = !!wishlist[activeProduct.id];

  return (
    <section id="amazon-listings" className="py-12 md:py-24 relative overflow-hidden" style={{ background: "#F8F8F6" }}>
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
              Marketplace Systems
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
              AMAZON LISTING SYSTEMS
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
              <span className="bg-[#F4C542]/20 text-[#111111] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">AI-driven listing systems</span> designed to communicate benefits, establish trust, and improve conversion.
            </p>
          </ScrollReveal>
        </div>

        {/* Split-Layout (Desktop) and Stacked-Layout (Mobile) */}
        <div className="w-full">
          {/* DESKTOP VIEW: Split screen e-commerce layout */}
          <div className="hidden lg:flex lg:flex-row gap-8 lg:gap-12 w-full items-start">
            {/* LEFT SIDE: Amazon PLP View (30% width) */}
            <div className="w-full lg:w-[30%] bg-white border border-[rgba(17,17,17,0.08)] rounded-2xl overflow-hidden shadow-sm text-left">
              {/* Amazon Main Brand Header */}
              <div className="bg-[#131921] px-4 py-3 flex flex-col gap-2">
                {/* Logo, Search, Cart Row */}
                <div className="flex items-center justify-between gap-2.5">
                  {/* Amazon Logo with Indian TLD */}
                  <div className="flex flex-col items-start shrink-0 select-none">
                    <div className="flex items-baseline gap-0.5 text-white font-sans font-bold text-xs tracking-tight leading-none">
                      <span>amazon</span>
                      <span className="text-[7.5px] text-[#FF9900] font-light font-mono">.in</span>
                    </div>
                    {/* smile arrow */}
                    <svg width="34" height="6" viewBox="0 0 100 20" fill="none" className="-mt-1">
                      <path d="M5 5 C 30 18, 70 18, 95 5 C 88 12, 75 14, 65 14" stroke="#FF9900" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                      <path d="M95 5 L 85 8 M 95 5 L 90 13" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>

                  {/* Delivery widget */}
                  <div className="hidden xs:flex items-center gap-1 text-white opacity-90 text-[8px] font-light shrink-0">
                    <span className="text-[10px]">📍</span>
                    <div className="flex flex-col text-left">
                      <span className="text-[6px] opacity-65 leading-none">Deliver to</span>
                      <span className="font-extrabold leading-tight">India</span>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="flex-1 flex relative max-w-[100px]">
                    <input
                      type="text"
                      placeholder="Search Amazon"
                      className="w-full bg-white text-[9px] px-2 py-1.5 pr-6 border-none focus:outline-none focus:ring-1 focus:ring-[#FF9900] text-gray-800 placeholder-gray-400 font-light"
                      readOnly
                    />
                    <button className="absolute right-0 top-0 bottom-0 bg-[#febd69] hover:bg-[#f3a847] px-2 flex items-center justify-center border-none cursor-pointer">
                      <span className="text-[8px] text-gray-800">🔍</span>
                    </button>
                  </div>

                  {/* Header Icons */}
                  <div className="flex items-center gap-2 shrink-0 text-white">
                    {/* Wishlist Heart Indicator */}
                    <div className="relative cursor-pointer hover:text-[#FF9900] transition-colors" onClick={() => handleWishlistToggleForProduct(activeProduct.id)}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill={isWishlistedForActive ? "#FF9900" : "none"} stroke={isWishlistedForActive ? "#FF9900" : "currentColor"} strokeWidth="2.5">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                      {Object.values(wishlist).filter(Boolean).length > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-[#FF9900] text-gray-900 text-[7px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center scale-75 border border-[#131921]">
                          {Object.values(wishlist).filter(Boolean).length}
                        </span>
                      )}
                    </div>

                    {/* Cart Icon */}
                    <div className="relative cursor-pointer hover:text-[#FF9900] transition-colors">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                      </svg>
                      {cartCount > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-[#FF9900] text-gray-900 text-[7px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center scale-75 border border-[#131921]">
                          {cartCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Amazon Sub-navigation bar */}
              <div className="flex justify-between items-center text-[7.5px] font-bold text-white bg-[#232f3e] px-4 py-2 border-b border-gray-100/10 tracking-wide select-none shrink-0 overflow-x-auto no-scrollbar gap-2.5">
                <span className="flex items-center gap-0.5 whitespace-nowrap"><span className="text-[9px]">☰</span> All</span>
                <span className="whitespace-nowrap">Health & Nutrition</span>
                <span className="whitespace-nowrap">Best Sellers</span>
                <span className="whitespace-nowrap">Today's Deals</span>
                <span className="whitespace-nowrap text-[#FF9900]">Prime</span>
              </div>

              {/* Product Cards Loop (Three Amazon items) */}
              <div className="flex flex-col gap-3 p-4 bg-gray-50/50">
                {productsData.map((p) => {
                  const isSelected = activeProduct.id === p.id;
                  return (
                    <div
                      key={p.id}
                      className={`flex gap-3.5 p-3 border rounded-xl cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? "border-[#FF9900] bg-[#FF9900]/5 shadow-sm scale-[1.01]"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                      onClick={() => {
                        setActiveProduct(p);
                      }}
                    >
                      {/* Hero Image Thumbnail */}
                      <div className="w-16 h-16 aspect-square rounded-lg overflow-hidden shrink-0 bg-white border border-gray-100 p-1 flex items-center justify-center">
                        <img src={p.images[0]} className="w-full h-full object-contain" alt={p.name} />
                      </div>
                      
                      {/* Simple Product Info */}
                      <div className="flex flex-col justify-center text-left gap-0.5 min-w-0">
                        <span className="text-[7.5px] font-bold text-[#FF9900] uppercase tracking-wide">{p.brand}</span>
                        <span className="text-[9px] text-gray-900 font-medium truncate max-w-[130px]">{p.name}</span>
                        
                        {/* Designed Images Label */}
                        <div className="text-gray-500 text-[8px] font-semibold mt-1">
                          7 Images Designed
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE: Amazon Product Detail Page (PDP) (70% width) */}
            <div className="w-full lg:w-[70%] bg-white border border-[rgba(17,17,17,0.08)] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <AmazonPDP
                product={activeProduct}
                isWishlisted={isWishlistedForActive}
                onWishlistToggle={() => handleWishlistToggleForProduct(activeProduct.id)}
                onAddToCart={handleAddToCart}
                onCycleComplete={() => {
                  const nextProductId = (activeProduct.id + 1) % productsData.length;
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
                <AmazonPDP
                  product={p}
                  isWishlisted={!!wishlist[p.id]}
                  onWishlistToggle={() => handleWishlistToggleForProduct(p.id)}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
