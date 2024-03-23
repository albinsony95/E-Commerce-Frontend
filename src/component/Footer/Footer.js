import React from 'react'
import './footer.scss';

function Footer () {
  return (
    <footer className='footer'>
        <section className='footer__container'>
            <h4 className='footer__title'>About Us</h4>
            <p className='footer__data'>Welcome to Pluton Enterprise, your trusted destination for quality products. Established in 2024, we have been dedicated to fast delivery quality products.
                We are committed to providing our customers with exceptional service, competitive prices, and a hassle-free shopping experience.
            </p>
        </section>
        <section className='footer__container'>
            <h4 className='footer__title'>Contact Us</h4>
            <div className='footer__data'>
                <p className='footer__data'>Pluton Enterprise</p>
                <p className='footer__data'>3245 Riverside Valley</p>
                <p className='footer__data'>Edmonton, AB</p>
                <p className='footer__data'>customersupport@pluton.ca</p>
                <p className='footer__data'>PH: 7802345678</p>
            </div>
        </section>
        <section className='footer__container'>
            <h4 className='footer__title'>Social</h4>
        </section>
        
    </footer>
  )
}

export default Footer;