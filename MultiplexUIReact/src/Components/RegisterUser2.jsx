import React from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./registerform.css";
// import '../Components/loginform.css'
import Axios from "axios";
import { BsPersonBoundingBox } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { CgUserList } from "react-icons/cg";
// import register1 from "../Images/register1.jpg";
import ReactDOM from "react-dom";
// import '../Home/style.css';
class RegisterUser2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      custname: "",
      email: "",
      mobileno: "",
      //uname:'',
      pass: "",
      utype: "",
    };
  }
  //var name=document.getElementsByName[0].value;
  //var name=document.getElementById.value;
  GetData = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  ShowData = (event) => {
    let AppUser = {
      Email: "super@jwt.com",
      Password: "abc@123",
    };
    var token = null;
    Axios.post("http://localhost:5155/api/token", AppUser).then((r) => {
      console.log(r);
      token = r.data;
      let name = this.state.custname;
      let mail = this.state.email;
      let mno = this.state.mobileno;
      let pwd = this.state.pass;
      let utype = this.state.utype;
      // console.log(name + "," + mail + "," + mno + "," + pwd);
      const customer = {
        Email: mail,
        Name: name,
        MobileNo: parseInt(mno),
        Password: pwd,
        RegType: utype,
        Tickets: [],
        Feedbacks: [],
      };
      alert(`Bearer ${token}`);
      console.log(customer);
      Axios.post("http://localhost:5155/api/RegisterAPI/InsertUser", customer, {
        headers: { Authorization: `Bearer  ${token}` },
      }).then((r) => {
        if (r) {
          alert("New Customer Added");
          // ReactDOM.render(<LoginForm/>,document.getElementById("root"));
        }
      });
    });
    event.preventDefault();
  };
  componentDidMount() {}
  render() {
    return (
      <div className="container2">

      <form className="was-validated form sign-up" onSubmit={this.ShowData}>
        <div className="">
          <h2 className="">
            <i>REGISTER</i>
          </h2>
          <label id="label1">
            {/* <BsPersonBoundingBox/> */}
            <input
              type="text"
              className="form-Control"
              placeholder="Enter Your Name"
              required
              name="custname"
              onInput={this.GetData}
              />
          </label>
          <label id="label1">
            {/* <MdEmail/> */}
            <input
              type="email"
              className="form-Control"
              placeholder="Enter Your Email"
              required
              name="email"
              onInput={this.GetData}
              />
          </label>
          {/* <br /> */}
          <label id="label1">
            {/* <BsFillTelephoneFill /> */}
            <input
              type="text"
              className="form-Control"
              placeholder="Enter Your Mobile No"
              required
              name="mobileno"
              onInput={this.GetData}
              />
          </label>
          <div className="invalid-feedback"> </div>
          {/* <br /> */}
          <label id="label1">
            {/* <RiLockPasswordFill /> */}
          <input
            type="password"
            className="form-Control"
            placeholder="Enter Your Password"
            required
            name="pass"
            onInput={this.GetData}
            />
          <div className="invalid-feedback"> </div>
            </label>
          {/* <br /> */}
          <label id="label2">
            {/* <CgUserList /> */}
          <select name="utype" id="label3" required onInput={this.GetData}>
            <option value="">Select User Type</option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
            <option value="Application Owner">Application Owner</option>
          </select>
          <div className="invalid-feedback"></div>
          </label>
          <button type="submit" className="submit" id="submit">
            Register
          </button>
          <button type="reset" className="submit" id="submit">
            Reset
          </button>
        </div>
      </form>
            </div>
    );
  }
}
export default RegisterUser2;
