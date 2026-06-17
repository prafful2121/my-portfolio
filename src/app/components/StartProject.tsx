import React from "react";
import { ArrowLeft } from "lucide-react";

export function StartProject() {
  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#111111]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Top Navbar */}
      <nav className="border-b border-[rgba(17,17,17,0.08)] bg-[#F8F8F6] sticky top-0 z-50">
        <div className="max-w-[1100px] mx-auto px-5 py-4 md:py-5 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <ArrowLeft size={16} /> Back to Home
          </a>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "22px",
              letterSpacing: "0.04em",
            }}
          >
            PRAFFUL'S STUDIO
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-[1100px] mx-auto px-5 py-16 md:py-24 flex flex-col gap-16 md:gap-24">
        {/* Hero Section */}
        <div className="text-center flex flex-col gap-5 max-w-[680px] mx-auto">
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(56px, 8vw, 100px)",
              lineHeight: "0.92",
            }}
            className="tracking-tight"
          >
            START A PROJECT
          </h1>
          <p className="text-base md:text-lg opacity-70 leading-relaxed font-light">
            Let's discuss your project and find the best way to bring your ideas to life.
          </p>
        </div>

        {/* Contact Options Cards (3 equal columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1 — Call Booking */}
          <div className="bg-white border border-[rgba(17,17,17,0.12)] p-8 md:p-10 flex flex-col gap-6 justify-between transition-all duration-300 hover:border-[#F4C542]">
            <div className="flex flex-col gap-3">
              <h3
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px", lineHeight: "1.1" }}
                className="tracking-wider"
              >
                BOOK A DISCOVERY CALL
              </h3>
              <p className="text-sm opacity-65 leading-relaxed font-light">
                Schedule a quick call to discuss your project goals, requirements, and timeline.
              </p>
              <p className="text-xs font-mono text-[#F4C542] font-semibold mt-1">
                +91 9887574517
              </p>
            </div>
            <a
              href="https://wa.me/919887574517"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#111111] text-[#F8F8F6] py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#F4C542] hover:text-[#111111] transition-all duration-300"
            >
              BOOK A CALL
            </a>
          </div>

          {/* Card 2 — WhatsApp */}
          <div className="bg-white border border-[rgba(17,17,17,0.12)] p-8 md:p-10 flex flex-col gap-6 justify-between transition-all duration-300 hover:border-[#F4C542]">
            <div className="flex flex-col gap-3">
              <h3
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px", lineHeight: "1.1" }}
                className="tracking-wider"
              >
                CHAT ON WHATSAPP
              </h3>
              <p className="text-sm opacity-65 leading-relaxed font-light">
                Prefer messaging? Reach out directly on WhatsApp for a quick conversation about your project.
              </p>
              <p className="text-xs font-mono text-[#F4C542] font-semibold mt-1">
                +91 9887574517
              </p>
            </div>
            <a
              href="https://wa.me/919887574517"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#111111] text-[#F8F8F6] py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#F4C542] hover:text-[#111111] transition-all duration-300"
            >
              CHAT ON WHATSAPP
            </a>
          </div>

          {/* Card 3 — Email Directly */}
          <div className="bg-white border border-[rgba(17,17,17,0.12)] p-8 md:p-10 flex flex-col gap-6 justify-between transition-all duration-300 hover:border-[#F4C542]">
            <div className="flex flex-col gap-3">
              <h3
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px", lineHeight: "1.1" }}
                className="tracking-wider"
              >
                EMAIL DIRECTLY
              </h3>
              <p className="text-sm opacity-65 leading-relaxed font-light">
                Prefer standard email? Drop me a line directly and let's get the conversation started.
              </p>
              <p className="text-xs font-mono text-[#F4C542] font-semibold mt-1">
                prafful.mahawar2000@gmail.com
              </p>
            </div>
            <a
              href="mailto:prafful.mahawar2000@gmail.com"
              className="w-full inline-flex items-center justify-center bg-[#111111] text-[#F8F8F6] py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#F4C542] hover:text-[#111111] transition-all duration-300"
            >
              SEND AN EMAIL
            </a>
          </div>
        </div>

        {/* Footnote */}
        <div className="text-center">
          <p className="text-xs opacity-45 tracking-wider italic">
            Response time is usually within a few hours.
          </p>
        </div>
      </main>
    </div>
  );
}
