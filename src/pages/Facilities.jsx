import React from "react";
 
export default function Facilities(){
    return(
        <>
         
          <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 p-0 doctor_page_banner">
                        <h1 className="ml-4k mt-5 ml-5">All Doctors</h1>
                        <ul className="ml-4">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block mr-2 ml-2"><i class="fa-solid fa-arrow-right"></i></li>
                            <li className="d-inline-block">Facilities</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="">
                 <div className="container">
                    <div className="row ">
                        <div className="col-4   "><img src="https://www.swasthyahospital.com/img/gallery/cashless.jpg" className="card-body" alt="" /> </div>
                        
                        <div className="col-4  "><img src="https://www.swasthyahospital.com/img/gallery/cath%20lab.JPG" className="card-body" alt="" /></div>
                        <div className="col-4  "><img src="https://www.swasthyahospital.com/img/gallery/opreation%20theater.JPG" className="card-body" alt="" /></div>   
                    </div>
                    <div className="row ">
                        <div className="col-4  "><img src="https://www.swasthyahospital.com/img/gallery/icu.JPG" className="card-body" alt="" /></div>
                        <div className="col-4  "><img src="https://www.swasthyahospital.com/img/gallery/minor%20ot.JPG" className="card-body" alt="" /></div>
                        <div className="col-4  "><img src="https://www.swasthyahospital.com/img/gallery/2D%20echo.JPG" className="card-body" alt="" /></div>   
                    </div>
                    <div className="row ">
                        <div className="col-4  "><img src="https://www.swasthyahospital.com/img/gallery/stress%20test.JPG" className="card-body" alt="" /></div>
                        <div className="col-4  "><img src="https://www.swasthyahospital.com/img/gallery/casualty.JPG" className="card-body" alt="" /></div>
                        <div className="col-4  "><img src="https://www.swasthyahospital.com/img/gallery/new%20opd.JPG" className="card-body" alt="" /></div>   
                    </div>
                 </div>
            </section>
        
        </>
    )
}