import React, {useEffect} from 'react';
import axios from 'axios'
import {useSelector} from 'react-redux';    
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state)=>state);

    const fetchproducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Connexion error", err)
        });
        console.log(response.data);
    }

    useEffect(()=>{
        fetchproducts();
    }, []);

    console.log(products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
