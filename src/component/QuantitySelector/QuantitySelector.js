import React, { useContext } from 'react';
import './quantitySelector.scss'
import { CartContext } from '../ProductContextProvider/ProductContextProvider'; // Assuming you have a context for managing the cart

function QuantitySelector({ productId }) {
    const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const itemInCart = cart.find(item => item.id === productId);
    const quantity = itemInCart ? itemInCart.quantity : 0;

    const handleAddToCart = () => {
        if (itemInCart) {
            increaseQuantity(productId);
        } else {
            addToCart({ id: productId, quantity: 1 });
        }
    };

    return (
        <div className="quantity-selector">
            <button onClick={decreaseQuantity.bind(null, productId)}>-</button>
            <span>{quantity}</span>
            <button onClick={handleAddToCart}>+</button>
        </div>
    );
}

export default QuantitySelector;
