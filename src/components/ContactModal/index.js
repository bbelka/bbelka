import React from 'react';
import { Modal } from 'react-bootstrap';

function EmailModal(props) {

    return (

        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title><h3>Email Sent</h3></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5> Thanks for contacting me!<br /><br />
            I'll get back to you soon!</h5>
            </Modal.Body>

        </Modal>

    )

}

export default EmailModal;