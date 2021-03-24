import React, { useState } from 'react';
import { Form, Button, Card, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import API from '../../utils/API';

function Login() {

    const history = useHistory();
    const [values, setValues] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: values.username,
            password: values.password
        }

        API.createUser(user)
            .then(({ data }) => {
                if (data) {
                    history.push('/')
                }
            })
    }

    return (
        <Container>
            <Row>
                <div className="col-md-6 d-flex justify-content-center projects">
                    <Card
                        bg="dark"
                        text="white">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" type="username" placeholder="Enter username" onChange={handleChange} />

                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Enter password" onChange={handleChange} />
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