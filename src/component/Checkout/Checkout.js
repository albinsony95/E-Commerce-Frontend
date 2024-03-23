import './checkout.scss';
import { useRef, useState, useEffect, useContext } from 'react';
import {Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ProductContext } from '../ProductContextProvider/ProductContextProvider';
import { CartContext } from '../ProductContextProvider/ProductContextProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'

function Checkout() { 
    window.scrollTo(0,0);
    const {cart,subTotal,shipping,Total,handleConfirm} = useContext(CartContext);
    const formRef =useRef();
    const navigate = useNavigate();
    const url = 'http://localhost:8080/products/placeOrder';
    const[resConfirm,setResConfirm]=useState();

        const HandleOrderSubmit = async (e) => {
            e.preventDefault();
            if (formRef.current.checkValidity()) {
                const { firstName, lastName, streetAddress1, city, zipcode, country } = formRef.current;
                const order = {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    streetAddress1: streetAddress1.value,
                    city: city.value,
                    zipcode: zipcode.value,
                    country: country.value,
                    products: cart,
                    subTotal: subTotal,
                    shipHandling: shipping,
                    Total: Total
                };
        
                try {
                    const response = await axios.post(url, order);
                    setResConfirm(response.data);
                    handleConfirm(response.data);
                    console.log(response.data);
                } catch (error) {
                    console.log("error fetching Id" + error);
                }

            } else {
                formRef.current.querySelector(':invalid').focus();
            }
        };

    const handleCartClick = () => {navigate('/cart');}

    return(
        <section className='checkout'>
            <h5>checkout</h5>
            <section className='checkout__container'>
                <section className='checkout__container-summary'>
                    <article className='checkout__container-cart'>
                    {cart.map(item => 
                            <CheckoutProduct cartProd={item} />
                            )}
                    </article>
                </section>
                <section className='checkout__container-shipdata'>
                    <article className='checkout__container-formbox'>
                        <h5 className='checkout__container-shipAddress'>Shipping Address</h5>
                        <form className='checkout__container-form' ref={formRef}>
                            <div className='checkout__form-inputbox'>
                                <input className='checkout__form--input' name="firstName" required="required"/>
                                <label className='checkout__form--lbl'>First Name*</label>
                            </div>
                            <div className='checkout__form-inputbox'>
                                <input className='checkout__form--input' name="lastName"  required="required"/>
                                <label className='checkout__form--lbl'>Last Name*</label>
                            </div>
                            <div className='checkout__form-inputbox'>
                                <input className='checkout__form--input' name="streetAddress1"  required="required"/>
                                <label className='checkout__form--lbl'>Street Address*</label>
                            </div>
                            <div className='checkout__form-inputbox'>
                                <input className='checkout__form--input' name="city"  required="required"/>
                                <label className='checkout__form--lbl'>City*</label>
                            </div>
                            <div className='checkout__form-inputbox'>
                                <input className='checkout__form--input' name="zipcode"  required="required"/>
                                <label className='checkout__form--lbl'>Zipecode*</label>
                            </div>
                            <div className='checkout__form-inputbox'>
                                <input className='checkout__form--input' name="country"  required="required"/>
                                <label className='checkout__form--lbl'>Country*</label>
                            </div>
                        <h5>payment method</h5>
                            <article className='checkout__container-form'>
                                <div className='checkout__form-inputbox'>
                                    <input className='checkout__form--input' name="CardholderName"  required="required"/>
                                    <label className='checkout__form--lbl'>CardHolder Name*</label>
                                </div>
                                <div className='checkout__form-inputbox'>
                                    <input className='checkout__form--input' name="CardNumber"  required="required"/>
                                    <label className='checkout__form--lbl'>Card Number*</label>
                                </div>
                                <div className='checkout__form-inputbox'>
                                    <input className='checkout__form--input' name="CVV"  required="required"/>
                                    <label className='checkout__form--lbl'>CVV*</label>
                                </div>
                            </article>
                        </form>
                    </article>
                </section>
                <article className='checkout__buttonHolder'>
                    <button className='checkout__form--btn' onClick={handleCartClick}>Back to Cart</button>
                    <button className='checkout__form--btn' onClick={HandleOrderSubmit}>Place Order</button>
                </article>
            </section>
        </section>
    )
}

export default Checkout;