import React from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
import "./Error.css"

const Error = () => {
    return (
        <div className="err">
            <img className="img"
                style={{  }}
                src="./Images/Error.png"
                alt="404 error"
            />
            <h2>This Page Is Not On The Map.</h2>
            <Router>
                <Link to="/">
                    <button className="btn">Back to Home</button>
                </Link>
            </Router>
        </div>
    );
}
export default Error;