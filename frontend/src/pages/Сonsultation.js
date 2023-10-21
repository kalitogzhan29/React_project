


import React from "react";
// import  MentorList  from "../helpers/MentorList.js";
import Mentors from "../components/Mentors.js";
import { MentorList } from "../components/helpers/MentorList";
// import Mentors from from "../components/Mentor.js"
import "../styles/Consultation.css"

function Consultation() {
  return (
    <div className="mentor">
      <h1 className="mentorTitle">Our Mentors</h1>
      <div className="mentorList">
        {Mentors.map((mentors, key) => {
          return (
            <Mentors
              key={key}
              image={mentors.image}
              name={mentors.name}
              field={mentors.field}
            />
          );
        })}
      </div>
    </div>
  );
}


export default Consultation