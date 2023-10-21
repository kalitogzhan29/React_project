
import React from "react";
// import  MentorList  from "../helpers/MentorList.js";
import mentors from "../components/Mentors.js";
import { MentorList } from "../components/helpers/MentorList.js";
// import Mentors from from "../components/Mentor.js"
import "../styles/Consultation.css"

function Consultation() {
  return (
    <div className="mentor">
      <h1 className="mentorTitle">Our Mentors</h1>
      <div className="mentorList">
        <div className="container"> 
        {MentorList.map((mentor, key) => {
          return (
            <div key={key}>
              <img className="mentorImg" src={mentor.image} alt={mentor.name} />
              <h2>{mentor.name}</h2>
              <p>{mentor.field}</p>
            </div>
            
          );
        })}</div>
      </div>
    </div>
  );
}

export default Consultation