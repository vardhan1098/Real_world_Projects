import React, { useState, useEffect, createContext } from "react";

export const productContext = createContext();

const ContextData = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const fetchingResponses = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network Failed");
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
    fetchingResponses();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (SelectedItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === SelectedItem.id
      );
      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        const updatedCart = [...prevItems];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // Item doesn't exist, add it to cart
        return [...prevItems, { ...SelectedItem, quantity: 1 }];
      }
    });
  };

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  let values = {
    products,
    loading,
    error,
    fetchingResponses,
    addToCart,
    cartItems,
    handleDelete,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ContextData;
