// src/components/testimonials/TestimonialCarousel.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '@/data/testimonialsData';
import styles from './TestimonialCarousel.module.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex(prevIndex => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonialsData.length - 1;
      if (nextIndex >= testimonialsData.length) return 0;
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
      <button 
        className={`${styles.navButton} ${styles.prev}`} 
        onClick={() => paginate(-1)}
        aria-label="Previous testimonial"
      >
        <ArrowLeft size={24} />
      </button>

      <div className={styles.carouselStage}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
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

      <button 
        className={`${styles.navButton} ${styles.next}`} 
        onClick={() => paginate(1)}
        aria-label="Next testimonial"
      >
        <ArrowRight size={24} />
      </button>

      {/* Add dots for navigation */}
      <div className={styles.dots}>
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ''}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}