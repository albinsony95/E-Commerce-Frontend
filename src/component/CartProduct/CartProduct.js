import { useState } from 'react';
import './cartProduct.scss'
import { useEffect, useContext } from 'react';

import QuantitySelector from '../QuantitySelector/QuantitySelector'
//import deleteIcon from '../../assets/icons/deleteIcon.png'
import deleteIcon from '../../assets/icons/deletesmall.png'
import { CartContext } from '../ProductContextProvider/ProductContextProvider';


function CartProduct({cartProd}) {
const [price,setPrice] = useState();
const { cart, addToCart, increaseQuantity, decreaseQuantity, subTotal, shipping, Total, removeFromCart } = useContext(CartContext);

const handleDeleteClick = () => {
    removeFromCart(cartProd.id);
}

    return(
        <section className='cartItem'>
            <section className='cartItem__container'>
                <article className='cartItem__container-imgbox'>
                    <img className='cartItem__container-imgbox-img' src={cartProd.thumbnail} alt="image" />
                </article>
                <article className='cartItem__details'>
                    <h5 className='cartItem__details--title'>{cartProd.title}</h5>
                    <p className='cartItem__details--quantity'>Quantity:{cartProd.quantity}</p>
                    {/* <QuantitySelector /> */}
                    <p className='cartItem__details--price'>${cartProd.quantity*cartProd.price}</p>
                    <div className='cartItem__delete'>
                        <img className='cartItem__deleteIcon' src={deleteIcon} onClick={handleDeleteClick} />
                    </div>
                </article>
                
            </section>
        </section>
    );
}

export default CartProduct;