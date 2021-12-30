import React from "react";
import "./Experience.scss";

const Experience = ({ id, name, image, link }) => {
  return (
    <div className="experience-item">
      <h1>{name}</h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={`images/${image}`} alt={name} />
      </a>
    </div>
  );
};

export default Experience;
