import React from "react";
import { Container, Row } from 'react-bootstrap';
import './index.css';
import ProjectCard from '../../components/ProjectCard'


function ProjectGrid(props) {
    return (
        <Container>
            <Row>
                {props.projects.map((project) =>
                    <ProjectCard project={project} handleShow={props.handleShow} />
                )}
            </Row>
        </Container >

    )
}

export default ProjectGrid;