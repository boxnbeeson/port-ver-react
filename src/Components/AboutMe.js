import React from "react";
import Me from "./me.jpg";
const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="MeImgWrap">
                        <img className="MeImg" src={Me} alt="me.." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutHeader">About Me</h1>
                    <p>Software developer utilizing a bachelor’s degree in psychology to analyze client demographics for producing effective web design and user experience. Obtained a MERN Full-Stack Certificate through the University of North Carolina at Chapel Hill. Known for leadership qualities and taking initiative. Successfully led a large organization while in university, restructuring its design based off of attracted demographics while also increasing its membership and community outreach. Proven teamwork capabilities, adaptive nature, and strong interpersonal communication skills through multiple projects.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe