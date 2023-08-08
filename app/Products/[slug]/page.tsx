// [slug]/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = useParams();

  console.log(router);

  return <div>Product details page{slug}</div>;
};

export default ProductDetails;
