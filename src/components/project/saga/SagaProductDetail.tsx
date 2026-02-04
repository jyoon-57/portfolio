import Image from 'next/image';
import SagaSectionText from './SagaSectionText';
import styles from './saga.module.css';

export default function SagaProductDetail() {
  return (
    <section className={styles.productDetailSection}>
      <SagaSectionText title="Product Detail" width="69.8rem">
        <p>
          The product consists of a strap, a charging dock, and the drone. Each
          part integrates securely, designed to ensure comfort even during
          extended use.
        </p>
      </SagaSectionText>

      <div className={styles.productDetailImageWrapper}>
        <Image
          src="/product_detail.jpg"
          alt="Product Detail"
          width={891}
          height={500}
          className={styles.productDetailImage}
        />
      </div>
    </section>
  );
}
