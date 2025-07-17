// src/components/ui/GlobalBackground.tsx
"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './GlobalBackground.module.scss';

export default function GlobalBackground() {
  return (
    <div className={styles.lottieBackground}>
      <DotLottieReact
        src="https://lottie.host/499d07c3-d7dc-4803-a862-ef2ddb6851d2/jVldK3LgpS.lottie"
        loop
        autoplay
      />
      <div className={styles.overlay}></div>
    </div>
  );
}