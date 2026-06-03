'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

const navItems = [
  { name: "HOME", id: "hero" },
  { name: "ABOUT", id: "about" },
  { name: "WORK", id: "work" },
  { name: "LET'S CONNECT", id: "contact" }
];

const Navbar = () => {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileBgRef = useRef(null);
  const mobileLinksRef = useRef([]);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Listen for custom scroll events emitted by useHeroTimeline
    const handlePortfolioScroll = (e) => {
      if (e.detail && e.detail.active) {
        setActiveSection(e.detail.active);
      }
    };
    window.addEventListener('portfolio-scroll', handlePortfolioScroll);
    return () => window.removeEventListener('portfolio-scroll', handlePortfolioScroll);
  }, []);

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "expo.out", delay: 0.2 }
    );

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        // At Home: Always display
        gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling Down: Hide
        gsap.to(navRef.current, { y: -150, opacity: 0, duration: 0.4, ease: "power2.in" });
      } else {
        // Scrolling Up: Display
        gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (labelId) => {
    const st = window._portfolioScrollTrigger;
    if (st) {
      // Get the exact scroll position mapped to the timeline label
      const scrollPos = st.labelToScroll(labelId);
      if (scrollPos !== undefined) {
        gsap.to(window, { 
          scrollTo: scrollPos, 
          duration: 1.5, 
          ease: "power3.inOut" 
        });
      }
    }
    
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline();
      tl.to(mobileMenuRef.current, { display: "flex", duration: 0 })
        .to(mobileBgRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" })
        .fromTo(mobileLinksRef.current, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
          "-=0.2"
        );
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsMobileMenuOpen(false);
          document.body.style.overflow = '';
          gsap.set(mobileMenuRef.current, { display: "none" });
        }
      });
      
      tl.to(mobileLinksRef.current, { y: -30, opacity: 0, duration: 0.3, stagger: -0.05, ease: "power2.in" })
        .to(mobileBgRef.current, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, "-=0.1");
    }
  };

  return (
    <>
      <header 
        ref={navRef} 
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 px-2 md:px-8 py-4 pointer-events-none"
      >
        <nav className="flex justify-between items-center w-full mx-auto pointer-events-auto">
          
          {/* Logo Section */}
          <div 
            onClick={() => scrollToSection('hero')}
            data-cursor="OPEN" 
            className="text-2xl md:text-3xl font-black tracking-tighter uppercase cursor-pointer text-white drop-shadow-md shrink-0"
          >
            SD
          </div>
          
          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8 lg:space-x-12 text-xs md:text-sm tracking-widest md:tracking-[0.2em] font-bold text-white/80 whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.name} className="shrink-0">
                <button 
                  onClick={() => scrollToSection(item.id)}
                  data-cursor="OPEN"
                  className={`relative group py-2 transition-colors duration-300 drop-shadow-md uppercase ${
                    activeSection === item.id ? "text-amber-500" : "hover:text-white text-white/80"
                  }`}
                >
                  {item.name}
                  {/* Animated underline effect */}
                  <span className={`absolute left-0 -bottom-2 h-[2px] transition-all duration-300 ease-out ${
                    activeSection === item.id ? "w-full bg-amber-500" : "w-0 bg-white group-hover:w-full"
                  }`}></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-[1001]"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-white block transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white block transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white block transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-[1000] hidden items-center justify-center flex-col pointer-events-auto"
      >
        <div ref={mobileBgRef} className="absolute inset-0 bg-[#050505] opacity-0 backdrop-blur-md"></div>

        <ul className="relative z-10 flex flex-col items-center justify-center space-y-10 w-full px-6">
          {navItems.map((item, index) => (
            <li 
              key={item.name} 
              ref={el => mobileLinksRef.current[index] = el}
              className="w-full text-center"
            >
              <button 
                onClick={() => scrollToSection(item.id)}
                className={`text-3xl sm:text-5xl font-black tracking-widest uppercase transition-colors duration-300 block w-full py-2 ${
                  activeSection === item.id ? "text-amber-500" : "text-white hover:text-amber-400"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile Contact Footer info */}
        <div 
          ref={el => mobileLinksRef.current[navItems.length] = el}
          className="relative z-10 mt-20 text-center"
        >
          <span className="text-teal-500 text-[10px] tracking-[0.3em] font-medium uppercase opacity-70">Drop a line</span>
          <a href="mailto:shivadarshan600@gmail.com" className="block text-white mt-2 text-sm font-light tracking-wide">shivadarshan600@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
