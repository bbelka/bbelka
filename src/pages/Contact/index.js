import React, { useState} from "react";
import './index.css';
import axios from 'axios';
import linkedIn from '../../utils/images/linkedin64.png';
import gitHub from '../../utils/images/github64-1.png';
import email from '../../utils/images/email64.png';


function Contact() {

    //set all of the required pieces of state for the email form
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [messageText, setMessageText] = useState("");

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
                return alert("MESSAGE SENT");

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
            <div className="container" id="contact">

                <form className="bg-dark" id="contactForm" >

                    <div className="row">

                        <div className="form-group col-md-6">

                            <label htmlFor="firstNameInput">First Name</label>
                            <input type="name" className="form-control" name="firstName" value={firstName} onChange={handleInputChange} placeholder="First Name" />

                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="lastNameInput">Last Name</label>
                            <input type="name" className="form-control" name="lastName" value={lastName} onChange={handleInputChange} placeholder="Last Name" />
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-12">

                            <div className="form-group">

                                <label htmlFor="emailInput">Email address</label>
                                <input type="email" className="form-control" name="emailAddress" value={emailAddress} onChange={handleInputChange} placeholder="name@example.com" />

                            </div>

                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-12">

                            <div className="form-group">

                                <label htmlFor="messageInput">Shoot me a message.</label>
                                <textarea className="form-control" name="messageText" value={messageText} onChange={handleInputChange} placeholder="Shoot me a message." rows="3">
                                </textarea>

                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-12">

                            <button type="button" id="contactFormSubmitBtn" onClick={handleSubmit} className="btn btn-light">Submit</button>

                        </div>

                    </div>

                </form>

            </div >
            <div className="container contact" id="link">

                <div className="bg-dark" id="linkDiv" >

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

            </div >
        </>

    )
}
export default Contact;