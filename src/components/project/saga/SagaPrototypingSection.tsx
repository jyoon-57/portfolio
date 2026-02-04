'use client';

import styles from './saga.module.css';

export default function SagaPrototypingSection() {
  return (
    <section className={styles.prototypingSection}>
      <div className={styles.prototypingContent}>
        <h3 className={styles.prototypingTitle}>Prototyping</h3>
        <div className={styles.prototypingBodyRow}>
          <p className={styles.prototypingBodyText}>
            Developed a form factor capable of supporting all necessary filming
            methods, focusing on effortless portability and ease of use.
          </p>
          <p className={styles.prototypingBodyText}>
            Prototypes were fabricated using 3D printing and foam board, then
            refined through continuous cycles of testing, evaluation, and
            modification.
          </p>
        </div>
      </div>
    </section>
  );
}
