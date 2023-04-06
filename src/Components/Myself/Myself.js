import React from 'react';
import Special from '../Special/Special';

const Myself = ({house,ring}) => {
    return (
        <div>
            myself
            <p>house:{house}</p>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;