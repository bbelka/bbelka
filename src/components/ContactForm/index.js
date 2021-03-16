import React from "react";
import { Form, Container, Col, Row, Button } from 'react-bootstrap';


function ContactForm(props) {
    
    return (
        <Container id="contact">
            <Form id="contactForm" className="bg-dark">
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="firstNameInput">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="First Name" onChange={props.handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="lastNameInput">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" placeholder="Last Name" onChange={props.handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group controlId="emailInput">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="email" placeholder="user@email.com" nChange={props.handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group controlId="messageInput">
                            <Form.Label>Shoot me a message.</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={props.handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Button onClick={props.handleSubmit} variant="light">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default ContactForm;