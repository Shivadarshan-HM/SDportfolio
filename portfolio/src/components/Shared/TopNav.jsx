import React from 'react';

const TopNav = ({ refs }) => {
  const { topNavContainerRef, topNavAboutRef, topNavExpRef } = refs;

  return (
    <div ref={topNavContainerRef} className="absolute top-6 md:top-8 left-[120px] md:left-[160px] z-20 pointer-events-none w-64 h-12">
      <div ref={topNavAboutRef} className="absolute top-0 left-0 flex items-center space-x-4 w-max">
        <span className="text-gray-400 font-medium tracking-widest text-sm">02</span>
        <span className="text-orange-500 font-bold tracking-[0.2em] text-sm">ABOUT</span>
        <div className="w-12 h-[1px] bg-orange-800"></div>
      </div>
      <div ref={topNavExpRef} className="absolute top-0 left-0 flex items-center space-x-4 w-max opacity-0">
        <span className="text-gray-400 font-medium tracking-widest text-sm">03</span>
        <span className="text-orange-500 font-bold tracking-[0.2em] text-sm">EXPERTISE</span>
        <div className="w-12 h-[1px] bg-orange-800"></div>
      </div>
    </div>
  );
};

export default TopNav;
