import React from 'react';
import "./Cart.css"

const Cart = ({cart, hanleRemove}) => {

    console.log(cart)

    return (
        <div>
            <h3>Card : {cart.length}</h3>

            <div className='cart-continer'>
                {
                    cart.map((bottle) => <div key={bottle.id}>
                         <img src={bottle.img} alt="" />
                         <button onClick={() => hanleRemove(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;