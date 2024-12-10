import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const apiResponse = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network is Failed..");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    apiResponse();
  }, []);

  const addToCart = (selectedItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === selectedItem.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === selectedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...selectedItem, quantity: 1 }];
      }
      
    });
  };
 

  let values = {
    products,
    loading,
    error,
    apiResponse,
    addToCart,
    cartItems,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default Context;
