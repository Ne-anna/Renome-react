import React from 'react';
import "./cart-drop-down.scss";

const CartDropDown = (props) => {

    return (
        <div className="cart">
            {props.cartData && props.cartData.map((post, index) => {
                return (
                    <div className="cart__item" key={index}>
                        <p className="cart__text">
                            {post.item}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default CartDropDown;
