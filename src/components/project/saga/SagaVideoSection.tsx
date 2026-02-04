'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={styles.videoSection}>
      <div className={styles.phoneContainer}>
        <Image
          src="/phone_frame.jpg"
          alt="Phone Frame"
          className={styles.phoneFrame}
          width={1101}
          height={680}
          priority
          style={{ width: '100%', height: 'auto' }}
        />
        <div className={styles.videoWrapper}>
          {!isPlaying ? (
            <div
              className={styles.videoOverlay}
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail - Using YouTube's max resolution thumbnail */}
              <Image
                src="https://img.youtube.com/vi/vaQ14P90VKk/maxresdefault.jpg"
                alt="Video Thumbnail"
                width={1280}
                height={720}
                className={styles.videoThumbnail}
                style={{ width: '100%', height: '100%' }}
                priority={false}
              />
              <div className={styles.playButton}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/vaQ14P90VKk?autoplay=1&controls=0&rel=0&playsinline=1&loop=1&playlist=vaQ14P90VKk"
              title="SAGA Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.youtubeVideo}
            />
          )}
        </div>
      </div>
    </section>
  );
}
