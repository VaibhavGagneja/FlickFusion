import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import feed from '../Images/feed.jpg';
import './stylefeedback.css';
import { Link } from "react-router-dom";
// import '../Home/style.css';
// import NavBar from './navbar';
class AddFeedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            rating: '',
            mno: sessionStorage.getItem("MobileNumber")
        }
    }

    GetData = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    ShowData = (event) => {
        let msg = this.state.msg;
        let rating = this.state.rating;
        let mno = this.state.mno;
        const feedback = {
            Feedback: msg,
            Rating: rating,
            mobileno: mno,
        };
        console.log(feedback);
        Axios.post("http://localhost:5155/api/FeedbackAPI/AddFeedback", feedback).then(
            r => {
                if (r) {
                    alert("New Feedback Added");
                }
            });
        event.preventDefault();
    }
    componentDidMount() {
    }
    render() {

        return (
            <div className="containerfeed-body">
                <div className="containerfeed">
                    <form className="was-validated" onSubmit={this.ShowData}>
                        <div className="row my-1">
                            <div className="col md-5">
                                <img
                                    src={feed}
                                    width={500}
                                    height={350}
                                    className="card-img-top"
                                    alt="..." />
                            </div>
                            <div className="col md-2">
                                <h2 className="h2"><i>Add New Feedback</i></h2>
                                <br></br>
                                <div className="form-group">
                                    <label> <b>Feedback</b>  </label>
                                    <br></br>
                                    <textarea type="text" className="form-Control" placeholder="Enter Feedback"
                                        required name="msg" onInput={this.GetData} />

                                    {/* <div className="invalid-feedback"> Screen Name cannot be blank.</div> */}
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label> <b>Rating</b>  </label>
                                    <div> <input type="number" className="form-Control" placeholder="Enter Rating"
                                        required name="rating" onInput={this.GetData} /></div>
                                    {/* <div className="invalid-feedback"> This field cannot be blank.</div> */}
                                </div>
                                <br></br>


                                <div>
                                    <button type="submit" id="submit">Add </button>
                                    &nbsp;&nbsp;
                                    <button type="reset" id="submit">Reset</button>
                                    &nbsp;&nbsp;
                                    <Link to="/CustomerDashBoard">
                                        <button id="submit" className='' >Dashboard</button>
                                    </Link>
                                </div>
                                <br></br>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );

















    }
}
export default AddFeedback;
