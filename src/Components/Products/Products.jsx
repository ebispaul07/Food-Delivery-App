import React, { useState } from 'react'
import ProductApi from './ProductApi'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Products = ({foodList,setItemToCart}) => {


  const addToCart=(name)=>{
    console.log(name)
  }

  const handleAddToCart=(item)=>{
    
   setItemToCart((previousItem) => {
      const alreadyExists = previousItem.some((cartItem) => cartItem.id === item.id);
      if (alreadyExists) {
        return previousItem;
      }
      
      return [...previousItem, item];
      
    });
    
  }
    
    
  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '35px',
        padding: '20px',
      }}>
        
        
      {foodList.map((item) => (
        <Card style={{ width: '10rem' }} key={item.id}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className="fs-6 fw-bold">{item.name}</Card.Title>
        <Card.Text>
          Price: ${item.caloriesPerServing}
        </Card.Text>
        <Card.Text>
          Rating: {item.rating}
        </Card.Text>
        <Button onClick={()=>handleAddToCart(item)} variant="primary">Add to Cart</Button>
      </Card.Body> 
    </Card>
      ))}
    </div>
  )
}


export default Products