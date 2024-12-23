import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProducts } from "./Actions/Action";

const Dash = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products = [], loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (!loading && products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, loading, products]);

  const productDetails = products.find((item) => String(item.id) === id);

  if (loading) {
    return <div>Loading..</div>;
  }
  if (!productDetails) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <h3>Product Details..</h3>
      <img src={productDetails.image} alt={productDetails || "product Name"}  width={200}/>
      <h3>$: {productDetails.price}</h3>
    </div>
  );
};

export default Dash;
