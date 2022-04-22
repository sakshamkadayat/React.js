import React from "react";
import {Nav,Container,Navbar} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export function Header()
{
  
return(

    <>
     <Navbar bg="dark" variant="dark">
    <Container>
            <Navbar.Brand to="#home">SUB GAMING NEPAL
        </Navbar.Brand>
        <Nav className="me-auto">
       
          <NavLink className="nav-link " to="/home">Home</NavLink>
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          
       
        </Nav>

        <Nav className="justify-content-end">
        <NavLink className="nav-link " to="/login">  Login</NavLink>
        <NavLink className="nav-link " to="/Register">Register</NavLink>
        
        </Nav>
        
    </Container>
  </Navbar>
    </>
)

}