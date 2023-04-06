import React, { createContext, useState } from 'react';
import  './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';


export const RingContext= createContext('Ring')
const Grandpa = () => {
    
const [house, setHouse]=useState(1)

    return (
     <RingContext.Provider value={[house, setHouse]}>
           <div className='grandpa'>
              <h2>Grandpa</h2>
               <section className='flex'>
                <Father house={house} ></Father>
                <Uncle house={house}></Uncle>
                <Anty house={house}></Anty>
            </section>
            
        </div>
     </RingContext.Provider>
    );
};

export default Grandpa;