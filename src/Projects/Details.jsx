import React, { useContext, useEffect } from 'react';
import { ProductContext } from './Context';
import { useParams } from 'react-router';

const Details = () => {
    const {id} = useParams();
    const {products,apiResponse,cartItems,addToCart} = useContext(ProductContext);
    useEffect(()=>{
        apiResponse();
    },[id,apiResponse])

    const product = products.find((item)=> item.id === parseInt(id))

    if(!product) return <div>Loading...</div>
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt="Product" width={300}/>
            <p style={{fontSize:"20px"}}>{product.description}</p>
            <p>$:{product.price}</p>
             <button style={{padding:"8px 16px",cursor:"pointer", backgroundColor:"black", border:"none", borderRadius:"10px",color:"white"}} onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Details;