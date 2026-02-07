'use client';

import { useRef, useEffect } from 'react';
import styles from './saga.module.css';

export default function SagaCameraAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
                playPromise.catch((error) => {
                  console.error('Video play failed:', error);
                });
              }
            }
          } else {
            // Only pause if not already paused
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

    // Ensure video is muted for autoplay to work
    if (videoRef.current) {
      videoRef.current.muted = true;
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.cameraAnimationSection} ref={containerRef}>
      <video
        ref={videoRef}
        className={styles.cameraAnimationPlayer}
        poster="/product_detail.jpg"
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      >
        <source src="/proD_camera_animation.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
