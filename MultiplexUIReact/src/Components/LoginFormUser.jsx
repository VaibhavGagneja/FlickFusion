import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
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
import AdminDashBoard from "../Pages/AdminDashBoard";
import ApplicationOwnerDashboard from "../Pages/ApplicationOwnerDashboard";
import CustomerDashBoard from "../Pages/CustomerDashBoard";
import ForgotPassword from "./ForgotPass";

const LoginFormUser = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [reg, setReg] = useState("");
  const [forgotPass, setForgotPass] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "MobileNumber") {
      setMobileNumber(value);
    } else if (name === "PassWord") {
      setPassword(value);
    }
  };

  const showData = (event) => {
    event.preventDefault();

    const mobileNumberAsInt = parseInt(mobileNumber); // Convert mobileNumber to BigInt

    Axios.get(`http://localhost:5155/api/RegisterAPI/Login/${mobileNumberAsInt}/${password}`)
      .then((response) => {
        const data = response.data;
        console.log(response.data);
        if (data !== "") {
          setReg(data.substring(10));
          localStorage.setItem("MobileNumber", mobileNumberAsInt);
          localStorage.setItem("MobileNumber", mobileNumberAsInt);
          localStorage.setItem("RegType", data.substring(10));
          localStorage.setItem("RegType", data.substring(10));
          setRedirect(true);
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgotPass = () => {
    setForgotPass((prevState) => !prevState);
  };

  if (redirect) {
    if (reg === "Customer") {
      return <CustomerDashBoard />;
    } else if (reg === "Admin") {
      return <AdminDashBoard />;
    } else if (reg === "Application Owner") {
      return <ApplicationOwnerDashboard />;
    }
  } else if (forgotPass) {
    return <ForgotPassword />;
  } else {
    return (
      <div className="container">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/adduser">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/login">
              Sign In
            </Link>
          </li>
        </ul>
        <form onSubmit={showData}>
          <div className="form-group row">
            <label for="InputMobile" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="tel"
                id="mobileNumber"
                name="MobileNumber"
                value={mobileNumber}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="password" className="col-sm-2 col-form-label">Password
            </label>
            <div className="col-sm-10">

              <input
                type="password"
                id="password"
                name="PassWord"
                value={password}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <button className="btn btn-primary submit" type="submit">
            Submit
          </button>
          <span className="forgot-pass" onClick={handleForgotPass}>
            Forgot Your password?
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
        </form >
      </div>

    );
  }
};

export default LoginFormUser;
