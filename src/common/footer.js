import React from "react";
import { Navbar,Container } from "react-bootstrap";
import logo from "../images/logo.png";
export function Footer(){

return(
    <>
    <Navbar bg="dark" variant="dark"  fixed="bottom">
    <Container>
      <Navbar.Brand >
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
     SUB GAMMING NEPAL
     
      </Navbar.Brand>
    </Container>
  </Navbar>
    
    </>
);


}