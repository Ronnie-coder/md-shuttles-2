"use client"; // For Framer Motion animations on scroll

import { motion } from 'framer-motion';
import styles from './About.module.scss';
import { Target, Eye, Star, Users, ShieldCheck } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutPage() {
  const coreValues = [
    "Safety – Every trip is our responsibility.",
    "Reliability – On-time pickups and drop-offs.",
    "Efficiency – Minimal delays, maximum satisfaction.",
    "Customer Focus – Personalized, responsive service.",
    "Integrity – Transparent and honest in every interaction.",
    "Teamwork – United team, better service.",
    "Continuous Improvement – Always innovating and evolving.",
  ];

  return (
    <div className={`${styles.aboutPage} page-container`}>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>About MD Shuttles</h1>
        <p className={styles.intro}>
          MD Shuttles is a professional transportation and delivery company based in Cape Town, South Africa, offering safe, reliable, and efficient services for individuals, businesses, and groups. With a commitment to excellence, customer satisfaction, and community development, we ensure every ride is professional, punctual, and secure.
        </p>
      </motion.section>

      <div className={styles.missionVision}>
        <motion.section
          className={styles.card}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Target className={styles.icon} size={40} />
          <h2>Our Mission</h2>
          <p>To provide exceptional transportation and delivery services that exceed our customers’ expectations, while maintaining the highest standards of safety, reliability, and efficiency.</p>
        </motion.section>

        <motion.section
          className={styles.card}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Eye className={styles.icon} size={40} />
          <h2>Our Vision</h2>
          <p>To become the leading transportation and delivery company in South Africa, recognized for our commitment to excellence, customer satisfaction, and community upliftment.</p>
        </motion.section>
      </div>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2><Star className={styles.titleIcon} /> Our Core Values</h2>
        <ul className={styles.valuesGrid}>
          {coreValues.map(value => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
