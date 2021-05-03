import React from 'react';
import './FooterPg.css';

function FooterPg() {
    return(
<footer>
<div class="flex-container">

<div class="flex-item" >
    <div class="ft-links">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>    
        </div>
    </div>

<div class="flex-item" >
    <div class="ft-logo">
        <img src="/assets/img/logo.png" />
        <p>We are young company always looking for new and fresh ideas to help you with our products in your everyday work.</p>
    </div>
    </div>

    <div class="flex-item" >
    <div class="ft-desc">
        <h4>Contact Us</h4>
        <p><span>Phone No.: </span> xxxx xxx xxx</p>
        <p><span>Email Id: </span>abc@gmail.com</p>
        <p><span>Address: </span>Mumbai (Maharashtra) India</p>
    </div>
    </div>

    
</div>
</footer>

);
}

export default FooterPg;