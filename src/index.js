import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-image-gallery/styles/css/image-gallery.css";
//import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Caroussal from "./components/Carousal"
import IMAGES from "./components/Image";
import AboutBox from "./components/AboutBox";
import ServiceCard from "./components/ServiceCard";
import CardBlog from "./components/CardBlog";
import Testimonial from "./components/Testimonial";
import FooterPg from "./components/FooterPg";
import ContactForm from "./components/ContactForm";
import Client from "./components/Client";
import Navbar from "./components/Navbar";
import CustomizedTables from "./components/CustomizedTables";
import "./components/Config.js";
//import response from {express}
import reportWebVitals from "./reportWebVitals";
import "./style.css";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    {/* <Header />  */}
    <Navbar />
    <Caroussal />
    <div id="services">
      <ServiceCard />
    </div>
    <div id="about">
      <AboutBox
        src={IMAGES.ABOUT}
        heading="About Heading"
        description="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful.
    Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful.Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful."
      />
    </div>
    <div id="blog" class="blog-container">
      <CardBlog
        src={IMAGES.BLOG}
        width="100%"
        height="400px"
        alt="Banner image"
        heading="Blog title"
        description="Lorem ipsum is a name for a common type of placeholder text."
      />
    </div>

    <div id="client" class="clientHeading">
      <h2>We deliver across the industries.</h2>
      <br></br>
    </div>
    <Client />

    <div id="testimonial" class="testimonialDiv">
      <div class="heading-section">
        <h2 class="testimonial-heading">Testimonial</h2>
        <Testimonial />
      </div>
    </div>
    <div id="contact" class="contact-section">
      <ContactForm />
    </div>
    <FooterPg />
    <CustomizedTables />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
