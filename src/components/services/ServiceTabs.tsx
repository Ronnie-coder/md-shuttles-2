// src/components/services/ServiceTabs.tsx

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import styles from './ServiceTabs.module.scss';
import { Check } from 'lucide-react';

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  const activeService = servicesData.find(service => service.id === activeTab);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList}>
        {servicesData.map((service) => (
          <button
            key={service.id}
            className={`${styles.tabButton} ${activeTab === service.id ? styles.active : ''}`}
            onClick={() => setActiveTab(service.id)}
          >
            <service.icon size={20} />
            <span>{service.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} // This key is crucial for AnimatePresence
          className={styles.tabContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {activeService && (
            <>
              <h3>{activeService.title}</h3>
              <p className={styles.description}>{activeService.description}</p>
              <ul className={styles.itemList}>
                {activeService.items.map((item, index) => (
                  <li key={index}>
                    <Check size={18} className={styles.checkIcon} /> {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}