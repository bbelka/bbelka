import React, { useState, useEffect } from 'react';
import { Modal, Container, Row, Card, Button } from 'react-bootstrap';
import './index.css';
import API from '../../utils/API';

function Portfolio() {

    const [projects, setProjects] = useState([]);
    const [modalProject, setModalProject] = useState({})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (id) => {
        API.getProjectById(id)
            .then(({ data }) => {
                console.log(data);
                setModalProject(data)
                setShow(true);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        API.getProjects()
            .then(({ data }) => {
                console.log(data);
                setProjects(data)
            })
            .catch(err => console.log(err));
    }, [])

    //html layout
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                bg="dark"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{modalProject.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalProject.technical && (
                        <>
                            <h5>Technical description:</h5>
                            <p>{modalProject.technical}</p>
                        </>
                    )}
                    {modalProject.contribution && (
                        <>
                            <h5>Contribution:</h5>
                            <p>{modalProject.contribution}</p>
                        </>
                    )}
                    {modalProject.technologies && (
                        <>
                            <h5>Technologies:</h5>
                            <p>{modalProject.technologies}</p>
                        </>
                    )}
                </Modal.Body>
                {modalProject.urls && (
                    <Modal.Footer>
                        {modalProject.urls.map((url) =>
                            <Button
                                variant="dark"
                                text="white"
                                target="_blank"
                                href={url.url}
                                key={url._id}
                            >
                                {url.name}
                            </Button>
                        )}
                    </Modal.Footer>
                )}
            </Modal>
            <Container>
                <Row>
                    {projects.map((project) =>
                        <div className="col-md-6 d-flex justify-content-center projects" key={project._id}>
                            <Card
                                bg="dark"
                                text="white"
                                variant="portfolio">
                                <Card.Img variant="top" src={project.mainImage} />
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <div className="d-flex justify-content-around">
                                        <Button
                                            variant="light"
                                            text="dark"
                                            target="_blank"
                                            onClick={() => handleShow(project._id)}
                                        >
                                            more info
                                </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>)}
                </Row>
            </Container >
        </>
    )
}

export default Portfolio;