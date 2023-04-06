import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

import { toast } from 'react-toastify'

import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const tshirtS=useLoaderData()
    const [cart, setCart] = useState([])
    const [disabled, setDisabled]=useState(false)
    const handleAddToCart= tshirt=>{
        const exist =cart.find(ts=>ts._id === tshirt._id)
        if(!exist){
            const newCart =[...cart,tshirt]
            setCart(newCart)
             setDisabled(true)
             toast.warning('Order Pleased!',{autoClose:500})
        }else{
            toast.warning('Order Pleased!',{autoClose:500})
        }
        
      
    }
   

    const handleRemoveItem=tshirt=>{
      const remaining=cart.filter(ts=> ts._id!==tshirt._id)
      setCart(remaining)
    }
    return (
       <div className='home-container'>
         <div className='t-shirt-container'>
           
            {
                tshirtS.map(tshirt => <Tshirt
                key={tshirt.id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                disabled={disabled}
                ></Tshirt>)
            }
        </div>
        <div className='cart-container'>
        <Cart cart={cart}   handleRemoveItem={handleRemoveItem}/>
     
        </div>
       </div>
    );
};

export default Home;