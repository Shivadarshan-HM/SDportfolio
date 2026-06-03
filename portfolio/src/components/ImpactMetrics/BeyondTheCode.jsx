import React from 'react';

const BeyondTheCode = ({ refs }) => {
  const { beyondHeadingRef, beyondDescRef } = refs;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
      <div className="scale-y-110">
         <h1 ref={beyondHeadingRef} className="text-white text-[clamp(3.5rem,15vw,12rem)] font-black tracking-tighter leading-[0.85] uppercase opacity-0">
            BEYOND<br/>
            THE CODE
         </h1>
      </div>
      <p ref={beyondDescRef} className="text-gray-400 mt-8 text-lg md:text-3xl font-light tracking-wide max-w-2xl opacity-0">
        Every project is measured by the impact it creates.
      </p>
    </div>
  );
};

export default BeyondTheCode;
