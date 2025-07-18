import Image from 'next/image';
import Link from 'next/link';
import { Armchair, Briefcase, ArrowRight } from 'lucide-react';
import type { Vehicle } from '@/types';
import styles from './CarCard.module.scss';

type CarCardProps = {
  vehicle: Vehicle;
};

export default function CarCard({ vehicle }: CarCardProps) {
  return (
    <Link href={`/fleet/${vehicle.slug}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image 
            src={vehicle.image} 
            alt={vehicle.name} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.content}>
          <h3>{vehicle.name}</h3>
          <div className={styles.specs}>
            <span><Armchair size={18} /> {vehicle.seats} Seats</span>
            <span><Briefcase size={18} /> {vehicle.luggage} Luggage</span>
          </div>
          <div className={styles.footer}>
            <p className={styles.price}>From <span>R{vehicle.dayRate}</span>/day</p>
            <div className={styles.detailsCta}>
              View Details <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );



