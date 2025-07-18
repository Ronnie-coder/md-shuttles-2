// src/app/contact/page.tsx

import ContactForm from '@/components/contact/ContactForm';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import styles from './Contact.module.scss';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | MD Shuttles',
  description: 'Get in touch with MD Shuttles for bookings, inquiries, or support. Contact us via phone, WhatsApp, email, or our contact form.',
};

export default function ContactPage() {
  const whatsappNumber = "27710889345"; // International format without '+'

  return (
    <div className="page-container">
      <div className={styles.header}>
        <h1>Get In Touch</h1>
        <p>We're here to help! Whether you have a question about our services, need a quote, or want to make a booking, please don't hesitate to reach out.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.detailsCard}>
          <h3>Contact Information</h3>
          <p>For immediate assistance or to speak with us directly, please use the details below.</p>
          
          <ul className={styles.contactList}>
            <li>
              <Phone size={20} />
              <div>
                <strong>Phone</strong>
                <span>071 088 9345 / 073 835 8504</span>
              </div>
            </li>
            <li>
              <Mail size={20} />
              <div>
                <strong>Email</strong>
                <span>info@mdshuttles.co.za</span>
              </div>
            </li>
            <li>
              <MapPin size={20} />
              <div>
                <strong>Address</strong>
                <span>129 Beaufort Street, Goodwood, Cape Town, 7460</span>
              </div>
            </li>
          </ul>

          <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
            <MessageCircle size={22} /> Chat with us on WhatsApp
          </Link>
        </div>

        <div className={styles.formCard}>
          <h3>Send us a Message</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );

