import React from 'react';

const ExpertiseIntro = ({ refs }) => {
  const { expHeadingRef, expLineRef, expDescRef } = refs;

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center px-6 md:px-32 w-full md:w-[60%] z-10">
      <div ref={expHeadingRef} className="opacity-0 mt-8">
        <div className="scale-y-110 origin-left">
          <h1 className="text-white text-[clamp(2.5rem,10vw,6.5rem)] font-black tracking-tighter leading-[0.85] uppercase">
            WHAT I <br/>
            <span className="text-orange-500">BRING</span><br/>
            TO THE <br/>
            TABLE
          </h1>
        </div>
      </div>
      <div ref={expLineRef} className="w-16 h-[2px] bg-teal-700 mt-8 md:mt-12 mb-6 origin-left"></div>
      <div ref={expDescRef} className="opacity-0 max-w-lg">
        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
          I combine creativity,<br/>
          engineering and strategy<br/>
          to build products that<br/>
          create measurable impact.
        </p>
      </div>
    </div>
  );
};

export default ExpertiseIntro;
