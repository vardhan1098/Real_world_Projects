import PropTypes from "prop-types";
import React from "react";

function InputForm({ type, value, onChange, name }) {
  return (
    <>
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder || "Enter the Text.."}
        value={value}
        onChange={onChange}
        style={style}
      />
    </>
  );
}
InputForm.PropTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  name: PropTypes.string,
};

export default InputForm;
