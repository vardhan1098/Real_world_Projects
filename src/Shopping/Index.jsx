// Product.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./Actions/Action";

const Product = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products); // Make sure to access state.products, not the whole state

  useEffect(() => {
    dispatch(fetchProducts()); 
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Products</h3>
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} width={200} />
              <h3>{product.title}</h3>
              <h4>$: {product.price}</h4>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products available</p> // If no products, show a message
        )}
      </div>
    </div>
  );
};

export default Product;
