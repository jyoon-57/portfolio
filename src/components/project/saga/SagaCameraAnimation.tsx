'use client';

import { useRef, useEffect } from 'react';
import styles from './saga.module.css';

export default function SagaCameraAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log('[SAGA-CAMERA-VIDEO] Component mounted');
    console.log('[SAGA-CAMERA-VIDEO] Container ref:', containerRef.current);
    console.log('[SAGA-CAMERA-VIDEO] Video ref:', videoRef.current);
    console.log('[SAGA-CAMERA-VIDEO] Video paused:', videoRef.current?.paused);
    console.log('[SAGA-CAMERA-VIDEO] Video src:', videoRef.current?.src);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          console.log('[SAGA-CAMERA-VIDEO] Intersection event:', {
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio,
            videoPaused: video?.paused,
          });

          if (!video) {
            console.warn('[SAGA-CAMERA-VIDEO] Video ref is null in observer');
            return;
          }

          if (entry.isIntersecting) {
            console.log(
              '[SAGA-CAMERA-VIDEO] Video is intersecting, scheduling play in 200ms',
            );
            // Debounce play: wait 200ms to ensure stable visibility
            if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
            playTimeoutRef.current = setTimeout(() => {
              console.log('[SAGA-CAMERA-VIDEO] Attempting to play video');
              console.log(
                '[SAGA-CAMERA-VIDEO] Video paused before play:',
                video.paused,
              );
              if (video.paused) {
                video
                  .play()
                  .then(() => {
                    console.log('[SAGA-CAMERA-VIDEO] ✅ Video play succeeded');
                  })
                  .catch((error) => {
                    console.error(
                      '[SAGA-CAMERA-VIDEO] ❌ Video play failed:',
                      error.name,
                      error.message,
                    );
                  });
              } else {
                console.log(
                  '[SAGA-CAMERA-VIDEO] Video already playing, skipping',
                );
              }
            }, 200);
          } else {
            console.log(
              '[SAGA-CAMERA-VIDEO] Video is NOT intersecting, pausing',
            );
            // Un-intersecting: Clear pending play and pause immediately
            if (playTimeoutRef.current) {
              clearTimeout(playTimeoutRef.current);
              playTimeoutRef.current = null;
              console.log('[SAGA-CAMERA-VIDEO] Cleared pending play timeout');
            }
            if (!video.paused) {
              video.pause();
              console.log('[SAGA-CAMERA-VIDEO] Video paused');
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
      console.log(
        '[SAGA-CAMERA-VIDEO] Observer initialized and observing container',
      );
    } else {
      console.error(
        '[SAGA-CAMERA-VIDEO] ❌ Container ref is null, observer NOT initialized',
      );
    }

    if (videoRef.current) {
      videoRef.current.muted = true;
      console.log('[SAGA-CAMERA-VIDEO] Video muted set to true');
    }

    return () => {
      console.log('[SAGA-CAMERA-VIDEO] Component unmounting, cleaning up');
      observer.disconnect();
      if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
    };
  }, []);

  return (
    <section className={styles.cameraAnimationSection} ref={containerRef}>
      <video
        ref={videoRef}
        className={styles.cameraAnimationPlayer}
        src="/proD_camera_animation.mp4"
        poster="/product_detail.jpg"
        muted
        loop
        playsInline
        preload="metadata"
      />
    </section>
  );
}
