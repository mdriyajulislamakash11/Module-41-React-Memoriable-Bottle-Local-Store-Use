import React from 'react';
import "./Bottle.css"

const Bottole = ({bottole, handleAddToCard}) => {

    const {name, img, price} = bottole;

    return (
        <div className='bottole'>
            <h3>bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCard(bottole)}>Purchase</button>
        </div>
    );
};

export default Bottole;