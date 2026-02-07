'use client';

import { useRef, useEffect } from 'react';
import styles from './saga.module.css';

export default function SagaDroneVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            // Debounce play: wait 200ms to ensure stable visibility
            if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
            playTimeoutRef.current = setTimeout(() => {
              if (video.paused) {
                video.play().catch((error) => {
                  if (error.name !== 'AbortError') {
                    console.error('Video play failed:', error);
                  }
                });
              }
            }, 200);
          } else {
            // Un-intersecting: Clear pending play and pause immediately
            if (playTimeoutRef.current) {
              clearTimeout(playTimeoutRef.current);
              playTimeoutRef.current = null;
            }
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (videoRef.current) {
      videoRef.current.muted = true;
    }

    return () => {
      observer.disconnect();
      if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.droneVideoSection}>
      <video
        ref={videoRef}
        className={styles.droneVideoPlayer}
        src="/saga_main_v2.mp4"
        poster="/saga_main.jpg"
        muted
        loop
        playsInline
        preload="metadata"
      />
    </section>
  );
}
