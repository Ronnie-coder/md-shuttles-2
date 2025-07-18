// src/app/page.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Clock, Award, Plane, Wine, Building2 } from 'lucide-react';
import heroStyles from './Home.module.scss';
import sectionsStyles from './HomePageSections.module.scss';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <div className={heroStyles.hero}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
            className={heroStyles.mainHeading}
          >
            Exceptional Transport & Delivery
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } }}
            className={heroStyles.subheading}
          >
            Safe, Reliable, and Efficient solutions for your travel and delivery needs in South Africa.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.6 } }}
          >
            <Link href="/contact" className={heroStyles.ctaButton}>
              Book Your Ride Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== PREMIER SERVICES SECTION ===== */}
      <section className={sectionsStyles.sectionLight} id="services">
        <div className="page-container">
          <motion.div className={sectionsStyles.header} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2>Our Premier Services</h2>
            <p>From seamless airport transfers to bespoke Cape Town experiences.</p>
          </motion.div>
          <div className={sectionsStyles.gridThree}>
            <ServiceCard icon={Plane} title="Airport Transfers" description="Reliable, on-time airport transfers to start or end your journey stress-free." href="/services" />
            <ServiceCard icon={Wine} title="Winelands Tours" description="Explore the picturesque Winelands and sample some of South Africa’s finest wines." href="/services" />
            <ServiceCard icon={Building2} title="Corporate Transport" description="Professional and discreet transportation for executives, clients, and staff." href="/services" />
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US / COMMITMENT SECTION ===== */}
      <section className={sectionsStyles.section} id="about">
        <div className="page-container">
          <motion.div className={sectionsStyles.header} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2>Your Journey, Perfected.</h2>
            <p>We are committed to providing an unparalleled transportation experience with a focus on these core principles.</p>
          </motion.div>
          <div className={sectionsStyles.gridFour}>
            <FeatureCard icon={ShieldCheck} title="Reliable & Punctual" />
            <FeatureCard icon={Clock} title="Modern Fleet" />
            <FeatureCard icon={Award} title="Professional Team" />
            <FeatureCard icon={Star} title="24/7 Customer Support" />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className={`${sectionsStyles.section} ${sectionsStyles.sectionLight}`}>
        <div className="page-container">
          <motion.div className={sectionsStyles.header} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2>What Our Clients Say</h2>
          </motion.div>
          <motion.div className={sectionsStyles.testimonial} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <blockquote>
              “I’ve used MD Shuttles multiple times for business travel. Their drivers are always on time, courteous, and professional. Their service is top-notch and stress-free!”
            </blockquote>
            <cite>– Sarah K.</cite>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className={sectionsStyles.ctaSection}>
        <div className="page-container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2>Let's Get Your Journey Started</h2>
            <p>Contact us for a custom quote or book your ride instantly. Our team is available 24/7 to ensure a seamless experience.</p>
            <Link href="/contact" className={sectionsStyles.ctaButtonFinal}>Contact Us</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Reusable components for cleaner code
const ServiceCard = ({ icon: Icon, title, description, href }: any) => (
  <motion.div className={sectionsStyles.serviceCard} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <Icon size={40} className={sectionsStyles.icon} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Link href={href}>Learn More <ArrowRight size={16}/></Link>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title }: any) => (
  <motion.div className={sectionsStyles.featureCard} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <Icon size={32} />
    <h4>{title}</h4>
  </motion.div>
);
