import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaFeatures() {
  return (
    <section className={styles.featuresSection}>
      {/* Left: Subtitle and Title */}
      <div className={styles.featuresLeft}>
        <p className={styles.featuresSubtitle}>Features</p>
        <h2 className={styles.featuresTitle}>
          Generate Videos With AI Assistant
        </h2>
      </div>

      {/* Right: Numbered List */}
      <div className={styles.featuresRight}>
        <ol className={styles.featuresList}>
          <li>
            Press the &apos;Create&apos; page in the app to start making a
            video.
          </li>
          <li>Select the saved video sources as desired.</li>
          <li>Through chat with the AI, you can choose various options.</li>
          <li>
            After all the steps, you&apos;ll receive the video created by AI.
          </li>
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

      {/* Package & Rent Images Group - 823px below phones */}
      <div className={styles.packageRentWrapper}>
        <div className={styles.packageRentGroup}>
          {/* Rent Section - Left */}
          <div className={styles.rentSection}>
            {/* Rent Text */}
            <div className={styles.rentTextWrapper}>
              <p className={styles.rentSubtitle}>Features</p>
              <h3 className={styles.rentTitle}>Rent Drones</h3>
              <p className={styles.rentDescription}>
                rent a drone through the app and have it delivered directly to
                your designated location.
              </p>
            </div>
            {/* Rent Image - 75px below text */}
            <div className={styles.rentImageWrapper}>
              <Image
                src="/rent.png"
                alt="Rent app interface"
                width={500}
                height={1000}
                className={styles.rentImage}
                sizes="(max-width: 768px) 80vw, 500px"
              />
            </div>
          </div>

          {/* Package Section - Right */}
          <div className={styles.packageSection}>
            {/* Package Text - 77px above image */}
            <div className={styles.packageTextWrapper}>
              <p className={styles.packageDescription}>
                Each package is composed of the drone unit, charging dock, and
                strap, along with a QR-enabled user guide.
              </p>
            </div>
            {/* Package Image */}
            <div className={styles.packageImageWrapper}>
              <Image
                src="/package.jpg"
                alt="Product package"
                width={800}
                height={600}
                className={styles.packageImage}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
