import React from 'react';
import Cousin from '../Cousin/Cousin';

const Anty = ({house}) => {
    return (
        <div>
            anty
            <p>house:{house}</p>
            <section className='flex'>
            <Cousin></Cousin>
            <Cousin></Cousin>
            </section>
        </div>
    );
};

export default Anty;