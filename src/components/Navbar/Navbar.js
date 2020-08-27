import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src="images/logo-p.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Catagories</a>
                    </li>
                    </ul>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Sign Up</button>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;