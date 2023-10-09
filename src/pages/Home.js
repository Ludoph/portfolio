import React from "react";
import TextSpan from "../TextSpan";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const sentence = "View More".split("");
  return (
    <div className="home">
      <div className="top">
        <p
          className="lastname"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Phounphonh
        </p>
      </div>
      <div className="bot">
        <p
          className="firstname"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-out-sine"
        >
          Ludovic
        </p>
        <p className="view-more" data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0">
          {sentence.map((letter, index) => {
            return <TextSpan>{letter}</TextSpan>;
          })}
          <Link to="/about">
            <BsArrowRight
              className="view-more-arrow"
              data-aos="fade-left"
              data-aos-duration="6000"
            />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
