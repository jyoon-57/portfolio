import styles from './saga.module.css';

export default function SagaAutonomousDrone() {
  return (
    <section className={styles.autonomousDroneSection}>
      <div className={styles.autonomousContent}>
        <h2 className={styles.autonomousTitle}>Autonomous Drone</h2>
        <div className={styles.autonomousBodyGroup}>
          <p className={styles.autonomousBodyLeft}>
            A highly portable drone featuring foldable wings and a dedicated
            charging dock, designed to be carried as effortlessly as a small
            crossbody bag.
          </p>
          <p className={styles.autonomousBodyRight}>
            The drone autonomously follows and films the user without requiring
            any intervention, preserving authentic moments in their most natural
            form.
          </p>
        </div>
      </div>
    </section>
  );
}
