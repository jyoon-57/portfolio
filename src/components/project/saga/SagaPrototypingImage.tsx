'use client';

import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaPrototypingImage() {
  return (
    <section className={styles.prototypingImageSection}>
      <Image
        src="/prototype_main.jpg"
        alt="Prototyping Process"
        width={3840}
        height={2160}
        className={styles.fullWidthImage}
        sizes="100vw"
      />
    </section>
  );
}
