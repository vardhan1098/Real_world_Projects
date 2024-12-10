import React, { useState } from "react";
import Modal from "./Modal";

const Dash = ({ onClose }) => {
  const [isModal, setIsModal] = useState(false);
  const handleOpen = () => {
    setIsModal(true);
  };
  const handleClose = () => {
    setIsModal(false);
  };
  return (
    <div>
      <h2>Modal Example</h2>
      <button onClick={handleOpen}>Open</button>
      {isModal && <Modal onClose={handleClose} />}
    </div>
  );
};

export default Dash;
