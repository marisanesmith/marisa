import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";

function Header() {
    return (
      <Navbar collapseOnSelect expand="lg" className="color">
      <Link className="nav-link name" to="/"> Marisa NeSmith </Link> 
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight: "3%"}} />
<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" style={{marginLeft: "5%", marginRight: "5%"}}>
<Nav className="mr-auto" >
    <Nav.Link href="/">About</Nav.Link>
    <Nav.Link href="/contact">Contact</Nav.Link>
    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
    <Nav.Link href="/photography">Photography</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>   

)
}

export default Header
