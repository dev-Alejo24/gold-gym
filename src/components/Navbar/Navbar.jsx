import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBs from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
 
    <NavbarBs bg="dark" variant="dark">
    <Container fluid>
        <NavbarBs.Brand href="#home">Distri Rivera</NavbarBs.Brand>
        <Nav className="nav-container justify-content-evenly">
            <Nav.Item>
                <Link to='/' style={{color:'#fff', textDecoration: 'none'}}> Home </Link>
            </Nav.Item>
            {/*<Nav.Item>
                <Link to='/venta' style={{color:'#fff', textDecoration: 'none'}}> Vender</Link>
            </Nav.Item>*/}
            <Nav.Item>
                <Link to='/create' style={{color:'#fff', textDecoration: 'none'}}> Agregar </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to='/show' style={{color:'#fff', textDecoration: 'none'}}> Lista </Link>
            </Nav.Item>
        </Nav>
    </Container>
</NavbarBs>

  )
}

export default Navbar