import React from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init'
const Header = () => {
  const [user] =useAuthState(auth)
  const  handelSignOut =()=>{
    signOut(auth)
  } 
  
  
  return (
        <div>
    <Navbar  className='Navbar'   collapseOnSelect expand="lg" bg="" variant="dark">
  <Container>
  <Navbar.Brand as={Link}to="/home">Bike-Warehouse</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
    
    
   {    user ?    <button className='btn  text-white' onClick={handelSignOut}>sing out</button>
    :  <Nav.Link  as={Link} to='/login'   eventKey={2} href="">
     Login
      </Nav.Link>
}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;