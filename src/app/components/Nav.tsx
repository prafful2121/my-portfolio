import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const workDropdownItems = [
  { label: "Product Videos", href: "#selected-work" },
  { label: "Myntra Listing Images", href: "#myntra-gallery" },
  { label: "Amazon Listing Systems", href: "#amazon-listings" },
  { label: "Amazon Brand Store", href: "#brand-store" },
  { label: "E-Commerce Design", href: "#ecommerce-website" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    setOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F8F8F6]"
      style={{
        borderBottom: "1px solid rgba(17, 17, 17, 0.08)",
      }}
    >
      <div 
        className={`max-w-[1280px] mx-auto px-6 sm:px-10 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2.5 md:py-3.5" : "py-5 md:py-6"
        }`}
      >
        <div className="flex flex-col text-left">
          <a
            href="#work"
            className="flex flex-col select-none group cursor-pointer"
            onClick={handleNavClick("#work")}
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "24px",
                letterSpacing: "0.05em",
                lineHeight: "1",
              }}
              className="text-[#111111] group-hover:text-[#F4C542] transition-colors duration-300"
            >
              PRAFFUL'S
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.15em",
                color: "#6B6B68",
                marginTop: "2px",
              }}
              className="uppercase font-semibold group-hover:text-[#F4C542] transition-colors duration-300"
            >
              AI-POWERED STUDIO
            </span>
          </a>

          {/* Quick Contact Icons */}
          <div className="flex items-center gap-2 mt-2 pl-0.5">
            <a
              href="mailto:prafful.mahawar2000@gmail.com"
              className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[rgba(17,17,17,0.12)] flex items-center justify-center text-[#111111]/60 hover:text-[#111111] hover:border-[#111111] hover:bg-[#F4C542]/15 transition-all duration-300"
              aria-label="Email Studio"
              title="Email directly"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
            <a
              href="https://wa.me/919887574517"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[rgba(17,17,17,0.12)] flex items-center justify-center text-[#111111]/60 hover:text-[#111111] hover:border-[#111111] hover:bg-[#F4C542]/15 transition-all duration-300"
              aria-label="Chat on WhatsApp"
              title="WhatsApp chat"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile-only "What I can build for your brand" button with helper pointer */}
        <div className="md:hidden flex flex-col items-center mx-1">
          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[9px] sm:text-[10px] tracking-widest text-[#111111] uppercase font-bold mb-1 opacity-100 animate-pulse"
          >
            Click here to know ↓
          </span>
          <a
            href="#services"
            onClick={handleNavClick("#services")}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="flex items-center justify-center border border-[#F4C542] bg-[#F4C542]/10 px-3.5 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider text-[#111111] hover:bg-[#F4C542] active:bg-[#F4C542] transition-all duration-300 uppercase whitespace-nowrap shadow-sm"
          >
            What I can build for your brand
          </a>
        </div>

        {/* Navigation Links */}
        <div
          className="hidden md:flex items-center gap-12"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#111111", fontWeight: 500 }}
        >
          {/* Work Dropdown */}
          <div className="relative group/dropdown py-1">
            <button
              className="flex items-center gap-1.5 tracking-wider uppercase text-[11px] opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-pointer select-none font-bold"
            >
              Work
              <svg
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="group-hover/dropdown:rotate-180 transition-transform duration-300 mt-0.5"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F4C542] group-hover/dropdown:w-full transition-all duration-300 ease-out" />
            
            {/* Dropdown Card */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[220px] opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 ease-out z-50">
              <div className="bg-white/95 backdrop-blur-md border border-[rgba(17,17,17,0.08)] rounded-xl shadow-lg p-2.5 flex flex-col gap-1">
                {workDropdownItems.map((subItem) => (
                  <a
                    key={subItem.href}
                    href={subItem.href}
                    className="px-3 py-2 text-[10px] tracking-wider uppercase text-gray-700 hover:text-[#111111] hover:bg-[#F4C542]/10 rounded-lg transition-colors duration-200 text-left font-semibold block"
                    onClick={handleNavClick(subItem.href)}
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 tracking-wider uppercase text-[11px] opacity-75 hover:opacity-100 transition-opacity duration-300 group"
              onClick={handleNavClick(item.href)}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F4C542] group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href={`${import.meta.env.BASE_URL}start-project`}
            className="relative overflow-hidden inline-flex items-center justify-center border border-[#111111] px-6 py-3 text-[11px] font-bold tracking-widest text-[#111111] transition-all duration-300 hover:bg-[#F4C542] hover:text-[#111111] hover:border-[#F4C542] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            START A PROJECT
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center border border-[rgba(17,17,17,0.1)] bg-[#F8F8F6]/85 backdrop-blur-md transition-all duration-200 hover:border-[#111111]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} className="text-[#111111]" /> : <Menu size={18} className="text-[#111111]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="md:hidden border-t border-[rgba(17,17,17,0.06)] bg-[#F8F8F6]/98 backdrop-blur-md px-6 py-6"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#111111" }}
        >
          <div className="flex flex-col gap-2">
            {/* Mobile Work Section */}
            <div className="flex flex-col border-b border-[rgba(17,17,17,0.04)] pb-2 mb-1">
              <span className="py-2 text-[10px] font-bold tracking-widest uppercase text-gray-400">Work</span>
              <div className="flex flex-col pl-3 gap-1.5 mt-1.5">
                {workDropdownItems.map((subItem) => (
                  <a
                    key={subItem.href}
                    href={subItem.href}
                    className="py-2 text-[10.5px] tracking-wider uppercase text-[#111111]/85 hover:text-[#111111] font-semibold"
                    onClick={handleNavClick(subItem.href)}
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-xs tracking-widest uppercase border-b border-[rgba(17,17,17,0.04)] text-[#111111]/80 hover:text-[#111111]"
                onClick={handleNavClick(item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}start-project`}
              className="mt-4 w-full text-center bg-[#111111] text-[#F8F8F6] py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#F4C542] hover:text-[#111111] transition-all duration-300"
            >
              START A PROJECT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

