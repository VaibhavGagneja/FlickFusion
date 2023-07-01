import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
// import '../Home/style.css';
// import './stylemultiplex.css';
import multi from '../Images/multiplex.jpg';
import { Link } from "react-router-dom";
class AddMultiplex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mname: '',
            mno: parseInt(sessionStorage.getItem("MobileNumber"))
        }
    }
    GetData = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    ShowData = (event) => {
        let mname = this.state.mname;
        let mno = this.state.mno;
        event.preventDefault();
        const multiplex = {
            multiplexName: mname,
            mobileno: mno,
            Screens: [],
            seatMatrices:[]
        };
        console.log(multiplex);
        Axios.post("http://localhost:5155/api/MultiplexAPI/AddMultiplex", multiplex).then(
            r => {
                console.log(r)
                if (r) {
                    alert("New Multiplex Added");
                }
            });
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="container-body">
                <div className="container">
                    <form className="was-validated" onSubmit={this.ShowData}>
                        <div className="row my-1">
                            <div className="col md-5">
                                <img
                                    src={multi}
                                    width={500}
                                    height={350}
                                    className="card-img-top"
                                    alt="..." />
                            </div>
                            <div className="col md-2">
                                <h2 className="h2"><i>Add New Multiplex</i></h2>
                                <br></br>
                                <div className="form-group">
                                    <label> <b>Multiplex Name</b>  </label>
                                    <br></br>
                                    <input type="text" className="form-Control" placeholder="Enter Multiplex Name"
                                        required name="mname" onInput={this.GetData} />

                                    {/* <div className="invalid-feedback"> Screen Name cannot be blank.</div> */}
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label> <b> Mobile Number</b> </label>
                                    <br></br>
                                    <input type="text" className="form-Control" name="mno" value={this.state.mno} readOnly />
                                </div>

                                <br></br>


                                <div>
                                    <button type="submit" id="submit">Add </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="reset" id="submit">Reset</button>
                                </div>
                                <Link  to="/AdminDashBoard">
                                        <button id="submit" className="">Dashboard</button>
                                    </Link>
                                <br></br>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );



    }
}
export default AddMultiplex;
