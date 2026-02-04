'use client';

import Image from 'next/image';
import TitledTextSection from '@/components/project/shared/TitledTextSection';
import styles from './saga.module.css';

const shootingMethods = [
  {
    title: 'Handheld Camera',
    body: 'Body-clipped camera recording',
    icon: '/Handheld.png',
  },
  {
    title: 'Long Take',
    body: '3-4 minute drone flight around the subject',
    icon: '/Longtake.png',
  },
  {
    title: 'Drone Shot',
    body: 'High-altitude aerial filming',
    icon: '/Droneshot.png',
  },
  {
    title: 'Time-Lapse',
    body: 'Long-distance positioning and capture',
    icon: '/Timelapse.png',
  },
  {
    title: 'Reaction Shot',
    body: 'Eye-level filming \n(via flight or surface-mounting)',
    icon: '/Reactionshot.png',
  },
  {
    title: 'Interview Insert',
    body: 'Suction-mount recording on nearby surfaces (tables, rocks)',
    icon: '/Interviewinsert.png',
  },
  {
    title: 'Static Shot',
    body: 'Suction-mount recording on environmental structures \n(walls, nature)',
    icon: '/Staticshot.png',
  },
];

export default function SagaResearchSection() {
  const topRow = shootingMethods.slice(0, 4);
  const bottomRow = shootingMethods.slice(4);

  return (
    <div className={styles.researchWrapper}>
      <TitledTextSection
        title="Research"
        body="Developed a non-disruptive filming method that secures optimal angles through an analysis of diverse technologies."
        className={styles.researchSection}
        bodyWidth="69.8rem"
        spacing="3.8rem"
      />

      <div className={styles.methodsContainer}>
        {/* Top Row: 4 items */}
        <div className={styles.methodsRow}>
          {topRow.map((method, index) => (
            <div key={index} className={styles.methodItem}>
              <div className={styles.iconWrapper}>
                <Image
                  src={method.icon}
                  alt={method.title}
                  width={72}
                  height={72}
                  className={styles.methodIcon}
                />
              </div>
              <h4 className={styles.methodTitle}>{method.title}</h4>
              <p className={styles.methodBody}>{method.body}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row: 3 items */}
        <div className={styles.methodsRow}>
          {bottomRow.map((method, index) => (
            <div key={index} className={styles.methodItem}>
              <div className={styles.iconWrapper}>
                <Image
                  src={method.icon}
                  alt={method.title}
                  width={72}
                  height={72}
                  className={styles.methodIcon}
                />
              </div>
              <h4 className={styles.methodTitle}>{method.title}</h4>
              <p className={styles.methodBody}>{method.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
