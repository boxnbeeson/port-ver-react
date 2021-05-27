import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Basic Info</h1>
                <Typed
                className="typed-text"
                strings={["Software Developer", "Web Development", "Full-Stack Developer", "Front-End Development", "React", "JavaScript"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer"> Contact</a>
            </div>

        </div>
    )
}

export default Header