import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './index.css';

function About() {
    return (
        <Container>
            <Container>
                <Row id="aboutRow">
                    <Col md={3}></Col>
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
                    <Col md={3}></Col>
                </Row>
            </Container>
        </Container>

    )
}

export default About;