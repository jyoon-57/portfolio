'use client';

import styles from '@/app/work/[slug]/project.module.css';

interface TitledTextSectionProps {
  title: string;
  body: string;
  spacing?: string; // e.g., '3.8rem'
  bodyWidth?: string; // e.g., '69.8rem'
  className?: string; // For wrapper margins/padding
  style?: React.CSSProperties; // For wrapper styles
}

export default function TitledTextSection({
  title,
  body,
  spacing = '3.8rem',
  bodyWidth,
  className = '',
  style,
}: TitledTextSectionProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        ...style,
      }}
    >
      <h3
        className={styles.sectionSubtitleBlock}
        style={{ margin: `0 0 ${spacing} 0` }}
      >
        {title}
      </h3>
      <p
        className={styles.sectionBodyBlock}
        style={{ margin: 0, width: bodyWidth, maxWidth: '100%' }}
      >
        {body}
      </p>
    </div>
  );
}
