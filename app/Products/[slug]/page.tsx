'use client';

import { useParams } from 'next/navigation';
import data from '@/lib/data';
import Image from 'next/image';
const ProductDetails = () => {
  const { slug } = useParams();
  const product = data.products.find((item) => item.slug === slug);
  if (!product) return <div>Product not Found !</div>;
  return (
    <>
      <section className="grid grid-cols-3 justify-items-center">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </div>
        <div>
          <p>{product?.brand}</p>
          <p>{product.price}</p>
          <p>{product.numReviews}</p>
          <p>{product.rating}</p>
          <p>{product.stockStatus}</p>
        </div>
        <div>
          <button className="card"> Add to card</button>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
