import React, {useState, useEffect} from "react";

import "./TopButton.css";


function TopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };  
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className={`top-btn ${isVisible ? "appear" : "disappear"}`} onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
        </div>
    );
}

export default TopButton;
