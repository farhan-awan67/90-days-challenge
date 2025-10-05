import axios from "axios";
import React from "react";
import ProductCard from "../components/ProductCard";
import ProductDetails from "./ProductDetails";
import { useProducts } from "../context/productContext";

const Home = () => {
  const { products } = useProducts();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              // onAddToCart={addToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
