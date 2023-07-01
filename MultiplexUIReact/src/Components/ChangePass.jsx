import React from 'react'
import Axios from 'axios'
import './changepass.css'
import { Link } from 'react-router-dom'
export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MobileNumber: '',
            OldPassWord: '',
            NewPassWord:''
        }
    }
    handleChange = (event) => {
        this.setState({
           [event.target.name]: [event.target.value]
        });
    }

    showData =(event)=>{
        let mobilenumber = this.state.MobileNumber
        let oldpassword = this.state.OldPassWord
        let newpassword = this.state.NewPassWord
        alert(`${mobilenumber} ${oldpassword} ${newpassword}`)
        // console.log(mobilenumber)
        // event.preventDefault();http://localhost:5155/
        sessionStorage.getItem("MobileNumber")
        Axios.put("http://localhost:5155/api/RegisterAPI/ChangePassword/" + sessionStorage.getItem("MobileNumber") + "/" + oldpassword+"/"+newpassword).then(r => {
            console.log(r.data);
            if (r.data != '') {
                this.type = r.data;
                // console.log(typeof(r.data))
                console.log(this.type);
                // sessionStorage.setItem("MNO", this.type);
                // if (this.type == "Customer")
                // ReactDOM.render(<DashBoardCustomer />, document.getElementById('root'));
                // if (this.type == "Admin")
                // ReactDOM.render(<DashBoardAdmin />, document.getElementById('root'));
            }
            else {
                alert("Invalid Credentials");
            }
        });
        event.preventDefault();
    }
    render() {
        return (
            <div className="container4">

            <form onSubmit={this.showData} className="cont1">
                <div className='form1'>
                    {/* <label htmlFor="">Mobile Number</label>
                    <input type="tel" onInput={this.handleChange} name="MobileNumber"/> */}
                    <h2>Change Password</h2>
                    <label htmlFor="">
                    <span>OldPassword</span> 

                    <input type="password" onInput={this.handleChange} name="OldPassWord" />
                    </label>
                    <label htmlFor="">
                        <span>NewPassword</span> 
                    <input type="password" onInput={this.handleChange} name="NewPassWord" />
                    </label>
                    <button type="submit" className='submit1'>Submit</button>
                    {/* <button><Link to='/AdminDashBoard'>back</Link></button> */}
                </div>
              
            </form>
                    </div>
        )
    }
}
