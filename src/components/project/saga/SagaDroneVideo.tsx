'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './saga.module.css';

export default function SagaDroneVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
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
      { threshold: 0.1 }, // Start playing when 10% visible
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
        onError={(e) => {
          const err = e.currentTarget.error;
          setErrorMsg(
            err ? `Error ${err.code}: ${err.message}` : 'Unknown Error',
          );
        }}
      >
        <source src="/saga_main_animation_render.mp4" type="video/mp4" />
      </video>
      {errorMsg && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            color: 'red',
            background: 'rgba(0,0,0,0.8)',
            padding: '10px',
            zIndex: 9999,
          }}
        >
          VIDEO ERROR: {errorMsg}
        </div>
      )}
    </section>
  );
}
