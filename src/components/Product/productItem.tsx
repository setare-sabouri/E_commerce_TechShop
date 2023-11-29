import Link from 'next/link';
import React from 'react';
import styles from './product.module.scss';

interface ProductItemProps {
    product: {
        slug: string;
        image: string;
        name: string;
        brand: string;
        price: number;
    };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <article className={styles['product-item']}>
            <Link href={`/Product/${product.slug}`} >
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles['cursor-pointer']}
                />
            </Link>
            <div className={styles['product-details']}>
                <Link href={`/Product/${product.slug}`}>
                    <a>
                        <h2 className={styles['text-lg']}>{product.name}</h2>
                    </a>
                </Link>
                <p className={styles['mb-2']}>{product.brand}</p>
                <p className={styles['font-bold', 'price']}>${product.price}</p>
            </div>
        </article>
    );
};

export default ProductItem;
