import React, { useState, useEffect } from "react";
import './index.css';
import axios from 'axios';

function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [messageText, setMessageText] = useState("");

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('post clicked');

        const name = lastName + ', ' + firstName
        console.log(name);

        axios({
            method: "POST",
            // url: "http://localhost:8080/mail/send",
            url: "https://bbelka-srvr.herokuapp.com/mail/send",
            data: {
                name: name,
                email: emailAddress,
                message: messageText
            }
        }).then((response) => {
            console.log(response.data);

            if (response.data.msg === 'success') {
                alert("MESSAGE SENT");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("MESSAGE FAILED TO SEND")
            }
        })
    };

    const resetForm = () => {
        document.getElementById('contactForm').reset();
    }

    return (
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
    )
}
export default Contact;