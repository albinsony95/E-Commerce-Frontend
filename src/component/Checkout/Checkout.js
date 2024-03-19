import './checkout.scss';
import { useState, useEffect, useContext } from 'react';
import {Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ProductContext } from '../ProductContextProvider/ProductContextProvider';
import { CartContext } from '../ProductContextProvider/ProductContextProvider';

function Checkout() {
    return(
        <section className='checkout'>
            <h5>checkout</h5>
        </section>
    )
}

export default Checkout;