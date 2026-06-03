import React from 'react';

const SidebarNav = ({ refs }) => {
  const { 
    sidebarContainerRef, 
    sidebarTopNum02Ref, sidebarTopNum03Ref,
    navItem01Ref, navItem02Ref, navItem03Ref, navItem04Ref
  } = refs;

  return (
    <div ref={sidebarContainerRef} className="absolute left-0 top-0 w-[80px] md:w-[100px] h-full border-r border-white/5 flex flex-col items-center justify-between py-12 opacity-0 z-20 pointer-events-none">
      <div className="relative h-8 w-full flex justify-center items-center">
        <div ref={sidebarTopNum02Ref} className="absolute text-orange-500 font-bold text-xl md:text-2xl">02</div>
        <div ref={sidebarTopNum03Ref} className="absolute text-orange-500 font-bold text-xl md:text-2xl opacity-0">03</div>
      </div>
      
      <div className="flex flex-col space-y-6 text-gray-500 text-sm font-medium">
        <div ref={navItem01Ref}>01</div>
        <div ref={navItem02Ref} className="flex flex-col items-center text-orange-500">
          <span className="text-xs mb-1">•</span>02
        </div>
        <div ref={navItem03Ref} className="flex flex-col items-center">03</div>
        <div ref={navItem04Ref}>04</div>
      </div>

      <div className="flex flex-col items-center opacity-50">
        <div className="transform -rotate-90 text-xs tracking-widest text-gray-400 whitespace-nowrap mb-16">
          SCROLL TO EXPLORE
        </div>
        <div className="w-[1px] h-12 bg-gray-400 mt-4"></div>
      </div>
    </div>
  );
};

export default SidebarNav;
