import styles from './saga.module.css';

const contributions = [
  {
    title: 'Project Management',
    body: 'Full-lifecycle project management from concept to final delivery.',
  },
  {
    title: 'Product Strategy',
    body: 'Defined the project’s strategic direction and brand identity.',
  },
  {
    title: 'Visualization',
    body: 'Developed the product’s form factor, conducted rendering and short film production.',
  },
  {
    title: 'Interaction',
    body: 'Defined the drone-user relationship, balancing silent filming with purposeful interaction.',
  },
];

export default function SagaContribution() {
  return (
    <section className={styles.contributionSection}>
      <div className={styles.leftColumn}>
        <h3 className={styles.subtitle}>Personal Contribution</h3>
        <h2 className={styles.title}>Project Lead & Industrial Designer</h2>
      </div>
      <div className={styles.rightColumn}>
        {contributions.map((item, index) => (
          <div key={index} className={styles.contributionItem}>
            <h4 className={styles.itemTitle}>{item.title}</h4>
            <p className={styles.itemBody}>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
