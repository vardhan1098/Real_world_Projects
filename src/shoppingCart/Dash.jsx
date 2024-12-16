import React, { useContext } from "react";
import { productContext } from "./Context/ContextData";
import { useNavigate } from "react-router";

const Dash = () => {
  const { products, loading } = useContext(productContext);
  const navigate = useNavigate();

  const handleNext = (id) => {
    navigate(`/details/${id}`);
  };

  if (loading) return <div>Loading..</div>;
  return (
    <div>
      <h2>Product</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "5px",
        }}
      >
        {products.length > 0 &&
          products.map((product) => (
            <div
              style={{
                border: "1px solid black",
                cursor: "pointer",
                flex: "1 0 30.333%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              onClick={() => {
                handleNext(product.id);
              }}
            >
              <img src={product.image} alt="" width={80} />
              <h3>{product.title}</h3>
              <h4>Price :${product.price}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dash;
