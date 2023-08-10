'use client';

import { useParams } from 'next/navigation';
import data from '@/lib/data';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Store } from '@/utils/Store';

const ProductDetails = () => {
  const { slug } = useParams();
  const product = data.products.find((item) => item.slug === slug);
  if (!product) return <div>Product not Found !</div>;

  //consumin founded
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (item: Product) => item.slug === product.slug
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    console.log(quantity);

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
  };

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
          <p>{product.countInStock}</p>
        </div>
        <div>
          <button className="card" onClick={addToCartHandler}>
            Add to card
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
