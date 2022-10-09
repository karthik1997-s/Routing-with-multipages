import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ADD, REMOVE } from '../redux';

const Product =()=> {
        const{id}=useParams();
        const[product,setProduct]=useState([])
        const[loading,setLoading]=useState(false)

        const dispatch = useDispatch()
        const removeProduct=(product)=>{
                dispatch(REMOVE(product))
        }
        const addProduct =(product)=>{
                dispatch(ADD(product))
        }
        useEffect(() => {
           const getProduct=async()=>{
                setLoading(true);
                const response =await fetch(`https://fakestoreapi.com/products/${id}`);
                setProduct(await response.json());
                setLoading(false)

           }
        
         getProduct();
        }, []);
          
  const Loading =()=>{
        
        return(
                <>
                Loading.....
                </>
        )
  }
 
  const ShowProduct=()=>{
   return(
        <>
        <div style={{textAlign:'left'}} >
        
      <Card.Img variant="top" src={product.image} style={{width:'30vh'}}/>
      <Card.Body>
        <Card.Title >{product.title}</Card.Title><br/>
        <Card.Title>
                Category:  {product.category}
        </Card.Title>
        <br />
        <Card.Text>
                {product.description}
        </Card.Text>
        <Card.Text>
             Rating: {product.rating && product.rating.rate} <i className='fa fa-star'></i>
        </Card.Text>
        <Card.Body>
        ${product.price} 
        </Card.Body>
        <Button variant="outline-primary" onClick={()=>addProduct(product)}>Add to Cart</Button>
      <Button  variant='outline-danger' style={{margin:'5px'}} onClick={()=>removeProduct(product)}>Remove to cart</Button>
      </Card.Body>
      
  
        </div>
        </>
   )

  }

  return (
    <div className='container py-3'>
        <div className='Row py-3' > 
        {loading? <Loading />:<ShowProduct />}

        </div>

    </div>
  )
}

export default Product