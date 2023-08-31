import Image from 'next/image';
import React, { useContext } from 'react';
import Layout from '../../Layout/Layout';
import Store from '../../utils/Store';
import { FetchOneProduct } from '../../utils/API';

export default function ProductScreen(props) {
    const { product } = props;
    const { state, dispatch } = useContext(Store);

    if (!product) {
        return (
            <Layout title={"Product not Found"}>
                < h1 className='flex justify-center text-3xl' > Produt Not Found</h1 >
            </Layout >
        )

    }

    const addToCartHandler = () => {
        const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;

        if (product.countInStock < quantity) {
            alert('Sorry. Product is out of stock');
            return;
        }
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    };

    return (
        <Layout title={product.name}>
            <div className='grid grid-rows-1 border-b p-4'>
                <div className="grid grid-cols-4">
                    <div className="col-span-1 flex">
                        <div>Price : </div>
                        <div>${product.price}</div>
                    </div>
                    <div className="col-span-2 flex ">
                        <div>Status :</div>
                        <div> {product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
                    </div>
                    <button
                        className="col-span-1 primary-button "
                        onClick={addToCartHandler}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  p-4">
                <div className='md:col-span-1 flex items-center'>
                    <ul className=' flex flex-col gap-4'>
                        <li className='text-lg'>
                            <h1 className="text-2xl font-bold">{product.name}</h1>
                        </li>
                        <li className='text-lg'>Category: {product.category}</li>
                        <li className='text-lg'>Brand: {product.brand}</li>
                        <li className='text-lg'>
                            {product.rating} of {product.numReviews} reviews
                        </li>
                        <li>Description: {product.description}</li>
                    </ul>
                </div>

                <div className="md:col-span-1 ">
                    <div >
                        <Image
                            className='rounded'
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            layout='responsive'
                        ></Image>
                    </div>

                </div>
            </div>
        </Layout>
    );
}


export async function getServerSideProps(context) {
    return FetchOneProduct(context);
}
