import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaFeatures() {
  return (
    <section className={styles.featuresSection}>
      {/* Left: Subtitle and Title */}
      <div className={styles.featuresLeft}>
        <p className={styles.featuresSubtitle}>Features</p>
        <h2 className={styles.featuresTitle}>Generate Videos With AI Assistant</h2>
      </div>

      {/* Right: Numbered List */}
      <div className={styles.featuresRight}>
        <ol className={styles.featuresList}>
          <li>Press the 'Create' page in the app to start making a video.</li>
          <li>Select the saved video sources as desired.</li>
          <li>Through chat with the AI, you can choose various options.</li>
          <li>After all the steps, you'll receive the video created by AI.</li>
        </ol>
      </div>

      {/* Phone Images Row - 38px below Features text */}
      <div className={styles.phonesWrapper}>
        <div className={styles.phonesRow}>
          <Image
            src="/phone1.jpg"
            alt="App screen 1"
            width={371}
            height={756}
            className={styles.phoneImage}
            sizes="(max-width: 768px) 50vw, 371px"
          />
          <Image
            src="/phone2.jpg"
            alt="App screen 2"
            width={371}
            height={756}
            className={styles.phoneImage}
            sizes="(max-width: 768px) 50vw, 371px"
          />
          <Image
            src="/phone3.jpg"
            alt="App screen 3"
            width={371}
            height={756}
            className={styles.phoneImage}
            sizes="(max-width: 768px) 50vw, 371px"
          />
          <Image
            src="/phone4.jpg"
            alt="App screen 4"
            width={371}
            height={756}
            className={styles.phoneImage}
            sizes="(max-width: 768px) 50vw, 371px"
          />
        </div>
      </div>
    </section>
  );
}
