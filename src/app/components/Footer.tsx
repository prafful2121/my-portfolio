export function Footer() {
  return (
    <footer
      className="py-20 border-t border-[rgba(17,17,17,0.08)]"
      style={{ background: "#F8F8F6" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand details */}
          <div className="flex flex-col gap-4">
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "24px",
                letterSpacing: "0.04em",
                color: "#111111",
              }}
            >
              PRAFFUL'S AI-POWERED STUDIO
            </span>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#6B6B68", lineHeight: "1.7", fontWeight: 300 }}
              className="max-w-[280px]"
            >
              Helping e-commerce brands create product images, videos, storefronts, websites, and custom creative systems powered by modern AI workflows.
              <br /><br />
              Jaipur, India.
            </p>
          </div>

          {/* Grouped Service Links */}
          <div className="flex flex-col gap-5">
            <p
              className="text-[10px] tracking-widest uppercase mb-2 font-bold"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B6B68" }}
            >
              CREATIVE SYSTEMS BUILT WITH AI
            </p>
            
            <div className="flex flex-col gap-5">
              {/* Group 1 */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] tracking-wider uppercase font-bold text-[#6B6B68]/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  MARKETPLACE SYSTEMS
                </span>
                <div className="flex flex-col gap-1.5 text-left">
                  {["Amazon Listing Images", "Myntra Listing Creatives", "Amazon Brand Stores"].map((s) => (
                    <a
                      key={s}
                      href={s === "Amazon Listing Images" ? "#amazon-listings" : s === "Myntra Listing Creatives" ? "#myntra-gallery" : "#brand-store"}
                      className="text-xs text-[#111111]/70 hover:text-[#F4C542] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              {/* Group 2 */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] tracking-wider uppercase font-bold text-[#6B6B68]/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  CONTENT SYSTEMS
                </span>
                <div className="flex flex-col gap-1.5 text-left">
                  {["Product Videos", "AI Product Photography", "Social Media Creatives"].map((s) => (
                    <a
                      key={s}
                      href={s === "Product Videos" ? "#selected-work" : "#"}
                      onClick={s !== "Product Videos" ? (e) => e.preventDefault() : undefined}
                      className="text-xs text-[#111111]/70 hover:text-[#F4C542] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              {/* Group 3 */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] tracking-wider uppercase font-bold text-[#6B6B68]/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  COMMERCE SYSTEMS
                </span>
                <div className="flex flex-col gap-1.5 text-left">
                  {["E-Commerce Websites", "Landing Pages", "Product Launch Assets"].map((s) => (
                    <a
                      key={s}
                      href={s === "E-Commerce Websites" ? "#ecommerce-website" : "#"}
                      onClick={s !== "E-Commerce Websites" ? (e) => e.preventDefault() : undefined}
                      className="text-xs text-[#111111]/70 hover:text-[#F4C542] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              {/* Group 4 */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] tracking-wider uppercase font-bold text-[#6B6B68]/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  AI SYSTEMS
                </span>
                <div className="flex flex-col gap-1.5 text-left">
                  {["Custom AI Workflows", "Creative Automation", "Content Production Systems"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-xs text-[#111111]/70 hover:text-[#F4C542] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <p
              className="text-[10px] tracking-widest uppercase mb-1 font-bold"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B6B68" }}
            >
              CONNECT
            </p>
            {[
              { label: "Email Directly", href: "mailto:prafful.mahawar2000@gmail.com" },
              { label: "WhatsApp", href: "https://wa.me/919887574517", target: "_blank" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.target}
                rel={l.target ? "noopener noreferrer" : undefined}
                className="text-sm text-[#111111]/70 hover:text-[#111111] transition-colors duration-200 flex items-center gap-2 group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {l.label}
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-[#F4C542]">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer bottom copyright rules */}
        <div
          className="pt-8 border-t border-[rgba(17,17,17,0.06)] flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#6B6B68" }}
        >
          <span>© {new Date().getFullYear()} Prafful's AI-Powered Studio. All rights reserved.</span>
          <span className="font-mono uppercase tracking-widest text-[9px] text-[#6B6B68]/60">
            Crafted with AI-powered precision.
          </span>
        </div>
      </div>
    </footer>
  );
}

