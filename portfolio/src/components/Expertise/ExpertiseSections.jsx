import React from 'react';

export const DesignSection = ({ refs }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 ref={refs.expDesignRef} className="text-white text-[clamp(3rem,15vw,15vw)] font-black tracking-tighter leading-[0.8] uppercase opacity-0">
      DESIGN
    </h1>
    <div ref={refs.expDesignDescRef} className="opacity-0 absolute top-[60%] md:top-[65%] w-full max-w-3xl px-4">
      <p className="text-gray-300 text-lg md:text-4xl font-light leading-relaxed">
        Crafting intuitive interfaces that balance aesthetics, usability, and performance.
      </p>
    </div>
  </div>
);

export const EngineeringSection = ({ refs }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 ref={refs.expEngRef} className="text-white text-[clamp(2.5rem,12vw,12vw)] font-black tracking-tighter leading-[0.8] uppercase opacity-0">
      ENGINEERING
    </h1>
    <div ref={refs.expEngDescRef} className="opacity-0 absolute top-[60%] md:top-[65%] w-full max-w-3xl px-4">
      <p className="text-gray-300 text-lg md:text-4xl font-light leading-relaxed">
        Building scalable applications with clean architecture and modern technologies.
      </p>
    </div>
  </div>
);

export const ImpactSection = ({ refs }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 ref={refs.expImpactRef} className="text-white text-[clamp(3rem,15vw,15vw)] font-black tracking-tighter leading-[0.8] uppercase opacity-0">
      IMPACT
    </h1>
    <div ref={refs.expImpactDescRef} className="opacity-0 absolute top-[60%] md:top-[65%] w-full max-w-3xl px-4">
      <p className="text-teal-400 text-lg md:text-4xl font-medium leading-relaxed drop-shadow-md">
        Creating solutions that solve real business problems and drive measurable results.
      </p>
    </div>
  </div>
);
