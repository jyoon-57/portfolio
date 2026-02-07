'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './saga.module.css';

export default function SagaCameraAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsPlaying(entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.play().catch((error) => {
        console.error('Video play failed:', error);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

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
