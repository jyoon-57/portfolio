import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaSolutionSection() {
  return (
    <section className={styles.solutionSection}>
      <h3 className={styles.solutionTitle}>SOLUTION</h3>

      <div className={styles.solutionLogo}>
        <Image
          src="/saga_logo_simple.png"
          alt="Saga Logo Simple"
          width={212}
          height={100}
          className={styles.solutionLogoImg}
          style={{ width: '21.2rem', height: 'auto' }}
        />
      </div>

      <div className={styles.solutionTextGroup}>
        <span className={styles.solutionTextLight}>
          AI-powered video production crew consisting of
        </span>
        <br />
        <span className={styles.solutionTextHeavy}>
          an autonomous drone
        </span>{' '}
        <span className={styles.solutionTextLight}>and</span>{' '}
        <span className={styles.solutionTextHeavy}>
          a video editing application.
        </span>
      </div>
    </section>
  );
}
