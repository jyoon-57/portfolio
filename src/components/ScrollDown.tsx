'use client';

import styles from './ScrollDown.module.css';

interface ScrollDownProps {
  onClick?: () => void;
}

export default function ScrollDown({ onClick }: ScrollDownProps) {
  return (
    <div className={styles.arrowContainer} onClick={onClick}>
      <svg
        viewBox="0 0 50 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={styles.arrowIcon}
      >
        {/* Inverted V shape: Pointing Down */}
        <path d="M0 0 L25 25 L50 0" />
      </svg>
    </div>
  );
}
