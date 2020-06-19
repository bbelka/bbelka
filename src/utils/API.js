import axios from 'axios';
const BASE_URL = 'http://localhost:8080'
// const BASE_URL = 'https://bbelka-srvr.herokuapp.com'


export default {
    mail: function (email) {
        return axios.post(BASE_URL + "/mail/send", email)
    },
    getProjects: function () {
        return axios.get(BASE_URL + "/api/project")
    },
    getProjectById: function (id) {
        return axios.get(BASE_URL + "/api/project/" + id)
    }
}