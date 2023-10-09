import React from "react";
import img1 from "../assets/img02.png";
import img2 from "../assets/img04.png";
import img3 from "../assets/img05.png";
import img4 from "../assets/img03.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="project" data-aos="fade-out" data-aos-easing="ease-in-sine">
      <div className="project-items">
        <p># D.Hub</p>
        <img src={img1} alt="d.hub" />
      </div>
      <div className="project-items">
        <p># OLA BEL BUL</p>
        <img src={img2} alt="d.hub" />
      </div>
      <div className="project-items">
        <p># POKEDEX</p>
        <img src={img3} alt="d.hub" />
      </div>
      <div className="project-items">
        <p># RESTO LAO</p>
        <img src={img4} alt="d.hub" style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}
