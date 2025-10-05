import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../context/productContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useProducts();

  const product = products.find((product) => product.id.toString() === id);

  return (
    product && (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="text-blue-500 underline mb-4 inline-block">
          ← Back to Products
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-xl text-green-600 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="mb-4">
              <span className="font-medium">Category:</span> {product.category}
            </p>
            <button
              onClick={() => addToCart(product.id)}
              className="mt-auto bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
