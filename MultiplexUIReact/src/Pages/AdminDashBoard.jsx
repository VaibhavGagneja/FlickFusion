import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// import user from '../Images/user.jpg';
// import change from '../Images/change.png';

import {BiUserCircle } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import {AiOutlineLineChart} from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";

import '../Pages/adminuser.css';


export class AdminDashBoard extends Component {
    render() {
        return (
            <div className="container-fluid" id="adminuser">
                 <div className="row" id="row44">
                    <h2 id="ah2"><i>WEBSITE STATS</i></h2>
      <div className="col-3">
        <div className="card" id="cardr4">
          <div className="card-body" id="aucards1">
            <div className="d-flex justify-content-between px-md-1">
              <div className="align-self-center">
                <i ><BiUserCircle size={45} color={"black"}/></i>
              </div>
              <div className="text-end">
                <h3>100K</h3>
                <p className="mb-0">Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card" id="cardr4">
          <div className="card-body" id="aucards3">
            <div className="d-flex justify-content-between px-md-1">
              <div className="align-self-center">
                <i ><IoTicketSharp size={45} color={"black"}/></i>
              </div>
              <div className="text-end">
                <h3>155K</h3>
                <p className="mb-0">Tickets Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card" id="cardr4">
          <div className="card-body" id="aucards5">
            <div className="d-flex justify-content-between px-md-1">
              <div className="align-self-center">
                <i ><GiMoneyStack size={45} color={"black"}/></i>
              </div>
              <div className="text-end">
                <h3>RS. 3Cr</h3>
                <p className="mb-0">Total Sales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card" id="cardr4">
          <div className="card-body" id="aucards4">
            <div className="d-flex justify-content-between px-md-1">
              <div className="align-self-center">
                <i ><AiOutlineLineChart size={45} color={"black"}/></i>
              </div>
              <div className="text-end">
                <h3>20%</h3>
                <p className="mb-0">Monthly Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container-fluid" id="row11">
                <div className='row my-1'>
                    <h2 id="ah2"><i>FUNCTIONALITIES </i> </h2>
                    <br></br>
                    <br></br>
                    <div className='col md-3'>
                        <div className="card-w-30" >
                            <div className="card-body" id="aucardsa">
                                <h3 className="card-title">ADD MULTIPLEX</h3>
                                <p className="card-text">To list your multiplex on the website click on the button below.</p>
                                <Link to="/addmultiplex" className="btn btn-dark">ADD MULTIPLEX </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col md-3'><div className="card-w-30">
                        <div className="card-body" id="aucardsa">
                            <h3 className="card-title">ADD MOVIE</h3>
                            <p className="card-text">To add movie to your multiplex click on the button below.</p>
                            <Link to="/AddMovie" className="btn btn-dark">ADD MOVIE </Link>
                        </div>
                    </div>
                    </div>
                    <div className='col md-3'><div className="card-w-30">
                        <div className="card-body" id="aucardsa">
                            <h3 className="card-title">ADD SCREEN</h3>
                            <p className="card-text">To add screens to your multiplex click on the button below.</p>
                            <Link to="/addscreen" className="btn btn-dark">ADD SCREENS</Link>
                        </div>
                    </div>
                    </div>

                </div>
                <br />
                <div className='row 2' >
                    <div className='col md-3'>
                        <div className="card-w-30">
                            <div className="card-body" id="aucardsa">
                                <h3 className="card-title">SHOW ALL SCREENS</h3>
                                <p className="card-text">To see all the screen listed click on the button below</p>
                                <Link to="/showallscreen" className="btn btn-dark">SHOW SCREENS</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col md-3'><div className="card-w-30">
                        <div className="card-body" id="aucardsa">
                            <h3 className="card-title">SHOW ALL MOVIE</h3>
                            <p className="card-text">To see all the movies listed click on the button below.</p>
                            <Link to="/ShowAllMovie" className="btn btn-dark">SHOW MOVIE</Link>
                        </div>
                    </div>
                    </div>
                    <div className='col md-3'><div className="card-w-30">
                        <div className="card-body" id="aucardsa">
                            <h3 className="card-title">SHOW ALL TICKETS</h3>
                            <p className="card-text">To see the details of the tickets sold click on the button below.</p>
                            <Link to="/showalltickets" className="btn btn-dark">SHOW TICKETS</Link>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
                
                <div className='row my-1' id="row-3">
                    <h2 id="ah2"><i>ADMIN FUNCTIONALITIES</i></h2>
                    <br></br>
                    <br></br>
                    <div className='col md-5'> <div className="cardrow2" style={{ width: "30rem" }}>
                        
                        <div className="card-body" id="aucards2">
                            <h4 className="card-title">USER PROFILE</h4>
                            <p className="card-text">To see your profile , click on the button below</p>
                            <Link to="/ShowTable" className="btn btn-dark">GO TO PROFILE</Link>
                        </div>
                    </div>
                    </div>
                    <div className='col md-5'> <div className="cardrow23" style={{ width: "30rem" }}>
                       
                        <div className="card-body" id="aucards2">
                            <h4 className="card-title">CHANGE PASSWORD</h4>
                            <p className="card-text">Want to change your password ? Click on the button bellow</p>
                            <Link to="/changepass" className="btn btn-dark">Change</Link>
                        </div>
                    </div>
                    </div>

                </div>
               



               

            </div>
        )
    }
}

export default AdminDashBoard
 {/* <Router> */}
                {/* <Link to="/changepass">ChangePass</Link>
                        <br></br>
                        <Link to="/AddMovie">AddMovie</Link>
                        <br></br>
                        <Link to="/addmultiplex">Add Multiplex</Link>
                        <br></br>
                        <Link to="/addscreen">Add Screen</Link>
                        <br></br>
                        <Link to="/showallscreen">Show all Screen</Link>
                        <br></br>
                        <Link to="/ShowAllMovie">ShowAllMovie</Link>
                        <br></br>

                        <Link to="/addticket">addticket</Link>
                        <br></br>

                        <Link to="/showalltickets">show all tickets</Link> */}

                {/* </Router> */}