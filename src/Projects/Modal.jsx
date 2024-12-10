import React, { useState } from "react";

const Modal = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left:"0",
        width: "100%",
        height: "100vh",
        backgroundColor: "gray",
        opacity: "1",
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000",
      }}
    >
      <h1> Are You Sure want to Delete This..</h1>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          aliquam quas dolores quos ea provident atque impedit ipsam repudiandae
          dignissimos sequi iure consequatur vel, facere nobis repellat dicta!
          Ipsum, velit.
        </p>
        <>
          <button
            style={{
              padding: "7px 16px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "10px",
            }}
          >
            OK
          </button>
          <button
            style={{
              padding: "7px 16px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "10px",
            }}
            onClick={onClose}
          >
            CANCEL
          </button>
        </>
      </div>
    </div>
  );
};

export default Modal;
