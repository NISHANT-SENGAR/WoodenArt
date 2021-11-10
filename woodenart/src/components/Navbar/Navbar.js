import React from "react";
import { Link } from "react-router-dom";
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
                    <ul className="links">
                        <li>
                           Home
                        </li>
                        <li>
                           About
                        </li>
                        <li>
                           Products
                        </li>
                    </ul>
                    <button className='btn'>Sign up</button>
                </div>

            </nav>
        </header>
    )
}

export default Navbar;