import './globals.css';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import StoreProvider from '../utils/Store';

export default function RootLayout({ children }) {
  return (
    <body className="flex justify-between min-h-screen flex-col">
      <StoreProvider>
        <header>
          <Announcement />
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="flex justify-center items-center shadow-inner border-t p-2 ">
          footer
        </footer>
      </StoreProvider>
    </body>
  );
}
