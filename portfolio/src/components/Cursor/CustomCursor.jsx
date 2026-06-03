"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);
  
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Performance: use quickTo for smooth 60fps tracking without state overhead
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Find the closest element with a data-cursor attribute
      const target = e.target.closest("[data-cursor]");
      
      if (target) {
        const text = target.getAttribute("data-cursor");
        setCursorText(text);
        setIsHovering(true);
        
        // GSAP animate cursor to "hover" state
        gsap.to(cursor, { scale: 3.5, duration: 0.3, ease: "back.out(1.5)" });
        gsap.to(bgRef.current, { backgroundColor: "rgba(217, 119, 6, 0.9)", borderColor: "transparent", duration: 0.3 });
      } else {
        setCursorText("");
        setIsHovering(false);
        
        // GSAP animate cursor back to "default" state
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(bgRef.current, { backgroundColor: "transparent", borderColor: "#D97706", duration: 0.3 });
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      gsap.to(cursor, { scale: isHovering ? 2.5 : 0.8, duration: 0.1 });
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      gsap.to(cursor, { scale: isHovering ? 3.5 : 1, duration: 0.2, ease: "back.out(1.5)" });
    };

    // Special click handler for copying email
    const handleClick = (e) => {
      const target = e.target.closest("[data-cursor='COPY']");
      if (target) {
        // Assume the target contains the email in its href or text
        const email = "shivadarshan600@gmail.com";
        navigator.clipboard.writeText(email);
        
        setCursorText("COPIED!");
        gsap.to(bgRef.current, { backgroundColor: "#0F766E", duration: 0.2 }); // turn teal for success
        
        setTimeout(() => {
          setCursorText("COPY");
          gsap.to(bgRef.current, { backgroundColor: "rgba(217, 119, 6, 0.9)", duration: 0.3 });
        }, 1500);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("click", handleClick);

    // Initial center position offscreen
    gsap.set(cursor, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("click", handleClick);
    };
  }, [isHovering]);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
    >
      <div 
        ref={bgRef}
        className="w-4 h-4 rounded-full border border-orange-500 shadow-[0_0_10px_rgba(217,119,6,0.3)] flex items-center justify-center"
      >
        <span 
          ref={textRef}
          className={`text-[3px] font-bold text-[#050505] tracking-widest uppercase transition-opacity duration-200 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        >
          {cursorText}
        </span>
      </div>
    </div>
  );
}
