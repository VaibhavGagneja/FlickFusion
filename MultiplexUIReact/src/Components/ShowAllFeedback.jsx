import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
// import './stylefeedback.css';
import { Link, } from "react-router-dom";
export default class ShowAllFeedback extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            Feedback: [],

        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5155/api/FeedbackAPI/ShowAllFeebacks").then(r => {
            // http://localhost:5155/api/FeedbackAPI/ShowAllFeebacks
            //console.log(r.data);

            this.setState({ Feedback: r.data });
        })
    }
    Show = (e) => {

        alert('Clicked on this row');
        var rb = document.getElementsByName("rbSelect");
        var table = document.getElementById("test");



        let mno = 0;
        for (var i = 0; i < rb.length; i++) {
            if (rb[i].checked) {

                mno = table.rows[i + 1].cells.item(2).innerHTML;
                table.deleteRow(i + 1);
            }
            console.log(mno);
        }
        alert("Mobile No:" + mno);

        Axios.delete("http://localhost:5155/api/FeedbackAPI/DeleteFeedback/" + mno).then(r => {
            console.log(r);

            if (r) {
                alert("Data Deleted");



            }
        });



    }
    desctype = (e) =>{
        // console.log(localStorage.getItem("RegType"));
        if(localStorage.getItem("RegType") == 'Application Owner'){

        }
    }


    render() {
        return (
            <div className="containerfeed-body">
                <div className="containerfeed">
                    <h1>Show All Feedbacks</h1>
                    <table className="table table-striped " id="test">
                        <thead>
                            <tr >
                                <th >Click to Delete</th>
                                <th>FeedbackId</th>
                                <th>Mobile Number</th>
                                <th>Feedback</th>
                                <th>Rating</th>

                            </tr>
                        </thead>
                        <tbody>

                            {this.state.Feedback.map(x =>
                                <tr className="table-danger">
                                    <td ><input type="radio" style={{ padding: 0, appearance: 'radio' }} name="rbSelect" value="Select" onChange={this.Show} /></td>
                                    <td >{x.feedBackId}</td>
                                    <td id="mno">{x.mobileNo}</td>
                                    <td>{x.feedBack}</td>


                                    <td >{x.rating}</td>



                                </tr>
                            )}
                        </tbody>
                        <Link to="/ApplicationOwnerDashboard">
                        <button onClick={this.desctype} className="btn btn-link">Dashboard</button>
                        </Link>
                    </table>
                    <hr>
                    </hr>

                </div>
            </div>
        );
    }
}