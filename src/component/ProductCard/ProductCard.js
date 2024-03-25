import './productCard.scss'
import { useContext } from 'react';
import {ProductContext} from '../ProductContextProvider/ProductContextProvider'

function ProductCard ({bestProd}) {
    const{productHandleSelect,setSelectedProd} = useContext(ProductContext);
    const clickHandler = () => {
        productHandleSelect(bestProd);
    }
    
    return(
        <section className='card' onClick={clickHandler}>
            <article className='card__imgbox'>
                <img className='card__img' src={bestProd.thumbnail} />
            </article>
            <article className='card__detailsBox'>
                <h4 className='card__detailsBox--title'>{bestProd.title}</h4>
                <div className='card__detailsBox-pricebox'>
                    <span className='card__detailsBox--dollar'>$</span>
                    <p className='card__detailsBox--price'>{bestProd.price}</p>
                </div>
            </article>
        </section>
    )
}
export default ProductCard;