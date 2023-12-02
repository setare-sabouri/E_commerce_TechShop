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
        <Link href="/">
          <Image src="/logo.svg" alt="Tech Shop logo" width={90} height={90} />
        </Link>
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>

      <div className={styles.userContainer}>
        <Image src={'/Icons/user.svg'} width={20} height={20} />
        {status === 'loading' ? (
          'Loading'
        ) : session?.user ? (
          <div className={styles.userMenu}>
            <Menu>
              <Menu.Button className={styles.menuButton}>
                {session.user.name}
                <Image src={'/Icons/arrow-down.svg'} width={20} height={20} />
              </Menu.Button>
              <Menu.Items className={styles.menuItems}>
                <Menu.Item>
                  <DropdownLink className={styles.dropdownLink} href="/#">
                    Profile
                  </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                  <a
                    className={styles.dropdownLink}
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
          <Link href="/Login/login">Login</Link>
        )}

        <div className={styles.cartContainer}>
          <Image src={'/Icons/shopping-cart.svg'} width={20} height={20} />

          <Link href="/Card/cart">Cart</Link>
          {cartItemsCount > 0 && (
            <span className={styles.cartCount}>{cartItemsCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
