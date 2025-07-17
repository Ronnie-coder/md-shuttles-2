"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '@/data/testimonialsData';
import styles from './TestimonialCarousel.module.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex(prevIndex => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonialsData.length - 1;
      if (nextIndex > testimonialsData.length - 1) return 0;
      return nextIndex;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.navButton} ${styles.prev}`} onClick={() => paginate(-1)}>
        <ArrowLeft size={24} />
      </button>
      <div className={styles.carouselStage}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={styles.testimonialCard}
          >
            <blockquote>{testimonialsData[index].quote}</blockquote>
            <cite>{testimonialsData[index].cite}</cite>
          </motion.div>
        </AnimatePresence>
      </div>
      <button className={`${styles.navButton} ${styles.next}`} onClick={() => paginate(1)}>
        <ArrowRight size={24} />
      </button>
    </div>
  );
}