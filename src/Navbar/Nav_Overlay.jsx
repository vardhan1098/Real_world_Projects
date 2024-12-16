import React, { useContext, useState } from "react";
import "./Nav_OverLay.css";
import { productContext } from "../shoppingCart/Context/ContextData";
import { useNavigate } from "react-router";

function NavBar() {
  const [isNav, setIsNav] = useState(false);
  const handleOpen = () => {
    setIsNav(!isNav);
  };
  const handleCLose = () => {
    setIsNav(false);
  };
  const { cartItems } = useContext(productContext);
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <header>
        <h2>Shopify</h2>
        <div className="nav-icon" onClick={handleOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`${isNav ? "open" : ""}`}>
          {isNav && (
            <a onClick={handleCLose} className="closebtn">
              &times;
            </a>
          )}
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </nav>
        <div>
          <button
            style={{ fontSize: "20px", color: "black", cursor: "pointer" }}
            onClick={handleCart}
          >
            &#128722; {cartItems.length || 0}
          </button>
        </div>
      </header>
    </>
  );
}

export default NavBar;
{
  /* <>
    <Search isNav={isNav}/>
    </> */
}
