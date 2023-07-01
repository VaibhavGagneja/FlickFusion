import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "./registerform.css";
import Axios from "axios";

const RegisterUser2 = () => {
  const [custname, setCustname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [pass, setPass] = useState("");
  const [utype, setUtype] = useState("");
  const [mobilenoError, setMobilenoError] = useState(false);

  const GetData = (event) => {
    const { name, value } = event.target;
    if (name === "custname") setCustname(value);
    else if (name === "email") setEmail(value);
    else if (name === "mobileno") setMobileno(value);
    else if (name === "pass") setPass(value);
    else if (name === "utype") setUtype(value);
  };

  const ShowData = (event) => {
    console.log(event,"hello")
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
          
          Axios.post("http://localhost:5155/api/RegisterAPI/InsertUser", customer, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((r) => {
            if (r.data) {
              alert("New Customer Added");
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
      event.preventDefault();
    };
    
    return (
    <div className="container2">
      <form className="was-validated form sign-up" onSubmit={ShowData}>
        <div className="">
          <h2 className="">
            <i>REGISTER</i>
          </h2>
          <label id="label1">
            <input
              type="text"
              className={`form-control ${mobilenoError ? "is-invalid" : ""}`}
              placeholder="Enter Your Name"
              required
              name="custname"
              value={custname}
              onChange={GetData}
            />
          </label>
          <label id="label1">
            <input
              type="email"
              className={`form-control ${mobilenoError ? "is-invalid" : ""}`}
              placeholder="Enter Your Email"
              required
              name="email"
              value={email}
              onChange={GetData}
            />
          </label>
          <label id="label1">
            <input
              type="text"
              className={`form-control ${mobilenoError ? "is-invalid" : ""}`}
              placeholder="Enter Your Mobile No"
              required
              name="mobileno"
              value={mobileno}
              onChange={GetData}
            />
            {mobilenoError && <div className="invalid-feedback">Please enter a valid mobile number.</div>}
          </label>
          <label id="label1">
            <input
              type="password"
              className={`form-control ${mobilenoError ? "is-invalid" : ""}`}
              placeholder="Enter Your Password"
              required
              name="pass"
              value={pass}
              onChange={GetData}
            />
          </label>
          <label id="label2">
            <select
              name="utype"
              id="label3"
              required
              value={utype}
              onChange={GetData}
              className={`form-control ${mobilenoError ? "is-invalid" : ""}`}
            >
              <option value="">Select User Type</option>
              <option value="Customer">Customer</option>
              <option value="Admin">Admin</option>
              <option value="Application Owner">Application Owner</option>
            </select>
          </label>
          <button type="submit" className="submit" id="submit">
            Register
          </button>
          <button type="reset" className="submit" id="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser2;
