import React from 'react'; 
import "./Project.scss"; 

const Project = props => {
 return (
  <div className="project">
    <a href={props.link} target="_blank" rel="noreferrer noopener">
     <div className="image">
       <img src={props.image} className="img-fluid" alt={props.name || "Project image"}/>
     </div>
     <div className="ct-title">
       <span>{props.name || "Project name"}</span>
     </div>
    </a>
  </div>
 );
} 

export default Project;
