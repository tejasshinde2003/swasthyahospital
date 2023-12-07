import React from "react";
import In from './In.jsx';
import Nav from "./Nav.jsx";
import Cashless from "./Cashless.jsx";
import Facilities from "./Facilities.jsx";
import Doctor from "./Doctor.jsx";
import Contact from "./Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function Main() {
    return (
        <>
            <Router>
                <Nav></Nav>
                <Routes>
                    <Route path="/In" element={<In></In>}></Route>
                    <Route path="/Contact" element={<Contact></Contact>}></Route>

                    <Route path="/Facilities" element={<Facilities></Facilities>}></Route>
                    <Route path="/doctors" element={<Doctor></Doctor>}></Route>
                    <Route path="/cashless" element={<Cashless></Cashless>}></Route>




                </Routes>
                <Footer></Footer>
            </Router>
        </>
    )
}