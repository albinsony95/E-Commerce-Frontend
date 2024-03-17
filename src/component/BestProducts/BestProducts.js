import './bestProducts.scss';
import { useState, useEffect, useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import {Link} from 'react-router-dom'
import axios from 'axios'

function BestProducts({products}) {
    const bestprod = products.slice(0,5);

    return(
        <section className='best'>
            <h2>Best Products</h2>
            <article className='best__list'>
                {bestprod.map(prod =>
                    <Link className='best__link' key={prod.id} to={`/products/${prod.id}`}>
                        <ProductCard
                            key={prod.id} 
                            bestProd={prod}
                        />
                    </Link>
                )}
            </article>
        </section>
    )
}

export default BestProducts;



    // const params=useParams();
    // const VideoId=params.videoId ? params.videoId : props.videoId;    
    // const url=`http://localhost:8080/products/${prodId}`;
    // const [prodId, setProdId]= useState(null);
    // const [selectedProd, setSelectedProd] = useState();
    // useEffect(() => {
    //     if(prodId){
    //         axios.get(url).then((res)=> {
    //             setSelectedProd(res.data);
    //         }).catch((error) => {
    //             console.log("error fetching product" + error);
    //         })
    //     }
    //     else {
    //         console.log("no id found");
    //     }
    // },[prodId]);

    // if(!selectedProd) { return(''); }
    
    // const handleProdSelect = (prodId) => {
    //     setProdId(prodId);
    // }