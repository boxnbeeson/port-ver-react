import React from "react";
import Placeholderimg from "./phi.png";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    const openPopupboxPlaceholder = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={Placeholderimg} alt="no img found" />
        <p>This is where a project description would go</p>
        <b>Github: (Link would go here)</b>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPlaceholder = {
        titleBar: {
            enable: true,
            text: "Placeholder project."
        },
        fadeIn: true,
        fadeInSpeed: 500

    };

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-center py-5 portfolioHeader">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="col">
                    <div className="portfolio-image-box" onClick={openPopupboxPlaceholder}>
                        <img className="portfolio-image" src={Placeholderimg} alt="img unavailable" />
                        <div className="overflow"></div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="portfolio-image-box" onClick={openPopupboxPlaceholder}>
                        <img className="portfolio-image" src={Placeholderimg} alt="img unavailable" />
                        <div className="overflow"></div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="portfolio-image-box" onClick={openPopupboxPlaceholder}>
                        <img className="portfolio-image" src={Placeholderimg} alt="img unavailable" />
                        <div className="overflow"></div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="portfolio-image-box" onClick={openPopupboxPlaceholder}>
                        <img className="portfolio-image" src={Placeholderimg} alt="img unavailable" />
                        <div className="overflow"></div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="portfolio-image-box" onClick={openPopupboxPlaceholder}>
                        <img className="portfolio-image" src={Placeholderimg} alt="img unavailable" />
                        <div className="overflow"></div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="portfolio-image-box" onClick={openPopupboxPlaceholder}>
                        <img className="portfolio-image" src={Placeholderimg} alt="img unavailable" />
                        <div className="overflow"></div>
                    </div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPlaceholder} />
        </div>
    )
}

export default Portfolio