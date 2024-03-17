import React from 'react'
import './header.scss';
import logo from '../../assets/logo/logo2.png';
import cart from '../../assets/icons/shopping-cart.png' 
import {Link} from 'react-router-dom'


function Header() {
  
  return (
    <section className='header'>
        <div className='header__logoBox'>
            <img src={logo} alt="logo" />
        </div>
        <section className='header__tabSection'>
            <Link className='header__link' to={'/'}>
                <h4 className='header__menuItems'>Home</h4>
            </Link>
            <Link className='header__link' to={'/products'}> 
                <h4 className='header__menuItems'>Products</h4>
            </Link>
            <div className='header__cartIcon'>
                <img src={cart} alt="cart Icon" />
            </div>
        </section>
    </section>
  );
}

export default Header;
