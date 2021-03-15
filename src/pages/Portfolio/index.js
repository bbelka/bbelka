import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import ProjectModal from '../../components/ProjectModal';
import ProjectGrid from '../../components/ProjectGrid';

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

    return (
        <>
            <ProjectModal show={show} handleClose={handleClose} modalProject={modalProject} />
            <ProjectGrid projects={projects} handleShow={handleShow} />
        </>
    )
}

export default Portfolio;