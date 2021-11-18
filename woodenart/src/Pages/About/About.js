import React from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
import "../../components/Services/Services.css";

const About = () => {
    return (
        <div className="about-wrapper flex-columns">
            <div className="product-center">
                <img src="./Images/About.png" alt="about us" />
                <section className="content-prod">
                    <h1> About Us</h1>

                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                        quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
                        voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
                        tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
                    </p>
                    <Router>
                        <Link to="/products">
                            <button className="btn">Browse Products</button>
                        </Link>
                    </Router>
                </section>
            </div>
        </div>
    );
};

export default About;
