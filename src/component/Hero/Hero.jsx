import './hero.scss'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

function Hero() {
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState(null); // Initialize as null or with a default value
    const url = 'http://localhost:8080/products';

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setProducts(response.data);
            //console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            setSingleProduct(products[3]);
            //console.log(products[0]);
        }
    }, [products]);

    return (
        <section className="hero">
            <article className="hero__infoContainer">
                {singleProduct && (
                    <div className='hero__infoContainer'>
                        <h3 className="hero__title">{singleProduct.title}</h3>
                        <p className="hero__description">{singleProduct.description}</p>
                    </div>
                )}
            </article>
            <article className="hero__imageBox">
                <img className="hero__image" alt="Product" src={singleProduct?.thumbnail} />
            </article>
        </section>
    );
}

export default Hero;
