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

