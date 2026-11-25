import React, { useState,useEffect } from 'react'
import Products from './Products'

const ProductApi = ({ search , selectedSession,setItemToCart}) => {

    const [product,setProduct]=useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(product => setProduct(product.recipes))
        
    },[]);

    

    const filteredProducts = product.filter((item) =>
        item.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    const filteredBySession = filteredProducts.filter((item) => {
  if (!selectedSession || selectedSession === 'All') return true;

  const combinedText = [item.name, ...item.tags, ...item.mealType]
    .join(' ')
    .toLowerCase();

  return combinedText.includes(selectedSession.toLowerCase());
});

  return (
    <div>
        <Products foodList={filteredBySession}  setItemToCart={setItemToCart}/>
        
    </div>
  )
}

export default ProductApi