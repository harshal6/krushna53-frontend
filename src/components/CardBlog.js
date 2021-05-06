import React, { useState } from "react";
import axios from "axios";
import "./CardBlog.css";

function CardBlog() {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios({
      method: "get",
      url: "/assets/data/blogs.json",
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
  return (
    <div className="blog-section">
      <h2 className="heading">Blog</h2>
      <div className="flex-container">
        {data.map((item, index) => (
          <div className="flex-item">
            <div className="blogBox">
              <img src={item.img} alt="item" />
              <div className="blogContent">
                <h2 className="text">{item.title}</h2>
                <p className="desc-text">
                  {item.description}
                  {"{"}" "{"}"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CardBlog;
