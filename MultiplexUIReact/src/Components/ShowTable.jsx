import React from "react";
import Axios from 'axios';
import ReactDOM from 'react-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './styleshowcustomer.css';
import profile from '../Images/q.png';
import { BiUser } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";
export default class ShowTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo: localStorage.getItem("MobileNumber"),

      // mno: localStorage.getItem("mno"),
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      regtype: localStorage.getItem('regtype'),
      //  mno:localStorage.getItem('mno')
    }
    console.log(this.state.mno + "," + this.state.name + "," + this.state.email + "," + this.state.regtype);
  }
  componentDidMount() {
    
      let mno = parseInt(this.state.mobileNo);
      console.log(mno);
      Axios.get("http://localhost:5155/api/RegsiterAPI/GetUserByMobNo/" + mno, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
    }).then(
          r => {
              if (r) {
                  this.Register = r;
                  console.log(this.Register.data);
                  localStorage.setItem("name", this.Register.data.name);
                  localStorage.setItem("email", this.Register.data.email);
                  // localStorage.setItem("mno", this.Register.data.mobileNo);
                  localStorage.setItem("regtype", this.Register.data.regType);
                  ReactDOM.render(<ShowTable />, document.getElementById('root'));
              }
              else
                  alert('No Members Found');
          });
  
  }
  render() {
    return (
      <div className="cant42">
       
        
        <div className="container42">
        <h3 className="tt">YOUR PROFILE</h3>
        
          <div className="img2">  <img src={profile} width={350} height={350}></img></div>
          <br></br>
          

          <div className="content">
          &nbsp; &nbsp; &nbsp; &nbsp;
            <BiUser size={50}></BiUser> &nbsp;&nbsp;&nbsp;&nbsp; <b >Name - {this.state.name}</b>
            <br></br>
            <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <BsFillTelephoneFill size={50}></BsFillTelephoneFill> &nbsp;&nbsp;&nbsp;&nbsp;
            <b>Mobile Number - {this.state.mobileNo}</b>
            <br></br>
            <br></br>
            &nbsp;  &nbsp; &nbsp; &nbsp;
            <MdEmail size={50}></MdEmail>&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Email - {this.state.email}</b>
            <br></br>
            <br></br>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <ImProfile size={50}></ImProfile>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Registration Type - {this.state.regtype}</b>


          </div>



        </div>
      </div>
    );
  }
}
