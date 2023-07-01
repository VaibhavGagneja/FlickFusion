import React from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import "./registerform.css";

import "./loginform.css";
import AdminDashBoard from "../Pages/AdminDashBoard";
import ApplicationOwnerDashboard from "../Pages/ApplicationOwnerDashboard";
import CustomerDashBoard from "../Pages/CustomerDashBoard";
import RegisterUser2 from "./RegisterUser2";
import RegisterUser from "./RegisterUser";
import ForgotPassword from "./ForgotPass";
// import ChangePassword from './ChangePass'
export default class LoginFormUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MobileNumber: "",
      PassWord: "",
      redirect: false,
      reg: "",
      toggle: false,
      forgotpass: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  showData = (event) => {
    let mobilenumber = this.state.MobileNumber;
    let password = this.state.PassWord;
    alert(`${mobilenumber} ${password}`);
    // console.log(mobilenumber)
    // event.preventDefault();http://localhost:5155/

    Axios.get(
      "http://localhost:5155/api/RegisterAPI/Login/" +
      mobilenumber +
      "/" +
      password
    ).then((r) => {
      console.log(this.state.reg);
      if (r.data != "") {
        // this.type = r.data;
       console.log(r.data);
        this.setState({ reg: r.data.substring(10) });
        //  this.state.reg=r.data.substring(10);
        // console.log("User:" + this.type.substring(10));
        sessionStorage.setItem("MobileNumber", mobilenumber);
        localStorage.setItem("MobileNumber", mobilenumber);
        sessionStorage.setItem("RegType", this.state.reg);
        localStorage.setItem("RegType", r.data.substring(10));
        // console.log(parseInt(sessionStorage.getItem('MobileNumber')))

        // if (this.type == "Admin")
        // ReactDOM.render(<DashBoardAdmin />, document.getElementById('root'));
      } else {
        alert("Invalid Credentials");
      }
    });
    this.setState({ redirect: true });
    event.preventDefault();
  };
  handleClick = (event) => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
    console.log(this.state.toggle);
  };
  handleForgotPass = (event) => {
    this.setState((prevState) => ({
      forgotpass: !prevState.forgotpass,
    }));
    console.log(this.state.forgotpass);
  };
  render() {
    if (this.state.redirect) {
      console.log(this.state.reg == "Customer",this.state.reg);
      if (this.state.reg == "Customer") {
        return <CustomerDashBoard />;
      } else if (this.state.reg == "Admin") {
        return <AdminDashBoard />;
      } else if (this.state.reg == "Application Owner") {
        return <ApplicationOwnerDashboard />;
      }
    } else if (this.state.forgotpass) {
      return <ForgotPassword />
    }
    else
      return (
        <div className="container1">

          <form
            onSubmit={this.showData}
            className={this.state.toggle ? "cont s-signup" : "cont"}
          >
            <div className="form">
              <h2>Login</h2>
              <label htmlFor="">
                <span>Mobile Number</span>
                <input
                  type="tel"
                  onInput={this.handleChange}
                  name="MobileNumber"
                />
              </label>
              <label htmlFor="">
                <span>Password</span>
                <input
                  type="password"
                  onInput={this.handleChange}
                  name="PassWord"
                />
              </label>
              <button className="submit" type="submit">
                Submit
              </button>
              <span className="forgot-pass" onClick={this.handleForgotPass}>
                Forgot Your password ?
              </span>
              <div className="social-media">
                <ul>
                  <li>
                    <RiFacebookCircleFill size={35} color={"#4267B2"} />
                  </li>
                  <li>
                    <RiTwitterFill size={35} color={"#1DA1F2"} />
                  </li>
                  <li>
                    <RiLinkedinBoxFill size={35} color={"#0A66C2"} />
                  </li>
                  <li>
                    <RiInstagramLine size={35} color={"#C13584"} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="sub-cont">
              <div className="img">
                <div className="img-text m-up">
                  <h2>New Here ?</h2>
                  <p>Sign Up and Watch new Movies in nearby Theater</p>
                </div>
                <div className="img-text m-in">
                  <h2>One of us?</h2>
                  <p>If you already has an account, just sign in. We've missed you!</p>
                </div>
                <div class="img-btn" onClick={this.handleClick}>
                  <span class="m-up">Sign Up</span>
                  <span class="m-in">Sign In</span>
                </div>
              </div>
              <div className="">
                <RegisterUser2 />
              </div>
            </div>
          </form>
        </div>

        /* <Link to="/changepass">ChangePass</Link>
                <Link to="/addfeedback">Add feedback</Link>
                <Link to="/addmultiplex">Add Multiplex</Link>
            <Link to="/addticket">addticket</Link>  
                <Link to="/showalltickets">show all tickets</Link>
                <Link to="/showticketbymobno">show tickets by mobileNo</Link> */
      );
  }
}
