import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Store from '../../utils/Store';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import Cookies from 'js-cookie';
import DropdownLink from '../../Layout/DropdownLink';
import styles from './Navbar.module.scss'; // Import the SCSS module

const Navbar = () => {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const { status, data: session } = useSession();

    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    }, [cart.cartItems]);

    const logoutClickHandler = () => {
        Cookies.remove('cart');
        dispatch({ type: 'CART_RESET' });
        signOut({ callbackUrl: '/Login/login' });
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/" >
                    <Image src="/logo.svg" alt="Tech Shop logo" width={90} height={90} />
                </Link>
            </div>

            <div className={styles.searchBar}>
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>

            <div className={styles.userContainer}>
                {status === 'loading' ? (
                    'Loading'
                ) : session?.user ? (
                    <div className={styles.userMenu}>
                        <Menu>
                            <Menu.Button className={styles.menuButton}>
                                {session.user.name}
                                <Image src={"/Icons/arrow-down.svg"} width={20} height={20} />
                            </Menu.Button>
                            <Menu.Items className={styles.menuItems}>
                                <Menu.Item>
                                    <DropdownLink className={styles.dropdownLink} href="/#">
                                        Profile
                                    </DropdownLink>
                                </Menu.Item>
                                <Menu.Item>
                                    <DropdownLink
                                        className={styles.dropdownLink}
                                        href="/Card/cart"
                                    >
                                        Order History
                                    </DropdownLink>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link
                                        className={styles.dropdownLink}
                                        onClick={logoutClickHandler}
                                        href="#"
                                    >
                                        Logout
                                    </Link>
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                    </div>
                ) : (
                    <Link href="/Login/login" className={styles.loginLink}>
                        Login
                    </Link>
                )}

                <div className="cart">
                    <Link href="/Card/cart" >
                        Cart
                    </Link>{' '}
                    {cartItemsCount > 0 && (
                        <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                            {cartItemsCount}
                        </span>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
