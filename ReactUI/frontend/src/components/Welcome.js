import React, { Component } from "react";

import { Card, Container } from "react-bootstrap";
import Slideshow from "./slideshow";
import { Link } from "react-router-dom";
import './Welcome.css'
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import { IconButton } from "@material-ui/core";

class Welcome extends Component {
  render() {
    return (
      <Container className="mainbg">
        <Slideshow/>
    

     
     
      
        <div>
          <div className="row">
            <div className="col-sm-3">
              {" "}
              <Card className="loginbox">
                <Card.Body>
                  <Card.Title>Login to Net-Banking</Card.Title>
                  <Card.Text>
                    <div>
                      <Link to="/custlogin" className="nav-link">
                        Login Now
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-3 ">
              <Card className="registerbox">
                <Card.Body>
                  <Card.Title>New To Net-Banking?</Card.Title>
                  <Card.Text>
                    <div>
                      <Link
                        to="/custRegister"
                        className="nav-link text-justify"
                      >
                        Register Here
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br />
          <br />
        </div>
        
      </Container>
    );
  }
}
export default Welcome;
