'use client';

import React from 'react';
import { useHeroTimeline } from '../../hooks/useHeroTimeline';

// Shared UI
import SidebarNav from '../Shared/SidebarNav';
import TopNav from '../Shared/TopNav';

// Sections
import HeroCanvas from '../Hero/HeroCanvas';
import HeroTexts from '../Hero/HeroTexts';
import AboutSection from '../About/AboutSection';
import ExpertiseIntro from '../Expertise/ExpertiseIntro';
import { DesignSection, EngineeringSection, ImpactSection } from '../Expertise/ExpertiseSections';
import SelectedWork from '../Projects/SelectedWork';
import ProjectsList from '../Projects/ProjectsList';
import BeyondTheCode from '../ImpactMetrics/BeyondTheCode';
import GraphSection from '../ImpactMetrics/GraphSection';
import FloatingInsights from '../ImpactMetrics/FloatingInsights';
import MetricsSection from '../ImpactMetrics/MetricsSection';
import ContactSection from '../Contact/ContactSection';

const PortfolioApp = () => {
  const {
    containerRef,
    heroRefs,
    sharedRefs,
    aboutRefs,
    expertiseRefs,
    projectsRefs,
    metricsRefs,
    contactRefs
  } = useHeroTimeline();

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#050505] overflow-hidden font-[family-name:var(--font-geist-sans)]">
      
      {/* 1. HERO SECTION */}
      <HeroCanvas canvasRef={heroRefs.canvasRef} vignetteRef={heroRefs.vignetteRef} />
      <HeroTexts refs={heroRefs} />

      {/* 2. SHARED UI */}
      <SidebarNav refs={sharedRefs} />
      <TopNav refs={sharedRefs} />

      {/* 3. ABOUT SECTION */}
      <AboutSection refs={aboutRefs} />

      {/* 4. EXPERTISE SECTION */}
      <ExpertiseIntro refs={expertiseRefs} />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none w-full h-full overflow-hidden z-10">
        <DesignSection refs={expertiseRefs} />
        <EngineeringSection refs={expertiseRefs} />
        <ImpactSection refs={expertiseRefs} />
      </div>

      {/* 5. PROJECTS SECTION */}
      <SelectedWork refs={projectsRefs} />
      <ProjectsList refs={projectsRefs} />

      {/* 6. IMPACT METRICS SECTION */}
      <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden z-10">
        <BeyondTheCode refs={metricsRefs} />
        <div ref={metricsRefs.beyondContainerRef} className="absolute inset-0 flex flex-col justify-end w-full h-full opacity-0">
          <GraphSection refs={metricsRefs} />
          <FloatingInsights refs={metricsRefs} />
          <MetricsSection refs={metricsRefs} />
        </div>
      </div>

      {/* 7. CONTACT SECTION */}
      <ContactSection refs={contactRefs} />

    </div>
  );
};

export default PortfolioApp;
