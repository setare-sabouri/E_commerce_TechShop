import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './ProductsNavbar.module.scss'; // Import the SCSS module

const ProductsNavbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };



    return (



        <nav className={styles.navbar}>
            {/* Desktop navigation links */}
            < ul className="flex gap-4 justify-center items-center md:flex-row hidden md:flex" >
                <li className="cursor-pointer">
                    <Link href="/Laptops/Laptops">Laptops</Link>
                </li>
                <li className="cursor-pointer">Desktop PCs</li>
                <li className="cursor-pointer">Networking Devices</li>
                <li className="cursor-pointer">Printers & Scanners</li>
                <li className="cursor-pointer">PC Parts</li>
                <li className="cursor-pointer">All Other Products</li>
                <li className="cursor-pointer">Repairs</li>
                <li>
                    <button className="shadow-black border px-6 py-2 rounded-3xl border-blue-800 text-blue-800">
                        Our Deals
                    </button>
                </li>
            </ul >
            {/* Mobile menu button */}
            <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                Menu
            </button>
            {
                isMobileMenuOpen && (
                    <ul className={styles.mobileNav}>

                        <li className={styles.mobileNavItem}>Desktop PCs</li>
                        <li className={styles.mobileNavItem}>Networking Devices</li>
                        <li className={styles.mobileNavItem}>Printers & Scanners</li>
                        <li className={styles.mobileNavItem}>PC Parts</li>
                        <li className={styles.mobileNavItem}>All Other Products</li>
                        <li className={styles.mobileNavItem}>Repairs</li>
                    </ul>
                )
            }
        </nav>
    );
};

export default ProductsNavbar;
