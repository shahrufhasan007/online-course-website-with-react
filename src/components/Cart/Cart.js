import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = (cart.reduce((total, courses) => total + courses.price, 0)).toFixed(2);
    return (
        <div>
            <hr/>
            <h5>Courses Enrolled : {cart.length} </h5>
            <hr/>
            <h5>Total Price : $ {totalPrice}</h5>
            <hr/>
            <button className="btn btn-info">Checkout</button>
        </div>
    );
};

export default Cart;