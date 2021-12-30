import React, { useRef } from "react";
import { Parallax } from "react-parallax";
import "./ContactButtonParallax.scss";
import SlideButton from "../SlideButton/SlideButton";


const ContactButtonParallax = () => {
  const linkRef = useRef(null);

  const openEmailClient = () => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <Parallax
      blur={2}
      bgImage="/images/971.jpg"
      bgImageAlt="Programming"
      strength={200}
      className="wow fadeInLeft"
    >
      <a
        ref={linkRef}
        href="mailto:cuanaloricardo@gmail.com?subject=Hola"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "none" }}
      >Mail to cuanaloricardo@gmail.com</a>
      <div
        style={{
          height: "60vh",
          display: "flex",
          alignItems: "flex-end",
          padding: "2rem",
        }}
      >
        <div className="send-email">
          <SlideButton onClick={openEmailClient} type="right">
            {" "}
            Contact me{" "}
          </SlideButton>
        </div>
      </div>
    </Parallax>
  );
};

export default ContactButtonParallax;
