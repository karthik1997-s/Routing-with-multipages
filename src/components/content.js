import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";



function Content() {
        const navigate = useNavigate();
        const [data, setData] = useState([])
        const[filter,SetFilter]=useState(data)
        const[loadding,setLoadding]=useState(false)
        let componentMounted = true;

      useEffect(() => {
      const getProducts= async()=>{
        setLoadding(true);
        const response = await fetch('https://fakestoreapi.com/products')
        
        if(componentMounted){
                setData(await response.clone().json() );
                SetFilter(await response.json());
                setLoadding(false)
        }
      
      
        return () => {
                 
        }
}
        getProducts();
      }, [])


 const Loading = ()=>{
        return(
                <>
                Loadding.....
                 </>
        )
      }

const filterProduct= (cat)=>{
        const updatedList = data.filter((x)=>x.category === cat)
        SetFilter(updatedList)
}
 const ShowProducts =()=>{
        return(<>
                <div>
                <Button variant="outline-secondary" onClick={()=>SetFilter(data)}>All</Button>{' '}
                <Button variant="outline-secondary" onClick={()=>filterProduct("men's clothing")}>Mens Clothing</Button>{' '}
                <Button variant="outline-secondary" onClick={()=>filterProduct("women's clothing")}>Womens CloThing</Button>{' '}
                <Button variant="outline-secondary" onClick={()=>filterProduct("jewelery")}>jewelerys</Button>{' '}
                <Button variant="outline-secondary" onClick={()=>filterProduct("electronics")}>Electronics</Button>{' '}
                <br/>
                  </div>
                        <Row xs={1} md={4} className="g-4">
                        {Array.from({ length: 1 }).map((_, idx) => (
                          filter.map(product=> {
                         return   <Col>
                            <Card>
                              <Card.Img variant="top" src={product.image} style={{height:'50vh'}} />
                              <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                 {product.category}
                                </Card.Text>
                                <Card.Text>
                                 ${product.price}
                                </Card.Text>
                                 <Button variant="primary" onClick={()=>navigate(`/products/${product.id}`)} >Add to Cart</Button>
                              </Card.Body>
                            </Card>
                          </Col>
                          })
                       
                        ))}
                      </Row>
                      </>
        )
    
      }

  return (
        <>
        <div >
         <h1 style={{textAlign:'center'}}>Latest Products</h1>
         <hr/>
         <div>
         {loadding  ?<Loading />:<ShowProducts/> }
         </div>
         
        </div>


      
        
        
        </>
   
  )

}

export default Content