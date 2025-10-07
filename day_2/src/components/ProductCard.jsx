import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/productContext";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useProducts();
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition relative flex flex-col">
      <Link to={`/product/${product.id}`} className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-green-600 mt-1">${product.price}</p>
        </div>
      </Link>

      <button
        onClick={() => addToCart(product.id)}
        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 cursor-pointer"
        title="Add to cart"
      >
        <FaShoppingCart className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};

export default ProductCard;
