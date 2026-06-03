import React from 'react';

const SelectedWork = ({ refs }) => {
  const { workHeadingRef, workDescRef } = refs;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none w-full h-full overflow-hidden z-10">
      <div ref={workHeadingRef} className="opacity-0 flex flex-col items-center justify-center text-center w-full">
        <div className="scale-y-110">
           <h1 className="text-white text-[clamp(3.5rem,15vw,12rem)] font-black tracking-tighter leading-[0.85] uppercase">
              SELECTED<br/>
              WORK
           </h1>
        </div>
      </div>
      <div ref={workDescRef} className="opacity-0 absolute top-[75%] md:top-[70%] w-full max-w-3xl px-6 md:px-8 text-center">
        <p className="text-gray-400 text-lg md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide">
          A collection of products designed and built to solve real business challenges.
        </p>
      </div>
    </div>
  );
};

export default SelectedWork;
