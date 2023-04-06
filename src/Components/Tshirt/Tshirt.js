import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,handleAddToCart}) => {
    const{picture,name,price}=tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt=""/>
            <p>{name}</p>
            <p>Price:{price}</p>
            <button  onClick={()=>handleAddToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;