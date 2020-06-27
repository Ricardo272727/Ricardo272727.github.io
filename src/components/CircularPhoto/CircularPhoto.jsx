import React from 'react'; 
import "./CircularPhoto.scss"; 

const CircularPhoto = props => {
 return (
   <div className="circular-photo">
     <img src={props.src} className="img-fluid" alt={props.alt || "image"}/>
   </div>
 );
} 

export default CircularPhoto;
