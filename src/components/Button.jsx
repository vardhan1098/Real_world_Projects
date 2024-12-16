import React from "react";

const CommonButton = ({
  disabled = false || null,
  buttonText = buttonText || "button",
}) => {
  return (
    <button
      disabled={disabled}
      
      style={{
        padding: "7px 14px",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {buttonText}
    </button>
  );
};

export default CommonButton;
