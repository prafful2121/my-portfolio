import { useState, useEffect, useRef } from "react";
import { ScrollReveal } from "./ui/ScrollReveal";

const services = [
  {
    n: "01",
    title: "Amazon Listing Images",
    desc: "Strategic main images, infographics, benefit callouts, lifestyle compositions, and A+ content layouts — engineered to convert clicks into sales.",
  },
  {
    n: "02",
    title: "Myntra Listing Creatives",
    desc: "Fashion-forward listing spreads designed to meet Myntra's editorial guidelines, capture consumer interest, and highlight garment qualities.",
  },
  {
    n: "03",
    title: "Product Videos",
    desc: "Short-form commercial product films, Reels, and TikTok ad assets focused on dynamic motion, sensory appeal, and conversion strategy.",
  },
  {
    n: "04",
    title: "Amazon Brand Stores",
    desc: "Multi-page curated digital storefront designs that structure catalog navigation, present cohesive branding, and improve organic search placement.",
  },
  {
    n: "05",
    title: "E-Commerce Websites",
    desc: "Frictionless direct-to-consumer storefront setups (Shopify, Custom platforms) built around product immersion, visual rhythm, and clean UX paths.",
  },
];

const capabilities = [
  {
    title: "Product Images",
    icon: (
      <svg className="w-6 h-6 stroke-current text-[#111111]/70 group-hover/item:text-[#F4C542] transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <circle cx="12" cy="13.5" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Product Videos",
    icon: (
      <svg className="w-6 h-6 stroke-current text-[#111111]/70 group-hover/item:text-[#F4C542] transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Marketplaces (Amazon, Myntra, Flipkart, etc.)",
    icon: (
      <svg className="w-6 h-6 stroke-current text-[#111111]/70 group-hover/item:text-[#F4C542] transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Brand Stores",
    icon: (
      <svg className="w-6 h-6 stroke-current text-[#111111]/70 group-hover/item:text-[#F4C542] transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-16.5 0V6.75m0 0C1.35 4.8 3.6 3 6 3c2.4 0 4.65 1.8 6 3.75M1.5 6.75h12m10.5 0v14.25m0-14.25h-10.5M12 6.75c1.35-1.95 3.6-3.75 6-3.75 2.4 0 4.65 1.8 6 3.75" />
      </svg>
    ),
  },
  {
    title: "E-commerce Websites",
    icon: (
      <svg className="w-6 h-6 stroke-current text-[#111111]/70 group-hover/item:text-[#F4C542] transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12H3V5.25" />
      </svg>
    ),
  },
  {
    title: "Social Media Creatives",
    icon: (
      <svg className="w-6 h-6 stroke-current text-[#111111]/70 group-hover/item:text-[#F4C542] transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Ad Campaigns & Banners",
    icon: (
      <svg className="w-6 h-6 stroke-current text-[#111111]/70 group-hover/item:text-[#F4C542] transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
      </svg>
    ),
  },
  {
    title: "Packaging Concepts",
    icon: (
      <svg className="w-6 h-6 stroke-current text-[#111111]/70 group-hover/item:text-[#F4C542] transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Motion Graphics & Animation",
    icon: (
      <svg className="w-6 h-6 stroke-current text-[#111111]/70 group-hover/item:text-[#F4C542] transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Custom Visual Solutions",
    icon: (
      <svg className="w-6 h-6 stroke-current text-[#111111]/70 group-hover/item:text-[#F4C542] transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l4.907-2.181a60.19 60.19 0 007.411-4.819l1.436-1.124a2.25 2.25 0 000-3.522l-1.436-1.124a60.292 60.292 0 00-7.411-4.819L9 3l.813 5.096a6.113 6.113 0 011.66 4.195z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12H3" />
      </svg>
    ),
  },
];

// 1. ListingImagesScene (Generalized Multi-Brand Product Carousel)
function ListingImagesScene() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const thumbs = ["Main", "Info", "Life", "Comp", "Specs"];

  return (
    <div className="w-full h-full bg-[#111111] flex items-center justify-center relative overflow-hidden">
      {/* Grid line background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      <svg width="100%" height="100%" viewBox="0 0 320 200" className="relative z-10 select-none">
        <defs>
          <linearGradient id="beautyBottleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EADEC9" />
            <stop offset="50%" stopColor="#D9CBAC" />
            <stop offset="100%" stopColor="#BFAF90" />
          </linearGradient>
          <linearGradient id="woodTableGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3E2723" />
            <stop offset="100%" stopColor="#1B0F0D" />
          </linearGradient>
        </defs>

        {/* Thumbnail Sidebar (Amazon Style) */}
        <g transform="translate(10, 15)">
          {thumbs.map((t, idx) => {
            const isActive = activeSlide === idx;
            return (
              <g key={t} transform={`translate(0, ${idx * 34})`} className="cursor-pointer" onClick={() => setActiveSlide(idx)}>
                {/* Border Box */}
                <rect
                  x="0"
                  y="0"
                  width="22"
                  height="28"
                  rx="2"
                  fill="#1C1C1A"
                  stroke={isActive ? "#F4C542" : "rgba(255,255,255,0.15)"}
                  strokeWidth={isActive ? 1.2 : 0.8}
                />
                {/* Tiny icons inside thumbnails */}
                {idx === 0 && (
                  <rect x="8" y="7" width="6" height="14" rx="1" fill="none" stroke={isActive ? "#F4C542" : "#777"} strokeWidth="0.8" />
                )}
                {idx === 1 && (
                  <circle cx="11" cy="14" r="4" fill="none" stroke={isActive ? "#F4C542" : "#777"} strokeWidth="0.8" />
                )}
                {idx === 2 && (
                  <path d="M8 9 L14 9 L13 19 L9 19 Z" fill="none" stroke={isActive ? "#F4C542" : "#777"} strokeWidth="0.8" />
                )}
                {idx === 3 && (
                  <path d="M7 14 L10 17 L15 10" fill="none" stroke={isActive ? "#F4C542" : "#777"} strokeWidth="0.8" />
                )}
                {idx === 4 && (
                  <rect x="5" y="7" width="12" height="14" fill="none" stroke={isActive ? "#F4C542" : "#777"} strokeWidth="0.8" />
                )}
              </g>
            );
          })}
        </g>

        {/* Main Listing Slide Card Container */}
        <rect x="42" y="10" width="268" height="180" rx="6" fill="#FCFCFC" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        {/* Slide 0: Cosmetics Hero Shot */}
        {activeSlide === 0 && (
          <g>
            <ellipse cx="176" cy="132" rx="16" ry="3.5" fill="rgba(0,0,0,0.05)" />
            <g style={{ animation: "bottleFloat 4s ease-in-out infinite alternate" }}>
              {/* Lid/Pump head */}
              <path d="M171 44h10v6h-10z" fill="#D8C7A4" />
              <path d="M174 36h4v8h-4z" fill="#888" />
              <path d="M176 36h6v3h-6z" fill="#888" />
              {/* Bottle Body */}
              <rect x="160" y="50" width="32" height="74" rx="6" fill="url(#beautyBottleGrad)" stroke="#111" strokeWidth="0.5" />
              <path d="M163 53 L163 118 Q167 80 163 53" fill="rgba(255,255,255,0.15)" />
              {/* Label */}
              <rect x="164" y="70" width="24" height="42" fill="#FCFCFC" rx="1" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
              <text x="176" y="82" fill="#111" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">HYDRA</text>
              <text x="176" y="88" fill="#555" fontSize="3" fontFamily="sans-serif" textAnchor="middle">SERUM</text>
              <line x1="168" y1="94" x2="184" y2="94" stroke="#D8C7A4" strokeWidth="0.5" />
              <line x1="170" y1="100" x2="182" y2="100" stroke="#888" strokeWidth="0.5" />
            </g>

            {/* Amazon UI Details */}
            <rect x="52" y="20" width="58" height="11" fill="#002F36" rx="1" />
            <text x="55" y="28" fill="#FFF" fontSize="5" fontFamily="sans-serif" fontWeight="bold">Amazon's Choice</text>
            <text x="52" y="44" fill="#111" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Aura Glow Hydra-Serum</text>
            <text x="52" y="54" fill="#565959" fontSize="6.2" fontFamily="sans-serif">Premium Deep Hydration Oil for Face</text>
            <g transform="translate(52, 60)">
              <text x="0" y="8" fill="#F4A62A" fontSize="9" fontFamily="sans-serif">★★★★★</text>
              <text x="50" y="7" fill="#007185" fontSize="6.2" fontFamily="sans-serif">4,812 ratings</text>
            </g>
            <text x="52" y="92" fill="#111" fontSize="13" fontWeight="bold" fontFamily="sans-serif">$24.99</text>
            <text x="96" y="92" fill="#565959" fontSize="6.2" fontFamily="sans-serif">($2.50 / Fl Oz)</text>
            <g transform="translate(52, 102)">
              <rect x="0" y="0" width="22" height="9" fill="#00A8E1" rx="1" />
              <text x="2" y="7" fill="#FFF" fontSize="6" fontWeight="bold" fontFamily="sans-serif">prime</text>
              <text x="27" y="7" fill="#111" fontSize="6" fontWeight="bold" fontFamily="sans-serif">One-Day</text>
              <text x="55" y="7" fill="#565959" fontSize="6.2" fontFamily="sans-serif">& FREE Returns</text>
            </g>
            <rect x="52" y="120" width="80" height="15" fill="#FFD814" stroke="#F7CA00" strokeWidth="0.5" rx="3" />
            <text x="92" y="130" fill="#111" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Add to Cart</text>
          </g>
        )}

        {/* Slide 1: Tech/Electronics Infographic */}
        {activeSlide === 1 && (
          <g>
            <text x="135" y="24" fill="#111" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">TECH SPECS & CALLOUTS</text>
            <g transform="translate(20, -5)">
              <rect x="162" y="35" width="22" height="130" rx="3" fill="#2A2A2A" />
              <line x1="162" y1="50" x2="184" y2="50" stroke="#1A1A1A" strokeWidth="0.5" />
              <line x1="162" y1="150" x2="184" y2="150" stroke="#1A1A1A" strokeWidth="0.5" />
              <rect x="148" y="60" width="50" height="70" rx="14" fill="#1A1A1A" stroke="#E5E5E5" strokeWidth="1" />
              <rect x="198" y="85" width="3" height="10" rx="1" fill="#888" />
              <rect x="153" y="65" width="40" height="60" rx="10" fill="#0D0D0D" />
              <circle cx="173" cy="95" r="16" fill="none" stroke="rgba(244,197,66,0.15)" strokeWidth="2" />
              <circle cx="173" cy="95" r="16" fill="none" stroke="#F4C542" strokeWidth="2" strokeDasharray="60 40" />
              <text x="173" y="98" fill="#FFF" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">98 bpm</text>
              <text x="173" y="78" fill="#565959" fontSize="4" fontFamily="monospace" textAnchor="middle">CALORIES: 340</text>
              <text x="173" y="117" fill="#F8F8F6" fontSize="5" fontFamily="monospace" textAnchor="middle" letterSpacing="0.05em">10:42 AM</text>
            </g>
            <path d="M125 90 L165 90" fill="none" stroke="#F4C542" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="165" cy="90" r="1.5" fill="#F4C542" />
            <path d="M125 50 L155 68" fill="none" stroke="#F4C542" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="155" cy="68" r="1.5" fill="#F4C542" />
            <path d="M225 110 L190 110" fill="none" stroke="#F4C542" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="190" cy="110" r="1.5" fill="#F4C542" />

            <g transform="translate(52, 43)">
              <rect x="0" y="0" width="70" height="14" rx="2" fill="#111" />
              <text x="35" y="9" fill="#F8F8F6" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">AEROSPACE ALLOY</text>
            </g>
            <g transform="translate(52, 83)">
              <rect x="0" y="0" width="70" height="14" rx="2" fill="#111" />
              <text x="35" y="9" fill="#F4C542" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BIO-TRACKER V2</text>
            </g>
            <g transform="translate(228, 103)">
              <rect x="0" y="0" width="70" height="14" rx="2" fill="#111" />
              <text x="35" y="9" fill="#F8F8F6" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">30-DAY STANDBY</text>
            </g>
          </g>
        )}

        {/* Slide 2: Home/Kitchen Lifestyle */}
        {activeSlide === 2 && (
          <g>
            <rect x="42" y="140" width="268" height="50" fill="url(#woodTableGrad)" rx="2" />
            <path d="M42 10 L140 10 L110 140 L42 140 Z" fill="rgba(244,197,66,0.04)" />
            <g transform="translate(160, 45)" style={{ animation: "bottleFloat 5s ease-in-out infinite alternate" }}>
              <ellipse cx="16" cy="98" rx="14" ry="3" fill="rgba(0,0,0,0.18)" />
              <path d="M3 35 C3 35 3 95 16 95 C29 95 29 35 29 35 Z" fill="#EAE5DA" stroke="#111" strokeWidth="0.5" />
              <path d="M29 50 C36 50 36 75 29 75" fill="none" stroke="#EAE5DA" strokeWidth="3" strokeLinecap="round" />
              <path d="M29 50 C36 50 36 75 29 75" fill="none" stroke="#111" strokeWidth="0.5" strokeLinecap="round" />
              <ellipse cx="16" cy="35" rx="13" ry="2" fill="#6A4B35" />
              <ellipse cx="16" cy="35" rx="13" ry="2" fill="none" stroke="#111" strokeWidth="0.5" />
              <path d="M12 25 Q14 18 12 12" fill="none" stroke="rgba(110,110,100,0.15)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 27 Q16 19 18 14" fill="none" stroke="rgba(110,110,100,0.15)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            <path d="M260 10 C270 25 290 20 310 10 C300 25 310 45 290 40 C280 50 270 40 260 10" fill="rgba(0,50,0,0.06)" />
            <text x="52" y="32" fill="#111" fontSize="9.5" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.05em">LIFESTYLE COMPOSITIONS</text>
            <text x="52" y="44" fill="#565959" fontSize="6.5" fontFamily="sans-serif">Organic staging matches natural home environments.</text>
            <text x="52" y="52" fill="#565959" fontSize="6.5" fontFamily="sans-serif">Helps buyers visualize the product in daily use.</text>
            <rect x="52" y="68" width="85" height="15" rx="1" fill="none" stroke="#111" strokeWidth="0.5" />
            <text x="57" y="77.5" fill="#111" fontSize="6" fontWeight="bold" fontFamily="sans-serif">HOME & LIVING CATEGORY</text>
          </g>
        )}

        {/* Slide 3: Universal Comparison Grid */}
        {activeSlide === 3 && (
          <g>
            <text x="176" y="24" fill="#111" fontSize="9.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">US VS. COMPETITORS</text>
            <rect x="52" y="36" width="248" height="142" rx="4" fill="#FCFCFC" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <rect x="140" y="36" width="75" height="142" fill="rgba(244,197,66,0.06)" rx="2" />
            <line x1="52" y1="62" x2="300" y2="62" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
            <text x="60" y="51" fill="#565959" fontSize="6" fontFamily="sans-serif" fontWeight="bold">BENEFITS</text>
            <text x="177" y="51" fill="#F4C542" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">OUR DESIGN</text>
            <text x="257" y="51" fill="#888" fontSize="6" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">GENERIC</text>
            
            <line x1="52" y1="90" x2="300" y2="90" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
            <text x="60" y="79" fill="#111" fontSize="6.5" fontFamily="sans-serif">Material Quality</text>
            <path d="M172 74 L176 78 L183 71" fill="none" stroke="#27C93F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M253 73 L261 81 M261 73 L253 81" fill="none" stroke="#FF5F56" strokeWidth="1.2" strokeLinecap="round" />
            
            <line x1="52" y1="118" x2="300" y2="118" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
            <text x="60" y="107" fill="#111" fontSize="6.5" fontFamily="sans-serif">High Durability</text>
            <path d="M172 102 L176 106 L183 99" fill="none" stroke="#27C93F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M253 101 L261 109 M261 101 L253 109" fill="none" stroke="#FF5F56" strokeWidth="1.2" strokeLinecap="round" />
            
            <line x1="52" y1="146" x2="300" y2="146" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
            <text x="60" y="135" fill="#111" fontSize="6.5" fontFamily="sans-serif">Eco-Packaging</text>
            <path d="M172 130 L176 134 L183 127" fill="none" stroke="#27C93F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M253 129 L261 137 M261 129 L253 137" fill="none" stroke="#FF5F56" strokeWidth="1.2" strokeLinecap="round" />
            
            <text x="60" y="163" fill="#111" fontSize="6.5" fontFamily="sans-serif">Lifetime Support</text>
            <path d="M172 158 L176 162 L183 155" fill="none" stroke="#27C93F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M253 157 L261 165 M261 157 L253 165" fill="none" stroke="#FF5F56" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        )}

        {/* Slide 4: Universal Dimensions Sheet */}
        {activeSlide === 4 && (
          <g>
            <text x="176" y="24" fill="#111" fontSize="9.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">SPECIFICATIONS & SIZE GUIDE</text>
            <g transform="translate(150, 45)">
              <ellipse cx="26" cy="112" rx="20" ry="3.5" fill="rgba(0,0,0,0.08)" />
              <rect x="0" y="15" width="52" height="92" rx="3" fill="#EAE5DA" stroke="#111" strokeWidth="0.8" />
              <rect x="4" y="20" width="44" height="40" fill="#E2DACB" rx="1" />
              <line x1="10" y1="75" x2="42" y2="75" stroke="#F4C542" strokeWidth="1.5" />
              <line x1="10" y1="83" x2="35" y2="83" stroke="#888" strokeWidth="0.8" />
              <line x1="10" y1="89" x2="30" y2="89" stroke="#888" strokeWidth="0.8" />
            </g>
            <path d="M136 60 L136 152 M131 60 L141 60 M131 152 L141 152" fill="none" stroke="#F4C542" strokeWidth="0.8" />
            <text x="126" y="110" fill="#111" fontSize="7.5" fontFamily="monospace" textAnchor="end">16.5 cm</text>
            <path d="M150 160 L202 160 M150 155 L150 165 M202 155 L202 165" fill="none" stroke="#F4C542" strokeWidth="0.8" />
            <text x="176" y="171" fill="#111" fontSize="7.5" fontFamily="monospace" textAnchor="middle">8.0 cm</text>
            <g transform="translate(216, 70)">
              <text x="0" y="0" fill="#111" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PRODUCT SPECS:</text>
              <text x="0" y="12" fill="#565959" fontSize="6.5" fontFamily="monospace">● Vol: 350 ml</text>
              <text x="0" y="22" fill="#565959" fontSize="6.5" fontFamily="monospace">● Weight: 420g</text>
              <text x="0" y="32" fill="#565959" fontSize="6.5" fontFamily="monospace">● 100% Recycled</text>
              <text x="0" y="42" fill="#565959" fontSize="6.5" fontFamily="monospace">● Custom Finish</text>
            </g>
          </g>
        )}
      </svg>
      
      <div className="absolute top-6 right-6 font-mono text-[9px] text-[#F4C542] uppercase tracking-widest animate-pulse">
        ● Amazon List Carousel
      </div>
    </div>
  );
}

// 2. ListingCreativesScene (Fashion Catalog Editorial Grid)
function ListingCreativesScene() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-[#111111] flex items-center justify-center relative overflow-hidden">
      {/* Grid line background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      <svg width="100%" height="100%" viewBox="0 0 320 200" className="relative z-10 select-none">
        <defs>
          <clipPath id="circleClip">
            <circle cx="218" cy="85" r="37" />
          </clipPath>
        </defs>

        {/* Editorial Frame Canvas */}
        <rect x="12" y="10" width="296" height="180" rx="8" fill="#1A1A17" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />

        {/* Card 0: Editorial Hero Catalog */}
        {activeCard === 0 && (
          <g>
            {/* Soft studio lighting circle behind the model */}
            <circle cx="230" cy="100" r="54" fill="rgba(244,197,66,0.04)" stroke="rgba(244,197,66,0.08)" strokeWidth="0.8" />
            
            <g style={{ animation: "bottleFloat 4s ease-in-out infinite alternate" }}>
              {/* Head & Hair Bun */}
              <circle cx="230" cy="24" r="5" fill="#F4C542" />
              <circle cx="230" cy="32" r="7.5" fill="#2E2E2A" stroke="#F4C542" strokeWidth="0.8" />
              <path d="M228 27 C224 29 224 37 227 39" stroke="#F4C542" strokeWidth="0.8" fill="none" />
              
              {/* Slender Profile Face & Neck */}
              <path d="M227 32 C229 32 232 33 233 35 C233 37 231 38 232 39 L235 39 L232 41 C230 43 228 43 227 43" fill="none" stroke="#F8F8F6" strokeWidth="0.8" />
              <path d="M227 39 L227 48 M233 39 L233 48" stroke="#F8F8F6" strokeWidth="0.8" />

              {/* High Fashion Fitted Lapels & Shoulders */}
              <path d="M214 54 C214 54 220 48 230 48 C240 48 246 54 246 54" fill="none" stroke="#F4C542" strokeWidth="1" />
              <path d="M218 52 L227 48 L224 62 Z" fill="#3D3D39" stroke="#F4C542" strokeWidth="0.8" />
              <path d="M242 52 L233 48 L236 62 Z" fill="#3D3D39" stroke="#F4C542" strokeWidth="0.8" />

              {/* Arms */}
              <path d="M214 54 L208 78 L218 78" fill="none" stroke="#2E2E2A" strokeWidth="5" strokeLinecap="round" />
              <path d="M214 54 L208 78 L218 78" fill="none" stroke="#F4C542" strokeWidth="0.8" strokeLinecap="round" />
              <path d="M246 54 L252 82 L248 95" fill="none" stroke="#2E2E2A" strokeWidth="5" strokeLinecap="round" />
              <path d="M246 54 L252 82 L248 95" fill="none" stroke="#F4C542" strokeWidth="0.8" strokeLinecap="round" />

              {/* Torso Top */}
              <path d="M214 54 L216 100 L244 100 L246 54 Z" fill="#2E2E2A" stroke="#F4C542" strokeWidth="1" />
              <rect x="214" y="98" width="32" height="5" fill="#111" stroke="#F4C542" strokeWidth="0.8" rx="0.5" />
              <rect x="227" y="96" width="6" height="9" fill="none" stroke="#F4C542" strokeWidth="1" />

              {/* Double Breasted Details */}
              <circle cx="221" cy="68" r="1.2" fill="#F4C542" />
              <circle cx="221" cy="84" r="1.2" fill="#F4C542" />
              <circle cx="239" cy="68" r="1.2" fill="#F4C542" />
              <circle cx="239" cy="84" r="1.2" fill="#F4C542" />

              {/* Flowing Pleated Skirt */}
              <path d="M216 103 L200 162 L260 162 L244 103 Z" fill="#2E2E2A" stroke="#F4C542" strokeWidth="1" />
              <line x1="220" y1="103" x2="210" y2="162" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
              <line x1="225" y1="103" x2="220" y2="162" stroke="#F4C542" strokeWidth="0.8" />
              <line x1="230" y1="103" x2="230" y2="162" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
              <line x1="235" y1="103" x2="240" y2="162" stroke="#F4C542" strokeWidth="0.8" />
              <line x1="240" y1="103" x2="250" y2="162" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />

              {/* Slender Legs & High Heels */}
              <path d="M224 162 L224 176 L228 176" fill="none" stroke="#F8F8F6" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M236 162 L236 176 L240 176" fill="none" stroke="#F8F8F6" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M224 176 L221 182 L228 182" fill="none" stroke="#F4C542" strokeWidth="0.8" />
              <path d="M236 176 L233 182 L240 182" fill="none" stroke="#F4C542" strokeWidth="0.8" />
            </g>
            <text x="28" y="38" fill="#F8F8F6" fontSize="12" fontFamily="'Bebas Neue', sans-serif" letterSpacing="0.05em">THE URBAN TRENCH</text>
            <text x="28" y="48" fill="rgba(255,255,255,0.4)" fontSize="6.2" fontFamily="sans-serif">FALL / WINTER EDITION</text>
            <text x="28" y="66" fill="#F4C542" fontSize="6.5" fontFamily="monospace">FIT: RELAXED TAILORED</text>
            <text x="28" y="76" fill="rgba(255,255,255,0.8)" fontSize="6.5" fontFamily="monospace">MATERIAL: 100% GIZA COTTON</text>
            <text x="28" y="86" fill="rgba(255,255,255,0.8)" fontSize="6.5" fontFamily="monospace">DETAILS: DOUBLE-BREASTED DIALS</text>
            
            <text x="28" y="112" fill="#F8F8F6" fontSize="13" fontWeight="bold" fontFamily="monospace">₹4,499</text>
            <text x="78" y="112" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace" textDecoration="line-through">₹7,499</text>
            <rect x="120" y="101" width="30" height="13" fill="#E84A5F" rx="2" />
            <text x="123" y="110" fill="#FFF" fontSize="6.2" fontWeight="bold" fontFamily="sans-serif">40% OFF</text>
            
            <rect x="28" y="128" width="55" height="12" rx="1.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            <text x="32" y="136" fill="#F4C542" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">MYNTRA EXCLUSIVE</text>
            
            <rect x="246" y="20" width="48" height="13" rx="2" fill="rgba(255,255,255,0.08)" />
            <text x="250" y="29" fill="#F4C542" fontSize="6" fontWeight="bold" fontFamily="sans-serif">M-STUDIO</text>
          </g>
        )}

        {/* Card 1: Fabric detail close-up */}
        {activeCard === 1 && (
          <g>
            <text x="28" y="38" fill="#F8F8F6" fontSize="9.5" fontFamily="sans-serif" fontWeight="bold">PREMIUM WEAVE TECHNOLOGY</text>
            <text x="28" y="58" fill="rgba(255,255,255,0.9)" fontSize="7" fontFamily="sans-serif">● Double-twisted combed yarn for smooth drape</text>
            <text x="28" y="72" fill="rgba(255,255,255,0.9)" fontSize="7" fontFamily="sans-serif">● Breathable 280 GSM weight structure</text>
            <text x="28" y="86" fill="rgba(255,255,255,0.9)" fontSize="7" fontFamily="sans-serif">● High tensile weave resists daily wear & tear</text>
            <text x="28" y="100" fill="rgba(255,255,255,0.9)" fontSize="7" fontFamily="sans-serif">● Eco-friendly reactive organic dyes</text>
            <rect x="28" y="116" width="90" height="20" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <text x="34" y="128" fill="#F4C542" fontSize="6.5" fontFamily="monospace">WEAVE: TWILL STRUCTURE</text>

            <circle cx="218" cy="85" r="38" fill="#2E2E2A" stroke="#F4C542" strokeWidth="1.5" />
            <g clipPath="url(#circleClip)">
              <path d="M160 50 L260 150 M170 50 L270 150 M180 50 L280 150 M190 50 L290 150 M200 50 L300 150 M210 50 L310 150" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
              <path d="M165 45 L255 135 M175 45 L265 135 M185 45 L275 135 M195 45 L285 135 M205 45 L295 135" stroke="rgba(244,197,66,0.08)" strokeWidth="1.5" />
            </g>
            <line x1="192" y1="112" x2="175" y2="129" stroke="#F4C542" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M190 65 Q205 52 225 60" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        )}

        {/* Card 2: Complete the Look Styling */}
        {activeCard === 2 && (
          <g>
            <text x="28" y="38" fill="#F8F8F6" fontSize="9.5" fontFamily="sans-serif" fontWeight="bold">COMPLETE THE LOOK</text>
            <text x="28" y="48" fill="rgba(255,255,255,0.4)" fontSize="6.5" fontFamily="sans-serif">Get this curated editorial outfit match</text>
            
            <g transform="translate(0, 0)">
              <rect x="28" y="60" width="115" height="84" rx="3" fill="#22221F" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <path d="M65 72 L105 72 L100 115 L70 115 Z" fill="#3A3A35" />
              <line x1="85" y1="72" x2="85" y2="115" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
              <text x="36" y="126" fill="#F8F8F6" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Core Khaki Chinos</text>
              <text x="36" y="136" fill="#F4C542" fontSize="6.5" fontFamily="monospace">₹2,499</text>
            </g>

            <g transform="translate(0, 0)">
              <rect x="153" y="60" width="115" height="84" rx="3" fill="#22221F" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <path d="M190 92 L205 92 L215 115 L180 115 Z" fill="#2A1E17" />
              <rect x="195" y="82" width="10" height="12" fill="#20150F" />
              <text x="161" y="126" fill="#F8F8F6" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Tan Leather Boots</text>
              <text x="161" y="136" fill="#F4C542" fontSize="6.5" fontFamily="monospace">₹3,999</text>
            </g>
          </g>
        )}

        {/* Tab Controls */}
        <g transform="translate(148, 175)" textAnchor="middle">
          <rect x="-80" y="-12" width="46" height="12" rx="1.5" fill={activeCard === 0 ? "#F4C542" : "none"} stroke={activeCard === 0 ? "none" : "rgba(255,255,255,0.2)"} strokeWidth="0.8" className="cursor-pointer" onClick={() => setActiveCard(0)} />
          <text x="-57" y="-3.5" fill={activeCard === 0 ? "#111" : "rgba(255,255,255,0.6)"} fontSize="5.5" fontWeight="bold" fontFamily="monospace" className="cursor-pointer" onClick={() => setActiveCard(0)}>01.LOOK</text>
          
          <rect x="-23" y="-12" width="46" height="12" rx="1.5" fill={activeCard === 1 ? "#F4C542" : "none"} stroke={activeCard === 1 ? "none" : "rgba(255,255,255,0.2)"} strokeWidth="0.8" className="cursor-pointer" onClick={() => setActiveCard(1)} />
          <text x="0" y="-3.5" fill={activeCard === 1 ? "#111" : "rgba(255,255,255,0.6)"} fontSize="5.5" fontWeight="bold" fontFamily="monospace" className="cursor-pointer" onClick={() => setActiveCard(1)}>02.FABRIC</text>
          
          <rect x="34" y="-12" width="46" height="12" rx="1.5" fill={activeCard === 2 ? "#F4C542" : "none"} stroke={activeCard === 2 ? "none" : "rgba(255,255,255,0.2)"} strokeWidth="0.8" className="cursor-pointer" onClick={() => setActiveCard(2)} />
          <text x="57" y="-3.5" fill={activeCard === 2 ? "#111" : "rgba(255,255,255,0.6)"} fontSize="5.5" fontWeight="bold" fontFamily="monospace" className="cursor-pointer" onClick={() => setActiveCard(2)}>03.STYLE</text>
        </g>
      </svg>
      
      <div className="absolute top-6 right-6 font-mono text-[9px] text-[#F4C542] uppercase tracking-widest animate-pulse">
        ● Myntra Catalog Grid
      </div>
    </div>
  );
}

// 3. ProductVideosScene (3D Oscilloscope Video wave)
// 3. ProductVideosScene (Video Editing Timeline & Color Grading Visualizer)
function ProductVideosScene() {
  const [activeState, setActiveState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveState((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-[#111111] flex items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      <svg width="100%" height="100%" viewBox="0 0 320 200" className="relative z-10 select-none">
        {/* Main Monitor Preview Screen */}
        <rect x="42" y="10" width="236" height="120" rx="4" fill="#0D0D0D" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        {/* State 0: Timeline & Editing Video */}
        {activeState === 0 && (
          <g>
            {/* Monitor Preview Details */}
            {/* Product outline (shoe) */}
            <path
              d="M120 90 L135 60 L205 60 L195 90 L160 90 Z"
              fill="none"
              stroke="#F4C542"
              strokeWidth="1.5"
              style={{ animation: "bottleFloat 4s ease-in-out infinite alternate" }}
            />
            {/* Crop Overlay Brackets */}
            <path d="M52 25h10M52 25v10M268 25h-10M268 25v10M52 115h10M52 115v-10M268 115h-10M268 115v-10" stroke="#FFF" strokeWidth="0.8" opacity="0.4" />
            
            {/* REC Dot & Timecode */}
            <circle cx="62" cy="32" r="2.5" fill="#FF5F56" className="animate-pulse" />
            <text x="70" y="35" fill="#FFF" fontSize="6.5" fontFamily="monospace">REC</text>
            <text x="258" y="35" fill="#F8F8F6" fontSize="6.5" fontFamily="monospace" textAnchor="end">00:02:14:18</text>
            
            {/* Central Play Button */}
            <circle cx="160" cy="70" r="14" fill="rgba(244,197,66,0.15)" />
            <path d="M156 64 L168 70 L156 76 Z" fill="#F4C542" />

            {/* Video timeline controls */}
            <g transform="translate(15, 140)">
              <rect x="0" y="0" width="290" height="45" rx="3" fill="#1C1C1A" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              
              {/* Tracks */}
              {/* Video Track (Gold) */}
              <rect x="10" y="5" width="80" height="8" rx="1.5" fill="#F4C542" opacity="0.6" />
              <rect x="95" y="5" width="110" height="8" rx="1.5" fill="#F4C542" />
              <rect x="210" y="5" width="70" height="8" rx="1.5" fill="#F4C542" opacity="0.4" />
              
              {/* Audio Track (Green) */}
              <rect x="10" y="17" width="150" height="8" rx="1.5" fill="#27C93F" opacity="0.4" />
              <rect x="165" y="17" width="115" height="8" rx="1.5" fill="#27C93F" opacity="0.7" />
              
              {/* Overlay Track (Purple) */}
              <rect x="95" y="29" width="60" height="8" rx="1.5" fill="#BD93F9" opacity="0.8" />

              {/* Playhead */}
              <line x1="120" y1="2" x2="120" y2="40" stroke="#FF5F56" strokeWidth="1.2" />
              <polygon points="117,2 123,2 123,5 120,8 117,5" fill="#FF5F56" />
            </g>
          </g>
        )}

        {/* State 1: Color Grading LUTs */}
        {activeState === 1 && (
          <g>
            {/* Split Screen Graded vs Raw */}
            <rect x="43" y="11" width="117" height="118" fill="rgba(255,255,255,0.02)" />
            <text x="52" y="118" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="sans-serif">RAW LOG FOOTAGE</text>
            
            <rect x="160" y="11" width="117" height="118" fill="rgba(244,197,66,0.04)" />
            <text x="268" y="118" fill="#F4C542" fontSize="6" fontFamily="sans-serif" textAnchor="end">COLOR GRADED (LUT)</text>
            
            <line x1="160" y1="11" x2="160" y2="129" stroke="#F4C542" strokeWidth="1" strokeDasharray="3 3" />

            {/* Product Bottle (Split colored: Left side dull grey, Right side gold) */}
            <g transform="translate(145, 30)">
              {/* Left Side */}
              <path d="M0 10 H15 V70 H0 Z" fill="#444" stroke="#555" strokeWidth="0.5" />
              <path d="M5 0 H15 V10 H5 Z" fill="#333" stroke="#555" strokeWidth="0.5" />
              {/* Right Side */}
              <path d="M15 10 H30 V70 H15 Z" fill="url(#beautyBottleGrad)" stroke="#111" strokeWidth="0.5" />
              <path d="M15 0 H25 V10 H15 Z" fill="#D8C7A4" stroke="#111" strokeWidth="0.5" />
            </g>

            {/* Three Color Grading Wheels */}
            <g transform="translate(15, 140)">
              <rect x="0" y="0" width="290" height="45" rx="3" fill="#1C1C1A" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              
              {/* Lift Wheel */}
              <g transform="translate(60, 20)">
                <circle cx="0" cy="0" r="14" fill="none" stroke="#666" strokeWidth="0.8" />
                <circle cx="-5" cy="-7" r="1.5" fill="#F4C542" />
                <text x="0" y="21" fill="rgba(255,255,255,0.5)" fontSize="5.5" textAnchor="middle" fontFamily="monospace">LIFT</text>
              </g>

              {/* Gamma Wheel */}
              <g transform="translate(145, 20)">
                <circle cx="0" cy="0" r="14" fill="none" stroke="#666" strokeWidth="0.8" />
                <circle cx="6" cy="4" r="1.5" fill="#F4C542" />
                <text x="0" y="21" fill="rgba(255,255,255,0.5)" fontSize="5.5" textAnchor="middle" fontFamily="monospace">GAMMA</text>
              </g>

              {/* Gain Wheel */}
              <g transform="translate(230, 20)">
                <circle cx="0" cy="0" r="14" fill="none" stroke="#666" strokeWidth="0.8" />
                <circle cx="8" cy="-5" r="1.5" fill="#F4C542" />
                <text x="0" y="21" fill="rgba(255,255,255,0.5)" fontSize="5.5" textAnchor="middle" fontFamily="monospace">GAIN</text>
              </g>
            </g>
          </g>
        )}

        {/* State 2: Vertical Phone Social Format */}
        {activeState === 2 && (
          <g>
            {/* Phone Mockup Frame in Center */}
            <g transform="translate(125, 15)">
              <rect x="0" y="0" width="70" height="110" rx="8" fill="#0D0D0D" stroke="#E5E5E5" strokeWidth="1" />
              <rect x="3" y="5" width="64" height="100" rx="5" fill="#1C1C1A" />
              <rect x="23" y="0" width="24" height="4" rx="1.5" fill="#0D0D0D" />
              
              {/* Product inside phone screen */}
              <rect x="18" y="25" width="34" height="48" rx="2" fill="#2E2E2A" stroke="#F4C542" strokeWidth="0.8" />
              <polygon points="25,49 45,49 41,65 29,65" fill="#F4C542" opacity="0.3" />
              
              {/* Social Overlay UI Representation */}
              <circle cx="58" cy="40" r="2.5" fill="#FF5F56" />
              <circle cx="58" cy="52" r="2.5" fill="#FFF" />
              <circle cx="58" cy="64" r="2.5" fill="#FFF" />
              
              {/* Social bottom labels */}
              <rect x="8" y="85" width="32" height="4" rx="0.5" fill="#FFF" opacity="0.8" />
              <rect x="8" y="92" width="22" height="3" rx="0.5" fill="#FFF" opacity="0.4" />
            </g>

            {/* Left and Right Info Cards */}
            <g transform="translate(15, 35)">
              <rect x="0" y="0" width="95" height="40" rx="3" fill="#1C1C1A" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              <text x="10" y="15" fill="#F4C542" fontSize="6.5" fontFamily="monospace" fontWeight="bold">9:16 FORMAT</text>
              <text x="10" y="26" fill="rgba(255,255,255,0.6)" fontSize="5.5" fontFamily="sans-serif">Reels & TikTok</text>
              <text x="10" y="33" fill="rgba(255,255,255,0.6)" fontSize="5.5" fontFamily="sans-serif">Safe-Zone Guides</text>
            </g>

            <g transform="translate(210, 35)">
              <rect x="0" y="0" width="95" height="40" rx="3" fill="#1C1C1A" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              <text x="10" y="15" fill="#FFF" fontSize="6.5" fontFamily="monospace" fontWeight="bold">ENGAGING MOTION</text>
              <text x="10" y="26" fill="rgba(255,255,255,0.6)" fontSize="5.5" fontFamily="sans-serif">High-Speed FX</text>
              <text x="10" y="33" fill="rgba(255,255,255,0.6)" fontSize="5.5" fontFamily="sans-serif">Dynamic Rhythm</text>
            </g>
          </g>
        )}
      </svg>
      
      <div className="absolute top-6 right-6 font-mono text-[9px] text-[#F4C542] uppercase tracking-widest animate-pulse">
        ● Product Video Studio
      </div>
    </div>
  );
}

// 4. BrandStoresScene (Amazon Storefront Responsive Builder & Drag Resizer)
function BrandStoresScene() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev + 1) % 100);
    }, 80); // 80ms per tick => 8 seconds total cycle
    return () => clearInterval(timer);
  }, []);

  const activeTab = time >= 20 ? 1 : 0;

  // Resizing logic
  let width = 280;
  let xOffset = 20;
  let isResizing = false;

  if (time >= 45 && time < 65) {
    isResizing = true;
    const p = (time - 45) / 20; // 0 to 1
    width = 280 - 170 * p;
    xOffset = 20 + 85 * p;
  } else if (time >= 65 && time < 80) {
    width = 110;
    xOffset = 105;
  } else if (time >= 80 && time < 100) {
    isResizing = true;
    const p = (time - 80) / 20; // 0 to 1
    width = 110 + 170 * p;
    xOffset = 105 - 85 * p;
  }

  // Cursor position
  let cursorX = 240;
  let cursorY = 150;
  let isClicking = false;

  if (time < 20) {
    const p = time / 20;
    // Move to "BEST SELLERS" tab center (target x = xOffset + 85, y = 72)
    cursorX = 240 + (20 + 85 - 240) * p;
    cursorY = 150 + (72 - 150) * p;
  } else if (time >= 20 && time < 35) {
    cursorX = 20 + 85;
    cursorY = 72;
    if (time >= 20 && time < 24) {
      isClicking = true;
    }
  } else if (time >= 35 && time < 45) {
    const p = (time - 35) / 10;
    // Move to right edge of browser: x = xOffset + width (which is 20 + 280 = 300), y = 100
    cursorX = (20 + 85) + (300 - (20 + 85)) * p;
    cursorY = 72 + (100 - 72) * p;
  } else if (time >= 45 && time < 65) {
    // Follow right edge
    cursorX = xOffset + width;
    cursorY = 100;
  } else if (time >= 65 && time < 80) {
    // Rest at the mobile edge
    cursorX = xOffset + width;
    cursorY = 100;
  } else if (time >= 80 && time < 100) {
    // Follow right edge expanding
    cursorX = xOffset + width;
    cursorY = 100;
  }

  const addressText = width > 180 ? "amazon.com/stores/yourbrand" : "yourbrand.co";

  return (
    <div className="w-full h-full bg-[#111111] flex items-center justify-center relative overflow-hidden">
      {/* Grid line background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      <svg width="100%" height="100%" viewBox="0 0 320 200" className="relative z-10 select-none">
        <defs>
          <linearGradient id="brandStoreHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E1E1C" />
            <stop offset="50%" stopColor="#2D2D2A" />
            <stop offset="100%" stopColor="#1E1E1C" />
          </linearGradient>
        </defs>

        {/* Browser Mockup Window */}
        <rect x={xOffset - 5} y="15" width={width + 10} height="170" rx="6" fill="#1C1C1A" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        
        {/* Browser Header Bar */}
        <circle cx={xOffset + 8} cy="25" r="2" fill="#FF5F56" />
        <circle cx={xOffset + 14} cy="25" r="2" fill="#FFBD2E" />
        <circle cx={xOffset + 20} cy="25" r="2" fill="#27C93F" />
        
        <rect x={xOffset + 45} y="21" width={width - 80} height="8" rx="2.5" fill="#2E2E2A" />
        <text x={xOffset + 45 + (width - 80) / 2} y="27" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace" textAnchor="middle">{addressText}</text>

        {/* Brand Store Header Banner */}
        <g transform={`translate(${xOffset}, 34)`}>
          <rect x="0" y="0" width={width} height="30" fill="url(#brandStoreHeaderGrad)" rx="2" />
          
          {/* Logo representation */}
          <circle cx="16" cy="15" r="7" fill="rgba(255,255,255,0.1)" stroke="#F4C542" strokeWidth="0.8" />
          <text x="16" y="17.5" fill="#FFF" fontSize="4.5" fontFamily="'Bebas Neue', sans-serif" textAnchor="middle">VITA</text>
          
          <text x="28" y="18" fill="#FFF" fontSize={width > 180 ? 8 : 6.5} fontWeight="bold" fontFamily="sans-serif">VITA GROW</text>
          {width > 180 && (
            <text x={width - 10} y="18" fill="rgba(255,255,255,0.5)" fontSize="5" fontFamily="sans-serif" textAnchor="end">STOREFRONT</text>
          )}
        </g>

        {/* Store Navigation Bar */}
        <g transform={`translate(${xOffset}, 66)`}>
          <rect x="0" y="0" width={width} height="12" fill="#2E2E2A" />
          {width > 180 ? (
            <>
              <text x="15" y="8" fill={activeTab === 0 ? "#F4C542" : "rgba(255,255,255,0.6)"} fontSize="6" fontFamily="sans-serif" fontWeight="bold">HOME</text>
              <text x="50" y="8" fill={activeTab === 1 ? "#F4C542" : "rgba(255,255,255,0.6)"} fontSize="6" fontFamily="sans-serif" fontWeight="bold">BEST SELLERS</text>
              <text x="110" y="8" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="sans-serif">NEW ARRIVALS</text>
              <text x="170" y="8" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="sans-serif">A+ CONTENT</text>
            </>
          ) : (
            <>
              <text x="10" y="8" fill={activeTab === 0 ? "#F4C542" : "rgba(255,255,255,0.6)"} fontSize="5.5" fontFamily="sans-serif" fontWeight="bold">HOME</text>
              <text x="42" y="8" fill={activeTab === 1 ? "#F4C542" : "rgba(255,255,255,0.6)"} fontSize="5.5" fontFamily="sans-serif" fontWeight="bold">BEST</text>
              <g transform={`translate(${width - 15}, 2)`}>
                <line x1="0" y1="2" x2="8" y2="2" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
                <line x1="0" y1="4.5" x2="8" y2="4.5" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
                <line x1="0" y1="7" x2="8" y2="7" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
              </g>
            </>
          )}
        </g>

        {/* Page Content */}
        {width > 180 ? (
          // Desktop content
          activeTab === 0 ? (
            <g transform={`translate(${xOffset}, 84)`}>
              {/* Featured Brand Video Block */}
              <rect x="4" y="0" width="130" height="88" rx="2" fill="#2E2E2A" />
              <circle cx="69" cy="44" r="12" fill="rgba(244,197,66,0.2)" />
              <path d="M66 39 L76 44 L66 49 Z" fill="#F4C542" />
              <rect x="10" y="6" width="45" height="7" rx="1" fill="rgba(255,255,255,0.15)" />
              <text x="14" y="11.5" fill="#FFF" fontSize="4.5">WATCH IN ACTION</text>

              {/* Right Side: Product Shopping Tiles */}
              <g transform="translate(140, 0)">
                {/* Tile 1 */}
                <rect x="0" y="0" width="136" height="41" rx="2" fill="#2E2E2A" />
                <rect x="6" y="5" width="12" height="31" fill="#F4C542" rx="1" />
                <text x="24" y="14" fill="#FFF" fontSize="5.5" fontWeight="bold">Organic Spirulina Pack</text>
                <text x="24" y="23" fill="#F4C542" fontSize="5">★★★★★</text>
                <text x="24" y="32" fill="#FFF" fontSize="6" fontWeight="bold">$19.99</text>
                <rect x="94" y="23" width="36" height="12" rx="1.5" fill="#FFD814" />
                <text x="112" y="31" fill="#111" fontSize="4.5" textAnchor="middle" fontWeight="bold">Add to Cart</text>

                {/* Tile 2 */}
                <g transform="translate(0, 47)">
                  <rect x="0" y="0" width="136" height="41" rx="2" fill="#2E2E2A" />
                  <rect x="6" y="5" width="12" height="31" fill="#e5e5e0" rx="1" />
                  <text x="24" y="14" fill="#FFF" fontSize="5.5" fontWeight="bold">Bio-Active Magnesium</text>
                  <text x="24" y="23" fill="#F4C542" fontSize="5">★★★★★</text>
                  <text x="24" y="32" fill="#FFF" fontSize="6" fontWeight="bold">$24.99</text>
                  <rect x="94" y="23" width="36" height="12" rx="1.5" fill="#FFD814" />
                  <text x="112" y="31" fill="#111" fontSize="4.5" textAnchor="middle" fontWeight="bold">Add to Cart</text>
                </g>
              </g>
            </g>
          ) : (
            <g transform={`translate(${xOffset}, 84)`}>
              {/* 3-Column Product Showcase */}
              {/* Column 1 */}
              <g transform="translate(4, 0)">
                <rect x="0" y="0" width="84" height="88" rx="2" fill="#2E2E2A" />
                <rect x="0" y="0" width="48" height="8" fill="#FFD814" rx="1" />
                <text x="24" y="6" fill="#111" fontSize="4.5" textAnchor="middle" fontWeight="bold">Best Seller</text>
                <rect x="34" y="16" width="16" height="38" fill="#F4C542" rx="1.5" />
                <text x="42" y="66" fill="#FFF" fontSize="5.5" textAnchor="middle" fontWeight="bold">Spirulina Powder</text>
                <text x="42" y="74" fill="#F4C542" fontSize="5" textAnchor="middle">★★★★★</text>
                <text x="42" y="82" fill="#FFF" fontSize="6" textAnchor="middle" fontWeight="bold">$19.99</text>
              </g>

              {/* Column 2 */}
              <g transform="translate(98, 0)">
                <rect x="0" y="0" width="84" height="88" rx="2" fill="#2E2E2A" />
                <rect x="34" y="16" width="16" height="38" fill="#e5e5e0" rx="1.5" />
                <text x="42" y="66" fill="#FFF" fontSize="5.5" textAnchor="middle" fontWeight="bold">Magnesium Pure</text>
                <text x="42" y="74" fill="#F4C542" fontSize="5" textAnchor="middle">★★★★★</text>
                <text x="42" y="82" fill="#FFF" fontSize="6" textAnchor="middle" fontWeight="bold">$24.99</text>
              </g>

              {/* Column 3 */}
              <g transform="translate(192, 0)">
                <rect x="0" y="0" width="84" height="88" rx="2" fill="#2E2E2A" />
                <rect x="34" y="16" width="16" height="38" fill="#C46E52" rx="1.5" />
                <text x="42" y="66" fill="#FFF" fontSize="5.5" textAnchor="middle" fontWeight="bold">Daily Probiotics</text>
                <text x="42" y="74" fill="#F4C542" fontSize="5" textAnchor="middle">★★★★★</text>
                <text x="42" y="82" fill="#FFF" fontSize="6" textAnchor="middle" fontWeight="bold">$28.50</text>
              </g>
            </g>
          )
        ) : (
          // Mobile content
          activeTab === 0 ? (
            <g transform={`translate(${xOffset + 10}, 84)`}>
              <rect x="0" y="0" width={width - 20} height="88" rx="2" fill="#2E2E2A" />
              <rect x="8" y="10" width="20" height="48" fill="#F4C542" rx="1.5" />
              
              <text x="34" y="18" fill="#FFF" fontSize="5.5" fontWeight="bold">Organic Spirulina</text>
              <text x="34" y="27" fill="#F4C542" fontSize="5">★★★★★</text>
              <text x="34" y="38" fill="#FFF" fontSize="6.5" fontWeight="bold">$19.99</text>
              
              <rect x="34" y="48" width="46" height="12" rx="1.5" fill="#FFD814" />
              <text x="57" y="56" fill="#111" fontSize="4.5" textAnchor="middle" fontWeight="bold">Add to Cart</text>
              
              <rect x="8" y="68" width={width - 36} height="12" fill="rgba(255,255,255,0.05)" rx="1" />
              <text x="12" y="76" fill="rgba(255,255,255,0.5)" fontSize="4.5">Organic Superfood Powder</text>
            </g>
          ) : (
            <g transform={`translate(${xOffset + 10}, 84)`}>
              <rect x="0" y="0" width={width - 20} height="88" rx="2" fill="#2E2E2A" />
              <rect x="8" y="10" width="20" height="48" fill="#e5e5e0" rx="1.5" />
              
              <rect x="0" y="0" width="38" height="7" fill="#FFD814" rx="0.5" />
              <text x="19" y="5.5" fill="#111" fontSize="4" textAnchor="middle" fontWeight="bold">Best Seller</text>
              
              <text x="34" y="18" fill="#FFF" fontSize="5.5" fontWeight="bold">Magnesium Pure</text>
              <text x="34" y="27" fill="#F4C542" fontSize="5">★★★★★</text>
              <text x="34" y="38" fill="#FFF" fontSize="6.5" fontWeight="bold">$24.99</text>
              
              <rect x="34" y="48" width="46" height="12" rx="1.5" fill="#FFD814" />
              <text x="57" y="56" fill="#111" fontSize="4.5" textAnchor="middle" fontWeight="bold">Add to Cart</text>
              
              <rect x="8" y="68" width={width - 36} height="12" fill="rgba(255,255,255,0.05)" rx="1" />
              <text x="12" y="76" fill="rgba(255,255,255,0.5)" fontSize="4.5">High absorption vegan capsules</text>
            </g>
          )
        )}

        {/* Cursor representation */}
        {isResizing ? (
          // Resize cursor (double headed arrow)
          <g transform={`translate(${cursorX}, ${cursorY})`} className="pointer-events-none">
            <path d="M-8 0 L-4 -4 L-4 -1.5 L4 -1.5 L4 -4 L8 0 L4 4 L4 1.5 L-4 1.5 L-4 4 Z" fill="#FFF" stroke="#000" strokeWidth="0.8" />
          </g>
        ) : (
          // Pointer cursor
          <g transform={`translate(${cursorX}, ${cursorY})`} className="pointer-events-none" style={{ transition: "transform 0.05s ease-out" }}>
            <path d="M0 0 L3 10 L6 8 L10 12 L12 10 L8 6 L10 3 Z" fill="#FFF" stroke="#000" strokeWidth="0.8" />
            {isClicking && (
              <circle cx="0" cy="0" r="8" fill="none" stroke="#F4C542" strokeWidth="1.5" className="animate-ping" />
            )}
          </g>
        )}
      </svg>
      
      <div className="absolute top-6 right-6 font-mono text-[9px] text-[#F4C542] uppercase tracking-widest animate-pulse">
        ● Amazon Brand Store
      </div>
    </div>
  );
}

// 5. EcommerceWebsitesScene (Shopify Landing Builder & Multi-Stage Checkout Flow)
function EcommerceWebsitesScene() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev + 1) % 75);
    }, 100); // 100ms per tick => 7.5 seconds total cycle
    return () => clearInterval(timer);
  }, []);

  const activeStep = tick < 25 ? 0 : tick < 50 ? 1 : 2;
  const isPaying = tick >= 50 && tick < 62;
  const isProcessing = tick >= 58 && tick < 62;

  return (
    <div className="w-full h-full bg-[#111111] flex items-center justify-center relative overflow-hidden">
      {/* Grid line background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      <svg width="100%" height="100%" viewBox="0 0 320 200" className="relative z-10 select-none">
        {/* Browser container */}
        <rect x="15" y="15" width="290" height="170" rx="6" fill="#1C1C1A" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        
        {/* Window controls */}
        <circle cx="28" cy="25" r="2" fill="#FF5F56" />
        <circle cx="34" cy="25" r="2" fill="#FFBD2E" />
        <circle cx="40" cy="25" r="2" fill="#27C93F" />
        <rect x="65" y="21" width="190" height="8" rx="2.5" fill="#2E2E2A" />
        <text x="160" y="27" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace" textAnchor="middle">shopify.com/yourstore/preview</text>

        {/* Step 0: Landing Page Wireframe Assembly */}
        {activeStep === 0 && (
          <g>
            {/* Header */}
            <rect x="22" y="34" width="276" height="10" fill="#2E2E2A" rx="1" />
            <circle cx="32" cy="39" r="3" fill="#FFF" opacity="0.3" />
            <rect x="42" y="37" width="30" height="4" fill="#FFF" opacity="0.2" rx="0.5" />
            <rect x="250" y="37" width="40" height="4" fill="#F4C542" rx="0.5" />
            
            {/* Hero Section */}
            <g transform="translate(22, 48)">
              <rect x="0" y="0" width="276" height="52" fill="#2E2E2A" rx="2" style={{ animation: "bottleFloat 3s ease-in-out infinite alternate" }} />
              <rect x="12" y="12" width="110" height="8" rx="1.5" fill="#444" />
              <rect x="12" y="24" width="80" height="5" rx="1" fill="#444" />
              <rect x="12" y="34" width="45" height="10" rx="2" fill="#F4C542" />
              <text x="34.5" y="41" fill="#111" fontSize="5" fontWeight="bold" textAnchor="middle">SHOP NOW</text>
              
              {/* Hero Image representation */}
              <rect x="186" y="6" width="78" height="40" rx="3" fill="#3D3D39" />
              <ellipse cx="225" cy="38" rx="16" ry="3.5" fill="rgba(0,0,0,0.15)" />
              <rect x="219" y="10" width="12" height="24" fill="#e5e5e0" rx="1" />
            </g>

            {/* Features block */}
            <g transform="translate(22, 105)">
              <rect x="0" y="0" width="86" height="66" rx="2" fill="#2E2E2A" />
              <circle cx="43" cy="20" r="10" fill="#3D3D39" />
              <rect x="10" y="38" width="66" height="6" fill="#444" rx="1" />
              <rect x="20" y="48" width="46" height="5" fill="#444" rx="1" />
              
              <rect x="95" y="0" width="86" height="66" rx="2" fill="#2E2E2A" />
              <circle cx="138" cy="20" r="10" fill="#3D3D39" />
              <rect x="105" y="38" width="66" height="6" fill="#444" rx="1" />
              <rect x="115" y="48" width="46" height="5" fill="#444" rx="1" />

              <rect x="190" y="0" width="86" height="66" rx="2" fill="#2E2E2A" />
              <circle cx="233" cy="20" r="10" fill="#3D3D39" />
              <rect x="200" y="38" width="66" height="6" fill="#444" rx="1" />
              <rect x="210" y="48" width="46" height="5" fill="#444" rx="1" />
            </g>
          </g>
        )}

        {/* Step 1: Add to Cart Slideout Drawer */}
        {activeStep === 1 && (
          <g>
            {/* Landing page in background (dimmed) */}
            <rect x="22" y="34" width="276" height="142" fill="#20201F" rx="2" />
            <rect x="22" y="34" width="276" height="142" fill="rgba(0,0,0,0.5)" rx="2" />

            {/* Cart Drawer sliding in from right */}
            <g transform="translate(172, 34)" style={{ animation: "cartSlideIn 0.4s ease-out" }}>
              <rect x="0" y="0" width="126" height="142" fill="#242422" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" rx="2" />
              
              {/* Header */}
              <text x="10" y="16" fill="#FFF" fontSize="8" fontWeight="bold">Your Cart (1)</text>
              <line x1="108" y1="10" x2="116" y2="18" stroke="#FFF" strokeWidth="1" />
              <line x1="116" y1="10" x2="108" y2="18" stroke="#FFF" strokeWidth="1" />
              
              {/* Product Row */}
              <g transform="translate(10, 26)">
                <rect x="0" y="0" width="106" height="34" rx="2" fill="#2E2E2A" />
                <rect x="4" y="4" width="16" height="26" fill="#F4C542" rx="1.5" />
                <text x="26" y="12" fill="#FFF" fontSize="5.5" fontWeight="bold">Luxe Hoodie</text>
                <text x="26" y="22" fill="rgba(255,255,255,0.4)" fontSize="4.5">Size: L | Qty: 1</text>
                <text x="82" y="17" fill="#FFF" fontSize="5.5" fontWeight="bold">$89.00</text>
              </g>

              {/* Free Shipping Tracker */}
              <g transform="translate(10, 70)">
                <text x="0" y="5" fill="#F4C542" fontSize="5" fontWeight="bold">Free Shipping Unlocked!</text>
                <rect x="0" y="10" width="106" height="3" rx="1.5" fill="#444" />
                <rect x="0" y="10" width="106" height="3" rx="1.5" fill="#27C93F" />
              </g>

              {/* Checkout details */}
              <g transform="translate(10, 100)">
                <text x="0" y="5" fill="rgba(255,255,255,0.4)" fontSize="5.5">Subtotal:</text>
                <text x="106" y="5" fill="#FFF" fontSize="6.5" fontWeight="bold" textAnchor="end">$89.00</text>
                
                <rect x="0" y="14" width="106" height="18" rx="2.5" fill="#F4C542" className="animate-pulse" />
                <text x="53" y="25.5" fill="#111" fontSize="6.5" fontWeight="bold" textAnchor="middle">CHECKOUT NOW</text>
              </g>
            </g>
          </g>
        )}

        {/* Step 2: Secure Checkout Form & Success Screen */}
        {activeStep === 2 && (
          isPaying ? (
            // Secure Credit Card Checkout Form overlay
            <g>
              {/* Background checkout page (dimmed) */}
              <rect x="22" y="34" width="276" height="142" fill="#20201F" rx="2" />
              <rect x="22" y="34" width="276" height="142" fill="rgba(0,0,0,0.5)" rx="2" />

              {/* Credit card secure payment modal */}
              <g transform="translate(68, 42)">
                <rect x="0" y="0" width="184" height="126" rx="5" fill="#242422" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                
                {/* Header title */}
                <text x="12" y="16" fill="#FFF" fontSize="8" fontWeight="bold">Secure Checkout</text>
                <text x="172" y="15" fill="rgba(255,255,255,0.3)" fontSize="5.5" textAnchor="end">Order summary: $89.00</text>
                
                {/* Card input field */}
                <g transform="translate(12, 24)">
                  <rect x="0" y="0" width="160" height="15" fill="#2E2E2A" rx="2" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <text x="8" y="10" fill="#FFF" fontSize="6" fontFamily="monospace">•••• •••• •••• 4242</text>
                  {/* Card type icon (Visa) */}
                  <rect x="142" y="3.5" width="12" height="8" rx="1" fill="#1A1F2C" />
                  <text x="148" y="9.5" fill="#F4C542" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">V</text>
                </g>

                {/* Expiry and CVV */}
                <g transform="translate(12, 45)">
                  <rect x="0" y="0" width="76" height="15" fill="#2E2E2A" rx="2" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <text x="8" y="10" fill="rgba(255,255,255,0.8)" fontSize="6" fontFamily="monospace">12 / 28</text>
                  
                  <rect x="84" y="0" width="76" height="15" fill="#2E2E2A" rx="2" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <text x="92" y="10" fill="rgba(255,255,255,0.8)" fontSize="6" fontFamily="monospace">•••</text>
                </g>

                {/* Safety Badge */}
                <g transform="translate(12, 68)">
                  <rect x="0" y="0" width="160" height="12" rx="1.5" fill="rgba(39,201,63,0.05)" />
                  <text x="6" y="8.5" fill="#27C93F" fontSize="5.5" fontWeight="bold">🔒 SSL Encrypted Secure Checkout</text>
                </g>

                {/* Pay Button */}
                <g transform="translate(12, 88)">
                  <rect x="0" y="0" width="160" height="20" rx="3" fill="#F4C542" />
                  {isProcessing ? (
                    <>
                      {/* Spinner + PROCESSING text */}
                      <text x="88" y="12.5" fill="#111" fontSize="7" fontWeight="bold" textAnchor="middle">PROCESSING...</text>
                      <circle cx="48" cy="10" r="3" fill="none" stroke="#111" strokeWidth="0.8" strokeDasharray="5 3" style={{ animation: "spinOrbit 1s linear infinite" }} />
                    </>
                  ) : (
                    <text x="80" y="12.5" fill="#111" fontSize="7" fontWeight="bold" textAnchor="middle">COMPLETE ORDER • $89.00</text>
                  )}
                </g>
              </g>
            </g>
          ) : (
            // Checkout Success confirmation screen
            <g>
              {/* Confirmation screen */}
              <circle cx="160" cy="85" r="22" fill="rgba(39,201,63,0.08)" stroke="#27C93F" strokeWidth="1.5" />
              <path d="M152 85 L157 90 L169 77" fill="none" stroke="#27C93F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              
              <text x="160" y="124" fill="#FFF" fontSize="10.5" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">ORDER CONFIRMED</text>
              <text x="160" y="136" fill="rgba(255,255,255,0.4)" fontSize="6" textAnchor="middle">Thank you! Order #18420 is complete.</text>
              
              {/* Confetti particles */}
              <circle cx="120" cy="60" r="1.5" fill="#F4C542" opacity="0.8" />
              <circle cx="205" cy="50" r="2.5" fill="#F4C542" opacity="0.6" />
              <circle cx="105" cy="110" r="2" fill="#FFF" opacity="0.5" />
              <circle cx="220" cy="115" r="1.5" fill="#FFF" opacity="0.7" />
            </g>
          )
        )}
      </svg>

      <div className="absolute top-6 right-6 font-mono text-[9px] text-[#F4C542] uppercase tracking-widest animate-pulse">
        ● Shopify Checkout Flow
      </div>
    </div>
  );
}

