import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Store from '../../utils/Store';

const Navbar = () => {
    const { state } = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    }, [cart.cartItems]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="flex flex-col md:flex-row items-center px-4 py-2 justify-between shadow-md">
            <Link href="/">
                <a>
                    <img src="./Logo.png" alt="Tech Shop logo" />
                </a>
            </Link>
            {/* Desktop navigation links */}
            <ul className="flex gap-4 justify-center items-center md:flex-row hidden md:flex">
                <li className="cursor-pointer">Laptops</li>
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
            </ul>
            <div className="md:flex items-center">
                <Link href="/Card/cart">
                    <a className="p-2">
                        Cart
                        {cartItemsCount > 0 && (
                            <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                                {cartItemsCount}
                            </span>
                        )}
                    </a>
                </Link>
                <Link href="/Login/login">
                    <a className="p-2">Login</a>
                </Link>
                <Link href="/Login/login">Profile pic</Link>
            </div>
            {/* Mobile menu button */}
            <button
                className="block md:hidden p-2"
                onClick={toggleMobileMenu}
            >
                Menu
            </button>
            {/* Mobile navigation links */}
            {isMobileMenuOpen && (
                <ul className="md:hidden flex flex-col gap-2">
                    <li className="cursor-pointer">Laptops</li>
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
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
