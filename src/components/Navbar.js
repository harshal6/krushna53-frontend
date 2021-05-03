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
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#client">Client</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">Contact Us</a>
            
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