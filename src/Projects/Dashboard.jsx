import React, { useContext } from 'react';
import { ProductContext } from './Context';
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const {products} = useContext(ProductContext);
    const navigate = useNavigate();

    const handleNext = (id) =>{
        navigate(`/details/${id}`)
    }

    return (
        <div>
            <h2>Hello Products</h2>
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {
                products.map((product)=>(
                    <div style={{border:"1px solid black", flex:"1 0 32.333%",justifyContent:"center",alignItems:"center"}} onClick={()=>{handleNext(product.id)}} key={product.id}>
                        <img src={product.image} width={200} alt="" />
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Dashboard;