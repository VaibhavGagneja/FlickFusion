import React, { useState, useEffect } from "react";
import { Link, useNavigate, } from "react-router-dom";
import Axios from 'axios';

const ShowAllMultiplex = () => {
    const [multiplex, setMultiplex] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem("jwtToken");
        if (token) {
            setIsLoggedIn(true);
        }

        Axios.get("http://localhost:5155/api/MultiplexAPI/ShowAllMultiplex", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                setMultiplex(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSelectMultiplex = (multiplexId) => {
        localStorage.setItem("MultiplexId", multiplexId);
    };

    if (!isLoggedIn) {
        // Redirect to the login page if not logged in
        return navigate("/login");
    }

    return (
        <div className="container-body" id="showallmm">
            <div className="container" id="showmm">
                <h1>Multiplex </h1>
                <table className="table tabble-striped" id="tablemultiplex">
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Multiplex Name</th>
                            <th>Click to Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {multiplex.map((x) => (
                            <tr className="text-black" key={x.multiplexId}>
                                <td id="mid">{x.multiplexId}</td>
                                <td>{x.multiplexName}</td>
                                <td>
                                    <input
                                        type="radio"
                                        style={{ padding: 0, appearance: "radio" }}
                                        name="rbSelect"
                                        value="Select"
                                        onChange={() => handleSelectMultiplex(x.multiplexId)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/CustomerDashBoard">
                    <button className="btn btn-dark">Dashboard</button>
                </Link>
                <hr />
            </div>
        </div>
    );
};

export default ShowAllMultiplex;
