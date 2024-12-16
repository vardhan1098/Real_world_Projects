import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { productContext } from "./Context/ContextData";

const Details = () => {
  const { id } = useParams();
  const { products, fetchingResponses,addToCart,cartItems } = useContext(productContext);
  const productId = parseInt(id);

  useEffect(() => {
    if (fetchingResponses) {
      fetchingResponses();
    }
  }, [id, fetchingResponses]);

  
  
  const product = products?.find((item) => item.id === productId);
  return (
    <div>
      <h2>Product Details.</h2>
      <div>
        {product ? (
          <div>
            <h3>{product.title}</h3>
            <img src={product.image} alt="" width={300} />
            <p>$:{product.price}</p>
          </div>
        ) : (
          <h3>No Product Found..</h3>
        )}
      </div>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "10px",
        }}
        onClick={()=>addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Details;
