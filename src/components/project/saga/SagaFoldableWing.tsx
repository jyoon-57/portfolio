'use client';

import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaFoldableWing() {
  return (
    <section className={styles.foldableWingSection}>
      {/* Text Row */}
      <div className={styles.foldableWingTextRow}>
        <div className={styles.foldableWingTextGroup}>
          <h3 className={styles.foldableWingTitle}>Foldable Wing</h3>
          <p className={styles.foldableWingBody}>
            The foldable wing makes the drone compact, secure, and easy to
            store.
          </p>
        </div>
        <div className={styles.foldableWingTextGroup}>
          <h3 className={styles.foldableWingTitle}>Strap</h3>
          <p className={styles.foldableWingBody}>
            A strap that connects to the charging dock enhances the drone&apos;s
            portability.
          </p>
        </div>
      </div>

      {/* Image Row */}
      <div className={styles.foldableWingGrid}>
        {/* Column 1: Two images */}
        <div className={styles.foldableWingColumn1}>
          <Image
            src="/foldable_wing.jpg"
            alt="Foldable Wing"
            width={628}
            height={400}
            className={styles.foldableWingImage}
          />
          <Image
            src="/proD_tennis.jpg"
            alt="Product Detail Tennis"
            width={628}
            height={400}
            className={styles.foldableWingImage}
          />
        </div>

        {/* Column 2: One image */}
        <div className={styles.foldableWingColumn2}>
          <Image
            src="/strap.jpg"
            alt="Strap"
            width={675}
            height={850}
            className={styles.foldableWingImageLarge}
          />
        </div>
      </div>
    </section>
  );
}
