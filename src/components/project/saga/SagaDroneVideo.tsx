'use client';

import { useRef, useEffect } from 'react';
import styles from './saga.module.css';

export default function SagaDroneVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            // Only play if paused to avoid multiple play calls
            if (video.paused) {
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromiseRef.current = playPromise;
                playPromise.catch((error) => {
                  if (error.name !== 'AbortError') {
                    console.error('Video play failed:', error);
                  }
                });
              }
            }
          } else {
            // Un-intersecting: Pause safely
            if (playPromiseRef.current) {
              playPromiseRef.current
                .then(() => {
                  if (!video.paused) {
                    video.pause();
                  }
                })
                .catch(() => {
                  // Play failed (e.g. aborted), so it's likely already paused.
                });
            } else if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.1 }, // Play when 10% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Ensure video is muted for autoplay to work
    if (videoRef.current) {
      videoRef.current.muted = true;
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.droneVideoSection} ref={containerRef}>
      <video
        ref={videoRef}
        className={styles.droneVideoPlayer}
        poster="/saga_main.jpg"
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      >
        <source src="/saga_main_animation_render.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
