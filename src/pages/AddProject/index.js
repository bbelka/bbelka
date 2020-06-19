import React, { useState, setState, useEffect } from 'react';
import { Form, Container, Row, Card, Button, ListGroup } from 'react-bootstrap';

import API from "../../utils/API";
import cloudUploadIcon from "../../utils/images/cloudUpload64.png"


function AddProject() {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [technical, setTechnical] = useState();
    const [contribution, setContribution] = useState();
    const [technologies, setTechnologies] = useState();
    const [mainImage, setMainImage] = useState();
    const [uploads, setUploads] = useState([]);
    const [imgPath, setImgPath] = useState({});
    const [savedUploads, setSavedUploads] = useState([]);


    const uploadIMG = async () => {

        console.log(imgPath)
        // make object
        if (!isEmpty(imgPath)) {
            const data = new FormData();
            data.append("file", imgPath);         // GET Value from state >> upload

            data.append("upload_preset", "rncfuvsl");
            // upload file
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/bbelka/image/upload",
                {
                    method: "POST",
                    body: data,
                }
            );
            const file = await res.json();           // URL Link to picture
            // console.log(file)
            setUploads(uploads.concat({
                id: imgPath.name + uploads.length,
                name: imgPath.name,
                url: file.url
            }))
        }
    }

    const selectFile = (e) => {
        let file = e.target.files[0];
        setImgPath(file);       // Set file to state
    }

    function isEmpty(obj) {
        for (var x in obj) { return false; }
        return true;
    }

    const displayUploads = () => {
        if (savedUploads.length > 0) {
            return savedUploads.map((upload, index) => <ListGroup.Item key={upload} name={upload} type="link" index={index} handleDelete={handleDelete} />)
        }

        return uploads.map(upload => <ListGroup.Item key={upload.id} {...upload} handleDelete={handleDelete} />)
    }

    const handleDelete = (...props) => {
        if (props.length > 1) {
            const newUploads = savedUploads.filter(upload => upload !== props[0]);
            setSavedUploads(newUploads);
        }
        else {
            const newUploads = uploads.filter(upload => upload.id !== props[0]);
            setUploads(newUploads);
        }
    }


    const handleSubmit = event => {
        event.preventDefault();
        const newProject = {
            name: name,
            description: description,
            technical:technical,
            contribution:contribution,
            technologies:technologies,
            mainImage:mainImage
            // urls
        }
    }

    return (
        <Container>
            <Card
                bg="dark"
                text="white">
                <Form>
                    <Form.Group controlId="projectName">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" placeholder="Project Name" onChange={setName} />
                    </Form.Group>

                    <Form.Group controlId="projectGeneralDescription">
                        <Form.Label>General Description</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="General Description" onChange={setDescription} />
                    </Form.Group>

                    <Form.Group controlId="projectTechnicalDescription">
                        <Form.Label>Technical Description</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Technical Description" onChange={setTechnical} />
                    </Form.Group>

                    <Form.Group controlId="projectContribution">
                        <Form.Label>Contribution</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Contribution" onChange={setContribution} />
                    </Form.Group>

                    <Form.Group controlId="projectTechnologies">
                        <Form.Label>Technologies</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Technologies" onChange={setTechnologies} />
                    </Form.Group>

                    <Form.Group controlId="projectMainImage">
                        <Form.Label>Main Image Address</Form.Label>
                        <Form.Control type="text" placeholder="Main Image Address" onChange={setMainImage} />
                    </Form.Group>

                    <Form.Group container alignItems="center" justify="center">
                        <input type="file" id="uploadImg" name="uploadImg" onChange={selectFile} />
                        <Button
                            variant="light"
                            color="primary"
                            startIcon={cloudUploadIcon}
                            onClick={uploadIMG}
                        >
                            Upload
                    </Button>
                    </Form.Group>

                    {uploads.length > 0 || savedUploads.length > 0
                        ? <ListGroup><ListGroup.Item>{displayUploads()}</ListGroup.Item></ListGroup>
                        : ""
                    }

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                </Button>
                </Form>
            </Card>
        </Container>
    )
}

export default AddProject;