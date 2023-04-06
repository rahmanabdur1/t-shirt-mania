import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({house,ring}) => {
   
    return (
        <div>
            father
            <p>House: {house}</p>
            <section className='flex'>
                <Myself house={house} ring={ring}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;