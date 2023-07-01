import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import ShowTable from "./ShowTable";
import './showcustomer.css'
export default class ShowCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNo: localStorage.getItem("MobileNumber"),
            Register: null,
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
        Axios.get("http://localhost:5155/api/RegsiterAPI/GetUserByMobNo/" + mno).then(
            r => {
                if (r) {
                    this.Register = r;
                    console.log(this.Register.data);
                    sessionStorage.setItem("name", this.Register.data.name);
                    sessionStorage.setItem("email", this.Register.data.email);
                    sessionStorage.setItem("mno", this.Register.data.mobileNo);
                    sessionStorage.setItem("regtype", this.Register.data.regType);
                    ReactDOM.render(<ShowTable />, document.getElementById('root'));
                }
                else
                    alert('No Members Found');
            });
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="showcont">
                <form className="was-validated">
                    <h2>Find User by Mobile Number</h2>
                    <div className="form-group custcontainer">
                        <label>Enter Customer By Mobile No</label>
                        <input type="text" className="form-Control" placeholder="Enter Mobile Number"
                            required name="mobileNo" onInput={this.GetData} readOnly />
                        <div className="invalid-feedback">Mobile Number cannot be blank.</div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary btn-block" onClick={this.ShowData}>Show</button>
                        <button type="reset" className="btn btn-danger btn-block">Reset</button>
                    </div>
                    <hr></hr>
                </form>
            </div>
        );
    }
}