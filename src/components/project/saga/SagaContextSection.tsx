import Image from 'next/image';
import styles from './saga.module.css';

export default function SagaContextSection() {
  return (
    <section className={styles.contextSection}>
      <div className={styles.contextImageWrapper}>
        <Image
          src="/dad_and_me.jpg"
          alt="Dad and Me"
          fill
          className={styles.contextImage}
          priority
        />
        <div className={styles.contextContent}>
          <div className={styles.contextLeft}>
            <h3 className={styles.contextSubtitle}>Context</h3>
            <h2 className={styles.contextTitle}>
              Deeply Bonded, Rarely Expressed:
              <br />
              The Affection Gap
            </h2>
            <div className={styles.contextBody}>
              <p>
                The frequency of expressing affection tends to drop
                significantly as children grow from teenagers into adults. Yet,
                this doesn&apos;t mean the love has faded; the emotional bond
                often remains as strong as ever.
              </p>
              <br />
              <p>
                This suggests that the relationship between adult children and
                their parents is a unique paradox: they are deeply connected by
                love, but often find it challenging to put those feelings into
                words or actions.
              </p>
            </div>
          </div>

          <div className={styles.contextRight}>
            {/* Graph Set 1 */}
            <div className={styles.graphSet}>
              <h4 className={styles.graphTitle}>Physical Affection Graph</h4>
              <Image
                src="/graph1.png"
                alt="Physical Affection Graph"
                width={318}
                height={200}
                className={styles.graphImage}
              />
            </div>

            {/* Graph Set 2 */}
            <div className={styles.graphSet}>
              <h4 className={styles.graphTitle}>Emotional Bond Graph</h4>
              <Image
                src="/graph2.png"
                alt="Emotional Bond Graph"
                width={318}
                height={200}
                className={styles.graphImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
