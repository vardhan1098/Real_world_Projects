
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./Actions/Action";
import { useNavigate } from "react-router";

const Product = () => {
  const dispatch = useDispatch();

  const naivgate = useNavigate();

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

  const handleNavigate = (id) => {
    naivgate(`/dash/${id}`);
  };

  return (
    <div>
      <h3>Products</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                flex: "1 0 30.333%",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => handleNavigate(product.id)}
            >
              <img src={product.image} alt={product.title} width={200} />
              <h3>{product.title}</h3>
              <h4>$: {product.price}</h4>
            </div>
          ))
        ) : (
          <p>No products available</p> 
        )}
      </div>
    </div>
  );
};

export default Product;
