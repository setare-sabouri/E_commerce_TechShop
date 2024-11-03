import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import Cookies from 'js-cookie';
import Store from '../utils/Store';
import DropdownLink from './DropdownLink';

const Navbar: React.FC = () => {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const { status, data: session } = useSession();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    }, [cart.cartItems]);

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    const logoutClickHandler = () => {
        Cookies.remove('cart');
        dispatch({ type: 'CART_RESET' });
        signOut({ callbackUrl: '/Login/login' });
    };

    const renderDesktopLinks = () => (
        <ul className="flex gap-4 items-center hidden md:flex">
            {['Laptops', 'Desktop PCs', 'Networking Devices', 'Printers & Scanners', 'PC Parts', 'All Other Products', 'Repairs'].map((item) => (
                <li key={item} className="cursor-pointer">
                    <Link href={`/${item.replace(/ /g, '')}/${item.replace(/ /g, '')}`}>
                        {item}
                    </Link>
                </li>
            ))}
            <li>
                <button className="shadow-black border px-6 py-2 rounded-3xl border-blue-800 text-blue-800">
                    Our Deals
                </button>
            </li>
        </ul>
    );

    const renderUserMenu = () => (
        <Menu>
            <Menu.Button className="text-blue-600">{session?.user?.name}</Menu.Button>
            <Menu.Items className="absolute z-10 right-0 w-56 origin-top-right bg-white shadow-lg mt-2">
                <Menu.Item>
                    <DropdownLink className="dropdown-link" href="/#">
                        Profile
                    </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                    <DropdownLink className="dropdown-link" href="/Card/cart">
                        Order History
                    </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                    <a className="dropdown-link" onClick={logoutClickHandler} href="#">
                        Logout
                    </a>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );

    const renderMobileLinks = () => (
        <ul className="md:hidden flex flex-col gap-2">
            {['Laptops', 'Desktop PCs', 'Networking Devices', 'Printers & Scanners', 'PC Parts', 'All Other Products', 'Repairs'].map((item) => (
                <li key={item} className="cursor-pointer">
                    <Link href={`/${item.replace(/ /g, '')}/${item.replace(/ /g, '')}`}>
                        {item}
                    </Link>
                </li>
            ))}
            <li>
                <button className="shadow-black border px-6 py-2 rounded-3xl border-blue-800 text-blue-800">
                    Our Deals
                </button>
            </li>
        </ul>
    );

    return (
        <nav className="flex flex-col md:flex-row items-center px-4 py-2 justify-between shadow-md">
            <Link href="/">
                <a>
                    <Image src="/Logo.png" alt="Tech Shop logo" width={90} height={70} />
                </a>
            </Link>

            {/* Desktop Navigation Links */}
            {renderDesktopLinks()}

            <div className="flex gap-2 items-center">
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
                {status === 'loading' ? (
                    'Loading'
                ) : session?.user ? (
                    renderUserMenu()
                ) : (
                    <Link href="/Login/login">
                        <a className="p-2">Login</a>
                    </Link>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button className="block md:hidden p-2" onClick={toggleMobileMenu}>
                Menu
            </button>

            {/* Mobile Navigation Links */}
            {isMobileMenuOpen && renderMobileLinks()}
        </nav>
    );
};

export default Navbar;