export function Services() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isHoveredList, setIsHoveredList] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isSectionInView, setIsSectionInView] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor accordion intersection to pause autoplay when out of viewport
  useEffect(() => {
    if (!accordionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.05 } // Trigger when at least 5% of the accordion is visible
    );
    observer.observe(accordionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-play interval while user is idle (neither hovering nor scrolling) and section is in view
  useEffect(() => {
    if (isHoveredList || isScrolling || !isSectionInView) return;

    // Disable autoplay on mobile/tablet to prevent layout shifts and scroll jerks
    if (window.innerWidth < 1024) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % services.length);
    }, 3200); // Cycles every 3.2 seconds
    return () => clearInterval(interval);
  }, [isHoveredList, isScrolling, isSectionInView]);

  // Handle scrolling state updates to disable hover triggers while moving
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setIsHoveredList(false); // Scrolling resets the hover lock

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const renderScene = (idx: number) => {
    return (
      <div className="absolute inset-0 w-full h-full">
        {/* Scene 1 */}
        <div
          style={{
            opacity: idx === 0 ? 1 : 0,
            transform: idx === 0 ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: idx === 0 ? "auto" : "none",
          }}
          className="absolute inset-0"
        >
          <ListingImagesScene />
        </div>
        {/* Scene 2 */}
        <div
          style={{
            opacity: idx === 1 ? 1 : 0,
            transform: idx === 1 ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: idx === 1 ? "auto" : "none",
          }}
          className="absolute inset-0"
        >
          <ListingCreativesScene />
        </div>
        {/* Scene 3 */}
        <div
          style={{
            opacity: idx === 2 ? 1 : 0,
            transform: idx === 2 ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: idx === 2 ? "auto" : "none",
          }}
          className="absolute inset-0"
        >
          <ProductVideosScene />
        </div>
        {/* Scene 4 */}
        <div
          style={{
            opacity: idx === 3 ? 1 : 0,
            transform: idx === 3 ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: idx === 3 ? "auto" : "none",
          }}
          className="absolute inset-0"
        >
          <BrandStoresScene />
        </div>
        {/* Scene 5 */}
        <div
          style={{
            opacity: idx === 4 ? 1 : 0,
            transform: idx === 4 ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: idx === 4 ? "auto" : "none",
          }}
          className="absolute inset-0"
        >
          <EcommerceWebsitesScene />
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="services" className="py-12 md:py-24 relative overflow-hidden" style={{ background: "#F8F8F6" }}>
      {/* Keyframes for our motion graphics */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spinOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes laserSweep {
          0% { transform: translateY(0px); opacity: 0; }
          8% { opacity: 0.85; }
          92% { opacity: 0.85; }
          100% { transform: translateY(130px); opacity: 0; }
        }

        @keyframes equalizerBar {
          0% { transform: scaleY(0.12); }
          100% { transform: scaleY(1); }
        }

        @keyframes timelineProgress {
          0% { transform: translateX(0px); }
          100% { transform: translateX(220px); }
        }

        @keyframes spin3DCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        @keyframes floatParallaxLeft {
          0% { transform: translateX(-50px) rotateY(-20deg) rotateZ(-8deg) translateZ(0); }
          100% { transform: translateX(-65px) rotateY(-23deg) rotateZ(-10deg) translateZ(-15px); }
        }

        @keyframes floatParallaxRight {
          0% { transform: translateX(50px) rotateY(20deg) rotateZ(8deg) translateZ(0); }
          100% { transform: translateX(65px) rotateY(23deg) rotateZ(10deg) translateZ(-15px); }
        }

        @keyframes floatParallaxCenter {
          0% { transform: translateZ(40px) rotateX(10deg) translateY(0px); }
          100% { transform: translateZ(55px) rotateX(15deg) translateY(-8px); }
        }

        @keyframes pulsePlay {
          0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(244,197,66,0.3); }
          50% { transform: scale(1.06); box-shadow: 0 0 25px rgba(244,197,66,0.6); }
        }

        @keyframes waveOscillate {
          0% { transform: translateX(0); }
          100% { transform: translateX(-40px); }
        }

        @keyframes storeSway {
          0% { transform: rotateX(60deg) rotateZ(-40deg) translateY(0); }
          100% { transform: rotateX(62deg) rotateZ(-38deg) translateY(-6px); }
        }

        @keyframes webFloat {
          0% { transform: rotateY(-15deg) rotateX(15deg) translateY(0); }
          100% { transform: rotateY(-12deg) rotateX(12deg) translateY(-6px); }
        }

        @keyframes floatParticleFlow {
          0% { transform: translate(0, 0) scale(0.8); opacity: 0; }
          25% { opacity: 0.6; }
          75% { opacity: 0.6; }
          100% { transform: translate(60px, -60px) scale(0.2); opacity: 0; }
        }

        @keyframes bottleFloat {
          0% { transform: translateY(-3px); }
          100% { transform: translateY(3px); }
        }

        @keyframes calloutPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }

        @keyframes zoomPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes hangerSwing {
          0% { transform: rotate(-3deg); }
          100% { transform: rotate(3deg); }
        }

        @keyframes swatchPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px #F4C542); }
          50% { transform: scale(1.1); filter: drop-shadow(0 0 6px #F4C542); }
        }

        @keyframes cursorBrandStore {
          0% { transform: translate(240px, 150px); }
          30% { transform: translate(45px, 73px); }
          50% { transform: translate(85px, 73px); }
          85% { transform: translate(175px, 105px); }
          100% { transform: translate(240px, 150px); }
        }

        @keyframes cartSlideIn {
          from { transform: translateX(130px); }
          to { transform: translateX(0); }
        }
      `}} />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24 border-b border-[rgba(17,17,17,0.06)] pb-8">
          <div>
            <div className="text-[10px] tracking-[0.25em] text-[#6B6B68] font-bold uppercase mb-4">
              What I Deliver
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(52px, 7vw, 90px)",
                lineHeight: 0.9,
                color: "#111111",
              }}
              className="tracking-tight"
            >
              SERVICES & CAPABILITIES
            </h2>
          </div>
          <div className="w-px h-16 bg-[#F4C542] hidden md:block" />
        </ScrollReveal>

        {/* WHAT I CAN BUILD FOR YOUR BRAND (Spacious capabilities grid) */}
        <div className="mb-28 md:mb-36">
          <ScrollReveal variant="fade-up">
            {/* Header section with clean vertical split */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 text-left">
              <div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(36px, 5vw, 56px)",
                    lineHeight: "0.95",
                    color: "#111111",
                  }}
                  className="tracking-wide uppercase"
                >
                  WHAT I CAN BUILD FOR YOUR BRAND
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: "#6B6B68",
                  maxWidth: "460px",
                  lineHeight: "1.7",
                  fontWeight: 300,
                }}
              >
                Leveraging <span className="bg-[#F4C542]/20 text-[#111111] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">AI-assisted workflows</span> to design, visualize, and build premium assets tailored to your market.
              </p>
            </div>
          </ScrollReveal>

          {/* Clean 5-column grid with classic card hover animations */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {capabilities.map((c, idx) => (
              <ScrollReveal
                key={c.title}
                variant="fade-up"
                delay={idx * 50}
              >
                <div
                  className="group/item border border-[rgba(17,17,17,0.06)] bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#F4C542] hover:shadow-lg hover:-translate-y-1.5 cursor-pointer h-full min-h-[160px]"
                >
                  {/* Clean SVG Icon container */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-50/50 group-hover/item:bg-[#F4C542]/10 group-hover/item:scale-105 transition-all duration-300 mb-5">
                    {c.icon}
                  </div>
                  
                  {/* Title */}
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      lineHeight: "1.4",
                      color: "#111111",
                      fontWeight: 700,
                    }}
                    className="tracking-tight uppercase group-hover/item:text-[#F4C542] transition-colors duration-300"
                  >
                    {c.title}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Clean footer banner for custom visual solutions */}
          <ScrollReveal variant="fade-up" delay={200}>
            <a
              href={`${import.meta.env.BASE_URL}start-project`}
              className="mt-12 border border-[rgba(17,17,17,0.08)] bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm text-left hover:border-[#F4C542] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_32px_-8px_rgba(244,197,66,0.35)] transition-all duration-300 cursor-pointer select-none block"
            >
              <h4
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "32px",
                  lineHeight: "1",
                  color: "#111111",
                }}
                className="tracking-wider uppercase"
              >
                Need something not listed here?
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#6B6B68",
                  maxWidth: "640px",
                  lineHeight: "1.7",
                  fontWeight: 300,
                }}
              >
                If it can be designed, visualized, animated, marketed, or built for your brand, I can create it using <span className="bg-[#F4C542]/20 text-[#111111] px-1.5 py-0.5 rounded font-semibold">AI-driven production workflows.</span>
              </p>
            </a>
          </ScrollReveal>
        </div>

        {/* 2-Column Split-Layout: Left side lists, Right side interactive theater */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start border-t border-[rgba(17,17,17,0.08)] pt-20 mt-28 md:mt-36">
          
          {/* Left Column — Large interactive text accordion (spans 5 cols) */}
          <div
            ref={accordionRef}
            className="lg:col-span-5 flex flex-col w-full text-left"
            onMouseLeave={() => setIsHoveredList(false)}
          >
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(16px, 2.5vw, 20px)",
                lineHeight: "1.4",
                color: "#111111",
                fontWeight: 500,
              }}
              className="mb-8 text-left border-b border-[rgba(17,17,17,0.06)] pb-4"
            >
              Some of my AI Services explained through Motion Graphics
            </h4>

            {services.map((s, i) => (
              <div
                key={s.n}
                ref={(el) => { itemRefs.current[i] = el; }}
                onMouseMove={() => {
                  if (!isScrolling) {
                    setIsHoveredList(true);
                    setActiveIdx(i);
                  }
                }}
                onClick={() => setActiveIdx(i)}
                className="py-8 border-b border-[rgba(17,17,17,0.08)] cursor-default transition-all duration-300 flex flex-col gap-3 relative group"
              >
                {/* Horizontal hover highlight line */}
                <div
                  className="absolute left-[-16px] right-[-16px] top-0 bottom-0 bg-[#F4C542]/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 pointer-events-none -z-10"
                />

                <div className="flex items-center gap-6 relative z-10">
                  <span
                     style={{ fontFamily: "'DM Sans', sans-serif" }}
                     className={`text-[11px] font-mono font-bold tracking-widest transition-colors duration-300 ${
                      activeIdx === i ? "text-[#F4C542]" : "text-[#6B6B68]"
                    }`}
                  >
                    {s.n}
                  </span>
                  
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(32px, 4.5vw, 48px)",
                      letterSpacing: "0.02em",
                      lineHeight: "1.05",
                    }}
                    className={`transition-all duration-300 tracking-wide uppercase ${
                      activeIdx === i 
                        ? "text-[#111111] translate-x-2" 
                        : "text-[#111111]/45 group-hover:text-[#111111]"
                    }`}
                  >
                    {s.title}
                  </h3>
                </div>

                {/* Expanded description (visible for active index) */}
                <div
                  className={`overflow-hidden transition-all duration-500 pl-[42px] ${
                    activeIdx === i 
                      ? "max-h-[350px] lg:max-h-[110px] opacity-100" 
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14.5px",
                      lineHeight: "1.75",
                      color: "#6B6B68",
                      fontWeight: 300,
                    }}
                    className="max-w-[480px] pb-4"
                  >
                    {s.desc}
                  </p>

                  {/* Inline Motion Theater on Mobile/Tablet */}
                  <div className="lg:hidden block h-[200px] w-full rounded-xl overflow-hidden border border-[rgba(17,17,17,0.08)] shadow-inner mt-4 relative">
                    {activeIdx === 0 && <ListingImagesScene />}
                    {activeIdx === 1 && <ListingCreativesScene />}
                    {activeIdx === 2 && <ProductVideosScene />}
                    {activeIdx === 3 && <BrandStoresScene />}
                    {activeIdx === 4 && <EcommerceWebsitesScene />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column — Large Sticky 3D Motion Theater (spans 7 cols, visible on desktop) */}
          <div className="lg:col-span-7 lg:block hidden sticky top-36 w-full">
            <ScrollReveal variant="scale-up" duration={1000} className="w-full">
              <div
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[rgba(17,17,17,0.08)] shadow-2xl relative bg-[#111111]"
              >
                {/* 3D Glassmorphic Overlay border shine */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl z-30"
                  style={{
                    border: "1.5px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "inset 0 4px 30px rgba(0, 0, 0, 0.2)",
                  }}
                />
                
                {/* Embedded dynamic scene switches */}
                {renderScene(activeIdx)}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

