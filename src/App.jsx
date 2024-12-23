import React from "react";
import { Route, Routes } from "react-router";
import Product from "./Shopping/Index";
import Dash from "./Shopping/Dash";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/dash/:id" element={<Dash />} />
      </Routes>
    </>
  );
};

export default App;
