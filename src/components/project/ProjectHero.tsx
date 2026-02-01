import { useEffect } from 'react';
import Link from 'next/link';
import { ProjectData } from '@/data/projects';
import styles from '@/app/work/[slug]/project.module.css';

interface ProjectHeroProps {
  intro: ProjectData['intro'];
  onScrollClick: () => void;
}

export default function ProjectHero({
  intro,
  onScrollClick,
}: ProjectHeroProps) {
  // Wheel event for auto-scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const currentScroll = window.scrollY;
      if (currentScroll < 100 && e.deltaY > 0) {
        e.preventDefault();
        onScrollClick();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [onScrollClick]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.introSection}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              Jaeyoon
              <br />
              Lee
            </Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>

        <main className={styles.mainContent}>
          <div className={styles.interactiveArea}>
            <h1 className={styles.heroQuestion}>
              <span className={styles.heroQuestionLight}>
                {intro.heroQuestion.light}
              </span>
              <span className={styles.heroQuestionBold}>
                {intro.heroQuestion.bold}
              </span>
            </h1>

            <div className={styles.bodyText}>
              {intro.bodyText.map((paragraph, index) => {
                if (typeof paragraph === 'string') {
                  return (
                    <p
                      key={index}
                      className={index === 0 ? styles.firstPara : ''}
                    >
                      {paragraph}
                    </p>
                  );
                } else {
                  return (
                    <div key={index} className={styles.hiddenText}>
                      {paragraph.text}
                    </div>
                  );
                }
              })}
            </div>

            <div className={styles.arrowContainer} onClick={onScrollClick}>
              <svg
                viewBox="0 0 50 25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={styles.arrowIcon}
              >
                <path d="M0 0 L25 25 L50 0" />
              </svg>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
