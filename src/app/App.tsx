import { useState, useEffect } from "react";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { WorkTransition } from "./components/WorkTransition";
import { About } from "./components/About";
import { SelectedWork } from "./components/SelectedWork";
import { MyntraGallery } from "./components/MyntraGallery";
import { AmazonListings } from "./components/AmazonListings";
import { BrandStore } from "./components/BrandStore";
import { EcommerceWebsite } from "./components/EcommerceWebsite";
import { Services } from "./components/Services";
import { WhyMe } from "./components/WhyMe";
import { Process } from "./components/Process";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Lightbox } from "./components/Lightbox";
import { StartProject } from "./components/StartProject";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    // Global listener to capture local path navigation and hash smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target) {
        const href = target.getAttribute("href");
        if (href) {
          if (href.startsWith("/") && !href.startsWith("//")) {
            e.preventDefault();
            window.history.pushState({}, "", href);
            setCurrentPath(href);
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else if (href.startsWith("#")) {
            e.preventDefault();
            const id = href.substring(1);
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
              window.history.pushState(null, "", href);
            }
          }
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div style={{ background: "#F8F8F6" }}>
      {currentPath === "/start-project" ? (
        <StartProject />
      ) : (
        <>
          <Nav />
          <Hero />
          <WorkTransition />
          <SelectedWork />
          <MyntraGallery />
          <AmazonListings />
          <BrandStore />
          <EcommerceWebsite />
          <Services />
          <WhyMe />
          <Process />
          <About />
          <CTA />
          <Footer />
          <Lightbox />
        </>
      )}
    </div>
  );
}

