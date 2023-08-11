import React, { useRef, useState, useEffect } from 'react';

import './Skills.css';

function Skills() {
  const skillsRef = useRef(null);
  const labelRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === skillsRef.current) {
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

    const projetsTarget = skillsRef.current;
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
    <section className="skills parallax" id="skills">
      <div ref={labelRef} className={`label-container ${isVisible ? "appear" : "disappear"}`}>
        <label>Mes Skills</label>
      </div>
      <div ref={skillsRef} className={`skills-container ${isVisible ? "appear" : "disappear"}`}>
        <div id="skills-1" className="skills-item">
          <div>
            <label>Développeur Web</label>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>BootStrap</li>
              <li>Git /GitHub</li>
              <li>MySQL</li>
              <li>Wordpress</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>
        <div id="skills-2" className="skills-item">
          <div>
            <label>Développeur Front-end</label>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Sass</li>
              <li>Responsive Web Design</li>
              <li>SEO</li>
              <li>Sass</li>
              <li>Accessibilité</li>
              <li>Performance</li>
              <li>UX/UI</li>
            </ul>
          </div>
        </div>
        <div id="skills-3" className="skills-item">
          <div>
            <label>React</label>
            <ul>
              <li>Redux</li>
              <li>Jest</li>
              <li>Token JWT</li>
              <li>React Router</li>
              <li>React Hooks</li>
              <li>AJAX</li>
              <li>API</li>
              <li>Next.js</li>
              <li>Vite.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
