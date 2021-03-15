import React from 'react';
import { Modal, Button } from 'react-bootstrap';


function ProjectModal(props) {
    return (<Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        bg="dark"
    >
        <Modal.Header closeButton>
            <Modal.Title>{props.modalProject.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.modalProject.technical && (
                <>
                    <h5>Technical description:</h5>
                    <p>{props.modalProject.technical}</p>
                </>
            )}
            {props.modalProject.contribution && (
                <>
                    <h5>Contribution:</h5>
                    <p>{props.modalProject.contribution}</p>
                </>
            )}
            {props.modalProject.technologies && (
                <>
                    <h5>Technologies:</h5>
                    <p>{props.modalProject.technologies}</p>
                </>
            )}
        </Modal.Body>
        {props.modalProject.urls && (
            <Modal.Footer>
                {props.modalProject.urls.map((url) =>
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
    )
}

export default ProjectModal;