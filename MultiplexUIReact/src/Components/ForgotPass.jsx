import React from "react";
import Axios from "axios";
import LoginFormUser from "./LoginFormUser";

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MobileNumber: "",
      loginform: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  showData = (event) => {
    event.preventDefault();
    let mobilenumber = this.state.MobileNumber;
    alert(`${mobilenumber}`);

    sessionStorage.getItem("MobileNumber");

    Axios.put(
      "http://localhost:5155/api/RegisterAPI/ForgotPassword/" + mobilenumber
    )
      .then((r) => {
        console.log(r.data);
        if (r.data !== "") {
          this.type = r.data;
          console.log("New Password " + this.type);
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleForgotPass = () => {
    this.setState((prevState) => ({
      loginform: !prevState.loginform,
    }));
  };

  render() {
    if (this.state.loginform) {
      return <LoginFormUser />;
    } else {
      return (
        <form onSubmit={this.showData} className="container p-4">
          <div className="form-group row justify-content-around">
            {/* <label for="" className="col-sm col-form-label"></label> */}
            <div className="col-6">
              <input
                type="tel"
                onChange={this.handleChange}
                name="MobileNumber"
                placeholder="Mobile Number"
                className="form-control"
              />
            </div>
            <button className="submit" type="submit" class="btn btn-primary col-2">
              Submit
            </button>
            <button className="col-2 btn btn-secondary" onClick={this.handleForgotPass}>
              Log in
            </button>
          </div>
         
        </form>
      );
    }
  }
}
