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
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch((error) => {
                console.error('Video play failed:', error);
              });
            } else {
              videoRef.current.pause();
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
        src="/proD_camera_animation.mp4"
        muted
        autoPlay
        loop
        playsInline
      />
    </section>
  );
}
