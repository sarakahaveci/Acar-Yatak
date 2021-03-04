/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import React from 'react'


 function Cards() {
    return (
     <>  
     <Carousel className="carousel" >
  <Carousel.Item interval={1000}>
    <img
      className="d-block mx-auto"
      src="https://i.imgur.com/4kZFFp9.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={700}>
    <img
      className="d-block mx-auto"
      src="https://i.imgur.com/BuNGcJI.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block mx-auto"
      src="https://i.imgur.com/UDBoRJn.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  

      <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://i.imgur.com/AMG4gMl.png" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Lale</h5>
      <p class="card-text">Price is:</p>

    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://i.imgur.com/IqK8FMe.png" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Comfort</h5>
      <p class="card-text">Price is: </p>
     
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://i.imgur.com/8t98laF.png" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Acar </h5>
      <p class="card-text">Price is: </p>
    </div>
  </div>
</div>
</>    
);
}
export default Cards;