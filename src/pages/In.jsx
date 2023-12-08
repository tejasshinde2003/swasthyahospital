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

    <section>
            <div className="container card-container">
                <div className="row">
                <div className="col-md-3">
                    <div className="card w-18 card1 ">
                        <div className="card-body">
                        <h1 className="card-title"><i class="fa-solid fa-user-doctor"></i></h1>
                        <h4 className="pt-4 pb-3">Modern Hospital</h4>
                        <p>Provide advanced & scientific, curative, preventive healthcare.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card w-18 card2">
                        <div className="card-body">
                        <h1 className="card-title"><i class="fa-solid fa-user-doctor"></i></h1>
                        <h4 className="pt-4 pb-3">Expert Doctors</h4>
                        <p>Give you the best treatment to cure your diesase</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card w-18 card1">
                        <div className="card-body">
                        <h1 className="card-title"><i class="fa-solid fa-user-doctor"></i></h1>
                        <h4 className="pt-4 pb-3">Cardiac Ambulance</h4>
                        <p>Patients suffering from cardiac diseases.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card w-18 card2">
                        <div className="card-body">
                        <h1 className="card-title"><i class="fa-solid fa-user-doctor"></i></h1>
                        <h4 className="pt-4 pb-3"> Emergency</h4>
                        <p>We work 24*7 to provide quality care at every moment</p>
                        </div>
                    </div>
                </div>
             </div>             
             </div>
   </section>
    </>
  )
}