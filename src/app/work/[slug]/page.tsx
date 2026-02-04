'use client';

import { use, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import ProjectHero from '@/components/project/shared/ProjectHero';
import SagaHero from '@/components/project/saga/SagaHero';
import SagaContribution from '@/components/project/saga/SagaContribution';
import SagaResultText from '@/components/project/saga/SagaResultText';
import SagaVideoSection from '@/components/project/saga/SagaVideoSection';
import SagaContextSection from '@/components/project/saga/SagaContextSection';
import SagaGapText from '@/components/project/saga/SagaGapText';
import SagaPainPoints1 from '@/components/project/saga/SagaPainPoints1';
import SagaPainPoints2 from '@/components/project/saga/SagaPainPoints2';
import SagaTasksSection from '@/components/project/saga/SagaTasksSection';
import SagaSolutionSection from '@/components/project/saga/SagaSolutionSection';
import SagaAutonomousDrone from '@/components/project/saga/SagaAutonomousDrone';
import SagaDroneVideo from '@/components/project/saga/SagaDroneVideo';
import SagaFourProD from '@/components/project/saga/SagaFourProD';
import SagaSketch from '@/components/project/saga/SagaSketch';
import SagaResearchSection from '@/components/project/saga/SagaResearchSection';
import SagaPrototypingSection from '@/components/project/saga/SagaPrototypingSection';
import SagaPrototypingImage from '@/components/project/saga/SagaPrototypingImage';
import SagaPrototypingGallery from '@/components/project/saga/SagaPrototypingGallery';
import SagaOnDeviceAI from '@/components/project/saga/SagaOnDeviceAI';
import SagaWallMountedShooting from '@/components/project/saga/SagaWallMountedShooting';
import SagaInterview from '@/components/project/saga/SagaInterview';
import SagaChargingDock from '@/components/project/saga/SagaChargingDock';
import SagaVideoEditingApp from '@/components/project/saga/SagaVideoEditingApp';
import SagaFeatures from '@/components/project/saga/SagaFeatures';
import SagaCameraAnimation from '@/components/project/saga/SagaCameraAnimation';
import SagaProductDetail from '@/components/project/saga/SagaProductDetail';
import SagaFoldableWing from '@/components/project/saga/SagaFoldableWing';
import ProjectMedia from '@/components/project/shared/ProjectMedia';
import ProjectInfo from '@/components/project/shared/ProjectInfo';
import SectionStandard from '@/components/project/shared/SectionStandard';
import ControlManual from '@/components/project/hand-gesture/ControlManual';
import TechStack from '@/components/project/shared/TechStack';
import SystemArchitecture from '@/components/project/hand-gesture/SystemArchitecture';
import CollaborationChapter from '@/components/project/hand-gesture/CollaborationChapter';
import ScrollToTop from '@/components/ScrollToTop';
import styles from './project.module.css';

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  const videoRef = useRef<HTMLDivElement>(null);

  if (!project) {
    if (slug === 'magritte') {
      // Should not happen if data is correct, but safe fallback logic or just 404
    }
    // If not found in data
    // We can fallback to the "Coming Soon" page logic from original page.tsx
    return (
      <div className={styles.wrapper} style={{ paddingTop: '6rem' }}>
        <header className={styles.header}>
          {/* Fallback Header */}
          <div className={styles.logo}>
            Jaeyoon
            <br />
            Lee
          </div>
          <nav className={styles.nav}>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        <main style={{ marginTop: '10rem' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>
            Project: {slug}
          </h1>
          <p style={{ fontSize: '2rem', color: 'gray' }}>
            Content coming soon...
          </p>
        </main>
      </div>
    );
  }

  const scrollToVideo = () => {
    if (videoRef.current) {
      window.scrollTo({
        top: videoRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <ScrollToTop />

      {/* Intro Section */}
      {slug === 'saga' ? (
        <>
          <SagaHero />
          <SagaContribution />
          <SagaResultText />
          <SagaVideoSection />
          <SagaContextSection />
          <SagaGapText />
          <SagaPainPoints1 />
          <SagaPainPoints2 />
          <SagaTasksSection />
          <SagaSolutionSection />
          <SagaAutonomousDrone />
          <SagaDroneVideo />
          <SagaFourProD />
          <SagaSketch />
          <SagaResearchSection />
          <SagaPrototypingSection />
          <SagaPrototypingImage />
          <SagaPrototypingGallery />
          <SagaCameraAnimation />
          <SagaProductDetail />
          <SagaFoldableWing />
          <SagaOnDeviceAI />
          <SagaWallMountedShooting />
          <SagaInterview />
          <SagaChargingDock />
          <SagaVideoEditingApp />
          <SagaFeatures />
        </>
      ) : (
        <ProjectHero intro={project.intro} onScrollClick={scrollToVideo} />
      )}

      {/* Hero Video Section */}
      {slug !== 'saga' && (
        <>
          <ProjectMedia ref={videoRef} heroVideo={project.media.heroVideo} />
          <ProjectInfo info={project.projectInfo} />
        </>
      )}

      {/* Dynamic Sections */}
      {project.sections.map((section, idx) => {
        switch (section.type) {
          case 'standard':
          case '3-col-text':
          case 'visuals':
            return <SectionStandard key={idx} section={section} />;

          case 'video-grid':
            return <ControlManual key={idx} section={section} />;

          case 'tech-stack':
            return <TechStack key={idx} section={section} />;

          case 'system-architecture':
            return <SystemArchitecture key={idx} section={section} />;

          case 'magritte-image':
            const wrapperClass =
              section.wrapperClass && styles[section.wrapperClass]
                ? styles[section.wrapperClass]
                : styles.magritteSection;
            return (
              <div key={idx} className={wrapperClass}>
                <Image
                  src={section.src}
                  alt={section.alt}
                  className={styles.magritteImage}
                  width={section.width || 3840}
                  height={section.height || 2856}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            );

          case 'collaboration':
            return (
              <div key={idx} className={styles.wrapper}>
                <CollaborationChapter section={section} />
              </div>
            );

          default:
            return null;
        }
      })}

      {/* Footer */}
      {/* Removed ProjectFooter as requested */}
    </>
  );
}
