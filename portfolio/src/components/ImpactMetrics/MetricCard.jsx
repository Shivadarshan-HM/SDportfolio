import React from 'react';

const MetricCard = ({ metric, containerRef, countRef }) => {
  return (
    <div ref={containerRef} className={`flex flex-col border-l-2 ${metric.borderClass} pl-6 opacity-0`}>
      <span className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter" ref={countRef}>
        0
      </span>
      <span className="text-gray-400 font-medium tracking-[0.2em] uppercase text-xs md:text-sm mt-4 whitespace-pre-line">
        {metric.label}
      </span>
    </div>
  );
};

export default MetricCard;
