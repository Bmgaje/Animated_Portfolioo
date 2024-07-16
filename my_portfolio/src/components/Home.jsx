import React, { useEffect, useRef } from "react";
import pdf from "../pdf/BRIJESH_GAJERA_SOFTWARE_DEVELOPER.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to My Profile",
        "My Name is Brijesh Gajera",
        "I am full stack Developer",
        "I am Andriod (React Native) Developer",
      ],
      typeSpeed: 20,
      backSpeed: 20,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1500">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pfd"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="1500">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
