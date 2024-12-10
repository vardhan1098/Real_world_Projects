import React, { useContext } from "react";
import { ProductContext } from "./Context";

const CartItems = () => {
  const { cartItems } = useContext(ProductContext);
  console.log("getting items..", cartItems);
  const totalPrice = cartItems.reduce((acc,item)=> acc + item.price * item.quantity , 0)
  console.log(totalPrice);
  
  return (
    <div>
      <h2>CartPage.</h2>
      {cartItems.map((cart) => (
        <div
          key={cart.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid black",
          }}
        >
          <img
            src={cart.image}
            width={100}
            style={{ objectFit: "contain" }}
            alt=""
          />
          <h2 style={{ fontSize: "20px", fontWeight: "lighter" }}>
            {cart.title}
          </h2>
          <p>{cart.quantity} </p>
          <p>$-{cart.price}</p>
        </div>
      ))}
      <>
        <h2>{totalPrice.toFixed(2)}</h2>
      </>
    </div>
  );
};

export default CartItems;
