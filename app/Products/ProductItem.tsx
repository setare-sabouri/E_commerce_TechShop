import Link from 'next/link';
const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="card mt-4">
      <Link href={`/Products/${product.slug}`}>
        <img
          src={product.image}
          alt={product.slug}
          className="rounded shadow"
        ></img>
      </Link>
      <div className="flex flex-col gap-3 items-center">
        <p className="text-xl">{product.name}</p>
        <p className="text-sm"> {product.brand}</p>
      </div>
    </div>
  );
};

export default ProductItem;
