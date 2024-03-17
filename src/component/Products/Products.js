import './Products.scss';
import { useState, useEffect, useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import {Link} from 'react-router-dom'
import axios from 'axios'

function Products () {

    const[products,setProducts]=useState([]);
    //const [selectedProd, setSelectedProd]=useState([]);
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
    
return(
    <section className='products'>
        {products.map(prod =>
                    <Link className='best__link' key={prod.id} to={`/products/${prod.id}`}>
                        <ProductCard
                            key={prod.id} 
                            bestProd={prod}
                            // handleProdSelect={handleProdSelect}
                        />
                    </Link>
                )}
    </section>
)
}
export default Products;