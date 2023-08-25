import db from './db'
import Product from '../models/Product';


//fetching
async function getServerSideProps() {
    await db.connect();
    const products = await Product.find().lean();
    return {
        props: {
            products: products.map(db.convertDocToObj),
        },
    };
}

export { getServerSideProps }