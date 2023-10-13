import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Store from '../utils/Store';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from '@headlessui/react';
import Cookies from 'js-cookie';
import DropdownLink from './DropdownLink';

const Navbar = () => {
    <ToastContainer position="bottom-center" limit={1} />
    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const { status, data: session } = useSession();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    }, [cart.cartItems]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const logoutClickHandler = () => {
        Cookies.remove('cart');
        dispatch({ type: 'CART_RESET' });
        signOut({ callbackUrl: '/Login/login' });
    };

    return (
        <nav className="flex flex-col md:flex-row items-center px-4 py-2 justify-between shadow-md">
            <Link href="/">
                <a>
                    <Image
                        src="/Logo.png"
                        alt="Tech Shop logo"
                        width={90}
                        height={70}
                    />
                </a>
            </Link>
            {/* Desktop navigation links */}
            <ul className="flex gap-4 justify-center items-center md:flex-row hidden md:flex">
                <li className="cursor-pointer">
                    <Link href="/Components/Laptops/laptops">Laptops</Link>
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
            </ul>
            <div className="flex gap-2  items-center">
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
                {status === 'loading' ? ('Loading') :
                    session?.user ? (
                        <div className="relative">
                            <Menu>
                                <Menu.Button className="text-blue-600">
                                    {session.user.name}
                                </Menu.Button>
                                <Menu.Items className="fixed z-10 right-0 w-56 origin-top-right bg-white shadow-lg mt-2">
                                    <Menu.Item>
                                        <DropdownLink className="dropdown-link" href="/#">
                                            Profile
                                        </DropdownLink>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <DropdownLink
                                            className="dropdown-link"
                                            href="/Card/cart"
                                        >
                                            Order History
                                        </DropdownLink>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a
                                            className="dropdown-link"
                                            onClick={logoutClickHandler}
                                            href="#"
                                        >
                                            Logout
                                        </a>
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </div>
                    ) : (
                        <Link href="/Login/login">
                            <a className="p-2">Login</a>
                        </Link>
                    )}

                <Link href="/Login/login">Profile pic</Link>
            </div>
            {/* Mobile menu button */}
            <button className="block md:hidden p-2" onClick={toggleMobileMenu}>
                Menu
            </button>
            {/* Mobile navigation links */}
            {
                isMobileMenuOpen && (
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
                )
            }
        </nav >
    );
};

export default Navbar;
