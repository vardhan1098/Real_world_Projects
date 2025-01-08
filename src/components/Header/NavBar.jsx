import React from "react";

const NavBar = () => {
  return (
    <header
      style={{
        padding: "10px",
        background: "#809D3C",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h2>ChatHub</h2>
      <div>
        <button
          style={{
            padding: "8px 14px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "blueviolet",
            color: "white",
            cursor: "pointer",
          }}
        >
          user
        </button>
      </div>
    </header>
  );
};

export default NavBar;
