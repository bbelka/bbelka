import React from 'react';
import { Button } from 'react-bootstrap';
// import API from '../../utils/API';
import { useLogout } from '../../utils/auth'

function LogoutBtn() {

    // const handleClick = (e) => {
    //     // API.logout();
    //     e.preventDefault()
    //     useLogout;
    // }

    return (
        <Button onClick={useLogout}>Logout</Button>
    )
}

export default LogoutBtn;