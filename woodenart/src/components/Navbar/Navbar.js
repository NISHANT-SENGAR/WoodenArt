import React from "react";
import { Link,BrowserRouter as Router } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

    return (
        <header>
            <nav id='nav'>
                <div className="container">
                    <h1 className='logo'>
                        <i className='fa fa-home'></i>
                        Wooden Arts
                    </h1>
                    <Router>
                        <ul className="links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                        </ul>
                    </Router>
                    <button className='btn'>Sign up</button>
                </div>

            </nav>
        </header>
    )
}

export default Navbar;