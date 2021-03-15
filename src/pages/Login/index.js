import React from 'react';
import { Form, Button, Card, Container, Row } from 'react-bootstrap';

function Login() {

    return (
        <Container>
            <Row>
                <div className="col-md-6 d-flex justify-content-center projects">
                    <Card
                        bg="dark"
                        text="white">
                        <Form>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter username" />

                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </div>
            </Row>
        </Container>
    )
}

export default Login;