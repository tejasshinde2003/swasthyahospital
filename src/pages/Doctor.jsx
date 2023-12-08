import React, { useEffect, useState } from "react";
 
 
 
export default function Doctor() {
    const [drdata, setdrdata]=useState([]);
    useEffect(()=>{
             setdrdata(
                [
                    {
                        "name":"Dr. Abhijit Pathak",
                        "position":"Consultant Cardiologist",
                        "certificate":"M.D (medicine), D.N.B, D.M (Cardiology)",
                        "img":"https://www.swasthyahospital.com/img/team/team22.png"
                    },
                    {
                        "name":"Dr. Renuka A Pathak",
                        "position":"Consultant Obstetrician, Gynaecologist",
                        "certificate":"M.D , DNB (OBGYN) Obstetrics and Gynaecology",
                        "img":"https://www.swasthyahospital.com/img/team/team23.png"
                    },
                    
                ]
             )

    },[])
    return (
        <>
             
            <div className="container-fluid ">
                <div className="row">
              
                    <div className="col-12 p-0 doctor_page_banner">
                        <h1 className="ml-4k mt-5 ml-5">All Doctors</h1>
                        <ul className="ml-4">
                            <li className="d-inline-block">Home</li>
                            <li className="d-inline-block mr-2 ml-2"><i class="fa-solid fa-arrow-right"></i></li>
                            <li className="d-inline-block">Doctors</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className=" mt-5  " >
                <div className="container ">
                    <div className="row card_color">
                    {drdata.map((item)=>{
                     return(
                        <>
                         <div className="col-md-6 ">
                            <div className="row ml-2">
                                <div className="col-4">
                                    <img src= {item.img} className="mt-5 img_circle" alt="" />
                                </div>
                                <div className="col-8">
                                    <h1>{item.name}</h1>
                                    <p>{item.position}</p>
                                    <h5 className="blue_color">{item.certificate}</h5><br/>
                                    <button className="btn btn-outline-primary">View Profile</button><br/><br/>
                                    <button className="btn btn-primary">Make an Appointment</button>
                                </div>
                            </div>
                        </div>
                        </>
                     )
                    })}
            
                    </div>
                </div>
               
                       
                   
                
                  
            </section>
             
        </>
    )
}