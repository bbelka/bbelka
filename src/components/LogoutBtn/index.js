import React from 'react';
import { Button } from 'react-bootstrap';
import API from '../../utils/API';

function LogoutBtn() {

    const handleClick = () => {
        API.logout();
    }

    return (
        <Button onClick={handleClick}>Logout</Button>
    )
}

export default LogoutBtn;