import './confirm.scss';
import { useRef, useState, useEffect, useContext } from 'react';
import {Link, useParams, useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import { ProductContext } from '../ProductContextProvider/ProductContextProvider';
import { CartContext } from '../ProductContextProvider/ProductContextProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'

function Confirm() {

    window.scrollTo(0,0);
    const navigate = useNavigate();
    const {state}=useLocation() 
    const {emptyCart} = useContext(CartContext);
    //emptyCart();
    const handleHome = () => {navigate('/');};

    return(
        <section className='confirm'>
            <section className='confirm__container'>
                <article className='confirm__container-detail'>
                    <h4>your order has been placed</h4>
                    <div className='confirm__detail-track'>
                        <p className='confirm__detail-number'>Tracking Number: </p>
                        <h5 className='confirm__detail-number-data'>{state.id}</h5>
                    </div>
                    <h5>Estimated delivery with in 2 days</h5>
                </article>
                <section className='confirm__products'>
                    <article className='confirm__container-cart'>
                        {state.products.map(item => 
                                <CheckoutProduct cartProd={item} />
                                )}
                    </article>
                </section>
                <button className='confirm__btnHome' onClick={handleHome}>Go to Shopping</button>
            </section>
        </section>
    )
}

export default Confirm;