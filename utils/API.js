import db from './db'
import Product from '../models/Product';


// fetching all products
async function getServerSideProps() {
    await db.connect();
    const products = await Product.find().lean();
    return {
        props: {
            products: products.map(db.convertDocOptToObj),
        },
    };
}

// For [slug].js --- fetching one product
async function FetchOneProduct(context) {
    const { params } = context;
    const { slug } = params;
    await db.connect();
    const product = await Product.findOne({ slug }).lean();
    await db.disconnect();
    return {
        props: {
            product: product ? db.convertDocOptToObj(product) : null,
        },
    };
}




export { getServerSideProps, FetchOneProduct }