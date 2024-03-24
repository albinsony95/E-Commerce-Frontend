import React from 'react'
import './header.scss';
import logo from '../../assets/logo/logo2.png';
import cartIcon from '../../assets/icons/shopping-cart.png' 
import {Link} from 'react-router-dom'
import { CartContext } from '../ProductContextProvider/ProductContextProvider';
import { useState, useEffect, useContext } from 'react';



function Header() {
    const { cart } = useContext(CartContext);
    const [count,setCount]=useState();
    useEffect(() =>{
        setCount(cart.length);
    })

  return (
    <section className='header'>
        <Link className='header__Link' to={'/'}>
            <div className='header__logoBox'>
                <img src={logo} alt="logo" />
            </div>
        </Link>
        <section className='header__tabSection'>
            <Link className='header__link' to={'/'}>
                <h4 className='header__menuItems'>Home</h4>
            </Link>
            <Link className='header__link' to={'/products'}> 
                <h4 className='header__menuItems'>Products</h4>
            </Link>
            <Link className='header__link' to={'/Cart'}>
                <div className='header__cartIcon'>
                    <img src={cartIcon} alt="cart Icon" />
                    <div className='header__cartCount'>{count}</div>
                </div>
            </Link>
        </section>
    </section>
  );
}

export default Header;
