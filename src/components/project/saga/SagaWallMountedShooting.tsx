'use client';

import Image from 'next/image';
import FeatureDescription from '@/components/project/shared/FeatureDescription';
import styles from './saga.module.css';

export default function SagaWallMountedShooting() {
  return (
    <section className={styles.wallMountedSection}>
      {/* First Row: Wall-Mounted Shooting Text + wall_mount.jpg */}
      <div className={styles.wallMountedRow}>
        <div className={styles.wallMountedTextLeft}>
          <FeatureDescription
            feature="Wall-Mounted Shooting"
            description="The drone's electronic suction plate allows it to attach to walls or trees, conserving battery while enabling diverse shooting angles."
            descriptionWidth={476}
            align="left"
          />
        </div>
        <div className={styles.wallMountedImageRight}>
          <Image
            src="/wall_mount.jpg"
            alt="Wall-Mounted Shooting"
            width={761}
            height={500}
            className={styles.wallMountedImage}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      {/* Second Row: LiDAR Text + LiDAR.jpg */}
      <div
        className={`${styles.wallMountedRow} ${styles.wallMountedRowTopAlign}`}
      >
        <div className={styles.wallMountedTextLeft}>
          <p className={styles.wallMountedDescriptionOnly}>
            LiDAR sensors located on both sides and the bottom of the drone
            sense the surroundings to ensure stable flight control.
          </p>
        </div>
        <div className={styles.wallMountedImageRight}>
          <Image
            src="/LiDAR.jpg"
            alt="LiDAR"
            width={761}
            height={500}
            className={styles.wallMountedImage}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}
