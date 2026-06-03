import React from 'react';

const ProjectShowcase = ({ project, bgRef, contentRef }) => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      
      {/* Desktop Background */}
      <div 
        ref={bgRef} 
        className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center opacity-0" 
        style={{ backgroundImage: `url('${project.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
      </div>
      
      <div 
        data-cursor="VIEW CASE" 
        ref={contentRef} 
        className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 opacity-0 z-10 w-full md:w-[60%] h-full pointer-events-auto pt-16 md:pt-0"
      >
        <span className="text-orange-500 font-bold tracking-[0.2em] text-sm md:text-xl mb-2 md:mb-4">{project.number}</span>
        
        <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-3 md:mb-4 whitespace-pre-line">
          {project.title}
        </h1>
        
        <p className="text-gray-300 text-lg md:text-3xl font-light mb-4 md:mb-6">
          {project.subtitle}
        </p>
        
        <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-xl mb-6 md:mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-10">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-sm font-medium tracking-widest text-teal-400 border border-teal-400/30 rounded-full bg-teal-900/10 backdrop-blur-sm uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile only Image Block */}
        <div className="md:hidden w-full h-[25vh] sm:h-[35vh] rounded-xl overflow-hidden mb-6 relative border border-white/10 shrink-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${project.backgroundImage}')` }}></div>
        </div>
        
        <a 
          data-cursor="OPEN" 
          href={project.githubLink} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center justify-center space-x-3 text-white hover:text-orange-500 transition-colors group w-full md:w-max border border-white/20 hover:border-orange-500/50 px-6 py-3 md:py-3 rounded-full backdrop-blur-md shrink-0"
        >
           <span className="font-bold tracking-[0.2em] uppercase text-xs md:text-sm">View Source Code</span>
           <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
           </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectShowcase;
