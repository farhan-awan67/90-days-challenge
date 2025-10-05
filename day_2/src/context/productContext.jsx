import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});

  //   get products from api
  const fetchProducts = async () => {
    try {
      const products = await axios.get(import.meta.env.VITE_FAKE_STORE_API);
      if (products) {
        return setProducts(products.data.slice(10));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //   add to cart
  const addToCart = (id) => {
    const cartItems = structuredClone(cartData);
    if (cartItems[id]) {
      cartItems[id] += 1;
    } else {
      cartItems[id] = 1;
    }
    setCartData(cartItems);
    toast.success("product added to cart");
  };

  //   get cart count
  const getCartCount = () => {
    let total = 0;
    for (let itemId in cartData) {
      total += cartData[itemId];
    }
    return total;
  };

  // search product
  const findProductBySearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProducts(filtered);
  };

  //   fetch products on render
  useEffect(() => {
    fetchProducts();
  }, []);

  const value = { products, addToCart, getCartCount, findProductBySearch };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
