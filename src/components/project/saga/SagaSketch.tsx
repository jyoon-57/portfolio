'use client';

import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaSketch() {
  return (
    <section className={styles.sketchSection}>
      <Image
        src="/sketch.jpg"
        alt="Sketch"
        className={styles.sketchImage}
        width={3840} // Assuming high res
        height={2160} // Aspect ratio placeholder
        style={{ width: '100%', height: 'auto' }}
      />
    </section>
  );
}
