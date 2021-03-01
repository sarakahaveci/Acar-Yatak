/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

 function Cards() {
    return (
      <> 
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.imgur.com/UDBoRJn.png" class="d w-100px" alt="first image"/>
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/UDBoRJn.png" class="d w-100" alt="second image"/>
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/9Xod440.png" class="d w-100" alt="third image"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

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
    <img class="card-img-top" src="https://i.imgur.com/Twt3aXt.png" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Acar </h5>
      <p class="card-text">Price is: </p>
    </div>
  </div>
</div>
</>    
)

}
export default Cards;