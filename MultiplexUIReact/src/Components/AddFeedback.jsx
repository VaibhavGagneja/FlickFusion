import React, { useState, useEffect } from "react";
import Axios from 'axios';
import feed from '../Images/feed.jpg';
import { Link, useNavigate } from "react-router-dom";

const AddFeedback = () => {
    const [msg, setMsg] = useState("");
    const [rating, setRating] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const mno = localStorage.getItem("MobileNumber");
    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem("jwtToken");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
    if (!isLoggedIn) {
        // Redirect to the login page if not logged in
        return navigate("/login");
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const feedback = {
            Feedback: msg,
            Rating: rating,
            mobileno: mno,
        };

        Axios.post("http://localhost:5155/api/FeedbackAPI/AddFeedback", feedback, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
        })
            .then(response => {
                if (response.data) {
                    alert("New Feedback Added");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="containerfeed-body">
            <div className="containerfeed">
                <form className="was-validated" onSubmit={handleSubmit}>
                    <div className="row my-1">
                        <div className="col md-5">
                            <img
                                src={feed}
                                width={500}
                                height={350}
                                className="card-img-top"
                                alt="..."
                            />
                        </div>
                        <div className="col md-2">
                            <h2 className="h2"><i>Add New Feedback</i></h2>
                            <br></br>
                            <div className="form-group">
                                <label><b>Feedback</b></label>
                                <br></br>
                                <textarea
                                    type="text"
                                    className="form-Control"
                                    placeholder="Enter Feedback"
                                    required
                                    value={msg}
                                    onChange={event => setMsg(event.target.value)}
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label><b>Rating</b></label>
                                <div>
                                    <input
                                        type="number"
                                        className="form-Control"
                                        placeholder="Enter Rating"
                                        required
                                        value={rating}
                                        onChange={event => setRating(event.target.value)}
                                    />
                                </div>
                            </div>
                            <br></br>
                            <div>
                                <button type="submit" id="submit">Add</button>
                                &nbsp;&nbsp;
                                <button type="reset" id="submit">Reset</button>
                                &nbsp;&nbsp;
                                <Link to="/CustomerDashBoard">
                                    <button id="submit" className=''>Dashboard</button>
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

export default AddFeedback;
