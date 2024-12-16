import React, { useContext } from "react";
import { productContext } from "./Context/ContextData";

const Cart = () => {
  const { cartItems, handleDelete } = useContext(productContext);

  console.log("Logging Cart Items:", cartItems);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((cartProduct, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              border: "1px solid black",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <img src={cartProduct.image} width={100} alt={cartProduct.title} />
            <h4>{cartProduct.title}</h4>
            <p>Price: ${cartProduct.price}</p>
            <div>
              <p>Quantity: {cartProduct.quantity}</p> {/* Display quantity */}
              <button style={{ border: "1px solid black" }}>-</button>
              <button style={{ border: "1px solid black" }}>+</button>
            </div>

            <button onClick={() => handleDelete(cartProduct.id)}>❌</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
