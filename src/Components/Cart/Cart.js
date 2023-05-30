import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at lest one item</p>
    } else if (cart.length === 1) {
        message = <h3>Aamer jonno neu</h3>
    }

    else {
        message = <p>Thanks for buying</p>
    }


    return (
        <div className='cart'>
            <h5 className={cart.length === 2 ? `orange` : 'purple'}>Order Summary</h5>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : "yellow"}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)

            }

            {
                message
            }
            {cart.length === 3 ? <p>Tinta jonke gift du?</p> : <p>kino kino</p>}


            <p>And Operator</p>
            {
                cart.length === 2 && <h3>Double item</h3>
            }


            <p>Or Operator</p>
            {cart.length === 4 || <p>Charta item na</p>}

        </div>
    );
};

export default Cart;