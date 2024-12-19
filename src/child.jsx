import React, { useState } from "react";
import App from "./App";

const Child = () => {
  const [state, setState] = useState(0); 

  return (
    <div>
      <h1>Hello from Parent</h1>
      <App state={state} setState={setState} />
    </div>
  );
};

export default Child;
