import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
        <Carousel>
      <Carousel.Item style={{height:'60vh'}}>
        <img
          className="d-block w-100"
          src="./images/Slide12.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pick your Procuts</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'60vh'}}>
        <img
          className="d-block w-100"
          src="./images/slide21.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Fast Delivery</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'60vh'}}>
        <img
          className="d-block w-100"
          src="./images/slide32.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Choose to Order Now</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home