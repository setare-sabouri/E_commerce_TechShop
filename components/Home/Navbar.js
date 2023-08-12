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
        <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
                <a className="text-lg font-bold">Tech Shop</a>
            </Link>
            <div>
                <Link href="/cart">
                    <a className="p-2">
                        Cart
                        {cartItemsCount > 0 && (
                            <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                                {cartItemsCount}
                            </span>
                        )}
                    </a>
                </Link>
                <Link href="/login">
                    <a className="p-2">Login</a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
