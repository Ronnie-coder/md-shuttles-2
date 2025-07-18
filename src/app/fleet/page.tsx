
import { vehicleRepository } from '@/lib/repository';
import CarCard from '@/components/fleet/CarCard';
import styles from './Fleet.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fleet | MD Shuttles',
  description: 'Explore our premium fleet of luxury sedans, minivans, and coaches. Find the perfect vehicle for your transport needs in Cape Town.',
};

export default async function FleetPage() {
  const vehicles = await vehicleRepository.findAll();

  return (
    <div className="page-container">
      <div className={styles.header}>
        <h1>Our Premium Fleet</h1>
        <p>
          Each vehicle in our fleet is fully licensed, regularly maintained, and equipped for your safety and comfort. Choose the perfect ride for your journey.
        </p>
      </div>

      <div className={styles.fleetGrid}>
        {vehicles.map(vehicle => (
          <CarCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}
