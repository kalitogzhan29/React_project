import React from "react";
import './showcase.style.css'
import Navbar from "../Navbar";

function Showcase() {
    return (
      <section className="showcase-container">
       
       <div className="overlay"></div>
            <div className="showcase-content">
                <h1 className="title">"IZDE" </h1>
                <p className="discription">“There are no secrets to success. It is the result of preparation, hard work, and learning from failure.”</p>

           <p className="author">  General Colin Powell, former US Secretary of State </p>
           </div>
          
     </section>
    )
  }
  
  export default Showcase