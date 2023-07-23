import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const RegisterUserTab = () => {
    const [custname, setCustname] = useState("");
    const [email, setEmail] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [pass, setPass] = useState("");
    const [utype, setUtype] = useState("");
    const [mobilenoError, setMobilenoError] = useState(false);
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState("signup");

    const handleNavClick = (link) => {
        setActiveLink(link);
    };

    const GetData = (event) => {
        const { name, value } = event.target;
        if (name === "custname") setCustname(value);
        else if (name === "email") setEmail(value);
        else if (name === "mobileno") setMobileno(value);
        else if (name === "pass") setPass(value);
        else if (name === "utype") setUtype(value);
    };

    const ShowData = (event) => {
        event.preventDefault();
        // Validation checks
        let isValid = true;
        if (mobileno.length !== 10 || isNaN(mobileno)) {
            setMobilenoError(true);
            isValid = false;
        } else {
            setMobilenoError(false);
        }

        // Submit data if valid
        if (isValid) {
            let AppUser = {
                Email: "super@jwt.com",
                Password: "abc@123",
            };

            Axios.post("http://localhost:5155/api/token", AppUser)
                .then((r) => {
                    console.log(r.data);
                    const token = r.data;

                    const customer = {
                        Email: email,
                        Name: custname,
                        MobileNo: parseInt(mobileno),
                        Password: pass,
                        RegType: utype,
                        Tickets: [],
                        Feedbacks: [],
                    };

                    Axios.post(
                        "http://localhost:5155/api/RegisterAPI/InsertUser",
                        customer,
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    )
                        .then((r) => {
                            if (r.data) {
                                alert("New Customer Added");
                                navigate("/login"); // Navigate to the Sign In tab after successful registration
                            }
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <div className="container">
            <ul className="nav nav-pills justify-content-center container">
                <li className="nav-item">
                    <Link
                        className={`nav-link ${activeLink === "signup" ? "active" : ""}`}
                        to="/adduser"
                        onClick={() => handleNavClick("signup")}
                    >
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${activeLink === "signin" ? "active" : ""}`}
                        to="/login"
                        onClick={() => handleNavClick("signin")}
                    >
                        Sign In
                    </Link>
                </li>
            </ul>
            <form className="was-validated form sign-up container" onSubmit={ShowData}>
                <div className="mb-3">
                    <input
                        type="text"
                        className={`form-control ${mobilenoError ? "is-invalid" : ""}`}
                        placeholder="Enter Your Name"
                        required
                        name="custname"
                        value={custname}
                        onChange={GetData}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className={`form-control ${mobilenoError ? "is-invalid" : ""}`}
                        placeholder="Enter Your Email"
                        required
                        name="email"
                        value={email}
                        onChange={GetData}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className={`form-control ${mobilenoError ? "is-invalid" : ""}`}
                        placeholder="Enter Your Mobile No"
                        required
                        name="mobileno"
                        value={mobileno}
                        onChange={GetData}
                    />
                    {mobilenoError && (
                        <div className="invalid-feedback">
                            Please enter a valid mobile number.
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className={`form-control ${mobilenoError ? "is-invalid" : ""}`}
                        placeholder="Enter Your Password"
                        required
                        name="pass"
                        value={pass}
                        onChange={GetData}
                    />
                </div>
                <div className="mb-3">
                    <select
                        name="utype"
                        required
                        value={utype}
                        onChange={GetData}
                        className={`form-select form-control ${mobilenoError ? "is-invalid" : ""}`}
                    >
                        <option value="">Select User Type</option>
                        <option value="Customer">Customer</option>
                        <option value="Admin">Admin</option>
                        <option value="Application Owner">Application Owner</option>
                    </select>
                </div>
                <div className="row justify-content-center">
                    <button type="submit" id="submit" className="submit btn btn-primary col-3 px-2">
                        Register
                    </button>
                    <button type="reset" id="reset" className="reset btn btn-secondary col-3 px-2">
                        Reset
                    </button>
                </div>
                <div className="text-center">
                    Already have an account?{" "}
                    <Link to="/login">Sign In</Link>
                </div>

            </form>
        </div>
    );
};

export default RegisterUserTab;
