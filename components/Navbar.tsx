'use client';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Navbar = () => {
  const [search, setSeach] = useState('');
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSeach('');
    router.push(`/${search}/`);
  };
  return (
    <nav className="bg-white p-2 flex justify-between items-center border-b">
      <h1 className="text-2xl font-bold">
        <Link href="/">ICON</Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSeach(e.target.value)}
          placeholder="search"
          className="p-2 w-3/4 text-xl rounded-xl"
          aria-label="Search"
        />
        <button>🔍</button>
      </form>
      <div className="flex flex-row justify-between gap-4">
        <Link href="/">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </Link>

        <Link href="/">
          <h2>Sign in</h2>
        </Link>

        <Link href="/">EN</Link>
      </div>
    </nav>
  );
};

export default Navbar;
