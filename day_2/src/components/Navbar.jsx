import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useProducts } from "../context/productContext";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const { getCartCount, findProductBySearch } = useProducts();
  const [search, setSearch] = useState("");

  useEffect(() => {
    findProductBySearch(search);
  }, [search]);

  return (
    <div className="px-4 py-8 sm:px-10 sm:py-10 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Products</h1>

      <div className="hidden sm:flex items-center border rounded-full px-3 py-1">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value.trim())}
          value={search}
          placeholder="search product here..."
          className="outline-none"
        />
        <CiSearch />
      </div>

      <div className="relative">
        <FaShoppingCart className="h-5 w-5 text-gray-700" />
        <p className="absolute top-[-10px] left-[10px] bg-green-500 rounded-[50%] text-white px-1.5 text-[11px]">
          {getCartCount() || 0}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
