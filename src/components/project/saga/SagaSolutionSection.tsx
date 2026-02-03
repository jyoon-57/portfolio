import styles from './saga.module.css';

export default function SagaSolutionSection() {
  return (
    <section className={styles.solutionSection}>
      <h3 className={styles.solutionTitle}>SOLUTION</h3>

      <div className={styles.solutionLogo}>
        <img
          src="/saga_logo_simple.png"
          alt="Saga Logo Simple"
          className={styles.solutionLogoImg}
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
