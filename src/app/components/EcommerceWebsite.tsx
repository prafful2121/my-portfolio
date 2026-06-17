import { ScrollReveal } from "./ui/ScrollReveal";
import website1 from "../../assets/website/website-1.png";
import website2 from "../../assets/website/website-2.png";
import website3 from "../../assets/website/website-3.png";
import website4 from "../../assets/website/website-4.png";

interface WebsiteCardProps {
  label: string;
  url: string;
  image: string;
}

function BrowserCard({ label, url, image }: WebsiteCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden border border-[rgba(17,17,17,0.08)] w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-500 rounded-lg">
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-5 py-3 border-b border-[rgba(17,17,17,0.06)]"
        style={{ background: "#F0F0EE" }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20 group-hover:bg-[#FF5F56] transition-colors duration-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20 group-hover:bg-[#FFBD2E] transition-colors duration-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20 group-hover:bg-[#27C93F] transition-colors duration-300" />
        </div>
        <div
          className="flex-1 bg-white rounded-md border border-[rgba(17,17,17,0.05)] px-4 py-1 ml-3 text-[10px] text-[#6B6B68] tracking-wide font-mono truncate text-center select-none"
        >
          {url}
        </div>
      </div>

      {/* Screenshot area */}
      <div
        className="relative overflow-hidden bg-white cursor-default"
        style={{ aspectRatio: "16/10" }}
      >
        <img
          src={image}
          alt={label}
          className="absolute inset-0 w-full h-full object-contain group-hover:scale-102 transition-transform duration-700 p-2"
        />
        {/* Subtle hover overlay highlight */}
        <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/5 transition-all duration-400 pointer-events-none" />
      </div>

      {/* Caption info */}
      <div
        className="px-5 py-4 border-t border-[rgba(17,17,17,0.05)] flex items-center justify-between"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <span className="text-[10px] font-bold text-[#111111] uppercase tracking-wider">
          {label}
        </span>
        <span className="text-[9px] font-mono text-[#6B6B68] uppercase tracking-widest bg-[#F0F0EE] px-2 py-0.5">
          E-Com Web
        </span>
      </div>
    </div>
  );
}

export function EcommerceWebsite() {
  return (
    <section id="ecommerce-website" className="py-12 md:py-24 relative overflow-hidden" style={{ background: "#F8F8F6" }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <ScrollReveal variant="fade-up" className="mb-12 md:mb-20 border-b border-[rgba(17,17,17,0.06)] pb-8">
          <div className="text-[10px] tracking-[0.25em] text-[#6B6B68] font-bold uppercase mb-4">
            Platform Design
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(48px, 6.5vw, 90px)",
                lineHeight: 0.9,
                color: "#111111",
              }}
              className="tracking-tight"
            >
              E-COMMERCE WEBSITE DESIGN
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "#6B6B68",
                maxWidth: "460px",
                lineHeight: "1.7",
              }}
              className="font-light"
            >
              Modern shopping experiences built with <span className="bg-[#F4C542]/20 text-[#111111] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">AI-assisted design</span>, content generation, and conversion-focused thinking.
            </p>
          </div>
        </ScrollReveal>

        {/* Clean uniform 2-column grid for e-commerce website designs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <ScrollReveal variant="fade-up" className="w-full">
            <BrowserCard
              label="Primary E-Commerce Storefront Homepage"
              url="yourbrand.com"
              image={website1}
            />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100} className="w-full">
            <BrowserCard
              label="Product Collections Page Grid Layout"
              url="yourbrand.com/collections"
              image={website2}
            />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200} className="w-full">
            <BrowserCard
              label="Direct-to-Consumer Shop Page Experience"
              url="yourbrand.com/shop"
              image={website3}
            />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300} className="w-full">
            <BrowserCard
              label="Verified Customer Review Wall Details"
              url="yourbrand.com/reviews"
              image={website4}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


