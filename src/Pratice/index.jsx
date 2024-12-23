import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "./Redux/Action/Action";

const Redux = () => {
  const dispatch = useDispatch();

  // Correctly select state from ProductReducer
  const { products = [], loading, error } = useSelector(
    (state) => state.pro || {}
  );
  console.log("Redux State:", useSelector((state) => state.products));

  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Hello Redux+Project</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {!loading &&
          products.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default Redux;
