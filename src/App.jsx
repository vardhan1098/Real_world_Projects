import React from "react";
import { Route, Routes } from "react-router";
import Dash from "./shoppingCart/Dash";
import Details from "./shoppingCart/Details";
import NavBar from "./Navbar/Nav_Overlay";
import Cart from "./shoppingCart/Cart";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
