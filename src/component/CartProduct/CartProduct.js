import { useState } from 'react';
import './cartProduct.scss'


function CartProduct({cartProd}) {
const [price,setPrice] = useState();

    return(
        <section className='cartItem'>
            <section className='cartItem__container'>
                <article className='cartItem__container-imgbox'>
                    <img className='cartItem__container-imgbox-img' src={cartProd.thumbnail} alt="image" />
                </article>
                <article>
                    <h5>{cartProd.title}</h5>
                    <p>Quantity:{cartProd.quantity}</p>
                    <p>${cartProd.quantity*cartProd.price}</p>
                </article>
                
            </section>
        </section>
    );
}

export default CartProduct;