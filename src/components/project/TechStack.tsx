import styles from '@/app/work/[slug]/project.module.css';
import { ProjectSection } from '@/data/projects';

interface TechStackProps {
  section: Extract<ProjectSection, { type: 'tech-stack' }>;
}

export default function TechStack({ section }: TechStackProps) {
  return (
    <div className={styles.grayBackgroundWrapper}>
      <div className={styles.technicalStackContainer}>
        <div className={styles.stackHeader}>
          <h3 className={styles.stackTitle}>{section.title}</h3>
          <span className={styles.stackSubtitle}>{section.subtitle}</span>
        </div>

        <div className={styles.stackList}>
          {section.categories.map((cat, idx) => (
            <div key={idx} className={styles.stackCategory}>
              <h4 className={styles.stackCategoryTitle}>{cat.title}</h4>
              {cat.items.map((item, i) => (
                <span key={i} className={styles.stackItem}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
