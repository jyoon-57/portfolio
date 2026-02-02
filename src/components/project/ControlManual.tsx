import { useRef, useEffect, useState } from 'react';
import styles from '@/app/work/[slug]/project.module.css';
import { ProjectSection } from '@/data/projects';
import YouTubeEmbed from '@/components/YouTubeEmbed';

interface ControlManualProps {
  section: Extract<ProjectSection, { type: 'video-grid' }>;
}

export default function ControlManual({ section }: ControlManualProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const legacyVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const visibleItems: { index: number; bottom: number }[] = [];

      // Check visibility of each item
      containerRefs.current.forEach((container, index) => {
        if (!container) return;
        const rect = container.getBoundingClientRect();

        // Check if visible
        // Condition: Top is within viewport OR Bottom is within viewport OR it covers the viewport
        const isVisible =
          (rect.top >= 0 && rect.top < windowHeight) ||
          (rect.bottom > 0 && rect.bottom <= windowHeight) ||
          (rect.top < 0 && rect.bottom > windowHeight);

        if (isVisible) {
          visibleItems.push({ index, bottom: rect.bottom });
        }
      });

      if (visibleItems.length === 0) {
        setActiveVideoIndex(null);
        return;
      }

      // If multiple, pick the one with the largest 'bottom' value (visually lowest on screen)
      // Actually usually "bottom-most" means "last one in flow that is visible".
      // Sorting by bottom descending.
      visibleItems.sort((a, b) => b.bottom - a.bottom);

      const bestCandidate = visibleItems[0].index;
      setActiveVideoIndex(bestCandidate);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Effect to control legacy videos based on active index
  useEffect(() => {
    legacyVideoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeVideoIndex) {
        video.play().catch(() => {});
        video.muted = false; // Optional? Logic said "muted" before... usually we want sound?
        // Wait, current request is just playback priority.
        // Original logic: "muted = index !== activeVideoIndex".
        // The user request: "only... play". Didn't explicitly say mute others, but implied.
        // Let's stick to playing. And usually we want sound on the active one if the user enabled it?
        // Actually, for consistency with YouTube: YouTube starts muted.
        // The legacy videos are muted by default in the JSX.
        // Let's keep them muted for autoplay policy unless we implement a sound toggle for them too?
        // But ControlManual legacy videos didn't have sound toggle buttons?
        // Looking at previous code, they didn't have sound buttons.
      } else {
        video.pause();
      }
    });
  }, [activeVideoIndex]);

  return (
    <section className={styles.howToControlSection}>
      <div className={styles.controlHeader}>
        <h3 className={styles.sectionTitleBlock}>{section.title}</h3>
        <span className={styles.sectionSubtitleBlock}>{section.subtitle}</span>
      </div>

      <div className={styles.controlList}>
        {section.items.map((item, index) => (
          <div
            key={index}
            className={styles.controlRow}
            ref={(el) => {
              containerRefs.current[index] = el;
            }}
          >
            {item.videoSrc.includes('youtube.com') ||
            item.videoSrc.includes('youtu.be') ? (
              <div className={styles.controlVideoEmbed}>
                <YouTubeEmbed
                  url={item.videoSrc}
                  isPlaying={activeVideoIndex === index}
                  style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: 'unset', // Let wrapper control ratio
                  }}
                  iframeStyle={
                    item.title === 'Previous/next track' ||
                    item.title === 'Play/Pause'
                      ? { transform: 'translateY(-50%) scale(1.02)' }
                      : undefined
                  }
                />
              </div>
            ) : (
              <video
                ref={(el) => {
                  legacyVideoRefs.current[index] = el;
                }}
                src={item.videoSrc}
                className={styles.controlVideo}
                loop
                playsInline
                muted
                // AutoPlay removed, controlled by effect
              />
            )}
            <div className={styles.controlContent}>
              <div className={styles.controlTextGroup}>
                <h4 className={styles.controlFunctionName}>{item.title}</h4>
                <p
                  className={styles.controlFunctionDesc}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
              <div className={styles.controlCodeGroup}>
                {item.codeBlocks.map((code, cIdx) => (
                  <div key={cIdx} className={styles.codeBlock}>
                    {code}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
