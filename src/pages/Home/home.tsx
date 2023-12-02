import React from 'react';
import ProductItem from '../../components/Product/productItem';
import Slidercmp from '@components/slider/Slider';
import styles from './Home.module.scss';

interface HomeProps {
  products: Array<any>;
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <>
      <Slidercmp />
      <h1 className={styles.container}>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductItem product={product} key={product.slug}></ProductItem>
          ))}
        </div>
      </h1>
    </>
  );
};

export default Home;
