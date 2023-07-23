import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import head from '../Images/logo.png';

const NavBarConditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg text-dark px-2" style={{ backgroundColor: '#ebe0f6'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={head} width={100} height={100} alt="Logo" />
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AboutUs">About Us</Link>
          </li>
          {isLoggedIn ? (
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBarConditional;
