import Head from 'next/head';
import Navbar from './Home/Navbar'
import Footer from './Home/Footer';
import Announcement from './Announcement';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - TechShop' : 'TechShop'}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <Announcement />
          <Navbar />
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}