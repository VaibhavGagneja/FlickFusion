import React, { Component } from 'react'
import {
    RiFacebookCircleFill,
    RiTwitterFill,
    RiInstagramLine,
    RiLinkedinBoxFill,
  } from "react-icons/ri";
import { Link,BrowserRouter as Router } from 'react-router-dom';
  // import './footer.css'
export class Footer extends Component {
  render() {
    return (
        // <Router>

        <div className="container-fluid" id="f1">
        {/* Footer --> */}
        <footer className="">
          {/* Section: Social media --> */}

          {/* Left --> */}

          <div className="social-media">
            <div className="me-5 d-none d-lg-block">
              <br></br>
              <span>
                <h5 id="ff2">Get connected with us on social networks</h5>
              </span>
            </div>
            <ul>
              <li>
                <RiFacebookCircleFill size={35} color={"#4267B2"} />
              </li>
              <li>
                <RiTwitterFill size={35} color={"#1DA1F2"} />
              </li>
              <li>
                <RiLinkedinBoxFill size={35} color={"#0A66C2"} />
              </li>
              <li>
                <RiInstagramLine size={35} color={"#C13584"} />
              </li>
            </ul>
            <hr />
          </div>

          <div className="">
            {/* Grid row --> */}
            <div className="row mt-3">
              {/* Grid column --> */}
              <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  BOOK MY MOVIE
                </h6>
                <p>
                  Book my movie is online website which helps the customers
                  to book online ticket. If you want to list your multiplex
                  contact us.
                </p>
              </div>
              {/* Grid column --> */}

              {/* Grid column --> */}
              {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links --> */}
              {/* <h6 className="text-uppercase fw-bold mb-4">
                  Products
                  </h6>
                  <p>
                  <Link to="#!" className="text-reset">Angular</Link>
                  </p>
                <p>
                <Link to="#!" className="text-reset">React</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Vue</Link>
                  </p>
                  <p>
                  <Link to="#!" className="text-reset">Laravel</Link>
                  </p>
                </div> */}
              {/* Grid column --> */}

              {/* Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <Link to="/showallfeedbackcust" className="text-reset">
                    Feedback
                  </Link>
                </p>
                <p>
                  <Link to="/AboutUs" className="text-reset">
                    About Us
                  </Link>
                </p>
                {/* <p>
                  <Link to="" className="text-reset">
                    Help
                  </Link>
                </p> */}
                <p>
                  <Link to="#!" className="text-reset">
                    FAQS
                  </Link>
                </p>
              </div>
              {/* Grid column --> */}

              {/* Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  &nbsp; &nbsp; Contact
                </h6>
                <p>
                  <i className="fas fa-home me-3"></i> Bangalore, 56002, IND
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  bookmymovie@rediffmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +91 9759228900
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> +91 9876543210
                </p>
              </div>
              {/* Grid column --> */}
            </div>
            {/* Grid row --> */}
          </div>

          {/* Section: Links  --> */}

          {/* Copyright --> */}
          <div className="text-center p-4">
            © 2022 Copyright: BOOK MY MOVIE
            {/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
          </div>
          {/* Copyright --> */}
        </footer>
        {/* Footer --> */}
      </div>
                // </Router>
        )
  }
}

export default Footer