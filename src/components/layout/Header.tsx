"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Bus, Menu, X } from 'lucide-react';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu on route change
  useState(() => {
    closeMenu();
  });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Bus size={32} />
          <h1>MD Shuttles</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          <Link href="/fleet" className={pathname === '/fleet' ? styles.active : ''}>Fleet</Link>
          <Link href="/services" className={pathname === '/services' ? styles.active : ''}>Services</Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={styles.navMobile}>
            <Link href="/fleet" onClick={closeMenu}>Fleet</Link>
            <Link href="/services" onClick={closeMenu}>Services</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}