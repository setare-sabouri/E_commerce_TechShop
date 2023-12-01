import React, { useState } from 'react';
import Link from 'next/link';
import styles from './ProductsNav.module.scss';

const ProductsNavbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Desktop navigation links */}
      <ul className={styles.desktopNav}>
        <li className={styles.navItem}>
          <Link href="/Laptops/Laptops">Laptops</Link>
        </li>
        <li className={styles.navItem}>Desktop PCs</li>
        <li className={styles.navItem}>Networking Devices</li>
        <li className={styles.navItem}>Printers & Scanners</li>
        <li className={styles.navItem}>PC Parts</li>
        <li className={styles.navItem}>All Other Products</li>
        <li className={styles.navItem}>Repairs</li>
        <li>
          <button className={styles.dealsButton}>Our Deals</button>
        </li>
      </ul>

      {/* Mobile menu button */}
      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        Menu
      </button>
      {isMobileMenuOpen && (
        <ul className={styles.mobileNav}>
          <li className={styles.mobileNavItem}>Desktop PCs</li>
          <li className={styles.mobileNavItem}>Networking Devices</li>
          <li className={styles.mobileNavItem}>Printers & Scanners</li>
          <li className={styles.mobileNavItem}>PC Parts</li>
          <li className={styles.mobileNavItem}>All Other Products</li>
          <li className={styles.mobileNavItem}>Repairs</li>
        </ul>
      )}
    </nav>
  );
};

export default ProductsNavbar;
