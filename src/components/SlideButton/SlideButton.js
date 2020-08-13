import React from 'react';
import "./SlideButton.scss";

const SlideButton = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick} className={"slide-button " + type}>
      <span>{children}</span>
    </button>
  )
}

export default SlideButton;
