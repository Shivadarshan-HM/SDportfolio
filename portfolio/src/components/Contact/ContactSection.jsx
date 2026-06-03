import React from 'react';

const ContactSection = ({ refs }) => {
  const {
    finalContainerRef, finalBgRef, finalHeadingRef, finalDescRef,
    finalEmailRef, finalLinkedinRef, finalGithubRef, finalFooterRef
  } = refs;

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden z-20">
      
      {/* Silhouette Background */}
      <div 
        ref={finalBgRef} 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0 mix-blend-screen"
        style={{ backgroundImage: "url('/silhouette_portrait.png')", backgroundPosition: "center 20%" }}
      >
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      {/* Content Container */}
      <div ref={finalContainerRef} className="absolute inset-0 flex flex-col items-center justify-between opacity-0 px-4 md:px-8 w-full h-full pb-24 md:pb-32 pt-32">
        
        {/* Main Heading (Centered vertically in the remaining space) */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 ref={finalHeadingRef} className="text-white text-[clamp(2.5rem,10vw,8rem)] font-black tracking-tighter leading-[1.1] uppercase">
            LET'S BUILD<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">SOMETHING</span><br/>
            EXCEPTIONAL
          </h1>
        </div>

        {/* Contact Menu (Pushed to bottom, naturally flowing) */}
        <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16 text-center pointer-events-auto z-50">
          <div ref={finalEmailRef} className="flex flex-col items-center group cursor-pointer" data-cursor="COPY">
            <span className="text-teal-500 text-[10px] md:text-xs tracking-[0.3em] font-medium uppercase mb-1 md:mb-4 opacity-70 pointer-events-none">Email</span>
            <a href="mailto:shivadarshan600@gmail.com" className="text-white text-base md:text-2xl font-light tracking-wide relative inline-block pb-1">
              shivadarshan600@gmail.com
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </div>
          
          <div ref={finalLinkedinRef} className="flex flex-col items-center group cursor-pointer" data-cursor="VISIT">
            <span className="text-teal-500 text-[10px] md:text-xs tracking-[0.3em] font-medium uppercase mb-1 md:mb-4 opacity-70 pointer-events-none">LinkedIn</span>
            <a href="https://www.linkedin.com/in/shiva-darshan-01b782371/" target="_blank" rel="noreferrer" className="text-white text-base md:text-2xl font-light tracking-wide relative inline-block pb-1">
              /in/shiva-darshan
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </div>
          
          <div ref={finalGithubRef} className="flex flex-col items-center group cursor-pointer" data-cursor="EXPLORE">
            <span className="text-teal-500 text-[10px] md:text-xs tracking-[0.3em] font-medium uppercase mb-1 md:mb-4 opacity-70 pointer-events-none">GitHub</span>
            <a href="https://github.com/Shivadarshan-HM" target="_blank" rel="noreferrer" className="text-white text-base md:text-2xl font-light tracking-wide relative inline-block pb-1">
              @Shivadarshan-HM
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </div>
        </div>

      </div>

      {/* Footer Marquee / Tagline */}
      <div ref={finalFooterRef} className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/10 py-5 bg-[#050505]/80 backdrop-blur-md opacity-0 pointer-events-none">
          <div className="flex justify-center items-center space-x-3 md:space-x-12 text-[8px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-500 font-medium px-4">
             <span>Available For</span>
             <span className="w-1.5 h-1.5 rounded-full bg-orange-500 hidden sm:block"></span>
             <span className="text-gray-300 hidden sm:block">Freelance</span>
             <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
             <span className="text-gray-300">Startups</span>
             <span className="w-1.5 h-1.5 rounded-full bg-orange-500 hidden sm:block"></span>
             <span className="text-gray-300 hidden sm:block">Collaborations</span>
          </div>
      </div>
    </div>
  );
};

export default ContactSection;
