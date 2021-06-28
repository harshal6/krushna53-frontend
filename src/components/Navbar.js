import React, { useState } from 'react';
import '../style.css';
import ReorderIcon from "@material-ui/icons/Reorder";
import IMAGES from './Image';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    return (
    <div className="Navbar">
    <div className="rightSide"> <img src={IMAGES.LOGO} alt="logo" /></div>
      <div className="leftSide">
     <div className="links" id={showLinks ? "hidden" : ""}>
            <a href="#home">Home</a><hr></hr>
            <a href="#services">Services</a><hr></hr>
            <a href="#about">About Us</a><hr></hr>
            <a href="#blog">Blog</a><hr></hr>
            <a href="#client">Client</a><hr></hr>
            <a href="#testimonial">Testimonial</a><hr></hr>
            <a href="#contact">Contact Us</a><hr></hr>
            
            </div>
             <button onClick={() => setShowLinks( !showLinks)}> 
            {" "}
            <ReorderIcon />
            </button>
            
        </div>
         
    </div>
    );
}
export default Navbar;