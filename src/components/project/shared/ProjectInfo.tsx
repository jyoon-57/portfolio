import styles from '@/app/work/[slug]/project.module.css';
import { ProjectData } from '@/data/projects';

interface ProjectInfoProps {
  info: ProjectData['projectInfo'];
}

export default function ProjectInfo({ info }: ProjectInfoProps) {
  return (
    <section className={styles.projectInfoSection}>
      <div className={styles.projectInfoContent}>
        <h2 className={styles.projectTitle}>
          <span className={styles.titleBold}>{info.title.bold}</span>
          <span className={styles.titleRegular}>{info.title.regular}</span>
        </h2>
        <p className={styles.projectDescription}>{info.description}</p>
      </div>
    </section>
  );
}
