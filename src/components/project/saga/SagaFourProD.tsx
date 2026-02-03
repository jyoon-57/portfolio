'use client';

import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaFourProD() {
  return (
    <section className={styles.fourProdSection}>
      <Image
        src="/four_proD.jpg"
        alt="Four Product Detail"
        className={styles.fourProdImage}
        width={3840} // Assuming high res, defaulting to large width
        height={2160} // Maintaining aspect ratio estimate
        style={{ width: '100%', height: 'auto' }}
      />
    </section>
  );
}
