import React from 'react';
import { Parallax } from 'react-parallax';
import "./ContactButtonParallax.scss";
import SlideButton  from '../SlideButton/SlideButton';

/*
         <div className="send-email">
            <a 
              href=>
            Contact me</a>
         </div>

  * */

const openEmailClient = () => 
  window.location.href = "mailto:cuanaloricardo@gmail.com?subject=Hola";

const ContactButtonParallax = () => (
      <Parallax
        blur={2}
        bgImage="/images/971.jpg"
        bgImageAlt="Programming"
        strength={200}
        className="wow fadeInLeft"
      >
        <div 
          style={{height: '60vh', display: 'flex', alignItems: 'flex-end', padding: '2rem'}}>
          <div className="send-email">
            <SlideButton 
              onClick={openEmailClient} 
              type="right"> Contact me </SlideButton>
          </div>
        </div>
      </Parallax>
)


export default ContactButtonParallax;
