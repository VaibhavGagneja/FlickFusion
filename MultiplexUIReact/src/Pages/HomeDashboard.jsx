import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../Components/Home.css";
import KGF from "../Images/KGF.jpg";
import Jersey from "../Images/Jersey.jpg";
import Runway from "../Images/Runway.jpg";
import RRR from "../Images/RRR.jpg";
import strange from "../Images/strange.jpg";
import hero from "../Images/hero.jpg";
import head from "../Images/head.jpg";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import LoginFormUser from "../Components/LoginFormUser";
import RegisterUser2 from "../Components/RegisterUser2";

class HomeDashboard extends React.Component {
  render() {
    return (
      <div className="Container-fluid" id="box">
        <div className="row my-1">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" id="row1">
              <h3 id="s3">
                <img src={head} width={75} height={75} alt="Logo" /> &nbsp; BOOK MY MOVIE
              </h3>
              <ul className="navbar-nav mr-auto " id="nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    // href="#"
                    id="s3"
                  >
                    <h5>Home</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    // href="#"
                    id="s3"
                  >
                    <h5>About Us</h5>
                  </a>
                </li>
                <button className="btn btn-secondary" type="" id="b1">
                  <Link to="/adduser">Register</Link>
                </button>
                <div> </div>
                <button className="btn btn-secondary" type="" id="b1">
                  <Link to="/Login">Login</Link>
                </button>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row my-1" id="rownew">
          <div className="col-md-12" id="new">
            <h3>NEW RELEASES</h3>
            <br />
          </div>
        </div>
        <div className="row my-1" id="row2">
          <div className="col-md-3" id="m1">
            <div
              className="card"
              style={{ width: "300px", height: "310px" }}
              id="card1"
            >
              <img
                src={KGF}
                width={300}
                height={200}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">KGF: Chapter 2</h5>
                <a
                  className="btn btn-warning"
                  id="b4"
                >
                  IMDb - 8.9
                </a>
                <a
                  className="btn btn-warning"
                  id="b4"
                >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </a>
                <a
                  className="btn btn-warning"
                  id="b4"
                >
                  <FaHeart />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3" id="m1">
            <div
              className="card"
              style={{ width: "300px", height: "310px" }}
              id="card1"
            >
              <img
                src={Jersey}
                width={300}
                height={200}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">JERSEY</h5>
                <a
                  className="btn btn-warning"
                  id="b4"
                >
                  IMDb - 7
                </a>
                <a
                  className="btn btn-warning"
                  id="b4"
                >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </a>
                <a
                  className="btn btn-warning"
                  id="b4"
                >
                  <FaHeart />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3" id="m1">
            <div
              className="card"
              style={{ width: "300px", height: "310px" }}
              id="card1"
            >
              <img
                src={Runway}
                width={300}
                height={200}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">RUNWAY 34</h5>
                <a
                  className="btn btn-warning"
                  id="b4"
                >
                  IMDb - 8
                </a>
                <a
                  className="btn btn-warning"
                  id="b4"
                >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </a>
                <a
                  className="btn btn-warning"
                  id="b4"
                >
                  <FaHeart />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-1" id="row3">
          <div className="row my-1" id="row2">
            <div className="col-md-3" id="m4">
              <div
                className="card"
                style={{ width: "300px", height: "310px" }}
                id="card1"
              >
                <img
                  src={RRR}
                  width={300}
                  height={200}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">RRR</h5>
                  <a
                    className="btn btn-warning"
                    id="b4"
                  >
                    IMDb - 8.4
                  </a>
                  <a
                    className="btn btn-warning"
                    id="b4"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </a>
                  <a
                    className="btn btn-warning"
                    id="b4"
                  >
                    <FaHeart />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3" id="m5">
              <div
                className="card"
                style={{ width: "300px", height: "315px" }}
                id="card1"
              >
                <img
                  src={strange}
                  width={300}
                  height={200}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Multiverse of Madness</h5>
                  <a
                    className="btn btn-warning"
                    id="b4"
                  >
                    IMDb - 7.7
                  </a>
                  <a
                    className="btn btn-warning"
                    id="b4"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </a>
                  <a
                    className="btn btn-warning"
                    id="b4"
                  >
                    <FaHeart />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3" id="m6">
              <div
                className="card"
                style={{ width: "300px", height: "310px" }}
                id="card1"
              >
                <img
                  src={hero}
                  width={290}
                  height={200}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">HEROPANTI 2</h5>
                  <a
                    className="btn btn-warning"
                    id="b4"
                  >
                    IMDb - 5.4
                  </a>
                  <a
                    className="btn btn-warning"
                    id="b4"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </a>
                  <a
                    className="btn btn-warning"
                    id="b4"
                  >
                    <FaHeart />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-1" id="row4">
            <div className="col-md-12" id="row4">
              <p>
                &copy; BOOK MY MOVIE{" "}
                <span className="s1">
                  <p>
                    {" "}
                    FAQS &nbsp; | &nbsp; Terms and Conditions &nbsp; | &nbsp;
                    NEED HELP &nbsp; &nbsp;{" "}
                  </p>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeDashboard;
