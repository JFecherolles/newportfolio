import React, { useRef, useState, useEffect }  from 'react';

import './About.css';

function About() {
    const aboutRef = useRef(null);
    const labelRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.target === aboutRef.current) {
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

        const aboutTarget = aboutRef.current;
        const labelTarget = labelRef.current;

        if (aboutTarget && labelTarget) {
            observer.observe(aboutTarget);
            observer.observe(labelTarget);
        }

        return () => {
            if (aboutTarget && labelTarget) {
                observer.unobserve(aboutTarget);
                observer.unobserve(labelTarget);
            }
        };
    }, []);

    return (
        <section className="about parallax" id="about">
         <div ref={labelRef} className={`label-container ${isVisible ? "appear" : "disappear"}`}>
            <label>About</label>
            </div>
            <div ref={aboutRef} className={`about-container ${isVisible ? "appear" : "disappear"}`}>
                <p>
                    Permettez-moi de me présenter. Je suis Jérôme Fecherolles, un développeur web avec une spécialisation en React, sortant d'une reconversion professionnelle réussie.
                    <br /><br />
                    Mes compétences techniques comprennent HTML, CSS, PHP, JavaScript et React, ce qui me permet de concevoir et de développer des sites web et des applications élégants et innovants pour des clients exigeants.
                    <br /><br />
                    Fort de mes expériences passées en développement web, j'ai acquis une expertise solide dans la création de sites web visuellement époustouflants et conviviaux, garantissant ainsi des expériences utilisateur exceptionnelles.
                    <br /><br />
                    Je suis également curieux et doté d'un esprit d'initiative, ce qui me permet d'explorer de nouvelles idées et de trouver des approches créatives pour résoudre les défis auxquels je suis confronté.
                    <br /><br />
                    En tant que développeur frontend polyvalent, je suis capable de gérer des projets avec talent, assurant ainsi leur succès du début à la fin. Je suis hautement organisé, ce qui me permet de planifier et d'exécuter les projets de manière efficace.
                    <br /><br />
                    J'ai une expertise dans l'amélioration de concepts et je m'assure toujours de vérifier minutieusement la qualité de ma programmation.
                    <br /><br />
                    Je suis passionné par mon travail et je m'engage pleinement à fournir des solutions de haute qualité à mes clients. Mon objectif est de donner vie à vos projets dans divers domaines en utilisant mes compétences polyvalentes et mon expérience diversifiée.
                </p>
            </div>
        </section>
    );

}

export default About;
