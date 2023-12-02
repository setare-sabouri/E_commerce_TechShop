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
    <article className={styles.productItem}>
      <Link href={`/Product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
      </Link>
      <div className={styles.productDetails}>
        <Link href={`/Product/${product.slug}`}>
          <a>
            <h2 className={styles.productName}>{product.name}</h2>{' '}
          </a>
        </Link>
        <p className={styles.productBrand}>{product.brand}</p>{' '}
        <p className={`${styles.price} ${styles.fontBold}`}>${product.price}</p>{' '}
      </div>
    </article>
  );
};

export default ProductItem;
