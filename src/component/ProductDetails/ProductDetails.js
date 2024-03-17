import './productDetails.scss';
import { useState, useEffect, useContext } from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import { ProductContext } from '../ProductContextProvider/ProductContextProvider';
//import QuantitySelector from '../QuantitySelector/QuantitySelector';
//import QuantitySelectorProdDetail from '../QuantitySelectorProdDetail/QuantitySelectorProdDetail';
import { CartContext } from '../ProductContextProvider/ProductContextProvider';


function ProductDetails() {
    const params=useParams();
    const [price, setPrice] = useState(0);
    const { addToCart } = useContext(CartContext); 
    const [selectedProduct,setSelectedProduct] = useState();
    const [Images,setImages] =useState([]);
    const [quantity, setQuantity] = useState(1);
    const {selectedProd,setSelectedProd} = useContext(ProductContext);
    const prodId=params.prodId ? params.prodId : selectedProd.id;
    const url=`http://localhost:8080/products/${prodId}`;

    useEffect(() => {
        if(prodId){
            axios.get(url).then((res)=> {
            setSelectedProduct(res.data);
            setImages(res.data.images);
        }).catch((error) => {
            console.log("error fetching product" +error);
        });
    }
    else{
        console.log("no ids found");
    }
    },[prodId]);
    useEffect(() => {
        if (selectedProduct) {
            setPrice(selectedProduct.price);
            setImages(selectedProduct.images);
        }
    }, [selectedProduct]);
    useEffect(() => {
        if (selectedProduct) {
            setPrice(selectedProduct.price * quantity);
        }
    }, [quantity]);

    if (!selectedProduct){
        return(
            <h5>Product is unavailable</h5>
        );
    } 
    const handleAddToCart = () => {
        addToCart({ ...selectedProduct, quantity  });
        console.log(quantity);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

return(
    <section className='detail'>
        <section className='detail__container'>
            <article className='detail__container-mainImgBox'>
                <img className='detail__mainImgBox--img' src={selectedProduct.thumbnail} alt="product Image" />
            </article>
            <article className='detail__container-subImgBox'>
                {Images.map(image => 
                    <div className='detail__subImgBox-imgbox'>
                        <img className='detail__subImgBox-imgbox--img' src={image} alt='sub image' />
                    </div>)
                }
            </article>
            <article className='detail__container-infobox'>
                <article className='detail__container-info'>
                    <h4 className='detail__container-info--title'>{selectedProduct.title}</h4>
                    <p className='detail__container-info--description'>{selectedProduct.description}</p>
                </article>
            </article>
            <article className='detail__container-info2'>
                <div className='detail__container-info2-quantity'>
                    <button onClick={handleDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>
                <div className='detail__container-info2-price'>
                    <p>${price}</p>
                </div>
            </article>
        </section>
        <button className='detail__addCartButton' onClick={handleAddToCart}>Add to Cart</button>
    </section>
)
}

export default ProductDetails;