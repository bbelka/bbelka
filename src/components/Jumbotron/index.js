import React from 'react';
import "./index.css"

function Jumbotron() {
    return (
        <div className="container" id="jumbo">
            <div className="jumbotron jumbotron-fluid">
                {/* <!-- <img src="./assets/images/Brett.jpg" alt="Photo of me" id="mePhoto" className="position-absolute" srcset=""> --> */}
                <div className="container">

                    <h1 className="display-4">Hi, I'm Brett</h1>
                    <p className="lead">a full-stack developer, living in the Seattle area
                </p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;