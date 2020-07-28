import React from 'react'; 
import "./Project.scss"; 


const Project = ({name, link, image, description}) => {
 return (
  <div className="project wow fadeInTopLeft mt-3">
    <a href={link} className="link" target="_blank" rel="noreferrer noopener">
     <div className="image">
       <img src={"images/" + image} className="img-fluid" alt={name || "Project image"}/>
     </div>
     <div className="ct-title">
       <span>{name || "Project name"}</span>
     </div>
     <div className="description">
      {description}
     </div>
    </a>
  </div>
 );
} 

export default Project;
