import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaEpilogue() {
  return (
    <section className={styles.epilogueSection}>
      <div className={styles.epilogueGrid}>
        {/* Row 1 */}
        <div className={styles.epilogueImageWrapper}>
          <Image
            src="/end1.jpg"
            alt="Epilogue image 1"
            width={800}
            height={600}
            className={styles.epilogueImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className={styles.epilogueImageWrapper}>
          <Image
            src="/end2.jpg"
            alt="Epilogue image 2"
            width={800}
            height={600}
            className={styles.epilogueImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Row 2 */}
        <div className={styles.epilogueImageWrapper}>
          <Image
            src="/end3.jpg"
            alt="Epilogue image 3"
            width={800}
            height={600}
            className={styles.epilogueImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div
          className={`${styles.epilogueImageWrapper} ${styles.epilogueImageEnd4}`}
        >
          <Image
            src="/end4.jpg"
            alt="Epilogue image 4"
            width={800}
            height={600}
            className={styles.epilogueImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* End5 Full-Width Image - 479px below end4 */}
      <div className={styles.end5Wrapper}>
        <div className={styles.end5ImageContainer}>
          <Image
            src="/end5.jpg"
            alt="Final epilogue image"
            width={1920}
            height={1080}
            className={styles.end5Image}
            sizes="100vw"
          />

          {/* Overlay Group 1 */}
          <div className={styles.end5OverlayGroup}>
            {/* Saga Logo */}
            <div className={styles.sagaLogoWrapper}>
              <Image
                src="/saga_logo_white.png"
                alt="SAGA Logo"
                width={251}
                height={100}
                className={styles.sagaLogoWhite}
              />
            </div>

            {/* Text 1 */}
            <p className={styles.end5Text1}>CAPTURE YOUR FAMILY, AS THEY ARE</p>

            {/* Text 2 */}
            <p className={styles.end5Text2}>
              SAGA ® FAMILY SOCIAL WELLNES PROJECT / HONGIK UNIVERSUTY
              INDUSTRIAL DESIGN AND SAMSUNG LIFENOLOGY LAB
            </p>

            {/* Logo Group */}
            <div className={styles.end5LogoGroup}>
              <Image
                src="/samsung_white.png"
                alt="Samsung Logo"
                width={201}
                height={50}
                className={styles.logoWhite}
              />
              <Image
                src="/reddot_white.png"
                alt="Reddot Award Logo"
                width={201}
                height={50}
                className={styles.logoWhite}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
