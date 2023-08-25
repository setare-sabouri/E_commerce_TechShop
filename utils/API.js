import db from './db'
import Product from '../models/Product';


//fetching
async function getServerSideProps() {
    await db.connect();
    const products = await Product.find().lean();
    console.log(products)
    return {
        props: {
            products: products.map(db.convertDocOptToObj),
        },
    };
}

export { getServerSideProps }