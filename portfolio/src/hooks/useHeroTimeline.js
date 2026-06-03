'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useHeroTimeline() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const vignetteRef = useRef(null);
  
  // Refs for typography blocks
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const finalRef = useRef(null);

  // Refs for Shared UI (Sidebar & Top Nav)
  const sidebarContainerRef = useRef(null);
  const topNavContainerRef = useRef(null);
  
  const sidebarTopNum02Ref = useRef(null);
  const sidebarTopNum03Ref = useRef(null);
  const topNavAboutRef = useRef(null);
  const topNavExpRef = useRef(null);
  
  const navItem01Ref = useRef(null);
  const navItem02Ref = useRef(null);
  const navItem03Ref = useRef(null);
  const navItem04Ref = useRef(null);

  // Refs for About Section
  const aboutLabelRef = useRef(null);
  const aboutNameRef = useRef(null);
  const aboutRoleRef = useRef(null);
  const aboutDescRef = useRef(null);

  // Refs for Expertise Intro
  const expHeadingRef = useRef(null);
  const expLineRef = useRef(null);
  const expDescRef = useRef(null);

  // Refs for Massive Typography Sections
  const expDesignRef = useRef(null);
  const expDesignDescRef = useRef(null);
  const expEngRef = useRef(null);
  const expEngDescRef = useRef(null);
  const expImpactRef = useRef(null);
  const expImpactDescRef = useRef(null);

  // Refs for Selected Work Title Sequence
  const workHeadingRef = useRef(null);
  const workDescRef = useRef(null);

  // Refs for 4 Projects
  const proj1BgRef = useRef(null);
  const proj1ContentRef = useRef(null);
  
  const proj2BgRef = useRef(null);
  const proj2ContentRef = useRef(null);
  
  const proj3BgRef = useRef(null);
  const proj3ContentRef = useRef(null);
  
  const proj4BgRef = useRef(null);
  const proj4ContentRef = useRef(null);

  // Refs for How I Work (if any left over)
  const howDiscoverRef = useRef(null);
  const howDesignRef = useRef(null);
  const howBuildRef = useRef(null);
  const howLaunchRef = useRef(null);

  // Refs for Beyond The Code
  const beyondContainerRef = useRef(null);
  const beyondHeadingRef = useRef(null);
  const beyondDescRef = useRef(null);
  const graphPathRef = useRef(null);
  const graphFillRef = useRef(null);
  
  const metric1Ref = useRef(null);
  const count1Ref = useRef(null);
  const metric2Ref = useRef(null);
  const count2Ref = useRef(null);
  const metric3Ref = useRef(null);
  const count3Ref = useRef(null);
  const metric4Ref = useRef(null);
  const count4Ref = useRef(null);

  const insight1Ref = useRef(null);
  const insight2Ref = useRef(null);
  const insight3Ref = useRef(null);

  // Refs for Final Contact Section
  const finalContainerRef = useRef(null);
  const finalBgRef = useRef(null);
  const finalHeadingRef = useRef(null);
  const finalDescRef = useRef(null);
  const finalEmailRef = useRef(null);
  const finalLinkedinRef = useRef(null);
  const finalGithubRef = useRef(null);
  const finalFooterRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    
    const CANVAS_WIDTH = 1920;
    const CANVAS_HEIGHT = 1080;
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    const frameCount = 40;
    const currentFrame = (index) => (
      `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
    );

    const images = [];
    const imageInfo = { frame: 1 };

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      const img = images[imageInfo.frame - 1];
      if (img && img.complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    images[0].onload = render;

    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (ctx) => {
      let { isMobile } = ctx.conditions;

      // Define responsive variables
      const b20 = isMobile ? "blur(10px)" : "blur(20px)";
      const b15 = isMobile ? "blur(5px)" : "blur(15px)";
      const b10 = isMobile ? "blur(5px)" : "blur(10px)";
      const x25vw = isMobile ? "0vw" : "25vw";
      const x28vw = isMobile ? "0vw" : "28vw";
      const x3vw = isMobile ? "0vw" : "3vw";
      const negX3vw = isMobile ? "0vw" : "-3vw";
      const lsWide = isMobile ? "0.1em" : "0.5em";
      const lsMed = isMobile ? "0.05em" : "0.2em";

      // --- GSAP Master Timeline ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7500%",
          scrub: 1,      
          pin: true,
          onUpdate: (self) => {
            let active = "hero";
            // tl.duration() will be fully calculated after all tweens are added
            const time = self.progress * tl.duration();
            
            if (time >= 300) active = "contact";
            else if (time >= 120) active = "work";
            else if (time >= 45) active = "about";
            
            window.dispatchEvent(new CustomEvent('portfolio-scroll', { 
              detail: { active } 
            }));
            
            // Expose the ScrollTrigger instance for the Navbar
            window._portfolioScrollTrigger = self;
          }
        }
      });

      tl.addLabel("hero", 0);
      tl.addLabel("about", 50);
      tl.addLabel("work", 126);
      tl.addLabel("contact", 310);

      gsap.set(canvas, { clipPath: "inset(0% 0% 0% 0%)", x: "0vw", scale: 1 });
      gsap.set(topNavExpRef.current, { x: 20 });

      // 1. Animate Image Sequence
      tl.to(imageInfo, {
        frame: frameCount,
        snap: "frame",
        ease: "none",
        duration: 40,
        onUpdate: render
      }, 0);

      const animateText = (ref, startTime, endTime) => {
        tl.fromTo(ref.current,
          { opacity: 0, filter: b10, scale: 0.95, y: 50 },
          { opacity: 1, filter: "blur(0px)", scale: 1, y: 0, duration: 3, ease: "power2.out" },
          startTime
        );
        tl.to(ref.current,
          { opacity: 0, filter: b10, scale: 1.05, y: -50, duration: 3, ease: "power2.in" },
          endTime - 3
        );
      };

      // 2. Schedule Initial Text Blocks
      animateText(text1Ref, 0, 10);
      animateText(text2Ref, 10, 20);
      animateText(text3Ref, 20, 30);
      animateText(text4Ref, 30, 40);

      // 3. Final Reveal
      tl.fromTo(finalRef.current,
        { opacity: 0, filter: b10, scale: 0.95, y: 50 },
        { opacity: 1, filter: "blur(0px)", scale: 1, y: 0, duration: 4, ease: "power2.out" },
        40
      );

      tl.to(finalRef.current, { 
        opacity: 0, filter: b10, scale: 1.05, y: -50, duration: 3, ease: "power2.in" 
      }, 48);

      // 4. TRANSITION TO ABOUT SECTION (02)
      tl.to(vignetteRef.current, { opacity: 0, duration: 4, ease: "power2.inOut" }, 50);

      tl.to(canvas, {
        scale: isMobile ? 1.02 : 1.05, 
        x: x25vw,   
        clipPath: isMobile ? "inset(5% 5% 5% 5%)" : "inset(10% 25% 10% 25%)", 
        duration: 5,
        ease: "power3.inOut"
      }, 50);

      tl.fromTo([sidebarContainerRef.current, topNavContainerRef.current],
        { opacity: 0 },
        { opacity: isMobile ? 0 : 1, duration: 3, ease: "power2.out" }, // Hide sidebars on mobile
        53
      );

      tl.fromTo(aboutNameRef.current,
        { opacity: 0, clipPath: "inset(100% -20% -20% -20%)", filter: b10, letterSpacing: lsWide, y: 40 },
        { opacity: 1, clipPath: "inset(-20% -20% -20% -20%)", filter: "blur(0px)", letterSpacing: "0em", y: 0, duration: 3, ease: "power3.out" },
        53
      );
      tl.fromTo(aboutRoleRef.current,
        { opacity: 0, clipPath: "inset(100% -20% -20% -20%)", filter: b10, y: 30 },
        { opacity: 1, clipPath: "inset(-20% -20% -20% -20%)", filter: "blur(0px)", y: 0, duration: 3, ease: "power3.out" },
        54
      );
      tl.fromTo(aboutDescRef.current,
        { opacity: 0, filter: b10, y: 30 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 3, ease: "power3.out" },
        55
      );

      // 5. TRANSITION TO EXPERTISE INTRO (03)
      const exitAboutProps = { opacity: 0, filter: b15, y: -60, duration: 4, ease: "power2.in" };
      tl.to(aboutNameRef.current, exitAboutProps, 65);
      tl.to(aboutRoleRef.current, exitAboutProps, 65);
      tl.to(aboutDescRef.current, exitAboutProps, 65);

      tl.to(navItem02Ref.current, { color: "#6b7280", duration: 1 }, 65);
      tl.to(navItem03Ref.current, { color: "#f97316", duration: 1 }, 65);
      
      tl.to(sidebarTopNum02Ref.current, { opacity: 0, duration: 1 }, 65);
      tl.to(sidebarTopNum03Ref.current, { opacity: 1, duration: 1 }, 65);

      tl.to(topNavAboutRef.current, { opacity: 0, x: -20, duration: 1 }, 65);
      tl.to(topNavExpRef.current, { opacity: 1, x: 0, duration: 1 }, 65);

      tl.to(canvas, {
        scale: isMobile ? 1.05 : 1.08,
        x: x28vw,
        duration: 6,
        ease: "power2.inOut"
      }, 65);

      // 6. EXPERTISE INTRO
      const expStart = 70;

      tl.fromTo(expHeadingRef.current,
        { opacity: 0, clipPath: "inset(100% -20% -20% -20%)", filter: b10, y: 50 },
        { opacity: 1, clipPath: "inset(-20% -20% -20% -20%)", filter: "blur(0px)", y: 0, duration: 4, ease: "power3.out" },
        expStart
      );

      tl.fromTo(expLineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 2, ease: "power3.out" },
        expStart + 2
      );

      tl.fromTo(expDescRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 3, ease: "power2.out" },
        expStart + 3
      );

      // 7. TRANSITION TO MASSIVE TYPOGRAPHY
      const transMassive = 85;

      tl.to(expHeadingRef.current, { scale: 0.8, y: -150, opacity: 0, filter: b10, duration: 4, ease: "power2.inOut" }, transMassive);
      tl.to(expLineRef.current, { y: -150, opacity: 0, duration: 4, ease: "power2.inOut" }, transMassive);
      tl.to(expDescRef.current, { y: -150, opacity: 0, duration: 4, ease: "power2.inOut" }, transMassive);
      
      tl.to([sidebarContainerRef.current, topNavContainerRef.current], { opacity: 0, duration: 3, ease: "power2.inOut" }, transMassive);

      tl.to(canvas, {
        scale: isMobile ? 1.05 : 1.3,
        x: "0vw",
        clipPath: "inset(0% 0% 0% 0%)",
        filter: `${b20} brightness(0.2)`, 
        duration: 6,
        ease: "power2.inOut"
      }, transMassive);

      // 8. MASSIVE TYPOGRAPHY
      const animateMassive = (wordRef, descRef, startTime) => {
        tl.fromTo(wordRef.current,
          { opacity: 0, clipPath: "inset(100% -20% -20% -20%)", filter: b20, letterSpacing: lsMed },
          { opacity: 1, clipPath: "inset(-20% -20% -20% -20%)", filter: "blur(0px)", letterSpacing: "0em", duration: 5, ease: "power3.out" },
          startTime
        );
        
        tl.fromTo(wordRef.current,
          { x: x3vw },
          { x: negX3vw, duration: 12, ease: "none" },
          startTime
        );
        
        tl.fromTo(descRef.current,
          { opacity: 0, filter: b10, y: 40 },
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 4, ease: "power2.out" },
          startTime + 3 
        );
        
        tl.to([wordRef.current, descRef.current],
          { opacity: 0, filter: b20, scale: 1.05, y: -40, duration: 4, ease: "power2.in" },
          startTime + 10
        );
      };

      animateMassive(expDesignRef, expDesignDescRef, 90);
      animateMassive(expEngRef, expEngDescRef, 102);
      animateMassive(expImpactRef, expImpactDescRef, 114);

      // 9. SELECTED WORK TITLE SEQUENCE
      const workStart = 126;

      tl.fromTo(workHeadingRef.current,
        { opacity: 0, clipPath: "inset(100% -20% -20% -20%)", filter: b20, letterSpacing: lsMed, scale: 0.95 },
        { opacity: 1, clipPath: "inset(-20% -20% -20% -20%)", filter: "blur(0px)", letterSpacing: "0em", scale: 1, duration: 6, ease: "power3.out" },
        workStart
      );
      
      tl.fromTo(workHeadingRef.current,
        { y: "10vh" },
        { y: "-5vh", duration: 15, ease: "none" },
        workStart
      );
      
      tl.fromTo(workDescRef.current,
        { opacity: 0, filter: b10, y: 40 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 4, ease: "power2.out" },
        workStart + 4 
      );
      
      tl.to([workHeadingRef.current, workDescRef.current], {
        opacity: 0, scale: 1.1, filter: b20, duration: 6, ease: "power3.in"
      }, workStart + 16);

      // 10. PROJECT SHOWCASES
      const animateProject = (bgRef, contentRef, startTime, isLast = false) => {
        tl.fromTo(bgRef.current, 
          { opacity: 0, filter: b20, scale: isMobile ? 1.05 : 1.1 },
          { opacity: 1, filter: "blur(0px)", scale: 1, duration: 6, ease: "power2.out" },
          startTime
        );

        tl.to(bgRef.current, {
          y: "-5vh", scale: 1.05, duration: 25, ease: "none"
        }, startTime);

        tl.fromTo(contentRef.current,
          { opacity: 0, y: isMobile ? 50 : 100, clipPath: "inset(100% -20% -20% -20%)", filter: b10 },
          { opacity: 1, y: 0, clipPath: "inset(-20% -20% -20% -20%)", filter: "blur(0px)", duration: 6, ease: "power3.out" },
          startTime + 2
        );

        if (!isLast) {
          tl.to(contentRef.current, {
            opacity: 0, y: -50, filter: b10, duration: 4, ease: "power2.in"
          }, startTime + 18);
          
          tl.to(bgRef.current, {
            opacity: 0, scale: 0.9, filter: `${b20} brightness(0.2)`, duration: 6, ease: "power2.inOut"
          }, startTime + 18);
        }
      };

      const p1Start = 150;
      animateProject(proj1BgRef, proj1ContentRef, p1Start);

      const p2Start = 175;
      animateProject(proj2BgRef, proj2ContentRef, p2Start);

      const p3Start = 200;
      animateProject(proj3BgRef, proj3ContentRef, p3Start);

      const p4Start = 225;
      animateProject(proj4BgRef, proj4ContentRef, p4Start, false);

      // 11. BEYOND THE CODE
      const beyondStart = 250;

      tl.fromTo(beyondHeadingRef.current,
        { opacity: 0, clipPath: "inset(100% -20% -20% -20%)", filter: b20, letterSpacing: lsMed, scale: 0.95 },
        { opacity: 1, clipPath: "inset(-20% -20% -20% -20%)", filter: "blur(0px)", letterSpacing: "0em", scale: 1, duration: 6, ease: "power3.out" },
        beyondStart
      );
      tl.fromTo(beyondHeadingRef.current, { y: "10vh" }, { y: "-5vh", duration: 15, ease: "none" }, beyondStart);

      tl.fromTo(beyondDescRef.current,
        { opacity: 0, y: 30, filter: b10 },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 4, ease: "power2.out" },
        beyondStart + 4
      );

      tl.to([beyondHeadingRef.current, beyondDescRef.current], {
        opacity: 0, scale: 1.1, filter: b20, duration: 5, ease: "power2.in"
      }, beyondStart + 15);

      tl.fromTo(beyondContainerRef.current, 
        { opacity: 0 }, { opacity: 1, duration: 4 }, beyondStart + 18
      );

      tl.to(graphPathRef.current, {
        strokeDashoffset: 0,
        duration: 35,
        ease: "power1.inOut"
      }, beyondStart + 18);

      tl.to(graphFillRef.current, {
        opacity: 1,
        duration: 15,
        ease: "power2.out"
      }, beyondStart + 25);

      const metrics = [metric1Ref, metric2Ref, metric3Ref, metric4Ref];
      metrics.forEach((metric, index) => {
        tl.fromTo(metric.current,
          { opacity: 0, y: 50, filter: b10 },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 4, ease: "power3.out" },
          beyondStart + 22 + (index * 2)
        );
      });

      const countObj = { val1: 0, val2: 0, val3: 0, val4: 0 };
      tl.to(countObj, {
        val1: 4, val2: 4, val3: 1000, val4: 4,
        duration: 25,
        ease: "power2.out",
        onUpdate: () => {
          if(count1Ref.current) count1Ref.current.innerHTML = Math.floor(countObj.val1) + "+";
          if(count2Ref.current) count2Ref.current.innerHTML = Math.floor(countObj.val2) + "+";
          if(count3Ref.current) count3Ref.current.innerHTML = Math.floor(countObj.val3) + "+";
          if(count4Ref.current) count4Ref.current.innerHTML = Math.floor(countObj.val4);
        }
      }, beyondStart + 26);

      const animateInsight = (ref, startTime) => {
        tl.fromTo(ref.current, 
          { opacity: 0, scale: 0.8, y: 20, filter: b10 }, 
          { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 4, ease: "back.out(1.5)" }, 
          startTime
        );
      };

      animateInsight(insight1Ref, beyondStart + 25);
      animateInsight(insight2Ref, beyondStart + 32);
      animateInsight(insight3Ref, beyondStart + 42);

      tl.to(beyondContainerRef.current, { opacity: 0, duration: 5, ease: "power2.in" }, beyondStart + 55);

      // 12. FINAL CONTACT SECTION
      const finalStart = beyondStart + 60;
      
      tl.to(finalBgRef.current, { opacity: 0.15, duration: 10, ease: "power2.inOut" }, finalStart);
      tl.fromTo(finalContainerRef.current, { opacity: 0 }, { opacity: 1, duration: 5 }, finalStart);

      tl.fromTo(finalHeadingRef.current,
        { opacity: 0, clipPath: "inset(100% -20% -20% -20%)", filter: b20, letterSpacing: lsMed, y: 100 },
        { opacity: 1, clipPath: "inset(-20% -20% -20% -20%)", filter: "blur(0px)", letterSpacing: "0em", y: 0, duration: 8, ease: "power3.out" },
        finalStart + 2
      );

      const menuItems = [finalEmailRef, finalLinkedinRef, finalGithubRef];
      menuItems.forEach((item, index) => {
        tl.fromTo(item.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 3, ease: "power2.out" },
          finalStart + 8 + (index * 2)
        );
      });

      tl.fromTo(finalFooterRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 5, ease: "power2.inOut" },
        finalStart + 15
      );

      tl.to(finalHeadingRef.current, { scale: 1.05, duration: 25, ease: "none" }, finalStart + 2);

      tl.to({}, { duration: 15 }); // End buffer

      return () => {
        tl.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return {
    containerRef,
    heroRefs: {
      canvasRef,
      vignetteRef,
      text1Ref, text2Ref, text3Ref, text4Ref, finalRef
    },
    sharedRefs: {
      sidebarContainerRef, topNavContainerRef,
      sidebarTopNum02Ref, sidebarTopNum03Ref,
      topNavAboutRef, topNavExpRef,
      navItem01Ref, navItem02Ref, navItem03Ref, navItem04Ref
    },
    aboutRefs: {
      aboutLabelRef, aboutNameRef, aboutRoleRef, aboutDescRef
    },
    expertiseRefs: {
      expHeadingRef, expLineRef, expDescRef,
      expDesignRef, expDesignDescRef,
      expEngRef, expEngDescRef,
      expImpactRef, expImpactDescRef
    },
    projectsRefs: {
      workHeadingRef, workDescRef,
      proj1BgRef, proj1ContentRef,
      proj2BgRef, proj2ContentRef,
      proj3BgRef, proj3ContentRef,
      proj4BgRef, proj4ContentRef
    },
    metricsRefs: {
      beyondContainerRef, beyondHeadingRef, beyondDescRef,
      graphPathRef, graphFillRef,
      metric1Ref, count1Ref, metric2Ref, count2Ref,
      metric3Ref, count3Ref, metric4Ref, count4Ref,
      insight1Ref, insight2Ref, insight3Ref
    },
    contactRefs: {
      finalContainerRef, finalBgRef, finalHeadingRef, finalDescRef,
      finalEmailRef, finalLinkedinRef, finalGithubRef, finalFooterRef
    }
  };
}
