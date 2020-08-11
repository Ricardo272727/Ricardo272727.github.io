import React from 'react';
import { Parallax } from 'react-parallax';
import "./ContactButtonParallax.scss";


const ContactButtonParallax = () => (
      <Parallax
        blur={2}
        bgImage="/images/971.jpg"
        bgImageAlt="Programming"
        strength={200}
      >
        <div style={{height: '60vh', display: 'flex', alignItems: 'flex-end', padding: '2rem'}}>
         <div className="send-email">
            <a 
              href="mailto:cuanaloricardo@gmail.com?subject=Hola">
            Contact me</a>
         </div>
        </div>
      </Parallax>
)


export default ContactButtonParallax;
