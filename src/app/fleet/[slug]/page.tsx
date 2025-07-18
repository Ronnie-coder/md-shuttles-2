// src/app/fleet/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { vehicleRepository } from '@/lib/repository';
import { Armchair, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import styles from './VehicleDetails.module.scss';
import type { Metadata } from 'next';
import Link from 'next/link';

// Define the Props type to satisfy the Promise expectation
type Props = {
  params: Promise<{ slug: string }>; // Changed to Promise to match expected type
  searchParams: { [key: string]: string | string[] | undefined };
};

// Generate metadata for the page (SEO purposes)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // Resolve the Promise to access slug
  const vehicle = await vehicleRepository.findBySlug(resolvedParams.slug);
  if (!vehicle) {
    return { title: 'Vehicle Not Found' };
  }
  return {
    title: `${vehicle.name} | MD Shuttles`,
    description: vehicle.description,
  };
}

// Main page component for vehicle details
export default async function VehicleDetailsPage({ params }: Props) {
  const resolvedParams = await params; // Resolve the Promise to access slug
  const vehicle = await vehicleRepository.findBySlug(resolvedParams.slug);

  // If vehicle is not found, trigger Next.js 404 page
  if (!vehicle) {
    notFound();
  }

  return (
    <div className={`${styles.detailsContainer} page-container`}>
      <div className={styles.grid}>
        <div className={styles.imageGallery}>
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>

        <div className={styles.infoPanel}>
          <h1 className={styles.mainHeading}>{vehicle.name}</h1>
          <div className={styles.specs}>
            <span>
              <Armchair size={20} /> {vehicle.seats} Seats
            </span>
            <span>
              <Briefcase size={20} /> {vehicle.luggage} Large Bags
            </span>
          </div>

          <p className={styles.description}>{vehicle.description}</p>

          <h3>Key Features</h3>
          <ul className={styles.featuresList}>
            {vehicle.features.map((feature) => (
              <li key={feature}>
                <CheckCircle size={18} /> {feature}
              </li>
            ))}
          </ul>

          <div className={styles.bookingSection}>
            <div className={styles.price}>
              <span>From</span>
              <strong>R{vehicle.dayRate}</strong>
              <span>/day</span>
            </div>
            <Link href="/contact" className={styles.ctaButton}>
              Check Availability & Book <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all vehicles at build time
export async function generateStaticParams() {
  const vehicles = await vehicleRepository.findAll();
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}
