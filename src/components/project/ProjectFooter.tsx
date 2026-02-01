import Link from 'next/link';
import styles from '@/app/work/[slug]/project.module.css';

export default function ProjectFooter() {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
        <Link
          href="/"
          style={{ fontSize: '2rem', textDecoration: 'underline' }}
        >
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
