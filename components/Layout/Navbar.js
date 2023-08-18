import React, { useContext } from 'react';
import Link from 'next/link';

import Store from '../../utils/Store';
import { useState, useEffect } from 'react';
const Navbar = () => {
    const { state } = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setCartItemsCount] = useState(0);
    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    }, [cart.cartItems]);
    return (
        <nav className="flex  items-center px-4 py-2  justify-between shadow-md">
            <Link href="/">
                <a>
                    <img src="./Logo.png" alt='Tech Shop logo'></img>
                </a>
            </Link>
            <ul className='flex gap-4 justify-center items-center'>
                <li>Laptops</li>
                <li>Desktop PCs</li>
                <li>Networking Devices</li>
                <li>Printers & Scanners</li>
                <li>PC Parts</li>
                <li>All Other Products</li>
                <li>Repairs</li>
                <li>
                    <button className='shadow-black border p-2 rounded-2xl'>Our Deals</button>
                </li>

            </ul>
            <div>
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
        </nav>
    )
}

export default Navbar
