'use client';

import Image from 'next/image';
import FeatureDescription from '@/components/project/shared/FeatureDescription';
import styles from './saga.module.css';

export default function SagaInterview() {
  return (
    <section className={styles.interviewSection}>
      <div className={styles.interviewImageWrapper}>
        {/* Background image is handled by CSS */}
        <Image
          src="/interview.jpg"
          alt="Interview"
          width={1920}
          height={1080}
          className={styles.interviewImage}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />

        {/* Text Overlay */}
        <div className={styles.interviewTextOverlay}>
          <FeatureDescription
            feature="interview"
            description="The integrated interview content reveals hidden facets of your loved ones that are rarely seen in daily life."
            descriptionWidth={480}
            align="left"
          />
        </div>
      </div>
    </section>
  );
}
