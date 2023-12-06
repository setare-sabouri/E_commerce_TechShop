import Head from 'next/head';
import Announcement from '@components/Announcement.tsx/Announcement';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@layout/Footer';

export default function Layout({
  title,
  children,
}: {
  title: string;
  children: any;
}) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - TechShop' : 'TechShop'}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="Logo.png" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <Announcement />
          <Navbar />
        </header>
        <main className="container-fluid">{children}</main>
        <Footer />
      </div>
    </>
  );
}
