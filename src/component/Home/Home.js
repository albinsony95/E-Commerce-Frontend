import React from 'react'
import Hero from '../Hero/Hero'
import BestProducts from '../BestProducts/BestProducts'
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState(null); // Initialize as null or with a default value
    const url = 'http://localhost:8080/products';

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <main className='main'>
        <Hero />
        <BestProducts products={products}/>
    </main>
  )
}

export default Home;
