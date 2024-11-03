import Head from "next/head";
import Navbar from "@Layout/Navbar";
import Foot
import Footer from "@Layout/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  title?: string; //optional title
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const PageTitle = title ? `${title} - TechShop` : "TechShop"
  return (
    <>
      <Head>
        <title>{PageTitle}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="Logo.png" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <Navbar />
        </header>
        <main className="container-fluid">{children}</main>
        <Footer />
      </div>
    </>
  );
}


export default Layout