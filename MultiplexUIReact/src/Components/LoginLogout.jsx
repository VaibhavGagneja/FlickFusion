import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const LoginLogout = () => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [mobilenoError, setMobilenoError] = useState(false);
    const [regType, setRegType] = useState("");
    
    const [forgotPass, setForgotPass] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "MobileNumber") {
            setMobileNumber(value);
        } else if (name === "PassWord") {
            setPassword(value);
        }
    };

    const showData = async (event) => {
        event.preventDefault();
        let isValid = true;
        if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
            setMobilenoError(true);
            isValid = false;
        } else {
            setMobilenoError(false);
        }
        if (isValid) {
            const mobileNumberAsInt = parseInt(mobileNumber);
            let AppUser = {
                Email: "super@jwt.com",
                Password: "abc@123",
            };
            try {
                const loginResponse = await Axios.post("http://localhost:5155/api/token/login", AppUser);
                const token = loginResponse.data;
                if (token) {
                    localStorage.setItem("jwtToken", token);
                    const userResponse = await Axios.get(
                        `http://localhost:5155/api/RegsiterAPI/GetUserByMobNo/${mobileNumberAsInt}`, {
                            headers: { Authorization: `Bearer ${token}` }
                        }
                    );
                    const userData = userResponse.data;
                    if (userData) {
                        setRegType(userData.regType);
                        console.log(regType);
                        if (userData.regType === "Customer") {
                            navigate("/customerdashboard");
                        } else if (userData.regType === "Application Owner") {
                            navigate("/applicationownerdashboard");
                        } else if (userData.regType === "Admin") {
                            navigate("/admindashboard");
                        }
                    }
                } else {
                    alert("Invalid Credentials");
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    

    const handleForgotPass = () => {
        setForgotPass((prevState) => !prevState);
    };
    const handleLogout = async () => {
        // Clear token from session storage
        localStorage.removeItem("jwtToken");
    
        // Redirect to the login page
        await new Promise(resolve => setTimeout(resolve, 0));
        navigate("/login");
    };
    

    // useEffect(() => {
    //     // Check if token exists in session storage
    //     const token = localStorage.getItem("jwtToken");
    //     if (token) {
    //         // Redirect to the dashboard or appropriate page
           
    //     }
    // }, []);

    return (
        <div className="container">
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

                </form >
            </div>

            {/* Logout button */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default LoginLogout;
