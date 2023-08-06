"use client";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Navbar = () => {
  const [search, setSeach] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSeach("");
    router.push(`/${search}/`);
  };
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">ICON</Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSeach(e.target.value)}
          placeholder="search"
          className="bg-white p-2 w-80 text-xl rounded-xl"
          aria-label="Search"
        />
        <button>🔍</button>
      </form>
      <div>
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
