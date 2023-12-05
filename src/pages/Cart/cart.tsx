// CartScreen.tsx
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, FC } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import Layout from '../../Layout/Layout';
import Store from '../../utils/Store';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styles from './Cart.module.scss'; // Import the styles

interface CartItem {
  slug: string;
  name: string;
  image: string;
  quantity: number;
  countInStock: number;
  price: number;
}

const CartScreen: FC = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item: CartItem) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const updateCartHandler = (item: CartItem, qty: string) => {
    const quantity = Number(qty);
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };

  return (
    <Layout title="Shopping Cart">
      <div className={styles.cartContainer}>
        <h1 className="text-2xl font-bold p-5">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            Cart is empty.
            <br />
            <Link href="/">
              <button className={styles.goShoppingButton}>Go shopping</button>
            </Link>
          </div>
        ) : (
          <div className={styles.cartGrid}>
            <div className={styles.cartItems}>
              <table className={styles.cartTable}>
                <thead className={styles.tableHeader}>
                  <tr>
                    <th className={styles.tableHeaderCell}>Item</th>
                    <th className={styles.tableHeaderCell}>Quantity</th>
                    <th className={styles.tableHeaderCell}>Price</th>
                    <th className={styles.tableHeaderCell}>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.slug} className={styles.tableRow}>
                      <td>
                        <Link href={`/Product/${item.slug}`}>
                          <a className={styles.productLink}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={100}
                              height={100}
                            />
                            &nbsp;
                            {item.name}
                          </a>
                        </Link>
                      </td>
                      <td
                        className={`${styles.tableCell} ${styles.quantityCell}`}
                      >
                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartHandler(item, e.target.value)
                          }
                          className={styles.quantitySelect}
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className={`${styles.tableCell} ${styles.priceCell}`}>
                        ${item.price}
                      </td>
                      <td
                        className={`${styles.tableCell} ${styles.removeCell}`}
                      >
                        <button
                          onClick={() => removeItemHandler(item)}
                          className={styles.removeButton}
                        >
                          <XCircleIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.cartSummary}>
              <ul>
                <li>
                  <div className={styles.subtotal}>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) :
                    ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </div>
                </li>
                <li>
                  <button
                    onClick={() =>
                      router.push('/Login/login?redirect=/Cart/shipping')
                    }
                    className={styles.checkoutButton}
                  >
                    Check Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
