import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container, } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
const Header = () => {
    return (
    <header>
<Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
    <Container>
      <LinkContainer to='/'>
        <Navbar.Brand >YourWallet</Navbar.Brand>
      </LinkContainer>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <LinkContainer to='/cart'>
          <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
          <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
        </LinkContainer>


        <LinkContainer to='/seeFinance'>
          <Nav.Link><i className='fas fa-wallet'></i>Finance</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/addFinance'>
          <Nav.Link><i className='fas fa-money-bill-wave-alt'></i>Add Finance</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/aboutUs'>
          <Nav.Link><i className='fas fa-user-astronaut'></i>About Us</Nav.Link>
        </LinkContainer>

        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>)
}

export default Header
