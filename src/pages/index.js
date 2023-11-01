import Layout from '@Layout/Layout';
import Home from '@pages/Home/home';
import { getServerSideProps } from '@utils/API'

export default function App({ products }) {
    return (
        <Layout title="Home Page">
            <Home products={products} />
        </Layout>
    );
}

export { getServerSideProps } //This acts like a bridge , i'm suppossed to implement this function in index , but as im not , and i'm importing it , i need to export it and make it accsseible ...