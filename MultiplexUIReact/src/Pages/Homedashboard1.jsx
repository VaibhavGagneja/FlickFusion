import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import React from "react";
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import KGF from "../Images/KGF.jpg";
import Jersey from "../Images/Jersey.jpg";
import Runway from "../Images/Runway.jpg";
import RRR from "../Images/RRR.jpg";
import strange from "../Images/strange.jpg";
import hero from "../Images/hero.jpg";
import pvr1 from "../Images/pvr1.jpg";
import inox1 from "../Images/inox1.jpg";
import carnival1 from "../Images/carnival1.png";
import big1 from "../Images/big1.jpg";
import cine1 from "../Images/cine1.jpg";
import SRS1 from "../Images/SRS1.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homedashboard.css";
import LoginFormUser from "../Components/LoginFormUser";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 5,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
      ],
    };
    return (
      // <Router>
      <div className="container-fluid" id="box">
        {/* <Router> */}
        {/* <main> */}
        <div className="routecontainer">
          <div className="row my-1">
            <h2 id="homeh2"> NEW RELEASES </h2>

            <Slider {...settings}>
              <div
                className="card"
                style={{ width: "150px", height: "210px" }}
                id="card1"
              >
                <img
                  src={KGF}
                  width={150}
                  height={150}
                  className="card-img-top"
                  alt="..."
                />
              <Link to="/Login" style={{textDecoration:'none'}}>
                <div className="card-body">
                  <h5 className="card-title">KGF: Chapter 2</h5>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                    >
                    IMDb - 8.9
                  </a>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                    >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </a>
                </div>
                    </Link>
              </div>
              <div
                className="card"
                style={{ width: "150px", height: "150px" }}
                id="card1"
              >
                <img
                  src={Jersey}
                  width={150}
                  height={150}
                  className="card-img-top"
                  alt="..."
                />
                              <Link to="/Login" style={{textDecoration:'none'}}>

                <div className="card-body">
                  <h5 className="card-title">JERSEY</h5>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                  >
                    IMDb - 7
                  </a>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </a>
                </div>
                </Link>

              </div>
              <div
                className="card"
                style={{ width: "150", height: "150px" }}
                id="card1"
              >
                <img
                  src={Runway}
                  width={150}
                  height={150}
                  className="card-img-top"
                  alt="..."
                />
                              <Link to="/Login" style={{textDecoration:'none'}}>

                <div className="card-body">
                  <h5 className="card-title">RUNWAY 34</h5>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                  >
                    IMDb - 8
                  </a>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </a>
                </div>
                </Link>

              </div>
              <div
                className="card"
                style={{ width: "150", height: "150px" }}
                id="card1"
              >
                <img
                  src={RRR}
                  width={150}
                  height={150}
                  className="card-img-top"
                  alt="..."
                />
                              <Link to="/Login" style={{textDecoration:'none'}}>

                <div className="card-body">
                  <h5 className="card-title">RRR</h5>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                  >
                    IMDb - 8.4
                  </a>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </a>
                </div>
                </Link>

              </div>
              <div
                className="card"
                style={{ width: "150", height: "315px" }}
                id="card1"
              >
                <img
                  src={strange}
                  width={150}
                  height={150}
                  className="card-img-top"
                  alt="..."
                />
                              <Link to="/Login" style={{textDecoration:'none'}}>

                <div className="card-body">
                  <h5 className="card-title">Multiverse of Madness</h5>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                  >
                    IMDb - 7.7
                  </a>
                  <a
                    //href="./Registration.html"
                    className="btn"
                    id="b4"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </a>
                </div>
                </Link>

              </div>
              <div
                className="card"
                style={{ width: "150", height: "150px" }}
                id="card1"
              >
                <img
                  src={hero}
                  width={150}
                  height={150}
                  className="card-img-top"
                  alt="..."
                />
                              <Link to="/Login" style={{textDecoration:'none'}}>

                <div className="card-body">
                  <h5 className="card-title">HEROPANTI 2</h5>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                  >
                    IMDb - 5.4
                  </a>
                  <a
                    // href="./Registration.html"
                    className="btn"
                    id="b4"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </a>
                </div>
                </Link>

              </div>
              <div></div>
            </Slider>
          </div>
          <br></br>
          <br></br>
          <div className="row my-1" id="hdr2">
            <h2 id="homeh2"> MULTIPLEX PARTNERS </h2>
            <br></br>
            <Slider {...settings}>
              <div>
                <img
                  src={pvr1}
                  width={180}
                  height={180}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src={inox1}
                  width={180}
                  height={180}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src={SRS1}
                  width={180}
                  height={180}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src={carnival1}
                  width={180}
                  height={180}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src={big1}
                  width={180}
                  height={180}
                  className="card-img-top"
                  alt="..."
                />
              </div>

              <div>
                <img
                  src={cine1}
                  width={180}
                  height={180}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div></div>
            </Slider>
          </div>
          {/* <Routes>
              
            <Route path='/Login' element={<LoginFormUser />}></Route>
            </Routes> */}
        </div>
        {/* </main> */}
        {/* </Router> */}
        <section id="labels">
          <div className="container-fluid" id="cc2">
            <h2> OFFERS </h2>
            <br></br>

            <div className="row my-1">
              <div className="col-sm-6 col-md-3">
                <div className="dl">
                  <div className="brand">
                    <h2>PVR CiNEMA</h2>
                  </div>
                  <div className="discount alizarin">
                    15%
                    <div className="type"> off</div>
                  </div>
                  <div className="descr">
                    <strong>Buy minimum 4 Tickets to avail this offer.</strong>
                  </div>
                  <div className="ends">
                    <small>* Conditions and restrictions apply.</small>
                  </div>
                  <div className="coupon midnight-blue">
                    <a
                      data-toggle="collapse"
                      href="#code-1"
                      className="open-code"
                    >
                      Use Code - PVR123
                    </a>
                    <div id="code-1" className="collapse code">
                      LV5MAY14
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="dl">
                  <div className="brand">
                    <h2>PAYTM</h2>
                  </div>
                  <div className="discount emerald">
                    100
                    <div className="type">Cashback</div>
                  </div>
                  <div className="descr">
                    <strong>
                      Pay minimum 600 using paytm to avail this offer.
                    </strong>
                  </div>
                  <div className="ends">
                    <small>* Conditions and restrictions apply.</small>
                  </div>
                  <div className="coupon midnight-blue">
                    <a
                      data-toggle="collapse"
                      href="#code-2"
                      className="open-code"
                    >
                      Use Code - PP500
                    </a>
                    <div id="code-2" className="collapse in code">
                      MNO123ST
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="dl">
                  <div className="brand">
                    <h2>SRS CINEMAS</h2>
                  </div>
                  <div className="discount peter-river">
                    1<div className="type">Ticket Free</div>
                  </div>
                  <div className="descr">
                    <strong>Buy minimum 4 tickets to avail this offer.</strong>
                  </div>
                  <div className="ends">
                    <small>* Conditions and restrictions apply.</small>
                  </div>
                  <div className="coupon midnight-blue">
                    <a
                      data-toggle="collapse"
                      href="#code-3"
                      className="open-code"
                    >
                      Use Code - SRS123
                    </a>
                    <div id="code-3" className="collapse code">
                      OLV4SY3R
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="dl">
                  <div className="brand">
                    <h2>INOX CINEMAS</h2>
                  </div>
                  <div className="discount amethyst">
                    Free
                    <div className="type">Popcorn</div>
                  </div>
                  <div className="descr">
                    <strong>
                      Buy minimum 4 premium tickets to awail this offer.
                    </strong>
                  </div>
                  <div className="ends">
                    <small>* Conditions and restrictions apply.</small>
                  </div>
                  <div className="coupon midnight-blue">
                    <a
                      data-toggle="collapse"
                      href="#code-4"
                      className="open-code"
                    >
                      Use Code - CC123
                    </a>
                    <div id="code-4" className="collapse code">
                      ZUY4OPLQ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      // </Router>
    );
  }
}
