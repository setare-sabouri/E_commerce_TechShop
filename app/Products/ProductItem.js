import Link from 'next/link';
const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/Products/${product.slug}`} >
        <img src={product.image} alt={product.slug} className='rounded shadow'></img>
      </Link>
      <p className='text-xl'>{product.name}</p>
      <p>Proce: {product.price}$</p>
      <p className='text-sm'>Brand: {product.brand}</p>
      <button className='primary-button'>Add</button>
    </div >
  )

};

export default ProductItem;
