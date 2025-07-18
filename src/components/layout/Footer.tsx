// src/components/layout/Footer.tsx

import Link from 'next/link';
import styles from './Footer.module.scss';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoColumn}>
          <h4>MD Shuttles</h4>
          <p>Safe, Reliable, and Efficient Transportation and Delivery Solutions.</p>
        </div>
        <div className={styles.linksColumn}>
          <h4>Quick Links</h4>
          <Link href="/fleet">Fleet</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.contactColumn}>
          <h4>Contact Us</h4>
          <p><MapPin size={16} /> 129 Beaufort Street, Goodwood, Cape Town, 7460</p>
          <p><Phone size={16} /> 071 088 9345 / 073 835 8504</p>
          <p><Mail size={16} /> info@mdshuttles.co.za</p>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} MD Shuttles. All Rights Reserved. |
        <a href="https://www.coderon.co.za" target="_blank" rel="noopener noreferrer" className={styles.coderonLink}>
          Developed by Coderon
        </a>
      </div>
    </footer>
  );
}
