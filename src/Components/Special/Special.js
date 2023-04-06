import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house,setHouse] =useContext(RingContext)
    return (
        <div>
            Special
            <h5>Gift:{house}</h5>
            <button onClick={()=>setHouse(house+1)}>Increase</button>
        </div>
    );
};

export default Special;