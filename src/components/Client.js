import React, { useState } from "react";
import axios from "axios";
import './Client.css';

function Client() {
      const [data, setData] = useState([]);
      React.useEffect(() => {
        getData();
      }, []);
      const getData = () => {
        axios({
          method: "get",
          url: "/assets/data/clients.json",
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
<div class="flex-container client-section">
{data.map((item, index) => (
  <div class="item">
        <img src={item.img} alt="item" />
  </div>
  
        ))}
</div>

);

}
export default  Client;