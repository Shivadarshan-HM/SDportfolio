import React from 'react';
import { projects } from '../../data/projects';
import ProjectShowcase from './ProjectShowcase';

const ProjectsList = ({ refs }) => {
  const {
    proj1BgRef, proj1ContentRef,
    proj2BgRef, proj2ContentRef,
    proj3BgRef, proj3ContentRef,
    proj4BgRef, proj4ContentRef
  } = refs;

  const projectRefs = [
    { bg: proj1BgRef, content: proj1ContentRef },
    { bg: proj2BgRef, content: proj2ContentRef },
    { bg: proj3BgRef, content: proj3ContentRef },
    { bg: proj4BgRef, content: proj4ContentRef },
  ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {projects.map((project, index) => (
        <ProjectShowcase 
          key={project.id} 
          project={project} 
          bgRef={projectRefs[index].bg} 
          contentRef={projectRefs[index].content} 
        />
      ))}
    </div>
  );
};

export default ProjectsList;
