
import Image from 'next/image';
import React, { useContext } from 'react';
import Layout from '../../Layout/Layout';
import Store from '../../utils/Store';
import { FetchOneProduct } from '../../utils/API';
import styles from './slug.module.scss';


const ProductScreen: React.FC<{ product: any }> = (props) => {
    const { product } = props;
    const { state, dispatch } = useContext(Store);

    // Check if the product is available
    if (!product) {
        return (
            <Layout title={"Product not Found"}>
                <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Product Not Found</h1>
            </Layout>
        );
    }

    // Handler function for adding the product to the cart
    const addToCartHandler = () => {
        const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;

        if (product.countInStock < quantity) {
            alert('Sorry. Product is out of stock');
            return;
        }
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    };


    return (
        <Layout title={product.name}>
            <div className={styles.productDetails}>
                <div className={styles.gridContainer}>
                    <div className={styles.price}>
                        <div>Price :</div>
                        <div>${product.price}</div>
                    </div>
                    <div className={styles.status}>
                        <div>Status :</div>
                        <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
                    </div>
                    <button className={styles.addToCartButton} onClick={addToCartHandler}>
                        Add to cart
                    </button>
                </div>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.infoLeft}>
                    <ul>
                        <li>{product.name}</li>
                        <li>Category: {product.category}</li>
                        <li>Brand: {product.brand}</li>
                        <li>
                            {product.rating} of {product.numReviews} reviews
                        </li>
                        <li>Description: {product.description}</li>
                    </ul>
                </div>
                <div className={styles.infoRight}>
                    <div>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            layout='responsive'
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

// Fetch data from the server and provide it to the component
export async function getServerSideProps(context) {
    return FetchOneProduct(context);
}


export default ProductScreen;
