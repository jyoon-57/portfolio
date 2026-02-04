'use client';

import Image from 'next/image';
import FeatureDescription from '@/components/project/shared/FeatureDescription';
import styles from './saga.module.css';

export default function SagaOnDeviceAI() {
  return (
    <>
      <section className={styles.onDeviceAISection}>
        <FeatureDescription
          feature="On-Device AI"
          description="By identifying the user through the camera, On-Device AI autonomously determines the optimal angles and filming techniques."
          descriptionWidth={383}
          align="right"
        />
      </section>

      {/* Full-width Image */}
      <div className={styles.onDeviceAIImageWrapper}>
        <Image
          src="/onDeviceAI.jpg"
          alt="On-Device AI"
          width={1920}
          height={1080}
          className={styles.onDeviceAIImage}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </>
  );
}
