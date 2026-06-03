import React from 'react';

const HeroTexts = ({ refs }) => {
  const { text1Ref, text2Ref, text3Ref, text4Ref, finalRef } = refs;
  
  const textContainerClass = "absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-6 md:px-4";
  const titleClass = "text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-2xl uppercase";
  const subtitleClass = "text-gray-300 mt-4 text-lg md:text-2xl font-light tracking-wide max-w-2xl drop-shadow-md px-4 md:px-0";

  return (
    <>
      {/* Story Sequence Blocks */}
      <div ref={text1Ref} className={`${textContainerClass} opacity-0`}>
        <h1 className={titleClass}>YOU HAVE AN IDEA</h1>
        <p className={subtitleClass}>Every great product starts with a vision.</p>
      </div>
      <div ref={text2Ref} className={`${textContainerClass} opacity-0`}>
        <h1 className={titleClass}>I DESIGN THE SOLUTION</h1>
        <p className={subtitleClass}>Transforming concepts into intuitive digital experiences.</p>
      </div>
      <div ref={text3Ref} className={`${textContainerClass} opacity-0`}>
        <h1 className={titleClass}>I BUILD THE PRODUCT</h1>
        <p className={subtitleClass}>From frontend to backend, engineered for growth.</p>
      </div>
      <div ref={text4Ref} className={`${textContainerClass} opacity-0`}>
        <h1 className={titleClass}>YOU GROW THE BUSINESS</h1>
        <p className={subtitleClass}>Technology that creates real impact.</p>
      </div>

      {/* Final Reveal */}
      <div ref={finalRef} className={`${textContainerClass} opacity-0`}>
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter drop-shadow-2xl uppercase">
          SHIVA DARSHAN
        </h1>
        <h2 className="text-gray-200 mt-4 text-lg md:text-3xl font-medium tracking-[0.1em] md:tracking-[0.2em] drop-shadow-lg">
          FULL-STACK DEVELOPER • FREELANCER
        </h2>
        <p className="text-gray-400 mt-6 md:mt-8 text-base md:text-xl font-light tracking-wide max-w-3xl drop-shadow-md px-6 md:px-0">
          Building modern web experiences that help businesses launch, scale, and succeed.
        </p>
      </div>
    </>
  );
};

export default HeroTexts;
