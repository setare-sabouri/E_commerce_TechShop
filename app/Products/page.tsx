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
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 px-4 justify-items-center">
        {data.products.map((product) => {
          return (
            <ProductItem product={product} key={product.slug}></ProductItem>
          );
        })}
      </section>
    </>
  );
};

export default Products;
