import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import axios from 'axios';
import './index.css';
import linkedIn from '../../utils/images/linkedin64.png';
import gitHub from '../../utils/images/github64-1.png';
import email from '../../utils/images/email64.png';
import ContactForm from '../../components/ContactForm';
import ContactModal from '../../components/ContactModal'



function Contact() {

    //set all of the required pieces of state for the email form
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [messageText, setMessageText] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    //set state based upon current value in form
    const handleInputChange = event => {
        const { name, value } = event.target;
        if (name === "firstName") {
            setFirstName(value);
        }
        else if (name === "lastName") {
            setLastName(value);
        }
        else if (name === "emailAddress") {
            setEmailAddress(value);
        }
        else if (name === "messageText") {
            setMessageText(value);
        }
    }

    //handle submit from
    const handleSubmit = (event) => {

        event.preventDefault();
        const name = lastName + ', ' + firstName

        //post request to server to send email
        axios(
            {
                method: "POST",
                url: "http://localhost:8080/mail/send",
                // url: "https://bbelka-srvr.herokuapp.com/mail/send",
                data: {
                    name: name,
                    email: emailAddress,
                    message: messageText
                }
            }
        ).then((response) => {
            console.log(response);

            //on sucess, alert message sent
            //clear form
            if (response.status === 200) {
                console.log('success');
                resetForm();
                return setShow(true);


                //if fail, alert message failed to send
            } else {
                console.log('fail');

                return alert("MESSAGE FAILED TO SEND")
            }
        })
    };


    //reset form
    const resetForm = () => {
        document.getElementById('contactForm').reset();
    }


    //html layout
    return (
        <>
            <ContactModal show={show} handleClose={handleClose} />
            <ContactForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            <Container className="contact" id="link">

                <div className="bg-dark" id="linkDiv">

                    <a target="blank" href="https://www.linkedin.com/in/brettbelka">

                        <img className="linkImg" alt="Link to Brett's LinkedIn" src={linkedIn} />

                    </a>

                    <a target="blank" href="https://github.com/bbelka">

                        <img className="linkImg" alt="Link to Brett's Github" src={gitHub} />

                    </a>

                    <a href="mailto:bbelka@gmail.com">

                        <img className="linkImg" alt="Email Brett" src={email} />

                    </a>
                </div>
            </Container>

        </>

    )
}
export default Contact;