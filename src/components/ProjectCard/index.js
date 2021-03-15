import React from "react";
import { Card, Button } from 'react-bootstrap';

function ProjectCard(props) {
    return (
        <div className="col-md-6 d-flex justify-content-center projects" key={props.project._id}>
            <Card
                bg="dark"
                text="white"
                variant="portfolio">
                <Card.Img variant="top" src={props.project.mainImage} />
                <Card.Body>
                    <Card.Title>{props.project.name}</Card.Title>
                    <Card.Text>{props.project.description}</Card.Text>
                    <div className="d-flex justify-content-around">
                        <Button
                            variant="light"
                            text="dark"
                            target="_blank"
                            onClick={() => props.handleShow(props.project._id)}
                        >
                            more info
                                </Button>
                    </div>
                </Card.Body>
            </Card>
        </div >
    )
}

export default ProjectCard;