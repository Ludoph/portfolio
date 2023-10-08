import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="about">
      <h1
        className="about-title"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        about me
      </h1>
      <div
        className="about-me"
        
      >
        <h3
          data-aos="fade-down"
        >
          Hi, I'm Fullstack Developer
        </h3>
        <p
          data-aos="fade-up"
        >
          A passionate developer and apprentice who is enthusiastic about
          learning and practicing new things. Your curiosity drives you to
          explore and discover new ideas, and you are always looking for ways to
          improve your skills. You enjoy collaborating with others and using
          your knowledge to contribute to the development of innovative
          projects.
        </p>
      </div>
    </div>
  );
}

export default About;
