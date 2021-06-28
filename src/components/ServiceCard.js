import React, { useState } from "react";
import axios from "axios";
import './ServiceCard.css';

function ServiceCard() {
    const [data, setData] = useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios({
      method: "get",
      url: "/assets/data/servicecards.json",
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  };
    return(
        <div className="service-section">
        <h2 className="heading">Services</h2> 

        <div className="flex-container">        
        {data.map((item, index) => (
        <div className="flex-item" >   
        <div className="serviceBox">
        <img src={item.img} alt="item" />
            <div className="serviceContent">
            <h2 className="text">{item.title}</h2>
            <p className="desc-text"> 
                {item.description}
                {"{"}" "{"}"}
            </p>
            </div>
        <h3>{item.title}</h3>
        </div>
        </div>
        ))}

        </div>
        </div>
    );

}
export default ServiceCard;