import Image from 'next/image';
import FeatureDescription from '@/components/project/shared/FeatureDescription';
import styles from './saga.module.css';

export default function SagaChargingDock() {
  return (
    <section className={styles.chargingDockSection}>
      {/* Top Part: Feature-Description Layout */}
      <FeatureDescription
        feature="Charging Dock"
        description="The charging dock equipped with a lithium-sulfur battery pack, significantly extends flight and recording time by enabling on-the-go charging for prolonged operation."
        descriptionWidth={501}
        align="left"
      />

      {/* Bottom Part: Images */}
      <div className={styles.chargingDockImageRow}>
        <div className={styles.chargingDockImageLeft}>
          <Image
            src="/charging_dock_2.jpg"
            alt="Charging Dock product detail"
            width={616}
            height={560}
            className={styles.chargingDockImage}
            sizes="(max-width: 768px) 100vw, 616px"
          />
        </div>
        <div className={styles.chargingDockImageRight}>
          <Image
            src="/charging_dock_1.jpg"
            alt="Charging Dock attached to strap"
            width={687}
            height={924}
            className={styles.chargingDockImage}
            sizes="(max-width: 768px) 100vw, 687px"
          />
        </div>
      </div>
    </section>
  );
}
