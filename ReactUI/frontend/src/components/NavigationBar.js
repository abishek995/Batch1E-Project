import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NavigationBar.css';


const NavigationBar = (props) => {
  return (
    <Navbar className="nav" >
      <Navbar.Brand href="/">GASS BANK</Navbar.Brand>

      <Nav className="mr-auto">
        <Link to="/" className="homehover">HOME</Link>
      </Nav>
      
      <nav class="navbar navbar-default">
      
    </nav>
      <div class="dropdown">
      <button class="btn btn-primary " type="button"><Link to="/applynew" > <span>Apply Now</span></Link>
      </button></div>
      <div class="dropdown">
      <button class="btn btn-primary " type="button"><Link to="/custlogin" > <span>Login </span></Link>
      </button>
      
      
    </div> 
      <Nav className="navbar-right">
        <Link to="/adminlogin" className="nav-link">
          Admin Login
        </Link>
        
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
