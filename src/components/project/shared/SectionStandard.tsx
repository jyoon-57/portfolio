import styles from '@/app/work/[slug]/project.module.css';
import { ProjectSection } from '@/data/projects';

// This component handles 'standard' and '3-col-text' types
interface SectionStandardProps {
  section: Extract<
    ProjectSection,
    { type: 'standard' | '3-col-text' | 'visuals' }
  >;
}

export default function SectionStandard({ section }: SectionStandardProps) {
  if (section.type === 'visuals') {
    return (
      <div className={styles.visualsSection}>
        <div className={styles.visualTopImage} />
        <div className={styles.visualContentGap}>
          <div className={styles.visualTextLeft}>
            <h3 className={styles.sectionTitleBlock}>{section.title}</h3>
            <span className={styles.sectionSubtitleBlock}>
              {section.subtitle}
            </span>
          </div>
          <div className={styles.visualTextRight}>
            <p className={styles.visualBodyText}>{section.body}</p>
          </div>
        </div>
        <div className={styles.visualBottomImage} />
      </div>
    );
  }

  // Common Section Wrapper Class
  const wrapperClass = section.wrapperClass ? styles[section.wrapperClass] : '';

  if (section.type === '3-col-text') {
    return (
      <section className={wrapperClass || styles.whyControlAudioSection}>
        <div className={styles.controlAudioLeft}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitleBlock}>{section.title}</h3>
            <span className={styles.sectionSubtitleBlock}>
              {section.subtitle}
            </span>
          </div>
        </div>
        <div className={styles.controlAudioRight}>
          {section.columns.map((col, idx) => (
            <div key={idx} className={styles.controlItem}>
              <h4 className={styles.sectionTitleBlock}>{col.title}</h4>
              <p className={styles.sectionBodyBlock}>{col.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Standard Type
  return (
    <section className={wrapperClass || styles.whyHandGesturesSection}>
      <div className={styles.whyTextColumn}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitleBlock}>{section.title}</h3>
          <span className={styles.sectionSubtitleBlock}>
            {section.subtitle}
          </span>
        </div>
        <p className={styles.sectionBodyBlock} style={{ width: '48.2rem' }}>
          {section.body}
        </p>
      </div>
      {section.image && (
        <div
          className={
            section.image === 'handGestureImage'
              ? styles.handGestureImage
              : styles.image // Fallback or dynamic class
          }
        />
      )}
    </section>
  );
}
