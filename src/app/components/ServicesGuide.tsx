import { useState, useEffect } from "react";
import "./services-guide.css";

export function ServicesGuide() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inquireState, setInquireState] = useState<"idle" | "loading" | "success">("idle");

  const totalSlides = 11;

  const scrollToSlide = (index: number) => {
    const slides = document.querySelectorAll(".services-guide-page .slide");
    if (slides[index]) {
      slides[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = document.getElementById("deck-container-react");
    const slides = document.querySelectorAll(".services-guide-page .slide");

    if (!container || slides.length === 0) return;

    const observerOptions = {
      root: container,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(slides).indexOf(entry.target);
          setCurrentSlide(index);
        }
      });
    }, observerOptions);

    slides.forEach((slide) => observer.observe(slide));

    // Keyboard navigation listener
    let isScrolling = false;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth < 1024 || isScrolling) return;

      let targetIndex = currentSlide;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        targetIndex = Math.min(totalSlides - 1, currentSlide + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        targetIndex = Math.max(0, currentSlide - 1);
      }

      if (targetIndex !== currentSlide) {
        e.preventDefault();
        isScrolling = true;
        scrollToSlide(targetIndex);
        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  const handleInquire = () => {
    setInquireState("loading");
    setTimeout(() => {
      setInquireState("success");
      window.location.href =
        "mailto:prafful.mahawar2000@gmail.com?subject=Inquiry: Pricing %26 Plans&body=Hello Prafful,%0A%0AI would like to request a custom quote proposal for our e-commerce brand.%0A%0ABrand Name:%0AServices Needed:%0ABudget Range:";
    }, 1000);
  };

  return (
    <div className="services-guide-page">
      {/* Top Navigation Bar */}
      <header className="header">
        <a href="/" className="logo cursor-pointer">
          <span className="logo-bold">PRAFFUL'S</span>
          <span className="logo-light">AI-POWERED STUDIO</span>
        </a>
        <div className="header-right">
          <span className="guide-version">2026/2027 EDITION</span>
          <button onClick={() => scrollToSlide(10)} className="btn btn-sm btn-outline">
            Inquire Now
          </button>
        </div>
      </header>

      {/* Main Slide Deck Container */}
      <main className="deck-container" id="deck-container-react">
        {/* Slide 1: Cover */}
        <section className="slide slide-cover" id="cover">
          <div className="slide-content">
            <div className="cover-eyebrow">PRICING &amp; PLANS</div>
            <h1 className="cover-title">
              <span>AI-POWERED</span>
              <span className="accent-text">CREATIVE SOLUTIONS</span>
              <span>FOR E-COMMERCE</span>
            </h1>
            <p className="cover-subtitle">
              Premium creative assets that increase trust, improve conversions, and elevate your online presence. Tailored for scale-ready e-commerce brands.
            </p>
            <div className="cover-actions">
              <button onClick={() => scrollToSlide(1)} className="btn btn-primary btn-explore">
                Enter Services Catalog
                <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="cover-metadata-grid">
            <div className="metadata-item">
              <span className="metadata-label">DESIGN FOR</span>
              <span className="metadata-value">AMAZON • SHOPIFY • MYNTRA • D2C</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">STUDIO CAPABILITY</span>
              <span className="metadata-value">HIGH CONVERSION &amp; PREMIUM EDITORIALS</span>
            </div>
            <div className="metadata-item scroll-hint">
              <span className="scroll-text">SCROLL OR USE ARROWS</span>
              <div className="scroll-mouse">
                <div className="scroll-wheel"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2: About & Why Work With Us */}
        <section className="slide slide-about" id="about">
          <div className="slide-content">
            <div className="grid grid-2">
              <div class="col col-left">
                <span className="slide-num">02 / OVERVIEW</span>
                <h2 className="slide-title">Helping Modern Brands Sell More.</h2>
                <p className="lead-text">
                  We help e-commerce brands create premium creative assets that increase trust, improve conversions, and elevate their online presence.
                </p>
                <p className="body-text text-justify">
                  From Amazon listings and Shopify websites to AI-powered product photography, fashion listings, and product videos, we build high-quality visuals designed to help brands sell more.
                </p>
              </div>

              <div className="col col-right border-left-editorial">
                <h3 className="subsection-title">Why Work With Us?</h3>
                <ul className="why-us-list">
                  <li>
                    <span className="why-num">01</span>
                    <div>
                      <h4 className="why-title">AI-powered creative production</h4>
                      <p className="why-desc">Smarter, faster asset pipelines without logistical set boundaries.</p>
                    </div>
                  </li>
                  <li>
                    <span className="why-num">02</span>
                    <div>
                      <h4 className="why-title">Premium commercial-quality visuals</h4>
                      <p className="why-desc">Studio-grade outputs matching international retail aesthetics.</p>
                    </div>
                  </li>
                  <li>
                    <span className="why-num">03</span>
                    <div>
                      <h4 className="why-title">Conversion-focused design approach</h4>
                      <p className="why-desc">Visual structures structured specifically to elevate CTR and orders.</p>
                    </div>
                  </li>
                  <li>
                    <span className="why-num">04</span>
                    <div>
                      <h4 className="why-title">Marketplace &amp; Shopify Expertise</h4>
                      <p className="why-desc">Deep knowledge in listing rules for Amazon, Myntra, and Shopify themes.</p>
                    </div>
                  </li>
                </ul>
                <div className="why-extra-footer">
                  <span className="accent-dot"></span> Fast turnaround &amp; scalable creative support for growing brands.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Amazon Marketplace */}
        <section className="slide slide-services-table" id="amazon">
          <div className="slide-content">
            <div className="section-header">
              <span className="slide-num">03 / CHANNELS</span>
              <h2 className="slide-title">Amazon Marketplace</h2>
              <p className="section-subtitle">High-converting graphic assets tailored specifically for Amazon’s layout specifications.</p>
            </div>

            <div className="table-container">
              <table className="editorial-table">
                <thead>
                  <tr>
                    <th style={{ width: "30%" }}>Service</th>
                    <th style={{ width: "50%" }}>Includes</th>
                    <th style={{ width: "20%", textAlign: "right" }}>Starting From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-bold">Amazon Listing Images (7 Images)</td>
                    <td>Complete listing with hero image, infographics, lifestyle visuals, comparison charts and feature highlights</td>
                    <td className="td-price">₹10,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Amazon Listing Images (5 Images)</td>
                    <td>Essential listing package for new products</td>
                    <td className="td-price">₹7,500</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Single Listing Image</td>
                    <td>One premium conversion-focused listing image</td>
                    <td className="td-price">₹1,800</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Amazon A+ Content</td>
                    <td>Complete premium A+ content modules</td>
                    <td className="td-price">₹8,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Amazon Brand Store Design</td>
                    <td>Complete storefront with banners, navigation and category pages</td>
                    <td className="td-price">₹25,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Amazon Store Banner</td>
                    <td>Premium storefront banner</td>
                    <td className="td-price">₹3,500</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Amazon Brand Story</td>
                    <td>Brand Story module for Amazon listings</td>
                    <td className="td-price">₹5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Slide 4: Product Photography & AI Visuals */}
        <section className="slide slide-services-table" id="photography">
          <div className="slide-content">
            <div className="section-header">
              <span class="slide-num">04 / CGI &amp; ART DIRECTION</span>
              <h2 className="slide-title">Product Photography &amp; AI Visuals</h2>
              <p className="section-subtitle">Hyper-realistic environmental composites and studio product renderings.</p>
            </div>

            <div className="table-container">
              <table className="editorial-table">
                <thead>
                  <tr>
                    <th style={{ width: "30%" }}>Service</th>
                    <th style={{ width: "50%" }}>Includes</th>
                    <th style={{ width: "20%", textAlign: "right" }}>Starting From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-bold">AI Product Photoshoot</td>
                    <td>10 premium commercial product renders</td>
                    <td className="td-price">₹8,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Product Hero Image</td>
                    <td>Studio-quality hero render</td>
                    <td className="td-price">₹2,500</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Lifestyle Composite</td>
                    <td>Realistic lifestyle composition</td>
                    <td className="td-price">₹2,500</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Product Infographic</td>
                    <td>Benefits and feature infographic</td>
                    <td className="td-price">₹2,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Comparison Chart</td>
                    <td>Premium comparison visual</td>
                    <td className="td-price">₹2,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Product Retouching</td>
                    <td>Professional cleanup and enhancement</td>
                    <td className="td-price">₹1,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Label Enhancement</td>
                    <td>Premium label enhancement and refinishing</td>
                    <td className="td-price">₹2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Slide 5: Website & Shopify */}
        <section className="slide slide-services-table" id="shopify">
          <div className="slide-content">
            <div className="section-header">
              <span className="slide-num">05 / PLATFORMS</span>
              <h2 class="slide-title">Website &amp; Shopify</h2>
              <p className="section-subtitle">Bespoke storefront banners, user interfaces, and high-performance theme builds.</p>
            </div>

            <div className="table-container">
              <table className="editorial-table">
                <thead>
                  <tr>
                    <th style={{ width: "30%" }}>Service</th>
                    <th style={{ width: "50%" }}>Includes</th>
                    <th style={{ width: "20%", textAlign: "right" }}>Starting From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-bold">Homepage Hero Banner</td>
                    <td>Premium homepage hero section</td>
                    <td className="td-price">₹5,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Website Banner</td>
                    <td>Promotional website banner</td>
                    <td className="td-price">₹3,500</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Landing Page Design</td>
                    <td>Complete high-converting landing page</td>
                    <td className="td-price">₹15,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Homepage Design</td>
                    <td>Homepage UI design</td>
                    <td className="td-price">₹12,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Complete Shopify Website Design</td>
                    <td>Complete Shopify store design</td>
                    <td className="td-price">Starting at ₹45,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Slide 6: Fashion & Myntra */}
        <section className="slide slide-services-table" id="myntra">
          <div className="slide-content">
            <div className="section-header">
              <span className="slide-num">06 / APPAREL</span>
              <h2 className="slide-title">Fashion &amp; Myntra</h2>
              <p className="section-subtitle">Apparel catalog listing graphics and cinematic visual showcases for clothing lines.</p>
            </div>

            <div className="table-container">
              <table className="editorial-table">
                <thead>
                  <tr>
                    <th style={{ width: "35%" }}>Service</th>
                    <th style={{ width: "45%" }}>Includes</th>
                    <th style={{ width: "20%", textAlign: "right" }}>Starting From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-bold">Myntra Listing Images (5 Images)</td>
                    <td>Complete fashion listing</td>
                    <td className="td-price">₹7,500</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Fashion Product Video (8–10 sec)</td>
                    <td>Premium AI product showcase</td>
                    <td className="td-price">₹4,500</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Apparel Lifestyle Image</td>
                    <td>One premium lifestyle visual</td>
                    <td className="td-price">₹2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Slide 7: Product Videos */}
        <section className="slide slide-services-table" id="videos">
          <div className="slide-content">
            <div className="section-header">
              <span className="slide-num">07 / MOTION CREATIVE</span>
              <h2 className="slide-title">Product Videos</h2>
              <p className="section-subtitle">Immersive and scroll-stopping promotional motion media optimized for digital platforms.</p>
            </div>

            <div className="table-container">
              <table className="editorial-table">
                <thead>
                  <tr>
                    <th style={{ width: "35%" }}>Service</th>
                    <th style={{ width: "45%" }}>Includes</th>
                    <th style={{ width: "20%", textAlign: "right" }}>Starting From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-bold">Product Commercial</td>
                    <td>15–30 second commercial</td>
                    <td className="td-price">₹12,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Product Showcase Video</td>
                    <td>8–15 second product showcase</td>
                    <td className="td-price">₹6,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Social Media Product Reel</td>
                    <td>Short-form promotional reel</td>
                    <td className="td-price">₹5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Slide 8: Branding & Social Media */}
        <section className="slide slide-services-table" id="branding">
          <div className="slide-content">
            <div className="section-header">
              <span className="slide-num">08 / SOCIAL &amp; D2C IDENTITY</span>
              <h2 className="slide-title">Branding &amp; Social Media</h2>
              <p className="section-subtitle">Visual brand setups, custom mockups, and carousels designed to drive organic engagement.</p>
            </div>

            <div className="table-container">
              <table className="editorial-table">
                <thead>
                  <tr>
                    <th style={{ width: "30%" }}>Service</th>
                    <th style={{ width: "50%" }}>Includes</th>
                    <th style={{ width: "20%", textAlign: "right" }}>Starting From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-bold">Social Media Creative</td>
                    <td>Single premium social post</td>
                    <td className="td-price">₹1,500</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Instagram Carousel</td>
                    <td>Up to 10 professionally designed slides</td>
                    <td className="td-price">₹5,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">LinkedIn Carousel</td>
                    <td>Premium educational or thought-leadership carousel</td>
                    <td className="td-price">₹5,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Product Launch Creative</td>
                    <td>Launch announcement visual</td>
                    <td className="td-price">₹3,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">Packaging Mockup</td>
                    <td>Premium product packaging presentation</td>
                    <td className="td-price">₹2,000</td>
                  </tr>
                  <tr>
                    <td className="td-bold">AI Ad Creative</td>
                    <td>Paid advertising creative</td>
                    <td className="td-price">₹2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Slide 9: Monthly Partnerships */}
        <section className="slide slide-pricing" id="partnerships">
          <div className="slide-content">
            <div className="section-header">
              <span className="slide-num">09 / SCALING</span>
              <h2 className="slide-title">Monthly Partnerships</h2>
              <p className="section-subtitle">Establish an ongoing workflow and secure recurring priority service slots.</p>
            </div>

            <div className="pricing-deck">
              {/* Starter Tier */}
              <div className="pricing-card">
                <div className="card-header">
                  <h3 className="tier-name">Starter</h3>
                  <p className="tier-subtitle">Best for early stage brands</p>
                  <div className="price-container">
                    <span className="price-symbol">₹</span>
                    <span className="price-value">25,000</span>
                    <span className="price-period">/ month</span>
                  </div>
                </div>
                <div className="card-divider"></div>
                <ul className="tier-features">
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>15</strong> Creative Designs</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>2</strong> Product Videos</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Priority Support</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>2 Revision Rounds</span>
                  </li>
                </ul>
                <button onClick={() => scrollToSlide(10)} className="btn btn-outline card-btn">Inquire Starter</button>
              </div>

              {/* Growth Tier (Featured) */}
              <div className="pricing-card featured">
                <div className="featured-badge">MOST POPULAR</div>
                <div className="card-header">
                  <h3 className="tier-name">Growth</h3>
                  <p className="tier-subtitle">Best for scaling store traffic</p>
                  <div className="price-container">
                    <span className="price-symbol">₹</span>
                    <span className="price-value">50,000</span>
                    <span className="price-period">/ month</span>
                  </div>
                </div>
                <div className="card-divider"></div>
                <ul className="tier-features">
                  <li>
                    <svg className="check-icon accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>35</strong> Creative Designs</span>
                  </li>
                  <li>
                    <svg className="check-icon accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>6</strong> Product Videos</span>
                  </li>
                  <li>
                    <svg className="check-icon accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Website Banner Updates</span>
                  </li>
                  <li>
                    <svg className="check-icon accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Amazon Listing Updates</span>
                  </li>
                  <li>
                    <svg className="check-icon accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Priority Delivery</span>
                  </li>
                </ul>
                <button onClick={() => scrollToSlide(10)} className="btn btn-primary card-btn">Inquire Growth</button>
              </div>

              {/* Brand Partner Tier */}
              <div className="pricing-card">
                <div class="card-header">
                  <h3 className="tier-name">Brand Partner</h3>
                  <p className="tier-subtitle">Full scale creative partner</p>
                  <div className="price-container">
                    <span className="price-symbol">Starting at </span>
                    <span className="price-symbol">₹</span>
                    <span className="price-value">90,000</span>
                    <span className="price-period">/ mo</span>
                  </div>
                </div>
                <div className="card-divider"></div>
                <ul className="tier-features">
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Dedicated Creative Partner</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Unlimited Design Requests (Fair Usage)</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Product Launch Campaigns</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span>Marketplace, Web &amp; Social Assets</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span>Fastest Turnaround &amp; Priority Support</span>
                  </li>
                </ul>
                <button onClick={() => scrollToSlide(10)} className="btn btn-outline card-btn">Inquire Partner</button>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 10: Process & Add-ons */}
        <section className="slide slide-process" id="process">
          <div className="slide-content">
            <div className="grid grid-2">
              {/* Column Left: Process */}
              <div className="col col-left">
                <span className="slide-num">10 / WORKFLOW</span>
                <h2 className="slide-title">Our Process</h2>
                <div className="process-steps">
                  {/* Step 1 */}
                  <div
                    onClick={() => setActiveStep(1)}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1024) setActiveStep(1);
                    }}
                    className={`process-step-item ${activeStep === 1 ? "active" : ""}`}
                  >
                    <div className="step-header">
                      <span className="step-num-circle">01</span>
                      <h3 className="step-name">Discovery</h3>
                    </div>
                    <div className="step-content">
                      <p>Understanding your product, audience, and goals.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div
                    onClick={() => setActiveStep(2)}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1024) setActiveStep(2);
                    }}
                    className={`process-step-item ${activeStep === 2 ? "active" : ""}`}
                  >
                    <div className="step-header">
                      <span className="step-num-circle">02</span>
                      <h3 class="step-name">Creative Direction</h3>
                    </div>
                    <div className="step-content">
                      <p>Planning the visual style and messaging.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div
                    onClick={() => setActiveStep(3)}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1024) setActiveStep(3);
                    }}
                    className={`process-step-item ${activeStep === 3 ? "active" : ""}`}
                  >
                    <div className="step-header">
                      <span className="step-num-circle">03</span>
                      <h3 className="step-name">Production</h3>
                    </div>
                    <div className="step-content">
                      <p>Designing premium, conversion-focused creative assets.</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div
                    onClick={() => setActiveStep(4)}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1024) setActiveStep(4);
                    }}
                    className={`process-step-item ${activeStep === 4 ? "active" : ""}`}
                  >
                    <div className="step-header">
                      <span className="step-num-circle">04</span>
                      <h3 className="step-name">Revisions</h3>
                    </div>
                    <div className="step-content">
                      <p>Refining based on your feedback.</p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div
                    onClick={() => setActiveStep(5)}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1024) setActiveStep(5);
                    }}
                    className={`process-step-item ${activeStep === 5 ? "active" : ""}`}
                  >
                    <div className="step-header">
                      <span className="step-num-circle">05</span>
                      <h3 className="step-name">Delivery</h3>
                    </div>
                    <div className="step-content">
                      <p>Final assets delivered in the required formats.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column Right: Add-ons */}
              <div className="col col-right border-left-editorial">
                <span className="slide-num">OPTIONAL ENHANCEMENTS</span>
                <h3 className="subsection-title">Add-ons</h3>
                <div className="table-container add-ons-wrapper">
                  <table className="editorial-table select-table">
                    <thead>
                      <tr>
                        <th>Service</th>
                        <th style={{ textAlign: "right" }}>Starting From</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="td-bold">Additional Listing Image</td>
                        <td className="td-price">₹1,500</td>
                      </tr>
                      <tr>
                        <td className="td-bold">Additional Video Edit</td>
                        <td className="td-price">₹2,000</td>
                      </tr>
                      <tr>
                        <td className="td-bold">Extra Revision Round</td>
                        <td className="td-price">₹500</td>
                      </tr>
                      <tr>
                        <td className="td-bold">Rush Delivery (24 Hours)</td>
                        <td className="td-price">+30%</td>
                      </tr>
                      <tr>
                        <td className="td-bold">Source Files (when applicable)</td>
                        <td className="td-price">₹2,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 11: FAQ & Contact */}
        <section className="slide slide-contact" id="contact">
          <div className="slide-content">
            <div className="grid grid-2">
              {/* Column Left: FAQs */}
              <div className="col col-left">
                <span className="slide-num">11 / FAQ</span>
                <h2 className="slide-title">Frequently Asked Questions</h2>

                <div className="faq-container">
                  {[
                    {
                      q: "How many revisions are included?",
                      a: "Two revision rounds are included for most projects.",
                    },
                    {
                      q: "What is the average turnaround time?",
                      a: "Typically 3–7 business days, depending on the project scope.",
                    },
                    {
                      q: "Do you provide source files?",
                      a: "Yes, where applicable, as an optional add-on.",
                    },
                    {
                      q: "Can you handle bulk SKUs?",
                      a: "Yes. Custom pricing is available for multiple products and long-term partnerships.",
                    },
                    {
                      q: "Do you work with international clients?",
                      a: "Yes. We work with brands globally.",
                    },
                  ].map((faq, index) => (
                    <div key={index} className={`faq-item ${activeFaq === index ? "active" : ""}`}>
                      <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="faq-question">
                        <span>{faq.q}</span>
                        <svg className="faq-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column Right: Contact Card */}
              <div className="col col-right border-left-editorial">
                <span className="slide-num">GET IN TOUCH</span>
                <h2 className="slide-title" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Prafful's AI-Powered Studio</h2>
                <p className="body-text" style={{ marginBottom: "2rem" }}>AI-Powered Creative Solutions for Modern E-commerce Brands</p>

                <div className="contact-details-box">
                  <div className="contact-detail-item">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">
                      <a href="mailto:prafful.mahawar2000@gmail.com" className="hover-underline">
                        prafful.mahawar2000@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-label">Phone / WhatsApp</span>
                    <span className="contact-value">
                      <a href="https://wa.me/919887574517" target="_blank" rel="noopener noreferrer" className="hover-underline">
                        +91 98875 74517
                      </a>
                    </span>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-label">Website</span>
                    <span className="contact-value">
                      <a href="https://prafful2121.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer" className="hover-underline">
                        prafful2121.github.io/my-portfolio/
                      </a>
                    </span>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">
                      <a href="https://www.linkedin.com/in/praffulmahawar" target="_blank" rel="noopener noreferrer" className="hover-underline">
                        linkedin.com/in/praffulmahawar
                      </a>
                    </span>
                  </div>
                </div>

                <div className="contact-action-wrapper" style={{ marginTop: "3rem" }}>
                  <button
                    disabled={inquireState !== "idle"}
                    onClick={handleInquire}
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    <span>
                      {inquireState === "idle" && "Request Custom Quote Proposal"}
                      {inquireState === "loading" && "Opening Inquiries..."}
                      {inquireState === "success" && "Proposal Request Launched"}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ marginLeft: "0.5rem" }}>
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  {inquireState === "success" && (
                    <p className="btn-caption-note" style={{ textAlign: "center", color: "var(--color-accent)", fontWeight: 600, fontSize: "0.85rem", marginTop: "1rem" }}>
                      ✓ Launching mail client with Prafful's Studio...
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Sticky Deck Footer */}
      <footer className="deck-footer">
        <div className="footer-left">
          <span className="footer-logo">PRAFFUL'S AI-POWERED STUDIO</span>
          <span className="footer-slash">//</span>
          <span className="footer-doc-title">PRICING &amp; PLANS GUIDE</span>
        </div>
        <div className="footer-center">
          <span className="current-slide-num">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="footer-slash">//</span>
          <span className="total-slides-num">{String(totalSlides).padStart(2, "0")}</span>
        </div>
        <div className="footer-right">
          <button
            disabled={currentSlide === 0}
            onClick={() => scrollToSlide(currentSlide - 1)}
            className="footer-nav-btn prev-btn"
            aria-label="Previous Slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            disabled={currentSlide === totalSlides - 1}
            onClick={() => scrollToSlide(currentSlide + 1)}
            className="footer-nav-btn next-btn"
            aria-label="Next Slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
