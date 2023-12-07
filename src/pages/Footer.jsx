import React from "react";
export default function Footer() {
    return (
        <>
            <section className="mt-5 footer_back_color">
                <div className="container ">
                    <div className="row">
                        <div className="col-3">
                            <img src="https://www.swasthyahospital.com/img/footerlogo.png" alt="" />
                            <p className="mt-3 text_color">Wide range of medical services like diagnostic, treatment, speciality clinics, ICU units, emergency rooms & surgery.</p>
                            <p className="text_color"><i class="fa-solid fa-location-dot mr-3 mt-3 "></i>Annabhau Sathe Chowk, Laltaki, Ahmednagar 414001</p>
                            <p className="text_color"><i class="fa-solid fa-phone mt-3 mr-3"></i>0241 243 0530</p>
                            <p className="text_color"><i class="fa-solid fa-envelope mt-3 mr-3"></i>swasthyahospitalcashless@.co</p>
                        </div>

                        <div className="col-3">
                            <h2 className="text_color ml-3">Quick Links</h2>
                            <ul className="text_color mt-3  ">
                                <li className="d-inline-block mt-2">Home</li><br />
                                <li className="d-inline-block mt-2">Facilities</li><br />
                                <li className="d-inline-block mt-2">Doctors</li><br />
                                <li className="d-inline-block mt-2">Cashless</li><br />
                                <li className="d-inline-block mt-2">Contact Us</li><br />
                                <li className="d-inline-block mt-2">24/7 Support</li>
                            </ul>
                        </div>

                        <div className="col-3">
                            <h2 className="text_color   ">Facilities</h2>
                            <ul className="text_color mt-3 ">
                                <li className="d-inline-block mt-2">Cashless Facilities</li><br />
                                <li className="d-inline-block mt-2">Cath Lab</li><br />
                                <li className="d-inline-block mt-2">Opreation Theater</li><br />
                                <li className="d-inline-block mt-2">ICU</li><br />
                                <li className="d-inline-block mt-2">Cauallty</li><br />
                                <li className="d-inline-block mt-2">2D Echo</li>
                                <li className="d-inline-block mt-2">Stress Test</li>

                            </ul>
                        </div>
                        <div className="col-3">
                            <h2 className="text_color ml-3">Follow Us</h2>
                            <img src="https://scontent.fbom12-2.fna.fbcdn.net/v/t39.30808-6/405239236_660805756138239_3616750104936597972_n.jpg?stp=dst-jpg_p235x350&_nc_cat=109&ccb=1-7&_nc_sid=ab7367&_nc_ohc=Z3kq42HvjkoAX8lHl65&_nc_ht=scontent.fbom12-2.fna&oh=00_AfDQWZkcW6TVvzSkj_1UfmHJOcpvCrhbOwn7V0FQdU5jmg&oe=6576E4FB" className="link mt-3" alt="" />
                        </div>
                    </div>
                </div>

                <section className="footer_back_color2 mt-4" style={{'height':'130px'}}>
                    <div className="container   ">
                        <div className="row">
                            <div className="col-2 ">
                                <h4 className="text_color mt-5 font-weight-bold " >Follow Us:  </h4> </div>

                            <div className="col-3 mt-5">
                                <li className="d-inline-block   text-white  "><i class="fa fa-facebook mr-3"></i></li>
                                <li className="d-inline-block   text-white  "><i class="fa fa-twitter mr-3"></i> </li>
                                <li className="d-inline-block   text-white  "><i class="fa fa-youtube mr-3"></i> </li>
                            </div>
                            <div className="col-4">
                                <h4 className="text_color mt-5  ">Stay informed and healthy</h4>
                            </div>
                            <div className="col-3">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control mt-5 footer_back_color2 " placeholder=" enter your e-mail" />
                                    <div >
                                        <button class="btn btn-primary mt-5" type="button" id="button-addon2">SIGN UP!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-3" style={{'height':'50px'}}><p style={{ 'textAlign': 'center', 'color': 'gray' }}>Copyright @ 2021 Swasthya Hospital. All Rights Reserved.</p>
                </div>
            </section>
        </>
    )
}