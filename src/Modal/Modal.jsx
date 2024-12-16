import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2>Hello Modal</h2>
      <button onClick={handleOpen} style={styles.btn}>Open Modal</button>
      {isOpen && <PopUp handleClose={handleClose} />}
    </div>
  );
};

const PopUp = ({ handleClose }) => {
  return (
    <div style={styles.container}>
      <div style={styles.backdrop} onClick={handleClose}></div>
      <div style={styles.overlay}>
        <h2>Hey, it's a PopUp!</h2>
        <div>
          <button style={styles.btn} onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 2,
  },
  overlay: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    maxWidth: "400px",
    width: "100%",
  },
  btn: {
    padding: "7px 15px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px",
  },
};

export default Modal;
