import React from 'react';

const FloatingInsights = ({ refs }) => {
  const { insight1Ref, insight2Ref, insight3Ref } = refs;

  return (
    <>
      <div ref={insight1Ref} className="absolute left-[25%] top-[55%] md:top-[45%] opacity-0 flex flex-col items-center">
        <div className="w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,1)] mb-3 animate-pulse border-2 border-black"></div>
        <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl text-center shadow-xl">
          <div className="text-white font-bold text-2xl md:text-3xl tracking-tighter">95%</div>
          <div className="text-gray-400 text-[10px] md:text-xs font-medium tracking-widest uppercase mt-1">Client Satisfaction</div>
        </div>
      </div>
      
      <div ref={insight2Ref} className="absolute left-[50%] top-[45%] md:top-[35%] opacity-0 flex flex-col items-center">
        <div className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)] mb-3 animate-pulse border-2 border-black"></div>
        <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl text-center shadow-xl">
          <div className="text-white font-bold text-2xl md:text-3xl tracking-tighter">40%</div>
          <div className="text-gray-400 text-[10px] md:text-xs font-medium tracking-widest uppercase mt-1">Efficiency Improv.</div>
        </div>
      </div>
      
      <div ref={insight3Ref} className="absolute left-[75%] top-[25%] md:top-[15%] opacity-0 flex flex-col items-center">
        <div className="w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,1)] mb-3 animate-pulse border-2 border-black"></div>
        <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl text-center shadow-xl">
          <div className="text-white font-bold text-2xl md:text-3xl tracking-tighter">99.9%</div>
          <div className="text-gray-400 text-[10px] md:text-xs font-medium tracking-widest uppercase mt-1">System Uptime</div>
        </div>
      </div>
    </>
  );
};

export default FloatingInsights;
