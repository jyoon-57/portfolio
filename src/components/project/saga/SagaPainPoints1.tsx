import Image from 'next/image';
import styles from './saga.module.css';
import SagaSectionText from './SagaSectionText';

export default function SagaPainPoints1() {
  return (
    <section className={styles.painPoints1Section}>
      <div className={styles.painPointsLeft}>
        {/* Top Row: Set 1 & Set 2 */}
        <div className={styles.painPointsTopRow}>
          {/* Set 1 */}
          <div className={styles.iconSet}>
            <Image
              src="/woman_icon.png"
              alt="Woman Icon"
              width={160}
              height={160}
              className={styles.iconImage}
              style={{ width: '16rem', height: 'auto' }}
            />
            <p className={styles.iconKeyword}>
              Taking photos while
              <br />
              there’s still time
            </p>
          </div>

          {/* Set 2 */}
          <div className={styles.iconSet}>
            <Image
              src="/man_icon.png"
              alt="Man Icon"
              width={160}
              height={160}
              className={styles.iconImage}
              style={{ width: '16rem', height: 'auto' }}
            />
            <p className={styles.iconKeyword}>
              A way to remember
              <br />
              them later
            </p>
          </div>
        </div>

        {/* Bottom Row: Set 3 */}
        <div className={styles.painPointsBottomRow}>
          {/* Set 3 */}
          <div className={styles.iconSet}>
            <h3 className={styles.percentageText}>60%</h3>
            <p className={styles.iconKeyword}>
              of young adults hesitate to ask
              <br />
              parents for a photo
            </p>
          </div>
        </div>
      </div>

      {/* Right Part */}
      <SagaSectionText title="Pain points 1" width="69.8rem">
        <p>
          Adult children seek to preserve memories of their parents through
          photos and videos, knowing these will one day be their only connection
          to the past.
        </p>
        <br />
        <p>
          Yet, for those who struggle with expressing affection, the simple act
          of asking to take a photo with their parents can feel like a daunting
          emotional burden.
        </p>
      </SagaSectionText>
    </section>
  );
}
