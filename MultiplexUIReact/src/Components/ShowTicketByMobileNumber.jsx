import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import ReactDOM from 'react-dom';
// import './showcustomer.css'

import ShowTableTicket from "./ShowTableTicket ";
import { Link } from "react-router-dom";
export default class ShowTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNo: localStorage.getItem('MobileNumber'),
            Ticket: null,
        }
    }
    //var name=document.getElementsByName[0].value;
    //var name=document.getElementById.value;
    GetData = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    ShowData = (event) => {
        event.preventDefault();
        let mno = parseInt(this.state.mobileNo);
        console.log(mno);
        Axios.get("http://localhost:5155/api/TicketAPI/GetTicketById/" + mno, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
        }).then(
            r => {
                if (r) {
                    this.Ticket = r;
                    console.log(r);
                    localStorage.setItem("TicketId", this.Ticket.data.ticketId);
                    localStorage.setItem("CreatedAt", this.Ticket.data.movietiming);
                    // localStorage.setItem("name",this.Register.data.name);
                    localStorage.setItem("Quantity", this.Ticket.data.quantity);
                    localStorage.setItem("TicketType", this.Ticket.data.ticketType);
                    localStorage.setItem("ScreenId", this.Ticket.data.screenId);
                    localStorage.setItem("MovieId", this.Ticket.data.movieId);
                    localStorage.setItem("mno", this.Ticket.data.mobileNo);
                    // localStorage.setItem("MovieDuration",this.Register.data.MovieDuration);
                    //localStorage.setItem("Price",this.Register.data.Price);
                    ReactDOM.render(<ShowTableTicket />, document.getElementById('root'));
                }
                else
                    alert('No Ticket Found');
            });
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="container-sm p-5 my-5 border showcont">
                <form className="was-validated">
                    <h2>Find Ticket by Mobile Number</h2>
                    <div className="form-group custcontainer">
                        <label>Enter Customer By Mobile No</label>
                        <input type="text" className="form-Control" placeholder="Enter Mobile Number"
                            required name="mobileNo" onInput={this.GetData} readOnly />
                        <div className="invalid-feedback">Mobile Number cannot be blank.</div>
                    </div>
                    <div className="custbutton">
                        <button type="button" className="btn btn-primary " onClick={this.ShowData}>Show</button>
                        <Link to="/CustomerDashBoard">
                        <button id="" className='btn btn-primary' >Dashboard</button>
                    </Link >
                    </div>
                    <hr></hr>
                </form>
            </div>
        );
    }
}