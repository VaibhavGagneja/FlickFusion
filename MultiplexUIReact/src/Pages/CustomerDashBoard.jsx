import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { GrTrophy } from "react-icons/gr";
import { GiDiamondTrophy } from "react-icons/gi";
import { GiLaurelsTrophy } from "react-icons/gi";


import { RiMedal2Line } from "react-icons/ri";
import { GiMoebiusStar } from "react-icons/gi";
import user from '../Images/user.jpg';
import change from '../Images/change.png';
import ticket from '../Images/ticket.jpg'


import '../Pages/adminuser.css';


export class CustomerDashBoard extends Component {
  render() {
    return (<div className="container-fluid" id="adminuser">
      <div className="row" id="row44">
        <h2 id="ah2"><i>TOP GROSSING MOVIE</i></h2>
        <div className="col-3">
          <div className="card" id="cardr4">
            <div className="card-body" id="aucards1">
              <div className="d-flex justify-content-between px-md-1">
                <div className="align-self-center">
                  <i ><GiLaurelsTrophy size={45} color={"black"} /></i>
                </div>
                <div className="text-end">
                  <h3>RRR</h3>
                  <h3>RS.1100 CR</h3>
                  <p className="mb-0">Worldwide Collection</p>
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
                  <i ><GiDiamondTrophy size={45} color={"black"} /></i>
                </div>
                <div className="text-end">
                  <h3>KGF-2</h3>
                  <h3>RS.1200 CR</h3>
                  <p className="mb-0">Worldwide Collections</p>
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
                  <i ><RiMedal2Line size={45} color={"black"} /></i>
                </div>
                <div className="text-end">
                  <h3>RUNWAY 34</h3>
                  <h3>RS 80 CR</h3>
                  <p className="mb-0">WORLDWIDE COLLECTION</p>
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
                  <i ><GiMoebiusStar size={45} color={"black"} /></i>
                </div>
                <div className="text-end">
                  <h3>JERSEY</h3>
                  <h3>RS.70 CR</h3>
                  <p className="mb-0">WORLDWIDE COLLECTION</p>
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
                <h3 className="card-title">SHOW ALL MULTIPLEX</h3>
                <p className="card-text">Select the multiplex, choose the movie you want to watch and book the tickets .</p>
                <Link to="/showallmultiplex" className="btn btn-dark">SELECT MULTIPLEX </Link>
              </div>
            </div>
          </div>
          <div className='col md-3'><div className="card-w-30">
            <div className="card-body" id="aucardsa">
              <h3 className="card-title">ADD FEEDBACK</h3>
              <p className="card-text">Your valuable feed is always welcomed so to add your feedback click on the button below.</p>
              <Link to="/addfeedback" className="btn btn-dark">ADD FEEDBACK</Link>
            </div>
          </div>
          </div>
          <div className='col md-3'><div className="card-w-30">
            <div className="card-body" id="aucardsa">
              <h3 className="card-title">SHOW ALL FEEDBACKS</h3>
              <p className="card-text">To view all the feedbacks and ratings click on the button below. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <Link to="/showallfeedbackcust" className="btn btn-dark">SHOW FEEDBACKS</Link>
            </div>
          </div>
          </div>

        </div>
        <br />
        {/* <div className='row 2' >
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
                   <Link to="/addscreen" className="btn btn-dark">SHOW TICKETS</Link>
               </div>
           </div>
           </div>

       </div> */}
      </div>

      <div className='row my-1' id="row-3">
        <h2 id="ah2"><i>USER FUNCTIONALITIES</i></h2>
        <br></br>
        <br></br>
        <div className='col md-5'> <div className="cardrow2" style={{ width: "18rem" }}> <img
          src={user}
          width={150}
          height={150}
          className="card-img-top"
          alt="..."
        />

          <div className="card-body" id="aucards2">

            <h4 className="card-title">USER PROFILE</h4>
            <p className="card-text">To see your profile , click on the button below</p>
            <Link to="/ShowTable" className="btn btn-dark">GO TO PROFILE</Link>
          </div>
        </div>
        </div>
        <div className='col md-5'> <div className="cardrow23" style={{ width: "18rem" }}> <img
          src={change}
          width={150}
          height={150}
          className="card-img-top"
          alt="..."
        />

          <div className="card-body" id="aucards2">
            <h4 className="card-title">CHANGE PASSWORD</h4>
            <p className="card-text">Want to change your password ? Click on the button bellow</p>
            <Link to="/changepass" className="btn btn-dark">Change</Link>
          </div>
        </div>
        </div>
        <div className='col md-5'> <div className="cardrow23" style={{ width: "18rem" }}>
          <img
            src={ticket}
            width={150}
            height={150}
            className="card-img-top"
            alt="..."
          />

          <div className="card-body" id="aucards2">
            <h4 className="card-title">DOWNLOAD TICKETS</h4>
            <p className="card-text">To download your ticket Click on the button bellow</p>
            <Link to="/showticketbymobno" className="btn btn-dark">CLICK HERE </Link>
          </div>
        </div>
        </div>
      </div>
      c
    </div>

    )
  }
}

export default CustomerDashBoard

{/* <Router> */ }
{/* <nav>

    <Link to="/changepass">ChangePass</Link>
    <br></br>
    <Link to="/showallmultiplex">showallmultiplex</Link>
    <br></br>
    <Link to="/showallfeedback">showallfeedback</Link>
    <br></br>
    <Link to="/ShowAllMovie">ShowAllMovie</Link>
    <br></br>
    {/* <Link to="/addticket">addticket</Link> *
    <Link to="/BookTicket">bookticket</Link>
    <br></br>
    <Link to="/showticketbymobno">show tickets by mobileNo</Link>
    <br></br>
    <Link to="/ShowCustomer">show tickets by mobileNo</Link>
    </nav> */}
{/* </Router> */ }