import { ScrollReveal } from "./ui/ScrollReveal";
import brandstore1 from "../../assets/brandstore/brandstore-1.png";
import brandstore2 from "../../assets/brandstore/brandstore-2.png";
import brandstore3 from "../../assets/brandstore/brandstore-3.png";

interface Store {
  title: string;
  subtitle: string;
  image: string;
  offsetClass?: string;
}

const stores: Store[] = [
  {
    title: "Amazon Brand Store",
    subtitle: "Hero Banner Campaign Design",
    image: brandstore1,
    offsetClass: "lg:translate-y-8",
  },
  {
    title: "Amazon Brand Store",
    subtitle: "Shop By Wellness Concerns",
    image: brandstore2,
    offsetClass: "lg:-translate-y-8",
  },
  {
    title: "Amazon Brand Store",
    subtitle: "Shop By Category System",
    image: brandstore3,
    offsetClass: "lg:translate-y-16",
  },
];

function BrowserFrame({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <div className="group flex flex-col overflow-hidden border border-[rgba(17,17,17,0.08)] w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-500 rounded-lg">
      {/* Browser Chrome Bar */}
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
          amazon.com/stores/brand
        </div>
      </div>

      {/* Screen Screenshot */}
      <div
        className="relative overflow-hidden bg-[#F8F8F6] cursor-default"
        style={{ aspectRatio: "16/10" }}
      >
        <img
          src={image}
          alt={`${subtitle} — ${title}`}
          className="absolute inset-0 w-full h-full object-contain group-hover:scale-102 transition-transform duration-700 p-2"
        />
        {/* Subtle hover overlay highlight */}
        <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/5 transition-all duration-400 pointer-events-none" />
      </div>

      {/* Metadata Detail info */}
      <div
        className="px-5 py-4 border-t border-[rgba(17,17,17,0.05)] flex items-center justify-between"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <span className="text-[10px] font-bold text-[#111111] uppercase tracking-wider">
          {subtitle}
        </span>
        <span className="text-[9px] font-mono text-[#6B6B68] uppercase tracking-widest bg-[#F0F0EE] px-2 py-0.5">
          {title}
        </span>
      </div>
    </div>
  );
}

export function BrandStore() {
  return (
    <section id="brand-store" className="py-12 md:py-24 relative overflow-hidden" style={{ background: "#F8F8F6" }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <ScrollReveal variant="fade-up" className="mb-12 md:mb-20 border-b border-[rgba(17,17,17,0.06)] pb-8">
          <div className="text-[10px] tracking-[0.25em] text-[#6B6B68] font-bold uppercase mb-4">
            Storefront Design
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
              AMAZON BRAND STORES
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
              Branded storefront experiences created through <span className="bg-[#F4C542]/20 text-[#111111] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">AI-powered</span> design systems and strategic merchandising.
            </p>
          </div>
        </ScrollReveal>

        {/* Staggered offset grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start pt-6 pb-16">
          {stores.map((s, i) => (
            <ScrollReveal
              key={s.subtitle}
              variant="fade-up"
              delay={i * 120}
              className={`w-full flex ${s.offsetClass || ""}`}
            >
              <BrowserFrame title={s.title} subtitle={s.subtitle} image={s.image} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

