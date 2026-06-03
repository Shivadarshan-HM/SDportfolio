import React from 'react';

const AboutSection = ({ refs }) => {
  const { aboutNameRef, aboutRoleRef, aboutDescRef } = refs;

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left pointer-events-none px-6 md:px-32 w-full md:w-[60%] z-10">
      <div ref={aboutNameRef} className="opacity-0">
        <h1 className="text-white text-5xl sm:text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9] mb-4 md:mb-6 uppercase">
          SHIVA <br className="hidden md:block" /> DARSHAN
        </h1>
      </div>
      <div ref={aboutRoleRef} className="opacity-0">
        <h2 className="text-teal-400 text-sm sm:text-lg md:text-2xl font-medium tracking-widest mb-6 md:mb-10 uppercase">
          FULL STACK DEVELOPER || AI Builder
        </h2>
      </div>
      <div ref={aboutDescRef} className="opacity-0">
        <p className="text-gray-400 text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-lg mx-auto md:mx-0">
          I craft immersive, high-performance digital experiences. Specializing in bridging the gap between cutting-edge design and robust engineering to help brands stand out in the modern web.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
