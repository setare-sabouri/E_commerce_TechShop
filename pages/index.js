import Layout from '../Layout/Layout';
import Home from './Home/home';
import { getServerSideProps } from '../utils/API'

export default function App({ products }) {
    return (
        <Layout title="Home Page">
            <Home products={products} />
        </Layout>
    );
}

export { getServerSideProps }