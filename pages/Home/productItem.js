import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }) {
    return (
        <article className="card">
            <Link href={`/product/${product.slug}`} >
                <img
                    src={product.image}
                    alt={product.name}
                    className="rounded shadow cursor-pointer p-2"
                />
            </Link>
            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/product/${product.slug}`}>
                    <a>
                        <h2 className="text-lg">{product.name}</h2>
                    </a>
                </Link>
                <p className="mb-2">{product.brand}</p>
                <p>${product.price}</p>
            </div>
        </article>
    );
}