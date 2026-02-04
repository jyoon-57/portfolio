import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaVideoEditingApp() {
  return (
    <section className={styles.videoEditingAppSection}>
      <div className={styles.videoEditingAppContent}>
        <h2 className={styles.videoEditingAppTitle}>Video Editing Application</h2>
        <p className={styles.videoEditingAppBody}>
          The AI-powered platform provides an end-to-end service, from drone
          rentals to intelligent video editing and storage.
        </p>
      </div>

      {/* Full-width Image */}
      <div className={styles.videoEditingAppImageWrapper}>
        <Image
          src="/app_main.jpg"
          alt="Video Editing Application Interface"
          width={3840}
          height={2160}
          className={styles.videoEditingAppImage}
          sizes="100vw"
          priority={false}
        />
      </div>
    </section>
  );
}
