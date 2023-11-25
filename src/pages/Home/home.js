import ProductItem from './productItem';
import Slidercmp from '../../components/GlobalCanvas/slider/Slider';

const Home = ({ products }) => {
    return (
        <>
            <Slidercmp />
            <h1 className=' flex min-h-screen flex-col items-center justify-between p-6'>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductItem
                            product={product}
                            key={product.slug}
                        ></ProductItem>
                    ))}
                </div>
            </h1>
        </>


    );
};



export default Home;
