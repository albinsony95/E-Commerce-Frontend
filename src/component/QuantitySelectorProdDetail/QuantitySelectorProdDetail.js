import React, { useState } from 'react';

function QuantitySelector({ onQuantityChange }) {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
        onQuantityChange(quantity + 1);
    };

    return (
        <div className="quantity-selector">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantitySelector;
