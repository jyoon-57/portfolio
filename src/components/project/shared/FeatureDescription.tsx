import React from 'react';
import styles from './FeatureDescription.module.css';

interface FeatureDescriptionProps {
  feature: string;
  description: string;
  descriptionWidth?: string | number; // e.g., '38.3rem' or 383
  align?: 'left' | 'right';
  className?: string; // For extra overrides
}

const FeatureDescription: React.FC<FeatureDescriptionProps> = ({
  feature,
  description,
  descriptionWidth,
  align = 'left',
  className = '',
}) => {
  // Convert number to rem assuming 1rem = 10px if number provided
  const widthStyle =
    typeof descriptionWidth === 'number'
      ? `${descriptionWidth / 10}rem`
      : descriptionWidth;

  const alignClass = align === 'right' ? styles.alignRight : styles.alignLeft;

  return (
    <div className={`${styles.container} ${alignClass} ${className}`}>
      <h3 className={styles.featureText}>{feature}</h3>
      <p
        className={styles.descriptionText}
        style={{ width: widthStyle ? widthStyle : 'auto' }}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureDescription;
