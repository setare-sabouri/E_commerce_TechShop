import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }) {
    return (
        <article className="flex flex-col">
            <Link href={`/Product/${product.slug}`} >
                <img
                    src={product.image}
                    alt={product.name}
                    className="cursor-pointer"
                />
            </Link>
            <div className="flex flex-col items-start justify-center p-5">
                <Link href={`/Product/${product.slug}`}>
                    <a>
                        <h2 className="text-lg">{product.name}</h2>
                    </a>
                </Link>
                <p className="mb-2">{product.brand}</p>
                <p className="font-bold">${product.price}</p>
            </div>
        </article>
    );
}