import React from 'react';

import {Dropdown,FormControl,Navbar,Nav, Container ,Badge}from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import {useSelector} from 'react-redux'


function Header() {
       const state=useSelector((state)=>state.handleCart)
  return (




    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Collection World</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/About">About us</Nav.Link>
          </Nav>
          <Navbar.Text>
            <FormControl style={{width:500}} placeholder='search Products' className='m auto' />
            </Navbar.Text>
            <Nav>
            <Dropdown style={{padding:'10px'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FiShoppingCart />
      <Badge bg="secondary"  >{state.length}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu  style={{minWidth:370}}>
              <span style={{padding:'20px'}}>Cart i empty</span>
      </Dropdown.Menu>
    </Dropdown>
            </Nav>
        </Container>
      </Navbar>
      <br />
      <div>
     
      </div>
   
    </>


  )
}

export default Header