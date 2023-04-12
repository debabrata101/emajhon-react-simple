import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitem from '../Reviewitem/Reviewitem';
import './Order.css'

const Oders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);
    const handleRemoveFromCart= (id) =>{
        console.log(id)
    }


    console.log(saveCart);
    return (
        <div className='shop-container'>
            <div className='Review-container'>
               {

                cart.map( product => <Reviewitem
                key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Reviewitem>)


               }
            </div>
            <div className='cards-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Oders;