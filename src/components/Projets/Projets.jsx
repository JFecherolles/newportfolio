import React, { useState, useEffect, useRef } from "react";
import projet1 from '../../assets/projet1.ico';
import projet2 from '../../assets/Projet2.ico'; 
import projet3 from '../../assets/Projet3.ico'; 
import "./Projets.css";
import TopButton from "../TopButton/TopButton";

function Projets() {
  const projetsRef = useRef(null);
  const labelRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === projetsRef.current) {
          setIsVisible(entry.isIntersecting);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const projetsTarget = projetsRef.current;
    const labelTarget = labelRef.current;

    if (projetsTarget && labelTarget) {
      observer.observe(projetsTarget);
      observer.observe(labelTarget);
    }

    return () => {
      if (projetsTarget && labelTarget) {
        observer.unobserve(projetsTarget);
        observer.unobserve(labelTarget);
      }
    };
  }, []);

  return (
    <section className="projets parallax" id="projets">
    <TopButton />
      <div ref={labelRef} className={`label-container ${isVisible ? "appear" : "disappear"}`}>
        <label>Projets</label>
      </div>
      <div ref={projetsRef} className={`projets-container ${isVisible ? "appear" : "disappear"}`}>
        <div id="projets-1" className="projets-item">
          <div>
            <label>Cats</label>
            <a href="https://jfecherolles.github.io/cat" target="_blank">
              <img src={projet1} alt="cat" />
            </a>
          </div>
        </div>
        <div id="projets-2" className="projets-item">
          <div>
            <label>Weather</label>
            <a href="https://jfecherolles.github.io/weather-app" target="_blank">
              <img src={projet2} alt="weather-app" />
            </a>
          </div>
        </div>
        <div id="projets-3" className="projets-item">
          <div>
            <label>Converter</label>
            <a href="https://jfecherolles.github.io/converter" target="_blank">
              <img src={projet3} alt="converter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projets;
