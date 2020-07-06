import React from 'react'; 
import "./Project.scss"; 

const Project = props => {
 return (
  <div className="project wow fadeInTopLeft mt-3">
    <a href={props.link} target="_blank" rel="noreferrer noopener">
     <div className="image">
       <img src={"images/" + props.image} className="img-fluid" alt={props.name || "Project image"}/>
     </div>
     <div className="ct-title">
       <span>{props.name || "Project name"}</span>
     </div>
    </a>
  </div>
 );
} 

export default Project;
