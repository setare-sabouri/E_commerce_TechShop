'use client';

import { useSearchParams } from 'next/navigation';

import React from 'react';

const ProductDetails = () => {
  const searchParams = useSearchParams();

  const slug = searchParams.get('slug');
  console.log(slug);
  return <div>aa{slug} ff</div>;
};

export default ProductDetails;
