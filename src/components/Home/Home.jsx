import React, { useEffect, useRef, useState } from "react";
import Typed from 'typed.js';
import "./Home.css";
import { updateCVClicks, updatePortfolioViews, getPortfolioData } from "../../../api";

function Home() {
  const homeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cvClicks, setCvClicks] = useState(0);
  const [portfolioData, setPortfolioData] = useState([]);

  const handleCVClick = async () => {
    try {
      await updateCVClicks();
      setCvClicks(cvClicks + 1);
    } catch (error) {
      console.log("Erreur lors de la mise à jour du compteur de CV:", error);
    }
  };

  useEffect(() => {
    updatePortfolioViews();
    const fetchData = async () => {
      const { data, error } = await getPortfolioData();
    
      if (error) {
        console.log("Erreur lors de la récupération des données du portfolio:", error);
        return;
      }
    
      setPortfolioData(data);
    };
    
    fetchData();
    
  }, []);

  useEffect(() => {
    const typedInstance = new Typed('.auto-type', {
      strings: ['Développeur Web', 'Développeur Front-End', 'React'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typedInstance.destroy();
    };
  }, []);

  useEffect(() => {
    const handleIntersect = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    const target = homeRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section className="home parallax" id="home">
    <div ref={homeRef} className={`my-info ${isVisible ? "appear" : "disappear"}`}>
        <h1>Bonjour, Je suis Jérôme Fécherolles</h1>
        <h2><span className="auto-type">Développeur Web</span></h2>
        <p>
          Bienvenue dans mon portfolio, où je présente une collection de projets innovants et de pointe solutions.<br />
          Avec une base solide en codage et une passion pour repousser les limites, je m'efforce de créer des expériences numériques extraordinaires.<br />
          Explorez mon travail et connectons-nous pour collaborer à la transformation d'idées en réalité.<br />
          Ensemble, nous pouvons avoir un impact durable dans le monde de la technologie.<br />
        </p>
        <div className="home-btns">
          <button className="solid-btn" onClick={() => window.location.href = "mailto:fecherolles.jerome@outlook.fr"}>
          Contactez Moi
          </button>
          <button className="hollow-btn" onClick={handleCVClick}>
          <a href="/assets/CV.fecherolles.jerome.pdf" target="_blank" id="cvButton" rel="noopener noreferrer">
          Mon Cv
          </a>
          </button>
        </div>
      </div>
      <div className={`ma-photo ${isVisible ? "appear" : "disappear"}`}>
        <div id="ma-photo-cercle"></div>
        <img src="/assets/maphoto.png" id="ma-photo-reel" alt="Ma photo" />
        <div className="contact-icon-holder">
          <a href="https://www.linkedin.com/in/jerome-fecherolles/" target="_blank" className="contact-icons">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/JFecherolles" target="_blank" className="contact-icons">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
