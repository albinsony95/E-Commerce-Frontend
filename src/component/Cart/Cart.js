import './cart.scss';
import React from'react'
import CartProduct from '../CartProduct/CartProduct'
import { useState, useEffect, useContext } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ProductContext } from '../ProductContextProvider/ProductContextProvider';
import { CartContext } from '../ProductContextProvider/ProductContextProvider';

function Cart() {
    window.scrollTo(0,0);
    const { cart, addToCart, increaseQuantity, decreaseQuantity, subTotal, shipping, Total } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => { navigate('/checkout');}
    
    
    return(
        <section className='cart'>
            {cart.length === 0 ? (
                <h5>Cart is empty</h5>
            ):(
            <React.Fragment>
            <h4 className='cart__heading'>Cart</h4>
            <section className='cart__container'>
                <section className='cart__container-items'>
                    {cart.map(item => 
                        <CartProduct cartProd={item} />
                        )}
                </section>
                <article className='cart__container-summaryBox'>
                    <div className='cart__container-summaryBox-subtot'>
                        <p className='cart__container-summaryBox--lblsubtotal'>Subtotal: </p>
                        <p className='cart__container-summaryBox--subtotal'>${subTotal}</p>
                    </div>
                    <div className='cart__container-summaryBox-subtot'>
                        <p className='cart__container-summaryBox--lblsubtotal'>Shipping Fee: </p>
                        <p className='cart__container-summaryBox--subtotal'>$7.99</p>
                    </div>
                    <div className='cart__container-summaryBox-subtot'>
                        <p className='cart__container-summaryBox--lblsubtotal'>Order Total: </p>
                        <p className='cart__container-summaryBox--subtotal'>{Total}</p>
                    </div>
                </article>
                <button className='cart__container--checkout' onClick={handleCheckout}>Checkout</button>
            </section>
            </React.Fragment>
            )}
        </section>
    )
}

export default Cart;