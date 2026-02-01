import { useRef, useEffect } from 'react';
import styles from '@/app/work/[slug]/project.module.css';
import { ProjectSection } from '@/data/projects';

interface ControlManualProps {
  section: Extract<ProjectSection, { type: 'video-grid' }>;
}

export default function ControlManual({ section }: ControlManualProps) {
  const controlVideosRef = useRef<(HTMLVideoElement | null)[]>([]);

  // Smart Video Control Logic (Same as page.tsx but scoped)
  useEffect(() => {
    const handleScroll = () => {
      if (!controlVideosRef.current.length) return;

      const videosData = controlVideosRef.current.map((video, index) => {
        if (!video) return { index, visibleHeight: 0, top: 0, el: null };
        const rect = video.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        return {
          index,
          visibleHeight,
          top: rect.top,
          el: video,
        };
      });

      videosData.forEach(({ el, visibleHeight }) => {
        if (!el) return;
        if (visibleHeight > 0 && el.paused) {
          el.play().catch(() => {});
        } else if (visibleHeight === 0 && !el.paused) {
          el.pause();
        }
      });

      const visibleVideos = videosData.filter((v) => v.visibleHeight > 0);

      if (visibleVideos.length === 0) {
        videosData.forEach(({ el }) => {
          if (el) el.muted = true;
        });
        return;
      }

      visibleVideos.sort((a, b) => {
        if (Math.abs(a.visibleHeight - b.visibleHeight) < 10) {
          // If similar visibility, prefer bottom-most
          return b.top - a.top;
        }
        return b.visibleHeight - a.visibleHeight;
      });

      const activeVideoIndex = visibleVideos[0].index;

      videosData.forEach(({ index, el }) => {
        if (!el) return;
        el.muted = index !== activeVideoIndex;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className={styles.howToControlSection}>
      <div className={styles.controlHeader}>
        <h3 className={styles.sectionTitleBlock}>{section.title}</h3>
        <span className={styles.sectionSubtitleBlock}>{section.subtitle}</span>
      </div>

      <div className={styles.controlList}>
        {section.items.map((item, index) => (
          <div key={index} className={styles.controlRow}>
            <video
              ref={(el) => {
                controlVideosRef.current[index] = el;
              }}
              src={item.videoSrc}
              className={styles.controlVideo}
              loop
              playsInline
              muted
            />
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
