import React from 'react';

const GraphSection = ({ refs }) => {
  const { graphFillRef, graphPathRef } = refs;

  return (
    <>
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-80 mt-16 drop-shadow-[0_0_25px_rgba(217,119,6,0.4)]">
        <defs>
          <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(217,119,6,0.35)" />
            <stop offset="100%" stopColor="rgba(217,119,6,0)" />
          </linearGradient>
        </defs>
        <path 
          ref={graphFillRef}
          d="M 0 500 C 200 500, 300 200, 500 250 C 700 300, 800 100, 1050 50 L 1050 500 L 0 500 Z"
          fill="url(#graphGradient)"
          className="opacity-0"
        />
        <path 
          ref={graphPathRef}
          d="M 0 500 C 200 500, 300 200, 500 250 C 700 300, 800 100, 1050 50" 
          fill="none" 
          stroke="#D97706" 
          strokeWidth="5"
          strokeLinecap="round"
          style={{ strokeDasharray: 2500, strokeDashoffset: 2500 }}
        />
      </svg>
    </>
  );
};

export default GraphSection;
