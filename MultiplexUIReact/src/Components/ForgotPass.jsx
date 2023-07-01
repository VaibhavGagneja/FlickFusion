import React from "react";
import Axios from "axios";
import './forgotpass.css'
import LoginFormUser from "./LoginFormUser";
export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MobileNumber: "",
      loginform:false
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: [event.target.value],
    });
  };

  showData = (event) => {
    let mobilenumber = this.state.MobileNumber;

    alert(`${mobilenumber}`);
    // console.log(mobilenumber)
    // event.preventDefault();http://localhost:5155/
    sessionStorage.getItem("MobileNumber");
    Axios.put(
      "http://localhost:5155/api/RegisterAPI/ForgotPassword/" + mobilenumber
    ).then((r) => {
      console.log(r.data);
      if (r.data != "") {
        this.type = r.data;
        // console.log(typeof(r.data))
        console.log("New Password " + this.type);
        // sessionStorage.setItem("MNO", this.type);
        // if (this.type == "Customer")
        // ReactDOM.render(<DashBoardCustomer />, document.getElementById('root'));
        // if (this.type == "Admin")
        // ReactDOM.render(<DashBoardAdmin />, document.getElementById('root'));
      } else {
        alert("Invalid Credentials");
      }
    });
    // alert(`${this.props.data}`)
    event.preventDefault();
  };
  handleForgotPass = (event) => {
    this.setState((prevState) => ({
      loginform: !prevState.loginform,
    }));
  };
  render() {
    if(this.state.loginform){
     return <LoginFormUser/>
    }else 
    return (
      <div className="container3">

      <form onSubmit={this.showData} className="cont">
        <div className="form">
          <h2>Forgot Password</h2>
          <label htmlFor="">
            <span>Mobile Number</span>
            <input type="tel" onInput={this.handleChange} name="MobileNumber" />
          </label>

          <button className="submit" type="submit">
            Submit
          </button>
          <span className="forgot-pass" onClick={this.handleForgotPass}>
              Log in  
            </span>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img-text m-up">
              <h2>We are Happy to Help ?</h2>
              <p>Log In and Watch new Movies in nearby Theater</p>
            </div>
            {/* <div className="img-text m-in">
              <h2>One of us?</h2>
              <p>
              If you already has an account, just sign in. We've missed you!
              </p>
            </div> */}
            {/* <div class="img-btn" onClick={this.handleClick}>
              <span class="m-up">Sign Up</span>
              <span class="m-in">Sign In</span>
            </div> */}
          </div>
          
        </div>
      </form>
            </div>
    );
  }
}
