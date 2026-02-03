import styles from './saga.module.css';
import SagaSectionText from './SagaSectionText';

export default function SagaPainPoints2() {
  return (
    <section className={styles.painPoints2Section}>
      <div className={styles.painPoints2Top}>
        <SagaSectionText title="Pain points 2" width="69.8rem">
          <p>
            Even if adult children muster the courage to take a photo, the
            result is often not the image they truly wanted to remember.
          </p>
        </SagaSectionText>
      </div>
      <div className={styles.painPoints2Bottom}>
        <div className={styles.pp2Left}>
          <h4 className={styles.pp2Title}>Parents children want to remember</h4>
          <div className={styles.pp2Grid}>
            {/* Set 1 */}
            <div className={styles.pp2Set}>
              <img
                src="/photo1.png"
                alt="Happy moments together"
                className={styles.pp2Image}
              />
              <p className={styles.pp2Keyword}>Happy moments together</p>
            </div>
            {/* Set 2 */}
            <div className={styles.pp2Set}>
              <img
                src="/photo2.png"
                alt="Natural behaviors"
                className={styles.pp2Image}
              />
              <p className={styles.pp2Keyword}>Natural behaviors</p>
            </div>
            {/* Set 3 */}
            <div className={styles.pp2Set}>
              <img
                src="/photo3.png"
                alt="Inner thoughts & stories"
                className={styles.pp2Image}
              />
              <p className={styles.pp2Keyword}>Inner thoughts & stories</p>
            </div>
            {/* Set 4 */}
            <div className={styles.pp2Set}>
              <img
                src="/photo4.png"
                alt="Everyday habits"
                className={styles.pp2Image}
              />
              <p className={styles.pp2Keyword}>Everyday habits</p>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className={styles.pp2Right}>
          <h4 className={styles.pp2RightTitle}>Reality</h4>
          <div className={styles.pp2RightSet}>
            <img
              src="/freeze.png"
              alt="Freezing up in front of the camera"
              className={styles.pp2RightImage}
            />
            <p className={styles.pp2RightKeyword}>
              Freezing up in front of the camera
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
