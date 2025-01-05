import React, { useState } from "react";
import Chlid from "./chlid";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleUpdate = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={handleUpdate}>Increase</button>
      <Chlid count={5} />
    </div>
  );
};

export default Counter;
