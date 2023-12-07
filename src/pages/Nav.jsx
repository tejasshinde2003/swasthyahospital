import React from "react";
 
import './style.css';
import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <>
            <div className="container-fluid background_color d-none d-md-block ">
                <div className="row">
                    <div className="col-8">
                        <ul>
                            <li className="d-inline-block mt-2 mr-2 text-white " ><i class="fa-solid fa-envelope mr-1"></i>swasthyahospitalcashless@gmail.com </li>
                            <li className="d-inline-block mt-2 mr-2 text-white  "><i class="fa-solid fa-phone mr-1"></i> Call: 0241 243 0530 </li>
                            <li className="d-inline-block mt-2 mr-2 text-white  "><i class="fa-solid fa-clock mr-1"></i>Emergency 24 x 7</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li className="d-inline-block mt-2 mr-2 text-white " > Marathi | English </li>
                            <li className="d-inline-block mt-2 mr-2 ml-3 text-white  "><i class="fa fa-facebook mr-3"></i></li>
                            <li className="d-inline-block mt-2 mr-2 text-white  "><i class="fa fa-twitter mr-3"></i> </li>
                            <li className="d-inline-block mt-2 mr-2 text-white  "><i class="fa fa-youtube mr-3"></i> </li>

                        </ul>
                    </div>

                </div>
            </div>
            <div className="container-fluid mb-2">
                <div className="row">
                    <div className="col-5 col-md-4 ">
                        <img src="https://www.swasthyahospital.com/img/logo.png " className="mt-2 ml-5" alt="" />
                    </div>

                    <div className="col-7 col-md-6 mt-3  ">

                        <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-end  ">
                             
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                    <NavLink className="nav-link" to='/In'>Home</NavLink>
                                
                                    </li>
                                    <li class="nav-item dropdown">
                                    <NavLink className="nav-link" to='/department'>Department</NavLink>

                                        
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Cardiology</a>
                                            <a class="dropdown-item" href="#">Obstetrics & Gynaecology</a>
                                            <a class="dropdown-item" href="#">  Medicine</a>

                                        </div>
                                    </li>
                                    <li class="nav-item active">
                                          
                                         <NavLink className="nav-link" to='/Facilities'>Facilities</NavLink>
                                    </li>
                                    <li class="nav-item active">
                                    <NavLink className="nav-link" to='/Doctors'>Doctors</NavLink>

                                        
                                    </li>
                                    <li class="nav-item active">
                                    <NavLink className="nav-link" to='/Cashless'>Cashless</NavLink>
                                         
                                    </li>
                                    <li class="nav-item active">
                                    <NavLink className="nav-link" to='/Contact'>Contact</NavLink>

                                         
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="col-2 d-none d-md-block">
                        <button className="btn btn-lg btn_color mt-3">APPONTMENT</button>
                    </div>

                </div>
            </div>

        </>
    )

}