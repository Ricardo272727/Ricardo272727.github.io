import React from 'react'; 
import "./Tab.scss"; 

const Tab = props => {
 return (
  <div className="tab wow backInLeft">
    <div className="tab-child">
      <h4>{props.children}</h4>
    </div>
  </div>
 );
} 

export default Tab;
