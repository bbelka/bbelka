import React from "react";
import './index.css';

function About() {
    return (
        <div className="container">
            <div className="container">
                <div className="row" id="aboutRow">

                    <div className="col-md-3"></div>
                    <div className="col-md-6 bg-dark" id="aboutDiv">
                        <h4>I'm Brett.</h4>
                        <p>I am a full-stack web developer, currently located in Seattle, WA. I have a passion for design -
                        clean lines, simple shapes - and a knack for data systems.
                        <br />
                            <br />
                        I have long had an interest in technology and throughout my life, I have engaged in the learning
                        and
                        deployment of a variety of tools and systems for solving problems of many types. I have resolved
                        to
                        learn and deploy a new set of tools - one that solves the problems presented in web development.
                        <br />
                            <br />
                        Outside of my professional pursuits, I apply similar thought processes to activities like
                        remodeling
                        houses, rebuilding engines, and generally troubleshooting just about any problem that arises.
                    </p>
                    </div>
                    <div className="col-md-3"></div>

                </div>
            </div>
        </div>
    )
}

export default About;