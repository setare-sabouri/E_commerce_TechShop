import type { Metadata } from 'next';
import data from '@/lib/data';
import ProductItem from './ProductItem';

export const metadata: Metadata = {
  title: 'Products',
  description: 'All products ',
};

export const Products = () => {
  return (
    <>
      {data.products.map((product) => {
        return <ProductItem product={product} key={product.slug}></ProductItem>;
      })}
    </>
  );
};

export default Products;
