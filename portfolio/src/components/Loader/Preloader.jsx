'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const containerRef = useRef(null);
  const topPanelRef = useRef(null);
  const bottomPanelRef = useRef(null);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
        document.body.style.overflow = '';
      }
    });

    // 1. Initial State
    gsap.set(nameRef.current, { opacity: 0, filter: "blur(20px)", scale: 0.9, y: 20, letterSpacing: "0.2em" });
    gsap.set(roleRef.current, { opacity: 0, filter: "blur(10px)", y: 10 });

    // 2. Cinematic Reveal
    tl.to(nameRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      y: 0,
      letterSpacing: "0em",
      duration: 2.5,
      ease: "power3.out"
    }, 0.2);

    tl.to(roleRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.5,
      ease: "power2.out"
    }, 1.2);

    // Subtle continuous scale
    tl.to(contentRef.current, {
      scale: 1.05,
      duration: 4,
      ease: "none"
    }, 0);

    // 3. Fade out text
    tl.to(contentRef.current, {
      opacity: 0,
      filter: "blur(15px)",
      scale: 1.1,
      duration: 1.2,
      ease: "power2.inOut"
    }, 3.5);

    // 4. Split Background Open
    tl.to(topPanelRef.current, {
      yPercent: -100,
      duration: 1.5,
      ease: "power4.inOut"
    }, 4.2);

    tl.to(bottomPanelRef.current, {
      yPercent: 100,
      duration: 1.5,
      ease: "power4.inOut"
    }, 4.2);

  }, []);

  if (isComplete) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Background Panels */}
      <div ref={topPanelRef} className="absolute top-0 left-0 w-full h-1/2 bg-[#050505]" />
      <div ref={bottomPanelRef} className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050505]" />
      
      {/* Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 
          ref={nameRef} 
          className="text-white text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter uppercase leading-none drop-shadow-2xl"
        >
          SHIVA DARSHAN
        </h1>
        <p 
          ref={roleRef} 
          className="text-[#D97706] mt-4 text-xs md:text-sm font-medium tracking-[0.5em] uppercase"
        >
          CREATIVE DEVELOPER
        </p>
      </div>
    </div>
  );
};

export default Preloader;
