import React from "react";
import "./Card.css";

function Card({ title, image, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card">
      {/* <div className="card"> */}
        <h1>{title}</h1>
        <div className="hovercard">
          <img src={image} alt="" />
        </div>
      {/* </div> */}
    </a>
  );
}

export default Card;
