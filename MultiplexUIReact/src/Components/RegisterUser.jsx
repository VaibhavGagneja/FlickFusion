import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import ReactDOM from "react-dom";
// import "./registerform.css";

// import '../Home/style.css';
// import './loginform.css'


class RegisterUser extends React.Component {
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
    componentDidMount() { }

    render() {
        return (
            <div className="">
                <br></br>
                <form className="was-validated  sign-up" onSubmit={this.ShowData}>
                    <h2 className="h2">Add Members</h2>
                    <br></br>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-Control"
                            placeholder="Enter Your Name"
                            required
                            name="custname"
                            onInput={this.GetData}
                        />
                        <div className="invalid-feedback"> Name cannot be blank.</div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-Control"
                            placeholder="Enter Your Email"
                            required
                            name="email"
                            onInput={this.GetData}
                        />
                        <div className="invalid-feedback">Email cannot be blank.</div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                            type="text"
                            className="form-Control"
                            placeholder="Enter Your Mobile No"
                            required
                            name="mobileno"
                            onInput={this.GetData}
                        />
                        <div className="invalid-feedback">
                            {" "}
                            Mobile Number cannot be blank.
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-Control"
                            placeholder="Enter Your Password"
                            required
                            name="pass"
                            onInput={this.GetData}
                        />
                        <div className="invalid-feedback"> Password cannot be blank.</div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Select UserType</label>
                        <select name="utype" required onInput={this.GetData}>
                            <option value="">Select</option>
                            <option value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                            <option value="Application Owner">Application Owner</option>
                        </select>
                        <div className="invalid-feedback">User Type cannot be blank.</div>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" className="btn btn-success btn-block">
                            Add
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="reset" className="btn btn-danger btn-block">
                            Reset
                        </button>
                    </div>
                    <br></br>
                </form>
            </div>
        );
    }
}
export default RegisterUser;
