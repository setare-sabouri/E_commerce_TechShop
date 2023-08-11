import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../lib/Store';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  // const { state } = useContext(Store);
  // const { cart } = state;
  return (
    <nav className="bg-white p-2 flex justify-between items-center border-b">
      <h1 className="text-2xl font-bold">
        <Link href="/">ICON</Link>
      </h1>
      <form>
        <input
          type="text"
          placeholder="search"
          className="p-2 w-3/4 text-xl rounded-xl"
          aria-label="Search"
        />
        <button>🔍</button>
      </form>

      <div className="flex flex-row justify-between gap-4">
        <Link href="/" className="p-2">
          <ShoppingCartOutlinedIcon />
          {/* {cart && cart.cartItems && cart.cartItems.length > 0 && (
            <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
              {cart.cartItems.length}
            </span>
          )} */}
        </Link>

        <Link href="/">
          <h2>Sign in</h2>
        </Link>

        <Link href="/Products">Catalog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
