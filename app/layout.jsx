import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
// import StoreProvider from '../lib/Store';

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tech Shop',
  description: 'Technology devices shop ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <StoreProvider> */}
        <header>
          <Announcement />
          <Navbar />
        </header>
        {children}
        <footer className="flex justify-center items-center shadow-inner border-t p-2 ">
          footer
        </footer>
        {/* </StoreProvider> */}
      </body>
    </html>
  );
}
