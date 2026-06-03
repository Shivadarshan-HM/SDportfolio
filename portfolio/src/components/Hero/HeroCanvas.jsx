import React, { memo } from 'react';

const HeroCanvas = memo(({ canvasRef, vignetteRef }) => {
  return (
    <>
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover transition-all" />
      <div ref={vignetteRef} className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.85)_120%)]"></div>
    </>
  );
});

HeroCanvas.displayName = 'HeroCanvas';

export default HeroCanvas;
