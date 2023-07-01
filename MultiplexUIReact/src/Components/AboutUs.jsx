import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";
// import "../Components/aboutus.css";

class AboutUs extends React.Component {
  state = {
    showContent: false,
  };

  componentDidMount() {
    this.setState({ showContent: true });
  }

  render() {
    const { showContent } = this.state;

    return (
      <div className="container-fluid bg-light py-5" id="aboutus">
        <div className="container">
          <h2 className="display-4 text-center mb-5">Welcome to FlickFusion</h2>
          <div className="row">
            <div className="col-lg-6">
              <CSSTransition
                in={showContent}
                timeout={500}
                classNames="fade"
                unmountOnExit
              >
                <div>
                  <h3 className="text-primary mb-4">About Us</h3>
                  <p>
                    FlickFusion is your ultimate destination for hassle-free
                    movie ticket booking. We provide a seamless online platform
                    where movie enthusiasts can easily discover, book, and
                    enjoy their favorite movies. As your trusted movie
                    companion, we have partnered with renowned multiplex chains
                    like PVR and INOX to offer you exclusive deals and
                    discounts.
                  </p>
                  <p>
                    Our user-friendly interface allows multiplex owners to
                    effortlessly showcase their multiplexes, manage screens,
                    and highlight the latest movie releases. With FlickFusion,
                    you can experience the magic of cinema with just a few
                    clicks.
                  </p>
                </div>
              </CSSTransition>
            </div>
            <div className="col-lg-6">
              <CSSTransition
                in={showContent}
                timeout={500}
                classNames="fade"
                unmountOnExit
              >
                <div>
                  <h3 className="text-primary mb-4">Contact Us</h3>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Vaibhav Gagneja</strong>: +919996175577
                    </li>
                    <li>
                      <strong>Mina Shaw</strong>: +918335827340
                    </li>
                    <li>
                      <strong>Sarthak Kalra</strong>: +919759228900
                    </li>
                  </ul>
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
