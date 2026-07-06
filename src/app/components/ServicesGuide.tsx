import { useState, useEffect } from "react";
import "./services-guide.css";

export function ServicesGuide() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inquireState, setInquireState] = useState<"idle" | "loading" | "success">("idle");

  const totalSlides = 8;

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
          <button onClick={() => scrollToSlide(7)} className="btn btn-sm btn-outline">
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
            <p className="cover-philosophy">
              Every project is unique. We provide tailored proposals based on your goals, scope, and timeline. Retainer plans are available for brands seeking ongoing creative support.
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



        {/* Slide 2: Marketplaces (Amazon & Myntra) */}
        <section className="slide slide-services-table" id="marketplaces">
          <div className="slide-content">
            <div className="section-header">
              <span className="slide-num">02 / RETAIL &amp; CHANNELS</span>
              <h2 className="slide-title">Marketplace Solutions</h2>
              <p className="section-subtitle">High-converting graphic and apparel catalog assets tailored for specifications.</p>
            </div>

            <div className="grid grid-2">
              <div className="col">
                <div className="col-header">
                  <h3 className="slide-title-sm">Amazon Marketplace</h3>
                  <p className="section-subtitle-sm">Premium listing graphics and brand store storefront designs.</p>
                </div>
                <div className="service-overview">
                  <h4 className="overview-title">What's Included</h4>
                  <ul className="overview-list">
                    <li>Custom Hero &amp; main listing visual assets</li>
                    <li>Conversion-focused infographics &amp; product layouts</li>
                    <li>Custom A+ Content (Enhanced Brand Content) modules</li>
                    <li>Complete Brand Store design &amp; category page layout</li>
                    <li>Premium Storefront Banners &amp; brand story graphics</li>
                  </ul>
                  <div className="proposal-nudge">
                    <p className="nudge-text">Every project is unique. After understanding your requirements, we'll prepare a tailored proposal outlining deliverables, timeline, and investment.</p>
                    <button onClick={() => scrollToSlide(7)} className="btn btn-sm btn-outline nudge-btn">Request Proposal</button>
                  </div>
                </div>
              </div>

              <div className="col border-left-editorial">
                <div className="col-header">
                  <h3 className="slide-title-sm">Fashion &amp; Myntra</h3>
                  <p className="section-subtitle-sm">Apparel listing graphics and visual showcases.</p>
                </div>
                <div className="service-overview">
                  <h4 className="overview-title">What's Included</h4>
                  <ul className="overview-list">
                    <li>High-end catalog listing visual sets</li>
                    <li>AI-assisted product model photoshoot composites</li>
                    <li>Cinematic product showcase videos (8–10s reels)</li>
                    <li>Premium apparel lifestyle visual assets</li>
                  </ul>
                  <div className="proposal-nudge">
                    <p className="nudge-text">Every project is unique. After understanding your requirements, we'll prepare a tailored proposal outlining deliverables, timeline, and investment.</p>
                    <button onClick={() => scrollToSlide(7)} className="btn btn-sm btn-outline nudge-btn">Request Proposal</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Content Production (Photography & Video) */}
        <section className="slide slide-services-table" id="production">
          <div className="slide-content">
            <div className="section-header">
              <span className="slide-num">03 / CGI &amp; MOTION</span>
              <h2 className="slide-title">Content Production</h2>
              <p className="section-subtitle">Hyper-realistic environmental composite photoshoots and cinematic video showcases.</p>
            </div>

            <div className="grid grid-2">
              <div className="col">
                <div className="col-header">
                  <h3 className="slide-title-sm">Photography &amp; AI Visuals</h3>
                  <p className="section-subtitle-sm">Environmental composites and studio product renderings.</p>
                </div>
                <div className="service-overview">
                  <h4 className="overview-title">What's Included</h4>
                  <ul className="overview-list">
                    <li>Advanced AI commercial product photoshoots</li>
                    <li>Environmental lifestyle composite rendering</li>
                    <li>Product Hero visuals &amp; detail closeups</li>
                    <li>Benefits, comparison, &amp; feature infographics</li>
                    <li>Professional product retouching &amp; label enhancement</li>
                  </ul>
                  <div className="proposal-nudge">
                    <p className="nudge-text">Every project is unique. After understanding your requirements, we'll prepare a tailored proposal outlining deliverables, timeline, and investment.</p>
                    <button onClick={() => scrollToSlide(7)} className="btn btn-sm btn-outline nudge-btn">Request Proposal</button>
                  </div>
                </div>
              </div>

              <div className="col border-left-editorial">
                <div className="col-header">
                  <h3 className="slide-title-sm">Product Videos</h3>
                  <p className="section-subtitle-sm">Immersive scroll-stopping motion media for digital platforms.</p>
                </div>
                <div className="service-overview">
                  <h4 className="overview-title">What's Included</h4>
                  <ul className="overview-list">
                    <li>Cinema-grade commercial spots (15–30s)</li>
                    <li>Immersive product feature highlights (8–15s)</li>
                    <li>High-impact short-form social reels &amp; clips</li>
                    <li>Scripting, creative direction, &amp; motion graphics</li>
                  </ul>
                  <div className="proposal-nudge">
                    <p className="nudge-text">Every project is unique. After understanding your requirements, we'll prepare a tailored proposal outlining deliverables, timeline, and investment.</p>
                    <button onClick={() => scrollToSlide(7)} className="btn btn-sm btn-outline nudge-btn">Request Proposal</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Brand & Store Identity (Shopify & Social Media) */}
        <section className="slide slide-services-table" id="identity">
          <div className="slide-content">
            <div className="section-header">
              <span className="slide-num">04 / STOREFRONT &amp; IDENTITY</span>
              <h2 className="slide-title">Brand &amp; Store Identity</h2>
              <p className="section-subtitle">Bespoke storefront banners, landing pages, and visual designs to establish credibility.</p>
            </div>

            <div className="grid grid-2">
              <div className="col">
                <div className="col-header">
                  <h3 className="slide-title-sm">Website &amp; Shopify</h3>
                  <p className="section-subtitle-sm">High-performance custom storefront layouts and UI assets.</p>
                </div>
                <div className="service-overview">
                  <h4 className="overview-title">What's Included</h4>
                  <ul className="overview-list">
                    <li>Custom homepage interface design &amp; layouts</li>
                    <li>Custom landing pages optimized for marketing campaigns</li>
                    <li>Premium storefront banners &amp; promotional banners</li>
                    <li>Full Shopify theme setup, customization, &amp; store launch</li>
                  </ul>
                  <div className="proposal-nudge">
                    <p className="nudge-text">Every project is unique. After understanding your requirements, we'll prepare a tailored proposal outlining deliverables, timeline, and investment.</p>
                    <button onClick={() => scrollToSlide(7)} className="btn btn-sm btn-outline nudge-btn">Request Proposal</button>
                  </div>
                </div>
              </div>

              <div className="col border-left-editorial">
                <div className="col-header">
                  <h3 className="slide-title-sm">Branding &amp; Social Media</h3>
                  <p className="section-subtitle-sm">Custom mockups, brand assets, and organic carousels.</p>
                </div>
                <div className="service-overview">
                  <h4 className="overview-title">What's Included</h4>
                  <ul className="overview-list">
                    <li>High-conversion social creative and advertising assets</li>
                    <li>Interactive Instagram carousel design packages</li>
                    <li>Thought-leadership LinkedIn educational decks</li>
                    <li>Brand launch creatives &amp; marketing campaign assets</li>
                    <li>Realistic 3D packaging mockups &amp; label presentation</li>
                  </ul>
                  <div className="proposal-nudge">
                    <p className="nudge-text">Every project is unique. After understanding your requirements, we'll prepare a tailored proposal outlining deliverables, timeline, and investment.</p>
                    <button onClick={() => scrollToSlide(7)} className="btn btn-sm btn-outline nudge-btn">Request Proposal</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: How Pricing Works */}
        <section className="slide slide-pricing-philosophy" id="pricing-works">
          <div className="slide-content">
            <div className="grid grid-2">
              <div className="col col-left">
                <span className="slide-num">05 / PHILOSOPHY</span>
                <h2 className="slide-title">How Pricing Works</h2>
                <p className="section-subtitle">
                  We believe every brand deserves a solution tailored to its goals rather than a one-size-fits-all package. Every project is quoted individually to match your unique brand requirements.
                </p>
              </div>
              <div className="col col-right border-left-editorial">
                <h3 className="subsection-title">Our Pricing Framework</h3>
                <p className="body-text" style={{ marginBottom: "1.5rem" }}>
                  Every custom proposal is calculated transparently based on the following scope dimensions:
                </p>
                <ul className="philosophy-list">
                  <li>
                    <strong>Scope of Work:</strong> The breadth of channels, platforms, and assets to be addressed.
                  </li>
                  <li>
                    <strong>Number of Deliverables:</strong> The precise volume of images, videos, or designs required.
                  </li>
                  <li>
                    <strong>Creative Complexity:</strong> The depth of AI compositions, custom mockups, or CGI.
                  </li>
                  <li>
                    <strong>Timeline:</strong> Speed of turnaround and priority delivery requirements.
                  </li>
                  <li>
                    <strong>Commercial Usage:</strong> Licensing terms for organic usage versus paid ad creatives.
                  </li>
                  <li>
                    <strong>Partnership Term:</strong> Ongoing support requirements and volume-based relationships.
                  </li>
                </ul>
                <div className="philosophy-conclusion">
                  <p>
                    <em>We believe every brand deserves a solution tailored to its goals rather than a one-size-fits-all package.</em>
                  </p>
                  <button onClick={() => scrollToSlide(7)} className="btn btn-primary" style={{ marginTop: "2rem" }}>
                    Request a Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Monthly Partnerships */}
        <section className="slide slide-pricing" id="partnerships">
          <div className="slide-content">
            <div className="section-header">
              <span className="slide-num">06 / SCALING</span>
              <h2 className="slide-title">Monthly Partnerships</h2>
              <p className="section-subtitle">Establish an ongoing workflow and secure recurring priority service slots.</p>
            </div>

            <div className="pricing-deck">
              {/* Starter Tier */}
              <div className="pricing-card">
                <div className="card-header">
                  <h3 className="tier-name">Starter</h3>
                  <p className="tier-subtitle">Best for early-stage brands building their online presence.</p>
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
                    <span><strong>Up to 20</strong> Creative Assets / month</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Standard turnaround</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>2 revision rounds per request</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Monthly planning &amp; review call</span>
                  </li>
                </ul>
                <p className="card-footer-note">
                  Creative assets may include product listing images, A+ Content modules, product visuals, website creatives, short-form videos, landing page sections, social media creatives, and other digital creative assets.
                </p>
                <button onClick={() => scrollToSlide(7)} className="btn btn-outline card-btn">Inquire Starter</button>
              </div>

              {/* Growth Tier (Featured) */}
              <div className="pricing-card featured">
                <div className="featured-badge">MOST POPULAR</div>
                <div className="card-header">
                  <h3 className="tier-name">Growth</h3>
                  <p className="tier-subtitle">Best for growing brands with regular marketing and product launches.</p>
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
                    <span><strong>Up to 50</strong> Creative Assets / month</span>
                  </li>
                  <li>
                    <svg className="check-icon accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Faster turnaround</span>
                  </li>
                  <li>
                    <svg className="check-icon accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Priority production queue</span>
                  </li>
                  <li>
                    <svg className="check-icon accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Website &amp; marketplace creative support</span>
                  </li>
                  <li>
                    <svg className="check-icon accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Monthly strategy &amp; planning call</span>
                  </li>
                </ul>
                <p className="card-footer-note">
                  Creative assets may include product listing images, A+ Content modules, product visuals, website creatives, short-form videos, landing page sections, social media creatives, and other digital creative assets.
                </p>
                <button onClick={() => scrollToSlide(7)} className="btn btn-primary card-btn">Inquire Growth</button>
              </div>

              {/* Brand Partner Tier */}
              <div className="pricing-card">
                <div className="card-header">
                  <h3 className="tier-name">Brand Partner</h3>
                  <p className="tier-subtitle">Best for brands seeking a dedicated long-term creative partner.</p>
                  <div className="price-container">
                    <span style={{ fontSize: "0.9rem", textTransform: "none", fontWeight: 400, color: "var(--color-text-muted)", marginRight: "6px" }}>Starting at</span>
                    <span className="price-symbol">₹</span>
                    <span className="price-value">90,000</span>
                    <span className="price-period">/ month</span>
                  </div>
                </div>
                <div className="card-divider"></div>
                <ul className="tier-features">
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Unlimited Creative Assets (Fair Usage)</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Dedicated creative partner</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Highest priority queue</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Fastest turnaround</span>
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Monthly strategy &amp; planning sessions</span>
                  </li>
                </ul>
                <p className="card-footer-note">
                  Creative assets may include product listing images, A+ Content modules, product visuals, website creatives, short-form videos, landing page sections, social media creatives, and other digital creative assets.
                </p>
                <button onClick={() => scrollToSlide(7)} className="btn btn-outline card-btn">Inquire Partner</button>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Our Process */}
        <section className="slide slide-process" id="process">
          <div className="slide-content">
            <div className="process-layout-centered">
              <div className="process-header-wrapper" style={{ marginBottom: "2rem" }}>
                <span className="slide-num">07 / WORKFLOW</span>
                <h2 className="slide-title">Our Process</h2>
              </div>
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
                    <h3 className="step-name">Creative Direction</h3>
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
          </div>
        </section>

        {/* Slide 8: FAQ & Contact */}
        <section className="slide slide-contact" id="contact">
          <div className="slide-content">
            <div className="grid grid-2">
              {/* Column Left: FAQs */}
              <div className="col col-left">
                <span className="slide-num">08 / FAQ</span>
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
                <span className="slide-num">LET'S WORK TOGETHER</span>
                <h2 className="slide-title" style={{ fontSize: "2.75rem", lineHeight: "1.1", marginBottom: "1.5rem" }}>
                  Let's Build Something Exceptional
                </h2>
                <p className="body-text" style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", marginBottom: "2.5rem", lineHeight: "1.6" }}>
                  Whether you're launching a new product, refreshing your brand, or scaling your e-commerce business, we'd love to explore how we can help.
                </p>

                <div className="cta-button-group">
                  <a
                    href="https://wa.me/919887574517"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center", marginBottom: "1rem" }}
                  >
                    <span>Book a Discovery Call</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ marginLeft: "0.5rem" }}>
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <button
                    disabled={inquireState !== "idle"}
                    onClick={handleInquire}
                    className="btn btn-outline"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <span>
                      {inquireState === "idle" && "Request a Proposal"}
                      {inquireState === "loading" && "Opening Inquiries..."}
                      {inquireState === "success" && "Proposal Request Launched"}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ marginLeft: "0.5rem" }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </button>
                  {inquireState === "success" && (
                    <p className="btn-caption-note" style={{ textAlign: "center", color: "var(--color-accent)", fontWeight: 600, fontSize: "0.85rem", marginTop: "1rem" }}>
                      ✓ Launching mail client with Prafful's Studio...
                    </p>
                  )}
                </div>

                <div className="contact-quick-links" style={{ marginTop: "2rem", borderTop: "1px solid var(--color-divider)", paddingTop: "1.5rem" }}>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>Or reach out directly:</p>
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.9rem" }}>
                    <a href="mailto:prafful.mahawar2000@gmail.com" className="hover-underline" style={{ fontWeight: 600 }}>prafful.mahawar2000@gmail.com</a>
                    <span style={{ color: "var(--color-divider)" }}>•</span>
                    <a href="https://wa.me/919887574517" target="_blank" rel="noopener noreferrer" className="hover-underline" style={{ fontWeight: 600 }}>+91 98875 74517</a>
                  </div>
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
