import React from 'react';
import './Reviewitem.css'

const Reviewitem = ({product,handleRemoveFromCart}) => {
    const {id,img , price , name , quantity} = product;
    return (
        <div className='review-Item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p>{name}</p>
                <p>Price : <span className='orange'>${price}</span></p>
                <p> order quantity : <span className='orange'>{quantity}</span></p>

            </div>
            <button onClick={() => handleRemoveFromCart(id)}>delete</button>
            
        </div>
    );
};

export default Reviewitem;