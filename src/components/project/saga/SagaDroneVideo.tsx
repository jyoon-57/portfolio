'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './saga.module.css';

export default function SagaDroneVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsPlaying(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }, // Start playing when 10% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;

    const action = isPlaying ? 'playVideo' : 'pauseVideo';
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: action, args: '' }),
      '*',
    );
  }, [isPlaying]);

  return (
    <section className={styles.droneVideoSection} ref={containerRef}>
      <iframe
        ref={iframeRef}
        className={styles.droneVideoIframe}
        // mute=1 is required for autoplay/programmatic play in most browsers
        src="https://www.youtube.com/embed/gGA76a1sohw?enablejsapi=1&autoplay=0&mute=1&controls=0&loop=1&playlist=gGA76a1sohw&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
        title="Autonomous Drone Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}
