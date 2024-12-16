import React from "react";
import "./index.css";

const MegaMenu = () => {
  return (
    <>
      <nav className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <div className="dropdown">
          <button className="dropbtn">
            Products
            <span className="caret">▼</span>
          </button>
          <div className="dropdown-content">
            <div className="menu-header">
              <h2>Product List</h2>
            </div>
            <div className="row">
              <div className="column">
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
              </div>
              <div className="column">
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
              </div>
              <div className="column">
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="content">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          id expedita voluptatem rem architecto officia blanditiis dolorum
          itaque placeat aspernatur eaque optio, distinctio praesentium modi a
          molestias corrupti totam beatae libero sunt nam commodi sed quia
          magni. Praesentium, inventore autem.
        </h3>
      </div>
    </>
  );
};

export default MegaMenu;
