import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap';
import API from "../../utils/API";
import Login from "../Login";


function AddProject() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [technical, setTechnical] = useState('');
    const [contribution, setContribution] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [deployed, setDeployed] = useState({});
    const [github, setGithub] = useState({});
    const [server, setServer] = useState({});
    const [imgPath, setImgPath] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);


    const handleInputChange = e => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        }
        else if (name === "description") {
            setDescription(value);
        }
        else if (name === "technical") {
            setTechnical(value);
        }
        else if (name === "contribution") {
            setContribution(value);
        }
        else if (name === "technologies") {
            setTechnologies(value);
        }
        else if (name === "deployed") {
            setDeployed(value);
        }
        else if (name === "github") {
            setGithub(value);
        }
        else if (name === "server") {
            setServer(value);
        };
    };

    //if there's no user logged in, render render the redirect to login
    useEffect(() => {

        async function init() {
            try {
                //read sessions
                const user = await API.readSessions();

                //if there's a session for user, set loggedIn state to true
                if (user) {
                    setLoggedIn(true)

                //else redirect to login
                } else {
                    console.log("no user");
                    history.push("/login");
                }

            } catch (err) {
                console.log(err);
                throw err;
            }
        }
        init();
    });

    //Cloudinary image uploader
    const uploadIMG = async () => {

        // make object
        if (!isEmpty(imgPath)) {
            const data = new FormData();
            data.append("file", imgPath);

            // GET Value from state >> upload
            data.append("upload_preset", "rncfuvsl");

            // upload file
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/bbelka/image/upload",
                {
                    method: "POST",
                    body: data,
                }
            );
            const file = await res.json();

            // URL Link to picture
            return file.url
        };
    };

    const selectFile = (e) => {
        let file = e.target.files[0];
        // Set file to state
        setImgPath(file);
    };

    function isEmpty(obj) {
        for (var x in obj) { return false; }
        return true;
    };

    const handleSubmit = async (event) => {
        event.persist();
        event.preventDefault();



        //await image upload to return url for picture
        const image = await uploadIMG();

        //build project object
        const newProject = {
            name: name,
            description: description,
            technical: technical,
            contribution: contribution,
            technologies: technologies,
            mainImage: image
        };

        //build Url array
        const Urls = []
        if (deployed) {
            Urls.push({ name: "deployed", url: deployed })
        } if (github) {
            Urls.push({ name: "github", url: github })
        } if (server) {
            Urls.push({ name: "server", url: server })
        };

        //create dbProject
        const dbProject = await API.createProject(newProject);

        //create dbUrls associated with project
        Urls.map((url) => {
            return API.createUrl(
                {
                    projectId: dbProject.data._id,
                    name: url.name,
                    url: url.url
                }
            );
        });
    };

    const renderAddProject = () => {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="projects">
                            <Card
                                bg="dark"
                                text="white"
                                variant="add">
                                <Form
                                    onSubmit={handleSubmit}
                                >
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="projectName">
                                                <Form.Label>Project Name</Form.Label>
                                                <Form.Control type="text" placeholder="Project Name" name="name" onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group controlId="projectGeneralDescription">
                                                <Form.Label>General Description</Form.Label>
                                                <Form.Control as="textarea" rows="3" placeholder="General Description" name="description" onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group controlId="projectTechnicalDescription">
                                                <Form.Label>Technical Description</Form.Label>
                                                <Form.Control as="textarea" rows="3" placeholder="Technical Description" name="technical" onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group controlId="projectContribution">
                                                <Form.Label>Contribution</Form.Label>
                                                <Form.Control as="textarea" rows="3" placeholder="Contribution" name="contribution" onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group controlId="projectTechnologies">
                                                <Form.Label>Technologies</Form.Label>
                                                <Form.Control as="textarea" rows="3" placeholder="Technologies" name="technologies" onChange={handleInputChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>

                                            <Form.Group controlId="projectDeployed">
                                                <Form.Label>Deployed site url</Form.Label>
                                                <Form.Control type="text" placeholder="Deployed Site Address" name="deployed" onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group controlId="projectGithub">
                                                <Form.Label>Github repository</Form.Label>
                                                <Form.Control type="text" placeholder="Github Repository Address" name="github" onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group controlId="projectServer">
                                                <Form.Label>Server Github Repository</Form.Label>
                                                <Form.Control type="text" placeholder="Server Github Repository Address" name="server" onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group container="true" alignitems="center" justify="center">
                                                <Form.Label>Upload a Screenshot </Form.Label>
                                                <input type="file" id="uploadImg" name="uploadImg" onChange={selectFile} />
                                            </Form.Group>

                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    return <div className="Dashboard">{loggedIn ? renderAddProject() : <Login />}</div>
};

export default AddProject;