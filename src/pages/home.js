import React from "react";
import {ListGroup,ListGroupItem,Card, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import pic from "../images/landscape.jpg";


export function Home(){

return (<>
  
  <Container>
  <Carousel variant="bright">
  <Carousel.Item>
    <img
      className="d-block w-40"
      src={pic}
      alt=""
    />
    <Carousel.Caption>
     
      <h5>SUB GAMING NEPAL</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-40"
      src={pic}
      alt=""
    />
    <Carousel.Caption>
      <h5>SUB GAMING NEPAL</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-40"
      src={pic}
      alt=""
    />
    <Carousel.Caption>
      <h5>SUB GAMING NEPAL</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>




  </>);
}