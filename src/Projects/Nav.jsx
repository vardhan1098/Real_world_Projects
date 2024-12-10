import React, { useContext } from "react";
import { ProductContext } from "./Context";
import { useNavigate } from "react-router";

const Nav = () => {
  const { cartItems } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleCart = () =>{
    navigate("/cart")
  }

  const totalItems = cartItems.reduce((acc,item)=> acc + item.quantity,0)
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "peru",
      }}
    >
      <h3>ShopWise</h3>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>
        <button
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            backgroundColor: "black",
            border: "none",
            borderRadius: "10px",
            color: "white",
          }}
          onClick={handleCart}
        >
          Cart - {totalItems || 0}
        </button>
      </div>
    </header>
  );
};

export default Nav;
