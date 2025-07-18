import ServiceTabs from '@/components/services/ServiceTabs';
import styles from './Services.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | MD Shuttles',
  description: 'Discover our comprehensive transport services including airport transfers, Cape Town tours, and reliable deliveries.',
};

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
}
