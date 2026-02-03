import styles from './saga.module.css';

export default function SagaTasksSection() {
  return (
    <section className={styles.tasksSection}>
      <div className={styles.tasksContent}>
        <div className={styles.tasksGroup}>
          <h2 className={styles.tasksTitle}>TASKS</h2>

          <div className={styles.tasksBlock}>
            <span className={styles.titleLight}>Easing the burden of</span>
            <br />
            <span className={styles.titleHeavy}>
              requesting photos with parents
            </span>
          </div>

          <div className={styles.tasksBlock}>
            <span className={styles.titleLight}>
              Establishing new method to
            </span>
            <br />
            <span className={styles.titleHeavy}>capture natural moments</span>
          </div>
        </div>
      </div>
    </section>
  );
}
