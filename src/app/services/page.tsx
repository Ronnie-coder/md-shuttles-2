<<<<<<< HEAD
// src/app/services/page.tsx
import ServiceTabs from '@/components/services/ServiceTabs';
import styles from './Services.module.scss';

export default function ServicesPage() {
  return (
    <div className={`${styles.servicesContainer} page-container`}>
      <h1 className={styles.mainHeading}>Our Comprehensive Services</h1>
      <p className={styles.intro}>
        From seamless airport transfers to bespoke Cape Town tours and reliable deliveries, we provide a full spectrum of transport solutions designed with your safety and comfort in mind.
      </p>

      <ServiceTabs />
    </div>
  );
=======
// src/app/services/page.tsx

import ServiceTabs from '@/components/services/ServiceTabs';
import styles from './Services.module.scss';

export default function ServicesPage() {
  return (
    <div className={`${styles.servicesContainer} page-container`}>
      <h1>Our Comprehensive Services</h1>
      <p className={styles.intro}>
        From seamless airport transfers to bespoke Cape Town tours and reliable deliveries, we provide a full spectrum of transport solutions designed with your safety and comfort in mind.
      </p>

      <ServiceTabs />
    </div>
  );
>>>>>>> d838527dfb3712e23902bb78922705722be566fb
}