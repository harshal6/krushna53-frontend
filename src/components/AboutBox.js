import React from 'react';
import './AboutBox.scss';

function AboutBox(props) {
    return(
        <div class="abt row">
        <div class="column aboutBox"  >       
            <img src={props.src} height={props.height} width={props.width}/>
        </div>
        <div class="column aboutContent">
            <h2>{props.heading}</h2>
            <p>{props.description} </p>
            <button>Read More</button>
        </div>

        </div>
    );

}
export default AboutBox;