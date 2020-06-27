import React from 'react'; 
import "./Footer.scss"; 
import { FaGithub } from 'react-icons/fa';
const Footer = props => {
 return (
  <footer>
    <a href="mailto:cuanaloricardo@gmail.com?subject=Hola">cuanaloricardo@gmail.com</a>
    <a href="https://github.com/Ricardo272727" target="_blank" rel="noopener noreferrer" >
      <span>Github
      </span>
      <FaGithub className="ml-3"/>
    </a>
  </footer>
 );
} 

export default Footer;
