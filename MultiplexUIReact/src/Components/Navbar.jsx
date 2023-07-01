import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import './home.css';

import head from '../Images/head.jpg';

import LoginFormUser from "../Components/LoginFormUser";
class NavBar extends React.Component {
    render() {
        return (
            <div className="Container-fluid" id="box">
                <div className="row my-1" >
                    {/* <Router> */}
                    <nav class="navbar navbar-expand-lg navbar-light bg-light"  >
                        <div class="container-fluid" id="row1">
                            <h3 id="s3"><img src={head} width={75} height={75} /> &nbsp; BOOK MY MOVIE</h3>
                            <ul class="navbar-nav mr-auto " id="nav">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" id="s3" to='/'><h5>Home</h5></Link>
                                </li>
                                
                                <li class="nav-item">
                                    <Link to="./AboutUs" class="nav-link active" aria-current="page" id="s3">
                                    <h5>AboutUs</h5>
                                    </Link>
                                </li>
                                {/* <button class="btn btn-secondary" type="submit" id="b1">
                                    <Link to="/adduser">Register</Link>
                                </button> */}
                                <div> </div>
                                <button class="btn btn-secondary" type="submit" id="b1">
                                    <Link to="/Login">Login</Link>
                                </button>
                            </ul>
                        </div>
                    </nav>
                    {/* <Routes>
                        <Route exact path="/SignUp" element={<LoginFormUser/>}></Route>
                    </Routes>
                */}
                {/* </Router>  */}
                </div>
            </div>
        )
    }
}
export default NavBar