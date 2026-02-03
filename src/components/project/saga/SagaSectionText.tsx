import styles from './saga.module.css';

interface SagaSectionTextProps {
  title: string;
  children: React.ReactNode;
  width?: string;
}

export default function SagaSectionText({
  title,
  children,
  width = '100%',
}: SagaSectionTextProps) {
  return (
    <div className={styles.sectionTextGroup}>
      <h3 className={styles.sectionName}>{title}</h3>
      <div className={styles.sectionBody} style={{ width }}>
        {children}
      </div>
    </div>
  );
}
