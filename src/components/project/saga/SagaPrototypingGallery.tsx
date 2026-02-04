'use client';

import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaPrototypingGallery() {
  return (
    <section className={styles.prototypingGallerySection}>
      <div className={styles.galleryGrid}>
        {/* Left Column: 1, 2, 3 */}
        <div className={styles.galleryColumn}>
          <Image
            src="/prototype1.jpg"
            alt="Prototype 1"
            width={711}
            height={400}
            className={styles.galleryImage}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/prototype2.jpg"
            alt="Prototype 2"
            width={711}
            height={400}
            className={styles.galleryImage}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/prototype3.jpg"
            alt="Prototype 3"
            width={711}
            height={400}
            className={styles.galleryImage}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* Right Column: 4, 5 */}
        <div className={styles.galleryColumn}>
          <Image
            src="/prototype4.jpg"
            alt="Prototype 4"
            width={711}
            height={400}
            className={styles.galleryImage}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/prototype5.jpg"
            alt="Prototype 5"
            width={711}
            height={400}
            className={styles.galleryImage}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}
