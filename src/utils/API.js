import axios from 'axios';
const BASE_URL = 'http://localhost:8080'
// const BASE_URL = 'https://bbelka-srvr.herokuapp.com'


export default {
    mail: (email) => {
        return axios.post(BASE_URL + "/mail/send", email)
    },
    getProjects: () => {
        return axios.get(BASE_URL + "/api/project")
    },
    getProjectById: (id) => {
        return axios.get(BASE_URL + "/api/project/" + id)
    },
    createProject: (project) => {
        return axios.post(BASE_URL + "/api/project", project)
    },
    createUrl: (url) => {
        return axios.post(BASE_URL + "/api/url", url)
    }
}