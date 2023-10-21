import React from "react";
import  MentorList  from "../helpers/MentorList";
import Mentors from "../components/Mentors";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="mentor">
      <h1 className="mentorTitle">Our Mentors</h1>
      <div className="mentorList">
        {MenuList.map((mentorItem, key) => {
          return (
            <mentorItem
              key={key}
              image={mentorItem.image}
              name={mentorItem.name}
              price={mentorItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
