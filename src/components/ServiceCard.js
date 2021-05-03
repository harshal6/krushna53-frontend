import React from 'react';
import './ServiceCard.css';

function ServiceCard() {
    return(
        <div class="service-section">
        <h2 class="heading">Services</h2> 

        <div class="flex-container">        

        <div class="flex-item" >   
        <div class="serviceBox">
            <img src="/assets/img/service1.jpg" alt="" />
            <div class="serviceContent">
            <h2 class="text">Service1</h2>
            <p class="desc-text">Lorem ipsum is a name for a common type of placeholder text. </p>
            </div>
        <h3>Service1</h3>
        </div>
        </div>

        <div class="flex-item" >   
        <div class="serviceBox">
        <img src="/assets/img/service2.jpg" alt="" />
            <div class="serviceContent">
            <h2 class="text">Service2</h2>
            <p class="desc-text">Lorem ipsum is a name for a common type of placeholder text. </p>
            </div>
        <h3>Service1</h3>
        </div>
        </div>

        <div class="flex-item" >   
        <div class="serviceBox">
        <img src="/assets/img/service1.jpg" alt="" />
            <div class="serviceContent">
            <h2 class="text">Service3</h2>
            <p class="desc-text">Lorem ipsum is a name for a common type of placeholder text. </p>
            </div>
        <h3>Service1</h3>
        </div>
        </div>


        </div>
        </div>
    );

}
export default ServiceCard;