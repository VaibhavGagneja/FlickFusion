import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import head from '../Images/logo.png';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg text-dark px-2" style={{ backgroundColor: '#ebe0f6'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={head} width={100} height={100} alt="Logo" />
                    </Link>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AboutUs">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
