import React from "react";
 
import './style.css';
export default function In(){
  return(
    <>
     
    <div className="container-fluid ">
        <div className="row">
            <div className="col-12 p-0">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.swasthyahospital.com/img/slider/slide4-2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.swasthyahospital.com/img/slider/slide4-4.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.swasthyahospital.com/img/slider/slide4-1.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
 <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
            </div>
        </div>
    </div>
    </>
  )
}